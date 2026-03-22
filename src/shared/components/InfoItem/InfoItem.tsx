import { Box, If, Stack, Typography } from '@/shared';

import type { InfoItemProps } from './InfoItemProps';

export function InfoItem({ className, icon, label, value }: InfoItemProps) {
  return (
    <Box className={className}>
      <Stack direction='row' align='center' className='gap-2'>
        <If condition={icon}>{icon}</If>

        <Box>
          <Typography>{label}</Typography>
          <Typography>{value}</Typography>
        </Box>
      </Stack>
    </Box>
  );
}
