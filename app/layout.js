"use client";
import localFont from "next/font/local";
import "./globals.css";
import "./responsive.css"
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body>
        <Provider store={store}>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
