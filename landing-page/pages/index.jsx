import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import en from "../locales/en";
import th from "../locales/th";
import Header from "../components/Header";
import { NextSeo } from "next-seo";
import style from "./index.module.scss";
import {
  FcMultipleDevices,
  FcPhoneAndroid,
  FcSelfServiceKiosk,
  FcEditImage,
} from "react-icons/fc";
import Footer from "../components/Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useSound from "use-sound";
import Skeleton from "@material-ui/lab/Skeleton";
import useSWR from "swr";
import fetcher from "../middleware/fetcher";
import { motion } from "framer-motion";
import FadeIn from "../components/Fade/FadeIn";

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

export default function Home({ deviceType }) {
  const router = useRouter();

  //?locales
  const { locale } = router;
  const t = locale === "en" ? en : th;

  //? Sound Effect
  const { stop } = useSound();
  const [soundHover] = useSound("/sound/hover-card.mp3", {
    volume: 0.5,
  });
  const [soundClickButton] = useSound("/sound/click-button.mp3");

  const { data, error } = useSWR(
    `query {
      employees {
        first_name {
          th
          en
        }
        last_name {
          th
          en
        }
        profile_url
        detail {
          th
          en
        }
        position {
          title
          department
        }
      }
    }`,
    fetcher
  );
  return (
    <>
      <NextSeo
        title={t.home.seo.title}
        description={t.home.seo.description}
        canonical={process.env.DNS + router.asPath}
        openGraph={{
          url: process.env.DNS + router.asPath,
          title: t.home.seo.title,
          description: t.home.seo.description,
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
          site_name: t.home.title,
        }}
      />
      <Header />

      <main className="container mx-auto font ">
        <div className="grid lg:grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4 ...">
            <section className="md:mt-32 mt-12">
              <div className="space-y-10 lg:space-y-0 grid lg:grid-cols-2 md:gap-x-8 md:gap-y-8 items-center">
                <div className="text-center">
                  <h1 className="lg:text-4xl font-bold">{t.home.title}</h1>
                  <div className="lg:text-xl mt-14 text-left ">
                    <div
                      dangerouslySetInnerHTML={{ __html: t.home.sub_title }}
                    />
                  </div>
                </div>
                <div className="grid justify-items-center">
                  <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className={style.background_1} />
                  </motion.div>
                </div>
              </div>
              <div className="grid justify-items-center">
                <Link href="/contactus">
                  <button
                    onMouseEnter={soundHover}
                    onMouseLeave={stop}
                    onClick={soundClickButton}
                    className={"md:mt-52 mt-32 " + style.learn_more}
                  >
                    <span className={style.circle} aria-hidden="true">
                      <span className={style.icon + " " + style.arrow}></span>
                    </span>
                    <span className={style.button_text}>
                      {t.home.contactus}
                    </span>
                  </button>
                </Link>
              </div>
            </section>
            <section>
              <FadeIn>
                <div className="mt-32">
                  <div className={"bg-indigo-500 h-1 w-20"} />
                  <h3 className="lg:text-3xl font-bold mt-3">
                    {t.home.what_we_do_title}
                  </h3>
                </div>
              </FadeIn>
              <div>
                <div className="space-y-10 lg:space-y-0 grid lg:grid-cols-2 md:gap-x-8 md:gap-y-8 items-center">
                  <FadeIn>
                    <div className="grid justify-items-center mt-32">
                      <div className={style.background_2} />
                    </div>
                  </FadeIn>
                  <div>
                    <FadeIn>
                      <Link href="/service/wordpress">
                        <a
                          href="#"
                          className="relative hover:bg-indigo-50 py-4 px-4 hover:text-indigo-500"
                          onClick={soundClickButton}
                        >
                          <dt>
                            <div className="absolute flex items-center justify-center rounded-md">
                              <FcMultipleDevices className="w-10 h-10" />
                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium">
                              {t.service.website.title}
                            </p>
                          </dt>
                          <dd className="mt-5 lg:mt-2 lg:ml-16 text-base text-gray-500 line-clamp-4">
                            {t.service.website.sub_title}
                          </dd>
                        </a>
                      </Link>
                    </FadeIn>
                    <FadeIn>
                      <Link href="/service/website">
                        <a
                          href="#"
                          className="relative hover:bg-indigo-50  py-4 px-4 hover:text-indigo-500"
                          onClick={soundClickButton}
                        >
                          <dt>
                            <div className="absolute flex items-center justify-center rounded-md">
                              <FcPhoneAndroid className="w-10 h-10" />
                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium ">
                              {t.service.moblie.title}
                            </p>
                          </dt>
                          <dd className="mt-5 lg:mt-2 lg:ml-16 text-base text-gray-500 line-clamp-4">
                            {t.service.moblie.sub_title}
                          </dd>
                        </a>
                      </Link>
                    </FadeIn>
                    <FadeIn>
                      <Link href="/service/moblie">
                        <a
                          href="#"
                          className="relative hover:bg-indigo-50  py-4 px-4 hover:text-indigo-500"
                          onClick={soundClickButton}
                        >
                          <dt>
                            <div className="absolute flex items-center justify-center rounded-md">
                              <FcSelfServiceKiosk className="w-10 h-10" />
                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium ">
                              {t.service.desktop.title}
                            </p>
                          </dt>
                          <dd className="mt-5 lg:mt-2 lg:ml-16 text-base text-gray-500 line-clamp-4">
                            {t.service.desktop.sub_title}
                          </dd>
                        </a>
                      </Link>
                    </FadeIn>
                    <FadeIn>
                      <Link href="/service/desktop">
                        <a
                          href="#"
                          className="relative hover:bg-indigo-50  py-4 px-4 hover:text-indigo-500"
                          onClick={soundClickButton}
                        >
                          <dt>
                            <div className="absolute flex items-center justify-center rounded-md">
                              <FcEditImage className="w-10 h-10" />
                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium ">
                              {t.service.graphic.title}
                            </p>
                          </dt>
                          <dd className="mt-5 lg:mt-2 lg:ml-16 text-base text-gray-500 line-clamp-4">
                            {t.service.graphic.sub_title}
                          </dd>
                        </a>
                      </Link>
                    </FadeIn>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <FadeIn>
                <div className="grid justify-items-center mt-32">
                  <div className={style.background_3} />
                </div>
              </FadeIn>
              <FadeIn>
                <div className="mt-20">
                  <div>
                    <div className={"bg-indigo-500 h-1 w-20"} />
                    <h3 className="lg:text-3xl font-bold mt-3">
                      {t.home.team_title}
                    </h3>
                  </div>
                  <Carousel
                    // swipeable={true}
                    // draggable={true}
                    // showDots={true}
                    responsive={responsive}
                    //ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="px-3 mt-3 "
                    className="carousel_width"
                  >
                    {data
                      ? data.employees.map((value, i) => (
                          <motion.div
                            key={i}
                            className="card"
                            whileHover={{
                              position: "relative",
                              zIndex: 1,
                              background: "white",
                              scale: 1.05,
                              transition: {
                                duration: 0.2,
                              },
                            }}
                          >
                            <div
                              className="py-4 px-8  rounded-lg my-20 hover:shadow-lg hover:text-indigo-500"
                              key={i}
                            >
                              <div>
                                <div className="flex justify-center lg:justify-center -mt-16">
                                  <a>
                                    <Image
                                      width={100}
                                      height={100}
                                      className=" object-cover rounded-full border-2 hover:border-indigo-500"
                                      src={value.profile_url}
                                    />
                                  </a>
                                </div>
                                <div className="mt-3 text-center">
                                  <h2 className=" lg:text-lg font-semibold">
                                    {locale == "th"
                                      ? value.first_name.th
                                      : value.first_name.en}{" "}
                                    {locale == "th"
                                      ? value.last_name.th
                                      : value.last_name.en}
                                  </h2>
                                  <p className="mt-2 text-sm text-indigo-500">
                                    {value.position.map(
                                      (emp) => emp.title + " "
                                    )}
                                  </p>
                                  <p className="mt-2 text-gray-600 line-clamp-4">
                                    {locale == "th"
                                      ? value.detail.th
                                      : value.detail.en}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))
                      : [1, 2, 3].map((value) => (
                          <div key={value}>
                            <Skeleton
                              variant="circle"
                              width={100}
                              height={100}
                            />
                            <Skeleton variant="text" width={210} height={50} />
                            <Skeleton variant="rect" width={210} height={150} />
                          </div>
                        ))}
                  </Carousel>
                </div>
              </FadeIn>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
