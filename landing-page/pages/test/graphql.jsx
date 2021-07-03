import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import en from "../../locales/en";
import th from "../../locales/th";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NextSeo } from "next-seo";
import "react-multi-carousel/lib/styles.css";
import Skeleton from "@material-ui/lab/Skeleton";
import { useQuery, gql } from "@apollo/client";

export default function Team() {
  const router = useRouter();
  //?locales
  const { locale } = router;
  const loc = locale === "en" ? en : th;
  const t = loc.team;

  const { data, loading, error } = useQuery(
    gql`
    query {
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
      }
    `
  );
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
            </section>
            <section className="mt-20">
              <div className="grid md:grid-cols-3 grid-cols-1 md:gap-4">
                {data
                  ? data.employees.map((value, i) => (
                      <div
                        className="py-4 px-8  rounded-lg my-20 hover:shadow-lg hover:text-indigo-500"
                        key={i}
                      >
                        <div>
                          <div className="flex justify-center lg:justify-center -mt-16">
                            <a>
                              <Image
                                width={300}
                                height={300}
                                className=" object-cover border-2 hover:border-indigo-500 "
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
                              {value.position.map((emp) => emp.title + " ")}
                            </p>
                            <p className="mt-2 text-gray-600 line-clamp-4">
                              {locale == "th"
                                ? value.detail.th
                                : value.detail.en}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  : [1, 2, 3].map((value) => (
                      <div key={value}>
                        <Skeleton variant="rect" width={210} height={200} />
                        <Skeleton variant="text" width={210} height={50} />
                        <Skeleton variant="rect" width={210} height={150} />
                      </div>
                    ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
