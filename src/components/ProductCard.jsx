function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-lg mb-3" />
      <h3 className="font-bold text-lg">{product.title}</h3>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="font-semibold mt-1">₹{product.price}</p>
      <p className={`mt-2 text-sm font-bold ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  );
}
export default ProductCard;