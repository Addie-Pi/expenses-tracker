import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Cards from '../UI/Card'
// import { useState } from 'react';

function ExpenseItem(props){
    // props is immutable

    // React hook: useState
    // const [title, setTitle] = useState(props.title)

    // const clickHandker = () =>{
    //   // by calling setTitle(), the component function will executed again
    //   setTitle('Title has been changed')
    // }


    return (
      <Cards className="expense-item">
        <ExpenseDate date={props.date} />

        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">$ {props.amount}</div>
        </div>
        {/* dont call the function when you pass "clickHandler()", cause it will be invoke when the function been return and it will be too early  */}
        {/* <button onClick={clickHandker}>Change Title</button> */}
      </Cards>
    )
}

export default ExpenseItem;