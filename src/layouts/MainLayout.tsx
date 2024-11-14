import React from "react";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <header className="w-full py-4 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl text-white font-bold">Order Book</h1>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="w-full py-2 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <p>
            &copy; {new Date().getFullYear()} Crypto Dashboard. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
