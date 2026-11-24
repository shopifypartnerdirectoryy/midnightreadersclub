import {createFileRoute} from '@tanstack/react-router';
import {Members} from '@/features/community/accounts';
import {communityQuery} from '@/features/community/data.functions';
import {pageHead} from '@/features/community/types';
export const Route=createFileRoute('/members')({head:()=>pageHead('Our Members','Meet the Midnight Readers Club community.'),loader:({context})=>context.queryClient.ensureQueryData(communityQuery),component: Members});
