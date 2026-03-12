```tsx
"use client";

import { QRCodeCanvas } from "qrcode.react";

export default function CertificateQR({ id }: { id: string }) {

  const verifyUrl = `https://proofdeed.com/verify/${id}`;

  return (
    <div style={{marginTop:"40px",textAlign:"center"}}>

      <h3 style={{fontSize:"18px",fontWeight:600}}>
        Certificate Verification
      </h3>

      <QRCodeCanvas
        value={verifyUrl}
        size={160}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"H"}
      />

      <p style={{marginTop:"10px",fontSize:"14px"}}>
        Scan to verify this certificate
      </p>

    </div>
  );
}
```

