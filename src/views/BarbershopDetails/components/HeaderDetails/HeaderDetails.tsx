import { Box } from '@/shared/common';
import { CardHeader } from '@/shared/components';
import type { HeaderDetailsProps } from './HeaderDetailsProps';

export function HeaderDetails({ title, address, openStatus }: HeaderDetailsProps) {
  return (
    <Box className='border-b border-gray-300'>
      <Box className='max-w-3xl mx-auto px-4 py-6'>
        <CardHeader title={title} address={address} openStatus={openStatus} />
      </Box>
    </Box>
  );
}
