import Expenses from "./component/Expenses/Expenses";

function App() {
  const expense = [
    { id: 0, date: new Date(), title: "Buy toilet paper", amount: 12.34 },
    { id: 1, date: new Date(), title: "Buy new TV", amount: 222.34 },
    { id: 2, date: new Date(), title: "Car Insurance", amount: 302.04 },
    { id: 3, date: new Date(), title: "Buy a Building", amount: 34921 },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expense} />
    </div>
  );
}

export default App;
