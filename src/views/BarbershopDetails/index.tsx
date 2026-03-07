import { useNavigate, useParams } from 'react-router';
import { Box, Button, Card, Container, DataList, HStack, Icon, Text } from '@chakra-ui/react';
import { ArrowLeft, Calendar, Clock, Phone } from 'lucide-react';

import { useBarbershopDetails } from '../../hooks/useBarbers';
import { BarbershopDetailsHeader } from '../../shared/BarbershopDetailsHeader';

export function BarbershopDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useBarbershopDetails(Number(id));

  console.log('data', data);

  return (
    <Box>
      <Container>
        <Container maxW='4xl' py='6'>
          <HStack alignItems='center' mb='4'>
            <Button variant='ghost' size='xs' onClick={() => navigate(-1)}>
              <ArrowLeft />
              Voltar
            </Button>
          </HStack>

          {!isLoading ? (
            <BarbershopDetailsHeader
              title={{ nmBarbershop: data?.name, dsFontSize: '2xl' }}
              inOpen={data?.isOpen}
              description={{ nmNeighborhood: data?.neighborhood, nmCity: data?.city, dsFontSize: 'md' }}
            />
          ) : (
            <p>Loading...</p>
          )}
        </Container>
      </Container>

      <Box height='1px' backgroundColor='gray.200' mt='-2' mb='4' />

      <Container maxW='4xl' py='6'>
        <Box display='flex' gap='4'>
          <Card.Root width='33%' borderRadius='12px'>
            <Card.Body>
              <Box display='flex' alignItems='center' gap='4'>
                <Icon boxSize='5' color='#F9941F' mb='1'>
                  <Phone />
                </Icon>

                <Box>
                  <Text fontSize='sm' color='gray.500'>
                    TELEFONE
                  </Text>
                  <Text fontWeight='bold'>{data?.phone}</Text>
                </Box>
              </Box>
            </Card.Body>
          </Card.Root>

          <Card.Root width='33%' borderRadius='12px'>
            <Card.Body>
              <Box display='flex' alignItems='center' gap='4'>
                <Icon boxSize='5' color='#F9941F' mb='1'>
                  <Clock />
                </Icon>

                <Box>
                  <Text fontSize='sm' color='gray.500'>
                    FECHA ÀS
                  </Text>
                  <Text fontWeight='bold'>{data?.closesAt}</Text>
                </Box>
              </Box>
            </Card.Body>
          </Card.Root>

          <Card.Root width='33%' borderRadius='12px'>
            <Card.Body>
              <Box display='flex' alignItems='center' gap='4'>
                <Icon boxSize='5' color='#F9941F' mb='1'>
                  <Calendar />
                </Icon>

                <Box>
                  <Text fontSize='sm' color='gray.500'>
                    PRÓXIMO HORÁRIO
                  </Text>
                  <Text fontWeight='bold'>{new Date(data?.nextAvailableSlot).toLocaleString()}</Text>
                </Box>
              </Box>
            </Card.Body>
          </Card.Root>
        </Box>

        <Text mt='6' fontSize='2xl'>
          Serviços
        </Text>

        <DataList.Root divideY='1px'>
          {data?.services.map((s) => (
            <DataList.Item key={s.id} pt='4'>
              <DataList.ItemLabel>{s.name}</DataList.ItemLabel>
              <DataList.ItemValue>{s.durationMinutes}</DataList.ItemValue>
            </DataList.Item>
          ))}
        </DataList.Root>
      </Container>
    </Box>
  );
}
