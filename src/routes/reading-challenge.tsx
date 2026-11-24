import {createFileRoute} from '@tanstack/react-router';
import {EventsPage} from '@/features/community/events';
import {communityQuery} from '@/features/community/data.functions';
import {pageHead} from '@/features/community/types';
export const Route=createFileRoute('/reading-challenge')({head:()=>pageHead('Reading Challenge 2026–2027','Read, discover, and participate with Midnight Readers Club.'),loader:({context})=>context.queryClient.ensureQueryData(communityQuery),component:Page});
function Page(){return <EventsPage kind="challenge"/>;}