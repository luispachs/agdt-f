const BASE_PATH = import.meta.env.VITE_APP_API_URL

async function POST(url:string,data:object|FormData,headers:object={}){

  
    let options:RequestInit = {
        method:'POST',
        redirect:'manual',
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        
    };
    if(data != null){
          if(data instanceof FormData){
            options['body'] =data;
        }
        else{
            options['body'] =JSON.stringify(data);
        }
    }

    let response  = await fetch(BASE_PATH+url,options)

    return await response;
}

async function GET(url:string,data:any =null,headers:object={}){

    let bodyData:string|FormData|null;
    let options:RequestInit = {
        method:'GET',
        redirect:'manual',

        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        
    };
    if(data != null){
          if(data instanceof FormData){
            options['body'] =data;
        }
        else{
            options['body'] =JSON.stringify(data);
        }
    }

    
    let response  = await fetch(BASE_PATH+url,options)

    return await response;
}

async function PUT(url:string,data:any,headers:object={}){

    let options:RequestInit = {
        method:'PUT',
        redirect:'manual',

        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        
    };
    if(data != null){
          if(data instanceof FormData){
            options['body'] =data;
        }
        else{
            options['body'] =JSON.stringify(data);
        }
    }


    let response  = await fetch(BASE_PATH+url,options)

    return await response;
}

async function DELETE(url:string,data:any,headers:object={}){

    let options:RequestInit = {
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        
    };
    if(data != null){
          if(data instanceof FormData){
            options['body'] =data;
        }
        else{
            options['body'] =JSON.stringify(data);
        }
    }
    let response  = await fetch(BASE_PATH+url,options)

    return await response;
}

export { POST, GET, PUT, DELETE };