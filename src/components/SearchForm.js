import React, { useState } from "react";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const [resultInfo, setResultInfo] = useState([]);
  const searchField = (event) => {
    setSearch(event.target.value);
  };

  const searchQuery = async (e) => {
    e.preventDefault();
    const params = {
      action: "query",
      format: "json",
      list: "search",
      srsearch: search,
    };

    const url = new URL(
      "https://corsanywhere.herokuapp.com/https://en.wikipedia.org/w/api.php/"
    );

    for (let param in params) {
      url.searchParams.append(param, params[param]);
    }

    const searchData = await fetch(url);
    const data = await searchData.json();
    const results = data.query.search.map((option) => [
      option.title,
      option.pageid + "",
    ]);
    console.log(results);
    setResultInfo(results);
  };
  return (
    <div>
      <form onSubmit={searchQuery}>
        <input placeholder='search wikipedia' onChange={searchField}></input>
        <input
          type='image'
          src='https://assets.stickpng.com/images/59cfc4d2d3b1936210a5ddc7.png'
          value='search'
        ></input>
      </form>
      {resultInfo.map((result) => (
        <a
          class='page-link'
          href={"http://en.wikipedia.org/?curid=" + result[1]}
        >
          {result[0]}
        </a>
      ))}
    </div>
  );
};

export default SearchForm;

// http://en.wikipedia.org/?curid=18630637
