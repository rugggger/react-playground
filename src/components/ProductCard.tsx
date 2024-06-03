// ProductCard.tsx

import React, { memo } from "react";
export type Product = {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  shortDescription: string;
  quantity: number;
};

// Create context
export const ProductContext = React.createContext<Product>({
  id: 0,
  name: "",
  slug: "",
  thumbnail: "",
  shortDescription: "",
  quantity: 0
});

// A util function to use context with simpler syntax
export const useProductContext = () => React.useContext(ProductContext);

// Root component
const Root = ({
  children,
  product,
}: {
  children: JSX.Element | JSX.Element[];
  product: Product;
}) => {
  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
};


// Title
const Title = () => {
  const { name, slug } = useProductContext();
  return (
    <a href={"/product/" + slug} className="product-title">
      {name}
    </a>
  );
};

// Thumbnail
const Thumbnail = () => {
  const { name, thumbnail } = useProductContext();
  return (
    <div className="product-thumbnail">
      <img src={thumbnail} alt={name} />
    </div>
  );
};

// Short description
const ShortDescription = () => {
  const { shortDescription } = useProductContext();
  return <div className="product-short-description">{shortDescription}</div>;
};

// Quantity
const Quantity = () => {
  const { quantity } = useProductContext();
  return <div className="product-quantity">{quantity}</div>;
};

// Export all elements of the product card
export default {
  Root: memo(Root),
  Title: memo(Title),
  Thumbnail: memo(Thumbnail),
  ShortDescription: memo(ShortDescription),
  Quantity: memo(Quantity),
};

