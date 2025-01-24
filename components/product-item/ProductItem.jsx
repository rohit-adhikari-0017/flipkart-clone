"use client";

import { fetchProducts } from "@/utils/FetchProduct";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function ProductItem() {
  const [showData, setShowData] = useState([]);

  const itemData = async () => {
    try {
      const data = await fetchProducts();
      setShowData(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    itemData();
  }, []);

  const handleProduct = () => {};

  return (
    <div className="product-item">
      <div className="container ">
        <div className="grid grid-cols-4 gap-4 mt-12 mb-12">
          {showData.map((data) => {
            return (
              <Link href={`/product/${data.id}`} key={data.id}>
                <div className="item flex flex-col justify-between border p-4 rounded shadow h-full cursor-pointer">
                  <div className="image-container w-full h-40 relative mb-4">
                    <Image
                      src={data.image}
                      alt={data.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="details">
                    <h1 className="text-lg font-semibold">{data.title}</h1>
                    <p className="text-gray-600 mt-2">${data.price}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        {showData && (
          <div className="flex justify-center pb-3">
            <button
              className="py-2 px-4 cursor-pointer rounded-2xl bg-gray-800 text-white hover:bg-gray-700"
              onClick={handleProduct}
            >
              Read More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
