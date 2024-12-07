import about from "../assets/about.jpg";
import { Link } from "react-router-dom";

import about1 from "../assets/about1.jpeg";
function About() {

    
  
   
  
   
    

    const cards = [
        {
          title: "Ramadan Special: Dresses For Women For Eid By Shesa",
          content:
            "Eid al-Fitr is the joyous festival which marks the end of Ramadan month. It is time for celebration and family gatherings but also it’s time to dress up in your finest attire and look your radiant best! If you’re looking.",
          image:"../src/assets/stich1.jpg", // Replace with actual image URLs
        },
        {
          title: "Plus Size Dresses For Summer Season By Shesa",
          content:
            "Summer season is officially here and it’s time to embrace the sunshine in style! Shesa offers a stunning selection of plus size clothing for every occasion.",
          image: "../src/assets/stich2.jpeg",
        },
        {
          title: "Co-Ord Sets Women For Every Occasion",
          content:
            "Fashion is ever-evolving! With trends taking over your wardrobe, Shesa’s co-ord sets have become a staple for women.",
          image:   "../src/assets/stcih3.jpg",
        },
        {
          title: "Traditional Prints For Ethnic Lovers",
          content:
            "Explore timeless traditional prints that bring ethnic vibes to modern fashion.",
          image: "../src/assets/stcih4.jpg",
        },
        {
          title: "Elegant Sarees For Every Festive Season",
          content:
            "Celebrate every festive season with Shesa’s exclusive collection of elegant sarees.",
          image:   "../src/assets/stich5.jpg",
        },
        {
          title: "Comfort Wear For Daily Style",
          content:
            "Shesa introduces a collection of daily wear that combines comfort and style effortlessly.",
          image: "../src/assets/stich6.jpeg",
        },
      ];

  return (
    <div>
        	<Link to='/buisness'>
        <button
				className="fixed top-20 right-2 bg-black font-bold text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-800 z-50"
			>
				B2B/Bulk Enquiries
			</button>
            </Link>
      <div className="w-full">
        <img className="w-[100%]" src={about} alt="" />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 p-4 md:p-8">
  {/* Text Section */}
  <div className="w-full md:w-1/2">
    <h1 className="text-2xl md:text-3xl font-bold mb-4">It All Started with Us</h1>
    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
      Our vision to showcase the best of Indian textiles and printing crafts. 
      Shesa is a treasure trove of long-forgotten printing secrets and traditional weaves. 
      Step into Bagh for an experience that is about natural fabrics, traditional printing 
      techniques and modern designs. Step into Bagh for comfortable attires, luxurious 
      fashion, and abundant choice. Shesa encapsulates the philosophy of combining local 
      printing heritage with natural fabrics to evolve a style that is purely indigenous 
      and unique. It is about keeping the textile traditions and crafts of the country 
      alive and thriving. It is also about creating an awareness and appreciation for the 
      rich heritage that we have and being proud of our culture of creativity and artistic 
      flair. The team of Bagh travels to well-known and remote textile centers of the 
      country, discovering hidden arts, reviving forgotten expertise, and rediscovering 
      the secrets of ethnic ethos. Bagh collaborates with printers and weavers at various 
      centers across India, helping to develop a sustainable and commercially viable 
      production of fabrics that are contemporary and classic.
    </p>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/2">
    <img 
      src={about1} 
      alt="About Us" 
      className="w-full h-auto rounded-lg " 
    />
  </div>
</div>
<div className="flex flex-col gap-4 p-4 md:p-8 ">
  {/* Heading */}
  <div className="text-2xl md:text-3xl font-bold text-gray-800 text-center md:text-left">
    Design Philosophy
  </div>

  {/* Content */}
  <div className="text-gray-700 text-base md:text-lg leading-relaxed">
    All motifs are created by a team of talented in-house designers. These are then shared with craftsmen for weaving and printing processes. The outfits are designed keeping in mind the current trends and consumer preferences. Every Bagh garment offers the enigma of wearing living history created by the united efforts of hundreds of extremely creative but unsung artists of the land. Bagh offers a wide range of styles and patterns and gives discerning buyers choices that are artistic and authentic.
  </div>
</div>
<div className="p-6 ">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {card.title}
              </h2>
              <p className="text-gray-600 mt-2">{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
}

export default About;
