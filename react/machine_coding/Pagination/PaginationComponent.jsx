import { useState } from "react";
import useFetch from "../../application/hooks/useFetch";
import "./PaginationComponent.css";

const PaginationComponent = () => {
  const [count, setCount] = useState(0);
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=200"
  );

  const NO_OF_ITEMS = 10;
  const totalItems = data.length;
  const no_of_pages = Math.ceil(totalItems / NO_OF_ITEMS); // 20

  let start = count * NO_OF_ITEMS;
  let end = start + NO_OF_ITEMS;

  const handleChange = (num) => {
    setCount(num);
  };

  const handleNext = () => {
    setCount((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div style={{ width: "100vw" }}>
      <h1 style={{ textAlign: "center" }}>Pagination</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {data?.slice(start, end)?.map((d) => (
          <Product
            key={d.id}
            src={d.thumbnail}
            alt={d.title}
            title={d.title}
            itemCount={d.id}
          />
        ))}
      </div>
      <div
        style={{
          display: "Flex",
          justifyContent: "center",
          margin: "20px",
          alignItems: "center",
        }}
      >
        {count !== 0 ? (
          <button
            style={{ cursor: "pointer", marginRight: "10px" }}
            onClick={handlePrev}
          >
            ⬅️ Prev
          </button>
        ) : (
          ""
        )}
        {[...Array(no_of_pages).keys()].map((num) => (
          <button
            style={{
              border: "1px solid black",
              margin: "2px",
              padding: "10px",
              cursor: "pointer",
            }}
            className={`${num === count ? "active" : ""}`}
            key={num}
            onClick={() => handleChange(num)}
          >
            {num}
          </button>
        ))}
        {end !== count ? (
          <button
            style={{ cursor: "pointer", marginLeft: "10px" }}
            onClick={handleNext}
          >
            Next ➡️
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const Product = ({ src, alt, title, itemCount }) => {
  return (
    <div>
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <img src={src} alt={alt} />
        <h3 style={{ textAlign: "center" }}>Title: {title}</h3>
        <h3>Item Number: {itemCount}</h3>
      </div>
    </div>
  );
};

export default PaginationComponent;
