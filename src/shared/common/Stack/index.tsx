import { Box } from '../Box';

import type { StackProps } from './StackProps';

export function Stack({ align = 'start', children, className, direction = 'col', justify = 'start' }: StackProps) {
  return <Box className={['flex', `flex-${direction}`, `items-${align}`, `justify-${justify}`, className].join(' ')}>{children}</Box>;
}
