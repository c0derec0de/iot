import { Card, Group, Text, Title, ThemeIcon } from '@mantine/core';
import { IconAlertTriangle, IconTrendingUp, IconUsers, IconMapPin } from '@tabler/icons-react';
import type { StatData, AppealSummaryData } from '../../types';

interface StatCardProps {
  data: StatData | AppealSummaryData;
}

export function StatCard({ data }: StatCardProps) {
  const getChangeColor = () => {
    switch (data.changeType) {
      case 'positive':
        return 'green';
      case 'negative':
        return 'red';
      default:
        return 'gray';
    }
  };

  const getIcon = () => {
    switch (data.iconType) {
      case 'alert':
        return <IconAlertTriangle size={24} />;
      case 'users':
        return <IconUsers size={24} />;
      case 'trending':
        return <IconTrendingUp size={24} />;
      case 'mapPin':
        return <IconMapPin size={24} />;
      default:
        return null;
    }
  };

  const getIconColor = () => {
    switch (data.changeType) {
      case 'positive':
        return 'blue';
      case 'negative':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
      <Group justify="space-between" mb="xs" align="flex-start">
        <Text size="sm" c="dimmed" fw={500} style={{ flex: 1 }}>
          {data.title}
        </Text>
        {data.iconType && (
          <ThemeIcon variant="light" size="lg" radius="md" color={getIconColor()}>
            {getIcon()}
          </ThemeIcon>
        )}
      </Group>
      <Title order={2} fw={700} mb="xs">
        {data.value}
      </Title>
      <Text size="xs" c={getChangeColor()} fw={500}>
        {data.change} за последний месяц
      </Text>
    </Card>
  );
}

