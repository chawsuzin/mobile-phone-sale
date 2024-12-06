"use client";
import SampleCategory from "./sampleCategory";

export default function Categories() {
  return (
    <>
      <div className="px-40">
        <h1 className="text-center text-3xl pb-4">Categories</h1>
        <div className="flex flex-column justify-between pb-4">
          <SampleCategory />
          <SampleCategory />
          <SampleCategory />
          <SampleCategory />
          <SampleCategory />
          <SampleCategory />
          <SampleCategory />
          <div>
            <div className="bg-gray-200 hover:bg-gray-300 active:bg-gray-300 rounded-full p-5 m-2">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </div>
            <h4 className="text-center">View All</h4>
          </div>
        </div>
      </div>
    </>
  );
}
