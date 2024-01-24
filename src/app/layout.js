import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { UserProvider } from "./contexts/userContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Music",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <Header />
          <main className="pt-20 p-10">{children}</main>
        </UserProvider>
      </body>
    </html>
  );
}
