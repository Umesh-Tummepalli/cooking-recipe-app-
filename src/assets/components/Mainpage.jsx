import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Mainpage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  let navigate=useNavigate();
  const getData = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const Data = await response.json();
      setData(Data.meals || []); // Ensure that data is always an array
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div>
      <div className="flex gap-5 p-10 justify-center w-full items-center">
        <input
          type="text"
          placeholder="Enter Dish Name"
          className="border-black border-[0.5px] rounded-md px-10 w-1/5 py-3 text-black"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className="bg-yellow-500 rounded-lg px-5 py-3"
          onClick={getData}
        >
          Search
        </button>
      </div>
      <h1 className="text-2xl text-yellow-500 font-bold pl-10">
        {
          search.length>0?
       ` ${data.length} results found for ${search}`
        : ""
        }
      </h1>
      <div className="flex flex-wrap justify-center">
        {data.length > 0
          ? data.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer hover:scale-110 duration-300 m-5 border-[0.5px] rounded-md border-black w-1/6 flex flex-col justify-center shadow-lg shadow-black"
              >
                <img
                  src={item.strMealThumb}
                  className="w-full rounded-md"
                  alt={item.strMeal}
                />
                <p className="font-medium text-2xl text-yellow-500 pl-3">
                  {item.strMeal}
                </p>
                <button className="bg-yellow-600 text-black hover:text-white duration-300  px-4 py-2 rounded mt-1 hover:bg-yellow-900"
                onClick={()=>{navigate(`/recipe/${item.idMeal}`)}}
                >
                 Click Here for Recipe
                </button>
              </div>
            ))
          : "No results found"}
      </div>
    </div>
  );
}

export default Mainpage;
