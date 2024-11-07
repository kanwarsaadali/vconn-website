import Data from "@data/sections/latest-projects.json";
import Link from "next/link";

const LatestProjectsSection = ( { projects } ) => {
    const projectRows0 = [];

    for (var i = 0; i < Data.numOfItems; i += 3 ) {
        projectRows0.push(projects.slice(i, 3 + i));
    }

    const projectRows = [];

    projectRows0.map((row, row_key) => {
        var row1_items = [];
        var row2_items = [];
        row.map((item, row2_key) => {
            if ( row2_key < 2 ) {
                row1_items.push(item);
            } else {
                row2_items.push(item);
            }
        });
        projectRows.push(row1_items);
        projectRows.push(row2_items);
    });

    return (
        <>
            {/* portfolio */}
            <section>
                <div className="container-fluid">
                    <div className="row">
                        {projectRows.map((row, row_key) => (
                        <div className="col-md-6 col-lg-3" key={`projects-row-${row_key}`}>
                            {row.map((item, key) => (
                            <Link href={`/projects/${item.id}`} key={`projects-item-${key}`} className={row.length == null ? "mil-portfolio-item mil-square-item mil-up mil-mb-30" : "mil-portfolio-item mil-long-item mil-up mil-mb-30"}>
                                {/* <h4 className="text-center">{item.title}</h4> */}
                               {/* <h5 className="text-center">{item.title}</h5>  */}
                                {/* <h5 className="text-center">{item.describion}</h5>  */}
                                {/* <h4 className="text-center title-text">{item.title}</h4> */}
{/* <h5 className="text-center description-text">{item.description}</h5> */}
                                {/* <h3 className="text-center">kanwar</h3> */}
                                <img src={item.image} alt={item.title} />

                                <div className="mil-project-descr">
                                    <h4 className="mil-upper mil-mb-20">{item.title}</h4>
                                    <h6 className="mil-upper mil-mb-20">{item.title}</h6>
                                    <div className="mil-divider-sm mil-mb-20">{item.title}</div>
                                    <p>{item.short}</p>
                                    {/* <img src={item.image} alt={item.title} /> */}
                                </div>
                            </Link>
                            ))}
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