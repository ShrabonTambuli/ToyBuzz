import { useEffect, useState } from "react";
import { TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import CategoryProduct from "../CategoryProduct/CategoryProduct";


const Category = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://toy-buzz-server.vercel.app/product')
            .then(res => res.json())
            .then((data) => setProducts(data.slice(0, 2)))
    }, [])


    return (
        <div className="text-center py-8">
            <Tabs>
                <TabList>
                    <button className='btn btn-warning mx-4'>Science Kit</button>
                    <button className='btn btn-warning mx-4'>Medical Kit</button>
                    <button className='btn btn-warning mx-4'>Math Kit</button>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center">
                        {
                            products.map(products => <CategoryProduct key={products._id} products={products} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center">
                        {
                            products.map(products => <CategoryProduct key={products._id} products={products} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center">
                        {
                            products.map(products => <CategoryProduct key={products._id} products={products} />)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;