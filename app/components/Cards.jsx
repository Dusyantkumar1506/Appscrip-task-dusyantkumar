"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import HeartIcon from "../../public/heart.svg";

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 mb-4 p-6"
        >
          <div className="bg-white p-4 rounded-md shadow-md">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover mb-4"
            />

            <div className="flex justify-between  mt-10">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold overflow-hidden">
                  {product.title.length > 5 ? (
                    <span title={product.title}>{`${product.title.substring(
                      0,
                      30
                    )}...`}</span>
                  ) : (
                    product.title
                  )}
                </h3>

                <p className="text-[#888792] text-[14px]">
                  <span className="underline">Sign in</span> or Create an
                  account to see pricing
                </p>
              </div>

              <div>
                <Image src={HeartIcon} alt="heart" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
