// import Data from "@data/sections/ideas.json";
// import Link from "next/link";

// const IdeasSection = () => {

//     const styles = {
//         container: {
//           display: 'flex',
//           width: '100%',
//           maxWidth: '1200px',
//           margin: '50px auto',
//           backgroundColor: '#fff',
//           boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//           borderRadius: '10px',
//           overflow: 'hidden',
//         },
//         leftSection: {
//           flex: 1,
//           padding: '50px',
//           backgroundColor: '#fff',
//         },
//         title: {
//           fontSize: '36px',
//           color: '#222',
//           marginBottom: '20px',
//         },
//         description: {
//           fontSize: '18px',
//           color: '#555',
//           lineHeight: '1.6',
//           marginBottom: '30px',
//         },
//         learnMore: {
//           color: '#ff5722',
//           fontWeight: 'bold',
//           textDecoration: 'none',
//           fontSize: '16px',
//           cursor: 'pointer',
//         },
//         rightSection: {
//           flex: 1,
//           display: 'flex',
//           flexWrap: 'wrap',
//           backgroundColor: '#f9f9f9',
//           padding: '50px 20px',
//         },
//         stat: {
//           width: '50%',
//           padding: '20px',
//           boxSizing: 'border-box',
//           textAlign: 'center',
//         },
//         statNumber: {
//           fontSize: '48px',
//           color: '#222',
//           marginBottom: '10px',
//         },
//         statText: {
//           fontSize: '16px',
//           color: '#555',
//         },
//       };
//     return (
//         <>
//             {/* ideas */}
//             {/* <section  style={{background:"#F8F8F8"}}> */}
//             <section>

//                 {/* <div className="container mil-p-0-90">
//                     <div className="mil-background-grid mil-softened" />

//                     <div className="row justify-content-between">
//                         <div className="col-lg-6 d-flex flex-column justify-content-center">

//                             <div>
//                                 <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
//                                 <h2 className="mil-upper mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : Data.title}} />
//                                 <Link href={Data.button.link} className="mil-link mil-upper mil-up">
//                                     {Data.button.label}
//                                     <span className="mil-arrow"><img src="img/icons/1.svg" alt="arrow" /></span>
//                                 </Link>
//                             </div>

//                         </div>
//                         <div className="col-lg-5 mil-mt-suptitle-offset">

//                             <p className="mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : Data.description}} />

//                             <div className="row">
//                                 {Data.items.map((item, key) => (
//                                 <div className="col-sm-4" key={`ideas-item-${key}`}>

//                                     <Link href={item.link} className="mil-icon-box mil-sm-center mil-mb-30">
//                                         <div className="mil-icon mil-icon-accent-bg mil-up mil-mb-30">
//                                             <img src={item.icon} alt="icon" />
//                                         </div>
//                                         <h6 className="mil-upper mil-up" dangerouslySetInnerHTML={{__html : item.label}} />
//                                     </Link>

//                                 </div>
//                                 ))}
//                             </div>

//                         </div>
//                     </div>
//                 </div> */}

// <div style={styles.container}>
//       <div style={styles.leftSection}>
//         <h2 style={styles.title}>Translating technology into a positive impact</h2>
//         <p style={styles.description}>
//           Our approach allows us to deliver exceptional experiences that drive growth and success for all stakeholders.
//           Let’s rise to new heights with the power of digital transformation.
//         </p>
//         <a href="#" style={styles.learnMore}>LEARN MORE →</a>
//       </div>
//       <div style={styles.rightSection}>
//         <div style={styles.stat}>
//           <h3 style={styles.statNumber}>10+</h3>
//           <p style={styles.statText}>Years of continual excellence</p>
//         </div>
//         <div style={styles.stat}>
//           <h3 style={styles.statNumber}>7000+</h3>
//           <p style={styles.statText}>Change makers driving revolution</p>
//         </div>
//         <div style={styles.stat}>
//           <h3 style={styles.statNumber}>5+</h3>
//           <p style={styles.statText}>Countries with our presence and clientele</p>
//         </div>
//         <div style={styles.stat}>
//           <h3 style={styles.statNumber}>618+</h3>
//           <p style={styles.statText}>Active clients across the globe</p>
//         </div>
//       </div>
//     </div>
//             </section>
//             {/* ideas end */}
//         </>
//     );
// };
// export default IdeasSection;







// import Data from "@data/sections/ideas.json";
// import Link from "next/link";

