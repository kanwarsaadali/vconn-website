// "use client";

// import advantage from "@data/sections/partner.json";
// import { SliderProps } from "@common/sliderProps";
// import { Swiper, SwiperSlide } from "swiper/react";

// import Data from '@data/sliders/partners';

// const PartnersSlider = ( { bgStyle } ) => {
//   return (
//     <>
//     {/* partners */}
//     <div className={`mil-${bgStyle}-bg mil-partners mil-relative`}>
//     <div className="container mil-p-120-60">
//     <div className="mil-background-grid mil-softened" />
//     <div className="row">
//     <div className="col-12">                        
//                         <div className="mil-center mil-mb-90">
//                             <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : advantage.subtitle}} />
//                             <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : advantage.title}} />
//                             {/* <p className="mil-up" dangerouslySetInnerHTML={{__html : advantage.description}} /> */}
//                         </div>

//                     </div>
//     </div>
//     </div>
//         {bgStyle == "soft" &&
//         <img src="/img/other/bg.svg" className="mil-bg-img" alt="image" />
//         }
        
//         <div className="container mil-p-120-120">
//             <div className="mil-background-grid mil-softened" />
            
//             <Swiper
//                 {...SliderProps.milInfiniteSlider}
//                 className="swiper-container mil-infinite-show mil-up"
//             >
//                 {Data.items.map((item, key) => (
//                 <SwiperSlide className="swiper-slide" key={`partners-slider-item-${key}`}>
//                     <a href={item.link} target="_blank" className="mil-partner-frame" style={{"width": "60px"}}><img src={item.image} alt={item.alt} /></a>
//                 </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     </div>
//     {/* partners end */}
//     </>
//   );
// };
// export default PartnersSlider;




// "use client";

// import advantage from "@data/sections/partner.json";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css"; // Swiper styles
// import "swiper/css/autoplay"; // Import autoplay styles if needed
// import Data from "@data/sliders/partners";

// const PartnersSlider = ({ bgStyle }) => {
//   return (
//     <>
//       {/* Partners Section */}
//       <div className={`mil-${bgStyle}-bg mil-partners mil-relative`}>
//         <div className="container mil-p-120-60">
//           <div className="mil-background-grid mil-softened" />
//           <div className="row">
//             <div className="col-12">
//               <div className="mil-center mil-mb-90">
//                 <span
//                   className="mil-suptitle mil-upper mil-up mil-mb-30"
//                   dangerouslySetInnerHTML={{ __html: advantage.subtitle }}
//                 />
//                 <h2
//                   className="mil-upper mil-up mil-mb-30"
//                   dangerouslySetInnerHTML={{ __html: advantage.title }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         {bgStyle === "soft" && (
//           <img src="/img/other/bg.svg" className="mil-bg-img" alt="background" />
//         )}

//         <div className="container mil-p-120-120">
//           <div className="mil-background-grid mil-softened" />

//           <Swiper
//             slidesPerView={4} // Allows dynamic slide sizes for smooth scrolling
//             spaceBetween={20} // Space between slides
//             loop={true} // Infinite scrolling
//             autoplay={{
//               delay: 1, // Continuous autoplay (requires reduced speed)
//               disableOnInteraction: false, // Prevent stopping on interaction
//             }}
//             speed={3000} // Smooth transition speed
//             direction="horizontal" // Horizontal sliding
//             freeMode={true} // Allows continuous, smooth scrolling
//             freeModeMomentum={false} // Prevent snap-back effect
//             className="swiper-container mil-infinite-show mil-up"
//           >
//             {Data.items.map((item, key) => (
//               <SwiperSlide
//                 className="swiper-slide"
//                 key={`partners-slider-item-${key}`}
//               >
//                 <a
//                   href={item.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mil-partner-frame"
//                   style={{ width: "60px" }}
//                 >
//                   <img src={item.image} alt={item.alt} />
//                 </a>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//       {/* Partners Section End */}
//     </>
//   );
// };

// export default PartnersSlider;


// "use client";

