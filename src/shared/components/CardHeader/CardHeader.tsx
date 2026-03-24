import { Box, If, Stack, Typography } from '@/shared/common';
import { StatusBadge } from '@/shared/components';

import type { CardHeaderProps } from './CardHeaderProps';
import { MapPin } from 'lucide-react';

export function CardHeader({ address, icon, openStatus, title }: CardHeaderProps) {
  return (
    <Stack direction='row' className='gap-4'>
      <If condition={icon}>
        <Box className='p-3 bg-orange-50 rounded-lg text-orange-400'> {icon} </Box>
      </If>

      <Stack direction='row' justify='between' className='flex-1 gap-4'>
        <Box>
          <Typography variant='h3'>{title}</Typography>

          <Stack direction='row' align='center' className='items-center gap-1 text-gray-500'>
            <MapPin className='w-4 h-4' />
            <Typography variant='body2'>{address}</Typography>
          </Stack>
        </Box>

        <Box>
          <StatusBadge isOpen={openStatus} />
        </Box>
      </Stack>
    </Stack>
  );
}
