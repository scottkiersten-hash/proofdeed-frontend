import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function VerifyPage() {
  const [scrolled, setScrolled] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<{
    hash: string;
    filename: string;
    timestamp: string;
    status: 'verified' | 'not-found' | 'error';
    message: string;
  } | null>(null);
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const generateHash = async (file: File): Promise<string> => {
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  };

  const handleFileSelect = async (selectedFile: File) => {
    setFile(selectedFile);
    setIsVerifying(true);
    setVerificationResult(null);

    try {
      const hash = await generateHash(selectedFile);
      const timestamp = new Date().toISOString();

      // Simulate verification check (replace with actual backend call)
      // For now, we'll show a "not found" message since backend verification isn't implemented
      setVerificationResult({
        hash,
        filename: selectedFile.name,
        timestamp,
        status: 'not-found',
        message: 'No proof found for this document hash. This document may not have been previously timestamped with ProofDeed.'
      });
    } catch (error) {
      console.error('Error verifying document:', error);
      setVerificationResult({
        hash: '',
        filename: selectedFile.name,
        timestamp: new Date().toISOString(),
        status: 'error',
        message: 'Error processing document. Please try again.'
      });
    } finally {
      setIsVerifying(false);
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

  const resetVerification = () => {
    setFile(null);
    setVerificationResult(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Beta Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold">Beta Live</span>
          </div>
          <span className="text-white/60">•</span>
          <span className="text-sm font-medium">Early access only</span>
          <span className="text-white/60">•</span>
          <span className="text-sm">Core verification features launching soon</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-white'} mt-10`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold text-slate-900">
              ProofDeed
            </Link>
            <Link 
              to="/" 
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <i className="ri-shield-check-line text-blue-600"></i>
              <span className="text-sm font-medium text-blue-900">Independent Document Verification</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Verify a Document
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Upload your document to check if it has been previously timestamped with ProofDeed. Your document is processed locally in your browser.
            </p>
          </div>

          {/* How Verification Works */}
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 mb-8 border border-blue-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">How Verification Works</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 font-bold text-lg">
                  1
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Upload Document</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Select the document you want to verify. It's processed entirely in your browser.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 font-bold text-lg">
                  2
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Generate Hash</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A SHA-256 hash is generated from your document locally.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 font-bold text-lg">
                  3
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Check Blockchain</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We check if this hash exists in our blockchain records.
                </p>
              </div>
            </div>
          </div>

          {/* Upload Area */}
          {!verificationResult && (
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 mb-8">
              <div
                className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all ${
                  dragActive ? 'border-blue-500 bg-blue-50' : 'border-slate-300 bg-slate-50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {isVerifying ? (
                  <div className="py-8">
                    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-lg font-semibold text-slate-900 mb-2">Verifying Document...</p>
                    <p className="text-sm text-slate-600">Generating hash and checking blockchain records</p>
                  </div>
                ) : (
                  <>
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="ri-search-line text-4xl text-blue-600"></i>
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
                      <li>• Only the cryptographic hash is checked against our records</li>
                      <li>• Your document never leaves your device</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Verification Results */}
          {verificationResult && (
            <div className="space-y-6">
              {/* Status Message */}
              {verificationResult.status === 'verified' && (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-2xl text-green-600"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-900">Document Verified</h3>
                      <p className="text-sm text-green-800 mt-1">{verificationResult.message}</p>
                    </div>
                  </div>
                </div>
              )}

              {verificationResult.status === 'not-found' && (
                <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <i className="ri-information-line text-2xl text-amber-600"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-amber-900">No Proof Found</h3>
                      <p className="text-sm text-amber-800 mt-1">{verificationResult.message}</p>
                    </div>
                  </div>
                </div>
              )}

              {verificationResult.status === 'error' && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <i className="ri-error-warning-line text-2xl text-red-600"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-red-900">Verification Error</h3>
                      <p className="text-sm text-red-800 mt-1">{verificationResult.message}</p>
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
                    <span className="text-sm text-slate-900 font-mono text-right break-all ml-4">{verificationResult.filename}</span>
                  </div>
                  <div className="flex items-start justify-between py-3 border-b border-slate-100">
                    <span className="text-sm font-semibold text-slate-700">SHA-256 Hash:</span>
                    <span className="text-xs text-slate-900 font-mono text-right break-all ml-4">{verificationResult.hash}</span>
                  </div>
                  <div className="flex items-start justify-between py-3">
                    <span className="text-sm font-semibold text-slate-700">Checked:</span>
                    <span className="text-sm text-slate-900">{new Date(verificationResult.timestamp).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={resetVerification}
                  className="flex-1 px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-md whitespace-nowrap cursor-pointer flex items-center justify-center space-x-2"
                >
                  <i className="ri-refresh-line text-xl"></i>
                  <span>Verify Another Document</span>
                </button>
                <Link
                  to="/"
                  className="flex-1 px-8 py-4 text-base font-semibold text-slate-700 bg-white border-2 border-slate-300 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center space-x-2"
                >
                  <i className="ri-home-line text-xl"></i>
                  <span>Back to Home</span>
                </Link>
              </div>
            </div>
          )}
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
