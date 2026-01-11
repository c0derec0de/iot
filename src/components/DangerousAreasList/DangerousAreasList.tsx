import { Stack, Title, Text } from '@mantine/core';
import { DangerousAreaItem } from '../DangerousAreaItem/DangerousAreaItem';
import type { AreaRiskData } from '../../types';

interface DangerousAreasListProps {
  areas: AreaRiskData[];
}

export function DangerousAreasList({ areas }: DangerousAreasListProps) {
  return (
    <Stack gap="md">
      <div>
        <Title order={3} mb="xs" fw={600}>
          Самые опасные участки
        </Title>
        <Text size="sm" c="dimmed" mb="md">
          Топ-5 участков с наибольшим количеством инцидентов
        </Text>
      </div>
      <Stack gap="sm">
        {areas.map((area) => (
          <DangerousAreaItem key={area.id} area={area} />
        ))}
      </Stack>
    </Stack>
  );
}

