import {createFileRoute} from '@tanstack/react-router';
import {Leaderboard} from '@/features/community/events';
import {communityQuery} from '@/features/community/data.functions';
import {pageHead} from '@/features/community/types';
export const Route=createFileRoute('/leaderboard')({head:()=>pageHead('Leaderboard','Genuine reader engagement determines book standings.'),loader:({context})=>context.queryClient.ensureQueryData(communityQuery),component: Leaderboard});
