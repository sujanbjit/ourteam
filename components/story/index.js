/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Link from "next/link";
import { InView, useInView } from "react-intersection-observer";
import style from "./index.module.scss";
import { useEffect, useRef, useState } from "react";

export default function Story() {
  const [menuActiveIndex, setMenuActiveIndex] = useState(0);
  const tabContent = useRef(null);

  const resetAnimation = (index) => {
    setMenuActiveIndex(index);
  };
  return (
    <div className={style.story}>
      <InView>
        {({ inView, ref, entry }) => (
          <div ref={ref} className={style.storyWrapper}>
            <div className={style.tabMenu}>
              <div
                className={`${style.tabMenuItem} ${!menuActiveIndex && style.tabMenuItemActive
                  }`}
                onClick={() => resetAnimation(0)}
              >
                Recent Project
              </div>
              <div
                className={`${style.tabMenuItem} ${menuActiveIndex && style.tabMenuItemActive
                  }`}
                onClick={() => resetAnimation(1)}
              >
                Done Project
              </div>
            </div>

            <div className={style.tabContent} ref={tabContent}>
              <div
                className={style.tableContent1}
                style={{ display: !menuActiveIndex ? "block" : "none" }}
              >
                <div className={style.contentBgArea}>
                  <div className={style.demoImage}>
                    <Image
                      src="/images/story/galary7-min.JPG"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className={style.demoContent}>
                    <div className={style.title}>

                      Welcome to BJIT A global IT consulting firm
                    </div>
                    <div className={style.description}>
                      BJIT is an award-winning global IT company offering high-end IT solutions, including outsourcing, remote development, and 360-degree project management. BJIT has 750+ skilled engineers and operating in 7 global offices located in Japan, Finland, Singapore, The U.S.A, Sweden, Bangladesh and The Netherlands.
                    </div>
                    <div className={style.readMore}>
                      <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        See More
                      </a>
                    </div>
                  </div>
                  <div
                    className={
                      !inView
                        ? style.news1
                        : style.news1 + " " + style.startAnimation1
                    }
                  >
                    <div className={style.shortImage}>
                      <Image
                        src="/images/story/demo1.png"
                        width={100}
                        height={70}
                      />
                    </div>
                    <div className={style.shortTitle}>
                      BJIT 4 digit development team
                    </div>

                    <div className={style.seeMore}>
                      <Link href="/">
                        <a target="_blank"> See More </a>
                      </Link>
                    </div>
                  </div>

                  <div
                    className={
                      !inView
                        ? style.news2
                        : style.news2 + " " + style.startAnimation2
                    }
                  >
                    <div className={style.shortImage}>
                      <Image
                        src="/images/story/2.jpg"
                        width={100}
                        height={70}
                      />
                    </div>
                    <div className={style.shortTitle}>
                      BJIT 4 digit development team
                    </div>

                    <div className={style.seeMore}>
                      <Link href="/">
                        <a target="_blank"> See More </a>
                      </Link>
                    </div>
                  </div>

                  <div
                    className={
                      !inView
                        ? style.news3
                        : style.news3 + " " + style.startAnimation3
                    }
                  >
                    <div className={style.shortImage + " " + style.marginLeft}>
                      <Image
                        src="/images/story/3.png"
                        width={100}
                        height={70}
                      />
                    </div>
                    <div
                      className={style.shortTitle + " " + style.marginLeftTitle}
                    >
                      Office party on roof top!
                    </div>

                    <div className={style.seeMore + " " + style.marginLeftLink}>
                      <Link href="/">
                        <a target="_blank"> See More </a>
                      </Link>
                    </div>
                  </div>

                  {/* SP VIEw only slider */}
                  <div className={style.spSlider}>
                    <div className={style.storyContainer}>
                      <div
                        className={
                          !inView
                            ? style.news1SP
                            : style.news1SP + " " + style.startAnimation1SP
                        }
                      >
                        <div className={style.shortImageSP}>
                          <Image
                            src="/images/story/demo1.png"
                            width={100}
                            height={70}
                          />
                        </div>
                        <div
                          className={
                            style.shortTitle + " " + style.titleMarginSP
                          }
                        >
                          BJIT 4 digit development team
                        </div>

                        <div
                          className={style.seeMore + " " + style.marginLeftSP}
                        >
                          <Link href="/">
                            <a target="_blank"> See More </a>
                          </Link>
                        </div>
                      </div>

                      <div
                        className={
                          !inView
                            ? style.news1SP
                            : style.news1SP + " " + style.startAnimation1SP
                        }
                      >
                        <div className={style.shortImageSP}>
                          <Image
                            src="/images/story/3.png"
                            width={100}
                            height={70}
                          />
                        </div>
                        <div
                          className={
                            style.shortTitle + " " + style.titleMarginSP
                          }
                        >
                          Celebrating new project success!
                        </div>

                        <div
                          className={style.seeMore + " " + style.marginLeftSP}
                        >
                          <Link href="/">
                            <a target="_blank"> See More </a>
                          </Link>
                        </div>
                      </div>

                      <div
                        className={
                          !inView
                            ? style.news1SP
                            : style.news1SP + " " + style.startAnimation1SP
                        }
                      >
                        <div className={style.shortImageSP}>
                          <Image
                            src="/images/story/2.jpg"
                            width={100}
                            height={70}
                          />
                        </div>
                        <div
                          className={
                            style.shortTitle + " " + style.titleMarginSP
                          }
                        >
                          Photo gellery 4digit team!
                        </div>

                        <div
                          className={style.seeMore + " " + style.marginLeftSP}
                        >
                          <Link href="/">
                            <a target="_blank"> See More </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={style.tableContent1}
                style={{ display: !menuActiveIndex ? "none" : "block" }}
              >
                <div className={style.contentBgArea}>
                  <div className={style.demoImage}>
                    <Image
                      src="/images/story/demo2.png"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className={style.demoContent}>
                    <div className={style.title}>
                      Our Technology Services
                    </div>
                    <div className={style.description}>
                      If you are planning to modernize your aging IT infrastructure or you need additional development resources. Working with BJIT as a Trusted Partner will ensure you meet that demand and help manage your IT budget. Our services meet the needs of Global enterprises, SMB, and startups. Working with BJIT, you benefit from decades of IT and software development experience
                    </div>
                    <div className={style.readMore}>
                      <a
                        href=""
                        target="_blank"
                        rel="noreferrer"
                      >
                        See More
                      </a>
                    </div>
                  </div>
                  <div
                    className={
                      !inView
                        ? style.news1
                        : style.news1 + " " + style.startAnimation1
                    }
                  >
                    <div className={style.shortImage}>
                      <Image
                        src="/images/story/galary4-min.JPG"
                        width={100}
                        height={70}
                      />
                    </div>
                    <div className={style.shortTitle}>
                      Office party in Chefs Table !
                    </div>

                    <div className={style.seeMore}>
                      <Link href="/">
                        <a> See More </a>
                      </Link>
                    </div>
                  </div>

                  <div
                    className={
                      !inView
                        ? style.news2
                        : style.news2 + " " + style.startAnimation2
                    }
                  >
                    <div className={style.shortImage}>
                      <Image
                        src="/images/story/sitakundo.png"
                        width={100}
                        height={70}
                      />
                    </div>
                    <div className={style.shortTitle}>
                      Office area view random!
                    </div>

                    <div className={style.seeMore}>
                      <Link href="/">
                        <a target="_blank"> See More </a>
                      </Link>
                    </div>
                  </div>

                  <div
                    className={
                      !inView
                        ? style.news3
                        : style.news3 + " " + style.startAnimation3
                    }
                  >
                    <div className={style.shortImage + " " + style.marginLeft}>
                      <Image
                        src="/images/story/15-august.JPG"
                        width={100}
                        height={70}
                      />
                    </div>
                    <div
                      className={style.shortTitle + " " + style.marginLeftTitle}
                    >
                      Team meeting raning pic
                    </div>

                    <div className={style.seeMore + " " + style.marginLeftLink}>
                      <Link href="/">
                        <a target="_blank"> See More </a>
                      </Link>
                    </div>
                  </div>

                  {/* SP VIEw only */}
                  <div className={style.spSlider}>
                    <div className={style.storyContainer}>
                      <div
                        className={
                          !inView
                            ? style.news1SP
                            : style.news1SP + " " + style.startAnimation1SP
                        }
                      >
                        <div className={style.shortImageSP}>
                          <Image
                            src="/images/story/galary4-min.JPG"
                            width={100}
                            height={70}
                          />
                        </div>
                        <div
                          className={
                            style.shortTitle + " " + style.titleMarginSP
                          }
                        >
                          বিজ্ঞান ভাবনার পথের দুর্ভাবনা সরাচ্ছে কুমিল্লা
                        </div>

                        <div
                          className={style.seeMore + " " + style.marginLeftSP}
                        >
                          <Link href="/">
                            <a> See More </a>
                          </Link>
                        </div>
                      </div>

                      <div
                        className={
                          !inView
                            ? style.news1SP
                            : style.news1SP + " " + style.startAnimation1SP
                        }
                      >
                        <div className={style.shortImageSP}>
                          <Image
                            src="/images/story/sitakundo.png"
                            width={100}
                            height={70}
                          />
                        </div>
                        <div
                          className={
                            style.shortTitle + " " + style.titleMarginSP
                          }
                        >
                          সুনামগঞ্জের যেভাবে আকর্ষণীয় পর্যটন কেন্দ্র হয়ে
                        </div>

                        <div
                          className={style.seeMore + " " + style.marginLeftSP}
                        >
                          <Link href="/">
                            <a target="_blank">See More </a>
                          </Link>
                        </div>
                      </div>

                      <div
                        className={
                          !inView
                            ? style.news1SP
                            : style.news1SP + " " + style.startAnimation1SP
                        }
                      >
                        <div className={style.shortImageSP}>
                          <Image
                            src="/images/story/2.jpg"
                            width={100}
                            height={70}
                          />
                        </div>
                        <div
                          className={
                            style.shortTitle + " " + style.titleMarginSP
                          }
                        >
                          নান্দনিক রূপে সেজেছে খাগড়াছড়ির আলুটিলা
                        </div>

                        <div
                          className={style.seeMore + " " + style.marginLeftSP}
                        >
                          <Link href="">
                            <a target="_blank"> See More </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </InView>
    </div>
  );
}
