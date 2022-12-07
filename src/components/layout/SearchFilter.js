import React, { useState } from "react";
import { useSelector } from "react-redux";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const quotes = useSelector((state) => state.cart.quotes);

  return (
    <div className="form-group">
      <div className="container">
        <input type="text"
          className="form-control mb-4"
          placeholder="Search items"
          onChange={(e) => setSearchTerm(e.target.value)} />
        {quotes.quotes.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.quote
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase()) ||
            val.author
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          ) {
            return val;
          }
        }).map((val) => {
          return (

            <div className="success mb-4" key={val.id}>
              <blockquote class="blockquote-reverse">
                <h1 className="lead ">{val.quote}</h1>
                <footer>Someone famous in <cite title="Source Title">{val.author}</cite></footer>
              </blockquote>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchFilter;