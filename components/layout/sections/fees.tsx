"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionLabel } from "@/components/ui/section-label";
import { MessageSquare, Calculator, Clock, Scale } from "lucide-react";
import { useTranslations } from "next-intl";

export const FeesSection = () => {
  const t = useTranslations("fees");

  const feeTypes = [
    { icon: MessageSquare, key: "consultation" },
    { icon: Calculator, key: "forfait" },
    { icon: Clock, key: "hourly" },
    { icon: Scale, key: "legal_aid" },
  ];

  return (
    <section id="honoraires" className="py-24 sm:py-32 bg-muted/30">
      <div className="container">
        <div className="flex flex-col items-center mb-4">
          <SectionLabel align="center">{t("label")}</SectionLabel>
        </div>

        <h2 className="text-3xl md:text-4xl text-center mt-6 mb-4 text-[#112751] dark:text-white">
          {t("title")}
        </h2>

        <p className="md:w-2/3 mx-auto text-lg text-center text-muted-foreground mb-14 leading-relaxed">
          {t("description")}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {feeTypes.map(({ icon: Icon, key }) => (
            <Card
              key={key}
              className="group relative h-full bg-background border border-border/50 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span
                aria-hidden
                className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              />
              <CardHeader className="flex flex-col items-center text-center">
                <div className="bg-primary/10 group-hover:bg-primary/20 p-4 mb-4 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-lg">{t(`${key}.title`)}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center text-sm leading-relaxed">
                {t(`${key}.description`)}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
