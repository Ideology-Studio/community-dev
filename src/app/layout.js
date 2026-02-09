import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dev Community Landing",
  description: "A hub for developers to connect and grow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans bg-brand-bg text-brand-text`}>
        {children}
      </body>
    </html>
  );
}
