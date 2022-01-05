import React  from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){


    // const [title, updateTitle] = useState(props.title);//state help to change and handle behaviour of components

    // function changeTitle (){
    //     updateTitle("Updated");
    //     console.log("changed")
    // }
    //passing predefined value

    // const expenseDate = new Date(2022 , 1 , 2);
    // const expenseTitle = "Car Insurace";
    // const expensPrice = 290.04;

    //basic javascript code to have less code
    
    // const month = props.date.toLocaleString('en-US',{month: 'long'});
    // const day = props.date.toLocaleString('en-US',{day: '2-digit'})
    // const year = props.date.getFullYear();

    return (
       <li> 
        <div className = "expense-item">
            {/* <div >
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div> */}
            <ExpenseDate date ={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button onClick={changeTitle}>Update Title</button> */}
        </div>
       </li> 
    )
}

export default ExpenseItem;