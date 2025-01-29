import React from 'react';
import AdminSideBar from './widgets/AdminSideBar';
import BackgroundPage from "./background/BackgroundPage";

const History = () => {
    const activityData = [
        { user: 'Yeray Rosalos', action: 'Log in', date: 'July 5, 2023 12:20 pm' },
        { user: 'Alan Robert', action: 'Sent Product', date: 'July 5, 2023 12:21 pm' },
        { user: 'Yeray Rosalos', action: 'Selling Product', date: 'July 5, 2023 12:21 pm' },
        { user: 'Alan Robert', action: 'Commented', date: 'July 5, 2023 12:21 pm' },
        { user: 'Yeray Rosalos', action: 'Bought Product', date: 'July 5, 2023 12:21 pm' },
        { user: 'Alan Robert', action: 'Log out', date: 'July 5, 2023 12:21 pm' },
        { user: 'Yeray Rosalos', action: 'Delete Product', date: 'July 5, 2023 12:21 pm' },
        { user: 'Alan Robert', action: 'Share Product', date: 'July 5, 2023 12:21 pm' },
    ];

    return (
        <div className="relative min-h-screen bg-[#EAEAEB]">
            {/* Background */}
            <BackgroundPage />

         
            <div className="relative z-10 flex">
                <AdminSideBar />
                <div className="flex-1 overflow-y-auto p-6">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold">Activity History</h2>
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="Search by user, action, activity type"
                                    className="border rounded-md px-3 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Search
                                </button>
                            </div>
                        </div>

                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">
                                        <input type="checkbox" />
                                    </th>
                                    <th className="px-4 py-2 text-left">User</th>
                                    <th className="px-4 py-2 text-left">Action</th>
                                    <th className="px-4 py-2 text-left">Date & Time</th>
                                    <th className="px-4 py-2"></th> 
                                </tr>
                            </thead>
                            <tbody>
                                {activityData.map((item, index) => (
                                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                                        <td className="px-4 py-2">
                                            <input type="checkbox" />
                                        </td>
                                        <td className="px-4 py-2">{item.user}</td>
                                        <td className="px-4 py-2">{item.action}</td>
                                        <td className="px-4 py-2">{item.date}</td>
                                        <td className="px-4 py-2 text-center">
                                            <button className="text-blue-500 hover:text-blue-700">...</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="mt-4 flex justify-between items-center">
                            <div>
                                Showing <span>1</span> to <span>8</span> of <span>57</span> results
                            </div>
                            <div>
                                <button className="mr-2 px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100">Previous</button>
                                <button className="px-3 py-1 rounded-md bg-blue-500 hover:bg-blue-700 text-white">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default History;