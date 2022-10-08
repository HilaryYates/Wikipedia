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
    console.log(data);
    // console.log(data.query.search);
    const results = data.query.search.map((option) => {
      return [option.title, option.pageid];
    });
    console.log(results);
    setResults(results);
  };
  return (
    <div>
      <form onSubmit={searchQuery}>
        <input placeholder='search wikipedia' onChange={searchField}></input>
        <input type='image' value='search'></input>
      </form>
      {/* {results ? 
      results.map((page) => <a href=''>{page}</a>) : <div></div>} */}
    </div>
  );
};

export default SearchForm;
