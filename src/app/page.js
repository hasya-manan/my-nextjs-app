"use client"; // Add this directive at the very top

import Image from "next/image";
import { useState, useEffect } from "react";

// import profilePic from "../../public/profile.jpg"; // Assuming you have a profile image

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can replace this with actual data fetching)
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust the duration as needed
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-pink-50 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-pink-600">
          Hasya Binti Abdul Manan
        </h1>{" "}
        {/* Replace with your actual name */}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 font-sans text-gray-700">
      {/* Hero Section (Your Introduction) */}
      <section className="py-16 flex flex-col items-center justify-center">
        <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
          {/* <Image
            src={profilePic}
            alt="My Profile Picture"
            layout="fill"
            objectFit="cover"
          /> */}
        </div>
        <h1 className="text-4xl font-bold text-pink-600 mb-2">Your Name</h1>
        <p className="text-lg text-gray-700 mb-4 text-center">
          A Junior Developer with experience in Frontend and Backend | Aspiring
          Designer
        </p>
        {/* Optional: Social links or a brief call to action */}
      </section>

      {/* About Me Section */}
      <section className="py-16 bg-white shadow-md">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-pink-600 mb-6">About Me</h2>
          <p className="text-lg text-gray-700">
            Here you can write a more detailed description about yourself, your
            background, skills, and interests.
          </p>
          {/* You can add more paragraphs or details here */}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-pink-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-pink-600 mb-6">Projects</h2>
          <p className="text-lg text-gray-700">
            Showcase your projects here! You can list them with descriptions and
            links.
          </p>
          {/* You'll add your project listings here */}
        </div>
      </section>

      {/* Contact Section (Optional for now) */}
      {/* <section className="py-16 bg-white shadow-md">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-pink-600 mb-6">Contact Me</h2>
          <p className="text-lg text-gray-700">
            Information on how to get in touch.
          </p>
        </div>
      </section> */}

      <footer className="bg-gray-100 text-gray-500 py-4 text-center border-t border-gray-200">
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  );
}
