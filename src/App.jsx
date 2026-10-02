import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import productsData from "./data/products";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? productsData 
    : productsData.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <main className="max-w-7xl mx-auto p-6 flex-1 w-full">
        <ProductList products={filteredProducts} />
      </main>
      <Footer />
    </div>
  );
}
export default App;