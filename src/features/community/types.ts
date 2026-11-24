import type { Database } from '@/integrations/supabase/types';
export type Book = Database['public']['Tables']['books']['Row'];
export type Contribution = Database['public']['Tables']['contributions']['Row'];
export type CommunityEvent = Database['public']['Tables']['community_events']['Row'];
export type Shelf = Database['public']['Tables']['reader_shelves']['Row'];
export type Engagement = Database['public']['Views']['book_engagement']['Row'];
export const SHELVES = ['Currently Reading','Completed','Next Reads','Want to Read','On Hold','Dropped','Want to Reread','Favorites'] as const;
export const PACKAGES = [
 {name:'Basic',price:150,benefits:['Official registration in the reading challenge','Placement in the reading schedule','Introduction to the community','Coordinated reading and discussion period','Participation certificate']},
 {name:'Standard',price:275,benefits:['Everything in Basic','Enhanced community visibility','Priority feature during the scheduled reading period','Additional reader engagement activities','Extended visibility throughout the challenge']},
 {name:'Premium',price:395,benefits:['Everything in Standard','Featured spotlight placement among participating titles','Expanded visibility across partner reading communities','Additional reader engagement support','Priority scheduling','Enhanced promotional visibility']},
] as const;
export const CHALLENGE = {start:'2026-07-01',end:'2027-06-30',awards:'2027-09-03'};
export const WEIGHTS = {votes:30,rating:20,completed:20,participants:15,discussions:10,likes:5};
export function readingPercent(current:number,total:number) { return total>0?Math.min(100,Math.max(0,Math.round(current/total*100))):0; }
export function rankingScores(rows:Engagement[]) {
 return rows.map(row=>({ ...row,score:Object.entries(WEIGHTS).reduce((score,[key,weight])=>{
 const metric=key as keyof typeof WEIGHTS;
 const value=Number(row[metric]??0);
 const max=metric==='rating'?5:Math.max(0,...rows.map(r=>Number(r[metric]??0)));
 return score+(max>0?value/max*weight:0);
 },0)})).sort((a,b)=>b.score-a.score);
}
export function pageHead(title:string,description:string) {return {meta:[{title:`${title} | Midnight Readers Club`},{name:'description',content:description},{property:'og:title',content:`${title} | Midnight Readers Club`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]};}
