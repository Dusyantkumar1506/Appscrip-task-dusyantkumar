"use client";
import React, { useState } from "react";
import Cards from "./Cards";
import Image from "next/image";
import ArrowLeft from "../../public/arrow-left.png";

const Home = () => {
  const [showFilter, setShowFilter] = useState(true);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  return (
    <div className="px-8 w-full">
      {/* 1 */}
      <div className="md:flex flex flex-col justify-center items-center  mt-8">
        <h1 className="md:text-[52px] text-[24px] text-[#252020] font-normal md:h-[72px]">
          DISCOVER OUR PRODUCTS
        </h1>
        <p className="md:w-[680px] w-[360px] md:h-[80px] mt-4 text-center">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      {/* 2 */}

      <div className=" flex justify-between items-center mt-10">
        <div className="flex gap-7">
          <h1 className="md:block hidden text-lg font-bold">ITEMS</h1>

          <div className="flex justify-center items-center gap-2">
            <Image
              className="w-4 h-4 cursor-pointer"
              src={ArrowLeft}
              alt="arrow"
              onClick={toggleFilter}
            />

            <button
              className="font-normal text-[#888792] cursor-pointer"
              onClick={toggleFilter}
            >
              {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
            </button>
          </div>
        </div>
        <select
          id="recommendation"
          name="recommend"
          className="rounded bg-gray-100 p-1 font-bold md:text-lg text-sm border-none text-[#252020]"
        >
          <option>RECOMMENDED</option>
          <option value="newest">NEWEST FIRST</option>
          <option value="popular">POPULAR</option>
          <option value="price">PRICE : HIGH TO LOW</option>
          <option value="price">PRICE : LOW TO HIGH</option>
        </select>
      </div>

      {/* 3 */}

      <div className="mt-10 w-full flex justify-between">
        {/* 1 */}
        <div
          className={`flex md:w-[20%] flex-col ${showFilter ? "" : "hidden"}`}
        >
          <label className=" font-bold text-lg">CUSTOMIZABLE</label>
          <div className="mt-6">
            <p className="font-bold text-lg">IDEAL FOR</p>
            <select className="w-full" name="IDEAL FOR">
              <option value="All">All</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
            </select>
          </div>

          <div className="mt-6">
            <p className="font-bold text-lg">OCCASION</p>
            <select className="w-full" name="OCCASION">
              <option value="All">All</option>
              <option value="Birthday">Birthday</option>
              <option value="Wedding">Wedding</option>
            </select>
          </div>

          <div className="mt-6">
            <p className="font-bold text-lg">WORK</p>
            <select className="w-full" name="WORK">
              <option value="All">All</option>
              <option value="Meeting">Meeting</option>
              <option value="Presentation">Presentation</option>
            </select>
          </div>

          <div className="mt-6">
            <p className="font-bold text-lg">FABRIC</p>
            <select className="w-full" name="FABRIC">
              <option value="All">All</option>
              <option value="Cotton">Cotton</option>
              <option value="Silk">Silk</option>
            </select>
          </div>

          <div className="mt-6">
            <p className="font-bold text-lg">SEGMENT</p>
            <select className="w-full" name="SEGMENT">
              <option value="All">All</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
            </select>
          </div>

          <div className="mt-6">
            <p className="font-bold text-lg">SUITABLE FOR</p>
            <select className="w-full" name="SUITABLE FOR">
              <option value="All">All</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
            </select>
          </div>

          <div className="mt-6">
            <p className="font-bold text-lg">RAW MATERIAL</p>
            <select className="w-full" name="RAW MATERIAL">
              <option value="All">All</option>
              <option value="High quality">High quality</option>
              <option value="Average">Average</option>
            </select>
          </div>

          <div className="mt-6">
            <p className="font-bold text-lg">PATTERN</p>
            <select className="w-full" name="PATTERN">
              <option value="Classy">Classy</option>
              <option value="Glossy">Glossy</option>
            </select>
          </div>
        </div>
        {/* 2 for render cards */}
        <div className="w-full">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Home;
