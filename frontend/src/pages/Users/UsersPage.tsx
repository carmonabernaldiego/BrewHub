import React from 'react';
import DashboardLayout from '../../components/templates/DashboardLayout/DashboardLayout';
import UserTable from '../../components/organisms/UserTable/UserTable';

const UsersPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <UserTable />
      </div>
    </DashboardLayout>
  );
};

export default UsersPage;