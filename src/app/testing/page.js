"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function MyStackSection() {
  const textRef = useRef();
  const imageRef = useRef();
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    { src: "/images/stack1.jpg", alt: "Stack 1" },
    { src: "/images/stack2.jpg", alt: "Stack 2" },
  ];

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        duration: 1,
        ease: "power3.out",
      }
    );

    ScrollTrigger.create({
      trigger: imageRef.current,
      start: "top center",
      onEnter: () => setImageIndex(1),
      onLeaveBack: () => setImageIndex(0),
    });
  }, []);

  return (
    <div className="text-center mt-20">
      <h3 ref={textRef} className="text-3xl font-bold mb-6">
        My Stack
      </h3>
      <div ref={imageRef}>
        <Image
          src={images[imageIndex].src}
          alt={images[imageIndex].alt}
          width={300}
          height={200}
          className="mx-auto transition-all duration-500 rounded-lg"
        />
      </div>
    </div>
  );
}
