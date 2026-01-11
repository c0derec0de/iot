import { Group, TextInput, Select, Paper } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export function FilterAndSearch() {
  return (
    <Paper p="md" radius="md" withBorder mb="xl">
      <Group gap="md" wrap="wrap">
        <TextInput
          placeholder="Поиск"
          leftSection={<IconSearch size={16} />}
          style={{ flex: 1, minWidth: '200px' }}
        />
        <Select
          placeholder="Все статусы"
          data={['Все статусы', 'Новые', 'На рассмотрении', 'Завершено']}
          style={{ minWidth: '180px' }}
        />
        <Select
          placeholder="Все приоритеты"
          data={['Все приоритеты', 'Высокий', 'Средний', 'Низкий']}
          style={{ minWidth: '180px' }}
        />
      </Group>
    </Paper>
  );
}

