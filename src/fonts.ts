import { Inter, Bebas_Neue, Poppins } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
