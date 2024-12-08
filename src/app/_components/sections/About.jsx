// "use client";

// import { useState } from 'react';
// import Data from "@data/sections/about.json";
// import Link from "next/link";

// import ModalVideo from 'react-modal-video'
// import 'react-modal-video/css/modal-video.css'

// const AboutSection = () => {
//     const [isOpen, setOpen] = useState(false);

//     return (
//         <>
//             {/* about */}
//             <section className='py-5' style={{background:"#F8F8F8", marginTop:"-60px" }}>
//                 <div className="container  mil-p-0-30">
//                     <div className="mil-background-grid mil-softened" />

//                     <div className="row justify-content-between align-items-center flex-sm-row-reverse">
//                         <div className="col-lg-5">

//                             <div className="mil-mb-90">
//                                 {/* <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} /> */}
//                                 <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}}/>
//                                 <p className="mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : Data.description}} />
//                                 <p className="mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : Data.description1}} />
//                                 <a onClick={() => setOpen(true)} className="mil-link mil-upper mil-up has-popup-video" style={{ "cursor" : "pointer" }}>
//                                     {Data.button.label} 
//                                     <span className="mil-arrow"><img src="/img/icons/2.svg" alt="arrow" /></span>
//                                 </a>
//                             </div>

//                         </div>
//                         <div className="col-lg-6">

//                             <div className="mil-illustration mil-up mil-mb-90">
//                                 <div className="mil-image-frame">
//                                     <img src={Data.image.url} alt={Data.image.alt} className="mil-scale" data-value-1="1" data-value-2="1.3" />
//                                 </div>
//                                 <div className="mil-about-counter">
//                                     {/* <h1 className="mil-counter mil-right mil-mb-10" data-number={Data.number.value}>0</h1> */}
//                                     <h5 className="mil-upper mil-right" dangerouslySetInnerHTML={{__html : Data.number.label}} />
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <ModalVideo channel='youtube' isOpen={isOpen} videoId={Data.button.link.replace("https://www.youtube.com/watch?v=", "")} onClose={() => setOpen(false)} />
//             {/* about end */}
//         </>
//     );
//     const styles = {
//         container: {
//             display: "flex",
//             width: "100%", // Ensures the container spans the full width of the viewport
//             maxWidth: "none", // Removes the max-width restriction
//             margin: "0", // Removes margin to span full width
//             backgroundColor: "#fff",
//             padding: "40px 20px", // Adjust padding for more spacing
//             boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
//         },
//         leftSection: {
//             flex: 1,
//             padding: "20px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             borderRight: "1px solid #ddd",
//         },
//         leftTitle: {
//             fontSize: "28px", // Slightly larger font for titles
//             color: "#444",
//             marginBottom: "20px",
//         },
//         leftText: {
//             fontSize: "20px",
//             lineHeight: "1.6",
//             color: "#333",
//         },
//         highlight: {
//             color: "#007bff",
//             fontWeight: "bold",
//         },
//         rightSection: {
//             flex: 1,
//             padding: "20px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "20px",
//         },
//         service: {
//             marginBottom: "15px",
//         },
//         serviceTitle: {
//             fontSize: "20px",
//             color: "#007bff",
//             marginBottom: "10px",
//         },
//         serviceText: {
//             fontSize: "16px",
//             color: "#555",
//             marginBottom: "10px",
//         },
//         link: {
//             fontSize: "14px",
//             textDecoration: "none",
//             color: "#007bff",
//             fontWeight: "bold",
//             transition: "color 0.3s",
//         },
//     };


// };

// export default AboutSection;

// "use client";

// import Link from "next/link";

