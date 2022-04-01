import {faAnchor, faAnchorCircleCheck,faAnchorCircleExclamation} from '@fortawesome/free-solid-svg-icons'
export const pricingData={
    monthly:[
        {
            id:1,
            icon:faAnchorCircleExclamation,
            type:'Regular',
            description:"Starter Plan",
            features:['Limited Projects',"Regular Support Business",'1 month Free Trial','3GB storage','Ads Preview'],
            text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
            price:"Free",
            limited:"For Limited Period",
            clicked:false
        },
        {
            id:2,
            icon:faAnchor,
            type:'Plantinum',
            description:"For the best results",
            features:['Limited Projects',"Regular Support Business",'1 month Free Trial','20GB storage','Ads Preview'],
            text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
            price:"$342",
            limited:"For Limited Period",
            clicked:true
        },
        {
            id:3,
            icon:faAnchorCircleCheck,
            type:'Standard',
            description:"Most popular",
            features:['Limited Projects',"Regular Support Business",'1 month Free Trial','10GB storage','Ads Preview'],
            text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
            price:"$234",
            limited:"Billing Monthly",
            clicked:false
        }
    ],
    yearly:[
        {
            id:4,
            icon:faAnchorCircleExclamation,
            type:'Regular',
            description:"Starter Plan",
            features:['Limited Projects',"Regular Support Business",'1 year Free Trial','18GB storage','Ads Preview'],
            text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
            price:"$100",
            limited:"For Small Period",
            clicked:false
        },
        {
            id:5,
            icon:faAnchor,
            type:'Plantinum',
            description:"For the best results",
            features:['Limited Projects',"Regular Support Business",'1 year Free Trial','80GB storage','Ads Preview'],
            text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
            price:"$2999",
            limited:"For Big Period",
            clicked:true
        },
        {
            id:6,
            icon:faAnchorCircleCheck,
            type:'Standard',
            description:"Most popular",
            features:['Limited Projects',"Regular Support Business",'1 year Free Trial','200GB storage','Ads Preview'],
            text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
            price:"$3267",
            limited:"Billing Yearly",
            clicked:false
        }
    ]
}