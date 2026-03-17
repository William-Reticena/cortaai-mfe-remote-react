import type { ForProps } from './ForProps';

export function For<T>({ children, each, fallback }: ForProps<T>) {
  return <>{each.length > 0 ? each.map((item, index) => children(item, index)) : fallback}</>;
}
