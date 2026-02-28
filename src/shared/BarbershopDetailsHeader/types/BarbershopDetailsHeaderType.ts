export type BarbershopDetailsHeaderType = {
  cpIcon?: React.ReactNode;
  title: TitleType;
  description: DescriptionType;
  inOpen: boolean;
};

type FontSizeType = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type TitleType = {
  nmBarbershop: string;
  dsFontSize?: FontSizeType;
};

type DescriptionType = {
  nmNeighborhood: string;
  nmCity: string;
  dsFontSize?: FontSizeType;
};
