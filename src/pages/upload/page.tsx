import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';

interface ProofData {
  filename: string;
  hash: string;
  timestamp: string;
  fileSize: number;
  proofId?: string;
  blockchainTimestamp?: string;
  verificationText?: string;
}

// Client-side rate limiting
const RATE_LIMIT_KEY = 'proofdeed_upload_attempts';
const RATE_LIMIT_TIMESTAMP_KEY = 'proofdeed_upload_timestamp';
const MAX_ATTEMPTS = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function checkRateLimit(): { allowed: boolean; remaining: number; resetTime: number | null } {
  const now = Date.now();
  const attemptsStr = localStorage.getItem(RATE_LIMIT_KEY);
  const timestampStr = localStorage.getItem(RATE_LIMIT_TIMESTAMP_KEY);
  
  if (!attemptsStr || !timestampStr) {
    return { allowed: true, remaining: MAX_ATTEMPTS, resetTime: null };
  }
  
  const attempts = parseInt(attemptsStr, 10);
  const timestamp = parseInt(timestampStr, 10);
  const timePassed = now - timestamp;
  
  // Reset if window has passed
  if (timePassed >= RATE_LIMIT_WINDOW) {
    localStorage.removeItem(RATE_LIMIT_KEY);
    localStorage.removeItem(RATE_LIMIT_TIMESTAMP_KEY);
    return { allowed: true, remaining: MAX_ATTEMPTS, resetTime: null };
  }
  
  // Check if limit exceeded
  if (attempts >= MAX_ATTEMPTS) {
    const resetTime = timestamp + RATE_LIMIT_WINDOW;
    return { allowed: false, remaining: 0, resetTime };
  }
  
  return { allowed: true, remaining: MAX_ATTEMPTS - attempts, resetTime: timestamp + RATE_LIMIT_WINDOW };
}

function incrementRateLimit() {
  const now = Date.now();
  const attemptsStr = localStorage.getItem(RATE_LIMIT_KEY);
  const timestampStr = localStorage.getItem(RATE_LIMIT_TIMESTAMP_KEY);
  
  if (!attemptsStr || !timestampStr) {
    localStorage.setItem(RATE_LIMIT_KEY, '1');
    localStorage.setItem(RATE_LIMIT_TIMESTAMP_KEY, now.toString());
  } else {
    const attempts = parseInt(attemptsStr, 10);
    localStorage.setItem(RATE_LIMIT_KEY, (attempts + 1).toString());
  }
}

