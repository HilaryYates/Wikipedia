import React, { useState } from "react";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const [pageTitle, setPageTitles] = useState([]);
  const [pageId, setPageId] = useState([]);
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
    console.log(data.query.search);
    const resultTitles = data.query.search.map((option) => option.title);
    console.log(resultTitles);
    setPageTitles(resultTitles);
    const pageIds = data.query.search.map((option) => option.pageid);
    console.log(pageIds);
    setPageId(pageIds);
  };
  return (
    <div>
      <form onSubmit={searchQuery}>
        <input placeholder='search wikipedia' onChange={searchField}></input>
        <input type='image' value='search'></input>
      </form>
      {/* {pageTitle ? 
      results.map((page) => <a href=''>{page}</a>) : <div></div>} */}
    </div>
  );
};

export default SearchForm;
