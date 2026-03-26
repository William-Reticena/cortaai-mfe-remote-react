import type { BoxProps } from './BoxProps';

export function Box({ as = 'div', children, className, ...rest }: BoxProps) {
  const Component = as;

  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
}
