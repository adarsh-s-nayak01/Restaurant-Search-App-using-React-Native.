import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    // inorder to authorise ourselves in yelp.
    headers:{
        Authorization: 'Bearer 7-_3WItDlmtENvltoGGfrgyFjcBhm9pqnGSz7NR96mHLVVGDbgvc0CgsNZc34v1wZI_N3U-GLy2P9CIjW_2I9tWLM7iqn08zaps7uGlkuC6rn5bEe9xIPONRFxnLYnYx'
        //key from yelp is placed after bearer.
    },

});

