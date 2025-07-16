import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  
  const sidebarWidth = collapsed ? '5rem' : '16rem';

  return (
    <div className="flex min-h-screen w-screen">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      
      <main
        className="transition-all duration-300"
        style={{
          marginLeft: sidebarWidth,
          width: `calc(100% - ${sidebarWidth})`,
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
