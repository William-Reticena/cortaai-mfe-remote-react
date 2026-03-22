export type ForProps<T> = {
  children: (item: T, index: number) => React.ReactNode;
  each?: T[];
  fallback?: React.ReactNode;
};
