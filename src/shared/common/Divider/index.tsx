import { Box } from '../Box';
import type { DividerProps } from './DividerProps';

export function Divider({ className }: DividerProps) {
  return <Box className={`w-full h-px bg-gray-200 ${className || ''}`} />;
}
