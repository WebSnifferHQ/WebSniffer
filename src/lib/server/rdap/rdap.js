import getRdapQureyServerByDomainName from "./usecases/getRdapQureyServerByDomainName";

export default async function getRdapInfo(domainName) {
    return getRdapInfoByDomainName(domainName);
}

async function getRdapInfoByDomainName(domainName) {
    const rdapBootstrapDomainServer = "http://data.iana.org/rdap/dns.json";
    const rdapServers = (await (await fetch(rdapBootstrapDomainServer)).json()).services;
    const rdapQureyServer = getRdapQureyServerByDomainName(domainName, rdapServers);
    if(rdapQureyServer == undefined) {
        return `can't find rdap server for ${domainName}`; // TODO This is bad. do proper error message handling
    }
    const rdapQurey = (await (await fetch(`${rdapQureyServer}domain/${domainName}`)).json()); // TODO This is not valid rdap request. We need to follow links that have rel=related
    return rdapQurey;
}