import { Box, Icon, Text } from '@chakra-ui/react';

import type { SchedulesType } from './types/SchedulesType';

export function Schedules({ icon, label, value }: SchedulesType) {
  return (
    <Box flexGrow='1' display='flex' alignItems='center' gap='4'>
      <Icon boxSize='4' color='#F9941F'>
        {icon}
      </Icon>

      <Box>
        <Text fontSize='sm' color='gray.500'>
          {label}
        </Text>

        <Text fontSize='md' color='gray.800' fontWeight='bold'>
          {value}
        </Text>
      </Box>
    </Box>
  );
}
