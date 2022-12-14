export const headerData : string[] = [
  '',
  'Shifters',
  'Rear D.',
  'Front D.',
  'Cranks',
  'Cass',
  'Chain',
  'Brakes',
  'Total'
];

export interface IBikePartsData {
  name : string,
  shifters : number,
  rearD : number,
  frontD : number,
  cranks : number,
  cass : number,
  chain : number,
  brakes : number,
  total : number
}

export const rimMechanicalShiftData : IBikePartsData[] = [
  {
    name:'Dura-Ace R9100',
    shifters:365,
    rearD:158,
    frontD:70,
    cranks:614,
    cass:193,
    chain:247,
    brakes:326,
    total:1973
  },
  {
    name:'Ultegra R8000',
    shifters:438,
    rearD:200,
    frontD:92,
    cranks:674,
    cass:251,
    chain:257,
    brakes:360,
    total:2272
  },
  {
    name:'105 R7000',
    shifters:500,
    rearD:225,
    frontD:95,
    cranks:713,
    cass:284,
    chain:257,
    brakes:379,
    total:2453
  },
  {
    name:'Dura-Ace 9000',
    shifters:363,
    rearD:160,
    frontD:60,
    cranks:636,
    cass:192,
    chain:249,
    brakes:294,
    total:1960
  },
  {
    name:'Ultegra 6800',
    shifters:419,
    rearD:193,
    frontD:86,
    cranks:694,
    cass:251,
    chain:260,
    brakes:340,
    total:2243
  },
  {
    name:'105 5800',
    shifters:486,
    rearD:234,
    frontD:89,
    cranks:736,
    cass:284,
    chain:260,
    brakes:340,
    total:2467
  },
  {
    name: 'Red 22',
    shifters:280,
    rearD:145,
    frontD:69,
    cranks:609,
    cass:167,
    chain:246,
    brakes:262,
    total:1778
  },
  {
    name:'Force 22',
    shifters:307,
    rearD:178,
    frontD:79,
    cranks:618,
    cass:266,
    chain:220,
    brakes:326,
    total:2054
  },
  {
    name:'Super Record 12',
    shifters:339,
    rearD:181,
    frontD:79,
    cranks:618,
    cass:266,
    chain:220,
    brakes:311,
    total:2014
  },
  {
    name:'Recored 12',
    shifters:343,
    rearD:216,
    frontD:81,
    cranks:708,
    cass:266,
    chain:220,
    brakes:326,
    total:2160
  },
  {
    name:'Chours 12',
    shifters:364,
    rearD:215,
    frontD:82,
    cranks:727,
    cass:337,
    chain:247,
    brakes:318,
    total:2290
  },
  {
    name:'Super Record 11',
    shifters:342,
    rearD:166,
    frontD:71,
    cranks:603,
    cass:177,
    chain:239,
    brakes:297,
    total:1895
  },
  {
    name:'Record 11',
    shifters:348,
    rearD:170,
    frontD:75,
    cranks:651,
    cass:201,
    chain:239,
    brakes:309,
    total:1993
  },
  {
    name:'Chours 11',
    shifters:350,
    rearD:183,
    frontD:76,
    cranks:683,
    cass:230,
    chain:250,
    brakes:302,
    total:2074
  },
  {
    name:'Centaur 11',
    shifters:373,
    rearD:230,
    frontD:103,
    cranks:875,
    cass:291,
    chain:256,
    brakes:325,
    total:2453
  },
];

export const rimElectronicShiftData :IBikePartsData[] = [
{
  name: "Dura-Ace Di2 R9150",
  shifters: 230,
  rearD: 197,
  frontD: 104,
  cranks: 614,
  cass: 193,
  chain: 247,
  brakes: 326,
  total: 1911
 },
 {
  name: "Ultegra Di2 R8050",
  shifters: 295,
  rearD: 240,
  frontD: 132,
  cranks: 674,
  cass: 251,
  chain: 257,
  brakes: 360,
  total: 2209
 },
 {
  name: "Dura-Ace Di2 9070",
  shifters: 237,
  rearD: 217,
  frontD: 114,
  cranks: 636,
  cass: 192,
  chain: 249,
  brakes: 294,
  total: 1939
 },
 {
  name: "Ultegra Di2 6870",
  shifters: 315,
  rearD: 271,
  frontD: 167,
  cranks: 694,
  cass: 251,
  chain: 260,
  brakes: 340,
  total: 2298
 },
 {
  name: "Red eTap AXS",
  shifters: 283,
  rearD: 299,
  frontD: 167,
  cranks: 561,
  cass: 211,
  chain: 255,
  brakes: 267,
  total: 2043
 },
 {
  name: "Force eTap AXS",
  shifters: 303,
  rearD: 326,
  frontD: 176,
  cranks: 744,
  cass: 266,
  chain: 269,
  brakes: 303,
  total: 2387
 },
 {
  name: "Red eTap",
  shifters: 260,
  rearD: 239,
  frontD: 187,
  cranks: 609,
  cass: 167,
  chain: 246,
  brakes: 262,
  total: 1970
 },
 {
  name: "Super Record EPS 12",
  shifters: 280,
  rearD: 234,
  frontD: 132,
  cranks: 618,
  cass: 266,
  chain: 220,
  brakes: 230,
  total: 1980
 },
 {
  name: "Super Record EPS 11",
  shifters: 262,
  rearD: 198,
  frontD: 127,
  cranks: 603,
  cass: 188,
  chain: 238,
  brakes: 311,
  total: 1927
 },
 {
  name: "Record EPS 11",
  shifters: 266,
  rearD: 203,
  frontD: 133,
  cranks: 651,
  cass: 211,
  chain: 238,
  brakes: 326,
  total: 2028
 },
]

