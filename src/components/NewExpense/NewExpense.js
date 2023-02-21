
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props){

    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
      setIsEditing(false)
    }

    return (
      <div className="new-expense">
        {isEditing ? (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
          />
        ) : (
          <button onClick={startEditingHandler}>Add New Expense</button>
        )}
      </div>
    )

}

export default NewExpense;