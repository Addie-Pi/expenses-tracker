import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Cards from '../UI/Card';
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react';
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart';


function Expenses(props){

    const [filterYear, setFilterYear] = useState('2020');

    const filterchangeHandler = (selectedYear) => {
      setFilterYear(selectedYear);
    }


    const filterExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filterYear;
    })

    

    return (
      <div>
        <Cards className="expenses">
          <ExpensesFilter
            selected={filterYear}
            onChangeFilter={filterchangeHandler}
          />
          <ExpensesChart expenses={filterExpenses} />
          <ExpensesList items={filterExpenses} />

          {/*
          <ExpenseItem
            date={props.items[1].date}
            title={props.items[1].title}
            amount={props.items[1].amount}
          /> */}
        </Cards>
      </div>
    )
}

export default Expenses;