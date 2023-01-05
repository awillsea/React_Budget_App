import { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    //enter... (the first variable), think of it as a variable holding the title,amount,date,etc... for each update. so always holding the "current" value
    const TitleEventHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const AmountEventHandler = event => {
        setEnteredAmount(event.target.value);
    }
const DateEventHandler = event => {
    setEnteredDate(event.target.value);
}

const SubmitHandler = (event) => {
    event.preventDefault();
    // ^^ prevent default in this case prevents the web browser from automatically reloading once the submit button is clicked.

    const NewExpenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate)
    };
    props.onSaveNewExpenseDate(NewExpenseData);
    //
    //^^ created a prop in the parent component, this case its newExpense.js . that prop is referencing a function in that component.
    // so i order to save the info from the child to the parent. we are calling the prop here which in this case is a function
    // that function is taking in a the NewExpenseData variable from above as a parameter.
    // then back in NewExpense once the function is called with this param it is taking all the info from this object
    // and copying it to a new variable which we can use there 
    //
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
}


  return (
    
    <form onSubmit={SubmitHandler}>
<div className="new-expense__controls">
  <div className="new-expense__control">
    <label>Title</label>
    <input type='text' value={enteredTitle} onChange={TitleEventHandler} />
  </div>
  <div className="new-expense__control">
    <label>Amount</label>
    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={AmountEventHandler}/>
    </div>
  <div className="new-expense__control">
    <label>Date</label>
    <input type='date' value={enteredDate} min="2019-01-01" max="2023-12-31" onChange={DateEventHandler}/>
  </div>
</div>
<div className="new-expense__actions">
  <button type="submit" >Save New Expense</button>
  <button type="button" onClick={props.onCancel} >Cancel</button>
</div>
</form>
    );
};

export default NewExpenseForm;
