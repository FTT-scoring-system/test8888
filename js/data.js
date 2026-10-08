// 1. Class / Category / Poomsae Management
const WT_DATA = {
  categories:["École","Benjamin","Minime","Cadet","Junior","Under 30","Under 40","Under 50","Under 60","Under 65","Over 65","Over 50"],
  genders:["Male","Female"],
  judges:[3,4,5,6,7],
  poomsae:{
    P1:"Taegeuk 1 Jang",
    P2:"Taegeuk 2 Jang",
    P3:"Taegeuk 3 Jang",
    P4:"Taegeuk 4 Jang",
    P5:"Taegeuk 5 Jang",
    P6:"Taegeuk 6 Jang",
    P7:"Taegeuk 7 Jang",
    P8:"Taegeuk 8 Jang",
    P9:"Koryo",
    P10:"Keumgang",
    P11:"Taebaek",
    P12:"Pyongwon",
    P13:"Sipjin",
    P14:"Jitae",
    P15:"Chonkwon",
    P16:"Hansu"
  },
  classes:{
    B:{
      "École":["P1","P2"],
      "Benjamin":["P1","P2","P3"],
      "Minime":["P2","P3","P4"],
      "Cadet":["P3","P4","P5","P6"],
      "Junior":["P4","P5","P6","P7"],
      "Under 30":["P5","P6","P7","P8"],
      "Under 40":["P5","P6","P7","P8"]
    },
    A:{
      "Cadet":["P4","P5","P6","P7","P8","P9","P10","P11"],
      "Junior":["P5","P6","P7","P8","P9","P10","P11","P12"],
      "Under 30":["P7","P8","P9","P10","P11","P12","P13","P14"],
      "Under 40":["P7","P8","P9","P10","P11","P12","P13","P14"],
      "Under 50":["P8","P10","P11","P12","P13","P14","P15"],
      "Under 60":["P8","P9","P10","P11","P12","P13","P14","P15","P16"],
      "Under 65":["P8","P9","P10","P11","P12","P13","P14","P15","P16"],
      "Over 65":["P8","P9","P10","P11","P12","P13","P14","P15","P16"],
      "Over 50":["P8","P9","P10","P11","P12","P13","P14","P15","P16"]
    }
  },
  mats:Array.from({length:10},(_,i)=>i+1),
  limits:{timeSeconds:90,accuracyMin:0,accuracyMax:4,presentationMin:1.5,presentationMax:6}
};
const allowedPoomsae=(classCode,category)=>WT_DATA.classes[classCode]?.[category]||[];
