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

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={FilterChangeHandler}
        />
        {props.item.map((expense) => (
          <ExpenseItem
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
