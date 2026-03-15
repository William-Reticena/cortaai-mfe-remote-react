import type { BoxProps } from './BoxProps';

export function Box({ as = 'div', children, className }: BoxProps) {
  const Component = as;

  return <Component className={className}>{children}</Component>;
}
