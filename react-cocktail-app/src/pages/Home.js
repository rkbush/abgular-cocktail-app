import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

export const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  const [search, setSearch] = useState("");
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCocktails(response.data.drinks);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCocktails = cocktails.filter((cocktail) => {
    return cocktail.strDrink.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div
      className="outer-div"
      style={{
        backgroundColor: "#ECB390",
        minHeight: "100vh",
      }}
    >
    <h1 className="title">Cocktail Party!</h1>
      <div className="div-search">
        <input
          className="input-search"
          type="text"
          name="drink"
          value={search}
          placeholder="  Search..."
          onChange={handleChange}
        />
      </div>
      <div className="home-page-card">
        {filteredCocktails.map((drink) => {
          const { strDrink, strCategory, strDrinkThumb, strInstructions } =
            drink;
          return (
            <CardGroup key={strDrink}>
              <Card>
                <CardImg
                  alt={strDrink}
                  src={strDrinkThumb}
                  top
                  width="80%"
                  height="50%"
                />
                <CardBody>
                  <CardTitle tag="h5">{strDrink}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {strCategory}
                  </CardSubtitle>
                  <CardText>{strInstructions}</CardText>
                </CardBody>
              </Card>
            </CardGroup>
          );
        })}
      </div>
    </div>
  );
};