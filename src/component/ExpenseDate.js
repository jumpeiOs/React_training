import "./ExpenseDate.css";

function ExpenseDate(props) {
  const year = props.date.toLocaleString("ja-JP", { year: "numeric" });
  const month = props.date.toLocaleString("ja-JP", { month: "long" });
  const day = props.date.toLocaleString("ja-JP", { day: "numeric" });
  const weekday = props.date.toLocaleString("ja-JP", { weekday: "long" });

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">
        {month}
        {day}
      </div>
      <div className="expense-date__weekday">{weekday}</div>
    </div>
  );
}

export default ExpenseDate;
