import {createFileRoute} from '@tanstack/react-router';
import {About} from '@/features/community/info';
import {pageHead} from '@/features/community/types';
export const Route=createFileRoute('/about')({head:()=>pageHead('About Us','The Midnight Readers Club community and Reading for Growth mission.'),component:About});
