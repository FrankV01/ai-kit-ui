import React from "react";
import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/litera/bootstrap.min.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <React.StrictMode>{children}</React.StrictMode>
      </body>
    </html>
  );
}
