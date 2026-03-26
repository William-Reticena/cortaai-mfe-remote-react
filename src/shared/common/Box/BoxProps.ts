export type BoxProps = {
  as?: 'div' | 'span';
  children?: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;
