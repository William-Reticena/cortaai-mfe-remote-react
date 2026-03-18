import { useNavigate } from 'react-router';
import { Card } from 'primereact/card';
import { Calendar, Clock, Scissors } from 'lucide-react';

import { Box, Divider, For, InfoItem, Stack } from '@/shared';
import { CardHeader } from '@/shared/components/CardHeader/CardHeader';

export function BarbershopListing() {
  const navigate = useNavigate();

  return (
    <Box className='max-w-3xl mx-auto p-4'>
      <h1>Barbershop Listing</h1>

      <Stack className='gap-4'>
        <For each={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} fallback={<p>No barbershops found.</p>}>
          {(item) => (
            <Card className='w-full cursor-pointer' key={item} onClick={() => navigate(`/barbershop/${item}`)} pt={{ content: { className: 'p-0!' } }}>
              <CardHeader icon={<Scissors />} />

              <Divider className='my-4' />

              <Stack direction='row' align='center'>
                <InfoItem className='flex-1' icon={<Clock size='16' color='oklch(66.6% 0.179 58.318)' />} />

                <InfoItem className='flex-1' icon={<Calendar size='16' color='oklch(66.6% 0.179 58.318)' />} />
              </Stack>
            </Card>
          )}
        </For>
      </Stack>
    </Box>
  );
}
