import myFetch, {ApiResponse} from "../utils/myFetch";

interface iPoolService {
    getAll: () => Promise<ApiResponse<any>>
}

const service: iPoolService = {
    getAll: async () => {
        try {
            return await myFetch('/pools');
        } catch (err) {
            console.log(err);
            return err;
        }
    },
}
export default service;
