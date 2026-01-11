import { Container, Title, Box } from '@mantine/core';
import { AuthForm } from '../../components/AuthForm/AuthForm';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authUtils } from '../../utils/auth';

export function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Если пользователь уже авторизован, перенаправляем на аналитику
    if (authUtils.isAuthenticated()) {
      navigate('/analytics', { replace: true });
    }
  }, [navigate]);

  return (
    <Box
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #90caf9 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Container size="sm" style={{ width: '100%', maxWidth: '500px' }}>
        <Title order={1} fw={700} mb="xl" ta="center" c="dark" style={{ marginBottom: '48px' }}>
          Система мониторинга безопасного дорожного движения
        </Title>
        <AuthForm />
      </Container>
    </Box>
  );
}

