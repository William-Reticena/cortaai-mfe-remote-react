import { Box } from '../Box';

import type { StackProps } from './StackProps';

const directionMap = {
  row: 'flex-row',
  col: 'flex-col',
};

const alignMap = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
};

const justifyMap = {
  start: 'justify-start',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  end: 'justify-end',
};

export function Stack({ align = 'start', children, className, direction = 'col', justify = 'start', ...rest }: StackProps) {
  return (
    <Box className={['flex', directionMap[direction], alignMap[align], justifyMap[justify], className].join(' ')} {...rest}>
      {children}
    </Box>
  );
}
