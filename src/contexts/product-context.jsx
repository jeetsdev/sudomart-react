import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext(null);
export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
    const [productData, setProductData] = useState();
    useEffect(() => {
        (async () => {
            try {
                let res = await axios.get("/api/products")
                setProductData(res.data.products)
            } catch (error) {
                console.log(error.message)
            }
        })()
        // console.log(productData);
    }, [])
    return <ProductContext.Provider value={{productData}}>
        {children}
    </ProductContext.Provider>
}


