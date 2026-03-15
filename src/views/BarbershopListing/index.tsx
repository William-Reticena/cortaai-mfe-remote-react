import { Card } from 'primereact/card';
import { Scissors } from 'lucide-react';

import { CardHeader } from './components/CardHeader/CardHeader';

export function BarbershopListing() {
  // const navigate = useNavigate();

  return (
    <div>
      <h1>Barbershop Listing</h1>

      <Card header={<CardHeader icon={<Scissors />} />}></Card>
    </div>
  );
}
