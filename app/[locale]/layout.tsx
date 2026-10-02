import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { locales } from "@/i18n/request";

const SITE_URL = "https://evavocat.com";

const ebGaramond = EB_Garamond({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isFr = locale === "fr";
  const title = isFr
    ? "Maître Eva BALLIN — Avocat en droit pénal au Barreau de Nice"
    : "Maître Eva BALLIN — Criminal Defense Attorney at the Nice Bar";
  const description = isFr
    ? "Cabinet de Maître Eva BALLIN, avocat inscrit au Barreau de Nice. Droit pénal, droit pénal des affaires, droit pénal financier, droit des victimes et violences conjugales. Intervention sur toute la France, en français et en anglais."
    : "Maître Eva BALLIN, criminal defense attorney at the Nice Bar. Criminal law, white-collar crime, financial crime, victims' rights and domestic violence. Nationwide practice in France, in French and English.";

  const keywordsFr = [
    "avocat pénaliste Nice",
    "avocat droit pénal Nice",
    "avocat droit pénal des affaires",
    "avocat pénal financier",
    "avocat violences conjugales Nice",
    "avocat droit des victimes",
    "Maître Eva Ballin",
    "Eva BALLIN avocat",
    "avocat Barreau de Nice",
    "avocat compliance",
    "blanchiment de capitaux avocat",
    "abus de biens sociaux avocat",
    "défense pénale France",
  ];
  const keywordsEn = [
    "criminal defense attorney Nice",
    "white-collar crime lawyer France",
    "financial crime lawyer",
    "domestic violence attorney",
    "victims rights lawyer",
    "Nice Bar attorney",
    "Eva BALLIN lawyer",
    "compliance attorney France",
  ];

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: isFr
        ? "%s | Maître Eva BALLIN — Avocat à Nice"
        : "%s | Maître Eva BALLIN — Attorney in Nice",
    },
    description,
    keywords: isFr ? keywordsFr : keywordsEn,
    applicationName: "Cabinet Eva BALLIN",
    authors: [{ name: "Maître Eva BALLIN" }],
    creator: "Maître Eva BALLIN",
    publisher: "Cabinet Eva BALLIN",
    category: "Legal Services",
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    alternates: {
      canonical: isFr ? "/" : "/en",
      languages: {
        "fr-FR": "/",
        "en-US": "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      url: isFr ? SITE_URL : `${SITE_URL}/en`,
      siteName: "Cabinet Eva BALLIN",
      title,
      description,
      locale: isFr ? "fr_FR" : "en_US",
      alternateLocale: isFr ? ["en_US"] : ["fr_FR"],
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 1200,
          alt: "Logo Eva BALLIN — Avocat au Barreau de Nice",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: "/icon.png",
      apple: "/apple-icon.png",
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: "Maître Eva BALLIN",
  alternateName: "Cabinet Eva BALLIN",
  image: `${SITE_URL}/logo.png`,
  url: SITE_URL,
  telephone: "+33626064138",
  email: "evaballin@evavocat.com",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "40, rue Gioffredo (2ème étage)",
    addressLocality: "Nice",
    postalCode: "06000",
    addressCountry: "FR",
  },
  areaServed: {
    "@type": "Country",
    name: "France",
  },
  availableLanguage: ["fr", "en"],
  memberOf: {
    "@type": "Organization",
    name: "Barreau de Nice",
  },
  knowsAbout: [
    "Droit pénal",
    "Droit pénal des affaires",
    "Droit pénal financier",
    "Droit pénal public",
    "Droit des victimes",
    "Violences conjugales",
    "Compliance",
    "Blanchiment de capitaux",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: [],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-serif",
          ebGaramond.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
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
