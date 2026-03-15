import { Box } from '@/shared';

export function StatusBadge() {
  return (
    <Box as='span' className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-[rgb(from_var(--status-open)_r_g_b/0.12)] text-(--status-open)'>
      <Box as='span' className='w-1.5 h-1.5 rounded-full bg-(--status-open)'></Box>
      Aberto
    </Box>
  );
}
