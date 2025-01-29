import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { text: 'Dashboard', to: '/dashboard' },
  { text: 'User Management', to: '/user-management' },
  { text: 'Rating and Review', to: '/rating-review' },
  { text: 'Settings', to: '/settings' },
  { text: 'History', to: '/history' },
  { text: 'All Bookings', to: '/all-bookings' },
  { text: 'Push Notification', to: '/push-notifications' },
  { text: 'Transaction List', to: '/transactions' },
  { text: 'Google Analytics', to: '/analytics' },
  { text: 'Multi-Currency', to: '/multi-currency' },
  // { text: 'Category', to: '/category' },
  // { text: 'Live Chat History', to: '/chat-history' },
  // { text: 'Package Plan', to: '/package-plans' },
  // { text: 'Referral History', to: '/referrals' },
  // { text: 'Google Map', to: '/google-map' },
];

const AdminSideBar = () => {
  return (
    <aside className="bg-white text-[#199FB1] w-64 p-4 rounded-r-lg h-screen overflow-y-auto z-50">
      <div className="mb-8 flex justify-center">
        <h2 className="text-2xl font-bold">Logo</h2>
      </div>
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.text}> 
            <Link
              to={item.to}
              className="block py-2 px-4 rounded hover:bg-[#e6f2f5] transition duration-300" 
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AdminSideBar;