import { Modal, Stack, Title, Text, Badge, Group, Grid, Button, Divider } from '@mantine/core';
import { IconMapPin, IconPhoto } from '@tabler/icons-react';
import type { AppealData } from '../../types';

interface AppealDetailsModalProps {
  opened: boolean;
  onClose: () => void;
  appeal: AppealData | null;
}

export function AppealDetailsModal({ opened, onClose, appeal }: AppealDetailsModalProps) {
  if (!appeal) return null;

  const getTypeLabel = () => {
    switch (appeal.type) {
      case 'infrastructure':
        return 'Инфраструктура';
      case 'traffic':
        return 'Движение';
      case 'safety':
        return 'Безопасность';
      default:
        return 'Другое';
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

  const getStatusBadge = () => {
    switch (appeal.status) {
      case 'new':
        return <Badge color="blue">Новое</Badge>;
      case 'in_progress':
        return <Badge color="gray" variant="light">На рассмотрении</Badge>;
      case 'completed':
        return <Badge color="green">Завершено</Badge>;
      default:
        return null;
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Group gap="md" wrap="wrap">
          <Title order={2} fw={700}>
            Детали обращения
          </Title>
          <Text size="sm" c="dimmed" fw={500}>
            ID: {appeal.id}
          </Text>
        </Group>
      }
      size="lg"
      centered
      styles={{
        title: {
          fontSize: '24px',
        },
        body: {
          padding: '24px',
        },
      }}
    >
      <Stack gap="xl">
        {/* Тип обращения */}
        <div>
          <Text size="sm" fw={600} mb="sm" c="dimmed">
            Тип обращения
          </Text>
          <Badge size="lg" variant="light" color="blue" style={{ fontSize: '14px' }}>
            {getTypeLabel()}
          </Badge>
        </div>

        {/* Местоположение */}
        <div>
          <Text size="sm" fw={600} mb="sm" c="dimmed">
            Местоположение
          </Text>
          <Group gap="xs" align="center">
            <IconMapPin size={18} style={{ color: '#868e96' }} />
            <Text size="md" fw={500}>{appeal.location || appeal.title}</Text>
          </Group>
        </div>

        {/* Описание */}
        <div>
          <Text size="sm" fw={600} mb="sm" c="dimmed">
            Описание
          </Text>
          <Text size="md" style={{ lineHeight: 1.6 }}>{appeal.description}</Text>
        </div>

        <Divider />

        {/* Метаданные в 2 колонки */}
        <Grid gutter="md">
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Stack gap="md">
              <div>
                <Text size="sm" fw={600} mb="sm" c="dimmed">
                  Отправитель
                </Text>
                <Text size="md" fw={500}>{appeal.author}</Text>
              </div>
              <div>
                <Text size="sm" fw={600} mb="sm" c="dimmed">
                  Приоритет
                </Text>
                {getPriorityBadge()}
              </div>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Stack gap="md">
              <div>
                <Text size="sm" fw={600} mb="sm" c="dimmed">
                  Дата/Время
                </Text>
                <Text size="md" fw={500}>{appeal.dateTime || appeal.date}</Text>
              </div>
              <div>
                <Text size="sm" fw={600} mb="sm" c="dimmed">
                  Статус
                </Text>
                {getStatusBadge()}
              </div>
            </Stack>
          </Grid.Col>
        </Grid>

        {/* Назначен */}
        {appeal.assignedTo && (
          <div>
            <Text size="sm" fw={600} mb="sm" c="dimmed">
              Назначен
            </Text>
            <Text size="md" fw={500}>{appeal.assignedTo}</Text>
          </div>
        )}

        {/* Прикрепленные фото */}
        {appeal.attachments && appeal.attachments.length > 0 && (
          <div>
            <Text size="sm" fw={600} mb="sm" c="dimmed">
              Прикрепленные фото
            </Text>
            <Group gap="sm" wrap="wrap">
              {appeal.attachments.map((attachment, index) => (
                <Button
                  key={index}
                  variant="light"
                  leftSection={<IconPhoto size={16} />}
                  size="sm"
                  style={{ border: '1px solid #dee2e6' }}
                >
                  {attachment}
                </Button>
              ))}
            </Group>
          </div>
        )}

        {/* Ответ (если есть) */}
        {appeal.answer && (
          <>
            <Divider />
            <div>
              <Text size="sm" fw={600} mb="sm" c="dimmed">
                Ответ
              </Text>
              <Text size="md" style={{ lineHeight: 1.6 }}>{appeal.answer}</Text>
            </div>
          </>
        )}

        {/* Footer с кнопками */}
        <Group justify="flex-end" mt="xl" pt="md" style={{ borderTop: '1px solid #e9ecef' }} gap="sm">
          <Button variant="light" onClick={onClose} size="md">
            Закрыть
          </Button>
          <Button variant="filled" color="dark" onClick={onClose} size="md">
            Отправить ответ
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}

