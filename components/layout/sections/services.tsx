"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Phone } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const ServicesSection = () => {
  const t = useTranslations("domestic");

  const serviceKeys = ["1", "2", "3", "4", "5", "6"];

  return (
    <section id="violences-conjugales" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm text-primary mb-2 tracking-widest uppercase font-medium">
            {t("label")}
          </p>

          <h2 className="text-3xl md:text-4xl mb-6 text-[#112751] dark:text-white">
            {t("title")}
          </h2>

          <div className="space-y-4 text-lg text-muted-foreground mb-8">
            <p>{t("description1")}</p>
            <p>{t("description2")}</p>
            <p>{t("description3")}</p>
          </div>

          <Button
            size="lg"
            className="bg-[#112751] hover:bg-[#112751]/90 dark:bg-primary dark:hover:bg-primary/90 text-white dark:text-[#112751] font-medium rounded-none"
            asChild
          >
            <Link href="https://wa.me/33626064138" target="_blank">
              <Phone className="mr-2 h-5 w-5" />
              {t("cta")}
            </Link>
          </Button>
        </div>

        <Card className="bg-white dark:bg-card border-2 border-[#112751]/10 dark:border-white/10 rounded-none">
          <CardHeader>
            <CardTitle className="text-2xl text-[#112751] dark:text-white">
              {t("servicesTitle")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {serviceKeys.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-[#112751]/80 dark:text-white/80">
                    {t(`services.${key}`)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-[#112751]/5 dark:bg-white/5 border-l-4 border-primary">
              <p className="text-sm text-[#112751]/70 dark:text-white/70">
                <strong className="text-[#112751] dark:text-white">Important :</strong>{" "}
                {t("emergency")}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
