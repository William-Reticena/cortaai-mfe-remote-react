import { useNavigate } from 'react-router';
import { Card } from 'primereact/card';
import { Calendar, Clock, Scissors } from 'lucide-react';

import { Box, Divider, For, Stack } from '@/shared';
import { CardHeader } from './components/CardHeader/CardHeader';
import { Schedules } from './components/Schedules/Schedules';

export function BarbershopListing() {
  const navigate = useNavigate();

  return (
    <Box className='max-w-3xl mx-auto p-4'>
      <h1>Barbershop Listing</h1>

      <Stack className='gap-4'>
        <For each={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}>
          {(item) => (
            <Card className='w-full' key={item} onClick={() => navigate(`/barbershop/${item}`)} pt={{ content: { className: 'p-0!' } }}>
              <CardHeader icon={<Scissors />} />

              <Divider className='my-4' />

              <Stack direction='row' align='center'>
                <Schedules icon={<Clock size='16' color='oklch(66.6% 0.179 58.318)' />} className='flex-1' />

                <Schedules icon={<Calendar size='16' color='oklch(66.6% 0.179 58.318)' />} className='flex-1' />
              </Stack>
            </Card>
          )}
        </For>
      </Stack>
    </Box>
  );
}
