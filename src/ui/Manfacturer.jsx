import react ,{useState, useRef } from "react";
import manfac from "../assets/manfac.jpg";
import manvid from "../assets/manvid.mp4";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import style from '../assets/style/style.css'
import ind from '../assets/ind.jpg'; 
import eco from '../assets/eco.jpg'
import handcraft from '../assets/handcraft.jpg';
import prem from '../assets/prem.jpg'

const images = [
  "../src/assets/stich1.jpg",
  "../src/assets/stich2.jpeg",
  "../src/assets/stcih3.jpg",
  "../src/assets/stcih4.jpg",
  "../src/assets/stich5.jpg",
  "../src/assets/stich6.jpeg",
  "../src/assets/stich7.jpg",
 
];

const reviews = [
  {
    image: "path-to-image-1.jpg",
    title: "Confidence Booster",
    review: "Wearing this kurti that oozes confidence...",
    name: "Priya Agrawal",
  },
  {
    image: "path-to-image-2.jpg",
    title: "Elegant and Comfortable",
    review: "I had an amazing experience with this company...",
    name: "Amrita Sen",
  },
  {
    image: "path-to-image-3.jpg",
    title: "Beautiful Embroidery",
    review: "Good fit and length is also perfect...",
    name: "Deepika Saini",
  },
  {
    image: "path-to-image-4.jpg",
    title: "Great Value for Money",
    review: "Material is very good. Regularly I am buying...",
    name: "Yasmita Verma",
  },
  {
    image: "path-to-image-5.jpg",
    title: "Breathable Fabric",
    review: "Living in a tropical climate, breathable fabrics...",
    name: "Aksita Sharma",
  },
  {
    image: "path-to-image-6.jpg",
    title: "Instant Confidence",
    review: "There's something about wearing this...",
    name: "Nidhi Agrawal",
  },
];

function Manfacturer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const sliderRef = useRef(null);


  // Scroll left
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -360, // Adjust scroll distance
        behavior: "smooth",
      });
    }
  };

  // Scroll right
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 360, // Adjust scroll distance
        behavior: "smooth",
      });
    }
  };

  

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };


  return (
    <div className="">
      <div className="flex text-center justify-center px-8 text-3xl  font-Poppins">
        Our Manufacturer
      </div>
      <div className="flex flex-col md:flex-row items-center bg-white py-10 px-5 md:px-20 space-x-2">
        {/* Left Section - Images */}
        <div className="flex-1 flex flex-col space-y-4">
          <img
            src={manfac}
            alt="Dresses on hangers"
            className="rounded-md shadow-md"
          />
        </div>

        {/* Middle Section - Quote */}
        <div className="flex-1 flex items-center justify-center bg-pink-200 h-[110vh] rounded-lg">
          <div className=" p-10 rounded-lg ">
            <div className="text-5xl text-brown font-serif mb-4">“</div>
            <p className="text-gray-700 text-lg">
              At Shesa we believe in empowering women through fashion that
              embraces individuality and confidence. Our brand is dedicated to
              creating stylish and comfortable clothing pieces that cater to the
              diverse lifestyles of modern women. Each garment at Shesa is
              meticulously designed with attention to detail, ensuring both
              quality and fashion-forward appeal. From casual chic to elegant
              evening wear, our collections offer a wide range of options to
              suit every occasion and personal style.
            </p>
            <div className="text-5xl text-brown font-serif mt-4">”</div>
          </div>
        </div>

        {/* Right Section - Description */}
        <div className="flex-1 text-left">
          <video
            src={manvid}
            controls
            autoPlay
            loop
            muted
            className="w-full h-auto"
          >
            not supported
          </video>
        </div>
      </div>
      <div className="flex text-center fomt-semibold text-2xl justify-center flex-col py-10 space-y-2">
      <span>Shesa garments are immaculately tailored in premium materials</span>
      <span>with kindness and sustainability at their core.</span>
      </div>
      <div className="relative w-full overflow-hidden overflow-x-scroll scroll-smooth no-scrollbar">
      {/* Arrows */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700"
      >
        &#8592; {/* Left arrow */}
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700"
      >
        &#8594; {/* Right arrow */}
      </button>

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-scroll scroll-smooth no-scrollbar "
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-[300px] h-[200px] flex-shrink-0 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>  
    <div>
      <div className="flex justify-center text-center text-2xl  py-10">
        Why Shop with Us?
      </div>
      <div className="flex flex-wrap justify-center space-x-10 md:space-x-12">
  {/* Card 1 */}
  <div className="flex flex-col items-center space-y-2">
    <div className="w-64 h-64">
      <img
        src={handcraft}
        alt="Sustainable & Naturally Made"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
    <div className="text-center text-sm md:text-base font-medium">
      Sustainable & Naturally Made
    </div>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col items-center space-y-2">
    <div className="w-64 h-64">
      <img
        src={prem}
        alt="Premium Quality Fabrics"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
    <div className="text-center text-sm md:text-base font-medium">
      Premium Quality Fabrics
    </div>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col items-center space-y-2">
    <div className="w-64 h-64">
      <img
        src={ind}
        alt="Premium Quality Fabrics"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
    <div className="text-center text-sm md:text-base font-medium">
      Made in India
    </div>
  </div>

  {/* Card 4 */}
  <div className="flex flex-col items-center space-y-2">
    <div className="w-64 h-64">
      <img
        src={eco}
        alt="Handcrafted by Artisans"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
    <div className="text-center text-sm md:text-base font-medium">
      Handcrafted by Artisans
    </div>
  </div>
</div>
</div>

<div>
</div>

    </div>
  );
} 

export default Manfacturer;
