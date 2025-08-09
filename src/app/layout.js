import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter, Poppins } from 'next/font/google';
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/Footer";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Add the weights you need
  variable: '--font-poppins',
  display: 'swap',
});
export const metadata = {
  title: "Laundry Talks",
  description: "Best Laundry Service Provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
