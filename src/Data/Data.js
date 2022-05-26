import{UilEstate,
    UilClipboardAlt,
    UilUser,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdrawal,
} from "@iconscout/react-unicons";

export const SidebarData=[
    {
        icon:UilEstate,
        heading:"Dashboard"
    },
    {
        icon:UilClipboardAlt,
        heading:"Orders"
    },
     {
        icon:UilChart,
        heading:"Analytics"
    }
];

export const CardsData=[
    {
        title:'Sales',
        color:{
            background: 'linear-gradient(180deg, #FFFFFF 5%, #6495ED 100%)',
            boxshadow: "0px 10px 20px 0px #6495ED"
        },
        barValue: 70,
        value:'29,567',
        png:UilUsdSquare,
        series:[
            {
                name:"Sales",
                data:[31, 40, 28, 51, 42,109,100]
            }
        ]
    },
    {
        title:'Revenue',
        color:{
            background: 'linear-gradient(180deg, #FFFFFF 5%, #6495ED 100%)',
            boxshadow: "0px 10px 20px 0px #6495ED"
        },
        barValue: 50,
        value:'100,145',
        png:UilMoneyWithdrawal,
        series:[
            {
                name:"Revenue",
                data:[10, 100, 50, 70, 80, 30, 40]
            }
        ]
    },
    {
        title:'Expenses',
        color:{
            background: 'linear-gradient(180deg, #FFFFFF 1%, #6495ED 100%)',
            boxshadow: "0px 10px 20px 0px #6495ED"
        },
        barValue: 85,
        value:'4,293',
        png:UilClipboardAlt,
        series:[
            {
                name:"Expenses",
                data:[10, 25, 15, 30, 12, 15, 20]
            }
        ]
    }
];
