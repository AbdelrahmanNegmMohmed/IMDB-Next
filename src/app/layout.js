import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import Provider from "./Provider";
import Navbar from "@/component/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB clone",
  description: "move database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <Navbar/>
          {children}
        </Provider>
      </body>
    </html>
  );
}
