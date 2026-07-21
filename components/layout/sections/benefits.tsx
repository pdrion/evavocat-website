"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const BenefitsSection = () => {
  const t = useTranslations("about");

  const benefitList = [
    { icon: "Scale", key: "expertise" },
    { icon: "Globe", key: "international" },
    { icon: "Heart", key: "human" },
    { icon: "Shield", key: "rigorous" },
  ];

  return (
    <section id="presentation" className="py-24 sm:py-32">
      <div className="container">
        {/* Présentation + Photo */}
        <div className="grid lg:grid-cols-2 place-items-center lg:gap-16 mb-16">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-10 bg-primary" />
              <p className="text-xs text-primary tracking-[0.25em] uppercase font-medium">
                {t("label")}
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl mb-6 text-[#112751] dark:text-white">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              {t("description1")}
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              {t("description2")}
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              {t("description3")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("description4")}
            </p>
          </div>

          <div className="order-1 lg:order-2 mb-8 lg:mb-0 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/10 via-transparent to-[#112751]/5 dark:from-primary/15 dark:to-white/5 blur-2xl" />
              <div className="relative bg-white dark:bg-card border border-[#112751]/10 dark:border-white/10 p-10 sm:p-14 shadow-xl">
                <Image
                  src="/logo.png"
                  alt="Logo Eva BALLIN - Avocat"
                  width={380}
                  height={380}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Citation + Qualités - pleine largeur */}
        <div className="relative pt-16">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

          <blockquote className="max-w-4xl mx-auto text-center mb-14 px-4">
            <span aria-hidden className="block text-6xl leading-none text-primary/40 font-serif mb-2">“</span>
            <p className="text-lg md:text-xl italic text-muted-foreground mb-4 leading-relaxed">
              {t("quote")}
            </p>
            <footer className="text-base font-medium text-[#112751] dark:text-white tracking-wide">
              — {t("quoteAuthor")}
            </footer>
          </blockquote>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitList.map(({ icon, key }) => (
              <Card
                key={key}
                className="relative bg-muted/40 dark:bg-card hover:bg-background transition-all duration-300 group border border-transparent hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
              >
                <span
                  aria-hidden
                  className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                />
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2.5 group-hover:bg-primary/20 transition-colors">
                      <Icon
                        name={icon as keyof typeof icons}
                        size={20}
                        color="hsl(var(--primary))"
                        className="text-primary"
                      />
                    </div>
                    <CardTitle className="text-base">{t(`${key}.title`)}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed">
                  {t(`${key}.description`)}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
