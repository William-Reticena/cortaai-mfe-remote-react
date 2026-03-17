import type { IfProps } from './IfProps';

export function If({ condition, children }: IfProps) {
  if (!condition) return null;

  if (Array.isArray(condition) && condition.length === 0) return null;

  if (typeof condition === 'object' && Object.keys(condition).length === 0) return null;

  return <>{children}</>;
}
