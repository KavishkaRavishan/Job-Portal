import React from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";

const Banner = ({ query, handleInputChange }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Unlock Your <span className="text-green-500">Future Job</span> Now
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt.
        Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor
        Lorem incididunt.
      </p>
      <form>
        <div className="relative flex justify-center md:flex-row flex-col md:gap-0 gap-4">
          <div className="flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-600 md:w-1/2 w-full">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="What are you looking for?"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
              value={query}
            />
            <FiSearch className="absolute mt-2.5 ml-2 text-gray-400 pointer-events-none" />
          </div>
          {/* <div className="flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-600 md:w-1/3 w-full">
            <input
              type="text"
              name="title"
              id="title2"
              placeholder="Location"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
            <FiMapPin className="absolute mt-2.5 ml-2 text-gray-400 pointer-events-none" />
          </div> */}
          <button
            type="submit"
            className="bg-green-500 py-2 px-8 text-white md:rounded-s-none rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Banner;
