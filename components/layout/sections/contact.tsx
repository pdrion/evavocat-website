"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useTranslations } from "next-intl";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string().min(10),
});

export const ContactSection = () => {
  const t = useTranslations("contact");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "penal",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;
    const subjectText = t(`subjects.${subject}`);
    const mailToLink = `mailto:evaballin@evavocat.com?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(`Bonjour,\n\nJe suis ${firstName} ${lastName}.\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <p className="text-sm text-primary mb-2 tracking-widest uppercase font-medium">
                {t("label")}
              </p>
              <h2 className="text-3xl md:text-4xl mb-4 text-[#112751] dark:text-white">
                {t("title")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("description")}
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t("office")}</h3>
                  <p className="text-muted-foreground">
                    5, rue de la Préfecture<br />
                    06300 Nice
                  </p>
                  <p className="text-sm text-muted-foreground/70 mt-1">Case Palais 387</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t("phone")}</h3>
                  <p className="text-muted-foreground">06 26 06 41 38</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t("email")}</h3>
                  <p className="text-muted-foreground">evaballin@evavocat.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t("hours")}</h3>
                  <p className="text-muted-foreground">
                    {t("hoursValue")}<br />
                    {t("byAppointment")}
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-[#112751] hover:bg-[#112751]/90 dark:bg-primary dark:hover:bg-primary/90 text-white dark:text-[#112751] font-medium w-full sm:w-auto rounded-none"
              asChild
            >
              <Link href="https://wa.me/33626064138" target="_blank">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t("whatsapp")}
              </Link>
            </Button>
          </div>

          <Card className="bg-white dark:bg-card border-2 border-[#112751]/10 dark:border-white/10 rounded-none shadow-none">
            <CardHeader>
              <CardTitle className="text-xl">{t("formTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("firstName")}</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("lastName")}</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("emailLabel")}</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("subject")}</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="penal">{t("subjects.penal")}</SelectItem>
                            <SelectItem value="business">{t("subjects.business")}</SelectItem>
                            <SelectItem value="financial">{t("subjects.financial")}</SelectItem>
                            <SelectItem value="public">{t("subjects.public")}</SelectItem>
                            <SelectItem value="compliance">{t("subjects.compliance")}</SelectItem>
                            <SelectItem value="victims">{t("subjects.victims")}</SelectItem>
                            <SelectItem value="press">{t("subjects.press")}</SelectItem>
                            <SelectItem value="contracts">{t("subjects.contracts")}</SelectItem>
                            <SelectItem value="domestic">{t("subjects.domestic")}</SelectItem>
                            <SelectItem value="other">{t("subjects.other")}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("message")}</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder={t("messagePlaceholder")}
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-[#112751] hover:bg-[#112751]/90 dark:bg-primary dark:hover:bg-primary/90 text-white dark:text-[#112751] font-medium rounded-none"
                  >
                    {t("send")}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
