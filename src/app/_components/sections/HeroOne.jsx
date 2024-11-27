// "use client";

// import Data from "@data/sections/hero-1.json";
// import Link from "next/link";

// import { useEffect } from "react";
// import { ScrollAnimation } from "@common/scrollAnims";

// const HeroOne = () => {
//     useEffect(() => {
//         ScrollAnimation();
//     }, []);

//     return (
//         <>
//             {/* banner */}
//             <section className="mil-banner">
//                 <img src={Data.bg_image} className="mil-bg-img mil-scale" data-value-1=".4" data-value-2="1.4" alt="image" />
                
//                 <div className="mil-overlay " />
//                 <div className="container">
//                     <div className="mil-background-grid mil-top-space" />
//                     <div className="mil-banner-content">
//                         <div className="row align-items-end">
//                             <div className="col-xl-7">
//                                 <div className="mil-mb-90">
//                                     <span className="mil-suptitle mil-light mil-upper mil-mb-60">{Data.subtitle}</span>
//                                     <h1 className="mil-upper mil-light mil-mb-60" dangerouslySetInnerHTML={{__html : Data.title}} />
//                                     <Link href={Data.button.link} className="mil-link mil-light mil-upper">{Data.button.label} <span className="mil-arrow"><img src="img/icons/1.svg" alt="arrow" /></span></Link>
//                                 </div>
//                             </div>
//                             <div className="col-xl-5">
//                                 <div className="row mil-mb-60">
//                                     {Data.numbers.map((item, key) => (
//                                     <div className="col-6" key={`hero-numbers-item-${key}`}>
//                                         <div className="mil-counter-frame mil-light mil-mb-30">
//                                             <h4 className="mil-accent mil-thin mil-mb-10"><span className="mil-counter" data-number={item.value}>0</span>{item.valueAfter}</h4>
//                                             <p className="mil-light" dangerouslySetInnerHTML={{__html : item.label}} />
//                                         </div>
//                                     </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* banner end */}
//         </>
//     );
// }
// export default HeroOne;



// "use client";

// import Data from "@data/sections/hero-1.json";
// import Link from "next/link";
// import { useEffect } from "react";
// import { ScrollAnimation } from "@common/scrollAnims";

// const HeroOne = () => {
//     useEffect(() => {
//         ScrollAnimation();
//     }, []);

//     return (
//         <>
//             {/* banner */}
//             <section className="mil-banner">
//                 {Data.bg_image.endsWith(".mp4") ? (
//                     <video
//                         autoPlay
//                         muted
//                         loop
//                         playsInline
//                         className="mil-bg-video mil-scale"
//                         data-value-1=".4"
//                         data-value-2="1.4"
//                     >
//                         <source src={Data.bg_image} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 ) : (
//                     <img
//                         src={Data.bg_image}
//                         className="mil-bg-img mil-scale"
//                         data-value-1=".4"
//                         data-value-2="1.4"
//                         alt="background"
//                     />
//                 )}
                
//                 <div className="mil-overlay " />
//                 <div className="container">
//                     <div className="mil-background-grid mil-top-space" />
//                     <div className="mil-banner-content">
//                         <div className="row align-items-end">
//                             <div className="col-xl-7">
//                                 <div className="mil-mb-90">
//                                     <span className="mil-suptitle mil-light mil-upper mil-mb-60">{Data.subtitle}</span>
//                                     <h1 className="mil-upper mil-light mil-mb-60" dangerouslySetInnerHTML={{ __html: Data.title }} />
//                                     <Link href={Data.button.link} className="mil-link mil-light mil-upper">
//                                         {Data.button.label} <span className="mil-arrow"><img src="img/icons/1.svg" alt="arrow" /></span>
//                                     </Link>
//                                 </div>
//                             </div>
//                             <div className="col-xl-5">
//                                 <div className="row mil-mb-60">
//                                     {Data.numbers.map((item, key) => (
//                                         <div className="col-6" key={`hero-numbers-item-${key}`}>
//                                             <div className="mil-counter-frame mil-light mil-mb-30">
//                                                 <h4 className="mil-accent mil-thin mil-mb-10">
//                                                     <span className="mil-counter" data-number={item.value}>0</span>{item.afterValue}
//                                                 </h4>
//                                                 <p className="mil-light" dangerouslySetInnerHTML={{ __html: item.label }} />
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* banner end */}
//         </>
//     );
// };

