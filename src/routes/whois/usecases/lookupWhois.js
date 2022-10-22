import whois from "whois";


export default async function lookupWhois(url){
    return new Promise((resolve, reject) => {
        whois.lookup(url, {verbose:true}, (error, data)=>{
            if(error) {
                reject(error);
                return;
            }
            resolve(data)});
    });
}