import { Inter, Sora } from "next/font/google";

/**
 * Body face. Variable weight, self-hosted by next/font at build time so there
 * is no render-blocking request to Google.
 */
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Display face for headings. Limited to the weights we actually use to keep
 * the subset small.
 */
export const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const fontVariables = `${inter.variable} ${sora.variable}`;
