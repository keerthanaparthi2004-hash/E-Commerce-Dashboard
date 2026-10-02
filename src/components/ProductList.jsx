import ProductCard from "./ProductCard";
function ProductList({ products }) {
  if (products.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No products found in this category.</p>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
export default ProductList;