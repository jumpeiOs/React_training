import ExpenseItem from "./component/ExpenseItem";

function App() {
  const expense = [
    { date: new Date(), title: "Buy toilet paper", amount: 12.34 },
    { date: new Date(), title: "Buy new TV", amount: 222.34 },
    { date: new Date(), title: "Car Insurance", amount: 302.04 },
    { date: new Date(), title: "Buy a Building", amount: 34921 },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        date={expense[0].date}
        title={expense[0].title}
        amount={expense[0].amount}
      />
      <ExpenseItem
        date={expense[1].date}
        title={expense[1].title}
        amount={expense[1].amount}
      />
      <ExpenseItem
        date={expense[2].date}
        title={expense[2].title}
        amount={expense[2].amount}
      />
      <ExpenseItem
        date={expense[3].date}
        title={expense[3].title}
        amount={expense[3].amount}
      />
    </div>
  );
}

export default App;