// const AboutSection = () => {
//     return (
//         <section style={styles.section}>
//             <div style={styles.container}>
//                 <div style={styles.row}>
//                     {/* Left Column - Image */}
//                     <div style={styles.imageCol}>
//                         <div style={styles.imageWrapper}>
//                             <img
//                                 src="/img/photo/vr1.png" // Update the path to your image
//                                 alt="Innovative Solutions"
//                                 style={styles.image}
//                             />
//                             <div style={styles.highlightBox}>
//                                 <h3 style={styles.highlightText}>
//                                     DECADE OF <br /> SUCCESSFUL WORK
//                                 </h3>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Column - Content */}
//                     <div style={styles.contentCol}>
//                         <h1 style={styles.title}>
//                             TRANSFORMING DIGITAL GOALS INTO REALITY
//                         </h1>
//                         <p style={styles.description}>
//                             In the rapidly evolving digital landscape, businesses face a series of interconnected challenges that threaten growth and stability:
//                         </p>
//                         <ul style={styles.list}>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>💻</span> Complex IT Ecosystems
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>🔒</span> Rising Cybersecurity Threats
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>☁️</span> Disruptive Cloud Migrations
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>⚙️</span> Maintaining Uptime
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>📜</span> Compliance Pressure
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>👁️</span> Lack of Real-Time Insights
//                             </li>
//                         </ul>
//                         <p style={styles.description}>
//                             These challenges create an urgent need for businesses to rethink their strategies and embrace solutions that foster resilience and agility.
//                         </p>
//                         <Link href="/services" style={styles.button}>
//                             DISCOVER OUR SERVICES →
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// const styles = {
//     section: {
//         padding: "60px 20px",
//         backgroundColor: "#F8F8F8",
//         marginTop: "-40px"
//     },
//     container: {
//         maxWidth: "1200px",
//         margin: "0 auto",
//     },
//     row: {
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "flex-start", // Align items to the top for better spacing
//         justifyContent: "space-between",
//         gap: "40px", // Add some gap between the columns
//     },
//     imageCol: {
//         flex: "1",
//         position: "relative",
//         marginBottom: "20px", // Margin to separate from the content column
//     },
//     imageWrapper: {
//         position: "relative",
//         textAlign: "center",
//         overflow: "hidden", // Ensure the image fits inside the container without spilling
//     },
//     image: {
//         width: "100%",
//         borderRadius: "8px",
//         boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
//     },
//     highlightBox: {
//         position: "absolute",
//         bottom: "1%", // Position the text near the bottom (10% from the bottom of the image)
//         left: "84%",
//         transform: "translateX(-50%)", // Centers the text horizontally
//         // backgroundColor: "#FFFF00",
//         backgroundColor: "rgb(188, 255, 0)",
//         padding: "20px 40px",
//         borderRadius: "4px",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//     },
//     highlightText: {
//         fontSize: "16px",
//         fontWeight: "bold",
//         textAlign: "center",
//         textTransform: "uppercase",
//         color: "#000",
//         margin: 0,
//         lineHeight: "1.4",
//     },
//     contentCol: {
//         flex: "1",
//         paddingLeft: "20px",
//         marginTop: "20px", // Ensure some space between the image and the content text
//     },
//     title: {
//         fontSize: "36px",
//         fontWeight: "700",
//         color: "#000",
//         marginBottom: "20px",
//         lineHeight: "1.4",
//     },
//     description: {
//         fontSize: "16px",
//         color: "#333",
//         marginBottom: "20px",
//         lineHeight: "1.8",
//     },
//     list: {
//         padding: "0",
//         margin: "20px 0",
//         listStyleType: "none",
//     },
//     listItem: {
//         display: "flex",
//         alignItems: "center",
//         fontSize: "16px",
//         color: "#000",
//         marginBottom: "12px",
//         lineHeight: "1.6",
//     },
//     iconBox: {
//         display: "inline-block",
//         width: "24px",
//         height: "24px",
//         marginRight: "12px",
//         backgroundColor: "#00FF00",
//         color: "#000",
//         fontWeight: "bold",
//         textAlign: "center",
//         lineHeight: "24px",
//         borderRadius: "4px",
//     },
//     button: {
//         display: "inline-block",
//         padding: "12px 24px",
//         fontSize: "16px",
//         fontWeight: "bold",
//         color: "#000",
//         backgroundColor: "rgb(188, 255, 0)",
//         borderRadius: "4px",
//         textDecoration: "none",
//         textTransform: "uppercase",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//         transition: "all 0.3s ease",
//     },
// };

