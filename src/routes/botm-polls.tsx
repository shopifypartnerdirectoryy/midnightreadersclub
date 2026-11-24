import {createFileRoute} from '@tanstack/react-router';
import {EventsPage} from '@/features/community/events';
import {communityQuery} from '@/features/community/data.functions';
import {pageHead} from '@/features/community/types';
export const Route=createFileRoute('/botm-polls')({head:()=>pageHead('Book of the Month and Polls','Read, discover, and participate with Midnight Readers Club.'),loader:({context})=>context.queryClient.ensureQueryData(communityQuery),component:Page});
function Page(){return <EventsPage kind="poll"/>;}