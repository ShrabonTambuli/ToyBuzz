import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import CategoryProduct from "../CategoryProduct/CategoryProduct";


const Category = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then((data) => setProducts(data.slice(0, 2)))
    }, [])

    return (
        <div className="text-center py-6">
            <Tabs>
                <TabList>
                    <Tab className='btn btn-outline btn-warning mx-4'>Science Kit</Tab>
                    <Tab className='btn btn-outline btn-warning mx-4'>Medical Kit</Tab>
                    <Tab className='btn btn-outline btn-warning mx-4'>Math Kit</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
                        {
                            products.map(products => <CategoryProduct key={products._id} products={products} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
                        {
                            products.map(products => <CategoryProduct key={products._id} products={products} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
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