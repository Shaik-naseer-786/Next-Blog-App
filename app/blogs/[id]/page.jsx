"use client"; // Add this line

import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for (let index = 0; index < blog_data.length; index++) {
      if (Number(params.id) === blog_data[index].id) {
        // Corrected from 'i' to 'index'
        setData(blog_data[index]);
        // console.log(blog_data[index]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28 ">
        <div className="flex justify-between items-center ">
          <Link href='/'>
           <Image
            src={assets.logo}
            width={180}
            alt=""
            className="w-[130px] sm:w-auto"
          />
          </Link>
         
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
            Get Started
            <Image src={assets.arrow} alt="" />
          </button>
        </div>
        <div className="text-center my-24 ">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            src={data.author_img}
            width={60}
            height={60}
            alt=""
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          alt=""
          width={1280}
          height={720}
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          sapiente!
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          iusto! Iusto quos ea sapiente dolorem?
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          iusto! Iusto quos ea sapiente dolorem?
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          sapiente!
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          iusto! Iusto quos ea sapiente dolorem?
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          iusto! Iusto quos ea sapiente dolorem?
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          sapiente!
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          iusto! Iusto quos ea sapiente dolorem?
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          iusto! Iusto quos ea sapiente dolorem?
        </p>
        <h3 className="my-5 text-[18px] font-semibold">Conclusion</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          iusto! Iusto quos ea sapiente dolorem?
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          iusto! Iusto quos ea sapiente dolorem?
        </p>
        <div className="my-24 ">
          <p className="text-black font font-semibold my-4">
            Sare this Article on Social Media
          </p>
          <div className="flex ">
            <Image src={assets.facebook_icon} alt="fb icon" width={40} />
            <Image src={assets.twitter_icon} alt="fb icon" width={40} />
            <Image src={assets.googleplus_icon} alt="fb icon" width={40} />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  ) : (
    <></>
  );
};

export default Page;
