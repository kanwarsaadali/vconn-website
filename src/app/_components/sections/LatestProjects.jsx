// "use client"
import Data from "@data/sections/latest-projects.json";
import Link from "next/link";

const LatestProjectsSection = ({ projects }) => {
    // console.log(projects)
    // const projectRows0 = [];

    // for (var i = 0; i < Data.numOfItems; i += 3 ) {
    //     projectRows0.push(projects.slice(i, 3 + i));
    // }

    // const projectRows = [];

    // projectRows0.map((row, row_key) => {
    //     var row1_items = [];
    //     var row2_items = [];
    //     row.map((item, row2_key) => {
    //         if ( row2_key < 2 ) {
    //             row1_items.push(item);
    //         } else {
    //             row2_items.push(item);
    //         }
    //     });
    //     projectRows.push(row1_items);
    //     projectRows.push(row2_items);
    // });

    return (
        <>
            {/* portfolio */}
            <section className='py-5' style={{ background: "#F8F8F8" }}>
                <div className="container-fluid py-5">
                    <div className="d-flex justify-content-center">
                    <div className="mil-center mil-mb-90">
                            <span className="mil-suptitle mil-upper mil-up mil-mb-30"  >jdjsds</span>
                            <h2 className="mil-upper mil-up mil-mb-30">sdssss</h2>
                            <p className="mil-up">asas</p>
                        </div>
                        {/* {console.log("projects", projects)} */}
                    </div>
                    <div className="row">
                        {projects.map((item, item_key) => (
                            <div className="col-md-6 col-lg-3" key={`projects-row-${item_key}`}>
                                <Link href={`/projects/${item.id}`} key={`projects-item-${item_key}`} className={item == null ? "mil-portfolio-item mil-square-item mil-up mil-mb-30" : "mil-portfolio-item mil-long-item mil-up mil-mb-30"}>
                                    <h4 className="text-center withoutHover">{item.title}</h4>
                                    
                                    {/* <h5 className="text-center">{item.title}</h5>  */}
                                    {/* <h5 className="text-center withoutHover">{item.describion}</h5>  */}
                                    {/* <h4 className="text-center title-text">{item.title}</h4> */}
                                    {/* <h5 className="text-center description-text">{item.description}</h5> */}
                                    {/* <h3 className="text-center">kanwar</h3> */}
                                    <img className="img1" src={item.image} alt={item.title} />
                              

                                    <div className="mil-project-descr">
                                        <h4 className="text-center">{item.title}</h4>
                                        <h5 className=" mil-upper mil-mb-20">{item.describion}</h5>
                                        <div className="mil-divider-sm mil-mb-20">{item.title}</div>
                                        <div className="mil-divider-sm mil-mb-20">{item.title}</div>
                                        <p>{item.short}</p>
                                        <span>
                                        <img className="img2" src={item.image1} />
                                        <span className="mil-link mil-light mil-upper ">
                                        Expand <span className="mil-arrow"><img src="img/icons/1.svg" className="img3"  alt="arrow" /></span>
                                    </span>
                                        </span>
                                       
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* blog end */}
        </>
    );
};

export default LatestProjectsSection;