"use client";

import advantage from "@data/sections/client.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper"; // Import Autoplay module
import "swiper/css"; // Swiper styles
import "swiper/css/autoplay"; // Autoplay styles
import Data from "@data/sliders/clients";

const ClientSlider = ({ bgStyle }) => {
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
            modules={[Autoplay]} // Enable Swiper's Autoplay module
            slidesPerView={4} // Number of visible slides
            spaceBetween={20} // Space between slides
            loop={true} // Infinite scrolling
            autoplay={{
              reverseDirection: false, // Explicitly sets left-to-right direction
              delay: 1, // Continuous autoplay
              disableOnInteraction: false, // Prevent stopping on interaction
            }}
            speed={3000} // Smooth transition speed
            freeMode={true} // Enables smooth continuous scrolling
            freeModeMomentum={false} // Prevent snap-back effect
            className="swiper-container mil-infinite-show mil-up"
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

export default ClientSlider;
