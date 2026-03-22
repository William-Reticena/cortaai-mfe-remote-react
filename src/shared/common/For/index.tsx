import type { ForProps } from './ForProps';

export function For<T>({ children, each, fallback }: ForProps<T>) {
  if (!each || each.length === 0) {
    return <>{fallback}</>;
  }

  return <>{each.map((item, index) => children(item, index))}</>;
}
