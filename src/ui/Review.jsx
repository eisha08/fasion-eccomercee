import React, { useRef } from "react";
import people from '../assets/people.jpg'
import { FaPeopleCarry } from "react-icons/fa";

const reviews = [
  {
    image: people,
    title: "Confidence Booster",
    review: "Wearing this kurti that oozes confidence...",
    name: "Priya Agrawal",
  },
  {
    image: people,
    title: "Elegant and Comfortable",
    review: "I had an amazing experience with this company...",
    name: "Amrita Sen",
  },
  {
    image: people,
    title: "Beautiful Embroidery",
    review: "Good fit and length is also perfect...",
    name: "Deepika Saini",
  },
  {
    image: people,
    title: "Great Value for Money",
    review: "Material is very good. Regularly I am buying...",
    name: "Yasmita Verma",
  },
  {
    image: people,
    title: "Breathable Fabric",
    review: "Living in a tropical climate, breathable fabrics...",
    name: "Aksita Sharma",
  },
  {
    image: people,
    title: "Instant Confidence",
    review: "There's something about wearing this...",
    name: "Nidhi Agrawal",
  },
  {
    image: people,
    title: "Instant Confidence",
    review: "There's something about wearing this...",
    name: "Nidhi Agrawal",
  },
  {
    image: people,
    title: "Instant Confidence",
    review: "There's something about wearing this...",
    name: "Nidhi Agrawal",
  },
  {
    image: people,
    title: "Instant Confidence",
    review: "There's something about wearing this...",
    name: "Nidhi Agrawal",
  },
  {
    image: people,
    title: "Instant Confidence",
    review: "There's something about wearing this...",
    name: "Nidhi Agrawal",
  },
];

 function Review() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300, // Adjust based on card width
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300, // Adjust based on card width
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full mx-auto p-8 h-fit">
      <h2 className="text-2xl  text-center mb-8">Customer Reviews</h2>
      <div className="relative w-full overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700"
        >
          &#8592;
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700"
        >
          &#8594;
        </button>

        {/* Slider Container */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar px-8"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-[300px] h-auto flex-shrink-0 flex flex-col items-center space-y-4 rounded-lg shadow-lg p-4 bg-white"
            >
              {/* Image */}
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img
                  src={review.image}
                  alt={review.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Title */}
              <h3 className="text-lg font-semibold">{review.title}</h3>
              {/* Review */}
              <p className="text-center text-sm text-gray-600 max-w-xs">
                {review.review}
              </p>
              {/* Name */}
              <p className="text-sm font-medium">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Review;