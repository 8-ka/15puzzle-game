import React, { useEffect, useState } from 'react';
import './../../App.css';
import './Game.css'
import Block from './Block.jsx';

const shuffle = (array) => {
    return [...array].sort(() => Math.random() - 0.5)
}

const Blocks = Array.from({ length: 16 }, (_, i) => i);

const Board = () => {
    let [randomBlocks, setRandomBlocks] = useState([]);
    useEffect(() => {
        setRandomBlocks(() => shuffle(Blocks))
    }, []);

    const moveBlock = (value) => {
        let zeroIndex = randomBlocks.indexOf(0);
        let valueIndex = randomBlocks.indexOf(value);

        if (valueIndex + 4 === zeroIndex || valueIndex - 4 === zeroIndex) {
            swap(valueIndex, zeroIndex);
        } else if (valueIndex + 1 === zeroIndex && zeroIndex % 4 !== 0) {
            swap(valueIndex, zeroIndex);
        } else if (valueIndex - 1 === zeroIndex && (zeroIndex + 1) % 4 !== 0) {
            swap(valueIndex, zeroIndex)
        }
    }

    const swap = (valueIndex, zeroIndex) => {
        let tempArray = [...randomBlocks]
        tempArray[zeroIndex] = randomBlocks[valueIndex];
        tempArray[valueIndex] = 0;
        setRandomBlocks(() => [...tempArray])
    }

    return (
        <div className='gameContainer'>
            {randomBlocks.map((e) => {
                return (
                    <div key={e}>
                        <Block value={e} clickHandler={moveBlock} />
                    </div>
                );
            })}
        </div>
    );
}

export default Board;