import React from 'react';
import { Drinks } from '../../contexts/DrinkContexts';
import styles from './styles.module.scss';
import { Button, Link } from "@chakra-ui/react";

type drinkProps= {
    drink: Drinks;
}

export default function Selection({drink}: drinkProps) {
    return(
        <div className={styles.container}>
            <Link href={`/CardDrink/${drink.idDrink}`}>
            <img className={styles.icon} src={drink.strDrinkThumb.toString()}/>
            </Link>
            <h1>{drink.strDrink}</h1>
            <h2> {drink.strInstructionsIT} </h2>
        </div>
    );
}