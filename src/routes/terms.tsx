import {createFileRoute} from '@tanstack/react-router';
import {Terms} from '@/features/community/info';
import {pageHead} from '@/features/community/types';
export const Route=createFileRoute('/terms')({head:()=>pageHead('Terms and Privacy','Community conduct, privacy, author registration, and competition integrity.'),component:Terms});
