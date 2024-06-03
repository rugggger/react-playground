// ListProduct.tsx

import { useEffect, useState } from "react";
import ProductCard, { Product } from "./ProductCard";
const ListProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);

  //   export type Product = {
  //     id: number;
  //     name: string;
  //     slug: string;
  //     thumbnail: string;
  //     shortDescription: string;
  //     quantity: number;
  //   };
  // Get data from API
  const getProducts = () => {
    setProducts([
      {
        id: 4,
        name: "sdf",
        slug: "sdf",
        thumbnail: "sdfsdf",
        shortDescription: "dd",
        quantity: 4,
      },
      {
        id: 5,
        name: "name",
        slug: "slugf",
        thumbnail: "thumb",
        shortDescription: "short",
        quantity: 40,
      },
    ]);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard.Root key={product.id} product={product}>
            <Wrapped/>
        </ProductCard.Root>
      ))}
    </div>
  );
};
export default ListProduct;


const Wrapped = ()=>{
    return (
        <div>
            <p>wrapp</p>
            <ProductCard.Thumbnail />
            <div>
              <ProductCard.Title />
              <ProductCard.ShortDescription />
            </div>
            <p>end</p>
        </div>
    )
}