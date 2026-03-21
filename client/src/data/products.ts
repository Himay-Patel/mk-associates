export type ProductType = 'cashew' | 'walnut';

export type Product = {
    id: number;
    name: string;
    type: ProductType;
    keyFeatures: string;
    image: string;
    specifications: {
        capacity: string;
        dimension: string;
        'Whole Kernel Percentage': string;
        'Broken Percentage': string;
        'Power Consumption': string;
        'Power Supply': string;
    };
};

export const products: Product[] = [
    {
        'id': 1,
        'name': 'Cashew Shelling Machine - 600',
        'type': 'cashew',
        'keyFeatures': 'Working parts use S.S. 304, and the machine structure is built in stainless steel. The machine is controlled by a PLC programmer, with control functions and running parameters displayed on a 7-inch touch screen.',
        'image': '/products/cashew/csm-600.jpg',
        'specifications': {
            'capacity': '500-600 kg/hr',
            'dimension': 'L15m X W5m X H5m',
            'Whole Kernel Percentage': '85-95%',
            'Broken Percentage': '1-5% - Nut sizes',
            'Power Consumption': '17 KWh',
            'Power Supply': '3 Phase, 440V-50Hz',
        }
    },
    {
        'id': 2,
        'name': 'Cashew Shelling Machine - 1200',
        'type': 'cashew',
        'keyFeatures': 'Working parts use S.S. 304, and the machine structure is built in stainless steel. The machine is controlled by a PLC programmer, with control functions and running parameters displayed on a 7-inch touch screen.',
        'image': '/products/cashew/csm-1200.jpg',
        'specifications': {
            'capacity': '1100-1200 kg/hr',
            'dimension': 'L17m X W6m X H5m',
            'Whole Kernel Percentage': '85-95%',
            'Broken Percentage': '1-5% - Nut sizes',
            'Power Consumption': '24 KWh',
            'Power Supply': '3 Phase, 440V-50Hz',
        }
    },
    {
        'id': 3,
        'name': 'Walnut Shelling Line - 600',
        'type': 'walnut',
        'keyFeatures': 'Working parts use S.S. 304, and the machine structure is built in stainless steel. The machine is controlled by a PLC programmer, with control functions and running parameters displayed on a 7-inch touch screen.',
        'image': '/products/walnut/wsl-600.jpeg',
        'specifications': {
            'capacity': '500-600 kg/hr',
            'dimension': 'L9m X W3m X H4m',
            'Whole Kernel Percentage': '85-95%',
            'Broken Percentage': '2-5% - Nut sizes',
            'Power Consumption': '10 KWh',
            'Power Supply': '3 Phase, 440V-50Hz',
        }
    }
];