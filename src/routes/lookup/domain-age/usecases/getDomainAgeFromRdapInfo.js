export default function getDomainAgeFromRdapInfo(rdapInfo) {
    const events = rdapInfo.events;
    const registrationDate = events[0].eventDate;
    return registrationDate;
}