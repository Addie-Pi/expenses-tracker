
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense"

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]

// JSX, Javascript XML
function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  

  const addExpenseHandler = (expenseData) => {
    console.log(expenseData)
    setExpenses((preState)=>{
      return [expenseData, ...preState];

    })

  }

  

  return (
    <div>
      {/* <p>I wanna QUIT!!!!!!!!!!!!!</p> */}

      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App;
