const BASE_URL: string = 'https://astrology-backend-phi.vercel.app/api';

interface EndpointsInterface {
    [key: string]: string;
}

const endpoints: EndpointsInterface = {
    getNatal: `${BASE_URL}/natal/description`,
    getCompatibility: `${BASE_URL}/compatibility`
}

export default endpoints;
