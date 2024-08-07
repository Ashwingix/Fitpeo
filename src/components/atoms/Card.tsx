import React from 'react';

const stats = [
  {
    id: 1,
    title: 'Total Orders',
    value: 75,
    change: '3%',
    changeType: 'increase',
    icon: (
      <svg
        className="w-6 h-6 text-blue-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 5a3 3 0 013-3h10a3 3 0 013 3v2a1 1 0 11-2 0V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-2a1 1 0 112 0v2a3 3 0 01-3 3H5a3 3 0 01-3-3V5z" />
        <path d="M9 12a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1zM8 7a1 1 0 000 2h8a1 1 0 100-2H8z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Total Delivered',
    value: 70,
    change: '3%',
    changeType: 'decrease',
    icon: (
      <svg
        className="w-6 h-6 text-green-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 5a3 3 0 013-3h10a3 3 0 013 3v2a1 1 0 11-2 0V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-2a1 1 0 112 0v2a3 3 0 01-3 3H5a3 3 0 01-3-3V5z" />
        <path d="M9 12a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1zM8 7a1 1 0 000 2h8a1 1 0 100-2H8z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Total Cancelled',
    value: 5,
    change: '3%',
    changeType: 'increase',
    icon: (
      <svg
        className="w-6 h-6 text-red-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 5a3 3 0 013-3h10a3 3 0 013 3v2a1 1 0 11-2 0V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-2a1 1 0 112 0v2a3 3 0 01-3 3H5a3 3 0 01-3-3V5z" />
        <path d="M9 12a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1zM8 7a1 1 0 000 2h8a1 1 0 100-2H8z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Total Revenue',
    value: '$12k',
    change: '3%',
    changeType: 'decrease',
    icon: (
      <svg
        className="w-6 h-6 text-pink-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 5a3 3 0 013-3h10a3 3 0 013 3v2a1 1 0 11-2 0V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-2a1 1 0 112 0v2a3 3 0 01-3 3H5a3 3 0 01-3-3V5z" />
        <path d="M9 12a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1zM8 7a1 1 0 000 2h8a1 1 0 100-2H8z" />
      </svg>
    ),
  },
];

const Cards: React.FC = () => {
  return (
    <div className="h-full flex items-center lg:justify-around w-full">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 p-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center bg-gray-900 text-white p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">{stat.icon}</div>
            <h4 className="text-sm font-medium mb-2">{stat.title}</h4>
            <div className="text-2xl font-bold mb-2">{stat.value}</div>
            <div className={`text-sm ${stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
              {stat.changeType === 'increase' ? '▲' : '▼'} {stat.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
