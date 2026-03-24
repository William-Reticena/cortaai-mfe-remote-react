import { useNavigate } from 'react-router';
import { Card } from 'primereact/card';
import { Calendar, Clock, Scissors } from 'lucide-react';

import { Box, Divider, For, Stack } from '@/shared/common';
import { InfoItem } from '@/shared/components';
import { CardHeader } from '@/shared/components/CardHeader/CardHeader';
import { useListBarbershops } from '../../hooks/useBarbers';
import { DateUtils } from '../../utils/DateUtils';

export function BarbershopListing() {
  const navigate = useNavigate();
  const { data } = useListBarbershops();

  return (
    <Box className='max-w-3xl mx-auto p-4'>
      <h1>Barbershop Listing</h1>

      <Stack className='gap-4 flex-wrap'>
        <For each={data} fallback={<p>No barbershops found.</p>}>
          {(item) => (
            <Card className='w-full cursor-pointer' key={item.id} onClick={() => navigate(`/barbershop/${item.id}`)} pt={{ content: { className: 'p-0!' } }}>
              <CardHeader title={item.nmBarbershop} address={item.dsAddress} icon={<Scissors />} openStatus={item.inOpen} />

              <Divider className='my-4' />

              <Stack direction='row' align='center'>
                <InfoItem label='FECHA ÀS' value={DateUtils.formatTime(item.hrClosesAt)} className='flex-1' icon={<Clock size='16' color='oklch(66.6% 0.179 58.318)' />} />

                <InfoItem label='PRÓXIMO HORÁRIO' value={DateUtils.formatDateTime(item.dtNextAvailableSchedule)} className='flex-1' icon={<Calendar size='16' color='oklch(66.6% 0.179 58.318)' />} />
              </Stack>
            </Card>
          )}
        </For>
      </Stack>
    </Box>
  );
}
