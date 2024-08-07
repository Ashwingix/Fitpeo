import React from "react";

interface Order {
  customer: string;
  orderNo: string;
  amount: string;
  status: "Delivered" | "Pending" | "Cancelled";
}

const orders: Order[] = [
  {
    customer: "Wade Warren",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
  },
  {
    customer: "Jane Cooper",
    orderNo: "48965786",
    amount: "$365.02",
    status: "Delivered",
  },
  {
    customer: "Guy Hawkins",
    orderNo: "78958215",
    amount: "$45.88",
    status: "Cancelled",
  },
  {
    customer: "Kristin Watson",
    orderNo: "20965732",
    amount: "$65.00",
    status: "Pending",
  },
  {
    customer: "Cody Fisher",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
  },
  {
    customer: "Savannah Nguyen",
    orderNo: "78514588",
    amount: "$128.20",
    status: "Delivered",
  },
];

const statusClasses = {
  Delivered: "bg-green-500",
  Pending: "bg-yellow-500",
  Cancelled: "bg-red-500",
};

const RecentOrders: React.FC = () => {
  return (
    <div className="p-2 bg-gray-900 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-400">Customer</th>
              <th className="px-4 py-2 text-left text-gray-400">Order No.</th>
              <th className="px-4 py-2 text-left text-gray-400">Amount</th>
              <th className="px-4 py-2 text-left text-gray-400">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="px-4 py-2 text-white flex items-center">
                  <img
                    src={`https://i.pravatar.cc/150?img=${index + 1}`}
                    alt={order.customer}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  {order.customer}
                </td>
                <td className="px-4 py-2 text-white">{order.orderNo}</td>
                <td className="px-4 py-2 text-white">{order.amount}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 text-white text-sm font-semibold rounded-full ${
                      statusClasses[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
