import { useNavigate, useParams } from 'react-router';
import { Box, Container, HStack, Icon } from '@chakra-ui/react';
import { ArrowLeft } from 'lucide-react';

import { useBarbershopDetails } from '../../hooks/useBarbers';
import { BarbershopDetailsHeader } from '../../shared/BarbershopDetailsHeader';

export function BarbershopDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useBarbershopDetails(Number(id));

  console.log('data', data);

  return (
    <Container>
      <HStack alignItems='center' onClick={() => navigate(-1)}>
        <Icon>
          <ArrowLeft />
        </Icon>
        Voltar
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
  );
}
