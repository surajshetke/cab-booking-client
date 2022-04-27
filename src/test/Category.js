
import { useState } from "react";
import News from "./News";
import { useSearchParams } from "react-router-dom";

const Category = () => {
  const [category, setcategory] = useState("");

  const cateoryArr = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  const [api, setAPI] = useState(
    "https://newsapi.org/v2/top-headlines?category"
  );
  console.log(api);

  const handleAddParams = (e) => {
    const { name, value } = e.target;
    const loc = new URL(api);
    let newSearchParams = new URLSearchParams(loc.search);
    if (newSearchParams.has(name)) newSearchParams.set(name, value);
    else newSearchParams.append(name, value);
    setAPI(loc.origin + "?" + newSearchParams.toString());
    const cat = e.target.innerText;
    console.log(e.target.innerText);
    setcategory(cat);
    console.log(newSearchParams);
    console.log("new", api);
  };

  // const handleClick = (e) => {
  //   const cat = e.target.innerText;
  //   console.log(e.target.innerText);
  //   setcategory(cat);
  //   console.log(category);
  // };
  return (
    <>
      <section
        style={{
          margin: "30px",
          display: "flex",
          width: "100%",
          margin: "auto",
          height: "100%",
          top: "50%",
          position: "relative",
        }}
      >
        <div
          style={{
            margin: "20px",
            padding: 30,
            backgroundColor: "white",
            width: "15%",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0px 0px 26px 1px rgba(105,105,105,0.2)",
          }}
        >
          <h4>Sort By Country</h4>

          <hr></hr>
          <h4>Sort By Category</h4>
          {cateoryArr.map((cat) => (
            <button value={cat} onClick={handleAddParams}>
              {cat}
            </button>
          ))}
        </div>
        <div
          style={{
            margin: "20px",
            padding: 30,
            backgroundColor: "#F2F2F2",
            width: "92%",
            height: "auto",
            borderRadius: "10px",
          }}
        >
          <News category={category} />
        </div>
      </section>
    </>
  );
};

export default Category;