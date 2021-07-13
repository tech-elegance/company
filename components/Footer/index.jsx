import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import en from "../../locales/en";
import th from "../../locales/th";
import style from "./index.module.scss";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import facebook from "react-useanimations/lib/facebook";
import instagram from "react-useanimations/lib/instagram";
import useSound from "use-sound";

export default function Footer() {
  const router = useRouter();
  //?locales
  const { locale } = router;
  const t = locale === "en" ? en : th;

  //? sound
  const { stop } = useSound();
  const [soundClick] = useSound("/sound/click.mp3");
  const [soundFacebookHover] = useSound("/sound/facebook.mp3", {
    volume: 0.5,
  });
  const [soundInstagramHover] = useSound("/sound/instagram.mp3", {
    volume: 0.5,
  });
  const [soundGithubHover] = useSound("/sound/github.mp3", {
    volume: 0.5,
  });

  return (
    <>
      <hr className="mt-20" />
      <footer className={style.footer}>
        <div>
          Copyright © 2021
          {/* <a className={"font-bold "+style.logo}>
            TECH ELEGANCE
          </a> */}
        </div>
        <div>
          <a
            onMouseEnter={soundFacebookHover}
            onMouseLeave={stop}
            onClick={soundClick}
            href=""
            className={style.logo}
          >
            <UseAnimations
              animation={facebook}
              size={36}
              strokeColor="#3b5998"
            />
          </a>
          <a
            onMouseEnter={soundInstagramHover}
            onMouseLeave={stop}
            onClick={soundClick}
            href=""
            className={style.logo}
          >
            <UseAnimations
              animation={instagram}
              size={36}
              strokeColor="#8a3ab9"
            />
          </a>
          <a
            onMouseEnter={soundGithubHover}
            onMouseLeave={stop}
            onClick={soundClick}
            href=""
            className={style.logo}
          >
            <UseAnimations animation={github} size={36} strokeColor="#000" />
          </a>
        </div>
      </footer>
    </>
  );
}
