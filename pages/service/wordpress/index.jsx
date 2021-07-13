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
import { FcCheckmark } from "react-icons/fc";
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
  const [loaded, setLoaded] = useState(false);
  //?locales
  const { locale } = router;
  const loc = locale === "en" ? en : th;
  const t = loc.service.wordpress;

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
                <p className="lg:text-xl mt-4">{t.sub_title}</p>
              </div>
              <div className="grid justify-items-center mt-20">
                <div className={style.background_3} />
              </div>
              <div className="mt-20">
                <div className={"bg-indigo-500 h-1 w-20"} />
                <h3 className="lg:text-3xl font-bold mt-3">Business Plan</h3>
                <p className="mt-3 text-gray-400">{t.sub_business_plan}</p>
                <div className="grid justify-items-center mt-20">
                  <div className={style.background_1} />
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-20 items-center">
                  <div>
                    <div>
                      <h3 className="font-bold">1. {t.detail.design}</h3>
                      <p className="text-gray-500 ">{t.detail.main_page}</p>
                      <p className="text-gray-500">{t.detail.about_us}</p>
                      <p className="text-gray-500">
                        {t.detail.product_service}
                      </p>
                      <p className="text-gray-500">{t.detail.blog} </p>
                      <p className="text-gray-500">{t.detail.contact_us}</p>
                    </div>
                    <div className="mt-5">
                      <h3 className="font-bold">2. {t.detail.cms}</h3>
                      <p className="text-gray-500">{t.detail.manage_banner}</p>
                      <p className="text-gray-500">{t.detail.manage_blog}</p>
                      <p className="text-gray-500">{t.detail.send_email}</p>
                    </div>
                    <div className="mt-5">
                      <h3 className="font-bold">3. {t.detail.other}</h3>
                      <p className="text-gray-500">Domain name</p>
                      <p className="text-gray-500">Cloud Server</p>
                      <p className="text-gray-500">Cloudflare SSL</p>
                      <p className="text-gray-500">{t.detail.educate}</p>
                      <p className="text-gray-500">
                        {t.detail.support_freeyear}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div>
                      <div className="grid justify-items-center mt-20">
                        <div className={style.background_contact} />
                      </div>
                      <h3 className="font-bold mt-7">{t.pricing.pay_once}</h3>
                      <h3 className="font-black text-3xl mt-3">
                        <span className="bg-indigo-500 text-white px-7">
                          {t.pricing.pay_business}
                        </span>
                      </h3>
                      <p className="text-gray-500 text-sm mt-3">
                        {t.pricing.pay_businessYear}
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
                            {t.pricing.contact_us}
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="h-16" />
            <section>
              <div className="mt-20">
                <div className={"bg-indigo-500 h-1 w-20"} />
                <h3 className="lg:text-3xl font-bold mt-3">E-Commerce Plan</h3>
                <p className="mt-3 text-gray-400">{t.sub_ecommerce_plan}</p>
                <div className="grid justify-items-center mt-20">
                  <div className={style.background_2} />
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-10 items-center">
                  <div>
                    <div>
                      <h3 className="font-bold">1. {t.detail.design}</h3>
                      <p className="text-gray-500 ">{t.detail.main_page}</p>
                      <p className="text-gray-500">{t.detail.about_us}</p>
                      <p className="text-gray-500">
                        {t.detail.product_service}
                      </p>
                      <p className="text-gray-500">{t.detail.blog} </p>
                      <p className="text-gray-500">{t.detail.contact_us}</p>
                    </div>
                    <div className="mt-5">
                      <h3 className="font-bold">2. {t.detail.cms}</h3>
                      <p className="text-gray-500">{t.detail.manage_banner}</p>
                      <p className="text-gray-500">
                        {t.detail.manage_blogPromotion}
                      </p>
                      <p className="text-gray-500">
                        {t.detail.manage_customer}
                      </p>
                      <p className="text-gray-500">{t.detail.manage_Product}</p>
                      <p className="text-gray-500">{t.detail.pricing_credit}</p>
                      <p className="text-gray-500">{t.detail.dashboard}</p>
                    </div>
                    <div className="mt-5">
                      <h3 className="font-bold">3. {t.detail.other}</h3>
                      <p className="text-gray-500">Domain name</p>
                      <p className="text-gray-500">Cloud Server</p>
                      <p className="text-gray-500">Cloudflare SSL</p>
                      <p className="text-gray-500">{t.detail.educate}</p>
                      <p className="text-gray-500">
                        {t.detail.support_freeyear}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="grid justify-items-center mt-20">
                      <div className={style.background_contact} />
                    </div>
                    <h3 className="font-bold mt-7">{t.pricing.pay_once}</h3>
                    <h3 className="font-black text-3xl mt-3">
                      <span className="bg-indigo-500 text-white px-7">
                        {t.pricing.pay_ecommerce}
                      </span>
                    </h3>
                    <p className="text-gray-500 text-sm mt-3">
                      {t.pricing.pay_ecommerceYear}
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
                          {t.pricing.contact_us}
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            <div className="h-32" />
            <section>
              <h3 className="text-center font-semibold">{t.compare.title}</h3>
              <div className="grid grid-cols-4 gap-4 mt-5 bg-indigo-500 bg-opacity-100 p-3">
                <div className="col-span-2"></div>
                <div className="text-center">
                  <h3 className="font-black text-white">Business</h3>
                  <small className="text-gray-300">
                    {t.pricing.pay_business}
                  </small>
                </div>
                <div className="text-center">
                  <h3 className="font-black text-white">ECommerce</h3>
                  <small className="text-gray-300">
                    {t.pricing.pay_ecommerce}
                  </small>
                </div>
              </div>
              <hr className="mt-3" />
              <div>
                <div className="grid grid-cols-4 gap-4 mt-1 items-center">
                  <div className="col-span-2">
                    <h3 className="font-black">{t.compare.storage}</h3>
                    <small className="text-gray-500">
                      {t.compare.storage_dt}
                    </small>
                  </div>
                  <div className="text-center">
                    <span className="text-gray-500 "> {t.compare.noLimit}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-gray-500 ">{t.compare.noLimit}</span>
                  </div>
                </div>
                <hr className="mt-1" />
              </div>
              <div>
                <div className="grid grid-cols-4 gap-4 mt-1 items-center">
                  <div className="col-span-2">
                    <h3 className="font-black">{t.compare.ssl}</h3>
                    <small className="text-gray-500">{t.compare.ssl_dt}</small>
                  </div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                </div>
                <hr className="mt-1" />
              </div>
              <div>
                <div className="grid grid-cols-4 gap-4 mt-1 items-center">
                  <div className="col-span-2">
                    <h3 className="font-black">{t.compare.blog}</h3>
                    <small className="text-gray-500">{t.compare.blog_dt}</small>
                  </div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                </div>
                <hr className="mt-1" />
              </div>
              <div>
                <div className="grid grid-cols-4 gap-4 mt-1 items-center">
                  <div className="col-span-2">
                    <h3 className="font-black">{t.compare.analytics}</h3>
                    <small className="text-gray-500">
                      {t.compare.analytics_dt}
                    </small>
                  </div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                </div>
                <hr className="mt-1" />
              </div>
              <div>
                <div className="grid grid-cols-4 gap-4 mt-1 items-center">
                  <div className="col-span-2">
                    <h3 className="font-black">{t.compare.saveHistory}</h3>
                    <small className="text-gray-500">
                      {t.compare.saveHistory_dt}
                    </small>
                  </div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                </div>
                <hr className="mt-1" />
              </div>
              <div className="font-extrabold bg-gray-300 bg-opacity-25 p-3">
                {t.compare.marketIngfeatures}
              </div>
              <div>
                <div className="grid grid-cols-4 gap-4 mt-1 items-center">
                  <div className="col-span-2">
                    <h3 className="font-black">{t.compare.socialShare}</h3>
                    <small className="text-gray-500">
                      {t.compare.socialShare_dt}
                    </small>
                  </div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                </div>
                <hr className="mt-1" />
              </div>
              <div>
                <div className="grid grid-cols-4 gap-4 mt-1 items-center">
                  <div className="col-span-2">
                    <h3 className="font-black">
                      {t.compare.contactManagement}
                    </h3>
                    <small className="text-gray-500">
                      {t.compare.contactManagement_dt}
                    </small>
                  </div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                </div>
                <hr className="mt-1" />
              </div>
              <div>
                <div className="grid grid-cols-4 gap-4 mt-1 items-center">
                  <div className="col-span-2">
                    <h3 className="font-black">{t.compare.leadCapture}</h3>
                    <small className="text-gray-500">
                      {t.compare.leadCapture_dt}
                    </small>
                  </div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                </div>
                <hr className="mt-1" />
              </div>
              <div>
                <div className="grid grid-cols-4 gap-4 mt-1 items-center">
                  <div className="col-span-2">
                    <h3 className="font-black"> {t.compare.adCredit}</h3>
                    <small className="text-gray-500">
                      {t.compare.adCredit_bt}
                    </small>
                  </div>
                  <div className="justify-self-center">{t.compare.payad}</div>
                  <div className="justify-self-center">{t.compare.payad}</div>
                </div>
                <hr className="mt-1" />
              </div>
              <div className="font-extrabold bg-gray-300 bg-opacity-25 p-3">
                {t.compare.eCommerceFeatures}
              </div>
              <div>
                <div className="grid grid-cols-4 gap-4 mt-1 items-center">
                  <div className="col-span-2">
                    <h3 className="font-black">{t.compare.onlineStore}</h3>
                    <small className="text-gray-500">
                      {t.compare.onlineStore_bt}
                    </small>
                  </div>
                  <div className="justify-self-center"></div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                </div>
                <hr className="mt-1" />
              </div>
              <div>
                <div className="grid grid-cols-4 gap-4 mt-1 items-center">
                  <div className="col-span-2">
                    <h3 className="font-black">{t.compare.digitalProducts}</h3>
                    <small className="text-gray-500">
                      {t.compare.digitalProducts_bt}
                    </small>
                  </div>
                  <div className="justify-self-center"></div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                </div>
                <hr className="mt-1" />
              </div>
              <div>
                <div className="grid grid-cols-4 gap-4 mt-1 items-center">
                  <div className="col-span-2">
                    <h3 className="font-black">{t.compare.onlinePayments}</h3>
                    <small className="text-gray-500">
                      {t.compare.onlinePayments_bt}
                    </small>
                  </div>
                  <div className="justify-self-center"></div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                </div>
                <hr className="mt-1" />
              </div>
              <div>
                <div className="grid grid-cols-4 gap-4 mt-1 items-center">
                  <div className="col-span-2">
                    <h3 className="font-black">{t.compare.order}</h3>
                    <small className="text-gray-500">
                      {t.compare.order_bt}
                    </small>
                  </div>
                  <div className="justify-self-center"></div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                </div>
                <hr className="mt-1" />
              </div>
              <div>
                <div className="grid grid-cols-4 gap-4 mt-1 items-center">
                  <div className="col-span-2">
                    <h3 className="font-black"> {t.compare.coupons}</h3>
                    <small className="text-gray-500">
                      {t.compare.coupons_bt}
                    </small>
                  </div>
                  <div className="justify-self-center"></div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                </div>
                <hr className="mt-1" />
              </div>
              <div>
                <div className="grid grid-cols-4 gap-4 mt-1 items-center">
                  <div className="col-span-2">
                    <h3 className="font-black"> {t.compare.transactional}</h3>
                    <small className="text-gray-500">
                      {t.compare.transactional_bt}
                    </small>
                  </div>
                  <div className="justify-self-center"></div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                </div>
                <hr className="mt-1" />
              </div>
              <div>
                <div className="grid grid-cols-4 gap-4 mt-1 items-center">
                  <div className="col-span-2">
                    <h3 className="font-black"> {t.compare.shipping}</h3>
                    <small className="text-gray-500">
                      {t.compare.shipping_bt}
                    </small>
                  </div>
                  <div className="justify-self-center"></div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                </div>
                <hr className="mt-1" />
              </div>
              <div className="font-extrabold bg-gray-300 bg-opacity-25 p-3">
                {t.compare.support}
              </div>
              <div>
                <div className="grid grid-cols-4 gap-4 mt-1 items-center">
                  <div className="col-span-2">
                    <h3 className="font-black">{t.compare.chatandemail}</h3>
                    <small className="text-gray-500">
                      {t.compare.chatandemail_dt}
                    </small>
                  </div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                </div>
                <hr className="mt-1" />
              </div>
              <div>
                <div className="grid grid-cols-4 gap-4 mt-1 items-center">
                  <div className="col-span-2">
                    <h3 className="font-black">{t.compare.phoneSupport}</h3>
                    <small className="text-gray-500">
                      {t.compare.phoneSupport_dt}
                    </small>
                  </div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                </div>
                <hr className="mt-1" />
              </div>
              <div>
                <div className="grid grid-cols-4 gap-4 mt-1 items-center">
                  <div className="col-span-2">
                    <h3 className="font-black"> {t.compare.prioritySupport}</h3>
                    <small className="text-gray-500">
                      {t.compare.prioritySupport_dt}
                    </small>
                  </div>
                  <div className="justify-self-center"></div>
                  <div className="justify-self-center">
                    <FcCheckmark />
                  </div>
                </div>
                <hr className="mt-1" />
              </div>
            </section>
            <section className="mt-20">
              <h3 className="text-2xl text-center">{t.sample}</h3>
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
                  <a href="http://www.forgemanagement.co.uk/">
                    <div
                      className={"shadow-md imageblog"}
                      style={{
                        backgroundImage: `url("https://res.cloudinary.com/techelegance/image/upload/v1623398172/Tech%20Elegance/portfolio/website/1_imf6rd.jpg")`,
                      }}
                    />
                  </a>
                </div>
                <div>
                  <a href="https://www.barbaramajeski.com/">
                    <div
                      className={"shadow-md imageblog"}
                      style={{
                        backgroundImage: `url("https://res.cloudinary.com/techelegance/image/upload/v1623398503/Tech%20Elegance/portfolio/website/1_km3o7a.jpg")`,
                      }}
                    />
                  </a>
                </div>
                <div>
                  <a href="https://res.cloudinary.com/techelegance/image/upload/v1623399119/Tech%20Elegance/portfolio/website/Blog_Detail_srwmyi.png">
                    <div
                      className={"shadow-md imageblog"}
                      style={{
                        backgroundImage: `url("https://res.cloudinary.com/techelegance/image/upload/v1623399119/Tech%20Elegance/portfolio/website/Blog_Detail_srwmyi.png")`,
                      }}
                    />
                  </a>
                </div>
                <div>
                  <a href="https://grisnastone.com/">
                    <div
                      className={"shadow-md imageblog"}
                      style={{
                        backgroundImage: `url("https://res.cloudinary.com/techelegance/image/upload/v1623401448/Tech%20Elegance/portfolio/website/4_suhw1p.jpg")`,
                      }}
                    />
                  </a>
                </div>
                <div>
                  <a href="https://www.savills.co.uk/">
                    <div
                      className={"shadow-md imageblog"}
                      style={{
                        backgroundImage: `url("https://res.cloudinary.com/techelegance/image/upload/v1623401448/Tech%20Elegance/portfolio/website/5_oivkay.jpg")`,
                      }}
                    />
                  </a>
                </div>
              </Carousel>
            </section>

            <section className="mt-20">
              <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-10">
                <div className="flex items-center">
                  <Image
                    src="https://res.cloudinary.com/techelegance/image/upload/v1623136845/Tech%20Elegance/landing%20page/language/wordpress_jubdem.svg"
                    height="50"
                    width="50"
                  />
                  <span className="ml-3 font-semibold">Wordpress</span>
                </div>
                <div className="flex items-center">
                  <Image
                    src="https://res.cloudinary.com/techelegance/image/upload/v1623136845/Tech%20Elegance/landing%20page/language/html5_g7xciv.svg"
                    height="50"
                    width="50"
                  />
                  <span className="ml-3 font-semibold">HTML</span>
                </div>
                <div className="flex items-center">
                  <Image
                    src="https://res.cloudinary.com/techelegance/image/upload/v1623136845/Tech%20Elegance/landing%20page/language/php_isx1iv.svg"
                    height="50"
                    width="50"
                  />
                  <span className="ml-3 font-semibold">PHP</span>
                </div>
                <div className="flex items-center">
                  <Image
                    src="https://res.cloudinary.com/techelegance/image/upload/v1623136845/Tech%20Elegance/landing%20page/language/mysql_f5ym6y.svg"
                    height="50"
                    width="50"
                  />
                  <span className="ml-3 font-semibold">MYSQL</span>
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
