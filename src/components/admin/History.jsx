import React from 'react';
import AdminSideBar from './widgets/AdminSideBar';
import BackgroundPage from "./background/BackgroundPage";
import Header from './background/Header';
import filterIcon from "../../assets/filter.svg"

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
        <div className="flex-1 p-6">
          <Header />
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div>

                <h2 className="text-xl font-semibold">Activity History</h2>
                <p className='text-[#7F7F7F]'>View historical data of actions taken within the app.</p>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Search by user, date"
                  className="border rounded-md px-3 py-2 focus:outline-none "
                />
                <button className="bg-[#199FB1]  text-white font-bold py-2 px-4 rounded">
                  Search
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <span className="material-icons">
                    <img src={filterIcon} alt="icon" />
                  </span>
                </button>
              </div>
            </div>

            {/* Table */}
            <table className="min-w-full border divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700"> <input type="checkbox" /></th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">User</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Action</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Date & Time</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">React</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {activityData.map((item, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                  >
                    <td className="px-4 py-2">
                      <input type="checkbox" />
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">{item.user}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{item.action}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{item.date}</td>
                    <td className="px-4 py-2 text-center">
                      <button className="text-gray-500 hover:text-gray-700">
                        <span className="material-icons">...</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Footer */}
            <div className="mt-4 flex justify-between items-center">
              <button className="text-red-500 hover:text-red-700">Delete</button>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 border rounded-md text-gray-500 hover:bg-gray-100">
                  Previous
                </button>
                <span>Page 1 of 5</span>
                <button className="px-3 py-1 border rounded-md text-gray-500 hover:bg-gray-100">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default History;