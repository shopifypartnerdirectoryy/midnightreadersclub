import {createFileRoute} from '@tanstack/react-router';
import {ResetPassword} from '@/features/community/accounts';
import {communityQuery} from '@/features/community/data.functions';
import {pageHead} from '@/features/community/types';
export const Route=createFileRoute('/reset-password')({head:()=>pageHead('Reset Password','Securely reset your reader account password.'),loader:({context})=>context.queryClient.ensureQueryData(communityQuery),component: ResetPassword});
