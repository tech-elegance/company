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
import { FcQuestions, FcTemplate, FcTodoList } from "react-icons/fc";
import useSound from "use-sound";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Home(props) {
  const router = useRouter();
  //?locales
  const { locale } = router;
  const loc = locale === "en" ? en : th;
  const t = loc.service.graphic;

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
          <div className="col-start-2 col-span-4 ...">
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

                <div className="grid md:grid-cols-2 gap-4 mt-10 items-center">
                  <div>
                    <div className="space-y-10 lg:space-y-0 lg:grid gap-y-20">
                      <div className="relative ">
                        <dt>
                          <span className="absolute flex items-center justify-center rounded-md">
                            <FcQuestions className="w-10 h-10" />
                          </span>
                          <p className="ml-16 text-lg leading-6 font-medium">
                            {t.step1}
                          </p>
                        </dt>
                        <p className="mt-5 lg:mt-2 lg:ml-16 text-base text-gray-500">
                          {t.detail1}{" "}
                          <Link href="/contactus">
                            <a href="">
                              <span className="text-indigo-500">
                                https://tech-elegance.com/contactus
                              </span>
                            </a>
                          </Link>
                        </p>
                      </div>
                      <div className="relative ">
                        <dt>
                          <span className="absolute flex items-center justify-center rounded-md">
                            <FcTemplate className="w-10 h-10" />
                          </span>
                          <p className="ml-16 text-lg leading-6 font-medium ">
                            {t.step2}
                          </p>
                        </dt>
                        <p className="mt-5 lg:mt-2 lg:ml-16 text-base text-gray-500">
                          {t.detail2}
                        </p>
                      </div>
                      <div className="relative ">
                        <dt>
                          <span className="absolute flex items-center justify-center rounded-md">
                            <FcTodoList className="w-10 h-10" />
                          </span>
                          <p className="ml-16 text-lg leading-6 font-medium ">
                            {t.step3}
                          </p>
                        </dt>
                        <p className="mt-5 lg:mt-2 lg:ml-16 text-base text-gray-500">
                          {t.detail3}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="grid justify-items-center mt-20">
                      <div className={style.background_contact} />
                    </div>

                    <h3 className="font-black text-3xl mt-3">
                      <span className="bg-indigo-500 text-white px-5">
                        <span className="text-sm">{t.price}</span> 500 ฿
                      </span>
                    </h3>
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
              <div className="text-center">
                <h3 className="text-2xl">{t.sample}</h3>
                <p className="text-red-500 text-xs">{t.sample_detail}</p>
              </div>
              <Carousel
                // swipeable={true}
                // draggable={true}
                // showDots={true}
                responsive={responsive}
                //ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="px-3 mt-3"
                className="carousel_width"
              >
                <div>
                  <div
                    className={"shadow-md " + style.image_graphic}
                    style={{
                      backgroundImage: `url("https://res.cloudinary.com/techelegance/image/upload/v1623688917/Tech%20Elegance/portfolio/graphic/Infographic/v.1-01-01-01-01-01_dfpyrh.png")`,
                    }}
                  />
                </div>

                <div>
                  <div
                    className={"shadow-md " + style.image_graphic}
                    style={{
                      backgroundImage: `url("https://res.cloudinary.com/techelegance/image/upload/v1623689159/Tech%20Elegance/portfolio/graphic/Infographic/Water_footprint_3-01_xianai.png")`,
                    }}
                  />
                </div>
                <div>
                  <div
                    className={"shadow-md " + style.image_graphic}
                    style={{
                      backgroundImage: `url("https://res.cloudinary.com/techelegance/image/upload/v1623689456/Tech%20Elegance/portfolio/graphic/LOGO%20Design/VARAYA4_ofmq4a.jpg")`,
                    }}
                  />
                </div>
                <div>
                  <div
                    className={"shadow-md " + style.image_graphic}
                    style={{
                      backgroundImage: `url("https://res.cloudinary.com/techelegance/image/upload/v1623689408/Tech%20Elegance/portfolio/graphic/LOGO%20Design/CI_Brand_copy_exuh3n.png")`,
                    }}
                  />
                </div>
                <div>
                  <div
                    className={"shadow-md " + style.image_graphic}
                    style={{
                      backgroundImage: `url("https://res.cloudinary.com/techelegance/image/upload/v1623689346/Tech%20Elegance/portfolio/graphic/LOGO%20Design/04_copy_erkixm.png")`,
                    }}
                  />
                </div>
                <div>
                  <div
                    className={"shadow-md " + style.image_graphic}
                    style={{
                      backgroundImage: `url("https://res.cloudinary.com/techelegance/image/upload/v1623689322/Tech%20Elegance/portfolio/graphic/LOGO%20Design/Isometric_Branding_Stationery_Mockups_edi75z.jpg")`,
                    }}
                  />
                </div>
                <div>
                  <div
                    className={"shadow-md " + style.image_graphic}
                    style={{
                      backgroundImage: `url("https://res.cloudinary.com/techelegance/image/upload/v1623689198/Tech%20Elegance/portfolio/graphic/Social%20media%20Artwork/Disposable_face_mask_is_electric_power.-06_bph6en.png")`,
                    }}
                  />
                </div>
                <div>
                  <div
                    className={"shadow-md " + style.image_graphic}
                    style={{
                      backgroundImage: `url("https://res.cloudinary.com/techelegance/image/upload/v1623688992/Tech%20Elegance/portfolio/graphic/Social%20media%20Artwork/Corn_planters-09-05-06_rukzgi.png")`,
                    }}
                  />
                </div>
                <div>
                  <div
                    className={"shadow-md " + style.image_graphic}
                    style={{
                      backgroundImage: `url("https://res.cloudinary.com/techelegance/image/upload/v1623689171/Tech%20Elegance/portfolio/graphic/Social%20media%20Artwork/GIS-02_h2bg0s.png")`,
                    }}
                  />
                </div>
                <div>
                  <div
                    className={"shadow-md " + style.image_graphic}
                    style={{
                      backgroundImage: `url("https://res.cloudinary.com/techelegance/image/upload/v1623688965/Tech%20Elegance/portfolio/graphic/Social%20media%20Artwork/3_AgTech_Trends-01_uhtoyv.png")`,
                    }}
                  />
                </div>
                <div>
                  <div
                    className={"shadow-md " + style.image_graphic}
                    style={{
                      backgroundImage: `url("https://res.cloudinary.com/techelegance/image/upload/v1623688964/Tech%20Elegance/portfolio/graphic/Social%20media%20Artwork/Farm-01_wj8wad.png")`,
                    }}
                  />
                </div>
                <div>
                  <div
                    className={"shadow-md " + style.image_graphic}
                    style={{
                      backgroundImage: `url("https://res.cloudinary.com/techelegance/image/upload/v1623688962/Tech%20Elegance/portfolio/graphic/Social%20media%20Artwork/Farm-02_igmjpr.png")`,
                    }}
                  />
                </div>
              </Carousel>
            </section>
            <section className="mt-20">
              <div className="grid md:grid-cols-4 grid-cols-2 gap-4 ">
                <div className="flex items-center mt-10">
                  <Image
                    src="https://res.cloudinary.com/techelegance/image/upload/v1623307301/Tech%20Elegance/landing%20page/program/figma-1_e3uqnq.svg"
                    height="50"
                    width="50"
                  />
                  <span className="ml-3 font-semibold">Sketch</span>
                </div>
                <div className="flex items-center mt-10">
                  <Image
                    src="https://res.cloudinary.com/techelegance/image/upload/v1623307302/Tech%20Elegance/landing%20page/program/sketch-2_l5y450.svg"
                    height="50"
                    width="50"
                  />
                  <span className="ml-3 font-semibold">Figma</span>
                </div>
                <div className="flex items-center mt-10">
                  <Image
                    src="https://res.cloudinary.com/techelegance/image/upload/v1623307302/Tech%20Elegance/landing%20page/program/premiere-cc_muhtjb.svg"
                    height="50"
                    width="50"
                  />
                  <span className="ml-3 font-semibold">Adobe premiere</span>
                </div>
                <div className="flex items-center mt-10">
                  <Image
                    src="https://res.cloudinary.com/techelegance/image/upload/v1623307302/Tech%20Elegance/landing%20page/program/adobe-illustrator-cs6_u3r0cw.svg"
                    height="50"
                    width="50"
                  />
                  <span className="ml-3 font-semibold">Adobe illustrator</span>
                </div>
                <div className="flex items-center mt-10">
                  <Image
                    src="https://res.cloudinary.com/techelegance/image/upload/v1623307302/Tech%20Elegance/landing%20page/program/adobe-photoshop-cs6_j3xszb.svg"
                    height="50"
                    width="50"
                  />
                  <span className="ml-3 font-semibold">Adobe photoshop</span>
                </div>
                <div className="flex items-center mt-10">
                  <Image
                    src="https://res.cloudinary.com/techelegance/image/upload/v1623307302/Tech%20Elegance/landing%20page/program/adobe-experience-design-1_xkrbqa.svg"
                    height="50"
                    width="50"
                  />
                  <span className="ml-3 font-semibold">Adobe experience</span>
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
