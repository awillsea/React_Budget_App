import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";
const NewExpense = (props) => {
    const SaveNewDataHandler = (SubmittedExpenseData) =>{
        const expenseData = {
            ...SubmittedExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpenseHandler(expenseData)
} 
 return (
    <div className="new-expense">
        <NewExpenseForm onSaveNewExpenseDate={SaveNewDataHandler}/>
    </div>
  );
};

export default NewExpense;
