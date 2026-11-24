import {createServerFn} from '@tanstack/react-start';
import {requireSupabaseAuth} from '@/integrations/supabase/auth-middleware';
export const getAdministration=createServerFn({method:'GET'}).middleware([requireSupabaseAuth]).handler(async({context})=>{
 const {data:allowed,error}=await context.supabase.rpc('has_role',{_user_id:context.userId,_role:'admin'});if(error||!allowed) return {allowed:false as const};
 const [books,events,submissions,profiles,logs,messages,settings,contributions]=await Promise.all([
 context.supabase.from('books').select('*').order('created_at',{ascending:false}).limit(1000),context.supabase.from('community_events').select('*'),context.supabase.from('author_submissions').select('*').order('created_at',{ascending:false}),context.supabase.from('profiles').select('*').limit(1000),context.supabase.from('activity_logs').select('*').order('created_at',{ascending:false}).limit(50),context.supabase.from('contact_messages').select('*').order('created_at',{ascending:false}).limit(100),context.supabase.from('community_settings').select('*'),context.supabase.from('contributions').select('*').order('created_at',{ascending:false}).limit(500)]);
 for(const r of [books,events,submissions,profiles,logs,messages,settings,contributions])if(r.error)throw new Error('Administration could not be loaded.');
 return {allowed:true as const,books:books.data??[],events:events.data??[],submissions:submissions.data??[],profiles:profiles.data??[],logs:logs.data??[],messages:messages.data??[],settings:settings.data??[],contributions:contributions.data??[]};
});
