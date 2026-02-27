import { Badge, Box, Card, Container, For, HStack, Icon, Text } from '@chakra-ui/react';
import { Scissors } from 'lucide-react';

import { useListBarbershops } from '../../hooks/useBarbers';

export function BarbershopListing() {
  const { data, isLoading } = useListBarbershops();

  return (
    <Container display='flex' flexDirection='column' gap='4'>
      {!isLoading ? (
        <For each={data} fallback={<p>No barbershops found.</p>}>
          {(barbershop) => (
            <Card.Root key={barbershop.id}>
              <Card.Header>
                <HStack justifyContent='space-between'>
                  <HStack direction='row' alignItems='center' gap='4'>
                    <Icon boxSize='12' color='#F9941F' backgroundColor='#FEF4E8' borderRadius='0.75rem' padding='3'>
                      <Scissors />
                    </Icon>

                    <Box>
                      <Card.Title>{barbershop.name}</Card.Title>
                      <Card.Description>
                        {barbershop.neighborhood}, {barbershop.city}
                      </Card.Description>
                    </Box>
                  </HStack>

                  <Badge colorPalette={barbershop.isOpen ? 'green' : 'red'} paddingX='3' paddingY='1' borderRadius='full'>
                    <Text fontSize='md' color={barbershop.isOpen ? 'green.500' : 'red.500'}>
                      {barbershop.isOpen ? 'Aberto' : 'Fechado'}
                    </Text>
                  </Badge>
                </HStack>
              </Card.Header>
              <Card.Body display='flex' flexDirection='row' gap='4'>
                <p>FECHA ÀS {barbershop.closesAt}</p>
                <p>PRÓXIMO HORÁRIO {new Date(barbershop.nextAvailableSlot).toLocaleString()}</p>
              </Card.Body>
            </Card.Root>
          )}
        </For>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
}
