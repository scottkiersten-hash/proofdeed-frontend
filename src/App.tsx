import { HashRouter as Router, Routes, Route, useParams } from "react-router-dom";
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

          {records.map((r:any)=>(
            <tr key={r.certification_id}>
              <td>
                <a href={`#/verify/${r.certification_id}`}>
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
  const [data,setData] = useState<any>(null);

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

  const verifyURL = `https://proofdeed.com/#/verify/${certId}`;

  return (

    <div style={{maxWidth:900,margin:"40px auto",fontFamily:"system-ui"}}>

      <h1>ProofDeed Certificate Verification</h1>

      <p><b>Certification ID:</b> {data.certification_id}</p>
      <p><b>Hash:</b> {data.hash}</p>
      <p><b>Timestamp:</b> {new Date(data.created_at).toLocaleString()}</p>
      <p><b>Blockchain:</b> {data.blockchain}</p>

      <div style={{marginTop:30}}>
        <QRCode value={verifyURL}/>
      </div>

      <p style={{marginTop:20}}>
        Public Verification URL:
        <br/>
        <a href={verifyURL}>{verifyURL}</a>
      </p>

    </div>

  );

}

/* ---------------- Router ---------------- */

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
