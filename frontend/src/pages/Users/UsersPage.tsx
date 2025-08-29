import React from 'react';
import DashboardLayout from '../../components/templates/DashboardLayout/DashboardLayout';
import PageHeader from '../../components/molecules/PageHeader/PageHeader';
import UserTable from '../../components/organisms/UserTable/UserTable';

const UsersPage: React.FC = () => {
  return (
    <DashboardLayout breadcrumb="Catálogo de usuarios">
      <PageHeader
        title="Usuarios"
        addLabel="Agregar usuario"
        onAdd={() => {}}
      />
      <UserTable />
    </DashboardLayout>
  );
};

export default UsersPage;
