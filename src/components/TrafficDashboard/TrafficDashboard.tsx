import { Container, Stack } from '@mantine/core';
import { SummaryStats } from '../SummaryStats/SummaryStats';
import { RiskMapSection } from '../RiskMapSection/RiskMapSection';
import { DangerousAreasList } from '../DangerousAreasList/DangerousAreasList';
import { mockStatsData, mockDangerousAreas } from '../../data/mockData';

export function TrafficDashboard() {
  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        <SummaryStats stats={mockStatsData} />
        <RiskMapSection />
        <DangerousAreasList areas={mockDangerousAreas} />
      </Stack>
    </Container>
  );
}

