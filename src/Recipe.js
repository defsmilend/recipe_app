import React from 'react';
import s from './recipes.module.scss';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={s.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={s.image} src={image} alt="" />
        </div>
    );
}

export default Recipe;