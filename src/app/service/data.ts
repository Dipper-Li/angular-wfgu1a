import * as pic from './pic';
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
            name:'Ultra Speed User Plan',
            oriPrice: 888,
            price: 738,
            per: 'month',
            period: 24,
            other: '',
            localData: 20
        },
        mup: false
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
                '20GB Local Data',
            ]
        },
        starts: 4,
        plan: {
            name:'Ultra Speed User Plan',
            isDiy: true,
            oriPrice: null,
            price: 408,
            per: 'month',
            period: 24,
            other: '',
            localData: null
        },
        mup: false
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
            name:'Ultra Speed User Plan',
            oriPrice: null,
            price: 408,
            per: 'month',
            period: 24,
            other: '',
            localData: 20
        },
        mup: false
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
            dependOnPeriod:true
        },
        detail: {
            name: 'HuaweiP30Lite(6GB+28GB)',
            type: 'offer',
            descs: [

            ]
        },
        starts: 4,
        plan: {
            name:'Ultra Speed User Plan',
            oriPrice: null,
            price: null,
            per: 'month',
            period: null,
            other: 'Handset as low as $0',
            localData: 20
        },
        mup: false
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
        mup: false
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
        mup: false
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
        mup: false
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
        mup: false
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
            name:'Ultra Speed User Plan',
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
        mup: false
    },
];