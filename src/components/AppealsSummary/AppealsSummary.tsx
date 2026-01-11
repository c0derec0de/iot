import { Grid } from '@mantine/core';
import { StatCard } from '../StatCard/StatCard';
import type { AppealSummaryData } from '../../types';

interface AppealsSummaryProps {
  summary: AppealSummaryData[];
}

export function AppealsSummary({ summary }: AppealsSummaryProps) {
  return (
    <Grid mb="xl">
      {summary.map((stat, index) => (
        <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
          <StatCard data={stat} />
        </Grid.Col>
      ))}
    </Grid>
  );
}

