"use client";
import { Menu, Phone, Globe } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const t = useTranslations("nav");
  const pathname = usePathname();

  const currentLocale = pathname.startsWith("/en") ? "en" : "fr";
  const otherLocale = currentLocale === "fr" ? "en" : "fr";
  const switchPath = currentLocale === "fr"
    ? `/en${pathname === "/" ? "" : pathname}`
    : pathname === "/en" ? "/" : pathname.replace("/en", "");

  const routeList = [
    { href: "#presentation", label: t("presentation") },
    { href: "#expertises", label: t("expertises") },
    { href: "#violences-conjugales", label: t("violences") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header className="w-full top-0 mx-auto sticky border-b border-border z-40 flex justify-between items-center px-6 py-3 bg-background/95 backdrop-blur-sm">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="Eva Ballin - Avocat"
          width={40}
          height={40}
          className=""
        />
        <div className="hidden sm:block">
          <span className="block text-lg font-semibold text-[#112751] dark:text-white">
            Eva Ballin
          </span>
          <span className="block text-xs text-muted-foreground tracking-wider uppercase">
            Avocat
          </span>
        </div>
      </Link>

      {/* Mobile */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between bg-background border-r border-border"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center gap-3">
                    <Image
                      src="/logo.png"
                      alt="Eva Ballin - Avocat"
                      width={40}
                      height={40}
                      className=""
                    />
                    <div>
                      <span className="block text-lg font-semibold text-[#112751] dark:text-white">
                        Eva Ballin
                      </span>
                      <span className="block text-xs text-muted-foreground tracking-wider uppercase font-normal">
                        Avocat
                      </span>
                    </div>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start gap-2">
              <Separator className="mb-2" />
              <div className="flex items-center gap-2 w-full">
                <ToggleTheme />
                <Button asChild variant="ghost" size="sm">
                  <Link href={switchPath}>
                    <Globe className="size-4 mr-2" />
                    {otherLocale.toUpperCase()}
                  </Link>
                </Button>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-3 py-2 hover:text-primary transition-colors">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex items-center gap-2">
        <Button asChild variant="ghost" size="sm">
          <Link href={switchPath}>
            <Globe className="size-4 mr-1" />
            {otherLocale.toUpperCase()}
          </Link>
        </Button>
        <ToggleTheme />
        <Button asChild size="sm" className="bg-[#112751] hover:bg-[#112751]/90 dark:bg-primary dark:hover:bg-primary/90 text-white dark:text-[#112751] rounded-none">
          <Link href="https://wa.me/33626064138" target="_blank">
            <Phone className="size-4 mr-2" />
            {t("appointment")}
          </Link>
        </Button>
      </div>
    </header>
  );
};
