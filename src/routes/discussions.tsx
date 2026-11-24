import {createFileRoute} from '@tanstack/react-router';
import {Discussions} from '@/features/community/events';
import {communityQuery} from '@/features/community/data.functions';
import {pageHead} from '@/features/community/types';
export const Route=createFileRoute('/discussions')({head:()=>pageHead('Discussions','Join book conversations at Midnight Readers Club.'),loader:({context})=>context.queryClient.ensureQueryData(communityQuery),component: Discussions});
