import type { IfProps } from './IfProps';

export function If({ condition, children, elseCondition }: IfProps) {
  if (!condition) return elseCondition || null;

  if (Array.isArray(condition) && condition.length === 0) return elseCondition || null;

  if (typeof condition === 'object' && Object.keys(condition).length === 0) return elseCondition || null;

  return <>{children}</>;
}