// export default HeroOne;



"use client";

import Data from "@data/sections/hero-1.json";
import Link from "next/link";
import { useEffect } from "react";
import { ScrollAnimation } from "@common/scrollAnims";

const HeroOne = () => {
    useEffect(() => {
        ScrollAnimation();
    }, []);

    return (
        <>
            {/* banner */}
            <section className="mil-banner">
                {/* Conditionally render video or image based on file extension */}
                {Data.bg_image.endsWith(".mp4") ? (
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="mil-bg-video mil-scale"
                        data-value-1=".4"
                        data-value-2="1.4"
                    >
                        <source src={Data.bg_image} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        src={Data.bg_image}
                        className="mil-bg-img mil-scale"
                        data-value-1=".4"
                        data-value-2="1.4"
                        alt="background"
                    />
                )}

                <div className="mil-overlay" />
                <div className="container">
                    <div className="mil-background-grid mil-top-space" />
                    <div className="mil-banner-content">
                        <div className="row align-items-end">
                            <div className="col-xl-7">
                                <div className="mil-mb-90">
                                    <span className="mil-suptitle mil-light mil-upper mil-mb-60">{Data.subtitle}</span>
                                    <h1
                                        className="mil-upper mil-light mil-mb-60"
                                        dangerouslySetInnerHTML={{ __html: Data.title }}
                                        
                                    /> 
                                    {/* <h4 className=" mil-light mil-mb-60 text-capitaized">
                                    Hyper-personalization at the pace   Hyper-personalization at the pace  Hyper-personalization at the pace </h4> */}

                                    <Link href={Data.button.link} className="mil-link mil-light mil-upper">
                                        {Data.button.label} <span className="mil-arrow"><img src="img/icons/1.svg" alt="arrow" /></span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <div className="row mil-mb-60">
                                    {Data.numbers.map((item, key) => (
                                        <div className="col-6" key={`hero-numbers-item-${key}`}>
                                            {/* <div className="mil-counter-frame mil-light mil-mb-30"> */}
                                                <h4 className="mil-accent mil-thin mil-mb-10">
                                                    {/* <span className="mil-counter" data-number={item.value}>0</span>{item.afterValue} */}
                                                </h4>
                                                <p
                                                    className="mil-light"
                                                    // dangerouslySetInnerHTML={{ __html: item.label }}
                                                />
                                            </div>
                                        // </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* banner end */}

            {/* CSS Styles */}
            <style jsx>{`
                .mil-banner {
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                    height: 100vh;
                }

                .mil-bg-video,
                .mil-bg-img {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    min-width: 100%;
                    min-height: 100%;
                    width: auto;
                    height: auto;
                    object-fit: cover;
                    z-index: -1;
                }

                .mil-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    // background-color: rgba(0, 0, 0, 0.5);
                    z-index: 0;
                }

                    .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                    position: relative;
                    z-index: 1;
                }

                .mil-banner-content {
                    display: flex;
                    align-items: center;
                    height: 100%;
                    color: #fff;
                    text-align: left;
                }

                .mil-mb-90 {
                    margin-bottom: 90px;
                }

                .mil-suptitle {
                    font-size: 1.2rem;
                }

                h1 {
                    font-size: ;
                }

                .mil-counter-frame {
                    text-align: center;
                }

                @media (max-width: 768px) {
                    .mil-banner {
                        height: auto;
                    }

                    .mil-banner-content {
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                        padding: 20px;
                    }

                    h1 {
                        font-size: 2rem;
                    }

                    .mil-mb-90 {
                        margin-bottom: 60px;
                    }
                }
            `}</style>
        </>
    );
}

export default HeroOne;


// "use client";

// import Data from "@data/sections/hero-1.json";
// import Link from "next/link";
// import { useEffect } from "react";
// import { ScrollAnimation } from "@common/scrollAnims";

// const HeroOne = () => {
//     useEffect(() => {
//         ScrollAnimation();
//     }, []);

//     return (
//         <>
//             {/* Hero Section */}
//             <section className="hero-banner">
//                 {/* Background Video or Image */}
//                 {Data.bg_image.endsWith(".mp4") ? (
//                     <video
//                         autoPlay
//                         muted
//                         loop
//                         playsInline
//                         className="hero-bg"
//                     >
//                         <source src={Data.bg_image} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 ) : (
//                     <img
//                         src={Data.bg_image}
//                         className="hero-bg"
//                         alt="background"
//                     />
//                 )}

//                 {/* Overlay for text visibility */}
//                 <div className="hero-overlay"></div>

//                 {/* Hero Content */}
//                 <div className="hero-content">
//                     <h1
//                         className="hero-title"
//                         dangerouslySetInnerHTML={{ __html: Data.title }}
//                     />
//                     <div className="hero-buttons">
//                         <Link href={Data.button.link} className="hero-btn-primary">
//                             {Data.button.label}
//                         </Link>
//                         {Data.secondary_button && (
//                             <Link href={Data.secondary_button.link} className="hero-btn-secondary">
//                                 {Data.secondary_button.label}
//                             </Link>
//                         )}
//                     </div>
//                     <div className="hero-stats">
//                         {Data.numbers.map((item, key) => (
//                             <div className="hero-stat-item" key={`hero-stat-${key}`}>
//                                 <h4 className="hero-stat-value">
//                                     <span className="hero-counter" data-number={item.value}>0</span>
//                                     {item.afterValue}
//                                 </h4>
//                                 <p
//                                     className="hero-stat-label"
//                                     dangerouslySetInnerHTML={{ __html: item.label }}
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* CSS */}
//             <style jsx>{`
//                 .hero-banner {
//                     position: relative;
//                     width: 100%;
//                     height: 100vh; /* Fullscreen height */
//                     display: flex;
//                     justify-content: center;
//                     align-items: center;
//                     overflow: hidden;
//                 }

//                 .hero-bg {
//                     position: absolute;
//                     top: 50%;
//                     left: 50%;
//                     transform: translate(-50%, -50%);
//                     min-width: 100%;
//                     min-height: 100%;
//                     object-fit: cover;
//                     z-index: -1;
//                 }

//                 .hero-overlay {
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     width: 100%;
//                     height: 100%;
//                     background-color: rgba(0, 0, 0, 0.7); /* Dark overlay for visibility */
//                     z-index: 0;
//                 }

//                 .hero-content {
//                     position: relative;
//                     z-index: 1;
//                     text-align: center; /* Center-align text */
//                     color: #fff;
//                     max-width: 800px; /* Limit content width */
//                     margin: 0 auto;
//                 }

//                 .hero-title {
//                     font-size: 3.5rem;
//                     font-weight: 700;
//                     margin-bottom: 20px;
//                     line-height: 1.2;
//                 }

//                 .hero-buttons {
//                     margin-top: 20px;
//                     display: flex;
//                     justify-content: center;
//                     gap: 15px;
//                 }

//                 .hero-btn-primary,
//                 .hero-btn-secondary {
//                     padding: 12px 30px;
//                     font-size: 1rem;
//                     text-transform: uppercase;
//                     font-weight: bold;
//                     border-radius: 4px;
//                     text-decoration: none;
//                     transition: all 0.3s ease-in-out;
//                     cursor: pointer;
//                 }

//                 .hero-btn-primary {
//                     background-color: #00b300;
//                     color: #fff;
//                 }

//                 .hero-btn-primary:hover {
//                     background-color: #008f00;
//                 }

//                 .hero-btn-secondary {
//                     background-color: transparent;
//                     border: 2px solid #00b300;
//                     color: #00b300;
//                 }

//                 .hero-btn-secondary:hover {
//                     background-color: #00b300;
//                     color: #fff;
//                 }

//                 .hero-stats {
//                     margin-top: 30px;
//                     display: flex;
//                     justify-content: center;
//                     gap: 40px;
//                     flex-wrap: wrap; /* Allow wrapping for smaller screens */
//                 }

//                 .hero-stat-item {
//                     text-align: center;
//                 }

//                 .hero-stat-value {
//                     font-size: 2rem;
//                     font-weight: bold;
//                 }

//                 .hero-stat-label {
//                     font-size: 1rem;
//                     color: #ddd;
//                 }

//                 @media (max-width: 768px) {
//                     .hero-title {
//                         font-size: 2.5rem;
//                     }

//                     .hero-buttons {
//                         flex-direction: column;
//                         gap: 10px;
//                     }

//                     .hero-stats {
//                         gap: 20px;
//                     }
//                 }
//             `}</style>
//         </>
//     );
// };

// export default HeroOne;
