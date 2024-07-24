import React, {useEffect, useState} from 'react';
import Block from './Block.tsx';

enum Color {
    Yellow = "yellow",
    Cyan = "cyan",
    White = "white"
}

enum Directions {
    ArrowUp = "ArrowUp",
    ArrowDown = "ArrowDown",
    ArrowLeft = "ArrowLeft",
    ArrowRight = "ArrowRight"
}

enum GameStatus {
    Stopped = 'Stopped',
    Running = 'Running'
}

const Grid = () => {

    const snakeObject = {
        snake: [
            {x: 3, y:2},
            {x:3, y:3},
            {x:3, y:4}
        ],
        direction: Directions.ArrowDown,
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

    const CheckValidMovement = () => {
        snake.snake.some((element)=>{
            if(element.x > 23 || element.x<0 || element.y >23 || element.y <0){
                return false;
            }
        })
        return true;
    }
    
    const moveSnake = () => {
        const newSnake = snake;
        if(gameStatus == GameStatus.Running){
        if(newSnake.direction == Directions.ArrowDown){
            newSnake.snake.map((element, index) => {
                newSnake.snake[index].y += 1
            })
        }
        if(newSnake.direction == Directions.ArrowUp){
            newSnake.snake.map((element, index) => {
                newSnake.snake[index].y -= 1
            })
        }
        if(newSnake.direction == Directions.ArrowLeft){
            newSnake.snake.map((element, index)=>{
                newSnake.snake[index].x -= 1;
            })
        }
        if(newSnake.direction == Directions.ArrowRight){
            newSnake.snake.map((element, index)=>{
                newSnake.snake[index].x += 1;
            })
        }
        console.log(snake);
        console.log(newSnake);
        setSnake(newSnake);
    }
        if(!CheckValidMovement()){
            setGameStatus(GameStatus.Stopped)
        }
    }


    const numBoxes = 24 * 24;
    const [colors, setColors] = useState(Array(numBoxes).fill(''))
    const [foodPosition, setFoodPosition] = useState(generateNewFood())
    const [snake, setSnake] = useState(snakeObject);
    const [gameStatus, setGameStatus] = useState(GameStatus.Running)
    const [gameScore, setGameScore] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            moveSnake();
          console.log('Interval triggered');
          console.log("Sending run status")
        const colorWithSnake = [...colors];
        snake.snake.map((element,index)=>{
            colorWithSnake[findIndexFromCoordinates(element.x, element.y)] = Color.Yellow
        })
        colorWithSnake[foodPosition]= Color.Cyan
        setColors(colorWithSnake)
        }, 2000/snake.speed);
    
        return () => clearInterval(interval); // Cleanup interval on component unmount
      }, []);

    const boxes = Array.from({ length: numBoxes }, (_, index) => (
        <Block key={index} blockColor={colors[index]}></Block>
      ));
    return (
        <div className='h-screen w-screen' onKeyDown={(e) => console.log(e)}>
        <div className='flex flex-col'>
            <div className='h-20 items-center text-xl'>
                Score : {gameScore}
            </div>
        <div className='flex justify-center w-screen h-screen place-items-center border-white border-solid'>
            <div className='h-96 w-96 border-solid border-white border-2 grid grid-cols-24'>
                {boxes}
            </div>
        </div>
        </div>
        </div>
    )
}

export default Grid;