// const IdeasSection = () => {
//   const styles = {
//     container: {
//       display: 'flex',
//       flexDirection: 'row', // Horizontal layout by default
//       flexWrap: 'wrap', // Wrap elements on smaller screens
//       width: '100%',
//       maxWidth: '1200px',
//       margin: '50px auto',
//       backgroundColor: '#fff',
//       boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//       borderRadius: '10px',
//       overflow: 'hidden',
//     },
//     leftSection: {
//       flex: 1,
//       padding: '50px',
//       backgroundColor: '#fff',
//       boxSizing: 'border-box',
//     },
//     title: {
//       fontSize: '36px',
//       color: '#222',
//       marginBottom: '20px',
//     },
//     description: {
//       fontSize: '18px',
//       color: '#555',
//       lineHeight: '1.6',
//       marginBottom: '30px',
//     },
//     learnMore: {
//       color: '#ff5722',
//       fontWeight: 'bold',
//       textDecoration: 'none',
//       fontSize: '16px',
//       cursor: 'pointer',
//     },
//     rightSection: {
//       flex: 1,
//       display: 'flex',
//       flexWrap: 'wrap',
//       backgroundColor: '#f9f9f9',
//       padding: '50px 20px',
//       boxSizing: 'border-box',
//     },
//     stat: {
//       width: '50%',
//       padding: '20px',
//       textAlign: 'center',
//       boxSizing: 'border-box',
//     },
//     statNumber: {
//       fontSize: '48px',
//       color: '#222',
//       marginBottom: '10px',
//     },
//     statText: {
//       fontSize: '16px',
//       color: '#555',
//     },

//     // Responsive Media Queries
//     '@media (max-width: 768px)': {
//       container: {
//         flexDirection: 'column',
//         margin: '20px auto', // Reduced margin on smaller screens
//       },
//       leftSection: {
//         padding: '20px', // Less padding on mobile
//       },
//       rightSection: {
//         padding: '20px', // Less padding on mobile
//       },
//       title: {
//         fontSize: '28px', // Smaller title font on mobile
//       },
//       description: {
//         fontSize: '16px', // Smaller description font on mobile
//       },
//       learnMore: {
//         fontSize: '14px', // Adjust font size for smaller screens
//       },
//       stat: {
//         width: '100%', // Stack stats vertically on mobile
//         padding: '15px',
//       },
//       statNumber: {
//         fontSize: '40px', // Smaller stat number on mobile
//       },
//       statText: {
//         fontSize: '14px', // Smaller text for stats
//       },
//     },

//     '@media (max-width: 480px)': {
//       container: {
//         margin: '10px', // Even smaller margins on very small screens
//       },
//       leftSection: {
//         padding: '15px', // Further reduce padding on very small screens
//       },
//       title: {
//         fontSize: '24px', // Even smaller title font
//       },
//       description: {
//         fontSize: '14px', // Even smaller description font
//       },
//       learnMore: {
//         fontSize: '12px', // Adjust font size for very small screens
//       },
//       statNumber: {
//         fontSize: '36px', // Even smaller stat number on very small screens
//       },
//       statText: {
//         fontSize: '12px', // Smaller text for very small screens
//       },
//     },
//   };

//   return (
//     <>
//       <section>
//         <div style={styles.container}>
//           <div style={styles.leftSection}>
//             <h2 style={styles.title}>Translating technology into a positive impact</h2>
//             <p style={styles.description}>
//               Our approach allows us to deliver exceptional experiences that drive growth and success for all stakeholders.
//               Let’s rise to new heights with the power of digital transformation.
//             </p>
//             <a href="#" style={styles.learnMore}>LEARN MORE →</a>
//           </div>
//           <div style={styles.rightSection}>
//             <div style={styles.stat}>
//               <h3 style={styles.statNumber}>10+</h3>
//               <p style={styles.statText}>Years of continual excellence</p>
//             </div>
//             <div style={styles.stat}>
//               <h3 style={styles.statNumber}>7000+</h3>
//               <p style={styles.statText}>Change makers driving revolution</p>
//             </div>
//             <div style={styles.stat}>
//               <h3 style={styles.statNumber}>5+</h3>
//               <p style={styles.statText}>Countries with our presence and clientele</p>
//             </div>
//             <div style={styles.stat}>
//               <h3 style={styles.statNumber}>618+</h3>
//               <p style={styles.statText}>Active clients across the globe</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default IdeasSection;






'use client';  // Make sure it's a client-side component

import Link from "next/link";

