import React from 'react'

const Transactions = () => {
    return (
        <>
            <div className='p-6 justify-center items-center'>
                <div className='flex space-x-4 mb-4 font-semibold items-center gap-10'>
                    <div className='bg-red-500 text-white px-4 py-2 rounded-md shadow-md'>Unsuccessful</div>
                    <div className='bg-amber-400 text-white px-4 py-2 rounded-md shadow-md'>Pending</div>
                    <div className='bg-green-500 text-white px-4 py-2 rounded-md shadow-md'>Successful</div>
                </div>
                <div className='w-full max-w-4xl overflow-hidden rounded-lg shadow-lg'>
                    <table className='w-full bg-white border border-gray-200 rounded-lg'>
                        <thead className='bg-gray-200 text-gray-700 '>
                            <tr >
                                <th className='py-3 px-6 text-left'>Transaction No</th>
                                <th className='py-3 px-6 text-left'>Status</th>
                                <th className='py-3 px-6 text-left'>Date</th>
                            </tr>
                        </thead>
                        <tbody className='text-gray-700'>
                            <tr>
                                <td className='py-1 px-6'>0143TS</td>
                                <td className='py-1 px-6'>Successful</td>
                                <td className='py-1 px-6'>10/01/25</td>
                            </tr>
                            <tr>
                                <td className='py-1 px-6'>0123TS</td>
                                <td className='py-1 px-6'>Unsuccessful</td>
                                <td className='py-1 px-6'>12/01/25</td>
                            </tr>
                            <tr>
                                <td className='py-1 px-6'>0124TS</td>
                                <td className='py-1 px-6'>Successful</td>
                                <td className='py-1 px-6'>13/01/25</td>
                            </tr>
                            <tr>
                                <td className='py-1 px-6'>0125TS</td>
                                <td className='py-1 px-6'>Unsuccessful</td>
                                <td className='py-1 px-6'>14/01/25</td>
                            </tr>
                            <tr>
                                <td className='py-1 px-6'>0126TS</td>
                                <td className='py-1 px-6'>Pending</td>
                                <td className='py-1 px-6'>15/01/25</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Transactions
