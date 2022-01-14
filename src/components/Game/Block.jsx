import React from 'react';
import './Block.css';

const Block = (props) => {

    return (
        <div className={props.value === 0 ? 'gameBlock emptyBlock' : 'gameBlock fillBlock'} onClick={() => props.clickHandler(props.value)}>
            {props.value}
        </div>
    );
}

export default Block;

