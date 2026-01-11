import { Stack } from '@mantine/core';
import { AppealItem } from '../AppealItem/AppealItem';
import type { AppealData } from '../../types';

interface AppealsListProps {
  appeals: AppealData[];
}

export function AppealsList({ appeals }: AppealsListProps) {
  return (
    <Stack gap="md">
      {appeals.map((appeal) => (
        <AppealItem key={appeal.id} appeal={appeal} />
      ))}
    </Stack>
  );
}

