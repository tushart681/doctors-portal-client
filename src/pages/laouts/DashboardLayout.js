import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Navber from '../shared/Navber';

const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navber />
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <Outlet />
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 text-base-content">
      <li><Link to={'/dashboard'}>My Appoinments</Link></li>
      {isAdmin && <>
        <li><Link to={'/dashboard/users'}>All Users</Link></li>
        <li><Link to={'/dashboard/addoctor'}>Add A Doctors</Link></li>
        <li><Link to={'/dashboard/managedoctors'}>Manage Doctors</Link></li>
      </>}
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;