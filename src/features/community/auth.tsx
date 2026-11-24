import { createContext,useContext,useEffect,useState,type ReactNode } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from '@tanstack/react-router';
const AuthContext=createContext<{user:User|null;loading:boolean}>({user:null,loading:true});
export function AuthProvider({children}:{children:ReactNode}) {
 const [user,setUser]=useState<User|null>(null);const [loading,setLoading]=useState(true);const queryClient=useQueryClient();const router=useRouter();
 useEffect(()=>{let live=true;supabase.auth.getUser().then(({data})=>{if(live){setUser(data.user);setLoading(false);}});
 const {data:{subscription}}=supabase.auth.onAuthStateChange((event,session)=>{if(event!=='SIGNED_IN'&&event!=='SIGNED_OUT'&&event!=='USER_UPDATED')return;setUser(session?.user??null);setLoading(false);void router.invalidate();if(event!=='SIGNED_OUT')void queryClient.invalidateQueries();else queryClient.removeQueries({queryKey:['personal']});});
 return()=>{live=false;subscription.unsubscribe();};},[queryClient,router]);
 return <AuthContext.Provider value={{user,loading}}>{children}</AuthContext.Provider>;
}
export const useReader=()=>useContext(AuthContext);
