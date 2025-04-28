"use client";

import { Parallax } from "react-parallax";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
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
      <Parallax bgImage="/path/to/your/background-image.jpg" strength={100}>
        <section className="py-16 flex flex-col p-50">
          {" "}
          {/* Added pr-8 */}
          <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
            {/* Image */}
          </div>
          <p className="text-lg text-[#DE847B] mb-4 text-left">Hi ! , I am</p>
          <h1 className="text-4xl font-bold text-[#DEB3AD] mb-2 ">
            Hasya Binti Abdul Manan
          </h1>
          <p className="text-md text-[#DE847B] mb-4 text-left">
            Junior developer with a solid grounding in full-stack development.
            <br></br>
            Continuously expanding my skillset in the ever-evolving web
            development landscape.
          </p>
          {/* Optional: Social links or a brief call to action */}
        </section>
      </Parallax>

      {/* About Me Section */}
      <section className="py-16">
        {" "}
        {/* Removed background-white */}
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#B95C50] mb-6">About Me</h2>{" "}
          {/* Using another of your colors for heading */}
          <p className="text-lg text-gray-400">
            {" "}
            {/* Using a light gray for readable text on black */}
            Here you can write a more detailed description about yourself, your
            background, skills, and interests.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        {" "}
        {/* Removed background-pink-100 */}
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#DEB3AD] mb-6">Projects</h2>{" "}
          {/* Using one of your colors for heading */}
          <p className="text-lg text-gray-400">
            {" "}
            {/* Using a light gray for readable text on black */}
            Showcase your projects here! You can list them with descriptions and
            links.
          </p>
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-300 py-4 text-center border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  );
}
