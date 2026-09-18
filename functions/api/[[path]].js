   export async function onRequest(context) {
     const url = new URL(context.request.url);
     const targetUrl = "http://103.240.91.122" + url.pathname.replace("/api", "") + url.search;

     const response = await fetch(targetUrl, {
       method: context.request.method,
       headers: context.request.headers,
     });

     const newResponse = new Response(response.body, response);
     newResponse.headers.set("Access-Control-Allow-Origin", "*");
     return newResponse;
   }
