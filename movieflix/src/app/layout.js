import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../app/components/header'
import Footer from '../app/components/footer'
import SessionWrapper from "./components/sessionwrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generate by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
      </SessionWrapper>
    </html>
  );
}
