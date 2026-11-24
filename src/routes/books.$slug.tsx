import {createFileRoute,notFound} from '@tanstack/react-router';
import {BookRoom} from '@/features/community/library';
import {communityQuery} from '@/features/community/data.functions';
import {pageHead} from '@/features/community/types';
export const Route=createFileRoute('/books/$slug')({loader:async({context,params})=>{const data=await context.queryClient.ensureQueryData(communityQuery);const book=data.books.find(b=>b.slug===params.slug);if(!book)throw notFound();return book;},head:({loaderData})=>pageHead(loaderData?.title??'Book unavailable',loaderData?.description??'Explore the Midnight Readers Club library.'),component:Page});
function Page(){const {slug}=Route.useParams();return <BookRoom slug={slug}/>;}