import { useEffect, useState } from "react";

import("./SearchSuggestionComponent.css");

const SearchSuggestionComponent = () => {
  const [recipeData, setRecipeData] = useState(null);
  const [inputText, setInputText] = useState([]);
  const [focus, setFocus] = useState(false);
  const [cache, setCache] = useState({});

  const apiUrl = import.meta.env.VITE_API_URL;
  const fetchRecipe = async () => {
    try {
      if (cache[inputText]) {
        setRecipeData(cache[inputText]);
        return;
      }
      const response = await fetch(`${apiUrl}?q=${inputText}`);
      const data = await response.json();
      setRecipeData(data?.recipes);
      setCache((prev) => ({ ...prev, [inputText]: data.recipes }));
    } catch (err) {
      console.error("Error occured while fetching the API: ", err);
    }
  };

  const handleTextInput = (event) => {
    setInputText(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(fetchRecipe, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [inputText]);

  return (
    <div>
      <h1>Search your Recipe: </h1>
      <input
        type="text"
        value={inputText}
        onChange={handleTextInput}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {focus && (
        <ul className="search-container">
          {recipeData.map((data) => (
            <li className="search-result" key={data.id}>
              {data.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchSuggestionComponent;
