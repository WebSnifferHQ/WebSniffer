export default function getRdapQureyServerByDomainName(domainName, serverList) {
    const rdapQureyServer = matchRdapServerByDomain(domainName, serverList);
    if(rdapQureyServer.length < 2) {
        return undefined;
    }
    return rdapQureyServer[1];
}

function matchRdapServerByDomain(domainName, serverList) {
    if(domainName === "") {
        return [];
    }

    const serviceLink = serverList.find(service => {
        const servedDomains = service[0];
        return servedDomains.includes(domainName);
    });

    if(serviceLink != undefined) {
        return serviceLink;
    }
    const broaderDomainName = getBroaderDomainName(domainName);
    return matchRdapServerByDomain(broaderDomainName, serverList);
}

// for a domain name like example.com return com
function getBroaderDomainName(domainName) {
    const [first, ...rest] = domainName.split('.');
    if(rest.length < 1) {
        return "";
    }
    return rest.join('.');
}