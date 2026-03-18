import { Calendar, Clock, Phone } from 'lucide-react';

import { Box, CardHeader, InfoItem, Stack } from '@/shared';

export function BarbershopDetails() {
  return (
    <Box>
      <CardHeader />

      <Stack direction='row' align='center' className='gap-4 my-4'>
        <InfoItem className='flex-1' icon={<Phone size={20} />} />
        <InfoItem className='flex-1' icon={<Clock size={20} />} />
        <InfoItem className='flex-1' icon={<Calendar size={20} />} />
      </Stack>
    </Box>
  );
}
