import Data from "@data/sections/ideas.json";
import Link from "next/link";

const IdeasSection = () => {

    const styles = {
        container: {
          display: 'flex',
          width: '100%',
          maxWidth: '1200px',
          margin: '50px auto',
          backgroundColor: '#fff',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          overflow: 'hidden',
        },
        leftSection: {
          flex: 1,
          padding: '50px',
          backgroundColor: '#fff',
        },
        title: {
          fontSize: '36px',
          color: '#222',
          marginBottom: '20px',
        },
        description: {
          fontSize: '18px',
          color: '#555',
          lineHeight: '1.6',
          marginBottom: '30px',
        },
        learnMore: {
          color: '#ff5722',
          fontWeight: 'bold',
          textDecoration: 'none',
          fontSize: '16px',
          cursor: 'pointer',
        },
        rightSection: {
          flex: 1,
          display: 'flex',
          flexWrap: 'wrap',
          backgroundColor: '#f9f9f9',
          padding: '50px 20px',
        },
        stat: {
          width: '50%',
          padding: '20px',
          boxSizing: 'border-box',
          textAlign: 'center',
        },
        statNumber: {
          fontSize: '48px',
          color: '#222',
          marginBottom: '10px',
        },
        statText: {
          fontSize: '16px',
          color: '#555',
        },
      };
    return (
        <>
            {/* ideas */}
            {/* <section  style={{background:"#F8F8F8"}}> */}
            <section>

                {/* <div className="container mil-p-0-90">
                    <div className="mil-background-grid mil-softened" />

                    <div className="row justify-content-between">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">

                            <div>
                                <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                                <h2 className="mil-upper mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : Data.title}} />
                                <Link href={Data.button.link} className="mil-link mil-upper mil-up">
                                    {Data.button.label}
                                    <span className="mil-arrow"><img src="img/icons/1.svg" alt="arrow" /></span>
                                </Link>
                            </div>

                        </div>
                        <div className="col-lg-5 mil-mt-suptitle-offset">

                            <p className="mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : Data.description}} />

                            <div className="row">
                                {Data.items.map((item, key) => (
                                <div className="col-sm-4" key={`ideas-item-${key}`}>

                                    <Link href={item.link} className="mil-icon-box mil-sm-center mil-mb-30">
                                        <div className="mil-icon mil-icon-accent-bg mil-up mil-mb-30">
                                            <img src={item.icon} alt="icon" />
                                        </div>
                                        <h6 className="mil-upper mil-up" dangerouslySetInnerHTML={{__html : item.label}} />
                                    </Link>

                                </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div> */}

<div style={styles.container}>
      <div style={styles.leftSection}>
        <h2 style={styles.title}>Translating technology into a positive impact</h2>
        <p style={styles.description}>
          Our approach allows us to deliver exceptional experiences that drive growth and success for all stakeholders.
          Let’s rise to new heights with the power of digital transformation.
        </p>
        <a href="#" style={styles.learnMore}>LEARN MORE →</a>
      </div>
      <div style={styles.rightSection}>
        <div style={styles.stat}>
          <h3 style={styles.statNumber}>10+</h3>
          <p style={styles.statText}>Years of continual excellence</p>
        </div>
        <div style={styles.stat}>
          <h3 style={styles.statNumber}>7000+</h3>
          <p style={styles.statText}>Change makers driving revolution</p>
        </div>
        <div style={styles.stat}>
          <h3 style={styles.statNumber}>5+</h3>
          <p style={styles.statText}>Countries with our presence and clientele</p>
        </div>
        <div style={styles.stat}>
          <h3 style={styles.statNumber}>618+</h3>
          <p style={styles.statText}>Active clients across the globe</p>
        </div>
      </div>
    </div>
            </section>
            {/* ideas end */}
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
