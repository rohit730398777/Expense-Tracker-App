import React, { useState} from 'react'
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';


function ExpenseItem(props) 
{
  // let [newTitle,setNewTitle]=useState('Hello');
  // let [title, setTitle]=useState(props.title);
  // function changeTitle(){
   
  //   // console.log(title);
  //    setTitle(newTitle);
  
  // }

  // function changeHandeler(event){
  //   setNewTitle(event.target.value);
  
  // }

  
   

    
  return (
    <Card className='expense-item'>
        {/* <div className='expense-date'>{props.date.toISOString()}</div> */}

 


        <ExpenseDate date={new Date(props.date)}></ExpenseDate>

        <div className='expense-item__description'>
            <h2>{props.title} </h2>
            <div className='expense-item__price'>${props.price}</div>

        </div>
             
             {/* <input type='text' value={newTitle} onChange={changeHandeler} ></input>
            <button onClick={changeTitle}>Change Title</button> */}

    </Card>
  )
}



export default ExpenseItem