function Header({ selectedCategory, setSelectedCategory }) {
  const categories = ["All", "Electronics", "Clothing", "Books"];
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">ShopEasy - By Keerthana</h1>
      <div className="flex gap-2">
        {categories.map(cat => (
          <button key={cat} onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
            {cat}
          </button>
        ))}
      </div>
    </header>
  );
}
export default Header;