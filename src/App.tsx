import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

import Home from "./pages/home/page";

const API = "https://proofdeed.com/api";

/* ---------------- Registry Page ---------------- */

function Registry() {

  const [records,setRecords] = useState([]);

  useEffect(()=>{

    fetch(`${API}/registry`)
      .then(res=>res.json())
      .then(data=>setRecords(data));

  },[]);

  return (

    <div style={{maxWidth:900,margin:"40px auto",fontFamily:"system-ui"}}>

      <h1>ProofDeed Public Registry</h1>

      <table style={{width:"100%",borderCollapse:"collapse"}}>

        <thead>
          <tr>
            <th align="left">Certification ID</th>
            <th align="left">Hash</th>
            <th align="left">Timestamp</th>
          </tr>
        </thead>

        <tbody>

          {records.map((r)=>(
            <tr key={r.certification_id}>
              <td>
                <a href={`/verify/${r.certification_id}`}>
                  {r.certification_id}
                </a>
              </td>

              <td style={{fontSize:12}}>
                {r.hash.substring(0,18)}...
              </td>

              <td>
                {new Date(r.created_at).toLocaleString()}
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>

  );

}

/* ---------------- Verification Page ---------------- */

function Verify() {

  const { certId } = useParams();
  const [data,setData] = useState(null);

  useEffect(()=>{

    fetch(`${API}/verify/${certId}`)
      .then(res=>res.json())
      .then(setData);

  },[certId]);

  if(!data) return <div>Loading...</div>;

  if(!data.valid) {

    return (
      <div style={{textAlign:"center",marginTop:100}}>
        <h1>Invalid Certificate</h1>
      </div>
    );

  }

  const verifyURL = `https://proofdeed.com/verify/${certId}`;

  return (

    <div style={{maxWidth:900,margin:"40px auto",fontFamily:"system-ui"}}>

      <h1>ProofDeed Verification</h1>

      <div style={{
        border:"1px solid #ddd",
        padding:30,
        borderRadius:12,
        marginTop:20
      }}>

        <h2 style={{color:"green"}}>✓ Verified</h2>

        <p><b>Certification ID</b><br/>{data.certification_id}</p>

        <p><b>Document Hash</b><br/>{data.hash}</p>

        <p><b>Timestamp</b><br/>
        {new Date(data.created_at).toLocaleString()}</p>

        <p><b>Polygon Transaction</b></p>

        <a
         href={`https://polygonscan.com/tx/${data.polygon_transaction}`}
         target="_blank"
         rel="noreferrer"
        >
         View Blockchain Proof
        </a>

        <div style={{marginTop:30}}>

          <QRCode value={verifyURL} size={120}/>

          <p style={{fontSize:12}}>
            Scan to verify
          </p>

        </div>

        <button
         onClick={()=>window.print()}
         style={{
           marginTop:20,
           padding:"10px 20px",
           fontSize:16
         }}
        >
          Print Certificate
        </button>

      </div>

    </div>

  );

}

/* ---------------- Main App ---------------- */

export default function App() {

  return (

    <Router>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/registry" element={<Registry />} />

        <Route path="/verify/:certId" element={<Verify />} />

      </Routes>

    </Router>

  );

}
