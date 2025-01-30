"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

const MenuPage = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [cart, setCart] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("All");

  // Fetch menu from API
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("/api/menu");
        if (!response.ok) throw new Error("Failed to fetch menu");
        const data = await response.json();
        setMenu(data);
      } catch (err) {
        setError("Failed to load menu.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  // Load cart from local storage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  // Update local storage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to cart
  const addToCart = (item: MenuItem) => {
    setCart([...cart, item]);
  };

  // Remove from cart
  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Get unique categories for filtering
  const categories = ["All", ...Array.from(new Set(menu.map((item) => item.category)))];

  // Filtered menu items
  const filteredMenu =
    filter === "All" ? menu : menu.filter((item) => item.category === filter);

  // Loading and error states
  if (loading)
    return (
      <p className="text-center text-gray-600 text-lg font-medium">
        Loading menu...
      </p>
    );
  if (error)
    return (
      <p className="text-center text-red-500 text-lg font-semibold">{error}</p>
    );

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <h1 className="text-center text-5xl font-extrabold mb-10 text-gray-900">
        Our Menu
      </h1>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-6 py-3 text-lg font-semibold rounded-lg ${
              filter === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            } transition duration-300`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {filteredMenu.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={240}
              className="w-full h-60 object-cover rounded-lg"
              onError={(e) =>
                (e.currentTarget.src = "/fallback-image.jpg") // Fallback image
              }
            />
            <h2 className="text-2xl font-semibold mt-5 text-gray-800">
              {item.name}
            </h2>
            <p className="text-gray-500 mt-2 text-lg">Category: {item.category}</p>
            <p className="text-3xl font-bold text-blue-600 mt-3">
              Rs {item.price}
            </p>
            <button
              className="mt-5 w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="mt-12 p-6 bg-gray-100 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Shopping Cart</h2>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg mb-4 shadow"
            >
              <div>
                <h3 className="text-xl text-blue-600 font-semibold">
                  {item.name}
                </h3>
                <p className="text-lg text-blue-600 font-bold">
                  Rs {item.price}
                </p>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
