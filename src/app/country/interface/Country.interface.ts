export interface Country {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    cioc?:        string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    demonyms?:    Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
    borders?:     string[];
    gini?:        { [key: string]: number };
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    BBD?: Aed;
    EUR?: Aed;
    SRD?: Aed;
    NAD?: Aed;
    ZAR?: Aed;
    GNF?: Aed;
    VUV?: Aed;
    WST?: Aed;
    AZN?: Aed;
    MVR?: Aed;
    XPF?: Aed;
    XCD?: Aed;
    PAB?: Aed;
    USD?: Aed;
    MKD?: Aed;
    DKK?: Aed;
    EGP?: Aed;
    CZK?: Aed;
    BSD?: Aed;
    UYU?: Aed;
    KMF?: Aed;
    CKD?: Aed;
    NZD?: Aed;
    CRC?: Aed;
    XOF?: Aed;
    STN?: Aed;
    HKD?: Aed;
    AUD?: Aed;
    MYR?: Aed;
    NPR?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    KPW?: Aed;
    MDL?: Aed;
    ZMW?: Aed;
    TOP?: Aed;
    PEN?: Aed;
    CVE?: Aed;
    KID?: Aed;
    PKR?: Aed;
    DJF?: Aed;
    KGS?: Aed;
    CHF?: Aed;
    KWD?: Aed;
    SCR?: Aed;
    GBP?: Aed;
    FJD?: Aed;
    YER?: Aed;
    XAF?: Aed;
    ANG?: Aed;
    ARS?: Aed;
    MGA?: Aed;
    ZWL?: Aed;
    GGP?: Aed;
    RON?: Aed;
    BDT?: Aed;
    JOD?: Aed;
    MZN?: Aed;
    ILS?: Aed;
    ERN?: Aed;
    IDR?: Aed;
    IMP?: Aed;
    JPY?: Aed;
    AFN?: Aed;
    AED?: Aed;
    MWK?: Aed;
    TRY?: Aed;
    BYN?: Aed;
    BAM?: BAM;
    SZL?: Aed;
    TMT?: Aed;
    ETB?: Aed;
    HUF?: Aed;
    NGN?: Aed;
    UAH?: Aed;
    HTG?: Aed;
    BWP?: Aed;
    GYD?: Aed;
    MUR?: Aed;
    GIP?: Aed;
    ISK?: Aed;
    NOK?: Aed;
    CLP?: Aed;
    KZT?: Aed;
    CNY?: Aed;
    MOP?: Aed;
    AMD?: Aed;
    BOB?: Aed;
    SDG?: BAM;
    VND?: Aed;
    BIF?: Aed;
    CAD?: Aed;
    COP?: Aed;
    LSL?: Aed;
    BMD?: Aed;
    GTQ?: Aed;
    UZS?: Aed;
    KYD?: Aed;
    GMD?: Aed;
    TVD?: Aed;
    BTN?: Aed;
    INR?: Aed;
    AWG?: Aed;
    PYG?: Aed;
    PGK?: Aed;
    JMD?: Aed;
    PLN?: Aed;
    RUB?: Aed;
    MRU?: Aed;
    DZD?: Aed;
    MAD?: Aed;
    CDF?: Aed;
    UGX?: Aed;
    MNT?: Aed;
    LAK?: Aed;
    BND?: Aed;
    SGD?: Aed;
    KES?: Aed;
    LKR?: Aed;
    DOP?: Aed;
    GEL?: Aed;
    THB?: Aed;
    NIO?: Aed;
    QAR?: Aed;
    TWD?: Aed;
    BRL?: Aed;
    SYP?: Aed;
    BZD?: Aed;
    FKP?: Aed;
    VES?: Aed;
    BHD?: Aed;
    AOA?: Aed;
    TND?: Aed;
    RWF?: Aed;
    TTD?: Aed;
    MXN?: Aed;
    KRW?: Aed;
    ALL?: Aed;
    SOS?: Aed;
    LRD?: Aed;
    MMK?: Aed;
    TZS?: Aed;
    IQD?: Aed;
    SHP?: Aed;
    LYD?: Aed;
    SLL?: Aed;
    RSD?: Aed;
    GHS?: Aed;
    SSP?: Aed;
    SEK?: Aed;
    FOK?: Aed;
    PHP?: Aed;
    SAR?: Aed;
    BGN?: Aed;
    KHR?: Aed;
    JEP?: Aed;
    IRR?: Aed;
    TJS?: Aed;
    OMR?: Aed;
    LBP?: Aed;
    SBD?: Aed;
    HNL?: Aed;
}

export interface Aed {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}

