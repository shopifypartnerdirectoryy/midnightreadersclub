import {createFileRoute} from '@tanstack/react-router';
import {MyMRC} from '@/features/community/accounts';
import {communityQuery} from '@/features/community/data.functions';
import {pageHead} from '@/features/community/types';
export const Route=createFileRoute('/my-mrc')({head:()=>pageHead('My MRC','Your books, reading progress, goals and personal profile.'),loader:({context})=>context.queryClient.ensureQueryData(communityQuery),component: MyMRC});
