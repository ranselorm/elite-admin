import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Vendors from "./pages/Vendors";
import Users from "./pages/Users";
import Approvals from "./pages/Approvals";
import Trips from "./pages/Trips";
import UserFeedback from "./pages/UserFeedback";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="relative flex w-full">
          <div className="fixed w-[250px] sidebar">
            <Sidebar />
          </div>
          <div
            className={`min-h-screen md:ml-[250px] px-[60px] bg-main-bg w-[1115px]`}
          >
            <div className="fixed md:static bg-main-bg navbar w-full">
              Navbar here
            </div>
            <div>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/vendors" element={<Vendors />} />
                <Route path="/users" element={<Users />} />
                <Route path="/approvals" element={<Approvals />} />
                <Route path="/trips" element={<Trips />} />
                <Route path="/user-feedback" element={<UserFeedback />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
