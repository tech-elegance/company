import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { useState } from "react";
import en from "../../../locales/en";
import th from "../../../locales/th";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { NextSeo } from "next-seo";
import style from "./index.module.scss";
import {
  FcQuestions,
  FcCurrencyExchange,
  FcTemplate,
  FcFlowChart,
  FcTodoList,
} from "react-icons/fc";
import useSound from "use-sound";

export default function Desktop() {
  const router = useRouter();
  //?locales
  const { locale } = router;
  const loc = locale === "en" ? en : th;
  const t = loc.service.desktop;

  //? Sound Effect
  const { stop } = useSound();
  const [soundHover] = useSound("/sound/hover-card.mp3", {
    volume: 0.5,
  });
  const [soundClickButton] = useSound("/sound/click-button.mp3");

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
          <div className="col-start-2 col-span-4">
            <section>
              <div className="mt-12">
                <h1 className="lg:text-4xl font-bold ">{t.title}</h1>
                <p className="lg:text-xl mt-7">{t.sub_title}</p>
              </div>
              <div className="grid justify-items-center mt-20">
                <div className={style.background_1} />
              </div>
              <div className="mt-20">
                <div className={"bg-indigo-500 h-1 w-20 "} />
                <h3 className="lg:text-3xl font-bold mt-3">{t.title_step}</h3>
                {/* <p className="mt-3 text-gray-400">
                    เว็บธุรกิจหรือการตลาด เว็บหนังบ้าน หลังบ้าน
                    ระบบรับส่งข้อมูลผ่าน API หรือ graphql ที่ลวดเร็ว
                  </p> */}
                {/* <div className="grid justify-items-center mt-20">
                    <div className={style.background_2} />
                  </div> */}
                <div className="grid md:grid-cols-2 gap-4 mt-10 items-center">
                  <div>
                    <div className="space-y-10 lg:space-y-0 lg:grid gap-y-10">
                      <div className="relative ">
                        <dt>
                          <div className="absolute flex items-center justify-center rounded-md">
                            <FcQuestions className="w-10 h-10" />
                          </div>
                          <p className="ml-16 text-lg leading-6 font-medium">
                            {t.step1}
                          </p>
                        </dt>
                        <dd className="mt-5 lg:mt-2 lg:ml-16 text-base text-gray-500">
                          {t.detail1}{" "}
                          <Link href="/contactus">
                            <a href="">
                              <span className="text-indigo-500">
                                https://tech-elegance.com/contactus
                              </span>
                            </a>
                          </Link>
                        </dd>
                      </div>
                      <div className="relative ">
                        <dt>
                          <div className="absolute flex items-center justify-center rounded-md">
                            <FcCurrencyExchange className="w-10 h-10" />
                          </div>
                          <p className="ml-16 text-lg leading-6 font-medium ">
                            {t.step2}
                          </p>
                        </dt>
                        <dd className="mt-5 lg:mt-2 lg:ml-16 text-base text-gray-500">
                          {t.detail2}
                        </dd>
                      </div>
                      <div className="relative ">
                        <dt>
                          <div className="absolute flex items-center justify-center rounded-md">
                            <FcTemplate className="w-10 h-10" />
                          </div>
                          <p className="ml-16 text-lg leading-6 font-medium ">
                            {t.step3}
                          </p>
                        </dt>
                        <dd className="mt-5 lg:mt-2 lg:ml-16 text-base text-gray-500">
                          {t.detail3}
                        </dd>
                      </div>
                      <div className="relative ">
                        <dt>
                          <div className="absolute flex items-center justify-center rounded-md">
                            <FcFlowChart className="w-10 h-10" />
                          </div>
                          <p className="ml-16 text-lg leading-6 font-medium ">
                            {t.step4}
                          </p>
                        </dt>
                        <dd className="mt-5 lg:mt-2 lg:ml-16 text-base text-gray-500">
                          {t.detail4}
                        </dd>
                      </div>
                      <a className="relative ">
                        <dt>
                          <div className="absolute flex items-center justify-center rounded-md">
                            <FcTodoList className="w-10 h-10" />
                          </div>
                          <p className="ml-16 text-lg leading-6 font-medium ">
                            {t.step5}
                          </p>
                        </dt>
                        <dd className="mt-5 lg:mt-2 lg:ml-16 text-base text-gray-500">
                          {t.detail5}
                        </dd>
                      </a>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="grid justify-items-center mt-20">
                      <div className={style.background_contact} />
                    </div>
                    <h3 className="font-bold mt-7">{t.Payonce}</h3>
                    <h3 className="font-black text-3xl mt-3">
                      <span className="bg-indigo-500 text-white px-5">
                        <span className="text-sm">{t.price}</span> 20,000 ฿
                      </span>
                    </h3>
                    <p className="text-gray-500 text-sm mt-3">
                      {t.service_year}
                    </p>
                    <Link href="/contactus">
                      <button
                        className={"mt-10 " + style.learn_more}
                        onMouseEnter={soundHover}
                        onMouseLeave={stop}
                        onClick={soundClickButton}
                      >
                        <span className={style.circle} aria-hidden="true">
                          <span
                            className={style.icon + " " + style.arrow}
                          ></span>
                        </span>
                        <span className={style.button_text}>
                          {t.contact_us}
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            <section className="mt-20">
              <div className="grid md:grid-cols-4 grid-cols-2 gap-4 ">
                <div className="flex items-center mt-10">
                  <Image
                    src="https://res.cloudinary.com/techelegance/image/upload/v1623237138/Tech%20Elegance/landing%20page/language/c_kujns7.svg"
                    height="50"
                    width="50"
                  />
                  <span className="ml-3 font-semibold">C#</span>
                </div>
                <div className="flex items-center mt-10">
                  <Image
                    src="https://res.cloudinary.com/techelegance/image/upload/v1623170635/Tech%20Elegance/landing%20page/language/sqlserver_ikpwwy.svg"
                    height="50"
                    width="50"
                  />
                  <span className="ml-3 font-semibold">Sql server</span>
                </div>
                <div className="flex items-center mt-10">
                  <Image
                    src="https://res.cloudinary.com/techelegance/image/upload/v1623236943/Tech%20Elegance/landing%20page/language/Oracle_Corporation_logo_gbllie.svg"
                    height="50"
                    width="50"
                  />
                  <span className="ml-3 font-semibold">Oracle</span>
                </div>
                <div className="flex items-center mt-10">
                  <Image
                    src="https://res.cloudinary.com/techelegance/image/upload/v1623237193/Tech%20Elegance/landing%20page/language/dotnet-icon_vrz6nf.svg"
                    height="50"
                    width="50"
                  />
                  <span className="ml-3 font-semibold">.Net</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
