import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { text: 'Dashboard', to: '/dashboard' },
  { text: 'History', to: '/history' },
  { text: 'User Management', to: '/user-management' },
  { text: 'Rating and Review', to: '/rating-review' },
  { text: 'Settings', to: '/settings' },
  { text: 'All Bookings', to: '/all-bookings' },
  { text: 'Push Notification', to: '/push-notifications' },
  { text: 'Transaction List', to: '/transactions' },
  { text: 'Google Analytics', to: '/analytics' },
  { text: 'Multi-Currency', to: '/multi-currency' },
  { text: 'Category', to: '/category' },
  { text: 'Live Chat History', to: '/chat-history' },
  { text: 'Package Plan', to: '/package-plans' },
  // { text: 'Referral History', to: '/referrals' },
  // { text: 'Google Map', to: '/google-map' },
];

const AdminSideBar = () => {
  const { pathname: currentUrl } = useLocation();

  return (
    <aside className="bg-white text-[#199FB1] w-64 p-2 rounded-lg h-screen overflow-y-auto ml-9 mt-3">
      <div className="mb-8 flex justify-center">
        <h2 className="text-2xl font-bold">Logo</h2>
      </div>
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.text}>
            <Link
              to={item.to}
              className={`block py-2 px-4 rounded hover:bg-[#199FB1] hover:text-white  transition duration-300 ${currentUrl === item.to ? 'bg-[#199FB1] text-white   font-bold' : ''
                }`}
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
