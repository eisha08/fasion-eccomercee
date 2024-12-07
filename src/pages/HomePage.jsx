import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { ChevronRight } from "react-feather";
import { categories, sliderItems } from '@/dummydata';
import Manfacturer from '../ui/Manfacturer';
import Button from "@/components/Button";
import Container from "@/components/Container";
import CategoryList from "@/ui/CategoryList";
import Newsletter from "@/ui/Newsletter";
import Review from '../ui/Review';
import api from '../api';
import { CartContext, UserContext } from "@/App";
import Carousel from '../components/Carousel';
import { popularProducts } from '../dummydata';

export default function HomePage() {
  const { user } = useContext(UserContext);
  const { cartDispatch } = useContext(CartContext);
  const [selectedOptions, setSelectedOptions] = useState({}); // Manage size and color options
  const [addedProducts, setAddedProducts] = useState(new Set()); // Track added products

  useEffect(() => {
    (async () => {
      const resp = await api.fetchProducts("", true);
      if (resp.status !== "error") {
        setProducts(resp);
      }
    })();
  }, []);

  const addToCart = async (product, quantity = 1) => {
    const { size, color } = selectedOptions[product.id] || {}; // Get selected size and color
    
    // Ensure size and color are selected before adding to the cart
    if (size && color && !addedProducts.has(product.id)) { 
      if (user) {
        const resp = await api.addProductsToCart([{ productID: product.id, quantity, size, color }]);
        if (resp.status === "ok") {
          cartDispatch({
            type: "ADD_PRODUCTS",
            payload: [{ ...product, quantity, size, color }],
          });
        }
      } else {
        cartDispatch({
          type: "ADD_PRODUCTS",
          payload: [{ ...product, quantity, size, color }],
        });
      }
      // Mark product as added
      setAddedProducts((prev) => new Set(prev).add(product.id));
    }
  };

  const handleOptionChange = (productId, optionType, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [productId]: {
        ...(prev[productId] || {}),
        [optionType]: value,
      },
    }));
  };

  useEffect(() => {
    // Automatically add product to cart when both size and color are selected
    Object.keys(selectedOptions).forEach(productId => {
      const { size, color } = selectedOptions[productId];
      if (size && color && !addedProducts.has(productId)) {
        const product = popularProducts.find(p => p.id === productId);
        if (product) {
          addToCart(product);
        }
      }
    });
  }, [selectedOptions]);

  return (
    <main>
      {/* Fixed B2B/Bulk Enquiries Button */}
      <Link to='/buisness'>
        <button
          className="fixed top-20 right-2 font-bold bg-black text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-800 z-50"
        >
          B2B/Bulk Enquiries
        </button>
      </Link>

      <section>
        <Carousel slides={sliderItems} />
      </section>

      <Container heading="Popular Categories">
        <CategoryList categories={categories} />
      </Container>

      <Container heading="Latest Arrivals">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
            <div key={product.id} className="p-4 border rounded-md group relative">
              <img src={product.image} alt={product.name} className="h-40 mx-auto mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500">${product.price}</p>

              {/* Hover Overlay for Size and Color */}
              <div className="absolute inset-0 bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center space-y-4 transition-opacity z-0">
                {/* Size Options */}
                <div>
                  <label className="block text-sm font-medium">Size:</label>
                  <div className="flex space-x-2">
                    {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                      <button
                        key={size}
                        className={`px-2 py-1 border rounded ${
                          selectedOptions[product.id]?.size === size ? 'bg-blue-500 text-white' : 'bg-gray-200'
                        }`}
                        onClick={() => handleOptionChange(product.id, 'size', size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Options */}
                <div>
                  <label className="block text-sm font-medium">Color:</label>
                  <div className="flex space-x-2">
                    {['Red', 'Blue', 'Black', 'White', 'Green'].map((color) => (
                      <button
                        key={color}
                        className={`w-8 h-8 rounded-full border ${
                          selectedOptions[product.id]?.color === color ? 'ring-2 ring-blue-500' : ''
                        }`}
                        style={{ backgroundColor: color.toLowerCase() }}
                        onClick={() => handleOptionChange(product.id, 'color', color)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                className={`mt-4 w-full ${addedProducts.has(product.id) ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'}`}
                onClick={() => addToCart(product)}
                disabled={addedProducts.has(product.id)}
                style={{ zIndex: 10 }} // Ensure button is above hover effect
              >
                {addedProducts.has(product.id) ? 'Added' : 'Add to Cart'}
              </Button>
            </div>
          ))}
        </div>

        <Link to="/products" className="flex justify-center">
          <Button className="text-lg mt-6" link>
            View More <ChevronRight className="ml-2" />
          </Button>
        </Link>
      </Container>

      <section className="my-20">
        <Manfacturer />
      </section>

      <section className="my-20">
        <Review />
      </section>
    </main>
  );
}
