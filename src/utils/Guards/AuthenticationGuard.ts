import { POST } from "../HTTP";

async function AuthenticationGuard(to,from,next){
    let token = localStorage.getItem(import.meta.env.VITE_SESSION_TOKEN);
    if(token==null){
        next({name:'login'});
    }else{
        let resp = await POST('auth/authorize',{},{authorization:`Bearer ${token}` });
        if(resp.status == 200){
            next();
        }else{
            next({name:'login'});
        }
    }
}

export {AuthenticationGuard}