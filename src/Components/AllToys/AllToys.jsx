import { useEffect, useState } from "react";
import ShowAllToys from "./ShowAllToys";


const AllToys = () => {
    useEffect(()=>{
        document.title = "ToyBuzz | All Toys"
    },[])

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://toy-buzz-server.vercel.app/product')
            .then(res => res.json())
            .then((data) => setProducts(data.slice(0, 20)))
    }, [])

    const seeAllToys = () =>{
        fetch('https://toy-buzz-server.vercel.app/product')
                .then(res => res.json())
                .then((data) => setProducts(data))
    }

    return (
        <div>
            
            <div className=" mt-14 container mx-auto">
                <div className="overflow-x-auto">
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
                                products.map(product => <ShowAllToys key={products._id} product={product} />)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="text-center mt-10">
                <button onClick={()=>seeAllToys()} className="btn btn-warning px-20">See All Toys</button>
            </div>
        </div>
    );
};

export default AllToys;