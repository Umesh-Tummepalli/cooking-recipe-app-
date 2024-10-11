import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeInfo() {
  let { id } = useParams();
  let finalid = id;
  const [Data, setdata] = useState({});
  useEffect(() => {
    fetchData();
  }, [finalid]);

  async function fetchData() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${finalid}`
    );
    const result = await response.json(); 
    setdata(result.meals[0] || []);
  }
  return (
    <>
      <div className="p-3 mt-10">
        <h1 className="text-3xl text-yellow-500 ml-4">{Data.strMeal}</h1>
        {
          <div className="flex justify-between items-center ">
            <div className="w-1/3 h-[65vh] overflow-hidden rounded-2xl m-2  duration-150 ">
              <img
                className="w-full h-full object-cover object-center hover:scale-110 duration-500 ease-out "
                src={Data.strMealThumb}
                alt={Data.strMeal}
              />
            </div>
            <div className="w-2/3 p-3">
              <div className="ingredients flex gap-2 items-center mb-9 flex-wrap ">
                <p className="text-xl bold text-yellow-500">Ingredients : </p>
                {[...Array(20)].map((_, index) => {
                  return (
                    <p key={index}>
                      {Data[`strIngredient${index + 1}`]
                        ? Data[`strIngredient${index + 1}`] + ","
                        : ""}
                    </p>
                  );
                })}
              </div>
              <h1 className="text-2xl text-yellow-500">Instructions: </h1>
              <p className="text-lg">{Data.strInstructions}</p>
            </div>
          </div>
        }
      </div>
      <p className="text-center space-x-6">
      <a href={`${Data.strYoutube}`} target="_blank" className="ml-5 duration-500 hover:text-yellow-600 px-4 py-2 rounded-full text-black bg-yellow-500 hover:scale-105 hover:bg-black">Click Here to Watch  </a>
      <a href={`${Data.strSource}`} target="_blank" className="text-black hover:text-yellow-600 bg-yellow-500 rounded-full px-4 py-2  hover:scale-105 hover:bg-black">Click Here for detailed recipe </a>
      </p>
    </>
  );
}
export default RecipeInfo;
