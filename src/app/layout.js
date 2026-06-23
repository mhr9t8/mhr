import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

import Header from "./_components/Header";
import Footer from "./_components/Footer";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Home | ♠ MHR ♠",
    template: "%s | ♠ MHR ♠",
  },
  description: "Mehedi Hasan Rahat - Portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </head>
      <body className={`${josefin.className}`}>
        suppressHydrationWarning={true}
        <Header />
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-6">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
