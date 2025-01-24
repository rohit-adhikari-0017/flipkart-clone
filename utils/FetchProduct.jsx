import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    // console.log(response);
    return response.data; // Axios ke response me data ko return karna
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Agar error hota hai toh empty array return karenge
  }
};
