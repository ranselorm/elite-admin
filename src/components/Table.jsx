import React from "react";

const salesPeople = [
  {
    name: "Peter Doe",
    transactionId: 450012700342,
    amount: "1,000,000",
    date: "12/01/2024",
    status: "Completed",
  },
  {
    name: "John Smith",
    transactionId: 290048101204,
    amount: "1,000,000",
    date: "12/01/2024",
    status: "Canceled",
  },
  // Additional salespeople data...
];

const SimpleTable = () => {
  return (
    <div className="container mx-auto mt-6 rounded">
      <div className="flex justify-between px-4 mb-2">
        <h3>Latest Transactions</h3>
        <div>Search</div>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="text-sm">
            <th className="py-2 px-4 border-b text-left">Name</th>
            <th className="py-2 px-4 border-b text-left">Transaction ID</th>
            <th className="py-2 px-4 border-b text-left">Amount ($)</th>
            <th className="py-2 px-4 border-b text-left">Date</th>
            <th className="py-2 px-4 border-b text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {salesPeople.map((item) => (
            <tr key={item.name}>
              <td className="py-2 px-4 border-b text-left">{item.name}</td>
              <td className="py-2 px-4 border-b text-left">
                {item.transactionId}
              </td>
              <td className="py-2 px-4 border-b text-left">{item.amount}</td>
              <td className="py-2 px-4 border-b text-left">{item.date}</td>
              <td className="py-2 px-4 border-b text-left">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleTable;
