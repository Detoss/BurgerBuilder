import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient';

const Burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient Key={igKey + i} type={igKey} />;
        });
    });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
           {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
            <h1></h1>
        </div>

    );

};

export default Burger;