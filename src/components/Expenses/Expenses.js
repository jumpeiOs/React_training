import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpense.length === 0 && <p>There is no expenses.</p>}
        {filteredExpense.length > 0 &&
          filteredExpense.map((filteredExpense) => (
            <ExpenseItem
              key={filteredExpense.id}
              title={filteredExpense.title}
              date={filteredExpense.date}
              amount={filteredExpense.amount}
            />
          ))}
      </Card>
    </div>
  );
};

export default Expenses;
