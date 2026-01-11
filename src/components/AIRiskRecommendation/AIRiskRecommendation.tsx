import { Alert, Title, List, Text } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import type { AIRiskRecommendationData } from '../../types';

interface AIRiskRecommendationProps {
  data: AIRiskRecommendationData;
}

export function AIRiskRecommendation({ data }: AIRiskRecommendationProps) {
  return (
    <Alert
      icon={<IconInfoCircle size={24} />}
      title={data.title}
      color="blue"
      variant="light"
      mb="xl"
      styles={{
        root: {
          backgroundColor: '#e7f5ff',
          borderColor: '#339af0',
          borderWidth: '2px',
          borderRadius: '8px',
        },
        title: {
          fontWeight: 600,
          marginBottom: '12px',
          fontSize: '18px',
        },
        body: {
          paddingTop: '8px',
        },
      }}
    >
      <List size="sm" spacing="xs" icon={<IconInfoCircle size={16} />}>
        {data.recommendations.map((recommendation, index) => (
          <List.Item key={index}>
            <Text size="sm">{recommendation}</Text>
          </List.Item>
        ))}
      </List>
    </Alert>
  );
}

