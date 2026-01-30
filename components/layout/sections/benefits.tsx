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
    <section id="presentation" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="text-sm text-primary mb-2 tracking-widest uppercase font-medium">
            {t("label")}
          </p>

          <h2 className="text-3xl md:text-4xl mb-4 text-[#112751] dark:text-white">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            {t("description1")}
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            {t("description2")}
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            {t("description3")}
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            {t("description4")}
          </p>

          <blockquote className="border-l-4 border-primary pl-4 mb-8 italic text-muted-foreground">
            <p className="text-base mb-2">{t("quote")}</p>
            <footer className="text-sm font-medium text-[#112751] dark:text-white">— {t("quoteAuthor")}</footer>
          </blockquote>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefitList.map(({ icon, key }) => (
              <Card
                key={key}
                className="bg-muted/50 dark:bg-card hover:bg-background transition-all group border-transparent hover:border-primary/20"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2">
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

                <CardContent className="text-sm text-muted-foreground">
                  {t(`${key}.description`)}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 mb-8 lg:mb-0">
          <Image
            src="/photo-serment.png"
            alt="Eva Ballin - Prestation de serment"
            width={500}
            height={600}
            className="shadow-2xl border-4 border-[#112751]/10 dark:border-white/10"
          />
        </div>
      </div>
    </section>
  );
};
