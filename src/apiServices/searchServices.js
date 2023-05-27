import * as request from '~/routes/utils/request';

//replace request to sync,await
export const search = async (q, type) => {
    try {
        const res = await request.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log('error');
    }
};

// request
//     .get(`users/search`, {
//         params: {
//             q: debounced,
//             type: 'less',
//         },
//     })
//     .then((res) => {
//         console.log(res.data);
//         setSearchResult(res.data);
//         setLoading(false);
//     })
//     .catch(() => {
//         setLoading(false);
//     });
