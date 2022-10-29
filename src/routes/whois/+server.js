import lookupWhois from './usecases/lookupWhois';
import { invalid } from '@sveltejs/kit';
import formattedServerData from './usecases/formattedServerData';


export async function GET(request) {
    const urlToCheck = request.url.searchParams.get('url');
    const data = await lookupWhois(urlToCheck)
                        .catch((error) => {
                            console.log(error);
                            return invalid(400, error.message);
                        });
    data.forEach(element => {
        element.data = formattedServerData(element.data);
    });
    return new Response(
        JSON.stringify({
            url_to_check: urlToCheck,
            data
        })
        );
}
