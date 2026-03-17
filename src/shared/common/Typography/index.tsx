import { createElement } from 'react';

import type { TypographyProps } from './TypographyProps';

const normalizedVariant = (variant: TypographyProps['variant']) => {
  switch (variant) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'h5':
      return 'h5';
    case 'h6':
      return 'h6';
    case 'body1':
    case 'body2':
      return 'p';
    default:
      return 'p';
  }
};

export function Typography({ children, variant = 'body1' }: TypographyProps) {
  const tag = normalizedVariant(variant);

  return createElement(tag, { className: `typography-${variant}` }, children);
}
