import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import { useState } from "react";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const FilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    
  };

    const filteredExpenses = props.item.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear
    })

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={FilterChangeHandler}

        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
          key = {expense.id}
          // Always add a Key when mapping out an array of items in react
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default ExpenseList;
