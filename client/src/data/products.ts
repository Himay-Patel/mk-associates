export type ProductType = 'cashew' | 'walnut';

export type Product = {
    id: number;
    name: string;
    type: ProductType;
    keyFeatures?: string;
    image: string;
    specifications: {
        capacity: string;
        dimension?: string;
        wholeKernelPercentage?: string;
        brokenPercentage?: string;
        powerConsumption: string;
        powerSupply: string;
        meshThickness?: string;
        rcnSizes?: string;
    };
};

export const products: Product[] = [
    {
        'id': 1,
        'name': 'Cashew Shelling Machine - 600',
        'type': 'cashew',
        'keyFeatures': 'Working parts use S.S. 304, and the machine structure is built in stainless steel. The machine is controlled by a PLC programmer, with control functions and running parameters displayed on a 7-inch touch screen.',
        'image': '/products/cashew/csm-600.webp',
        'specifications': {
            'capacity': '250-500 kg/hr',
            'dimension': 'L15m X W5m X H5m',
            'wholeKernelPercentage': '85-95%',
            'brokenPercentage': '1-5% - Nut sizes',
            'powerConsumption': '17 KWh',
            'powerSupply': '3 Phase, 440V-50Hz',
        }
    },
    {
        'id': 2,
        'name': 'Cashew Shelling Machine - 1200',
        'type': 'cashew',
        'keyFeatures': 'Working parts use S.S. 304, and the machine structure is built in stainless steel. The machine is controlled by a PLC programmer, with control functions and running parameters displayed on a 7-inch touch screen.',
        'image': '/products/cashew/csm-1200.webp',
        'specifications': {
            'capacity': '500-1000 kg/hr',
            'dimension': 'L17m X W6m X H5m',
            'wholeKernelPercentage': '85-95%',
            'brokenPercentage': '1-5% - Nut sizes',
            'powerConsumption': '24 KWh',
            'powerSupply': '3 Phase, 440V-50Hz',
        }
    },
    {
        'id': 3,
        'name': 'Walnut Shelling Line - 600',
        'type': 'walnut',
        'keyFeatures': 'Working parts use S.S. 304, and the machine structure is built in stainless steel. The machine is controlled by a PLC programmer, with control functions and running parameters displayed on a 7-inch touch screen.',
        'image': '/products/walnut/wsl-600.webp',
        'specifications': {
            'capacity': '400-500 kg/hr',
            'dimension': 'L9m X W3m X H4m',
            'powerConsumption': '10 KWh',
            'powerSupply': '3 Phase, 440V-50Hz',
        }
    },
    {
        'id': 4,
        'name': 'Walnut Cracker Machine - 600',
        'type': 'walnut',
        'keyFeatures': 'Working parts use S.S. 304, and the machine structure is built in stainless steel.',
        'image': '/products/walnut/wcm-600.webp',
        'specifications': {
            'capacity': '400-500 kg/hr',
            'dimension': 'L3m X W1.5m X H1.8m',
            'powerConsumption': '1.5 KWh',
            'powerSupply': '3 Phase, 440V-50Hz',
        }
    },
    {
        'id': 5,
        'name': 'Raw Cashew Grading Machine - 1500',
        'type': 'cashew',
        'image': '/products/cashew/rcgm-1000-1500.webp',
        'specifications': {
            'capacity': '1200-1500 kg/hr',
            'dimension': 'L15m X W2m X H3m',
            'powerConsumption': '3 KWh',
            'powerSupply': '3 Phase, 440V-50Hz',
            'meshThickness': '4 mm',
            'rcnSizes': 'A+, A, B, C, D, E',
        }
    },
    {
        'id': 6,
        'name': 'Raw Cashew Grading Machine - 1000',
        'type': 'cashew',
        'image': '/products/cashew/rcgm-1000-1500.webp',
        'specifications': {
            'capacity': '700-1000 kg/hr',
            'dimension': 'L15m X W1.8m X H2.6m',
            'powerConsumption': '3 KWh',
            'powerSupply': '3 Phase, 440V-50Hz',
            'meshThickness': '4 mm',
            'rcnSizes': 'A+, A, B, C, D, E',
        }
    },
    {
        'id': 7,
        'name': 'Raw Cashew Destoner - 1000',
        'type': 'cashew',
        'keyFeatures': 'Working parts use S.S. 304, and the machine structure is built in stainless steel.',
        'image': '/products/cashew/cdstnm-1000.webp',
        'specifications': {
            'capacity': '800-1000 kg/hr',
            'dimension': 'L7m X W6m X H3m',
            'powerConsumption': '1.5 KWh',
            'powerSupply': '3 Phase, 440V-50Hz',
        }
    },
    {
        'id': 8,
        'name': 'Raw Cashew Dryer',
        'type': 'cashew',
        'keyFeatures': 'Uniform and quick drying. Temperature upto 130°C can be attained. High efficiency axial flow fan desing gives better performance. Digital temperature indicator CUM controller, gives accurate temperature control.',
        'image': '/products/cashew/cdrm.webp',
        'specifications': {
            'capacity': '24-240 trays (400MM X 800MM X 32MM)',
            'powerConsumption': '1.5 KWh',
            'powerSupply': '3 Phase, 440V-50Hz',
        }
    }
];