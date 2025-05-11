"use client";
import React, { useState } from "react";
import List from "./component/list";
import Link from "next/link";

const page = () => {
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

  return (
    <div className="flex flex-col min-h-screen px-4 py-4 md:px-8">
      <div className="mb-4 text-sm text-gray-600 ml-4 md:ml-32">
        <Link
          href="/home"
          className="hover:underline hover:text-black font-medium text-base"
        >
          Home
        </Link>{" "}
        <span className="mx-1">{">"}</span>
        <span className="text-base font-medium text-black">
          Mobiles & Tablets
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 ml-4 md:ml-32">
        <aside className="w-full lg:w-64">
          <h2 className="text-lg font-semibold mb-2">Subcategories</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <input type="checkbox" /> Apple
            </li>
            <li>
              <input type="checkbox" /> Samsung
            </li>
            <li>
              <input type="checkbox" /> Xiaomi
            </li>
            <li>
              <input type="checkbox" /> OPPO
            </li>
            <li>
              <input type="checkbox" /> Realme
            </li>
            <li>
              <input type="checkbox" /> Motorola
            </li>
            <li>
              <input type="checkbox" /> Nokia
            </li>
          </ul>
        </aside>

        <main className="flex-1 justify-center items-center mr-0 md:mr-32">
          <List productList={[]} />

          <div className="flex justify-center mt-6 space-x-2 items-center w-full">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-2 py-1 text-gray-600 hover:text-black disabled:opacity-50"
            >
              {"<"}
            </button>

            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((pageNum) => (
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

            <button
              onClick={() => goToPage(10)}
              className={`px-3 py-1 border rounded ${
                currentPage === 10 ? "bg-black text-white" : "hover:bg-gray-200"
              }`}
            >
              10
            </button>

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
  );
};

export default page;
