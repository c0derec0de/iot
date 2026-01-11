import { Container, Stack, Title } from '@mantine/core';
import { AITabs } from '../../components/AITabs/AITabs';
import { aiRiskRecommendation, mockPatrolPoints } from '../../data/aiAssistantData';

export function AIAssistantPage() {
  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        <Title order={1} fw={700} mb="md">
          AI помощник для инспектора
        </Title>
        <AITabs recommendation={aiRiskRecommendation} patrolPoints={mockPatrolPoints} />
      </Stack>
    </Container>
  );
}

