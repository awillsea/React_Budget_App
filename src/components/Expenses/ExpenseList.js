import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./ExpenseList.css";
import { useState } from "react";
import ExpenseConditional from "./ExpenseConditional";

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
        <ExpenseConditional item={filteredExpenses} />
      </Card>
    </div>
  );
};

export default ExpenseList;
