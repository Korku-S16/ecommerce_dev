"use client";
import React, { useEffect, useState } from "react";
import List from "./component/list";
import Link from "next/link";
import useApiHandler from "@/hooks/useApiHandler";
import axios from "axios";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  interface GoToPageProps {
    (pageNum: number): void;
  }

  const goToPage: GoToPageProps = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const category = searchParams.get("category");
  console.log(`search Paramas`, searchParams.get("category"));

  const [page, setPage] = useState(1);
  const apiCaller = useApiHandler();
  const [products, setProducts] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const handleProducts = async () => {
    // D:\client-projects\ecommerce_dev\src\app\api\user\products\fetch-products
    const queryURL = `/api/user/products/search-products?query=${query}&page=${page}`;
    const categoryURL = `/api/user/products/fetch-products-by-category`;
    let res = {};
    if (query) {
      res = await apiCaller(queryURL, axios.get);
    } else if (category) {
      res = await apiCaller(categoryURL, axios.post, { category });
    }

    console.log(res);
    if (res.statusCode == 200) {
      setProducts(res.data);
    }
  };

  useEffect(() => {
    handleProducts();
  }, []);
  useEffect(() => {
    async function handleSubcategories() {
      const url = `/api/user/products/fetch-subcategories?category=${category}`;
      const res = await apiCaller(url, axios.get);
      console.log(res);
      if (res.statusCode === 200) {
        setSubcategories(res.data);
      }
    }
    handleSubcategories();
  }, []);
  return (
    <>
      {products?.length === 0 ? (
        <div className="flex justify-center items-center min-h-screen">
          NO PRODUCTS FOUND
        </div>
      ) : (
        <div className="flex  flex-col min-h-screen px-4 py-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-6 flex-1 ml-4 md:ml-32">
            {subcategories?.length === 0 ? (
              <div></div>
            ) : (
              <aside className="w-full lg:w-64">
                <h2 className="text-lg font-semibold mb-2">Subcategories</h2>
                {subcategories?.length === 0 ? (
                  <div></div>
                ) : (
                  subcategories?.map((sub, idx) => (
                    <div className="flex flex-row items-start gap-1" key={idx}>
                      <input type="checkbox" />
                      <p>{sub.name || ""}</p>
                    </div>
                  ))
                )}
              </aside>
            )}

            <main className="flex-1 min-w-max justify-center items-center mr-0 md:mr-32">
              <List productList={products?.products} />

              <div className="flex justify-center mt-6 space-x-2 items-center w-full">
                {/* Previous button */}
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-2 py-1 text-gray-600 hover:text-black disabled:opacity-50"
                >
                  {"<"}
                </button>

                {/* Page numbers */}
                {products?.length === 0
                  ? ""
                  : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => goToPage(pageNum)}
                        className={`px-3 py-1 border rounded ${
                          currentPage === pageNum
                            ? "bg-black text-white"
                            : "hover:bg-gray-200"
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}

                {/* Next button */}
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-2 py-1 text-gray-600 hover:text-black disabled:opacity-50"
                >
                  {">"}
                </button>
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
