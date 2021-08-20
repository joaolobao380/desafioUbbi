import { createContext, useState, ReactNode, useContext } from "react";

export type Drinks = {
    strDrink: string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strInstructionsDE: string;
    strInstructionsIT: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strImageAttribution: string;
    strImageSource: string;
    strDrinkThumb: URL;
    idDrink: number;
}

type DrinksContextData = {
    drinksList: Drinks[];
    currentDrinksIndex: number;
}


export const DrinksContext = createContext({} as DrinksContextData);


export const Drinks = () => {
    return useContext(DrinksContext);
}