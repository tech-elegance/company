import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { useState } from "react";
import en from "../../locales/en";
import th from "../../locales/th";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NextSeo } from "next-seo";
import style from "./index.module.scss";
import UseAnimations from "react-useanimations";
import archive from "react-useanimations/lib/airplay";
import alertCircle from "react-useanimations/lib/alertCircle";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useSound from "use-sound";
import { AiFillPhone } from "react-icons/ai";
import { RiMailSendFill } from "react-icons/ri";
import { HiOfficeBuilding } from "react-icons/hi";
import useSWR from "swr";
import { gql } from "@apollo/client";
import fetcher from "../../middleware/fetcher";
import client from "../../middleware/apollo-client";

export default function Contact() {
  const router = useRouter();
  const [alert, setAlert] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  //? locales
  const { locale } = router;
  const loc = locale === "en" ? en : th;
  const t = loc.contactus;

  //? sound effect
  const [soundClick] = useSound("/sound/click.mp3");
  const [soundClickButton] = useSound("/sound/click-button.mp3");
  const [soundClickCheckbox] = useSound("/sound/click-checkbox.mp3", {
    volume: 0.5,
  });
  const [soundCloseCheckbox] = useSound("/sound/close-checkbox.mp3", {
    volume: 0.5,
  });

  //? form contact
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (value) => {
    soundClickButton();
    const { data } = await client.mutate({
      mutation: gql`
        mutation {
          createContect(
            first_name: "${value.first_name}"
            last_name: "${value.last_name}"
            email: "${value.email}"
            message: "${value.message}"
            plan: "${value.plan}"
          ) {
            first_name
            last_name
          }
        }
      `,
    });
    if (data) {
      reset();
      setAlert(true);
    }
  };

  //?find
  const { data, error } = useSWR(
    `query {
      plans {
        id
        title
      }
    }`,
    fetcher
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
          <div className="col-start-2 col-span-4">
            <section>
              <div className="mt-12">
                <h1 className="lg:text-4xl font-bold">{t.title}</h1>
                <p className="lg:text-xl mt-7">{t.sub_title}</p>
              </div>
              <div className="md:mt-10">
                <div className="grid md:grid-cols-2 gap-4 mt-7 item-center">
                  <div className="md:mt-0 mt-3">
                    <form
                      className="w-full max-w-lg "
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="flex flex-wrap  mb-6 ">
                        <div className="w-full lg:w-1/2 px-3 mb-6 lg:mb-0">
                          <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                            {t.form.firstname}
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            placeholder={t.form.first_example}
                            {...register("first_name", { required: true })}
                          />
                          {errors.first_name && (
                            <p className="text-red-500 text-xs ">
                              {t.form.first_validate}
                            </p>
                          )}
                        </div>
                        <div className="w-full lg:w-1/2 px-3">
                          <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                            {t.form.lastname}
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="text"
                            placeholder={t.form.last_example}
                            {...register("last_name", { required: true })}
                          />
                          {errors.last_name && (
                            <p className="text-red-500 text-xs ">
                              {t.form.last_validate}
                            </p>
                          )}
                        </div>
                        <div className="w-full px-3 mt-3">
                          <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                            {t.form.phone}
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="tel"
                            placeholder={t.form.phone_example}
                            {...register("phone", {
                              required: true,
                              maxLength: 10,
                            })}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-xs ">
                              {t.form.phone_validate}
                            </p>
                          )}
                        </div>
                        <div className="w-full px-3 mt-3">
                          <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                            {t.form.email}
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="email"
                            placeholder={t.form.email_example}
                            {...register("email", {
                              required: true,
                              pattern: /^\S+@\S+$/i,
                            })}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs ">
                              {t.form.email_validate}
                            </p>
                          )}
                        </div>
                        <div className="w-full px-3 mt-3">
                          <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                            {t.form.plan}
                          </label>
                          <select
                            className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            {...register("plan", { required: true })}
                            defaultValue=""
                          >
                            <option value="" disabled>
                              {t.form.select_here}
                            </option>
                            {data ? (
                              data.plans.map((value, i) => (
                                <option key={i} value={value.id}>
                                  {value.title}
                                </option>
                              ))
                            ) : (
                              <option>Wait...</option>
                            )}
                          </select>
                          {errors.plan && (
                            <p className="text-red-500 text-xs ">
                              {t.form.plan_validate}
                            </p>
                          )}
                        </div>
                        <div className="w-full px-3 mt-3">
                          <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                            {t.form.message}
                          </label>
                          <textarea
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="email"
                            placeholder={t.form.message_example}
                            {...register("message", { required: true })}
                          />
                          {errors.message && (
                            <p className="text-red-500 text-xs ">
                              {t.form.message_validate}
                            </p>
                          )}
                          <label className="inline-flex items-center mt-10">
                            <input
                              type="checkbox"
                              className="form-checkbox lg:h-5 lg:w-5 h-10 w-10 text-indigo-600"
                              {...register("checkbox", { required: true })}
                              checked={isChecked}
                              onChange={() => setIsChecked(!isChecked)}
                              onMouseUp={() => {
                                isChecked
                                  ? soundCloseCheckbox()
                                  : soundClickCheckbox();
                              }}
                            />
                            <span className="ml-2 text-sm text-gray-400">
                              {t.form.checkbox}
                            </span>
                          </label>
                          {errors.checkbox && (
                            <p className="text-red-500 text-xs ">
                              {t.form.checkbox_validate}
                            </p>
                          )}
                          <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md flex mt-5"
                          >
                            <UseAnimations
                              animation={archive}
                              size={36}
                              strokeColor="#fff"
                            />
                            <span className="mt-1">
                              {" "}
                              {t.form.button_submit}
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="text-gray-400  justify-self-center">
                    <p className="flex items-center md:mt-7 mt-3">
                      <HiOfficeBuilding className="w-8 h-8" />{" "}
                      <span className="ml-3">{t.contact.from}</span>
                    </p>
                    <p className="flex items-center md:mt-7 mt-3">
                      <AiFillPhone className="w-6 h-6" />{" "}
                      <span className="ml-3">{t.contact.phone}</span>
                    </p>
                    <p className="flex items-center md:mt-7 mt-3">
                      <RiMailSendFill className="w-6 h-6" />{" "}
                      <span className="ml-3">{t.contact.email}</span>
                    </p>

                    <div className="flex items-center md:mt-7 mt-3">
                      <a
                        href="https://line.me/R/ti/p/%40664jxwpp"
                        className={
                          "rounded-lg flex items-center " + style.linebutton
                        }
                      >
                        <Image
                          src="https://res.cloudinary.com/techelegance/image/upload/v1623136777/Tech%20Elegance/landing%20page/buttons/line_dlyiea.png"
                          width={32}
                          height={32}
                        />
                        <small>{t.contact.line}</small>
                      </a>
                      <small className="px-3 text-gray-400">
                        {t.contact.or}
                      </small>
                      <a
                        href="https://www.facebook.com/techelegancecompany"
                        className={
                          "rounded-lg flex items-center " + style.facebookbutton
                        }
                      >
                        <Image
                          src="https://res.cloudinary.com/techelegance/image/upload/v1624509019/Tech%20Elegance/landing%20page/buttons/1024px-Facebook_Logo__2019_ckg2wf.png"
                          width={32}
                          height={32}
                        />
                        <small>{t.contact.facebook}</small>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />

      <Dialog
        open={alert}
        onClose={() => {
          setAlert(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          <div className="flex font">
            <UseAnimations
              animation={alertCircle}
              strokeColor="green"
              size={56}
            />
            <span className="mt-3">{t.alert.title}</span>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="font">
            {t.alert.detail}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setAlert(false);
              soundClick();
            }}
            color="primary"
            autoFocus
          >
            {t.alert.close}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