export const diskMechanicalShift : IBikePartsData[] = [
  {
    name: "Dura-Ace R9120",
    shifters: 538,
    rearD: 158,
    frontD: 70,
    cranks: 614,
    cass: 193,
    chain: 247,
    brakes: 256,
    total: 2076
  },
  {
    name: "Ultegra R8020",
    shifters: 554,
    rearD: 200,
    frontD: 92,
    cranks: 674,
    cass: 251,
    chain: 257,
    brakes: 286,
    total: 2314
  },
  {
    name: "105 R7020",
    shifters: 610,
    rearD: 225,
    frontD: 95,
    cranks: 713,
    cass: 284,
    chain: 257,
    brakes: 294,
    total: 2478
  },
  {
    name: "GRX RX810 1x11",
    shifters: 572,
    rearD: 274,
    frontD: 0,
    cranks: 655,
    cass: 0,
    chain: 0,
    brakes: 280,
    total: 0
  },
  {
    name: "GRX RX810 2x11",
    shifters: 672,
    rearD: 274,
    frontD: 94,
    cranks: 722,
    cass: 0,
    chain: 0,
    brakes: 280,
    total: 0
  },
  {
    name: "Red 22 HRD",
    shifters: 748,
    rearD: 145,
    frontD: 69,
    cranks: 609,
    cass: 167,
    chain: 246,
    brakes: 0,
    total: 1984
  },
  {
    name: "Force 22 HRD",
    shifters: 765,
    rearD: 178,
    frontD: 79,
    cranks: 697,
    cass: 257,
    chain: 256,
    brakes: 0,
    total: 2232
  },
  {
    name: "Ekar 1x13",
    shifters: 420,
    rearD: 275,
    frontD: 0,
    cranks: 615,
    cass: 340,
    chain: 242,
    brakes: 205,
    total: 2097
  },
  {
    name: "Super Record Disc 12",
    shifters: 462,
    rearD: 181,
    frontD: 79,
    cranks: 618,
    cass: 266,
    chain: 220,
    brakes: 230,
    total: 2056
  },
  {
    name: "Record Disc 12",
    shifters: 463,
    rearD: 216,
    frontD: 81,
    cranks: 708,
    cass: 266,
    chain: 220,
    brakes: 230,
    total: 2184
  },
  {
    name: "Chorus Disc 12",
    shifters: 503,
    rearD: 215,
    frontD: 82,
    cranks: 727,
    cass: 337,
    chain: 247,
    brakes: 255,
    total: 2366
  },
  {
    name: "Rival 1 HRD",
    shifters: 749,
    rearD: 270,
    frontD: 0,
    cranks: 806,
    cass: 423,
    chain: 270,
    brakes: 0,
    total: 2518
  },
  {
    name: "Force 1 HRD",
    shifters: 770,
    rearD: 270,
    frontD: 0,
    cranks: 596,
    cass: 366,
    chain: 256,
    brakes: 0,
    total: 2258
  },
];

export const discElectronicShift : IBikePartsData[] = [
  {
    name: "Dura-Ace R9200 12-speed",
    shifters: 372,
    rearD: 217,
    frontD: 94,
    cranks: 685,
    cass: 230,
    chain: 248,
    brakes: 230,
    total: 2076
   },
   {
    name: "Ultegra R8100 12-speed",
    shifters: 403,
    rearD: 260,
    frontD: 111,
    cranks: 720,
    cass: 294,
    chain: 268,
    brakes: 282,
    total: 2338
   },
   {
    name: "Dura-Ace Di2 R9170",
    shifters: 320,
    rearD: 197,
    frontD: 104,
    cranks: 614,
    cass: 193,
    chain: 247,
    brakes: 256,
    total: 1931
   },
   {
    name: "Ultegra Di2 R8070",
    shifters: 360,
    rearD: 240,
    frontD: 132,
    cranks: 674,
    cass: 251,
    chain: 257,
    brakes: 286,
    total: 2200
   },
   {
    name: "GRX Di2 RX815 1x11",
    shifters: 565,
    rearD: 288,
    frontD: 0,
    cranks: 655,
    cass: 0,
    chain: 0,
    brakes: 280,
    total: 0
   },
   {
    name: "GRX Di2 RX815 2x11",
    shifters: 565,
    rearD: 288,
    frontD: 131,
    cranks: 722,
    cass: 0,
    chain: 0,
    brakes: 280,
    total: 0
   },
   {
    name: "Red eTap AXS HRD",
    shifters: 467,
    rearD: 299,
    frontD: 167,
    cranks: 561,
    cass: 211,
    chain: 255,
    brakes: 282,
    total: 2242
   },
   {
    name: "Force eTap AXS HRD",
    shifters: 476,
    rearD: 326,
    frontD: 176,
    cranks: 744,
    cass: 266,
    chain: 269,
    brakes: 346,
    total: 2603
   },
   {
    name: "Rival eTAP AXS HRD",
    shifters: 845,
    rearD: 366,
    frontD: 182,
    cranks: 844,
    cass: 282,
    chain: 266,
    brakes: 0,
    total: 2785
   },
   {
    name: "Red eTap HRD",
    shifters: 788,
    rearD: 239,
    frontD: 187,
    cranks: 609,
    cass: 167,
    chain: 246,
    brakes: 0,
    total: 2236
   },
   {
    name: "Super Record EPS??Disc 12",
    shifters: 381,
    rearD: 234,
    frontD: 132,
    cranks: 618,
    cass: 266,
    chain: 220,
    brakes: 236,
    total: 2087
   }
];
