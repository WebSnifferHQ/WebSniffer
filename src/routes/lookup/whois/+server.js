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
    const formattedData = formatData(data);
    console.log(data);
    return new Response(
        JSON.stringify({
            url_to_check: urlToCheck,
            data,
            formattedData
        })
        );
}

function formatData(data) {
    const dataCopy = JSON.parse(JSON.stringify(data));
    dataCopy.forEach(element => {
        element.data = formattedServerData(element.data);
    });
    return filterEmptyData(dataCopy);
}

// Sometimes data has only empty or private fields that get filtered in formattedServerData function
function filterEmptyData(data) {
    return data.filter((item) => {
        return Object.keys(item.data).length > 0;
    });
}
