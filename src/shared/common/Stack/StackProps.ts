export type StackProps = {
  align?: 'start' | 'center' | 'end';
  children: React.ReactNode;
  className?: string;
  direction?: 'row' | 'col';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
} & React.HTMLAttributes<HTMLDivElement>;
