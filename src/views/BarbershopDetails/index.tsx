import { useState } from 'react';
import { Calendar, Clock, Phone } from 'lucide-react';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Calendar as CalendarInput } from 'primereact/calendar';
import { Dialog } from 'primereact/dialog';

import { Box, CardHeader, For, InfoItem, Stack, Typography } from '@/shared';

export function BarbershopDetails() {
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState<Date | null>(null);

  return (
    <Box>
      <CardHeader />

      <Stack direction='row' align='center' className='gap-4 my-4'>
        <InfoItem className='flex-1' icon={<Phone size={20} />} />
        <InfoItem className='flex-1' icon={<Clock size={20} />} />
        <InfoItem className='flex-1' icon={<Calendar size={20} />} />
      </Stack>

      <Typography variant='h2'>Serviços</Typography>

      <For each={[1, 2, 3, 4, 5]} fallback={<p>No services found.</p>}>
        {(item) => (
          <Stack key={item} direction='row' className='gap-2 w-full justify-between px-4 py-2 rounded-lg border border-gray-300'>
            <Box>
              <Typography variant='h3'>Corte de Cabelo</Typography>
              <Typography variant='body2'>30 min</Typography>
            </Box>
            <Typography variant='h3'>R$ 50,00</Typography>
          </Stack>
        )}
      </For>

      <Typography variant='h2'>Barbeiros</Typography>

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
  );
}
