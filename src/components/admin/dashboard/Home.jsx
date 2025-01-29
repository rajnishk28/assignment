import React from "react";
import AdminSideBar from "../widgets/AdminSideBar";
import BackgroundPage from "../background/BackgroundPage";

const analyticsData = [
  { title: "Active Users", value: "5556", color: "blue", action: "View All Users" },
  { title: "Total Buyers", value: "3480", color: "green", action: "View All Buyers" },
  { title: "Total Sellers", value: "2924", color: "red", action: "View All Sellers" },
  { title: "Total Ads", value: "459", color: "yellow", action: "View All Ads" },
  { title: "Total Earning", value: "12,423,48.00", color: "orange", action: null },
];

const userManagementData = [
  {
    name: "Yeray Rosalos",
    email: "yerayrosales@gmail.com",
    phone: "+91-098765432",
    sold: 2,
    bought: 1,
    block: true,
    rating: 3,
  },
  {
    name: "Talah Cotton",
    email: "talahcotton2@gmail.com",
    phone: "+91-098765432",
    sold: 0,
    bought: 5,
    block: false,
    rating: 4,
  },
];

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#EAEAEB]">
      {/* Background */}
      <BackgroundPage />

      <div className="relative z-10 flex">
        <AdminSideBar />
        <div className="flex-1 p-6">
          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            {analyticsData.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md p-4 text-center border-t-4 border-${item.color}-500`}
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className={`text-3xl font-bold text-${item.color}-500`}>{item.value}</p>
                {item.action && (
                  <button className="mt-2 text-sm text-blue-500 hover:underline">
                    {item.action}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Company Growth Chart Placeholder */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Company Growth</h3>
            <div className="h-64 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-500">[Chart Placeholder]</span>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button className="px-4 py-2 rounded-md bg-gray-200">Month</button>
              <button className="px-4 py-2 rounded-md bg-gray-200">Year</button>
              <button className="px-4 py-2 rounded-md bg-gray-200">3 Year</button>
            </div>
          </div>

          {/* User Management Table */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">User Management</h3>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2">
                    <input type="checkbox" />
                  </th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">User Deal</th>
                  <th className="px-4 py-2 text-left">Block / Unblock</th>
                  <th className="px-4 py-2 text-left">Ratings</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {userManagementData.map((user, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? "bg-gray-50" : ""}`}>
                    <td className="px-4 py-2">
                      <input type="checkbox" />
                    </td>
                    <td className="px-4 py-2">
                      <div>{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                      <div className="text-sm text-gray-500">{user.phone}</div>
                    </td>
                    <td className="px-4 py-2">
                      <div>{user.sold} Sold</div>
                      <div>{user.bought} Bought</div>
                    </td>
                    <td className="px-4 py-2">
                      <button
                        className={`px-3 py-1 rounded-md ${
                          user.block ? "bg-red-500 text-white" : "bg-green-500 text-white"
                        }`}
                      >
                        {user.block ? "Block" : "Unblock"}
                      </button>
                    </td>
                    <td className="px-4 py-2">
                      {"⭐".repeat(user.rating)}
                      {"⭐".repeat(5 - user.rating)}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button className="text-blue-500 hover:text-blue-700">...</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
