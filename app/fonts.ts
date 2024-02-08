import { Roboto } from "next/font/google";

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ['100', '300', '400', '700'],
  variable: '--font-roboto',
 });

 export const fonts = {
    roboto,
 }