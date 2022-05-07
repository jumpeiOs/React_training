import "./ExpenseItem.css";

function ExpenseItem(props) {
  const year = props.date.toLocaleString("ja-JP", { year: "numeric" });
  const month = props.date.toLocaleString("ja-JP", { month: "long" });
  const day = props.date.toLocaleString("ja-JP", { day: "numeric" });
  const weekday = props.date.toLocaleString("ja-JP", { weekday: "long" });

  return (
    <div className="expense-item">
      <div>{year}</div>
      <div>{month}</div>
      <div>
        {day} {weekday}
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
