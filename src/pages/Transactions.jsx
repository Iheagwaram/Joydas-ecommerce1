import React, { useState } from 'react';

const Transactions = () => {
    const [filter, setFilter] = useState("All");

    const transactions = [
        { id: "0143TS", status: "Successful", date: "10/01/25" },
        { id: "0123TS", status: "Unsuccessful", date: "12/01/25" },
        { id: "0124TS", status: "Successful", date: "13/01/25" },
        { id: "0125TS", status: "Unsuccessful", date: "14/01/25" },
        { id: "0126TS", status: "Pending", date: "15/01/25" },
    ];

    // Filter transactions based on selected filter
    const filteredTransactions = filter === "All"
        ? transactions
        : transactions.filter(transaction => transaction.status === filter);

    return (
        <div className='p-6'>
           
            <div className='flex justify-between items-center mb-4'>
                <h2 className='text-lg font-semibold mr-5'>Transactions</h2>
                <select 
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="All">All Transactions</option>
                    <option value="Successful">Successful</option>
                    <option value="Unsuccessful">Unsuccessful</option>
                    <option value="Pending">Pending</option>
                </select>
            </div>

            {/* Transactions Table */}
            <div className='w-full max-w-4xl overflow-hidden rounded-lg shadow-lg'>
                <table className='w-full bg-white border border-gray-200 rounded-lg'>
                    <thead className='bg-gray-200 text-gray-700'>
                        <tr>
                            <th className='py-3 px-6 text-left'>Transaction No</th>
                            <th className='py-3 px-6 text-left'>Status</th>
                            <th className='py-3 px-6 text-left'>Date</th>
                        </tr>
                    </thead>
                    <tbody className='text-gray-700'>
                        {filteredTransactions.length > 0 ? (
                            filteredTransactions.map((transaction) => (
                                <tr key={transaction.id}>
                                    <td className='py-1 px-6'>{transaction.id}</td>
                                    <td className={`py-1 px-6 ${transaction.status === "Successful" ? "text-green-600" : transaction.status === "Unsuccessful" ? "text-red-600" : "text-amber-600"}`}>
                                        {transaction.status}
                                    </td>
                                    <td className='py-1 px-6'>{transaction.date}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="py-3 px-6 text-center text-gray-500">
                                    No transactions found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Transactions;
