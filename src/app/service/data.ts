import * as pic from './pic';
export const categories = [
    {
        head: { key: 'productline', value: 'productline', label: 'Product Line' },
        items: [
            { key: 'mobile', value: 'mobile', label: 'Mobile', count: 534 },
            { key: 'broadband', value: 'broadband', label: 'Broadband', count: 632 },
        ],
        parentKey: null,
        isShow: true
    },
    {
        head: { key: 'plancategory', value: 'plancategory', label: 'Plan Category' },
        items: [
            { key: 'general', value: 'general', label: 'General', count: 1007 },
            { key: 'staff', value: 'staff', label: 'Staff', count: 43 },
            { key: 'domestichelper', value: 'domestichelper', label: 'Domestic Helper', count: 43 },
            { key: 'student', value: 'student', label: '11-17 age student ', count: 43 },
        ],
        parentKey: null,
        isShow: true
    },
    {
        head: { key: 'mobileplan', value: 'mobileplan', label: 'Mobile Plan' },
        items: [
            { key: 'simonly', value: 'simonly', label: 'SIM only', count: 50 },
            { key: 'simstandalone', value: 'simstandalone', label: 'SIM + Standalone', count: 167 },
            { key: 'simcoupon', value: 'simcoupon', label: 'SIM + Coupon', count: 244 },
            { key: 'simhandset', value: 'simhandset', label: 'SIM + Handset', count: 132 },
        ],
        parentKey: null,
        isShow: true
    },
    {
        head: { key: 'mobilebrand', value: 'mobilebrand', label: 'Mobile Brand' },
        items: [
            { key: 'csl', value: 'csl', label: 'CSL', count: 234 },
            { key: '1O1O', value: '1O1O', label: '1O1O', count: 312 },
        ],
        parentKey: null,
        isShow: true
    },
    {
        head: { key: 'ismup', value: 'ismup', label: 'is MUP' },
        items: [
            { key: 'yes', value: true, label: 'Yes', count: 252 },
            { key: 'no', value: false, label: 'No', count: 275 },
        ],
        parentKey: null,
        isShow: true
    },
    {
        head: { key: 'localdataincluded', value: 'localdataincluded', label: 'Local Data Included' },
        items: [
            { key: 'less10', value: 'less10', label: '< 10GB', count: 123 },
            { key: 'less20', value: 'less20', label: '10 -20 GB', count: 331 },
            { key: 'larger20', value: 'larger20', label: '> 20 GB', count: 86 },
        ],
        parentKey: null,
        isShow: true
    },
];
export const recom = [
    {
        tags: [
            { value: 'ACQ', color: '#398eda' },
            { value: 'SALE', color: '#f45555' },
        ],
        picture: pic.iphone_xs,
        info: {
            price: 0,
            clubPoint: null,
            desc: '(20GB->30GB)'
        },
        detail: {
            name: 'Apple iPhone XS 256GB',
            type: 'offer',
            descs: [
                'Ultra Speed User Plan',
                'Upfront $8299 ',
                '(Full Rebate)',
                'Unlimited minutes',
                '20GB Local Data',
            ]
        },
        starts: 4,
        plan: {
            name: 'Ultra Speed User Plan',
            oriPrice: 888,
            price: 738,
            per: 'month',
            period: 24,
            other: '',
            localData: 20
        },
        isMup: false
    },
    {
        tags: [
            { value: 'ACQ', color: '#398eda' },
        ],
        picture: pic.iphone_xs,
        info: {
            price: 3380,
            clubPoint: null,
            desc: '(20GB)'
        },
        detail: {
            name: 'Apple iPhone XS 256GB',
            type: 'offer',
            descs: [
                'Ultra Speed User Plan',
                'Upfront $8299 ',
                '(Full Rebate)',
                'Unlimited minutes',
            ]
        },
        starts: 4,
        plan: {
            name: 'Ultra Speed User Plan',
            isDiy: true,
            oriPrice: null,
            price: 408,
            per: 'month',
            period: null,
            other: '',
            localData: null
        },
        isMup: false
    },
    {
        tags: [
            { value: 'ACQ', color: '#398eda' },
        ],
        picture: pic.iphone_xs,
        info: {
            price: 1380,
            clubPoint: 500,
            desc: '(20GB)'
        },
        detail: {
            name: 'Apple iPhone XS 256GB',
            type: 'offer',
            descs: [
                'Ultra Speed User Plan',
                'Upfront $8299 ',
                '(Full Rebate)',
                'Unlimited minutes',
                '20GB Local Data',
            ]
        },
        starts: 4,
        plan: {
            name: 'Ultra Speed User Plan',
            oriPrice: null,
            price: 408,
            per: 'month',
            period: 24,
            other: '',
            localData: 20
        },
        isMup: false
    },
    {
        tags: [
            { value: 'SALE', color: '#f45555' },
        ],
        picture: pic.p30lite,
        info: {
            price: 0,
            clubPoint: null,
            desc: null,
            dependOnPeriod: true
        },
        detail: {
            name: 'HuaweiP30Lite(6GB+28GB)',
            type: 'offer',
            descs: [

            ]
        },
        starts: 4,
        plan: {
            name: 'Ultra Speed User Plan',
            oriPrice: null,
            price: null,
            per: 'month',
            period: null,
            other: 'Handset as low as $0',
            localData: 20
        },
        isMup: false
    }
];

