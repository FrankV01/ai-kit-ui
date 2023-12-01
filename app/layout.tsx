import React from "react";
import { Inter } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/litera/bootstrap.min.css";
import StyledComponentsRegistry from "../lib/StyledComponentsRegistry";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <React.StrictMode>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </React.StrictMode>
      </body>
    </html>
  );
}
