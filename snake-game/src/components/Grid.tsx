import React, {useEffect, useState} from 'react';
import Block from './Block.tsx';

enum Color {
    Yellow = "yellow",
    Cyan = "cyan",
    White = "white"
}

const Grid = () => {

    const snakeObject = {
        snake: [
            {x: 3, y:2},
            {x:3, y:3},
            {x:3, y:4}
        ],
        direction: "ArrowDown",
        speed: 1
    }
    const generateNewFood = () => {
        const x = Math.floor(Math.random()*24);
        const y = Math.floor(Math.random()*24);
        return findIndexFromCoordinates(x,y)
    }

    const findIndexFromCoordinates = (x,y) => {
        return (y*24) + x;
    }

    const numBoxes = 24 * 24;
    const [colors, setColors] = useState(Array(numBoxes).fill(''))
    const [foodPosition, setFoodPosition] = useState(generateNewFood())
    const [snake, setSnake] = useState(snakeObject);

    useEffect(()=>{
        const colorWithSnake = [...colors];
        snakeObject.snake.map((element,index)=>{
            colorWithSnake[findIndexFromCoordinates(element.x, element.y)] = Color.Yellow
        })
        colorWithSnake[foodPosition]= Color.Cyan
        setColors(colorWithSnake)
    },[snake,foodPosition]);

    const boxes = Array.from({ length: numBoxes }, (_, index) => (
        <Block key={index} blockColor={colors[index]}></Block>
      ));
    return (
        <div className='flex justify-center w-screen h-screen place-items-center border-white border-solid'>
            <div className='h-96 w-96 border-solid border-white border-2 grid grid-cols-24'>
                {boxes}
            </div>
        </div>
    )
}

export default Grid;