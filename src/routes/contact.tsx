import {createFileRoute} from '@tanstack/react-router';
import {Contact} from '@/features/community/info';
import {pageHead} from '@/features/community/types';
export const Route=createFileRoute('/contact')({head:()=>pageHead('Contact','Contact the Midnight Readers Club team.'),component:Contact});