export const otherRecom = [
    {
        tags: [
            { value: 'ACQ', color: '#398eda' },
        ],
        picture: pic.fiber,
        info: {
            price: null,
            clubPoint: null,
            desc: '1000M Fiber-to-the-Home Plan'
        },
        detail: {
            name: null,
            type: 'offer',
            descs: [
                '(Flat B, Floor 1, Lucky Mansion)',
                'uHub plus Cloud Storage',
                'NETVIGATOR SHiELD',
                'Norton Security',
            ]
        },
        starts: 4,
        plan: {
            oriPrice: null,
            price: null,
            per: null,
            period: null,
            other: 'As low as $228'
        },
        isMup: false
    },
    {
        tags: [
            { value: 'Upgrade', color: '#00CC00' },
        ],
        picture: pic.fiber,
        info: {
            price: null,
            clubPoint: null,
            desc: 'PON Upgrade on  existing broadband'
        },
        detail: {
            name: null,
            type: 'offer',
            descs: [
                '(subscriber id: 144244243, brandwong@netvigator.com)',
                '1000M Fiber-to-the-Home Plan',
            ]
        },
        starts: 4,
        plan: {
            oriPrice: null,
            price: null,
            per: null,
            period: null,
            other: 'As low as $58'
        },
        isMup: false
    },
    {
        tags: [
            { value: 'Upgrade', color: '#00CC00' },
        ],
        picture: pic.retention,
        info: {
            price: null,
            clubPoint: null,
            desc: 'Retention on existing mobile'
        },
        detail: {
            name: null,
            type: 'offer',
            descs: [
                '(subscriber id: 24124144, MRT: 60000003)',
                'Ultra Speed User Plan',
                'Unlimited minutes',
                '20GB Local Data',
            ]
        },
        starts: 4,
        plan: {
            oriPrice: null,
            price: 438,
            per: 'month',
            period: 24,
            other: null
        },
        isMup: false
    },
    {
        tags: [
            { value: 'Upgrade', color: '#00CC00' },
        ],
        picture: pic.vas86e,
        info: {
            price: null,
            clubPoint: null,
            desc: 'Add VAS on existing mobile'
        },
        detail: {
            name: null,
            type: 'offer',
            descs: [
                '(subscriber id: 24124243, MRT: 96669555)',
                '86-Easy',
            ]
        },
        starts: 4,
        plan: {
            oriPrice: null,
            price: 18,
            per: 'month',
            period: 24,
            other: null
        },
        isMup: false
    },
];

export const clrecom = [
    {
        tags: [
            { value: 'ACQ', color: '#398eda' },
        ],
        picture: pic.a3,
        info: {
            price: null,
            clubPoint: null,
            desc: null
        },
        detail: {
            name: 'XIAOMI MI A3',
            type: 'offer',
            descs: [
                'Suggested retail price: $1799',
            ]
        },
        starts: 4,
        plan: {
            name: 'Ultra Speed User Plan',
            oriPrice: null,
            price: null,
            per: null,
            period: null,
            other: 'As low as $228',
            localData: 20
        },
        payment: [
            { type: 'point', clubpoint: 900, cash: null },
            { type: 'mix', clubpoint: 100, cash: 1680 }
        ],
        isMup: false
    },
];