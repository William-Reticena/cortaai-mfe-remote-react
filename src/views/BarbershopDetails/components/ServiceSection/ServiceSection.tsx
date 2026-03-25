import { Box, For, Stack, Typography } from '@/shared/common';

import { MaskUtils } from '@/utils/MaskUtils';
import type { ServiceSectionProps } from './ServiceSectionProps';

export function ServiceSection({ services }: ServiceSectionProps) {
  return (
    <Box className='mt-8'>
      <Typography variant='h3' className='mb-4'>
        Serviços
      </Typography>

      <Box className='border rounded-lg overflow-hidden border-gray-300'>
        <For each={services} fallback={<p>No services found.</p>}>
          {(item) => (
            <Stack key={item.id} direction='row' align='center' justify='between' className='gap-2 w-full px-4 py-2 border-b last:border-b-0 border-gray-300'>
              <Box>
                <Typography variant='body1' className='font-medium'>
                  {item.nmService}
                </Typography>
                <Typography variant='body2' className='text-gray-500'>
                  {item.nrDurationMinutes} min
                </Typography>
              </Box>
              <Typography variant='body1' className='text-(--primary) font-semibold'>
                {MaskUtils.formatToBRL(item.vlPrice)}
              </Typography>
            </Stack>
          )}
        </For>
      </Box>
    </Box>
  );
}
