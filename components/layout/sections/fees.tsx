"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
        <p className="text-sm text-primary text-center mb-2 tracking-widest uppercase font-medium">
          {t("label")}
        </p>

        <h2 className="text-3xl md:text-4xl text-center mb-4 text-[#112751] dark:text-white">
          {t("title")}
        </h2>

        <p className="md:w-2/3 mx-auto text-lg text-center text-muted-foreground mb-12 leading-relaxed">
          {t("description")}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {feeTypes.map(({ icon: Icon, key }) => (
            <Card
              key={key}
              className="h-full bg-background border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="flex flex-col items-center text-center">
                <div className="bg-[#112751] dark:bg-primary/20 p-4 mb-4">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-lg">{t(`${key}.title`)}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center text-sm">
                {t(`${key}.description`)}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
