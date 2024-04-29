import {UilEstate} from '@iconscout/react-unicons'
import {BsHospital} from "react-icons/bs"
import {BiDonateBlood} from "react-icons/bi"
import {GrUserSettings} from "react-icons/gr"
import {FaArrowTrendUp} from "react-icons/fa6"




import img1 from "../../image/img1.png";



export const arr =[
    {icons:UilEstate,
        hedding:'Dashboard'
    },

    {icons:BsHospital,
        hedding:'Hospital_list'
    },

  {icons:GrUserSettings,
        hedding:'Status'
    }];


    export const cardsData=[{
        title:'Hospitals',
        colors:{
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow:"0px 10px 20px 0px #e0c6f5",},
            barValue:70,
            value:"25,970",
            png:BsHospital,
            series:[
                {
                    name:'Hospital',
                    data:[31,40,28,51,42,109,100]
                }
            ]
        
    },
    {
        title:'Donation',
        colors:{
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow:"0px 10px 20px 0px #FDC0C7",},
            barValue:80,
            value:"25,970",
            png:BiDonateBlood,
            series:[
                {
                    name:'Donation',
                    data:[10,100,50,70,80,30,40]
                }
            ]
        
    },
    {
        title:'Life Saved',
        colors:{
            backGround:  "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow:"0px 10px 20px 0px #FDC0C7"},
            barValue:80,
            value:"25,970",
            png:BiDonateBlood,
            series:[
                {
                    name:'Life Saved',
                    data:[10,100,50,70,80,30,40]
                }
            ]
        
    },
    

]
export const UpdatesData = [
    {
      img: img1,
      name: "Cross Church",
      noti: "Signed to blood connect",
      time: "25 seconds ago",
    },
    {
      img: img1,
      name: "Fort Hospital",
      noti: "Signed to blood connect",
      time: "30 minutes ago",
    },
    {
      img: img1,
      name: "Kaveri Hospital",
      noti: "Signed to blood connect",
      time: "2 hours ago",
    },
  ];