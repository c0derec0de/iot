import { Box, Paper, Text } from '@mantine/core';

export function HeatMapComponent() {
  return (
    <Paper p="md" radius="md" withBorder style={{ position: 'relative', overflow: 'hidden' }}>
      <Box
        style={{
          width: '100%',
          minHeight: '500px',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
          borderRadius: '8px',
          position: 'relative',
        }}
      >
        {/* Имитация тепловой карты с наложенными цветными блоками */}
        <Box
          style={{
            position: 'absolute',
            top: '20%',
            left: '30%',
            width: '120px',
            height: '100px',
            backgroundColor: 'rgba(255, 0, 0, 0.6)',
            borderRadius: '50%',
            filter: 'blur(25px)',
          }}
        />
        <Box
          style={{
            position: 'absolute',
            top: '50%',
            left: '60%',
            width: '100px',
            height: '90px',
            backgroundColor: 'rgba(255, 165, 0, 0.5)',
            borderRadius: '50%',
            filter: 'blur(25px)',
          }}
        />
        <Box
          style={{
            position: 'absolute',
            bottom: '25%',
            left: '15%',
            width: '80px',
            height: '70px',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            borderRadius: '50%',
            filter: 'blur(20px)',
          }}
        />
        <Box
          style={{
            position: 'absolute',
            top: '35%',
            right: '20%',
            width: '90px',
            height: '80px',
            backgroundColor: 'rgba(255, 165, 0, 0.4)',
            borderRadius: '50%',
            filter: 'blur(20px)',
          }}
        />
        <Box
          style={{
            position: 'absolute',
            bottom: '40%',
            right: '35%',
            width: '70px',
            height: '60px',
            backgroundColor: 'rgba(255, 255, 0, 0.3)',
            borderRadius: '50%',
            filter: 'blur(15px)',
          }}
        />
      </Box>
      <Text size="xs" c="dimmed" mt="xs" ta="center">
        Тепловая карта дорожных инцидентов
      </Text>
    </Paper>
  );
}

