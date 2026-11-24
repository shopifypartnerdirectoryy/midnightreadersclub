import {createFileRoute} from '@tanstack/react-router';
import {ExploreBooks} from '@/features/community/library';
import {communityQuery} from '@/features/community/data.functions';
import {pageHead} from '@/features/community/types';
export const Route=createFileRoute('/explore-books')({validateSearch: (search: Record<string, unknown>): {genre?:string} => typeof search['genre']==='string'?{genre:search['genre']}:{},head:()=>pageHead('Explore Books','Discover books, authors, and perspectives.'),loader:({context})=>context.queryClient.ensureQueryData(communityQuery),component: ExplorePage});
function ExplorePage(){const {genre}=Route.useSearch();return <ExploreBooks initialGenre={genre??''}/>;}
