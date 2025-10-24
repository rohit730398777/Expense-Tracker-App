import React from 'react'
import './NewExpenses.css'
import ExpenseForm from './ExpenseForm';

function NewExpenses(props) {

const saveExpenseDataHandler=(enteredexpenseData)=>{

   const expenseData={
    ...enteredexpenseData,
    id: Math.random().toString(),
   }
// console.log(enteredexpenseData);
props.onaddExpense(expenseData);
console.log(expenseData);
}

  return (
    <div className='new-expense'>
    <ExpenseForm onsaveExpenseData={saveExpenseDataHandler}></ExpenseForm>

    </div>
  )
}

export default NewExpenses;