import React from "react";
import Sidebar from "../../organisms/Sidebar/Sidebar";
import Topbar from "../../organisms/Topbar/Topbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  breadcrumb?: string;
  title?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, breadcrumb, title }) => {
  return (
    <div className="min-h-screen bg-[#F7EFE5]">
      <Sidebar />
      <div className="ml-60">
        <Topbar breadcrumb={breadcrumb} title={title} />
        <main className="mx-auto max-w-6xl px-4 py-5">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
