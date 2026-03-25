import { Box, If, Stack, Typography } from '@/shared/common';

import type { InfoItemProps } from './InfoItemProps';

export function InfoItem({ className, icon, label, value }: InfoItemProps) {
  return (
    <Box className={className}>
      <Stack direction='row' align='center' className='gap-3'>
        <If condition={icon}>{icon}</If>

        <Box>
          <Typography variant='body3'>{label}</Typography>
          <Typography variant='body1' bold>
            {value}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
