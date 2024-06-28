import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Hieu Le - Software Developer",
  description:
    "Portfolio of Hieu Le, a skilled Software Developer specializing in web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourportfolio.com" />
        <meta
          property="og:image"
          content="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/405263528_870944851242439_4070823877423046026_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeE11JZSP5kmyR8jZJQaZzSaBqJM4NUlltUGokzg1SWW1fxX3Na0N5ZquXdk_yal_K-eF1Ow0TAOt1KYhpg03dgk&_nc_ohc=uNzQDAjQ4GsQ7kNvgH4C1nO&_nc_ht=scontent.fsgn8-4.fna&oh=00_AYBbKBBha5-qEsv4DNorfokSKllUW6E1BjhXQ9PLNdPDxw&oe=6683E57C"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/405263528_870944851242439_4070823877423046026_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeE11JZSP5kmyR8jZJQaZzSaBqJM4NUlltUGokzg1SWW1fxX3Na0N5ZquXdk_yal_K-eF1Ow0TAOt1KYhpg03dgk&_nc_ohc=uNzQDAjQ4GsQ7kNvgH4C1nO&_nc_ht=scontent.fsgn8-4.fna&oh=00_AYBbKBBha5-qEsv4DNorfokSKllUW6E1BjhXQ9PLNdPDxw&oe=6683E57C"
        />
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
