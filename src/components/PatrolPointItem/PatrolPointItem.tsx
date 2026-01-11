import { Paper, Group, Text, Badge, Button, Stack, Box } from '@mantine/core';
import { IconMapPin, IconClock } from '@tabler/icons-react';
import type { PatrolPointData } from '../../types';

interface PatrolPointItemProps {
  point: PatrolPointData;
}

export function PatrolPointItem({ point }: PatrolPointItemProps) {
  const getRiskBadgeColor = () => {
    switch (point.riskLevel) {
      case 'high':
        return 'red';
      case 'medium':
        return 'orange';
      default:
        return 'yellow';
    }
  };

  const getRiskLabel = () => {
    switch (point.riskLevel) {
      case 'high':
        return 'Высокий';
      case 'medium':
        return 'Средний';
      default:
        return 'Низкий';
    }
  };

  const getBackgroundColor = () => {
    switch (point.riskLevel) {
      case 'high':
        return 'linear-gradient(135deg, #fff0f5 0%, #ffe5e5 50%, #ffd6d6 100%)';
      case 'medium':
        return 'linear-gradient(135deg, #fff8e5 0%, #ffedd5 50%, #ffe4c4 100%)';
      default:
        return 'linear-gradient(135deg, #fffef5 0%, #fff9e5 50%, #fff4cc 100%)';
    }
  };

  return (
    <Paper
      p="lg"
      radius="md"
      withBorder
      style={{
        background: getBackgroundColor(),
        position: 'relative',
      }}
    >
      <Stack gap="md">
        <Group justify="space-between" align="flex-start" wrap="wrap" gap="md">
          <Group gap="md" align="flex-start" style={{ flex: 1, minWidth: '250px' }}>
            <Box
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '20px',
                border: '2px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                flexShrink: 0,
              }}
            >
              {point.number}
            </Box>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <Group justify="space-between" mb="xs" align="flex-start" wrap="wrap" gap="sm">
                <Text fw={600} size="md" style={{ flex: 1, minWidth: '200px' }}>
                  {point.address}
                </Text>
                <Group gap="xs" wrap="nowrap">
                  <Text fw={700} size="xl" c={getRiskBadgeColor()} style={{ lineHeight: 1 }}>
                    {point.riskPercentage}%
                  </Text>
                  <Badge color={getRiskBadgeColor()} variant="filled" size="lg">
                    {getRiskLabel()}
                  </Badge>
                </Group>
              </Group>
              <Group gap="md" mb="xs" wrap="wrap">
                <Group gap={4}>
                  <IconClock size={16} style={{ color: '#868e96' }} />
                  <Text size="sm" c="dimmed">
                    {point.time}
                  </Text>
                </Group>
                <Text size="sm" c="dimmed">
                  {point.reason}
                </Text>
              </Group>
            </div>
          </Group>
        </Group>
        <Button
          leftSection={<IconMapPin size={18} />}
          variant="filled"
          color="blue"
          fullWidth
          size="md"
        >
          Начать патрулирование
        </Button>
      </Stack>
    </Paper>
  );
}