// export default AboutSection;



// "use client";

// import Link from "next/link";

// const AboutSection = () => {
//     return (
//         <section style={styles.section}>
//             <div style={styles.container}>
//                 <div style={styles.row}>
//                     {/* Left Column - Image */}
//                     <div style={styles.imageCol}>
//                         <div style={styles.imageWrapper}>
//                             <img
//                                 src="/img/photo/vr1.png" // Update the path to your image
//                                 alt="Innovative Solutions"
//                                 style={styles.image}
//                             />
//                             <div style={styles.highlightBox}>
//                                 <h3 style={styles.highlightText}>
//                                     DECADE OF <br /> SUCCESSFUL WORK
//                                 </h3>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Column - Content */}
//                     <div style={styles.contentCol}>
//                         <h1 style={styles.title}>
//                             TRANSFORMING DIGITAL GOALS INTO REALITY
//                         </h1>
//                         <p style={styles.description}>
//                             In the rapidly evolving digital landscape, businesses face a series of interconnected challenges that threaten growth and stability:
//                         </p>
//                         <ul style={styles.list}>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>💻</span> Complex IT Ecosystems
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>🔒</span> Rising Cybersecurity Threats
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>☁️</span> Disruptive Cloud Migrations
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>⚙️</span> Maintaining Uptime
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>📜</span> Compliance Pressure
//                             </li>
//                             <li style={styles.listItem}>
//                                 <span style={styles.iconBox}>👁️</span> Lack of Real-Time Insights
//                             </li>
//                         </ul>
//                         <p style={styles.description}>
//                             These challenges create an urgent need for businesses to rethink their strategies and embrace solutions that foster resilience and agility.
//                         </p>
//                         <Link href="/services" style={styles.button}>
//                             DISCOVER OUR SERVICES →
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// const styles = {
//     section: {
//         padding: "60px 20px",
//         backgroundColor: "#F8F8F8",
//         marginTop: "-40px"
//     },
//     container: {
//         maxWidth: "1200px",
//         margin: "0 auto",
//     },
//     row: {
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "flex-start", // Align items to the top for better spacing
//         justifyContent: "space-between",
//         gap: "40px", // Add some gap between the columns
//         flexWrap: "wrap", // Allow content to wrap on smaller screens
//     },
//     imageCol: {
//         flex: "1 1 45%", // Ensure the image takes up to 45% on larger screens
//         position: "relative",
//         marginBottom: "20px", // Margin to separate from the content column
//     },
//     imageWrapper: {
//         position: "relative",
//         textAlign: "center",
//         overflow: "hidden", // Ensure the image fits inside the container without spilling
//     },
//     image: {
//         width: "100%",
//         borderRadius: "8px",
//         boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
//     },
//     highlightBox: {
//         position: "absolute",
//         bottom: "1%", // Position the text near the bottom (1% from the bottom of the image)
//         left: "80%", // Position the box in the center
//         transform: "translateX(-50%)", // Centers the text horizontally
//         backgroundColor: "rgb(188, 255, 0)",
//         padding: "20px 40px",
//         borderRadius: "4px",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//     },
//     highlightText: {
//         fontSize: "16px",
//         fontWeight: "bold",
//         textAlign: "center",
//         textTransform: "uppercase",
//         color: "#000",
//         margin: 0,
//         lineHeight: "1.4",
//     },
//     contentCol: {
//         flex: "1 1 50%", // Ensure the content takes up 50% on larger screens
//         paddingLeft: "20px",
//         marginTop: "20px", // Ensure some space between the image and the content text
//     },
//     title: {
//         fontSize: "36px",
//         fontWeight: "700",
//         color: "#000",
//         marginBottom: "20px",
//         lineHeight: "1.4",
//     },
//     description: {
//         fontSize: "16px",
//         color: "#333",
//         marginBottom: "20px",
//         lineHeight: "1.8",
//     },
//     list: {
//         padding: "0",
//         margin: "20px 0",
//         listStyleType: "none",
//     },
//     listItem: {
//         display: "flex",
//         alignItems: "center",
//         fontSize: "16px",
//         color: "#000",
//         marginBottom: "12px",
//         lineHeight: "1.6",
//     },
//     iconBox: {
//         display: "inline-block",
//         width: "24px",
//         height: "24px",
//         marginRight: "12px",
//         backgroundColor: "#00FF00",
//         color: "#000",
//         fontWeight: "bold",
//         textAlign: "center",
//         lineHeight: "24px",
//         borderRadius: "4px",
//     },
//     button: {
//         display: "inline-block",
//         padding: "12px 24px",
//         fontSize: "16px",
//         fontWeight: "bold",
//         color: "#000",
//         backgroundColor: "rgb(188, 255, 0)",
//         borderRadius: "4px",
//         textDecoration: "none",
//         textTransform: "uppercase",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//         transition: "all 0.3s ease",
//     },

