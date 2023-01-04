import "./App.css";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const initialExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const addExpenseHandler = (expense) => {
    setExpenses((previousExpense) => {
      return [expense, ...previousExpense]; 
    });
    // updating the state with a function to ensure previous info is stored and then added,
    // sometimes react wont work like this, so to ensure no errors set it with a function 
  };
  return (
    <div>
      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      <ExpenseList item={expenses} />
    </div>
  );
}

export default App;
