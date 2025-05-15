import React from 'react';

const Dashboard = () => {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Daily Executive Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example summary cards */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg">Today’s Meetings</h3>
          <p>No meetings scheduled.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg">Top Priorities</h3>
          <ul className="list-disc ml-5 text-sm mt-1">
            <li>Reply to investor email</li>
            <li>Schedule LinkedIn content</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;