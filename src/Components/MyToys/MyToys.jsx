import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import UserToy from "../UserToy/UserToy";


const MyToys = () => {
    useEffect(()=>{
        document.title = "ToyBuzz | My Toys"
    },[])
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    // const [loadToy, setLoadToy] = useState(toys);

    const url = `https://toy-buzz-server.vercel.app/my-products?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url])

    return (
        <div>
            <div className="overflow-x-auto container mx-auto mt-10">
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
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy =><UserToy key = {toy._id} setToys = {setToys} toy={toy}></UserToy>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;