const BASE_URL: string = 'https://astrologybackend-6g2908xuc-tgoatys-projects.vercel.app/api';

interface EndpointsInterface {
    [key: string]: string;
}

const endpoints: EndpointsInterface = {
    getNatal: `${BASE_URL}/natal/description`,
}

export default endpoints;