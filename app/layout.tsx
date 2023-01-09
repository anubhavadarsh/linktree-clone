import { ReactNode } from "react";

import "../styles/globals.css";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body className="bg-gradient-to-r from-orange-300 to-rose-300">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
