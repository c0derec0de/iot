import { Group, Button, Text, Avatar, Box, Menu } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconLogout, IconChevronDown } from '@tabler/icons-react';
import { authUtils } from '../../utils/auth';
import { notifications } from '@mantine/notifications';

export function MainNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = authUtils.getCurrentUser();

  const isActive = (path: string) => location.pathname === path;

  const getButtonStyles = (active: boolean) => {
    if (active) {
      return {
        backgroundColor: '#000',
        color: '#fff',
        fontWeight: 600,
      };
    }
    return {
      backgroundColor: 'transparent',
      color: '#000',
      fontWeight: 400,
    };
  };

  const handleLogout = () => {
    authUtils.logout();
    notifications.show({
      title: 'Выход выполнен',
      message: 'Вы успешно вышли из системы',
      color: 'blue',
    });
    navigate('/login');
  };

  const getInitials = (name?: string) => {
    if (!name) return 'УД';
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return parts[0][0] + parts[1][0];
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <Box style={{ borderBottom: '1px solid #e9ecef', backgroundColor: '#fff' }}>
      <Group justify="space-between" p="md" wrap="wrap">
        <Group gap="xl" wrap="wrap">
          <Text fw={700} size="lg" visibleFrom="sm">
            Система мониторинга безопасного дорожного движения
          </Text>
          <Group gap="xs">
            <Button
              variant="subtle"
              onClick={() => navigate('/analytics')}
              style={getButtonStyles(isActive('/analytics'))}
            >
              Аналитика
            </Button>
            <Button
              variant="subtle"
              onClick={() => navigate('/appeals')}
              style={getButtonStyles(isActive('/appeals'))}
            >
              Обращения
            </Button>
            <Button
              variant="subtle"
              onClick={() => navigate('/ai-assistant')}
              style={getButtonStyles(isActive('/ai-assistant'))}
            >
              AI помощник
            </Button>
          </Group>
        </Group>
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Group gap="sm" style={{ cursor: 'pointer' }}>
              <Avatar radius="xl" size="md" color="blue">
                {getInitials(user?.name)}
              </Avatar>
              <Text size="sm" fw={500} visibleFrom="sm">
                {user?.name || user?.email || 'Пользователь'}
              </Text>
              <IconChevronDown size={16} style={{ color: '#868e96' }} />
            </Group>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Профиль</Menu.Label>
            <Menu.Item
              leftSection={<IconLogout size={16} />}
              onClick={handleLogout}
              color="red"
            >
              Выйти
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Box>
  );
}

