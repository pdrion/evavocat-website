"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Scale, Globe, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const HeroSection = () => {
  const t = useTranslations("hero");

  const trust = [
    { icon: Scale, label: "Barreau de Nice" },
    { icon: MapPin, label: "Toute la France" },
    { icon: Globe, label: "Français · English" },
  ];

  return (
    <section className="relative overflow-hidden bg-white dark:bg-background">
      {/* Ambient gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, hsl(var(--primary)) 0, transparent 45%), radial-gradient(circle at 85% 80%, #13254c 0, transparent 45%)",
        }}
      />

      {/* EB monogram watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 select-none opacity-[0.035] dark:opacity-[0.06] text-[24rem] leading-none font-serif font-bold text-[#112751] dark:text-white hidden xl:block"
      >
        EB
      </div>

      <div className="container mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20 relative">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-7 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-primary" />
              <p className="text-primary font-semibold tracking-[0.3em] uppercase text-[11px]">
                {t("subtitle")}
              </p>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-[#112751] dark:text-white">
              Eva <span className="font-bold">BALLIN</span>
              <span className="sr-only"> — {t("subtitle")}</span>
            </h1>

            <div className="flex items-center gap-4">
              <span className="h-px w-14 bg-primary" />
              <p className="font-serif text-2xl md:text-3xl text-[#112751]/75 dark:text-white/75 italic">
                {t("tagline")}
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="bg-[#112751] hover:bg-[#112751]/90 dark:bg-primary dark:hover:bg-primary/90 text-white dark:text-[#112751] font-medium px-8 py-6 text-base rounded-none shadow-md hover:shadow-xl transition-all"
                asChild
              >
                <Link href="https://wa.me/33626064138" target="_blank">
                  <Phone className="mr-2 h-5 w-5" />
                  {t("cta")}
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-[#112751] dark:border-white/30 text-[#112751] dark:text-white hover:bg-[#112751]/5 dark:hover:bg-white/10 px-8 py-6 text-base group rounded-none"
                asChild
              >
                <Link href="#expertises">
                  {t("discover")}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Trust strip */}
            <div className="pt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground border-t border-[#112751]/10 dark:border-white/10 mt-8">
              {trust.map(({ icon: I, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <I className="h-4 w-4 text-primary" />
                  <span className="tracking-wide">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/25 via-transparent to-[#112751]/15 dark:from-primary/30 dark:to-white/5 blur-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary" />
              <Image
                src="/portrait.jpg"
                alt="Maître Eva BALLIN, avocat au Barreau de Nice"
                width={450}
                height={550}
                className="relative object-cover border-2 border-[#112751]/10 dark:border-white/10 shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};
