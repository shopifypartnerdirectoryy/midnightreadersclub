import {createFileRoute} from '@tanstack/react-router';
import {AdminPage} from '@/features/community/admin';
import {pageHead} from '@/features/community/types';
export const Route=createFileRoute('/_authenticated/admin')({head:()=>pageHead('Administration','Manage the Midnight Readers Club catalogue, submissions, activities and content.'),component:AdminPage});
