import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

import { Box, For, Stack, Typography } from '@/shared/common';
import { GenericUtils } from '@/utils/GenericUtils';
import type { BarberSectionProps } from './BarberSectionProps';

export function BarberSection({ barbers, handleBarberSelect }: BarberSectionProps) {
  return (
    <Box className='mt-8'>
      <Typography variant='h3'>Barbeiros</Typography>

      <Stack direction='col' className='gap-4 my-4 flex-wrap'>
        <For each={barbers} fallback={<p>No barbers found.</p>}>
          {(item) => (
            <Card key={item.id} className='w-full flex items-center gap-4 p-4' pt={{ content: { className: 'p-0!' }, body: { className: 'w-full p-0!' } }}>
              <Stack direction='row' align='center' className='gap-4 justify-between'>
                <Stack direction='row' align='center' className='gap-4'>
                  <Avatar label={GenericUtils.getFirstLetter(item.nmBarber)} shape='circle' size='large' style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />

                  <Box>
                    <Typography variant='h3'>{item.nmBarber}</Typography>

                    <For each={item.specialties} fallback={<p>No specialties found.</p>}>
                      {(specialty, index) => (
                        <>
                          <Box as='span' key={specialty} className='text-gray-500 text-xs'>
                            {specialty}
                          </Box>

                          {index < item.specialties.length - 1 && (
                            <Box as='span' className='mx-1 text-gray-500'>
                              ·
                            </Box>
                          )}
                        </>
                      )}
                    </For>

                    <Typography variant='body2'>Avaliação: 4.5</Typography>
                  </Box>
                </Stack>

                <Button size='small' onClick={() => handleBarberSelect(item)}>
                  Agendar
                </Button>
              </Stack>
            </Card>
          )}
        </For>
      </Stack>
    </Box>
  );
}
