
// import IMG1 from "../assets/pawns.png";
// import IMG2 from "../assets/wood_man.png";
// import IMG3 from "../assets/puzzle_green.png";
// import IMG4 from "../assets/puzzle_blue.png";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Banner from "../components/Banner";
// // import './Services.css'
// import ServiceSection from "../components/services/service_section";

// const SERVICESLIST = [
//   {
//     title: "SALES ABROAD",
//     desc: "We facilitate selling on popular platforms like Amazon and Noon, helping you reach millions of audience and boost your sales figures. Our team optimizes your listings, manages inventory, and handles customer service to enhance your marketplace presence.",
//     img: IMG1,
//     imgPos: { top: "100%", right: "0" },
//     bgColor: "#170F7A88",
//     textTop: "end",
//     textBot: "end",
//   },
//   {
//     title: "Product Analysis",
//     desc: "We are design the posts in a creative way to increase your product&apos;s visibility and attractiveness, We leverage marketplace tools and external channels to drive traffic to your listings, ensuring that your products get the attention they deserve.",
//     img: "IMAGE_HERE",
//     imgPos: { top: "0", right: "0" },
//     bgColor: "#78CC6388",
//     textTop: "center",
//     textBot: "center",
//   },
//   {
//     title: "Marketing",
//     desc: "We design the posts in a creative way to increase your product&apos;s visibility and attractiveness, We leverage marketplace tools and external channels to drive traffic to your listings, ensuring that your products get the attention they deserve.",
//     img: IMG1,
//     imgPos: { top: "100%", right: "60%" },
//     bgColor: "#CC637688",
//     textTop: "start",
//     textBot: "end",
//   },
//   {
//     title: "Advertising",
//     desc: "We do Targeted ads to highlight your product&apos;s unique features and drive conversions, Our experts create and manage ads that highlight your product&apos;s unique selling points, driving higher engagement.",
//     img: "IMAGE_HERE",
//     imgPos: { top: "0", right: "0" },
//     bgColor: "#170F7A88",
//     textTop: "end",
//     textBot: "start",
//   },
//   {
//     title: "BRANDING",
//     desc: "Branding a product means defining its identity and uniqueness, understanding your target audience, and creating a cohesive visual and verbal identity. This includes designing a memorable name, logo, and tagline, and ensuring consistent messaging and customer experience. Implement your strategy through effective marketing, and adjust based on feedback and market changes.",
//     img: IMG2,
//     imgPos: { top: "0%", right: "0", width: "600px" },
//     bgColor: "#78CC6388",
//     textTop: "center",
//     textBot: "center",
//   },
// ];

// const ServicesPage = () => {
//   return (
//    <>
//    <div className='banner'>
  
//   </div>
//   <div className="main_container">
//       <section className="section_container">
//         <div className="child_container">
//           <div className="row row__top ">
//             <h2 className="title_one">{SERVICESLIST[0]["title"]}</h2>
//           </div>
//           <div className="row row__bot">
//             <p className="description desc_1">{SERVICESLIST[0]["desc"]}</p>
//           </div>
//           <img src={IMG1} alt="image" className="image image__1" />
//         </div>
//       </section>
//       <section className="section_container">
//         <div className="child_container">
//           <div className="row row__top ">
//             <h2 className="title_two">{SERVICESLIST[1]["title"]}</h2>
//           </div>
//           <div className="row row__bot">
//             <p className="description desc_2">{SERVICESLIST[1]["desc"]}</p>
//           </div>
//           <img src={IMG2} alt="image" className="image image__2" />
//         </div>
//       </section>
//       <section className="section_container">
//         <div className="child_container">
//           <div className="row row__top ">
//             <h2 className="title_three">{SERVICESLIST[2]["title"]}</h2>
//           </div>
//           <div className="row row__bot">
//             <p className="description desc_3">{SERVICESLIST[2]["desc"]}</p>
//           </div>
//           <img src={IMG3} alt="image" className="image image__3" />
//         </div>
//       </section>
//       <section className="section_container">
//         <div className="child_container">
//           <div className="row row__top ">
//             <h2 className="title_four">{SERVICESLIST[3]["title"]}</h2>
//           </div>
//           <div className="row row__bot">
//             <p className="description desc_4">{SERVICESLIST[3]["desc"]}</p>
//           </div>
//           <img src={IMG4} alt="image" className="image image__4" />
//         </div>
//       </section>
//       <section className="section_container">
//         <div className="child_container">
//           <div className="row row__top ">
//             <h2 className="title_five">{SERVICESLIST[4]["title"]}</h2>
//           </div>
//           <div className="row row__bot">
//             <p className="description desc_5">{SERVICESLIST[4]["desc"]}</p>
//           </div>
//         </div>
//       </section>
//     </div>
//     <Footer />
//    </>
//   );
// };

