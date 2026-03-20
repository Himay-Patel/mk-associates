export type CompanyDetails = {
    name: string;
    tagline: string;
    address: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
    phone: string;
    email: string;
    logo: string;
    description: string;
};

export const companyDetails: CompanyDetails = {
    'name': 'M K Associates',
    'tagline': 'Specialist in Cashew and Walnut Machinery',
    'address': '31, Meldi Estate, Gota, Ahmedabad -382481',
    'coordinates': {
        'latitude': 23.08980875938142,
        'longitude': 72.5377142426995
    },
    'phone': '+91 9879041476',
    'email': 'hkmaikal@gmail.com',
    'logo': '/logo.png',
    'description': 'M K Associates is a leading manufacturer and supplier of high-quality cashew and walnut machinery. With over 20 years of experience in the industry, we are committed to providing innovative solutions that enhance productivity and efficiency for our clients. Our state-of-the-art machines are designed to meet the specific needs of cashew and walnut processing, ensuring optimal performance and durability. We pride ourselves on our exceptional customer service and support, making us the preferred choice for businesses in the nut processing industry.'
};