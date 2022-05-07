import Expenses from "./component/Expenses";

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
      <Expenses
        expense={expense}
        date={expense[0].date}
        title={expense[0].title}
        amount={expense[0].amount}
      />
    </div>
  );
}

export default App;
