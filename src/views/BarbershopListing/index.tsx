import { useNavigate } from 'react-router';
import { Card } from 'primereact/card';
import { Calendar, Clock, Scissors } from 'lucide-react';

import { Box, Divider, For, Stack } from '@/shared/common';
import { InfoItem } from '@/shared/components';
import { BarbershopHeaderBanner } from '@/shared/components/BarbershopHeaderBanner/BarbershopHeaderBanner';
import { useListBarbershops } from '../../hooks/useBarbers';
import { useUserDataCache } from '../../hooks/useUserDataCache';
import { DateUtils } from '../../utils/DateUtils';

export function BarbershopListing() {
  const navigate = useNavigate();
  const { data } = useListBarbershops();
  const { userData, isLoading } = useUserDataCache();

  return (
    <Box className='max-w-3xl mx-auto p-4'>
      {/* User Data Display */}
      {userData && (
        <div className='mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200'>
          <h4 className='font-semibold text-lg mb-2'>👤 {userData.nmUser}</h4>
          <div className='text-sm text-gray-600'>
            <p><strong>Email:</strong> {userData.dsEmail}</p>
            <p><strong>Telefone:</strong> {userData.dsPhone}</p>
            <p><strong>Role:</strong> {userData.tpRole}</p>
          </div>
        </div>
      )}

      {/* Debug Info */}
      {isLoading && (
        <div className='mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200'>
          <h5 className='font-semibold'>⏳ Carregando dados do usuário...</h5>
        </div>
      )}

      {!isLoading && !userData && (
        <div className='mb-6 p-4 bg-red-50 rounded-lg border border-red-200'>
          <h5 className='font-semibold'>⚠️ Nenhum usuário autenticado</h5>
          <p className='text-sm text-gray-600 mt-2'>Faça login para ver seus dados aqui.</p>
        </div>
      )}

      <h1>Barbershop Listing</h1>

      <Stack className='gap-4 flex-wrap'>
        <For each={data} fallback={<p>No barbershops found.</p>}>
          {(item) => (
            <Card className='w-full cursor-pointer' key={item.id} onClick={() => navigate(`/barbershop/${item.id}`)} pt={{ content: { className: 'p-0!' } }}>
              <BarbershopHeaderBanner title={item.nmBarbershop} address={item.dsAddress} icon={<Scissors />} openStatus={item.inOpen} />

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
