import { useEffect, useState } from "react";
import ShowAllToys from "./ShowAllToys";
import { Form } from "react-router-dom";


const AllToys = () => {
    useEffect(() => {
        document.title = "ToyBuzz | All Toys"
    }, [])

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://toy-buzz-server.vercel.app/product')
            .then(res => res.json())
            .then((data) => setProducts(data.slice(0, 20)))
    }, [])

    const seeAllToys = () => {
        fetch('https://toy-buzz-server.vercel.app/product')
            .then(res => res.json())
            .then((data) => setProducts(data))
    }

    const [search, setSearch] = useState('');

    return (
        <div>

            <div className=" mt-14 container mx-auto">
                <Form className="form-control">
                    <div className="input-group">
                        <input type="text"
                        onChange={(e)=>setSearch(e.target.value)} placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-warning">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </Form>
                <div className="overflow-x-auto mt-8">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Toy Picture</th>
                                <th>Seller Name</th>
                                <th>Toy Name</th>
                                <th>Sub-category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                products.filter((item)=>{
                                    return search.toLocaleLowerCase() === ''?item : item.toy_name.toLowerCase().includes(search)
                                }).map(product => <ShowAllToys key={products._id} product={product} />)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="text-center mt-10">
                <button onClick={() => seeAllToys()} className="btn btn-warning px-20">See All Toys</button>
            </div>
        </div>
    );
};

export default AllToys;