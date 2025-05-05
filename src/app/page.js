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
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          tailwindRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
          // "+=0.1" // optional delay between animations
        )
        .fromTo(
          bootstrapRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
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

  /** About Me Section Animation (using similar useEffect syntax) */
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
            start: "top 70%", // Adjust to start slightly before the heading
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
      <section ref={aboutMeSectionRef} className="py-16">
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
          <h1 className="text-3xl font-bold text-[#DEB3AD] mb-6">My Stack</h1>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#DEB3AD] mb-2">
              Frontend
            </h3>
            <div className="ml-4">
              <div ref={vueRef} className="flex items-center gap-4 mt-2">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/logos/vue.png"
                    alt="Vue.js Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <span className="text-gray-400 text-2xl">Vue.js</span>
              </div>
              <div ref={tailwindRef} className="flex items-center gap-4 mt-2">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/logos/tailwind-css.png"
                    alt="Tailwind CSS Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <span className="text-gray-400 text-2xl">Tailwind CSS</span>
              </div>
              <div ref={bootstrapRef} className="flex items-center gap-4 mt-2">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/logos/bootstrap.png"
                    alt="Bootstrap Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <span className="text-gray-400 text-2xl">Bootstrap</span>
              </div>
            </div>
          </div>
          <div className="pl-4">
            <h3 className="text-xl font-semibold text-[#DEB3AD] mb-2">
              Backend
            </h3>
            <div className="ml-4">
              <div className="flex items-center gap-4 mt-2">
                {/* <div className="w-10 h-10 relative">
                  <Image
                    src="/logos/prisma.png"
                    alt="Prisma Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div> */}
                <span className="text-gray-400">Prisma</span>
              </div>
              <div className="flex items-center gap-4 mt-2">
                {/* <div className="w-10 h-10 relative">
                  <Image
                    src="/logos/laravel.png"
                    alt="Laravel Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div> */}
                <span className="text-gray-400">Laravel</span>
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
