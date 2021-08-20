import React, { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";
import { api } from "../../services/api";
import { Drinks } from "../../contexts/DrinkContexts";
import { GetStaticProps } from "next";
import Selection from '../Selection';
import axios from 'axios';

import styles from './styles.module.scss';

export default function Header() {

  const [cocktail, setCocktail] = useState('');
  const [drinks, setDrinks] = useState<Drinks[]>([]);

  useEffect(() =>{
    getData();
  }, []);

  function getData(){
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=` )
    .then((response) => {
      setDrinks(response.data.drinks);
      console.log(response.data.drinks)
    });
  }


  function renderDrink(ev: React.ChangeEvent<HTMLInputElement>){
    setCocktail(ev.target.value)
    getData();
  }
  const [search, setSearch] = useState("");
  console.log(search);

  return (
      <>
    <div className={styles.headerContainer}>
      <header>
        <p>O Cocktail que você quiser, está aqui!</p>
      </header>
      </div>

      <div className={styles.input}>
        <Input
          placeholder="Escolha de Drinks"
          value={cocktail}
          onChange={(ev) => renderDrink(ev)}
        />
    </div>
    <div>
      {drinks.map((drink) => (
        <Selection drink={drink}/>
      ))}
    </div>
    </>
  );
}
