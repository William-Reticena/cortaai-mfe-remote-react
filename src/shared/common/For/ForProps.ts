export type ForProps<T> = {
  each: T[];
  children: (item: T, index: number) => React.ReactNode;
};
