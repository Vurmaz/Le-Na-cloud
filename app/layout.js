import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Le-Na cloud",
  description: "Profesyonel Salesforce Hizmetleri",
  keywords: [
    'Salesforce',
    'Salesforce danışmanlık',
    'CRM çözümleri',
    'bulut tabanlı CRM',
    'iş süreçleri optimizasyonu',
  ],  
openGraph: {
    type: 'website',
    url: 'le-na.cloud',
    title: 'Profesyonel Salesforce Hizmetleri | Le-Na cloud',
    description: 'Özelleştirilmiş Salesforce çözümleri ile işinizi bir üst seviyeye taşıyın.',
    images: [
      {
        url: 'https://le-na.cloud/images/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Salesforce Hizmetleri',
      },
    ],
  },
}

export default function RootLayout({ children }) {

  return (
    <html lang="tr">
      <body className={`${montserrat.className} md:!overflow-y-scroll overflow-x-hidden smooth-scrool 	`}>
        <Header />
        {children}       
      </body>
    </html>
  );
}
