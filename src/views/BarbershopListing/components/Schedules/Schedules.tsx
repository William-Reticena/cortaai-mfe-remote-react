import { Box, If, Stack, Typography } from '@/shared';

import type { SchedulesProps } from './SchedulesProps';

export function Schedules({ className, icon }: SchedulesProps) {
  return (
    <Box className={className}>
      <Stack direction='row' align='center' className='gap-2'>
        <If condition={icon}>{icon}</If>

        <Box>
          <Typography>FECHA ÀS</Typography>
          <Typography>17:00</Typography>
        </Box>
      </Stack>
    </Box>
  );
}
