import React from 'react'
import { IState, IAction, ActionTypes } from '../Utils/serviceInterfaces';

const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case ActionTypes.AUTH_USER:
            return {
                ...state,
                auth_user: action.payload
            }
        case ActionTypes.GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }
        case ActionTypes.GET_CUSTOMERS:
            return {
                ...state,
                customers: action.payload
            }
        case ActionTypes.GET_MISSING_DAYS:
            return {
                ...state,
                missingDays: action.payload
            }
        case ActionTypes.GET_PROJECTS:
            return {
                ...state,

            }
        case ActionTypes.SAVE_ACTIVITY:
            return {
                ...state,
                saved_activities: action.payload
            }
        case ActionTypes.CHANGE_DISABLED_CUSTOMER:
            return{
                ...state,
                disabled: action.payload
            }
        case ActionTypes.ADD_ACT:
            return{
                ...state,
                act:[...state.act,action.payload]
            }
        case ActionTypes.REMOVE_ACT:
            return {
                ...state,
                act:action.payload
            }
        case ActionTypes.UPDATE_MISSING_DAY:
            return{
                ...state,
                missingDays:action.payload
            }
        default:
            return state;
    }
}

const initialValues: IState = {
    act:[
    ],
    activities: {
        keyValuePairs: [
            {
                key: "1",
                value: "Administrative",
                req: "0"
            },
            {
                key: "2",
                value: "Sales",
                req: "1"
            },
            {
                key: "35",
                value: "Pre-Sales",
                req: "1"
            },
            {
                key: "3",
                value: "Marketing",
                req: "0"
            },
            {
                key: "4",
                value: "PS/Analysis",
                req: "2"
            },
            {
                key: "5",
                value: "PS/Design",
                req: "2"
            },
            {
                key: "6",
                value: "PS/Development",
                req: "2"
            },
            {
                key: "7",
                value: "PS/Testing&Test Development",
                req: "2"
            },
            {
                key: "34",
                value: "PS/Offshore Internal  Testing",
                req: "2"
            },
            {
                key: "8",
                value: "PS/Deployment",
                req: "2"
            },
            {
                key: "32",
                value: "PS/UAT Development",
                req: "2"
            },
            {
                key: "9",
                value: "PS/Documentation",
                req: "2"
            },
            {
                key: "10",
                value: "PS/Maintenance&Support",
                req: "2"
            },
            {
                key: "19",
                value: "PS/Project Management",
                req: "2"
            },
            {
                key: "20",
                value: "PS/Project Meeting",
                req: "2"
            },
            {
                key: "25",
                value: "PS/Migration&Integration",
                req: "2"
            },
            {
                key: "29",
                value: "PS/Review Processes",
                req: "2"
            },
            {
                key: "26",
                value: "PS/Issue Management",
                req: "2"
            },
            {
                key: "11",
                value: "Other",
                req: "0"
            },
            {
                key: "18",
                value: "Approved Absence",
                req: "0"
            },
            {
                key: "33",
                value: "Submitted Absence Request",
                req: "0"
            },
            {
                key: "21",
                value: "LO/CodeWalk",
                req: "2"
            },
            {
                key: "27",
                value: "LO/Project Training",
                req: "2"
            },
            {
                key: "22",
                value: "LO/Exam",
                req: "0"
            },
            {
                key: "23",
                value: "LO/Seminar",
                req: "0"
            },
            {
                key: "24",
                value: "LO/Training",
                req: "0"
            }
        ],
        hasError: false
    },
    auth_user: {
        authenticated: false,
        fullName: "",
        hasError: false,
        missingActivityCount: 0
    },
    disabled:true,
    user:{
        username:"",
        password:""
    },
    customers: {
        hasError: false,
        keyValuePairs: [
            {
                key: "98",
                value: " Diğer"
            },
            {
                key: "199",
                value: "Access Bank Nigeria"
            },
            {
                key: "30",
                value: "Advantage"
            },
            {
                key: "134",
                value: "Ahli United Bank"
            },
            {
                key: "195",
                value: "Airplus"
            },
            {
                key: "51",
                value: "AKBANK"
            },
            {
                key: "155",
                value: "Aktifbank"
            },
            {
                key: "193",
                value: "AkYatırım"
            },
            {
                key: "128",
                value: "Al Watany Bank of Egypt"
            },
            {
                key: "178",
                value: "AlRajhi Capital"
            },
            {
                key: "194",
                value: "AM Bank"
            },
            {
                key: "91",
                value: "Anadolu Hayat Emeklilik"
            },
            {
                key: "24",
                value: "Arçelik"
            },
            {
                key: "50",
                value: "Arçelik - Çayırova"
            },
            {
                key: "54",
                value: "Arçelik-Arctic"
            },
            {
                key: "89",
                value: "Assan"
            },
            {
                key: "113",
                value: "Asya Katılım Bankası"
            },
            {
                key: "164",
                value: "AXA Gulf"
            },
            {
                key: "74",
                value: "B&L Risk Yönetimi"
            },
            {
                key: "173",
                value: "Bahrain Islamic Bank"
            },
            {
                key: "90",
                value: "bahsedeger.com"
            },
            {
                key: "176",
                value: "Bangkok Bank Public Company Limited (PCL)"
            },
            {
                key: "177",
                value: "Bank Al Bilad"
            },
            {
                key: "133",
                value: "Bank Dhofar"
            },
            {
                key: "179",
                value: "Bank of Cyprus"
            },
            {
                key: "171",
                value: "Bank Windhoek"
            },
            {
                key: "168",
                value: "Banque Centrale Populaire (BCP)"
            },
            {
                key: "160",
                value: "Banque Saudi Fransi"
            },
            {
                key: "188",
                value: "Barclaycard"
            },
            {
                key: "138",
                value: "Barclays Bank PJSC"
            },
            {
                key: "65",
                value: "BİMAR"
            },
            {
                key: "72",
                value: "Bizimgaz"
            },
            {
                key: "151",
                value: "BKM"
            },
            {
                key: "58",
                value: "BMS"
            },
            {
                key: "165",
                value: "BNP Paribas"
            },
            {
                key: "55",
                value: "Borusan"
            },
            {
                key: "148",
                value: "BP"
            },
            {
                key: "53",
                value: "BP- Pharos"
            },
            {
                key: "70",
                value: "Brisa"
            },
            {
                key: "60",
                value: "BristolMyersSquibb"
            },
            {
                key: "185",
                value: "BSF KSA"
            },
            {
                key: "75",
                value: "BSHG"
            },
            {
                key: "146",
                value: "Bupa Arabia"
            },
            {
                key: "183",
                value: "Bupa Saudi Arabia Insurance"
            },
            {
                key: "156",
                value: "Burgan Bank"
            },
            {
                key: "182",
                value: "Capital Bank CRM"
            },
            {
                key: "190",
                value: "Capital Bank of Jordan"
            },
            {
                key: "64",
                value: "CargoTurk"
            },
            {
                key: "102",
                value: "CarreFour"
            },
            {
                key: "170",
                value: "Cembra Money Bank"
            },
            {
                key: "147",
                value: "Coca Cola"
            },
            {
                key: "140",
                value: "Commercial Bank of Africa"
            },
            {
                key: "83",
                value: "Contact Plus"
            },
            {
                key: "186",
                value: "Co-Operative Bank Kenya"
            },
            {
                key: "152",
                value: "D&R"
            },
            {
                key: "49",
                value: "DanoneSA"
            },
            {
                key: "45",
                value: "DataExpert"
            },
            {
                key: "48",
                value: "Denizbank - ADK"
            },
            {
                key: "25",
                value: "Denizbank A.Ş"
            },
            {
                key: "76",
                value: "Denizbank AG"
            },
            {
                key: "162",
                value: "Diamond Bank"
            },
            {
                key: "106",
                value: "Digiturk"
            },
            {
                key: "36",
                value: "Doğan Online"
            },
            {
                key: "192",
                value: "Doğuş Teknoloji"
            },
            {
                key: "135",
                value: "Dubai Financial Market"
            },
            {
                key: "119",
                value: "Dubai Islamic Bank"
            },
            {
                key: "104",
                value: "DubaiBank"
            },
            {
                key: "82",
                value: "EGOPLAST"
            },
            {
                key: "99",
                value: "e-Store"
            },
            {
                key: "122",
                value: "Etisalat"
            },
            {
                key: "95",
                value: "Evyap"
            },
            {
                key: "161",
                value: "FCMB"
            },
            {
                key: "196",
                value: "FibaBanka"
            },
            {
                key: "68",
                value: "Final Yayıncılık A.Ş."
            },
            {
                key: "97",
                value: "Finansbank"
            },
            {
                key: "67",
                value: "Fintek"
            },
            {
                key: "127",
                value: "First Abu Dhabi Bank"
            },
            {
                key: "187",
                value: "First Bank Nigeria"
            },
            {
                key: "87",
                value: "Ford"
            },
            {
                key: "107",
                value: "Garanti Emeklilik"
            },
            {
                key: "108",
                value: "Garanti Emeklilik"
            },
            {
                key: "38",
                value: "GEMSAN"
            },
            {
                key: "157",
                value: "Generali Sigorta"
            },
            {
                key: "169",
                value: "Ghana Commercial Bank"
            },
            {
                key: "42",
                value: "GIMA"
            },
            {
                key: "154",
                value: "Global Bilgi"
            },
            {
                key: "144",
                value: "GTBank"
            },
            {
                key: "129",
                value: "Gulf International Bank"
            },
            {
                key: "71",
                value: "Halkbank"
            },
            {
                key: "201",
                value: "HBL"
            },
            {
                key: "159",
                value: "Hurriyet"
            },
            {
                key: "149",
                value: "ING Bank"
            },
            {
                key: "123",
                value: "Ithmaar Bank"
            },
            {
                key: "153",
                value: "İpragaz"
            },
            {
                key: "109",
                value: "İstanbul Mortgage"
            },
            {
                key: "100",
                value: "İTÜ Geliştirme Vakfı"
            },
            {
                key: "141",
                value: "JIB - Jordan Islamic Bank"
            },
            {
                key: "203",
                value: "JS Bank"
            },
            {
                key: "23",
                value: "JTI "
            },
            {
                key: "92",
                value: "Koleksiyon "
            },
            {
                key: "66",
                value: "Kunart"
            },
            {
                key: "88",
                value: "KuveytTurk"
            },
            {
                key: "125",
                value: "Kuwait Financial House"
            },
            {
                key: "21",
                value: "KVK A.Ş"
            },
            {
                key: "191",
                value: "LC Waikiki"
            },
            {
                key: "118",
                value: "Lebanon & Gulf Bank"
            },
            {
                key: "120",
                value: "Lebanon and Gulf Bank"
            },
            {
                key: "35",
                value: "MarSa"
            },
            {
                key: "132",
                value: "Mashreq Bank PSJC"
            },
            {
                key: "121",
                value: "Masraf Al Rayan"
            },
            {
                key: "163",
                value: "Mauritius Commercial Bank"
            },
            {
                key: "181",
                value: "MedGulf KSA"
            },
            {
                key: "57",
                value: "Medyanet"
            },
            {
                key: "73",
                value: "Millenium Bank"
            },
            {
                key: "184",
                value: "Misr Life Insurance"
            },
            {
                key: "77",
                value: "Mutfak Rehberi"
            },
            {
                key: "166",
                value: "National Bank of Bahrain"
            },
            {
                key: "130",
                value: "National Bank of Kuwait-NBK"
            },
            {
                key: "172",
                value: "National Investment Bank"
            },
            {
                key: "131",
                value: "NCB Capital"
            },
            {
                key: "52",
                value: "NETEX"
            },
            {
                key: "46",
                value: "Nissan Otomotiv A.Ş."
            },
            {
                key: "116",
                value: "NSN"
            },
            {
                key: "79",
                value: "OPET"
            },
            {
                key: "63",
                value: "Orta Anadolu A.Ş."
            },
            {
                key: "17",
                value: "öz-iş Group"
            },
            {
                key: "40",
                value: "Petrol Ofisi A.Ş"
            },
            {
                key: "85",
                value: "Pfizer"
            },
            {
                key: "78",
                value: "Pharos"
            },
            {
                key: "103",
                value: "Praktiker Yapı Marketleri A.Ş."
            },
            {
                key: "56",
                value: "Procter & Gamble"
            },
            {
                key: "136",
                value: "Qatar Development Bank"
            },
            {
                key: "145",
                value: "Qatar First Bank"
            },
            {
                key: "180",
                value: "Riyadh Bank"
            },
            {
                key: "200",
                value: "Royal Bank of Scotland"
            },
            {
                key: "202",
                value: "SAAB"
            },
            {
                key: "137",
                value: "SAIB Egypt"
            },
            {
                key: "139",
                value: "Saudi Hollandi Bank - AIMIA"
            },
            {
                key: "126",
                value: "Saudi Investment Bank"
            },
            {
                key: "124",
                value: "SBM-State Bank of Mauritius"
            },
            {
                key: "34",
                value: "ShowTv"
            },
            {
                key: "47",
                value: "Sitebank"
            },
            {
                key: "84",
                value: "Soyak Holding"
            },
            {
                key: "37",
                value: "Şeker Yatırım"
            },
            {
                key: "114",
                value: "TAD Avukatlık"
            },
            {
                key: "28",
                value: "Takasbank"
            },
            {
                key: "93",
                value: "Tariş Zeytin"
            },
            {
                key: "111",
                value: "TAV"
            },
            {
                key: "197",
                value: "Tawuniya"
            },
            {
                key: "158",
                value: "Tchibo"
            },
            {
                key: "115",
                value: "TEB"
            },
            {
                key: "39",
                value: "Technology Transformation Group"
            },
            {
                key: "69",
                value: "TEKFENBANK"
            },
            {
                key: "101",
                value: "TMSF"
            },
            {
                key: "59",
                value: "ToyotaSa"
            },
            {
                key: "27",
                value: "Turkcell A.Ş"
            },
            {
                key: "94",
                value: "Türkiye Finans"
            },
            {
                key: "117",
                value: "TüvTurk"
            },
            {
                key: "112",
                value: "Vakıfbank"
            },
            {
                key: "174",
                value: "VeriPark BG"
            },
            {
                key: "142",
                value: "VeriPark Gulf"
            },
            {
                key: "13",
                value: "Veripark TR"
            },
            {
                key: "175",
                value: "VeriPark UK"
            },
            {
                key: "198",
                value: "VeriPark USA"
            },
            {
                key: "41",
                value: "Wunderman"
            },
            {
                key: "150",
                value: "Yandex"
            },
            {
                key: "26",
                value: "Yapı Kredi Bankası"
            },
            {
                key: "29",
                value: "Yapı Kredi Yatırım"
            },
            {
                key: "105",
                value: "Yemeksepeti"
            },
            {
                key: "189",
                value: "ZANACO Bank"
            },
            {
                key: "167",
                value: "Zenith Bank"
            },
            {
                key: "80",
                value: "Ziraat Bankası"
            }
        ]
    },
    missingDays: {
        days: [
            new Date(),
        ],
        hasError: false
    },
    saved_activities: {
        ActivityCustomer:"",
        ActivityDay:"",
        ActivityDescription:"",
        ActivityProject:"",
        ActivitySubProject:"",
        ActivityType:"",
        Hour:""
    },
}

export const ActivityContext = React.createContext<IState | any>(initialValues);

export const ActivityProvider = ({ children }: JSX.ElementChildrenAttribute): JSX.Element => {
    const [state, dispatch] = React.useReducer(reducer, initialValues);
    return <ActivityContext.Provider value={{ state, dispatch }}>{children}</ActivityContext.Provider>
}

