import { Card, Stack, Title, Text, TextInput, PasswordInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
import { authUtils } from '../../utils/auth';

export function AuthForm() {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: 'admin@admin.ru',
      password: 'admin123',
    },
    validate: {
      email: (value) => {
        if (!value) {
          return 'Email обязателен';
        }
        if (!/^\S+@\S+$/.test(value)) {
          return 'Неверный формат email';
        }
        return null;
      },
      password: (value) => {
        if (!value) {
          return 'Пароль обязателен';
        }
        if (value.length < 6) {
          return 'Пароль должен содержать не менее 6 символов';
        }
        return null;
      },
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    // Попытка авторизации
    const success = authUtils.login(values.email, values.password);

    if (success) {
      notifications.show({
        title: 'Успешно',
        message: 'Вы успешно авторизованы',
        color: 'green',
      });
      // Перенаправление на страницу аналитики
      navigate('/analytics');
    } else {
      notifications.show({
        title: 'Ошибка',
        message: 'Неверный email или пароль',
        color: 'red',
      });
    }

    // В будущем здесь будет интеграция с бекендом:
    // try {
    //   const response = await fetch('/api/auth/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(values),
    //   });
    //   const data = await response.json();
    //   if (data.success) {
    //     localStorage.setItem('auth_token', data.token);
    //     navigate('/analytics');
    //   }
    // } catch (error) {
    //   // Обработка ошибки
    // }
  };

  return (
    <Card 
      shadow="lg" 
      padding="xl" 
      radius="md" 
      withBorder 
      style={{ 
        width: '100%', 
        maxWidth: '400px',
        backgroundColor: '#fff',
        margin: '0 auto',
      }}
    >
      <Stack gap="lg">
        <div>
          <Title order={2} fw={700} mb="xs" ta="center" c="dark">
            Авторизация
          </Title>
          <Text size="sm" c="dimmed" ta="center">
            Вход для сотрудников ГИБДД
          </Text>
        </div>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack gap="md">
            <TextInput
              label="Email"
              placeholder="Введите email"
              required
              size="md"
              styles={{
                input: {
                  backgroundColor: '#f8f9fa',
                },
              }}
              {...form.getInputProps('email')}
            />
            <PasswordInput
              label="Пароль"
              placeholder="Введите пароль"
              required
              size="md"
              styles={{
                input: {
                  backgroundColor: '#f8f9fa',
                },
              }}
              {...form.getInputProps('password')}
            />
            <Button 
              type="submit" 
              variant="filled" 
              color="dark" 
              fullWidth 
              size="md" 
              mt="md"
              style={{
                backgroundColor: '#000',
                fontWeight: 600,
              }}
            >
              Войти
            </Button>
          </Stack>
        </form>
      </Stack>
    </Card>
  );
}

