import { useRef, useState } from 'react';
import { useParams } from 'react-router';
import { addLocale } from 'primereact/api';
import { Button } from 'primereact/button';
import { Calendar as CalendarInput } from 'primereact/calendar';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';

import { Box, For, If, Stack, Typography } from '@/shared/common';

import { useBarbershopDetails, useScheduleAppointment } from '@/hooks/useBarbers';
import type { Barber, OfferService } from '@/shared/dtos/response/BarbershopDetailsResponse';
import { MaskUtils } from '@/utils/MaskUtils';
import { GenericUtils } from '@/utils/GenericUtils';

import { HeaderDetails } from './components/HeaderDetails/HeaderDetails';
import { InfoSection } from './components/InfoSection/InfoSection';
import { ServiceSection } from './components/ServiceSection/ServiceSection';
import { BarberSection } from './components/BarberSection/BarberSection';

addLocale('pt-BR', {
  dayNames: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
  dayNamesShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
  dayNamesMin: ['do', 'se', 'te', 'qu', 'qu', 'se', 'sá'],
  monthNames: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
  monthNamesShort: ['jan', 'feb', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  today: 'Hoje',
  clear: 'Limpar',
  dateFormat: 'dd/mm/yy',
});

export function BarbershopDetails() {
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [barberSelected, setBarberSelected] = useState<Barber | null>(null);
  const [serviceSelected, setServiceSelected] = useState<OfferService | null>(null);

  const toast = useRef<Toast>(null);

  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useBarbershopDetails(id!);
  const { mutate: scheduleAppointment } = useScheduleAppointment();

  const handleBarberSelect = (barber: Barber) => {
    setBarberSelected(barber);
    setModalVisible(true);
  };

  const groupBarberSpecialties = (barber: Barber) => {
    if (!data) return [];

    return barber.specialties.reduce((acc, specialty) => {
      const category = data?.offerServices.find((service) => service.nmService === specialty);

      if (category && !acc.some((item) => item.nmService === category.nmService)) {
        acc.push(category);
      }

      return acc;
    }, [] as OfferService[]);
  };

  const confirmSchedule = (date: Date) => {
    if (!barberSelected || !serviceSelected) return;

    scheduleAppointment(
      {
        idBarber: barberSelected.id,
        idService: serviceSelected.id,
        dtAppointment: date,
      },
      {
        onSuccess: () => {
          toast.current?.show({ severity: 'success', detail: 'Agendamento realizado com sucesso!' });
        },
        onError: (e) => {
          const error = GenericUtils.getErrorObject(e);

          toast.current?.show({ severity: 'error', life: 5000, detail: error.message });
        },
      },
    );

    setModalVisible(false);
    setBarberSelected(null);
    setServiceSelected(null);
    setDate(null);
  };

  return (
    <Box>
      <If condition={!isLoading} elseCondition={<p>Loading...</p>}>
        {data ? (
          <>
            <HeaderDetails title={data.barbershopDetails.nmBarbershop} address={data.barbershopDetails.dsAddress} openStatus={data.barbershopDetails.inOpen} />

            <Box className='max-w-3xl mx-auto px-4 py-6'>
              <InfoSection phone={data.barbershopDetails.dsPhone} closesAt={data.barbershopDetails.hrClosesAt} nextAvailableSchedule={data.barbershopDetails.dtNextAvailableSchedule} />

              <ServiceSection services={data.offerServices} />

              <BarberSection barbers={data.barbers} handleBarberSelect={handleBarberSelect} />
            </Box>
          </>
        ) : (
          <p>Barbershop not found.</p>
        )}
      </If>

      {barberSelected && (
        <Dialog
          visible={modalVisible}
          onHide={() => {
            setModalVisible(false);
            setBarberSelected(null);
            setServiceSelected(null);
            setDate(null);
          }}
          header={`Agendar com ${barberSelected.nmBarber}`}
          modal
          className='w-full max-w-md'
        >
          <Typography variant='body2'>Selecione o serviço, data e horário disponível.</Typography>

          <Typography variant='body2' className='mt-6 mb-2'>
            SERVIÇO
          </Typography>

          <Stack align='center' direction='col' className='gap-2 mb-6'>
            <For each={groupBarberSpecialties(barberSelected)} fallback={<p>No services found.</p>}>
              {(item) => (
                <Stack
                  onClick={() => setServiceSelected(item)}
                  key={item.id}
                  direction='row'
                  align='center'
                  justify='between'
                  className={`gap-2 w-full px-4 py-2 border rounded-xl cursor-pointer
                    ${serviceSelected?.id === item.id ? 'border-(--primary) bg-orange-50' : 'border-gray-300'}`}
                >
                  <Box key={item.nmService}>
                    <Typography variant='body1' className='font-medium'>
                      {item.nmService}
                    </Typography>
                    <Typography variant='body2' className='text-gray-500'>
                      {item.nrDurationMinutes} min
                    </Typography>
                  </Box>
                  <Typography variant='body1' className='text-(--primary) font-semibold'>
                    {MaskUtils.formatToBRL(item.vlPrice)}
                  </Typography>
                </Stack>
              )}
            </For>
          </Stack>

          <If condition={serviceSelected}>
            <Typography variant='body2' className='mt-6 mb-2'>
              DATA
            </Typography>

            <CalendarInput
              locale='pt-BR'
              minDate={new Date()}
              className='p-inputtext-sm w-full mb-6'
              placeholder='Selecione uma data'
              value={date}
              onChange={(e) => e.value && setDate(e.value)}
              readOnlyInput
              showIcon
              showTime
              hourFormat='24'
              dateFormat='dd/mm/yy'
            />
          </If>

          <Button disabled={!date} className='w-full flex justify-center' onClick={() => date && confirmSchedule(date)}>
            Confirmar Agendamento
          </Button>
        </Dialog>
      )}
      <Toast ref={toast} position='top-right' />
    </Box>
  );
}
