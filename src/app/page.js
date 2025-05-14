"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const introRef = useRef(null);
  const vueRef = useRef(null);
  const tailwindRef = useRef(null);
  const bootstrapRef = useRef(null);
  const aboutMeSectionRef = useRef(null);
  const aboutMeHeadingRef = useRef(null);
  const aboutMeParagraphRef = useRef(null);
  const javascriptRef = useRef(null);
  const prismaRef = useRef(null);
  const nuxtRef = useRef(null);
  const laravelRef = useRef(null);
  const githubRef = useRef(null);
  const postmanRef = useRef(null);
  const vscodeRef = useRef(null);
  const mysqlRef = useRef(null);
  const cpanelRef = useRef(null);
  const nginxRef = useRef(null);

  useEffect(() => {
    if (!isLoading && vueRef.current && tailwindRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: vueRef.current, // can be any section containing both
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        vueRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
      )
        .fromTo(
          tailwindRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
          // "+=0.1" // optional delay between animations
        )
        .fromTo(
          bootstrapRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
          // "+=0.1"
        )
        .fromTo(
          javascriptRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
          // "+=0.1"
        )
        .fromTo(
          nuxtRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
          // "+=0.1"
        )
        .fromTo(
          prismaRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
          // "+=0.1"
        )

        .fromTo(
          laravelRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
          // "+=0.1"
        )
        .fromTo(
          githubRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
          // "+=0.1"
        )
        .fromTo(
          postmanRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
          // "+=0.1"
        )
        .fromTo(
          vscodeRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
          // "+=0.1"
        )
        .fromTo(
          mysqlRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
          // "+=0.1"
        )
        .fromTo(
          cpanelRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
          // "+=0.1"
        )
        .fromTo(
          nginxRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
          // "+=0.1"
        );
    }
  }, [isLoading]);

  /** hero section*/
  useEffect(() => {
    if (!isLoading && introRef.current) {
      gsap.to(introRef.current, {
        opacity: 0,
        y: -50, // move up 50px
        ease: "none",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, [isLoading]);

  /** About Me Section Animation  */
  useEffect(() => {
    if (
      !isLoading &&
      aboutMeSectionRef.current &&
      aboutMeHeadingRef.current &&
      aboutMeParagraphRef.current
    ) {
      gsap.fromTo(
        aboutMeHeadingRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutMeSectionRef.current,
            start: "top 80%", // Adjust as needed
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        aboutMeParagraphRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutMeSectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
      // Fade out the entire About Me section after it has been fully viewed
      gsap.to(aboutMeSectionRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: aboutMeSectionRef.current,
          start: "bottom center", // Start fading out when the bottom of the section hits the center of the viewport
          end: "bottom top", // Fully faded out when the bottom of the section reaches the top of the viewport
          scrub: true, // Link the animation to the scroll
        },
      });
    }
  }, [isLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Hasya Binti Abdul Manan</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      {/* Hero Section with Parallax */}

      <section ref={introRef} className="py-16 flex flex-col p-50">
        {" "}
        <p className="text-lg text-[#DE847B] mb-4 text-left">Hi ! , I am</p>
        <h1 className="text-4xl font-bold text-[#DEB3AD] mb-2 ">
          Hasya Binti Abdul Manan
        </h1>
        <p className="text-md text-[#DE847B] mb-4 text-left">
          <span className="text-[#a2a0a0] text-2xl">Junior developer</span> with
          a solid grounding in full-stack development.
          <br></br>
          Aspiring to contribute meaningfully while expanding my skillset in
          this dynamic field.
        </p>
        {/* Optional: Social links or a brief call to action */}
      </section>

      {/* About Me Section */}
      <section ref={aboutMeSectionRef} className="py-14">
        {" "}
        {/* Removed background-white */}
        <div className="container mx-auto text-center ">
          <h2
            ref={aboutMeHeadingRef}
            className="text-3xl font-bold text-[#B95C50] mb-6"
          >
            About Me
          </h2>{" "}
          {/* Using another of your colors for heading */}
          <p ref={aboutMeParagraphRef} className="text-lg text-gray-400 px-50">
            {" "}
            {/* Using a light gray for readable text on black */}A junior
            developer with two years of experience in developing web
            applications. Possesses a solid foundation in software development
            principles and a strong eagerness to learn and adapt to new
            technologies and frameworks. A collaborative team player with a
            proactive approach to problem-solving and a commitment to delivering
            high-quality applications.
          </p>
        </div>
      </section>
      {/* Stack Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto text-left pl-8 sm:pl-16 md:pl-24 lg:pl-32 xl:pl-48 py-16">
          <h1 className="text-xl  text-[#DEB3AD] mb-10">
            My technologies and tools
          </h1>
          <div className="mb-8 mx-20">
            <div className="flex">
              {/* <h3 className="text-xl font-semibold text-[#DEB3AD] mr-50">
                Frontend
              </h3> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {" "}
                {/* Use grid for 2 columns initially */}
                <div ref={vueRef} className="flex items-center gap-4">
                  <div className="w-8 h-8 relative">
                    <Image
                      src="/logos/vue.png"
                      alt="Vue.js Logo"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="text-gray-400 text-lg sm:text-xl">
                    Vue.js
                  </span>
                </div>
                <div ref={tailwindRef} className="flex items-center gap-4">
                  <div className="w-10 h-10 relative">
                    <Image
                      src="/logos/tailwind-css.png"
                      alt="Tailwind CSS Logo"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="text-gray-400 text-md sm:text-xl">
                    Tailwind CSS
                  </span>
                </div>
                <div ref={bootstrapRef} className="flex items-center gap-4">
                  <div className="w-10 h-10 relative">
                    <Image
                      src="/logos/bootstrap.png"
                      alt="Bootstrap Logo"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="text-gray-400 text-lg sm:text-xl">
                    Bootstrap
                  </span>
                </div>
                <div ref={javascriptRef} className="flex items-center gap-4">
                  <div className="w-10 h-10 relative">
                    {/* Add JavaScript Logo */}
                    <Image
                      src="/logos/javascript-js.svg"
                      alt="JavaScript Logo"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="text-gray-400 text-lg sm:text-xl">
                    JavaScript
                  </span>
                </div>
                <div ref={nuxtRef} className="flex items-center gap-4">
                  <div className="w-10 h-10 relative">
                    {/* Add JavaScript Logo */}
                    <Image
                      src="/logos/nuxt.svg"
                      alt="nuxt Logo"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="text-gray-400 text-lg sm:text-xl">Nuxt</span>
                </div>
                <div ref={prismaRef} className="flex items-center gap-4">
                  <div className="w-10 h-10 relative">
                    {/* Add JavaScript Logo */}
                    <Image
                      src="/logos/prisma.svg"
                      alt="prisma Logo"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="text-gray-400 text-lg sm:text-xl">
                    Prisma
                  </span>
                </div>
                <div ref={laravelRef} className="flex items-center gap-4">
                  <div className="w-10 h-10 relative">
                    {/* Add JavaScript Logo */}
                    <Image
                      src="/logos/laravel.svg"
                      alt="Laravel Logo"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="text-gray-400 text-lg sm:text-xl">
                    Laravel
                  </span>
                </div>
                <div ref={githubRef} className="flex items-center gap-4">
                  <div className="w-10 h-10 relative">
                    {/* Add JavaScript Logo */}
                    <Image
                      src="/logos/github.svg"
                      alt="github Logo"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="text-gray-400 text-lg sm:text-xl">
                    gitHub
                  </span>
                </div>
                <div ref={postmanRef} className="flex items-center gap-4">
                  <div className="w-10 h-10 relative">
                    {/* Add JavaScript Logo */}
                    <Image
                      src="/logos/postman.svg"
                      alt="postman Logo"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="text-gray-400 text-lg sm:text-xl">
                    Postman
                  </span>
                </div>
                <div ref={vscodeRef} className="flex items-center gap-4">
                  <div className="w-8 h-8 relative">
                    {/* Add JavaScript Logo */}
                    <Image
                      src="/logos/visual-studio-code.svg"
                      alt="vscode Logo"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="text-gray-400 text-sm sm:text-xl">
                    Visual Studio Code
                  </span>
                </div>
                <div ref={mysqlRef} className="flex items-center gap-4">
                  <div className="w-14 h-14 relative">
                    {/* Add JavaScript Logo */}
                    <Image
                      src="/logos/mysql.svg"
                      alt="mysql Logo"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="text-gray-400 text-sm sm:text-xl">
                    MySQL
                  </span>
                </div>
                <div ref={cpanelRef} className="flex items-center gap-4">
                  <div className="w-14 h-14 relative">
                    {/* Add JavaScript Logo */}
                    <Image
                      src="/logos/cpanel.svg"
                      alt="cpanel Logo"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="text-gray-400 text-sm sm:text-xl">
                    cpanel
                  </span>
                </div>
                <div ref={nginxRef} className="flex items-center gap-4">
                  <div className="w-12 h-12 relative">
                    {/* Add JavaScript Logo */}
                    <Image
                      src="/logos/nginx.svg"
                      alt="nginx Logo"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="text-gray-400 text-sm sm:text-xl">
                    nginx
                  </span>
                </div>
                {/* Add more frontend technologies here if needed */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black pl-8 sm:pl-16 md:pl-24 lg:pl-32 xl:pl-48"></section>
      {/* Projects Section */}
      <section className="py-16">
        {" "}
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#DEB3AD] mb-6">Projects</h2>{" "}
          <p className="text-lg text-gray-400">
            {" "}
            Showcase your projects here! You can list them with descriptions and
            links.
          </p>
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-300 py-4 text-center border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} Hasya Binti Abdul Manan</p>
      </footer>
    </div>
  );
}
