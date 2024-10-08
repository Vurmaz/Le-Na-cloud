import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Le-Na cloud | Profesyonel Salesforce Hizmetleri",
  description: "Salesforce entegrasyonu, danışmanlık ve özelleştirme hizmetleriyle iş süreçlerinizi optimize edin. Deneyimli ekibimizle CRM çözümlerinizde maksimum verimliliğe ulaşın. İletişime geçin!",
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
