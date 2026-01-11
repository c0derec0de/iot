import { AppShell } from '@mantine/core';
import { MainNavigation } from '../MainNavigation/MainNavigation';
import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <AppShell header={{ height: 70 }} padding="md">
      <AppShell.Header>
        <MainNavigation />
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