//     // Media Queries for Responsiveness

//     "@media (max-width: 1200px)": {
//         row: {
//             flexDirection: "column", // Stack the image and content for medium to small screens
//             gap: "20px",
//         },
//         title: {
//             fontSize: "28px", // Adjust font size for tablets and smaller devices
//         },
//         description: {
//             fontSize: "14px", // Adjust description font size for better readability
//         },
//         highlightBox: {
//             bottom: "10%", // Adjust position for smaller screens
//             padding: "10px 20px", // Reduce padding for smaller screens
//         },
//         highlightText: {
//             fontSize: "14px", // Smaller font for mobile
//         },
//         button: {
//             padding: "10px 20px", // Adjust button size for mobile screens
//             fontSize: "14px", // Smaller button text
//         },
//     },

//     "@media (max-width: 768px)": {
//         section: {
//             padding: "40px 15px", // Adjust padding for small screens
//         },
//         title: {
//             fontSize: "24px", // Reduce title size for smaller screens
//         },
//         description: {
//             fontSize: "14px", // Smaller font size for mobile devices
//         },
//         imageCol: {
//             flex: "1 1 100%", // Ensure image takes full width on small screens
//             marginBottom: "20px",
//         },
//         contentCol: {
//             flex: "1 1 100%", // Ensure content takes full width on mobile
//             paddingLeft: "0", // Remove padding for smaller screens
//         },
//     },

//     "@media (max-width: 480px)": {
//         highlightBox: {
//             padding: "10px 15px", // Even smaller padding for very small devices
//             fontSize: "12px", // Further reduce font size for very small devices
//         },
//         button: {
//             padding: "8px 16px", // Even smaller button for mobile screens
//             fontSize: "12px",
//         },
//     },
// };

// export default AboutSection;





"use client";

import Link from "next/link";

