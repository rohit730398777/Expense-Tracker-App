import React from 'react'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css";
import Card from '../UI/Card';

const Expenses=(props)=> {
  return (
    <Card className='expenses'>
        {
          props.item.map((expense)=>(
            <ExpenseItem

              key={expense.id}
              date={expense.date}
              title={expense.title}
              price={expense.amount}
            />
          ))
          
          
          
          
          
          
          
          
          
          
          /* <ExpenseItem

  date={props.item[0].date}
  title={props.item[0].title}
  price={props.item[0].amount}

    />

<ExpenseItem

   date={props.item[1].date}
  title={props.item[1].title}
  price={props.item[1].amount}

    />

    <ExpenseItem

 date={props.item[2].date}
  title={props.item[2].title}
  price={props.item[2].amount}

    /> */}

    </Card>
  )
}

export default Expenses