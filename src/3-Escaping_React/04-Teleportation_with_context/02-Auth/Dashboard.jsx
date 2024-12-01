export default function Dashboard() {
  const transactions = [
    { id: 1, date: "2023-05-01", description: "Deposit", amount: 1000.0 },
    { id: 2, date: "2023-05-02", description: "Withdrawal", amount: 100.0 },
    { id: 3, date: "2023-05-03", description: "Purchase", amount: 50.0 },
    { id: 4, date: "2023-05-04", description: "Deposit", amount: 200.75 },
  ];

  return (
    <section>
      <h1>Account Summary</h1>
      <div>
        <strong>Balance:</strong> $2,432.97
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>${transaction.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