const IdeasSection = () => {
  return (
    <>
      <style jsx>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #f8f8f8;
          height: 100vh;  // Ensure body takes up full height of the screen
          display: flex;  // Use flexbox to center everything
          justify-content: center;
          align-items: center;
        }

        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;  // Full viewport height for the container
          width: 100%;  // Make sure the container takes the full width
        }

        .pricing-section {
          display: flex;
          flex-direction: row;  // Side-by-side layout for desktop
          background: linear-gradient(to bottom, #ffffff, #d5f4f4);
          border-radius: 20px;
          width: 100%;
          max-width: 1200px;
          height: 80vh;  // Slightly less than full height to fit content comfortably
          padding: 30px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          align-items: center;  // Center the content vertically within this section
          justify-content: space-between;  // Space out the left and right content
          transition: all 0.3s ease;
        }

        .pricing-section:hover {
          transform: scale(1.02);  // Slightly enlarge the section on hover
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);  // Stronger shadow on hover
        }

        .pricing-left,
        .pricing-right {
          flex: 1;
          padding: 20px;
        }

        .section-title {
          font-size: 36px;
          line-height: 1.5;
          color: #333;
          margin-bottom: 20px;
        }

        .highlight {
          color: #00a99d;
          font-weight: bold;
        }

        .description {
          margin-top: 10px;
          font-size: 18px;
          color: #555;
          line-height: 1.6;
        }

        .reviews-btn {
          margin-top: 20px;
          padding: 12px 25px;
          background-color: #fff;
          border: 2px solid #00a99d;
          border-radius: 30px;
          cursor: pointer;
          font-weight: bold;
          text-decoration: none;
          display: inline-block;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .reviews-btn:hover {
          background-color: #00a99d;
          color: #fff;
        }

        .price-box {
          background-color: #fff;
          border-radius: 15px;
          padding: 30px;
          text-align: left;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s ease;
        }

        .price-box:hover {
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        }

        .starting-from {
          font-size: 16px;
          color: #777;
        }

        .price {
          font-size: 36px;
          color: #333;
          margin: 10px 0;
        }

        .contact-btn {
          margin: 20px 0;
          padding: 12px 25px;
          background-color: #00a99d;
          color: #fff;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          font-size: 18px;
          transition: background-color 0.3s ease;
        }

        .contact-btn:hover {
          background-color: #007a6c;
        }

        .price-description {
          font-size: 16px;
          color: #555;
          margin-bottom: 20px;
        }

        .features .feature {
          margin: 15px 0;
          padding-left: 25px;
          position: relative;
        }

        .features .feature::before {
          content: "✔";
          color: #00a99d;
          position: absolute;
          left: 0;
          top: 0;
        }

        .features h4 {
          margin: 0;
          color: #333;
          font-size: 18px;
        }

        .features p {
          margin: 5px 0 0;
          color: #777;
          font-size: 16px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .pricing-section {
            flex-direction: column;  // Stack sections on smaller screens
            height: auto;  // Auto height for stacked layout
            padding: 25px;  // Less padding on mobile
          }

          .section-title {
            font-size: 28px;  // Adjust font size for mobile
          }

          .pricing-left, .pricing-right {
            padding: 15px;  // Less padding for mobile
          }

          .reviews-btn, .contact-btn {
            font-size: 16px;  // Smaller button text for mobile
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 24px;  // Further reduce font size for smaller screens
          }

          .description {
            font-size: 16px;  // Adjust description size for mobile
          }

          .reviews-btn, .contact-btn {
            font-size: 14px;  // Further reduce button size
          }
        }
      `}</style>

      <section className="container"style={{marginTop:"-90px"}} >
        <div className="pricing-section">
          {/* Left Section */}
          <div className="pricing-left">
            <h2 className="section-title">
              We leverage the <span className="highlight">latest advancements in AI</span> to deliver the highest quality technology, <span className="highlight">on time and on budget</span>.
            </h2>
            <p className="description">
              We've been helping customers since 2009 and take pride in delivering high-quality custom services designed to help you build, grow, and revolutionize your business.
            </p>
            <Link href="#" className="reviews-btn">
              See Our Reviews
            </Link>
          </div>

          {/* Right Section */}
          <div className="pricing-right">
            <div className="price-box">
              <p className="starting-from">Starting from</p>
              <h3 className="price">$22/hr</h3>
              <button className="contact-btn">Contact Us →</button>
              <p className="price-description">
                Experience working with us for 2 weeks completely free of charge. We guarantee positive results or continue working for free until you do.
              </p>

              {/* Features */}
              <div className="features">
                <div className="feature">
                  <h4>✔ Software Outsourcing</h4>
                  <p>Complete software development outsourcing.</p>
                </div>
                <div className="feature">
                  <h4>✔ Staff Augmentation</h4>
                  <p>Add talent to your existing team through our services.</p>
                </div>
                <div className="feature">
                  <h4>✔ Dedicated Teams</h4>
                  <p>Move faster with dedicated teams for your projects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IdeasSection;






// "use client"; // Add this at the top to mark the component as a Client Component

// import Data from "@data/sections/ideas.json";
// import Link from "next/link";

// const IdeasSection = () => {
//     return (
//         <section
//             style={{
//                 background: "#000000", // Black background
//                 padding: "50px 0", // Add padding to the section
//             }}
//         >
//             <div className="container mil-p-0-90">
//                 <div className="row justify-content-between align-items-center">
//                     {/* Left Content Section */}
//                     <div className="col-lg-6 d-flex flex-column justify-content-center">
//                         <div>
//                             <span
//                                 className="mil-suptitle mil-upper mil-up mil-mb-30"
//                                 style={{
//                                     color: "#ffffff", // White for subtitle
//                                     fontSize: "1.2rem",
//                                     letterSpacing: "1px",
//                                 }}
//                                 dangerouslySetInnerHTML={{
//                                     __html: Data.subtitle,
//                                 }}
//                             />
//                             <h2
//                                 className="mil-upper mil-up mil-mb-40"
//                                 style={{
//                                     color: "#ffffff", // White for title
//                                     fontWeight: "bold",
//                                     fontSize: "2.5rem",
//                                     lineHeight: "1.3",
//                                 }}
//                                 dangerouslySetInnerHTML={{
//                                     __html: Data.title,
//                                 }}
//                             />
//                             <Link
//                                 href={Data.button.link}
//                                 className="mil-link mil-upper mil-up"
//                                 style={{
//                                     display: "inline-block",
//                                     padding: "10px 20px",
//                                     background: "#bcff00", // Green button
//                                     color: "#000000", // Black text on green button
//                                     fontWeight: "bold",
//                                     textTransform: "uppercase",
//                                     borderRadius: "30px",
//                                     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//                                     transition: "all 0.3s ease-in-out",
//                                 }}
//                                 onMouseOver={(e) =>
//                                     (e.target.style.background = "#000000") || (e.target.style.color = "#bcff00")
//                                 }
//                                 onMouseOut={(e) =>
//                                     (e.target.style.background = "#bcff00") || (e.target.style.color = "#000000")
//                                 }
//                             >
//                                 {Data.button.label}
//                                 <span className="mil-arrow">
//                                     <img
//                                         src="img/icons/1.svg"
//                                         alt="arrow"
//                                         style={{
//                                             marginLeft: "10px",
//                                             height: "15px",
//                                         }}
//                                     />
//                                 </span>
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Right Content Section */}
//                     <div className="col-lg-5 mil-mt-suptitle-offset">
//                         <p
//                             className="mil-up mil-mb-60"
//                             style={{
//                                 color: "#f1f1f1", // Light grey for description text
//                                 fontSize: "1rem",
//                                 lineHeight: "1.8",
//                             }}
//                             dangerouslySetInnerHTML={{
//                                 __html: Data.description,
//                             }}
//                         />

//                         {/* Icon Items Section */}
//                         <div className="row">
//                             {Data.items.map((item, key) => (
//                                 <div
//                                     className="col-sm-4 text-center"
//                                     key={`ideas-item-${key}`}
//                                     style={{
//                                         marginBottom: "20px",
//                                     }}
//                                 >
//                                     <Link
//                                         href={item.link}
//                                         className="mil-icon-box"
//                                         style={{
//                                             textDecoration: "none",
//                                             transition: "all 0.3s ease",
//                                         }}
//                                         onMouseOver={(e) => {
//                                             e.currentTarget.style.transform = "scale(1.1)";
//                                         }}
//                                         onMouseOut={(e) => {
//                                             e.currentTarget.style.transform = "scale(1)";
//                                         }}
//                                     >
//                                         <div
//                                             className="mil-icon mil-icon-accent-bg mil-up mil-mb-30"
//                                             style={{
//                                                 width: "80px",
//                                                 height: "80px",
//                                                 margin: "0 auto",
//                                                 borderRadius: "50%",
//                                                 background: "#bcff00", // Green background for icons
//                                                 display: "flex",
//                                                 justifyContent: "center",
//                                                 alignItems: "center",
//                                                 boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
//                                             }}
//                                         >
//                                             <img
//                                                 src={item.icon}
//                                                 alt="icon"
//                                                 style={{
//                                                     width: "40px",
//                                                     height: "40px",
//                                                 }}
//                                             />
//                                         </div>
//                                         <h6
//                                             className="mil-upper mil-up"
//                                             style={{
//                                                 color: "#ffffff", // White for icon labels
//                                                 fontWeight: "bold",
//                                                 fontSize: "1rem",
//                                             }}
//                                             dangerouslySetInnerHTML={{
//                                                 __html: item.label,
//                                             }}
//                                         />
//                                     </Link>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default IdeasSection;
