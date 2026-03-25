import { Card } from 'primereact/card';
import { Calendar, Clock, Phone } from 'lucide-react';

import { Stack } from '@/shared/common';
import { InfoItem } from '@/shared/components';

import { DateUtils } from '@/utils/DateUtils';
import { MaskUtils } from '@/utils/MaskUtils';
import type { InfoSectionProps } from './InfoSectionProps';

export function InfoSection({ phone, closesAt, nextAvailableSchedule }: InfoSectionProps) {
  return (
    <Stack direction='row' align='center' className='gap-4 my-4'>
      <Card className='flex-1' pt={{ content: { className: 'p-0!' } }}>
        <InfoItem label='TELEFONE' value={MaskUtils.formatPhone(phone)} icon={<Phone size={20} color='var(--primary)' />} />
      </Card>
      <Card className='flex-1' pt={{ content: { className: 'p-0!' } }}>
        <InfoItem label='FECHA ÀS' value={DateUtils.formatTime(closesAt)} className='flex-1' icon={<Clock size={20} color='var(--primary)' />} />
      </Card>
      <Card className='flex-1' pt={{ content: { className: 'p-0!' } }}>
        <InfoItem label='PRÓXIMO HORÁRIO' value={DateUtils.formatDateTime(nextAvailableSchedule)} className='flex-1' icon={<Calendar size={20} color='var(--primary)' />} />
      </Card>
    </Stack>
  );
}
