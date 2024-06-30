import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/Navbar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Anon",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-black text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex flex-col max-w-6xl w-full flex-grow h-full mx-auto p-4 items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
