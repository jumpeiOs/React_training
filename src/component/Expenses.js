import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.expense.map(() => {
        return (
          <ExpenseItem
            date={props.date}
            title={props.title}
            amount={props.amount}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
