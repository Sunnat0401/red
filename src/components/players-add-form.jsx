import React from "react";

const PlayerAddForm = () => {
  return (
    <div className="px-4 py-6 bg-white rounded-md shadow-lg bg-gradient-to-t from-cyan-500 to-transparent bg-opacity-10 ">
      <div className="flex flex-col space-y-2">
        <div>
          <label htmlFor="name" className="text-2xl">
            New football player
          </label>
          <input
            type="text "
            className="block w-full py-2 px-4 rounded-md mt-1"
            placeholder="Muhammad Salah"
            name="name"
            required
          />
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div>
          <label htmlFor="country" className="text-2xl">
            Country
          </label>
          <input
            type="text "
            className="block w-full py-2 px-4 rounded-md mt-1"
            placeholder="Egypt"
            name="country"
            required
          />
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div>
          <label htmlFor="continent" className="text-2xl">
            Select player Continet
          </label>
          <select
            name="continent"
            className="block w-full py-2 px-4 rounded-md mt-1"
            required

          >
            <option  value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
          </select>
        </div>
        <button className="py-2 px-4  bg-gradient-to-t  from-blue-500 to-blue-950 text-white w-fit rounded-md ml-auto hover:scale-105 transition-all font-medium ">
          Add player
        </button>
      </div>
    </div>
  );
};

export default PlayerAddForm;
