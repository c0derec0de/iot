import { Grid } from '@mantine/core';
import { RiskTabs } from '../RiskTabs/RiskTabs';
import { HeatMapComponent } from '../HeatMapComponent/HeatMapComponent';
import { RiskSidebar } from '../RiskSidebar/RiskSidebar';

export function RiskMapSection() {
  return (
    <RiskTabs>
      <Grid gutter="md">
        <Grid.Col span={{ base: 12, md: 8 }}>
          <HeatMapComponent />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <RiskSidebar />
        </Grid.Col>
      </Grid>
    </RiskTabs>
  );
}

