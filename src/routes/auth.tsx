import {createFileRoute} from '@tanstack/react-router';
import {AuthPage} from '@/features/community/accounts';
import {communityQuery} from '@/features/community/data.functions';
import {pageHead} from '@/features/community/types';
export const Route=createFileRoute('/auth')({head:()=>pageHead('Sign In and Join','Join Midnight Readers Club with Google or email.'),loader:({context})=>context.queryClient.ensureQueryData(communityQuery),component: AuthPage});
