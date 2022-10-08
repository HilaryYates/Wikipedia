import React, { useState } from "react";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
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
    // document.body.textContent = JSON.stringify(data, null, 4);
    // const searchOptions
    // console.log(data.query.search);
    const results = data.query.search.map((option) => option.title);
    console.log(results);
    setResults(results);
  };
  return (
    <div>
      <form onSubmit={searchQuery}>
        <input placeholder='search wikipedia' onChange={searchField}></input>
        <input type='image' value='search'></input>
      </form>
      {results.map((page) => (
        <a href=''>{page}</a>
      ))}
    </div>
  );
};

export default SearchForm;
