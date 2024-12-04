"use client";

import { useState } from 'react';
import Data from "@data/sections/about.json";
import Link from "next/link";

import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.css'

const AboutSection = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            {/* about */}
            <section className='py-5' style={{background:"#F8F8F8", marginTop:"-60px" }}>
                <div className="container  mil-p-0-30">
                    <div className="mil-background-grid mil-softened" />

                    <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                        <div className="col-lg-5">

                            <div className="mil-mb-90">
                                {/* <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} /> */}
                                <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}}/>
                                <p className="mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : Data.description}} />
                                <p className="mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : Data.description1}} />
                                <a onClick={() => setOpen(true)} className="mil-link mil-upper mil-up has-popup-video" style={{ "cursor" : "pointer" }}>
                                    {Data.button.label} 
                                    <span className="mil-arrow"><img src="/img/icons/2.svg" alt="arrow" /></span>
                                </a>
                            </div>

                        </div>
                        <div className="col-lg-6">

                            <div className="mil-illustration mil-up mil-mb-90">
                                <div className="mil-image-frame">
                                    <img src={Data.image.url} alt={Data.image.alt} className="mil-scale" data-value-1="1" data-value-2="1.3" />
                                </div>
                                <div className="mil-about-counter">
                                    {/* <h1 className="mil-counter mil-right mil-mb-10" data-number={Data.number.value}>0</h1> */}
                                    <h5 className="mil-upper mil-right" dangerouslySetInnerHTML={{__html : Data.number.label}} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <ModalVideo channel='youtube' isOpen={isOpen} videoId={Data.button.link.replace("https://www.youtube.com/watch?v=", "")} onClose={() => setOpen(false)} />
            {/* about end */}
        </>
    );
    const styles = {
        container: {
            display: "flex",
            width: "100%", // Ensures the container spans the full width of the viewport
            maxWidth: "none", // Removes the max-width restriction
            margin: "0", // Removes margin to span full width
            backgroundColor: "#fff",
            padding: "40px 20px", // Adjust padding for more spacing
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        },
        leftSection: {
            flex: 1,
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRight: "1px solid #ddd",
        },
        leftTitle: {
            fontSize: "28px", // Slightly larger font for titles
            color: "#444",
            marginBottom: "20px",
        },
        leftText: {
            fontSize: "20px",
            lineHeight: "1.6",
            color: "#333",
        },
        highlight: {
            color: "#007bff",
            fontWeight: "bold",
        },
        rightSection: {
            flex: 1,
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
        },
        service: {
            marginBottom: "15px",
        },
        serviceTitle: {
            fontSize: "20px",
            color: "#007bff",
            marginBottom: "10px",
        },
        serviceText: {
            fontSize: "16px",
            color: "#555",
            marginBottom: "10px",
        },
        link: {
            fontSize: "14px",
            textDecoration: "none",
            color: "#007bff",
            fontWeight: "bold",
            transition: "color 0.3s",
        },
    };

    // const styles = {
    //     container: {
    //         display: "flex",
    //         width: "100%", // Ensures the container spans the full width of the viewport
    //         margin: "0", // Removes margin to span full width
    //         padding: "0", // Reset padding for full-width alignment
    //         backgroundColor: "#fff",
    //         boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    //     },
    //     leftSection: {
    //         flex: 1,
    //         padding: "40px 20px", // Adjust padding for more spacing
    //         display: "flex",
    //         flexDirection: "column",
    //         justifyContent: "center",
    //         borderRight: "1px solid #ddd",
    //     },
    //     leftTitle: {
    //         fontSize: "28px", // Slightly larger font for titles
    //         color: "#444",
    //         marginBottom: "20px",
    //     },
    //     leftText: {
    //         fontSize: "20px",
    //         lineHeight: "1.6",
    //         color: "#333",
    //     },
    //     highlight: {
    //         color: "#007bff",
    //         fontWeight: "bold",
    //     },
    //     rightSection: {
    //         flex: 1,
    //         padding: "40px 20px", // Consistent padding with left section
    //         display: "flex",
    //         flexDirection: "column",
    //         gap: "20px",
    //     },
    //     service: {
    //         marginBottom: "15px",
    //     },
    //     serviceTitle: {
    //         fontSize: "20px",
    //         color: "#007bff",
    //         marginBottom: "10px",
    //     },
    //     serviceText: {
    //         fontSize: "16px",
    //         color: "#555",
    //         marginBottom: "10px",
    //     },
    //     link: {
    //         fontSize: "14px",
    //         textDecoration: "none",
    //         color: "#007bff",
    //         fontWeight: "bold",
    //         transition: "color 0.3s",
    //     },
    // };

    // return (
    //     <div style={styles.container}>
    //         <div style={styles.leftSection}>
    //             <h2 style={styles.leftTitle}>About Us</h2>
    //             <p style={styles.leftText}>
    //                 <strong>Empowering businesses</strong> to embrace{" "}
    //                 <span style={styles.highlight}>modern technology</span>, rethink processes, and elevate experiences.
    //             </p>
    //         </div>
    //         <div style={styles.rightSection}>
    //             <div style={styles.service}>
    //                 <h3 style={styles.serviceTitle}>Hosting</h3>
    //                 <p style={styles.serviceText}>Secure, scalable hosting solutions for web and application services.</p>
    //                 <a href="#" style={styles.link}>
    //                     Learn More →
    //                 </a>
    //             </div>
    //             <div style={styles.service}>
    //                 <h3 style={styles.serviceTitle}>Web & App Development</h3>
    //                 <p style={styles.serviceText}>
    //                     End-to-end development solutions tailored to your business needs.
    //                 </p>
    //                 <a href="#" style={styles.link}>
    //                     Learn More →
    //                 </a>
    //             </div>
    //             <div style={styles.service}>
    //                 <h3 style={styles.serviceTitle}>Cloud Solutions</h3>
    //                 <p style={styles.serviceText}>
    //                     Adapt to modern demands with hybrid and pure cloud environments.
    //                 </p>
    //                 <a href="#" style={styles.link}>
    //                     Learn More →
    //                 </a>
    //             </div>
    //         </div>
    //     </div>
    // );

    // return (
    //     <div style={styles.container}>
    //         <div style={styles.leftSection}>
    //             <h2 style={styles.leftTitle}>About Us</h2>
    //             <p style={styles.leftText}>
    //                 <strong>Empowering Businesses</strong> to embrace{" "}
    //                 <span style={styles.highlight}>Modern Technology</span>, rethink processes, and elevate experiences.
    //             </p>
    //         </div>
    //         <div style={styles.rightSection}>
    //             <div style={styles.service}>
    //                 <h3 style={styles.serviceTitle}>Hosting</h3>
    //                 <p style={styles.serviceText}>
    //                     Secure, scalable hosting solutions for web and application services.
    //                 </p>
    //                 <a href="#" style={styles.link}>
    //                     Learn More →
    //                 </a>
    //             </div>
    //             <div style={styles.service}>
    //                 <h3 style={styles.serviceTitle}>Web & App Development</h3>
    //                 <p style={styles.serviceText}>
    //                     End-to-end development solutions tailored to your business needs.
    //                 </p>
    //                 <a href="#" style={styles.link}>
    //                     Learn More →
    //                 </a>
    //             </div>
    //             <div style={styles.service}>
    //                 <h3 style={styles.serviceTitle}>Cloud Solutions</h3>
    //                 <p style={styles.serviceText}>
    //                     Adapt to modern demands with hybrid and pure cloud environments.
    //                 </p>
    //                 <a href="#" style={styles.link}>
    //                     Learn More →
    //                 </a>
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default AboutSection;


