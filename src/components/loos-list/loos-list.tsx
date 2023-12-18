"use client";
import { Loo, useGetLoosQuery } from "@/queries/generated";
import { useState } from "react";
import { Loader } from "../loader/loader";
import { LooItem } from "../loo-item/loo-item";

export const LoosList = () => {
  const [item, setItem] = useState<Loo>();
  const [search, setSearch] = useState<string | undefined>();
  const { data, isLoading, isSuccess } = useGetLoosQuery({
    filters: { text: search },
  });

  const handleItemSelect = (selectedItem: Loo) => {
    setItem(selectedItem);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  if (isLoading && search === undefined) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <input
        value={search}
        placeholder="search"
        className="block w-3/6 mx-4 px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
        onChange={handleSearch}
      />

      <div className="flex flex-row w-full justify-between">
        <div className="mt-10 max-h-screen overflow-auto">
          {data?.loos.loos.map((v) => (
            <div key={v.id} className="p-4 max-w-sm">
              <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-white dark:text-white text-lg font-medium">
                    {v.name}
                  </h2>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <button
                    onClick={() => handleItemSelect(v)}
                    className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {item && <LooItem item={item} />}
      </div>
    </>
  );
};
