import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { useState } from "react";
import style from "./index.module.scss";
import en from "../../locales/en";
import th from "../../locales/th";
import { HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "next-themes";
import {
  FcMultipleDevices,
  FcSelfServiceKiosk,
  FcPhoneAndroid,
  FcEditImage,
} from "react-icons/fc";
import { GrWordpress } from "react-icons/gr";
import useSound from "use-sound";

export default function Header() {
  const router = useRouter();
  //? menu
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  //? dark mode
  const { theme, setTheme } = useTheme();

  //? locales
  const { locale } = router;
  const t = locale === "en" ? en : th;

  //? changeLanguage
  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  //? select
  const [anchorEl, setAnchorEl] = useState(true);

  //? sound
  const [soundClick] = useSound("/sound/click.mp3");
  const [soundClickSwitch] = useSound("/sound/click-switch.mp3");

  return (
    <header className="font">
      <nav className="flex items-center flex-wrap p-3 container mx-auto px-4">
        <a className="inline-flex items-center p-2 mr-4 ">

          <span className="text-xl  font-bold uppercase tracking-wide">
            Tech Elegance
          </span>
        </a>

        <button
          className=" inline-flex p-3  rounded lg:hidden  ml-auto  outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a
                onClick={soundClick}
                className={`lg:inline-flex lg:w-auto w-full px-3 py-3  font-semibold items-center justify-center ${
                  style.effect_shine +
                  " " +
                  (router.pathname !== "/" ? "" : style.underline)
                } 
                }`}
              >
                {t.menu_home}
              </a>
            </Link>

            {/* <Link href="/portfolio">
              <a
                className={`lg:inline-flex lg:w-auto w-full px-3 py-3  font-semibold items-center justify-center ${
                  style.effect_shine +
                  " " +
                  (router.pathname !== "/portfolio" ? "" : style.underline)
                } 
                }`}
              >
                {t.menu_portfolio}
              </a>
            </Link> */}

            <a
              onMouseLeave={() => setAnchorEl(true)}
              onMouseEnter={() => setAnchorEl(false)}
              className={`lg:inline-flex lg:w-auto w-full px-3 py-3 flex font-semibold items-left justify-left ${
                style.effect_shine +
                " " +
                (router.pathname !== "/service" ? "" : style.underline)
              } 
                }`}
            >
              {t.menu_service}{" "}
              <svg
                className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </a>

            <div
              onMouseLeave={() => setAnchorEl(true)}
              onMouseEnter={() => setAnchorEl(false)}
              className={`absolute z-10 -ml-4 mt-32 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 ${style.mt_select} ${anchorEl ? "invisible" : ""}`}
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  <Link href="/service/wordpress">
                    <a
                      onClick={soundClick}
                      href="#"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <GrWordpress className="flex-shrink-0 h-6 w-6 text-blue-700" />
                      <div className="ml-4">
                        <p className="text-base font-semibold text-gray-900">
                        {t.service.wordpress.title}
                        </p>
                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                          {t.service.wordpress.sub_title}
                        </p>
                      </div>
                    </a>
                  </Link>
                  <Link href="/service/website">
                    <a
                      onClick={soundClick}
                      href="#"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <FcMultipleDevices className="flex-shrink-0 h-6 w-6 " />
                      <div className="ml-4">
                        <p className="text-base font-semibold text-gray-900">
                        {t.service.website.title}
                        </p>
                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                        {t.service.website.sub_title}
                        </p>
                      </div>
                    </a>
                  </Link>
                  <Link href="/service/moblie">
                    <a
                      onClick={soundClick}
                      href="#"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <FcPhoneAndroid className="flex-shrink-0 h-6 w-6 " />
                      <div className="ml-4">
                        <p className="text-base font-semibold text-gray-900">
                        {t.service.moblie.title}
                        </p>
                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                        {t.service.moblie.sub_title}
                        </p>
                      </div>
                    </a>
                  </Link>
                  <Link href="/service/desktop">
                    <a
                      onClick={soundClick}
                      href="#"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <FcSelfServiceKiosk className="flex-shrink-0 h-6 w-6 " />
                      <div className="ml-4">
                        <p className="text-base font-semibold text-gray-900">
                        {t.service.desktop.title}
                        </p>
                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                        {t.service.desktop.sub_title}
                        </p>
                      </div>
                    </a>
                  </Link>
                  <Link href="/service/graphic">
                    <a
                      onClick={soundClick}
                      href="#"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <FcEditImage className="flex-shrink-0 h-6 w-6 " />
                      <div className="ml-4">
                        <p className="text-base font-semibold text-gray-900">
                        {t.service.graphic.title}
                        </p>
                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                        {t.service.graphic.sub_title}
                        </p>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                  {/* <div className="flow-root">
                    <Link href="/portfolio">
                      <a className="-m-3 p-3 flex items-center rounded-md text-base font-semibold text-gray-900 hover:bg-gray-100">
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="ml-3">Watch Portfolio</span>
                      </a>
                    </Link>
                  </div> */}

                  <div className="flow-root">
                    <Link href="/contactus">
                      <a
                        onClick={soundClick}
                        className="-m-3 p-3 flex items-center rounded-md text-base font-semibold text-gray-900 hover:bg-gray-100"
                      >
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="ml-3">{t.menu_contact_us}</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/team">
              <a
                onClick={soundClick}
                className={`lg:inline-flex lg:w-auto w-full px-3 py-3  font-semibold items-center justify-center ${
                  style.effect_shine +
                  " " +
                  (router.pathname !== "/team" ? "" : style.underline)
                } 
                }`}
              >
                {t.menu_team}
              </a>
            </Link>
            <Link href="/aboutus">
              <a
                onClick={soundClick}
                className={`lg:inline-flex lg:w-auto w-full px-3 py-3  font-semibold items-center justify-center ${
                  style.effect_shine +
                  " " +
                  (router.pathname !== "/aboutus" ? "" : style.underline)
                } 
                }`}
              >
                {t.menu_about_us}
              </a>
            </Link>
            <Link href="/contactus">
              <a
                onClick={soundClick}
                className={`lg:inline-flex lg:w-auto w-full px-3 py-3  font-semibold items-center justify-center ${
                  style.effect_shine +
                  " " +
                  (router.pathname !== "/contactus" ? "" : style.underline)
                } 
                }`}
              >
                {t.menu_contact_us}
              </a>
            </Link>

            {locale === "en" ? (
              <button
                onClick={(value) => {
                  soundClick();
                  changeLanguage(value);
                }}
                value="th"
                className={
                  "lg:inline-flex lg:w-auto w-full px-3 py-3 font-semibold items-center justify-center text-left lg:ml-20 "
                }
              >
                {t.locales}
              </button>
            ) : (
              <button
                onClick={(value) => {
                  soundClick();
                  changeLanguage(value);
                }}
                value="en"
                className="lg:inline-flex lg:w-auto w-full px-3 py-3 font-semibold items-center justify-center text-left lg:ml-20"
              >
                {t.locales}
              </button>
            )}
            <a
              onClick={soundClickSwitch}
              className="transition duration-500 ease-in-out rounded-full p-2"
            >
              {theme === "dark" ? (
                <HiMoon
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-yellow-400 text-2xl cursor-pointer"
                />
              ) : (
                <HiSun
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-yellow-400 text-2xl cursor-pointer"
                />
              )}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
