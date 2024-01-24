import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Music"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pt-20 p-10">{children}</main>
      </body>
    </html>
  );
}
