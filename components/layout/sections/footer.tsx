"use client";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const FooterSection = () => {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer id="footer" className="bg-white dark:bg-background border-t border-[#112751]/10 dark:border-white/10">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Eva Ballin - Avocat"
                width={50}
                height={50}
              />
              <div>
                <h3 className="text-2xl text-[#112751] dark:text-white">Eva Ballin</h3>
                <p className="text-xs text-muted-foreground tracking-wider uppercase">Avocat au Barreau de Nice</p>
              </div>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              {t("description")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg mb-4 text-[#112751] dark:text-white">{t("navigation")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#presentation" className="text-muted-foreground hover:text-primary transition-colors">
                  {nav("presentation")}
                </Link>
              </li>
              <li>
                <Link href="#expertises" className="text-muted-foreground hover:text-primary transition-colors">
                  {nav("expertises")}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {nav("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4 text-[#112751] dark:text-white">{t("contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  5, rue de la Préfecture<br />
                  06300 Nice
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <Link href="tel:+33626064138" className="text-muted-foreground hover:text-primary transition-colors">
                  06 26 06 41 38
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <Link href="mailto:evaballin@evavocat.com" className="text-muted-foreground hover:text-primary transition-colors">
                  evaballin@evavocat.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-[#112751]/10 dark:bg-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Eva Ballin - Avocat. {t("rights")}</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              {t("legal")}
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              {t("privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
