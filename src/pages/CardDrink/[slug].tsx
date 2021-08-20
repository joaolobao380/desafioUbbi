import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { Drinks } from '../../contexts/DrinkContexts';
import styles from './cardDrinks.module.scss';
import axios from 'axios';
import {useRouter} from 'next/router';

type drinkProps= {
    drinks: Drinks;
}

interface IParams extends ParsedUrlQuery{slug:string}

export function CardDrink(){
    const router = useRouter();
    return(
        <div className={styles.CardDrinks}>
            {router.query.slug}
            {/* {drinks.strDrink} */}
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    // console.log('foi')
    // const {slug} = ctx.params
    // const {data}= await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
    // console.log('alguma coisa', drinks)

    return{props: {}}
} 

export const getStaticPaths: GetStaticPaths = async () => {
    // const {data} = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    // console.log(data)
    // const paths = data.drinks.map(drink => {
    //     return {
    //         params: {
    //             slug: data.strDrink
    //         }
    //     }
    // })
    return {
      paths:[],
      fallback: "blocking",
    };
  };

  export default CardDrink