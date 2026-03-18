import { Box, If, Stack, Typography } from '@/shared';

import type { InfoItemProps } from './InfoItemProps';

export function InfoItem({ className, icon }: InfoItemProps) {
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
