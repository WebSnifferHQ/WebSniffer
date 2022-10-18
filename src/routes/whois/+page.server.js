import lookupWhois from './usecases/lookupWhois';
import { invalid } from '@sveltejs/kit';
import formattedServerData from './usecases/formattedServerData';

export const actions = {
    default: async (event) => {
        const formData = await event.request.formData();
        const url = formData.get('url');
        const data = await lookupWhois(url)
                            .catch((error) => {
                                console.log(error);
                                return invalid(400, error.message);
                            });
        data.forEach(element => {
            element.data = formattedServerData(element.data);
        });
        return data;
    }
}