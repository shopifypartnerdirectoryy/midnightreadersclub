import { createServerFn } from '@tanstack/react-start';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';
import { queryOptions } from '@tanstack/react-query';
export const getCommunity = createServerFn({method:'GET'}).handler(async()=>{
 const key=process.env['SUPABASE_PUBLISHABLE_KEY'];
 const url=process.env['SUPABASE_URL'];
 if(!key||!url) throw new Error('Community connection is unavailable.');
 const client=createClient<Database>(url,key,{auth:{persistSession:false,autoRefreshToken:false},global:{fetch:(input,init)=>{
 const headers=new Headers(init?.headers);if(key.startsWith('sb_')&&headers.get('Authorization')===`Bearer ${key}`) headers.delete('Authorization');headers.set('apikey',key);return fetch(input,{...init,headers});
 }}});
 const [books,contributions,events,engagement,settings,participants]=await Promise.all([
 client.from('books').select('*').order('created_at').limit(1000),
 client.from('contributions').select('*').order('created_at',{ascending:false}).limit(100),
 client.from('community_events').select('*').order('created_at').limit(100),
 client.from('book_engagement').select('*').limit(1000),
 client.from('community_settings').select('*'),
 client.from('event_participants').select('event_id,choice').limit(1000),
 ]);
 for(const result of [books,contributions,events,engagement,settings,participants]) if(result.error) throw new Error('The community could not be loaded. Please try again.');
 return {books:books.data??[],contributions:contributions.data??[],events:events.data??[],engagement:engagement.data??[],settings:settings.data??[],participants:participants.data??[]};
});
export const communityQuery=queryOptions({queryKey:['community'],queryFn:()=>getCommunity(),staleTime:30000});
