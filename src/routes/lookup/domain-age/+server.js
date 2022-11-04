import getRdapInfo from "$lib/server/rdap/rdap";
import { invalid } from '@sveltejs/kit';
import getDomainAgeFromRdapInfo from "./usecases/getDomainAgeFromRdapInfo";

export async function GET(request) {
    const urlToCheck = request.url.searchParams.get('url');
    const rdapInfo = await getRdapInfo(urlToCheck)
                        .catch((error) => {
                            console.log(error);
                            return invalid(400, error.message);
                        });
    const data = getDomainAgeFromRdapInfo(rdapInfo);
    return new Response(
        JSON.stringify({
            url_to_check: urlToCheck,
            data,
        })
        );
}