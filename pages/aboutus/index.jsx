import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import en from "../../locales/en";
import th from "../../locales/th";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NextSeo } from "next-seo";
import style from "./index.module.scss";

export default function Home() {
  const router = useRouter();
  //?locales
  const { locale } = router;
  const loc = locale === "en" ? en : th;
  const t = loc.aboutus;

  return (
    <>
      <NextSeo
        title={t.seo.title}
        description={t.seo.description}
        canonical={process.env.DNS + router.asPath}
        openGraph={{
          url: process.env.DNS + router.asPath,
          title: t.seo.title,
          description: t.seo.description,
          images: [
            {
              url: "https://res.cloudinary.com/techelegance/image/upload/v1623231084/Tech%20Elegance/landing%20page/backgrounds/199289849_298259712033060_5457631049635117316_n_vx9drp.png",
            },
            {
              url: "https://res.cloudinary.com/techelegance/image/upload/v1623230704/Tech%20Elegance/landing%20page/backgrounds/197349628_2817762828488076_3550964462918970770_n_d43h8z.png",
            },
            {
              url: "https://res.cloudinary.com/techelegance/image/upload/v1623225333/Tech%20Elegance/landing%20page/backgrounds/4851504_wkxioq.jpg",
            },
          ],
          site_name: t.title,
        }}
      />
      <Header />
      
        <main className="container mx-auto font">
          <div className="grid lg:grid-cols-6 gap-4">
            <div className="col-start-2 col-span-4 ...">
              <section>
                <div className="mt-12">
                  <h1 className="lg:text-4xl font-bold ">{t.title}</h1>
                  <p className="lg:text-xl mt-7 ">
                    {t.sub_title}
                  </p>
                </div>
                <div className="grid justify-items-center mt-20">
                <div className={style.background_2} />
              </div>
                <div className="mt-5 text-gray-500 spacing">
                  <p>
                    {t.detail}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>
      
      <Footer />
    </>
  );
}
