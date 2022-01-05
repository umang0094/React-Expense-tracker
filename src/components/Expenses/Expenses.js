import React, {useState} from 'react';

// import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');
  
    const filterChangeHandler = selectedYear => {
      console.log(selectedYear)
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense =>{
      return expense.date.getFullYear().toString() === filteredYear;
    })
  

    // let expensesContent = <p>No Record Available</p>

    // if(filteredExpenses.length > 0){
    //   expensesContent = filteredExpenses.map((expense) =>( // {} => error () => filtered result
    //     <ExpenseItem 
    //     key={expense.id}
    //     title={expense.title} 
    //     amount={expense.amount} 
    //     date={expense.date} 
    //     />
    //   ));
    // }
    // console.log(expenseContent)
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {/* {expensesContent} */}
      <ExpenseChart expenses ={filteredExpenses} />
      <ExpenseList items={filteredExpenses}/>
{/* 
      {props.items.map((expense)=><ExpenseItem 
      key={expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date}
      />)} */}

      {/* {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}


      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
  );
}

export default Expenses;