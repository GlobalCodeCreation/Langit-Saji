import "@/app/styles/globals.css"; 
import Navbar from "@/app/partials/navbar"; 
import { Archivo } from "next/font/google";
 
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Langit Saji",
  description: "Hidangan Lokal yang Menghadirkan Rasa Rumah Sejati",
};
 
export default function RootLayout({ children }) { 
  return ( 
    <html lang="en" className={archivo.variable}> 
      <body className={`${archivo.className} font-archivo`}> 
        <Navbar /> 
        <div className="mt-[62px]"> 
          {children} 
        </div> 
      </body> 
    </html> 
  ); 
}


