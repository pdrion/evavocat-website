"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const HeroSection = () => {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-white dark:bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, hsl(var(--primary)) 0, transparent 40%), radial-gradient(circle at 80% 80%, #112751 0, transparent 40%)",
        }}
      />

      <div className="container mx-auto px-6 py-20 md:py-28 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <p className="text-primary font-medium tracking-[0.25em] uppercase text-xs">
                {t("subtitle")}
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[#112751] dark:text-white">
              Eva <span className="font-bold">BALLIN</span>
              <span className="sr-only">
                {" "}
                — {t("subtitle")}
              </span>
            </h1>

            <div className="flex items-center gap-4">
              <span className="h-px flex-1 max-w-[60px] bg-[#112751]/20 dark:bg-white/20" />
              <p className="text-2xl md:text-3xl text-[#112751]/70 dark:text-white/70 italic font-serif">
                {t("tagline")}
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-[#112751] hover:bg-[#112751]/90 dark:bg-primary dark:hover:bg-primary/90 text-white dark:text-[#112751] font-medium px-8 py-6 text-base rounded-none shadow-md hover:shadow-lg transition-shadow"
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
          </div>

          {/* Portrait */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-[#112751]/10 dark:from-primary/25 dark:to-white/5 blur-2xl" />
              <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-primary" />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-primary" />
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
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  );
};
