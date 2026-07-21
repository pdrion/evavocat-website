"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { useTranslations } from "next-intl";

export const FeaturesSection = () => {
  const t = useTranslations("expertises");

  const featureList = [
    { icon: "Gavel", key: "penal" },
    { icon: "Building2", key: "business" },
    { icon: "Banknote", key: "financial" },
    { icon: "Landmark", key: "public" },
    { icon: "ShieldCheck", key: "compliance" },
    { icon: "Newspaper", key: "press" },
    { icon: "HeartHandshake", key: "victims" },
    { icon: "FileText", key: "contracts" },
  ];

  return (
    <section id="expertises" className="relative py-24 sm:py-32 bg-muted/30 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />

      <div className="container relative">
        <div className="flex flex-col items-center mb-4">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-primary" />
            <p className="text-xs text-primary tracking-[0.25em] uppercase font-medium">
              {t("label")}
            </p>
            <span className="h-px w-8 bg-primary" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl text-center mb-4 text-[#112751] dark:text-white">
          {t("title")}
        </h2>

        <p className="md:w-2/3 mx-auto text-lg text-center text-muted-foreground mb-14 leading-relaxed">
          {t("description")}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureList.map(({ icon, key }) => (
            <Card
              key={key}
              className="group relative h-full bg-background border border-border/50 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span
                aria-hidden
                className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              />
              <CardHeader className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-[#112751] dark:bg-primary/20 p-4 group-hover:bg-[#112751] transition-colors">
                    <Icon
                      name={icon as keyof typeof icons}
                      size={28}
                      color="hsl(var(--primary))"
                      className="text-primary"
                    />
                  </div>
                </div>
                <CardTitle className="text-xl">{t(`${key}.title`)}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center leading-relaxed text-sm">
                {t(`${key}.description`)}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