// import advantage from "@data/sections/partner.json";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css"; // Swiper styles
// import "swiper/css/autoplay"; // Import autoplay styles
// import Data from "@data/sliders/partners";

// const PartnersSlider = ({ bgStyle }) => {
//   return (
//     <>
//       {/* Partners Section */}
//       <div className={`mil-${bgStyle}-bg mil-partners mil-relative`}>
//         <div className="container mil-p-120-60">
//           <div className="mil-background-grid mil-softened" />
//           <div className="row">
//             <div className="col-12">
//               <div className="mil-center mil-mb-90">
//                 <span
//                   className="mil-suptitle mil-upper mil-up mil-mb-30"
//                   dangerouslySetInnerHTML={{ __html: advantage.subtitle }}
//                 />
//                 <h2
//                   className="mil-upper mil-up mil-mb-30"
//                   dangerouslySetInnerHTML={{ __html: advantage.title }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         {bgStyle === "soft" && (
//           <img src="/img/other/bg.svg" className="mil-bg-img" alt="background" />
//         )}

//         <div className="container mil-p-120-120">
//           <div className="mil-background-grid mil-softened" />

//           <Swiper
//             slidesPerView={4} // Number of visible slides
//             spaceBetween={20} // Space between slides
//             loop={true} // Infinite scrolling
//             autoplay={{
//               delay: 1, // Continuous autoplay
//               disableOnInteraction: false, // Keep autoplay active after interaction
//               reverseDirection: true, // Reverse the direction to right-to-left
//             }}
//             speed={3000} // Smooth transition speed
//             direction="horizontal" // Horizontal sliding
//             className="swiper-container mil-infinite-show mil-up"
//           >
//             {Data.items.map((item, key) => (
//               <SwiperSlide
//                 className="swiper-slide"
//                 key={`partners-slider-item-${key}`}
//               >
//                 <a
//                   href={item.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mil-partner-frame"
//                   style={{ width: "60px" }}
//                 >
//                   <img src={item.image} alt={item.alt} />
//                 </a>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//       {/* Partners Section End */}
//     </>
//   );
// };

// export default PartnersSlider;


"use client";

import advantage from "@data/sections/partner.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper"; // Ensure the Autoplay module is imported
import "swiper/css"; // Swiper styles
import "swiper/css/autoplay"; // Autoplay styles
import Data from "@data/sliders/partners";

const PartnersSlider = ({ bgStyle }) => {
  return (
    <>
      {/* Partners Section */}
      <div className={`mil-${bgStyle}-bg mil-partners mil-relative`}>
        <div className="container mil-p-120-60">
          <div className="mil-background-grid mil-softened" />
          <div className="row">
            <div className="col-12">
              <div className="mil-center mil-mb-90">
                <span
                  className="mil-suptitle mil-upper mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{ __html: advantage.subtitle }}
                />
                <h2
                  className="mil-upper mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{ __html: advantage.title }}
                />
              </div>
            </div>
          </div>
        </div>
        {bgStyle === "soft" && (
          <img src="/img/other/bg.svg" className="mil-bg-img" alt="background" />
        )}

        <div className="container mil-p-120-120">
          <div className="mil-background-grid mil-softened" />

          <Swiper
            modules={[Autoplay]} // Use Swiper's Autoplay module
            slidesPerView={4} // Number of visible slides
            spaceBetween={20} // Space between slides
            loop={true} // Infinite scrolling
            autoplay={{
              delay: 1, // Continuous autoplay
              disableOnInteraction: false, // Keep autoplay active after interaction
            }}
            speed={3000} // Smooth transition speed
            direction="horizontal" // Horizontal sliding
            className="swiper-container mil-infinite-show mil-up"
            style={{ direction: "rtl" }} // RTL styling to reverse direction
          >
            {Data.items.map((item, key) => (
              <SwiperSlide
                className="swiper-slide"
                key={`partners-slider-item-${key}`}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mil-partner-frame"
                  style={{ width: "60px" }}
                >
                  <img src={item.image} alt={item.alt} />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Partners Section End */}
    </>
  );
};

export default PartnersSlider;
