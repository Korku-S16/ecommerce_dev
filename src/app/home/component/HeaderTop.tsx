"use client";
import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { FiHeart, FiUser, FiShoppingCart, FiHome } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { useSession } from "next-auth/react";

const HeaderTop = () => {
  const router = useRouter();

  const {status} = useSession()
  const isLoggedIn = status==='authenticated'
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post("/api/user/products/search-products", {
        query: searchQuery,
        page: 1,
      });
      console.log("Search results:", res.data);

      if (res.data.success) {
        setSearchResults(res.data.data.products);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="font-sans">
      <header className="bg-white shadow px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="text-2xl font-bold mx-auto sm:ml-12 sm:mr-0">Logo</div>

        <div className="w-full sm:w-auto flex-1 relative max-w-md">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="w-full h-10 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <BsSearch
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            size={18}
            onClick={handleSearch}
          />
        </div>

        <nav className="hidden md:flex space-x-10 text-sm">
          <Link
            href="/home"
            className="text-gray-700 hover:text-black font-medium"
          >
            Home
          </Link>
          <Link href="#" className="text-gray-500 hover:text-black font-medium">
            About
          </Link>
          <Link href="#" className="text-gray-500 hover:text-black font-medium">
            Contact Us
          </Link>
        </nav>

        <div className="hidden sm:flex items-center space-x-4 text-xl mr-6 sm:mr-16">
          <button
            title="Favourites"
            onClick={() => router.push("/productDetails")}
          >
            <FiHeart />
          </button>
          <Link href="/cart">
            <FiShoppingCart />
          </Link>
          <Link href={!isLoggedIn? '/auth/login':'/profile'}>
          <button
            className="text-gray-700 cursor-pointer hover:text-black"
            title={isLoggedIn?`profile`:`login`}
            
          >
           {isLoggedIn? <FiUser />:`Login`}
          </button>
          </Link>
        </div>
      </header>

      {loading && <div className="px-4 text-sm text-gray-500">Loading...</div>}
      {!loading && searchResults.length > 0 && (
        <div className="px-4 py-2">
          <ul className="bg-white shadow rounded-md">
            {searchResults.map((product) => (
              <li key={product._id} className="p-2 border-b last:border-none">
                {product.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white shadow-inner border-t border-gray-200 flex justify-around items-center py-2 z-50 text-xl">
        <button title="Home" onClick={() => router.push("/home")}>
          <FiHome />
        </button>
        <button
          title="Favorites"
          onClick={() => router.push("/productDetails")}
        >
          <FiHeart />
        </button>
        <button title="Cart" onClick={() => router.push("/cart")}>
          <FiShoppingCart />
        </button>
        <button title="Profile" onClick={() => router.push("/profile")}>
          <FiUser />
        </button>
      </div>
    </div>
  );
};

export default HeaderTop;
