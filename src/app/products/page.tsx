import Link from "next/link";

export default function Products() {
  const productId = 100;
  return (
    <div>
      <h1>Products</h1>
  
        <h1><Link href={'/products/1'}> Product 1 </Link> </h1>
        <h1><Link href={'/products/2'}> Product 2 </Link> </h1>
        <h1><Link href={'/products/3'}> Product 3 </Link> </h1>
        <h1><Link href={`/products/${productId}`}> Product {productId} </Link> </h1>
    
    </div>
  );
}