export default function UploadPage() {
  const [scrolled, setScrolled] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [proofData, setProofData] = useState<ProofData | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [rateLimitInfo, setRateLimitInfo] = useState<{ remaining: number; resetTime: number | null }>({ remaining: MAX_ATTEMPTS, resetTime: null });

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Check rate limit on mount
    const limitCheck = checkRateLimit();
    setRateLimitInfo({ remaining: limitCheck.remaining, resetTime: limitCheck.resetTime });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const generateHash = async (file: File): Promise<string> => {
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  };

  const sendEmailWithProof = async (proofData: ProofData, userEmail: string) => {
    const formData = new URLSearchParams();
    formData.append('email', userEmail);
    formData.append('subject', 'Your ProofDeed Verification Report');
    formData.append('proofId', proofData.proofId || 'N/A');
    formData.append('documentHash', proofData.hash);
    formData.append('timestamp', proofData.blockchainTimestamp || proofData.timestamp);
    formData.append('verificationStatement', 'This confirms the document fingerprint existed at the stated time.');
    formData.append('verifyLink', 'https://proofdeed.com/');
    formData.append('disclaimer', 'ProofDeed provides cryptographic timestamp verification only.');

    try {
      const response = await fetch('https://readdy.ai/api/form/d5nj1fd9d5134kphbeo0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      
      setEmailSent(true);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleFileSelect = async (selectedFile: File) => {
    // Email validation - more specific error message
    if (!email) {
      setError('Email address is required to deliver your proof certificate.');
      return;
    }
    
    if (!email.includes('@') || !email.includes('.') || email.length < 5) {
      setError('Please enter a valid email address to receive your proof certificate.');
      return;
    }

    // Check client-side rate limit
    const limitCheck = checkRateLimit();
    if (!limitCheck.allowed) {
      const resetTime = limitCheck.resetTime ? new Date(limitCheck.resetTime) : null;
      const resetTimeStr = resetTime ? resetTime.toLocaleTimeString() : 'soon';
      setError(`Beta usage limit reached. Please try again after ${resetTimeStr}.`);
      return;
    }

    setFile(selectedFile);
    setIsProcessing(true);
    setProofData(null);
    setError(null);
    setEmailSent(false);

    try {
      // Generate hash locally
      const hash = await generateHash(selectedFile);
      const timestamp = new Date().toISOString();

      // Send hash to backend
      const response = await fetch('https://whale-app-9azz6.ondigitalocean.app/create-proof', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          documentHash: hash
        })
      });

      // Handle 429 rate limit from backend
      if (response.status === 429) {
        throw new Error('Beta usage limit reached. Please try again later.');
      }

      if (!response.ok) {
        throw new Error(`Backend error: ${response.status}`);
      }

      const backendData = await response.json();

      const proof: ProofData = {
        filename: selectedFile.name,
        hash: hash,
        timestamp: timestamp,
        fileSize: selectedFile.size,
        proofId: backendData.proofId,
        blockchainTimestamp: backendData.timestamp,
        verificationText: backendData.verificationText || 'Your document has been successfully timestamped on the blockchain.'
      };

      setProofData(proof);
      
      // Increment client-side rate limit counter
      incrementRateLimit();
      const newLimitCheck = checkRateLimit();
      setRateLimitInfo({ remaining: newLimitCheck.remaining, resetTime: newLimitCheck.resetTime });
      
      // Send email with proof details
      await sendEmailWithProof(proof, email);
    } catch (error) {
      console.error('Error processing document:', error);
      setError(error instanceof Error ? error.message : 'Error processing document. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleFileSelect(selectedFile);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      handleFileSelect(droppedFile);
    }
  };

  const downloadProofReport = () => {
    if (!proofData) return;

    const reportContent = `
PROOFDEED DOCUMENT PROOF REPORT
================================

Document Information:
--------------------
Filename: ${proofData.filename}
File Size: ${(proofData.fileSize / 1024).toFixed(2)} KB
Processing Date: ${new Date(proofData.timestamp).toLocaleString()}

Cryptographic Proof:
-------------------
SHA-256 Hash: ${proofData.hash}

Timestamp: ${proofData.timestamp}

${proofData.proofId ? `Proof ID: ${proofData.proofId}` : ''}
${proofData.blockchainTimestamp ? `Blockchain Timestamp: ${proofData.blockchainTimestamp}` : ''}

Verification:
-------------
${proofData.verificationText || 'Your document has been successfully timestamped.'}

How ProofDeed Works:
-------------------
1. Hash Generated Locally
   Your document was processed entirely in your browser using SHA-256 
   cryptographic hashing. The file never left your device.

2. Blockchain Verification
   This hash + timestamp has been permanently recorded on the blockchain,
   providing immutable proof.

3. Downloadable Proof Report
   This report helps you prove document integrity. Keep it with your 
   original document for future verification.

Verification Instructions:
-------------------------
1. Keep this report and your original document secure
2. To verify document integrity later:
   - Generate SHA-256 hash of your document
   - Compare with hash above
   - If hashes match, document is unchanged

3. You can verify the blockchain timestamp using your Proof ID

Security Notes:
--------------
- ProofDeed never stores your documents
- Only the cryptographic hash is recorded
- This hash cannot be reversed to recreate your document
- Any change to the document will produce a different hash

Legal Disclaimer:
----------------
ProofDeed provides cryptographic proof that a document fingerprint 
existed at a specific time. ProofDeed does not store documents, 
does not verify document authenticity, and does not provide legal 
advice. Users are responsible for how proofs are used.

ProofDeed provides cryptographic timestamp verification only. 
ProofDeed is not a law firm, title company, or escrow service. 
No documents are stored.

---
Generated by ProofDeed
U.S.-Based Document Integrity Service
https://proofdeed.com
`;

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ProofDeed_${proofData.filename}_${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadProofPDF = () => {
    if (!proofData) return;

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - 2 * margin;
    let yPos = 20;

    // Header - ProofDeed Logo Text
    doc.setFontSize(24);
    doc.setTextColor(51, 65, 85); // slate-900
    doc.text('ProofDeed', margin, yPos);
    yPos += 15;

    // Title
    doc.setFontSize(18);
    doc.setTextColor(30, 58, 138); // blue-900
    doc.text('Proof of Document Integrity', margin, yPos);
    yPos += 15;

    // Divider line
    doc.setDrawColor(226, 232, 240); // slate-200
    doc.setLineWidth(0.5);
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 10;

    // Document Information Section
    doc.setFontSize(14);
    doc.setTextColor(51, 65, 85);
    doc.text('Document Information', margin, yPos);
    yPos += 8;

    doc.setFontSize(10);
    doc.setTextColor(71, 85, 105); // slate-600
    
    doc.text('Filename:', margin, yPos);
    doc.text(proofData.filename, margin + 40, yPos);
    yPos += 7;

    doc.text('File Size:', margin, yPos);
    doc.text(`${(proofData.fileSize / 1024).toFixed(2)} KB`, margin + 40, yPos);
    yPos += 7;

    doc.text('Processing Date:', margin, yPos);
    doc.text(new Date(proofData.timestamp).toUTCString(), margin + 40, yPos);
    yPos += 15;

    // Cryptographic Proof Section
    doc.setFontSize(14);
    doc.setTextColor(51, 65, 85);
    doc.text('Cryptographic Proof', margin, yPos);
    yPos += 8;

    doc.setFontSize(10);
    doc.setTextColor(71, 85, 105);
    
    doc.text('SHA-256 Hash:', margin, yPos);
    yPos += 7;
    
    // Split hash into multiple lines for readability
    doc.setFont(undefined, 'normal');
    const hashLines = doc.splitTextToSize(proofData.hash, contentWidth - 10);
    doc.text(hashLines, margin + 5, yPos);
    yPos += hashLines.length * 5 + 8;

    // Proof ID Section
    if (proofData.proofId) {
      doc.setFont(undefined, 'bold');
      doc.text('Proof ID:', margin, yPos);
      yPos += 7;
      doc.setFont(undefined, 'normal');
      const proofIdLines = doc.splitTextToSize(proofData.proofId, contentWidth - 10);
      doc.text(proofIdLines, margin + 5, yPos);
      yPos += proofIdLines.length * 5 + 8;
    }

    // Blockchain Timestamp
    if (proofData.blockchainTimestamp) {
      doc.setFont(undefined, 'bold');
      doc.text('Blockchain Timestamp (UTC):', margin, yPos);
      yPos += 7;
      doc.setFont(undefined, 'normal');
      doc.text(new Date(proofData.blockchainTimestamp).toUTCString(), margin + 5, yPos);
      yPos += 10;
    }

    // Verification Statement Section
    doc.setFontSize(14);
    doc.setTextColor(51, 65, 85);
    doc.setFont(undefined, 'bold');
    doc.text('Verification Statement', margin, yPos);
    yPos += 8;

    doc.setFontSize(10);
    doc.setTextColor(71, 85, 105);
    doc.setFont(undefined, 'normal');
    
    const verificationText = 'This confirms the document fingerprint existed at the stated time.';
    
    const verificationLines = doc.splitTextToSize(verificationText, contentWidth);
    doc.text(verificationLines, margin, yPos);
    yPos += verificationLines.length * 5 + 10;

    // Backend URL
    doc.setFont(undefined, 'bold');
    doc.text('Verification URL:', margin, yPos);
    yPos += 7;
    doc.setFont(undefined, 'normal');
    doc.setTextColor(37, 99, 235); // blue-600
    doc.text('https://proofdeed.com/', margin + 5, yPos);
    yPos += 12;

    // Divider line
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.5);
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 8;

    // Disclaimer Section
    doc.setFontSize(12);
    doc.setTextColor(51, 65, 85);
    doc.setFont(undefined, 'bold');
    doc.text('Legal Disclaimer', margin, yPos);
    yPos += 8;

    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105);
    doc.setFont(undefined, 'normal');
    
    const disclaimerText = 'ProofDeed provides cryptographic timestamp verification only. ProofDeed is not a law firm, title company, or escrow service. No documents are stored.';
    
    const disclaimerLines = doc.splitTextToSize(disclaimerText, contentWidth);
    doc.text(disclaimerLines, margin, yPos);
    yPos += disclaimerLines.length * 4 + 10;

    // Footer
    const footerY = pageHeight - 20;
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184); // slate-400
    doc.text('Generated by ProofDeed', margin, footerY);
    doc.text('https://proofdeed.com', pageWidth - margin - 40, footerY);
    
    doc.setFontSize(7);
    doc.text(`Generated: ${new Date().toUTCString()}`, margin, footerY + 5);

    // Save the PDF
    doc.save(`ProofDeed_${proofData.filename}_${Date.now()}.pdf`);
  };

  const resetUpload = () => {
    setFile(null);
    setProofData(null);
    setError(null);
    setEmail('');
    setEmailSent(false);
  };

  const formatResetTime = (resetTime: number | null) => {
    if (!resetTime) return '';
    const now = Date.now();
    const diff = resetTime - now;
    const minutes = Math.ceil(diff / 60000);
    if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
    }
    const hours = Math.ceil(minutes / 60);
    return `${hours} hour${hours !== 1 ? 's' : ''}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Beta Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold">Live</span>
          </div>
          <span className="text-white/60">•</span>
          <span className="text-sm font-medium">Blockchain timestamping active</span>
          <span className="text-white/60">•</span>
          <span className="text-sm">Create tamper-proof document proof now</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-white'} mt-10`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center">
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20cybersecurity%20concept%20with%20digital%20padlock%20and%20shield%20protecting%20data%2C%20glowing%20blue%20security%20icons%20and%20encryption%20symbols%2C%20abstract%20technology%20background%20representing%20document%20security%20and%20data%20protection%2C%20professional%20corporate%20security%20aesthetic%20with%20depth&width=800&height=600&seq=proofdeed-security-001&orientation=landscape"
                  alt="ProofDeed Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl font-bold text-slate-900">ProofDeed</h1>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-34 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <i className="ri-shield-check-line text-blue-600"></i>
              <span className="text-sm font-medium text-blue-900">Secure Local Processing + Blockchain Timestamping</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Create Document Proof
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Upload your document to generate a cryptographic hash and blockchain timestamp. Your document never leaves your browser.
            </p>
          </div>

          {/* How It Works - 3 Steps */}
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 mb-8 border border-blue-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">How ProofDeed Works</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 font-bold text-lg">
                  1
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Hash Generated Locally</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Your document is processed entirely in your browser using SHA-256 cryptographic hashing
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 font-bold text-lg">
                  2
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Blockchain Timestamping</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Hash is sent to our backend for permanent blockchain recording with timestamp
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 font-bold text-lg">
                  3
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Downloadable Proof</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Receive proof report with hash, timestamp, and verification instructions
                </p>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-8">
              <div className="flex items-center space-x-3">
                <i className="ri-error-warning-line text-2xl text-red-600"></i>
                <div>
                  <h3 className="text-lg font-bold text-red-900 mb-1">Processing Error</h3>
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Email Input & Upload Area */}
          {!proofData && (
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 mb-8">
              {/* Email Input Form - Required for All Proofs */}
              <form id="proof-email-form" data-readdy-form className="mb-8">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                  <label htmlFor="email" className="block text-base font-semibold text-slate-900 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <p className="text-sm text-slate-600 mb-4">
                    Your email is required to deliver your proof certificate and enable future verification.<br />
                    We do not store or modify your documents.
                  </p>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 text-sm border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>
              </form>

              {/* Upload Area */}
              <div
                className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all ${
                  dragActive ? 'border-blue-500 bg-blue-50' : 'border-slate-300 bg-slate-50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {isProcessing ? (
                  <div className="py-8">
                    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-lg font-semibold text-slate-900 mb-2">Processing Document...</p>
                    <p className="text-sm text-slate-600">Generating hash and creating blockchain timestamp</p>
                  </div>
                ) : (
                  <>
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="ri-upload-cloud-line text-4xl text-blue-600"></i>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Drop your document here
                    </h3>
                    <p className="text-slate-600 mb-6">
                      or click to browse files
                    </p>
                    <input
                      type="file"
                      id="file-upload"
                      className="hidden"
                      onChange={handleFileInput}
                      accept=".pdf,.doc,.docx,.txt"
                    />
                    <label
                      htmlFor="file-upload"
                      className="inline-block px-8 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Select Document
                    </label>
                    <p className="text-xs text-slate-500 mt-6">
                      Supported formats: PDF, DOC, DOCX, TXT
                    </p>
                  </>
                )}
              </div>

              {/* Rate Limit Info */}
              {rateLimitInfo.remaining < MAX_ATTEMPTS && rateLimitInfo.remaining > 0 && (
                <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <i className="ri-information-line text-amber-600"></i>
                    <p className="text-sm text-amber-800">
                      <strong>{rateLimitInfo.remaining}</strong> proof creation{rateLimitInfo.remaining !== 1 ? 's' : ''} remaining in this session. 
                      {rateLimitInfo.resetTime && ` Resets in ${formatResetTime(rateLimitInfo.resetTime)}.`}
                    </p>
                  </div>
                </div>
              )}

              {/* Security Notice */}
              <div className="mt-8 bg-slate-50 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-shield-check-line text-sm text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Your Privacy is Protected</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Documents are processed entirely in your browser</li>
                      <li>• No files are uploaded to any server</li>
                      <li>• Only the cryptographic hash is sent for timestamping</li>
                      <li>• Your document never leaves your device</li>
                      <li>• Email is used only to deliver your proof certificate</li>
                      <li>• Beta usage limits apply to prevent abuse</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Proof Results */}
          {proofData && (
            <div className="space-y-6">
              {/* Success Message with Email Confirmation */}
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-2xl text-green-600"></i>
                  </div>
                  <h3 className="text-xl font-bold text-green-900">Proof Created Successfully</h3>
                </div>
                <p className="text-sm text-green-800 ml-13 mb-2">
                  Your document has been hashed locally and timestamped on the blockchain.
                </p>
                {emailSent && (
                  <div className="ml-13 flex items-center space-x-2 mt-3 bg-green-100 rounded-lg p-3 inline-flex">
                    <i className="ri-mail-check-line text-green-600"></i>
                    <p className="text-sm font-semibold text-green-800">
                      Proof certificate has been sent to {email}
                    </p>
                  </div>
                )}
              </div>

              {/* Proof ID & Verification */}
              {proofData.proofId && (
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-fingerprint-line text-xl text-blue-600"></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-blue-900 mb-2">Proof ID</h3>
                      <code className="text-sm font-mono text-blue-800 break-all">{proofData.proofId}</code>
                      {proofData.blockchainTimestamp && (
                        <p className="text-sm text-blue-800 mt-3">
                          <strong>Blockchain Timestamp:</strong> {new Date(proofData.blockchainTimestamp).toUTCString()}
                        </p>
                      )}
                      {proofData.verificationText && (
                        <p className="text-sm text-blue-800 mt-3">{proofData.verificationText}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Document Info */}
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Document Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start justify-between py-3 border-b border-slate-100">
                    <span className="text-sm font-semibold text-slate-700">Filename:</span>
                    <span className="text-sm text-slate-900 font-mono text-right break-all ml-4">{proofData.filename}</span>
                  </div>
                  <div className="flex items-start justify-between py-3 border-b border-slate-100">
                    <span className="text-sm font-semibold text-slate-700">File Size:</span>
                    <span className="text-sm text-slate-900">{(proofData.fileSize / 1024).toFixed(2)} KB</span>
                  </div>
                  <div className="flex items-start justify-between py-3 border-b border-slate-100">
                    <span className="text-sm font-semibold text-slate-700">Processing Date:</span>
                    <span className="text-sm text-slate-900">{new Date(proofData.timestamp).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Hash Display */}
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i className="ri-fingerprint-line text-xl text-blue-600"></i>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">SHA-256 Hash</h3>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  This unique cryptographic fingerprint represents your document. Any change to the document will produce a completely different hash.
                </p>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <code className="text-xs font-mono text-slate-900 break-all leading-relaxed">
                    {proofData.hash}
                  </code>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={downloadProofPDF}
                  className="flex-1 px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-md whitespace-nowrap cursor-pointer flex items-center justify-center space-x-2"
                >
                  <i className="ri-file-pdf-line text-xl"></i>
                  <span>Download Proof Report (PDF)</span>
                </button>
                <button
                  onClick={resetUpload}
                  className="flex-1 px-8 py-4 text-base font-semibold text-slate-700 bg-white border-2 border-slate-300 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center space-x-2"
                >
                  <i className="ri-refresh-line text-xl"></i>
                  <span>Process Another Document</span>
                </button>
              </div>

              {/* Legal Notice on Proof Results */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mt-6">
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Legal Notice:</strong> ProofDeed provides cryptographic proof that a document fingerprint existed at a specific time. ProofDeed does not store documents, does not verify document authenticity, and does not provide legal advice. Users are responsible for how proofs are used.
                </p>
              </div>
            </div>
          )}

          {/* How It Works - Detailed */}
          <div className="mt-16 bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Understanding the Process</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-computer-line text-xl text-blue-600"></i>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">1. Local Processing</h4>
                <p className="text-sm text-slate-600">
                  Your document is processed entirely in your browser using SHA-256 algorithm. The file never leaves your device.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-links-line text-xl text-blue-600"></i>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">2. Blockchain Recording</h4>
                <p className="text-sm text-slate-600">
                  Hash is sent to our backend for permanent blockchain verification with immutable timestamp.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-file-text-line text-xl text-blue-600"></i>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">3. Proof Report</h4>
                <p className="text-sm text-slate-600">
                  Download your proof report with hash, timestamp, and verification instructions to prove document integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">About Us</Link></li>
                <li><Link to="/privacy" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/verify" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">Verify a Document</Link></li>
                <li><Link to="/how-it-works" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">How ProofDeed Works</Link></li>
                <li><Link to="/faq" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">FAQ</Link></li>
                <li><span className="text-sm text-slate-400 cursor-default block leading-relaxed">API Documentation <span className="text-xs">(Coming Soon)</span></span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-3">Contact</h3>
              <ul className="space-y-2">
                <li><a href="mailto:info@proofdeed.com" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">info@proofdeed.com</a></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mb-6">
            <p className="text-sm font-semibold text-slate-800 leading-relaxed">
              Independent, Verifiable Proof — No Document Storage
            </p>
          </div>
          
          <div className="border-t border-slate-300 pt-6 mb-6">
            <p className="text-xs text-slate-600 leading-relaxed text-center max-w-4xl mx-auto">
              <strong>Disclaimer:</strong> ProofDeed provides cryptographic timestamp verification only. ProofDeed is not a law firm, title company, or escrow service. No records are stored.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 text-center md:text-left leading-relaxed">© 2024 ProofDeed. All rights reserved.</p>
            <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-blue-600 transition-colors cursor-pointer leading-relaxed">
              Website Builder
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
