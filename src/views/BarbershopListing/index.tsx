import { Box, Card, Container, For, HStack, Text } from '@chakra-ui/react';
import { Calendar, Clock, Scissors } from 'lucide-react';
import { useNavigate } from 'react-router';

import { useListBarbershops } from '../../hooks/useBarbers';
import { Schedules } from './components/Schedules';
import { BarbershopDetailsHeader } from '../../shared/BarbershopDetailsHeader';

export function BarbershopListing() {
  const navigate = useNavigate();
  const { data, isLoading } = useListBarbershops();

  return (
    <Container display='flex' flexDirection='column' gap='4' maxW='4xl'>
      {!isLoading ? (
        <>
          <Box>
            <Text fontSize='md' color='gray.500'>
              {data?.filter((barbershop) => barbershop.isOpen).length} de {data?.length} abertas agora
            </Text>
          </Box>

          <For each={data} fallback={<p>No barbershops found.</p>}>
            {(barbershop) => (
              <Card.Root
                key={barbershop.id}
                boxShadow='sm'
                transition='all 200ms ease'
                cursor='pointer'
                _hover={{ transform: 'translateY(-6px)', boxShadow: 'lg' }}
                onClick={() => navigate(`/details/${barbershop.id}`)}
              >
                <Card.Header>
                  <BarbershopDetailsHeader
                    cpIcon={<Scissors />}
                    title={{ nmBarbershop: barbershop.name }}
                    description={{ nmNeighborhood: barbershop.neighborhood, nmCity: barbershop.city }}
                    inOpen={barbershop.isOpen}
                  />
                </Card.Header>

                <Card.Body>
                  <Box height='1px' backgroundColor='gray.200' mt='-2' mb='4' />
                  <HStack>
                    <Schedules icon={<Clock />} label='FECHA ÀS' value={barbershop.closesAt} />

                    <Schedules icon={<Calendar />} label='PRÓXIMO HORÁRIO' value={new Date(barbershop.nextAvailableSlot).toLocaleString()} />
                  </HStack>
                </Card.Body>
              </Card.Root>
            )}
          </For>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
}
