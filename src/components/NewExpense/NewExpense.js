import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [newExpense, setNewExpense] = useState(
    <button type="submit">Add New Expense</button>
  );

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setNewExpense(<button type="submit">Add New Expense</button>);
  };

  const newExpenseHandler = () => {
    setNewExpense(<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />);
  };

  return (
    <div className="new-expense" onClick={newExpenseHandler}>
      {newExpense}
    </div>
  );
};

export default NewExpense;
