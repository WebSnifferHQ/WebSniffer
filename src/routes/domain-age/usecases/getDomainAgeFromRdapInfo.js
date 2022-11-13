export default function getDomainAgeFromRdapInfo(rdapInfo) {
    const events = rdapInfo.events;
    
    const registrationDate = getRegistrationObject(events)?.eventDate;
    return registrationDate;
}

function getRegistrationObject(events) {
    const RDAP_DOMAIN_REGISTERED_KEY = "registration";
    return events.find((element) => {
        return element.eventAction === RDAP_DOMAIN_REGISTERED_KEY;
    });
}
