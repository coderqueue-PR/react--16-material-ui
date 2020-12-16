import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const Notes = () =>{

    const [num , setNum] = useState(0);

    const incNum = () =>{
        setNum(num+1);
    }
    const decNum = () =>{
        if(num>0){
        setNum(num-1);
        }else{
            alert('this is restricted')
            setNum(0);
        }
    }

    return (
        <>
            <div className = 'main_div'>
                <div className='center_div'>
                <h1> {num} </h1>
                <div className='btn_div'>
                <Tooltip title="Increase">
                <Button onClick={incNum} className='btn_green'>
                    < AddIcon />
                </Button>
                </Tooltip>
                <Tooltip title="Delete">
                <Button onClick={decNum} className='btn_red'>
                   < DeleteForeverSharpIcon />
                </Button>
                </Tooltip>
                </div>
                </div>
            </div>
        </>
    )
}

export default Notes;