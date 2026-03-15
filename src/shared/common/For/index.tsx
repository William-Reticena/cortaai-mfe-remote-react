import type { ForProps } from './ForProps';

export function For<T>({ children, each }: ForProps<T>) {
  return <>{each.map((item, index) => children(item, index))}</>;
}
