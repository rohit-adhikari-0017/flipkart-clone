"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProducts } from "@/utils/FetchProduct";
import Image from "next/image";

function Details() {
  const params = useParams();
  const searchParams = params.details;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProductDetails = async () => {
    try {
      // Fetch products
      const data = await fetchProducts();
      const selectedProduct = data.find(
        (item) => item.id === parseInt(searchParams)
      );
      // Set product or null
      setProduct(selectedProduct || null);
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProductDetails();
  }, [searchParams]);

  if (loading) {
    return <div>Loading...</div>;
  }
  // Handle missing product
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="details-wrapper flex items-start ">
      <div className="container grid grid-cols-2 mt-14 mb-14">
        {/* Image Container */}
        <div className="image-container flex-shrink-0 flex justify-center">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="details flex items-center">
          <div>
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-lg text-gray-700 mt-4">${product.price}</p>
            <p className="text-gray-600 mt-2">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
