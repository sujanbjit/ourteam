/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { EffectFade } from "swiper";
import style from "./header.module.scss";
import Lottie from "lottie-react";
import sliderAnimation1 from "./slider1.json";
import "swiper/css";
SwiperCore.use([Navigation, Pagination, A11y]);

export default function Home() {
  const swiper = useSwiper();
  const [startAnimation, setStartAnimation] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [hasMenuOpened, setHasMenuOpened] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
      SwiperCore.use([Autoplay]);
    }, 2200);
  }, []);

  const scroll = () => {
    var element = document.getElementById("introDiv");
    element.scrollIntoView({ behavior: "smooth" });
  };

  const [scrolled, setScrolled] = useState(false);
  var lastScrollTop = 0;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const offset = window.scrollY;
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st < lastScrollTop && offset > 220) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    lastScrollTop = st <= 0 ? 0 : st;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll, scrolled]);

  const mobileMenu = () => {
    setHasMenuOpened(true);
    setOpenMobileMenu(!openMobileMenu);
  };

  const sliderRef = useRef();
  useEffect(() => {
    // sliderRef.current?.swiper.slideTo(currentIndex);
  }, [currentIndex]);

  return (
    <>
      {hasMenuOpened && (
        <div
          className={
            openMobileMenu
              ? style.mobileMenu
              : style.mobileMenu + " " + style.mobileClose
          }
        >
          <div className={style.close} onClick={() => mobileMenu()}>
            <i className="fa-solid fa-circle-xmark"></i>
          </div>

          <div className={style.spMenuList}>
            <Image width={160} height={60} src="/images/logo-sp.png" />
            <div className={style.menuTwoSide}>
              <ul>
                <li>
                  <select className={style.selectLang} defaultValue="en">
                    <option value="bn"> ??????????????? </option>
                    <option value="en"> English </option>
                  </select>
                </li>

                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> Partha San (PM)</a>
                  </Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> Sujan (developer) </a>
                  </Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> Israt (developer)</a>
                  </Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> Saadman (developer)</a>
                  </Link>
                </li>

                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> Muhaiminul (developer) </a>
                  </Link>
                </li>

                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> Yeasin (developer) </a>
                  </Link>
                </li>
              </ul>

              <ul>
                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> Kuntul (developer) </a>
                  </Link>
                </li>

                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> Foysal (developer)</a>
                  </Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> Shorab (developer) </a>
                  </Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> Jaima (developer) </a>
                  </Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> Zulkar (developer)</a>
                  </Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> Safa (developer)</a>
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
      )}

      {scrolled && (
        <div className={style.sticky}>
          <div className={style.headerMenuLeftSticky}></div>
          <div className={style.headerMenuRightSticky}>
            <ul>
              <li>
                <select className={style.selectLang} defaultValue="en">
                  <option value="bn"> ??????????????? </option>
                  <option value="en"> English </option>
                </select>
              </li>
              <li
                className={style.bgButtonGreen + " " + style.onlyMobile}
                onClick={() => mobileMenu()}
              >
                <i className="fa fa-solid fa-bars"></i> ????????????{" "}
              </li>
              <li className={style.bgButtonGreenDark}>
                <i className="fa fa-thin fa-user"></i> ????????????
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className={style.mainAnimation}>
        <div className={style.header}>
          <div className={style.headerMenu}> </div>
          <div className={style.headerMenuLeft}></div>
          <div className={style.headerTitle}>

            <div className={style.headerTitleText}>
              BJIT Limited, Head Office, 4Digit Team Dhaka
            </div>
            <div className={style.headerSubTitleText}>
              Bangladesh & Japan Joint Venture Company, Dhaka Bangladesh!
            </div>
          </div>

          <div className={style.headerTitleSP}>

            <div className={style.headerTitleTextSP}>
              BJIT Limited, Head Office, Dhaka
            </div>
          </div>

          <div className={style.headerMenuRight}>
            <ul>
              <li>
                <select className={style.selectLang} defaultValue="en">
                  <option value="bn"> ??????????????? </option>
                  <option value="en"> English </option>
                </select>
              </li>
              <li
                className={style.bgButtonGreen + " " + style.onlyMobile}
                onClick={() => mobileMenu()}
              >
                <i className="fa fa-solid fa-bars"></i> Team
              </li>
              <li className={style.bgButtonGreenDark}>
                <i className="fa fa-thin fa-user"></i> Login
              </li>
            </ul>
          </div>



          {startAnimation && (
            <div className={style.sliderArea}>
              <div className={style.animationArea}>
                <a href="#" target="_blank">
                  <div className={style.firstBox}>
                    Partha
                  </div>
                </a>
                <div className={style.secondLine}> </div>
                <div className={style.thirdBox}> </div>
                <div className={style.fourthdBox}> </div>
                <div className={style.fifthBox}> </div>
                <div className={style.sixthBox}> </div>
                <div className={style.seventhBox}>
                  <i className="fa-solid fa-money-bill"></i>
                </div>
                <a href="#" target="_blank">
                  <div className={style.eighthBoxMenu}>
                    <p>Sujan</p>
                  </div>
                </a>
                <div className={style.ninethBox}>
                  <i className="fa-solid fa-users-viewfinder"></i>
                </div>

                <a href="#" target="_blank">
                  <div className={style.tenthBoxMenu}>
                    {/* <i className="fa-solid fa-users-gear"></i> */}
                    <p>
                      Israt
                    </p>
                  </div>
                </a>
                <div className={style.eleventhLine}> </div>
                <div className={style.twelvethBox}>
                  <i className="fa-solid fa-book"></i>
                </div>
                <a href="#" target="_blank">
                  <div className={style.thirteenthBoxMenu}>
                    <p>Saadman </p>
                  </div>
                </a>
                <div className={style.fourteenBox}>
                  <i className="fa-sharp fa-solid fa-angles-right"></i>
                </div>

                <div
                  className={style.fifteenBoxmenu}
                  onClick={() => mobileMenu()}
                >
                  <p> Full Dev List </p>
                </div>
              </div>
            </div>
          )}

          <div className={style.bottomArea}>
            <div className={style.bottomLeftMenu}>
              <div className={style.iconBorder} onClick={() => scroll()}>
                &#x2193;
              </div>
            </div>

            <div className={style.bottomRightMenu}></div>
            <div className={style.bottomRound}></div>
          </div>
        </div>
      </div>
    </>
  );
}
