import {createFileRoute} from '@tanstack/react-router';
import {Awards} from '@/features/community/events';
import {communityQuery} from '@/features/community/data.functions';
import {pageHead} from '@/features/community/types';
export const Route=createFileRoute('/awards')({head:()=>pageHead('Awards and Recognition','The Midnight Readers Club Top 10 recognition.'),loader:({context})=>context.queryClient.ensureQueryData(communityQuery),component: Awards});
