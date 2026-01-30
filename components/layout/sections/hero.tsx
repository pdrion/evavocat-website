"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const HeroSection = () => {
  const t = useTranslations("hero");

  return (
    <section className="relative bg-white dark:bg-background">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <p className="text-primary font-medium tracking-widest uppercase text-sm">
              {t("subtitle")}
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-[#112751] dark:text-white">
              {t("name")}
            </h1>

            <p className="text-2xl md:text-3xl text-[#112751]/70 dark:text-white/70 italic">
              {t("tagline")}
            </p>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-[#112751] hover:bg-[#112751]/90 dark:bg-primary dark:hover:bg-primary/90 text-white dark:text-[#112751] font-medium px-8 py-6 text-base rounded-none"
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
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/portrait.jpg"
              alt="Eva Ballin - Avocat au Barreau de Nice"
              width={450}
              height={550}
              className="object-cover border-4 border-[#112751]/10 dark:border-white/10"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#112751]/10 dark:bg-white/10" />
    </section>
  );
};
