import { useState } from 'react';
import { useParams } from 'react-router';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Calendar as CalendarInput } from 'primereact/calendar';
import { Dialog } from 'primereact/dialog';

import { Box, For, If, Stack, Typography } from '@/shared/common';

import { useBarbershopDetails } from '../../hooks/useBarbers';
import { HeaderDetails } from './components/HeaderDetails/HeaderDetails';
import { InfoSection } from './components/InfoSection/InfoSection';
import { ServiceSection } from './components/ServiceSection/ServiceSection';

export function BarbershopDetails() {
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState<Date | null>(null);

  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useBarbershopDetails(id!);

  return (
    <Box>
      <If condition={!isLoading} elseCondition={<p>Loading...</p>}>
        {data ? (
          <>
            <HeaderDetails title={data.barbershopDetails.nmBarbershop} address={data.barbershopDetails.dsAddress} openStatus={data.barbershopDetails.inOpen} />

            <Box className='max-w-3xl mx-auto px-4 py-6'>
              <InfoSection phone={data.barbershopDetails.dsPhone} closesAt={data.barbershopDetails.hrClosesAt} nextAvailableSchedule={data.barbershopDetails.dtNextAvailableSchedule} />

              <ServiceSection services={data.offerServices} />

              <Typography variant='h3'>Barbeiros</Typography>

              <Stack direction='col' className='gap-4 my-4 flex-wrap'>
                <For each={[1, 2, 3, 4, 5]} fallback={<p>No services found.</p>}>
                  {(item) => (
                    <Card key={item} className='w-full flex items-center gap-4 p-4' pt={{ content: { className: 'p-0!' }, body: { className: 'w-full' } }}>
                      <Stack direction='row' align='center' className='gap-4 justify-between'>
                        <Stack direction='row' align='center' className='gap-4'>
                          <Avatar label='U' shape='circle' size='large' style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />

                          <Box>
                            <Typography variant='h3'>Barbeiro {item}</Typography>
                            <Typography variant='body2'>Especialista em cortes modernos</Typography>
                            <Typography variant='body2'>Avaliação: 4.5</Typography>
                          </Box>
                        </Stack>

                        <Button size='small' onClick={() => setModalVisible(true)}>
                          Agendar
                        </Button>
                      </Stack>
                    </Card>
                  )}
                </For>
              </Stack>

              <Dialog visible={modalVisible} onHide={() => setModalVisible(false)} header='Agendar Serviço' modal className='w-full max-w-md'>
                <Typography variant='h2'>Selecione o serviço, data e horário disponível.</Typography>

                <Typography variant='h3'>Serviço</Typography>

                <For each={[1, 2, 3, 4, 5]} fallback={<p>No services found.</p>}>
                  {(item) => (
                    <Box key={item}>
                      <Stack direction='row' align='center' className='gap-2 w-full justify-between px-4 py-2 rounded-lg border border-gray-300'>
                        <Box>
                          <Typography variant='h3'>Corte de Cabelo</Typography>
                          <Typography variant='body2'>30 min</Typography>
                        </Box>
                        <Typography variant='h3'>R$ 50,00</Typography>
                      </Stack>
                    </Box>
                  )}
                </For>

                <Typography variant='h3'>DATA</Typography>

                <CalendarInput value={date} onChange={(e) => e.value && setDate(e.value)} readOnlyInput />

                <Button className='w-full flex justify-center'>Confirmar Agendamento</Button>
              </Dialog>
            </Box>
          </>
        ) : (
          <p>Barbershop not found.</p>
        )}
      </If>
    </Box>
  );
}
