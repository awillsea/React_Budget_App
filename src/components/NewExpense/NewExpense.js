import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
    const [displayValue, setDisplayValue] = useState(false);
    const flipShowFormDisplay = () =>{


  setDisplayValue(!displayValue);
  console.log(displayValue);

}

    const SaveNewDataHandler = (SubmittedExpenseData) =>{
        const expenseData = {
            ...SubmittedExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpenseHandler(expenseData)
} 
 return (
    <div className="new-expense">
 {!displayValue &&  <button onClick={flipShowFormDisplay}>Add New Expense</button>}
        {displayValue && <NewExpenseForm onSaveNewExpenseDate={SaveNewDataHandler} onCancel={flipShowFormDisplay}/>}
    </div>
  );
};

export default NewExpense;
