import { Box, If, Stack, StatusBadge, Typography } from '@/shared';

import type { CardHeaderProps } from './CardHeaderProps';
import { MapPin } from 'lucide-react';

export function CardHeader({ icon }: CardHeaderProps) {
  return (
    <Stack direction='row' className='gap-4'>
      <If condition={icon}>
        <Box className='p-3 bg-orange-50 rounded-lg text-orange-400'> {icon} </Box>
      </If>

      <Stack direction='row' justify='between' className='flex-1 gap-4'>
        <Box>
          <Typography variant='h3'>Barbershop Name</Typography>

          <Stack direction='row' align='center' className='items-center gap-1 text-gray-500'>
            <MapPin className='w-4 h-4' />
            <Typography variant='body2'>Downtown</Typography>
          </Stack>
        </Box>

        <Box>
          <StatusBadge />
        </Box>
      </Stack>
    </Stack>
  );
}
