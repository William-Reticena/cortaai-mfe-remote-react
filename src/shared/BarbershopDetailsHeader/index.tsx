import { Badge, Box, HStack, Icon, Text } from '@chakra-ui/react';
import { MapPin } from 'lucide-react';

import type { BarbershopDetailsHeaderType } from './types/BarbershopDetailsHeaderType';

export function BarbershopDetailsHeader({ cpIcon, description, inOpen, title }: BarbershopDetailsHeaderType) {
  return (
    <HStack justifyContent='space-between'>
      <HStack direction='row' alignItems='center' gap='4'>
        {cpIcon && (
          <Icon boxSize='12' color='#F9941F' backgroundColor='#FEF4E8' borderRadius='0.75rem' padding='3'>
            {cpIcon}
          </Icon>
        )}

        <Box>
          <Text fontSize={title?.dsFontSize || 'lg'} fontWeight='bold'>
            {title.nmBarbershop}
          </Text>
          <Box>
            <Icon boxSize='4' color='gray.500' marginRight='1'>
              <MapPin />
            </Icon>
            <Text fontSize={description?.dsFontSize || 'sm'} color='gray.500' display='inline'>
              {description.nmNeighborhood}, {description.nmCity}
            </Text>
          </Box>
        </Box>
      </HStack>

      <Badge colorPalette={inOpen ? 'green' : 'red'} paddingX='3' paddingY='1' borderRadius='full'>
        <Box boxSize='2' backgroundColor={inOpen ? 'green.500' : 'red.500'} borderRadius='full' marginRight='4px' />

        <Text fontSize='md' color={inOpen ? 'green.500' : 'red.500'}>
          {inOpen ? 'Aberto' : 'Fechado'}
        </Text>
      </Badge>
    </HStack>
  );
}
