import { Card, Stack, Title, Text, Group, Badge, Divider } from '@mantine/core';

export function RiskSidebar() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Stack gap="md">
        <Title order={4} fw={600}>
          Легенда рисков
        </Title>
        <Divider />
        <Stack gap="sm">
          <Group gap="xs">
            <Badge color="red" size="lg" variant="filled" />
            <Text size="sm">Высокий риск</Text>
          </Group>
          <Group gap="xs">
            <Badge color="orange" size="lg" variant="filled" />
            <Text size="sm">Средний риск</Text>
          </Group>
          <Group gap="xs">
            <Badge color="yellow" size="lg" variant="filled" />
            <Text size="sm">Низкий риск</Text>
          </Group>
        </Stack>
        <Divider />
        <Text size="xs" c="dimmed">
          Тепловая карта отображает концентрацию инцидентов на различных участках дорожной сети. Красные зоны указывают на области с наибольшим количеством происшествий.
        </Text>
      </Stack>
    </Card>
  );
}

