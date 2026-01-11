import { Group, Text, Badge, Paper } from '@mantine/core';
import type { AreaRiskData } from '../../types';

interface DangerousAreaItemProps {
  area: AreaRiskData;
}

export function DangerousAreaItem({ area }: DangerousAreaItemProps) {
  const getRiskBadgeColor = () => {
    switch (area.riskLevel) {
      case 'high':
        return 'red';
      case 'medium':
        return 'orange';
      default:
        return 'yellow';
    }
  };

  const getRiskLabel = () => {
    switch (area.riskLevel) {
      case 'high':
        return 'Высокий';
      case 'medium':
        return 'Средний';
      default:
        return 'Низкий';
    }
  };

  return (
    <Paper p="md" radius="md" withBorder>
      <Group justify="space-between" align="flex-start">
        <div style={{ flex: 1 }}>
          <Group justify="space-between" mb="xs">
            <Text fw={600} size="sm">
              {area.name}
            </Text>
            <Badge color={getRiskBadgeColor()} variant="light">
              {getRiskLabel()}
            </Badge>
          </Group>
          <Text size="xs" c="dimmed" mb="xs">
            {area.coordinates}
          </Text>
          <Text size="sm" c="dimmed">
            Инцидентов: <Text span fw={600}>{area.incidents}</Text>
          </Text>
        </div>
      </Group>
    </Paper>
  );
}

