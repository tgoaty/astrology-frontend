const BASE_URL: string = 'http://127.0.0.1:8000/api';

interface EndpointsInterface {
    [key: string]: string;
}

const endpoints: EndpointsInterface = {
    getNatal: `${BASE_URL}/natal/description`,
    getCompatibility: `${BASE_URL}/compatibility`
}

export default endpoints;