const AboutSection = () => {
    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <div style={styles.row}>
                    {/* Left Column - Image */}
                    <div style={styles.imageCol}>
                        <div style={styles.imageWrapper}>
                            <img
                                src="/img/photo/vr1.png" // Update the path to your image
                                alt="Innovative Solutions"
                                style={styles.image}
                            />
                            <div style={styles.highlightBox}>
                                <h3 style={styles.highlightText}>
                                    DECADE OF <br /> SUCCESSFUL WORK
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div style={styles.contentCol}>
                        <h1 style={styles.title}>
                            TRANSFORMING DIGITAL GOALS INTO REALITY
                        </h1>
                        <p style={styles.description}>
                            In the rapidly evolving digital landscape, businesses face a series of interconnected challenges that threaten growth and stability:
                        </p>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>
                                <span style={styles.iconBox}>💻</span> Complex IT Ecosystems
                            </li>
                            <li style={styles.listItem}>
                                <span style={styles.iconBox}>🔒</span> Rising Cybersecurity Threats
                            </li>
                            <li style={styles.listItem}>
                                <span style={styles.iconBox}>☁️</span> Disruptive Cloud Migrations
                            </li>
                            <li style={styles.listItem}>
                                <span style={styles.iconBox}>⚙️</span> Maintaining Uptime
                            </li>
                            <li style={styles.listItem}>
                                <span style={styles.iconBox}>📜</span> Compliance Pressure
                            </li>
                            <li style={styles.listItem}>
                                <span style={styles.iconBox}>👁️</span> Lack of Real-Time Insights
                            </li>
                        </ul>
                        <p style={styles.description}>
                            These challenges create an urgent need for businesses to rethink their strategies and embrace solutions that foster resilience and agility.
                        </p>
                        <Link href="/services" style={styles.button}>
                            DISCOVER OUR SERVICES →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: "60px 20px",
        backgroundColor: "#F8F8F8",
        marginTop: "-40px",
    },
    container: {
        maxWidth: "1200px",
        margin: "0 auto",
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start", 
        justifyContent: "space-between",
        gap: "40px",
        flexWrap: "wrap",
    },
    imageCol: {
        flex: "1 1 45%",
        position: "relative",
        marginBottom: "20px",
    },
    imageWrapper: {
        position: "relative",
        textAlign: "center",
        overflow: "hidden",
        transition: "transform 0.3s ease-in-out",
    },
    imageWrapperHover: {
        ":hover": {
            transform: "scale(1.05)", 
        },
    },
    image: {
        width: "100%",
        borderRadius: "8px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
    highlightBox: {
        position: "absolute",
        bottom: "1%",
        left: "75%",
        transform: "translateX(-50%)",
        backgroundColor: "rgb(188, 255, 0)",
        padding: "20px 40px",
        borderRadius: "4px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    highlightText: {
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
        color: "#000",
        margin: 0,
        lineHeight: "1.4",
    },
    contentCol: {
        flex: "1 1 50%",
        paddingLeft: "20px",
        marginTop: "20px",
    },
    title: {
        fontSize: "36px",
        fontWeight: "700",
        color: "#000",
        marginBottom: "20px",
        lineHeight: "1.4",
    },
    description: {
        fontSize: "16px",
        color: "#333",
        marginBottom: "20px",
        lineHeight: "1.8",
    },
    list: {
        padding: "0",
        margin: "20px 0",
        listStyleType: "none",
    },
    listItem: {
        display: "flex",
        alignItems: "center",
        fontSize: "16px",
        color: "#000",
        marginBottom: "12px",
        lineHeight: "1.6",
    },
    iconBox: {
        display: "inline-block",
        width: "24px",
        height: "24px",
        marginRight: "12px",
        // backgroundColor: "#00FF00",
        backgroundColor: "rgb(188, 255, 0)",
        color: "#000",
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: "24px",
        borderRadius: "4px",
    },
    button: {
        display: "inline-block",
        padding: "12px 24px",
        fontSize: "16px",
        fontWeight: "bold",
        color: "#000",
        backgroundColor: "rgb(188, 255, 0)",
        borderRadius: "4px",
        textDecoration: "none",
        textTransform: "uppercase",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease",
    },

    // Media Queries for Responsiveness

    "@media (max-width: 1200px)": {
        row: {
            flexDirection: "column",
            gap: "20px",
        },
        title: {
            fontSize: "28px", 
        },
        description: {
            fontSize: "14px",
        },
        highlightBox: {
            bottom: "10%",
            padding: "10px 20px",
        },
        highlightText: {
            fontSize: "14px", 
        },
        button: {
            padding: "10px 20px", 
            fontSize: "14px",
        },
    },

    "@media (max-width: 768px)": {
        section: {
            padding: "40px 15px", 
        },
        title: {
            fontSize: "24px", 
        },
        description: {
            fontSize: "14px", 
        },
        imageCol: {
            flex: "1 1 100%", 
            marginBottom: "20px",
        },
        contentCol: {
            flex: "1 1 100%", 
            paddingLeft: "0",
        },
    },

    "@media (max-width: 480px)": {
        highlightBox: {
            padding: "10px 15px", 
            fontSize: "12px", 
        },
        button: {
            padding: "8px 16px", 
            fontSize: "12px",
        },
    },
};

export default AboutSection;
