import { Container, Stack, Title } from '@mantine/core';
import { AppealsSummary } from '../../components/AppealsSummary/AppealsSummary';
import { FilterAndSearch } from '../../components/FilterAndSearch/FilterAndSearch';
import { AppealsList } from '../../components/AppealsList/AppealsList';
import { appealsSummaryData, mockAppeals } from '../../data/appealsData';

export function AppealsPage() {
  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        <Title order={1} fw={700} mb="md">
          Обращения
        </Title>
        <AppealsSummary summary={appealsSummaryData} />
        <FilterAndSearch />
        <AppealsList appeals={mockAppeals} />
      </Stack>
    </Container>
  );
}

