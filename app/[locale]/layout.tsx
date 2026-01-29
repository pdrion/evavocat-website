import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { locales } from "@/i18n/request";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const sourceSans = Source_Sans_3({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Eva Ballin | Avocat au Barreau de Nice",
  description:
    "Cabinet d'avocat spécialisé en droit pénal, droit pénal des affaires et droit des victimes. Expertise reconnue en violences conjugales et intrafamiliales.",
  keywords: [
    "avocat",
    "Nice",
    "droit pénal",
    "violences conjugales",
    "droit des victimes",
    "Eva Ballin",
  ],
  authors: [{ name: "Eva Ballin" }],
  openGraph: {
    title: "Eva Ballin | Avocat au Barreau de Nice",
    description:
      "Cabinet d'avocat spécialisé en droit pénal, droit pénal des affaires et droit des victimes.",
    locale: "fr_FR",
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background",
          sourceSans.className,
          sourceSans.variable,
          libreBaskerville.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