// export default ServicesPage;
import ServiceSection from "../components/services/service_section";

import IMG1 from "../assets/puzzle_green.png";
import IMG2 from "../assets/puzzle_blue.png";
import IMG3 from "../assets/pawns.png";
import IMG4 from "../assets/wood_man.png";
import Header from "../components/Header";
import Banner from "../components/Banner";
import './Services.css'
import Footer from "../components/Footer";
const SERVICESLIST = [
  {
    title: "SALES ABROAD",
    desc: "We facilitate selling on popular platforms like Amazon and Noon, helping you reach millions of audience and boost your sales figures. Our team optimizes your listings, manages inventory, and handles customer service to enhance your marketplace presence.",
    img: IMG1,
    imgPos: { top: "100%", right: "0" },
    bgColor: "#170F7A88",
    textTop: "end",
    textBot: "end",
  },
  {
    title: "Product Analysis",
    desc: "We Understand your product performance before and after registering on marketplaces, we provide deep analysis and insights into your product’s sales, customer feedback, and market trends.",
    img: "IMAGE_HERE",
    imgPos: { top: "0", right: "0" },
    bgColor: "#78CC6388",
    textTop: "center",
    textBot: "center",
  },
  {
    title: "Marketing",
    desc: "We are design the posts in a creative way to increase your product’s visibility and attractiveness, We leverage marketplace tools and external channels to drive traffic to your listings, ensuring that your products get the attention they deserve.",
    img: IMG1,
    imgPos: { top: "100%", right: "60%" },
    bgColor: "#CC637688",
    textTop: "start",
    textBot: "end",
  },
  {
    title: "Advertising",
    desc: "We do Targeted ads to highlight your product&apos;s unique features and drive conversions, Our experts create and manage ads that highlight your product&apos;s unique selling points, driving higher engagement.",
    img: "IMAGE_HERE",
    imgPos: { top: "0", right: "0" },
    bgColor: "#170F7A88",
    textTop: "end",
    textBot: "start",
  },
  {
    title: "BRANDING",
    desc: "Branding a product means defining its identity and uniqueness, understanding your target audience, and creating a cohesive visual and verbal identity. This includes designing a memorable name, logo, and tagline, and ensuring consistent messaging and customer experience. Implement your strategy through effective marketing, and adjust based on feedback and market changes.",
    img: IMG2,
    imgPos: { top: "0%", right: "0", width: "600px" },
    bgColor: "#78CC6388",
    textTop: "center",
    textBot: "center",
  },
];

const ServicesPage = () => {
  return (
  <>
   <div className='banner'>
    <Header />
    <Banner
    leftText={"Our"}
    rightText={"Services"}
    img={"https://i.imgur.com/rfN31GV.png"}
    />
  </div>
    <div className="main_container">
      <section className="section_container">
        <div className="child_container">
          <div className="row row__top ">
            <h2 className="title_one">{SERVICESLIST[0]["title"]}</h2>
          </div>
          <div className="row row__bot">
            <p className="description desc_1">{SERVICESLIST[0]["desc"]}</p>
          </div>
          <img src={IMG1} alt="image" className="image image__1" />
        </div>
      </section>
      <section className="section_container">
        <div className="child_container">
          <div className="row row__top ">
            <h2 className="title_two">{SERVICESLIST[1]["title"]}</h2>
          </div>
          <div className="row row__bot">
            <p className="description desc_2">{SERVICESLIST[1]["desc"]}</p>
          </div>
          <img src={IMG2} alt="image" className="image image__2" />
        </div>
      </section>
      <section className="section_container">
        <div className="child_container">
          <div className="row row__top ">
            <h2 className="title_three">{SERVICESLIST[2]["title"]}</h2>
          </div>
          <div className="row row__bot">
            <p className="description desc_3">{SERVICESLIST[2]["desc"]}</p>
          </div>
          <img src={IMG3} alt="image" className="image image__3" />
        </div>
      </section>
      <section className="section_container">
        <div className="child_container">
          <div className="row row__top ">
            <h2 className="title_four">{SERVICESLIST[3]["title"]}</h2>
          </div>
          <div className="row row__bot">
            <p className="description desc_4">{SERVICESLIST[3]["desc"]}</p>
          </div>
          <img src={IMG4} alt="image" className="image image__4" />
        </div>
      </section>
      <section className="section_container">
        <div className="child_container">
          <div className="row row__top ">
            <h2 className="title_five">{SERVICESLIST[4]["title"]}</h2>
          </div>
          <div className="row row__bot">
            <p className="description desc_5">{SERVICESLIST[4]["desc"]}</p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </>
  );
};

export default ServicesPage;
