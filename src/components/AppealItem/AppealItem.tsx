import { Paper, Group, Text, Badge, Button, Stack, Divider } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';
import { useState } from 'react';
import type { AppealData } from '../../types';
import { AppealDetailsModal } from '../AppealDetailsModal/AppealDetailsModal';

interface AppealItemProps {
  appeal: AppealData;
}

export function AppealItem({ appeal }: AppealItemProps) {
  const [modalOpened, setModalOpened] = useState(false);

  const getStatusBadge = () => {
    switch (appeal.status) {
      case 'new':
        return <Badge color="blue">Новое</Badge>;
      case 'in_progress':
        return <Badge color="orange">На рассмотрении</Badge>;
      case 'completed':
        return <Badge color="green">Завершено</Badge>;
      default:
        return null;
    }
  };

  const getPriorityBadge = () => {
    switch (appeal.priority) {
      case 'high':
        return <Badge color="red">Высокий</Badge>;
      case 'medium':
        return <Badge color="orange">Средний</Badge>;
      case 'low':
        return <Badge color="yellow">Низкий</Badge>;
      default:
        return null;
    }
  };

  const getActionButtons = () => {
    if (appeal.status === 'completed') {
      return null;
    }

    if (appeal.status === 'new') {
      return (
        <Group gap="sm">
          <Button variant="light" color="blue" size="sm">
            Взять в работу
          </Button>
          <Button variant="light" color="red" size="sm">
            Отклонить
          </Button>
        </Group>
      );
    }

    if (appeal.status === 'in_progress') {
      return (
        <Group gap="sm">
          <Button variant="light" color="blue" size="sm">
            Ответить
          </Button>
          <Button variant="light" color="red" size="sm">
            Отклонить
          </Button>
        </Group>
      );
    }

    return null;
  };

  return (
    <>
      <Paper
        p="md"
        radius="md"
        withBorder
        style={{ cursor: 'pointer' }}
        onClick={() => setModalOpened(true)}
      >
        <Stack gap="md">
          <Group justify="space-between" align="flex-start" wrap="wrap" gap="md">
            <div style={{ flex: 1, minWidth: '300px' }}>
              <Group gap="sm" mb="xs" wrap="wrap">
                {getStatusBadge()}
                {getPriorityBadge()}
                {appeal.isDangerousArea && (
                  <Badge color="dark">Опасный участок</Badge>
                )}
              </Group>
              <Text fw={600} size="md" mb="xs">
                {appeal.title}
              </Text>
              <Text size="sm" c="dimmed" mb="sm">
                {appeal.description}
              </Text>
              <Group gap="md" mt="xs" wrap="wrap">
                <Text size="xs" c="dimmed">
                  {appeal.author}
                </Text>
                <Text size="xs" c="dimmed">
                  {appeal.date}
                </Text>
                {appeal.photosCount > 0 && (
                  <Group gap={4}>
                    <IconPhoto size={14} />
                    <Text size="xs" c="dimmed">
                      {appeal.photosCount} фото
                    </Text>
                  </Group>
                )}
              </Group>
            </div>
            {getActionButtons() && (
              <div style={{ alignSelf: 'flex-start' }} onClick={(e) => e.stopPropagation()}>
                {getActionButtons()}
              </div>
            )}
          </Group>

          {appeal.status === 'completed' && appeal.answer && (
            <>
              <Divider />
              <div>
                <Text fw={600} size="sm" mb="xs">
                  Ответ:
                </Text>
                <Text size="sm" c="dimmed">
                  {appeal.answer}
                </Text>
              </div>
            </>
          )}
        </Stack>
      </Paper>
      <AppealDetailsModal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        appeal={appeal}
      />
    </>
  );
}

