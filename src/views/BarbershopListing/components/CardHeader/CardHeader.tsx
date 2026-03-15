import { Box, StatusBadge } from '@/shared';

import type { CardHeaderProps } from './CardHeaderProps';

export function CardHeader({ icon }: CardHeaderProps) {
  return (
    <Box className='flex items-center gap-4 p-4'>
      {icon && <Box className='p-3 bg-orange-50 rounded-lg text-orange-400'> {icon} </Box>}

      <Box className='flex flex-1 justify-between gap-4'>
        <Box>
          <h3 className='mt-0'>Barbershop Name</h3>

          <Box as='span'>Downtown</Box>
        </Box>

        <Box>
          <StatusBadge />
        </Box>
      </Box>
    </Box>
  );
}
