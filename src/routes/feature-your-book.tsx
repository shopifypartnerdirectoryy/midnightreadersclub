import {createFileRoute} from '@tanstack/react-router';
import {FeatureYourBook} from '@/features/community/authors';
import {communityQuery} from '@/features/community/data.functions';
import {pageHead} from '@/features/community/types';
export const Route=createFileRoute('/feature-your-book')({head:()=>pageHead('Feature Your Book','Author registration: Basic $150, Standard $275, Premium $395.'),loader:({context})=>context.queryClient.ensureQueryData(communityQuery),component: FeatureYourBook});
