import BreadCrumb from "~/components/BreadCrumb";
import Card from "~/components/Card";
import TableOfContents from "~/components/TableOfContents";

function BreadCrumbs() {
    return ( <>

        <div>
            <div >
                <h1 className="font-bold leading-tight text-4xl mt-0 mb-2">Breadcrumb</h1>
                <h3 className="font-normal leading-tight text-xl mt-0 pb-2 mb-2 border-b-2 border-slate-100">Show the location of the current page in a hierarchical structure using the React & Tailwind CSS breadcrumb components</h3>
                <main>
                    <section className="mb-4 pb-4 border-b-2 border-slate-100" >
                        <h2 className="font-medium leading-tight text-2xl mt-0 mb-2" id="default-breadcrumb">
                            <span className="text-gray-400"> # </span>
                            Default breadcrumb
                        </h2>
                        <div>
                            <Card>
                                <BreadCrumb/>
                            </Card>
                        </div>
                    </section>
                    
                </main>
            </div>
            <TableOfContents />
        </div>
    </> );
}

export default BreadCrumbs;