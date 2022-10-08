import React, { useState } from "react";

const SearchForm = () => {
  const [search, setSearch] = useState(0);
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
    console.log(data.query.search[0]);
  };
  return (
    <div>
      <form onSubmit={searchQuery}>
        <input placeholder='search wikipedia' onChange={searchField}></input>
        <input type='image' value='search'></input>
      </form>
    </div>
  );
};

export default SearchForm;
