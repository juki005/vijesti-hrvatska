// KLIK Aggregator - Shared Multi-Page JS Engine

// RSS Sources configuration
const RSS_SOURCES = [
    { id: 'index', name: 'Index.hr', url: 'https://www.index.hr/rss', color: 'bg-red-600 text-white', logoText: 'I' },
    { id: '24sata', name: '24sata', url: 'https://www.24sata.hr/feeds/najnovije.xml', color: 'bg-amber-500 text-black', logoText: '24' },
    { id: 'vecernji', name: 'Večernji list', url: 'https://www.vecernji.hr/feeds/', color: 'bg-red-600 text-white', logoText: 'V' },
    { id: 'tportal', name: 'Tportal', url: 'https://www.tportal.hr/rss', color: 'bg-cyan-600 text-white', logoText: 'T' },
    { id: 'dalmacijadanas', name: 'Dalmacija Danas', url: 'https://www.dalmacijadanas.hr/feed/', color: 'bg-[#D13D1F] text-white', logoText: 'DD' },
    { id: 'slobodnadalmacija', name: 'Slobodna Dalmacija', url: 'https://slobodnadalmacija.hr/feed/', color: 'bg-[#D13D1F] text-white', logoText: 'SD' },
    { id: 'sib', name: 'SiB.hr', url: 'https://sib.net.hr/feed/', color: 'bg-red-600 text-white', logoText: 'SIB' },
    { id: 'fiuman', name: 'Fiuman.hr', url: 'https://fiuman.hr/feed/', color: 'bg-blue-600 text-white', logoText: 'F' },
    { id: 'regionalexpress', name: 'Regional Express', url: 'http://www.regionalexpress.hr/rss', color: 'bg-yellow-500 text-black', logoText: 'RE' },
    { id: 'zagrebinfo', name: 'Zagreb.info', url: 'https://www.zagreb.info/feed/', color: 'bg-blue-700 text-white', logoText: 'ZI' },
    { id: 'sportnet', name: 'Sportnet.hr', url: 'https://sportnet.hr/rss/', color: 'bg-emerald-600 text-white', logoText: 'SN' },
    { id: 'bug', name: 'Bug.hr', url: 'https://www.bug.hr/rss', color: 'bg-cyan-700 text-white', logoText: 'BUG' },
    { id: 'poslovni', name: 'Poslovni dnevnik', url: 'https://www.poslovni.hr/feed', color: 'bg-amber-600 text-white', logoText: 'PD' },
    { id: 'autoportal', name: 'Autoportal.hr', url: 'https://autoportal.hr/feed/', color: 'bg-orange-600 text-white', logoText: 'AP' },
    { id: 'journal', name: 'Journal.hr', url: 'https://www.journal.hr/feed/', color: 'bg-pink-600 text-white', logoText: 'J' },
    { id: 'punkufer', name: 'Punkufer.hr', url: 'https://punkufer.dnevnik.hr/rss', color: 'bg-pink-500 text-white', logoText: 'PK' },
    { id: 'jutarnji', name: 'Jutarnji list', url: 'https://www.jutarnji.hr/feed', color: 'bg-blue-900 text-white', logoText: 'JL' },
    { id: 'telegram', name: 'Telegram.hr', url: 'https://www.telegram.hr/feed/', color: 'bg-[#005c8a] text-white', logoText: 'TG' },
    { id: 'dnevnik', name: 'Dnevnik.hr', url: 'https://dnevnik.hr/index.rss', color: 'bg-red-700 text-white', logoText: 'DN' },
    { id: 'monitor', name: 'Monitor.hr', url: 'https://www.monitor.hr/feed/', color: 'bg-[#C3151B] text-white', logoText: 'M' },
    { id: 'n1info', name: 'N1 Info', url: 'https://n1info.hr/feed/', color: 'bg-blue-800 text-white', logoText: 'N1' }
];


// Top portals listing for the Portal Directory Grid
const TOP_PORTALS = [
    { name: 'Index.hr', url: 'https://www.index.hr', domain: 'index.hr' },
    { name: '24sata', url: 'https://www.24sata.hr', domain: '24sata.hr' },
    { name: 'Večernji list', url: 'https://www.vecernji.hr', domain: 'vecernji.hr' },
    { name: 'Jutarnji list', url: 'https://www.jutarnji.hr', domain: 'jutarnji.hr' },
    { name: 'Tportal', url: 'https://www.tportal.hr', domain: 'tportal.hr' },
    { name: 'Telegram', url: 'https://www.telegram.hr', domain: 'telegram.hr' },
    { name: 'Slobodna Dalmacija', url: 'https://slobodnadalmacija.hr', domain: 'slobodnadalmacija.hr' },
    { name: 'N1 Info', url: 'https://n1info.hr', domain: 'n1info.hr' },
    { name: 'Dnevnik.hr', url: 'https://dnevnik.hr', domain: 'dnevnik.hr' },
    { name: 'Net.hr', url: 'https://net.hr', domain: 'net.hr' },
    { name: 'Dnevno.hr', url: 'https://www.dnevno.hr', domain: 'dnevno.hr' },
    { name: 'Novi list', url: 'https://www.novilist.hr', domain: 'novilist.hr' }
];



const CATEGORIZED_PORTALS = {
    "nacionalni": [
        {
            "name": "Teleskop",
            "url": "https://teleskop.hr/",
            "domain": "teleskop.hr",
            "description": "Političke analize i medijski osvrti"
        },
        {
            "name": "Večernji.hr",
            "url": "https://www.vecernji.hr/",
            "domain": "vecernji.hr",
            "description": "Portal Večernjeg lista"
        },
        {
            "name": "Tportal.hr",
            "url": "https://www.tportal.hr/",
            "domain": "tportal.hr",
            "description": "Internetski portal u izdanju Hrvatskog telekoma"
        },
        {
            "name": "Telegram.hr",
            "url": "https://www.telegram.hr/",
            "domain": "telegram.hr",
            "description": "Portal za društvena i kulturna pitanja"
        },
        {
            "name": "SlobodnaDalmacija.hr",
            "url": "https://slobodnadalmacija.hr/",
            "domain": "slobodnadalmacija.hr",
            "description": "Portal Slobodne Dalmacije"
        },
        {
            "name": "RTL.hr",
            "url": "https://www.rtl.hr/",
            "domain": "rtl.hr",
            "description": "Portal televizije RTL Hrvatska"
        },
        {
            "name": "NoviList.hr",
            "url": "https://www.novilist.hr/",
            "domain": "novilist.hr",
            "description": "Portal dnevnog lista iz Rijeke"
        },
        {
            "name": "Net.hr",
            "url": "https://net.hr/",
            "domain": "net.hr",
            "description": "Tabloidni portal"
        },
        {
            "name": "Narod.hr",
            "url": "https://narod.hr/",
            "domain": "narod.hr",
            "description": "News portal udruge U ime obitelji"
        },
        {
            "name": "N1info.hr",
            "url": "https://n1info.hr/",
            "domain": "n1info.hr",
            "description": "Portal N1 TV kanal"
        },
        {
            "name": "Jutarnji.hr",
            "url": "https://www.jutarnji.hr/",
            "domain": "jutarnji.hr",
            "description": "Portal Jutarnjeg lista"
        },
        {
            "name": "Index oglasi",
            "url": "https://www.index.hr/oglasi/",
            "domain": "index.hr",
            "description": ""
        },
        {
            "name": "Index.hr/poslovi",
            "url": "https://www.index.hr/oglasi/poslovi",
            "domain": "index.hr",
            "description": "Poslovi na Index oglasniku"
        },
        {
            "name": "Index.hr",
            "url": "https://www.index.hr/",
            "domain": "index.hr",
            "description": "Najposjećeniji internetski portal"
        },
        {
            "name": "Index",
            "url": "https://www.index.hr/oglasi/auto-moto",
            "domain": "index.hr",
            "description": ""
        },
        {
            "name": "HRT.hr",
            "url": "https://www.hrt.hr/",
            "domain": "hrt.hr",
            "description": "Portal Hrvatske radiotelevizije"
        },
        {
            "name": "Dobra-hrana.hr",
            "url": "https://www.jutarnji.hr/dobrahrana",
            "domain": "jutarnji.hr",
            "description": "Gastronomski portal"
        },
        {
            "name": "Dnevno.hr",
            "url": "https://www.dnevno.hr/",
            "domain": "dnevno.hr",
            "description": "Novinarski portal"
        },
        {
            "name": "Dnevnik",
            "url": "https://dnevnik.hr/",
            "domain": "dnevnik.hr",
            "description": ""
        },
        {
            "name": "Direktno.hr",
            "url": "https://direktno.hr/?home",
            "domain": "direktno.hr",
            "description": "internetski portal okrenut državotvornoj javnosti"
        },
        {
            "name": "24sata",
            "url": "https://www.24sata.hr/",
            "domain": "24sata.hr",
            "description": ""
        },
        {
            "name": "Danas.hr",
            "url": "https://danas.hr/",
            "domain": "danas.hr",
            "description": "Informativni portal RTL-a"
        }
    ],
    "lokalni": {
        "zagreb": [
            {
                "name": "ZOO.hr",
                "url": "https://zoo.hr/",
                "domain": "zoo.hr",
                "description": "Zološki vrt Zagreb"
            },
            {
                "name": "ZET.hr",
                "url": "https://www.zet.hr/",
                "domain": "zet.hr",
                "description": "Javni prijevoz u Zagrebu"
            },
            {
                "name": "ZagrebOnline.hr",
                "url": "https://zagrebonline.hr/",
                "domain": "zagrebonline.hr",
                "description": "Portal iz Zagreba i Zagrebačke županije"
            },
            {
                "name": "Zagrebačka burza",
                "url": "https://zse.hr/",
                "domain": "zse.hr",
                "description": "Hrvatska burza vrijednosnih papira"
            },
            {
                "name": "Zagrebačka banka",
                "url": "https://www.zaba.hr/home/",
                "domain": "zaba.hr",
                "description": ""
            },
            {
                "name": "Zagrebancija.com",
                "url": "https://www.zagrebancija.com/",
                "domain": "zagrebancija.com",
                "description": "Portal o Zagrebu"
            },
            {
                "name": "Zagreb.info",
                "url": "https://www.zagreb.info/",
                "domain": "zagreb.info",
                "description": "Zagrebački portal"
            },
            {
                "name": "Zagreb.hr",
                "url": "https://www.zagreb.hr/",
                "domain": "zagreb.hr",
                "description": "službeni portal grada Zagreba"
            },
            {
                "name": "Zagreb-airport.hr",
                "url": "https://www.zagreb-airport.hr/",
                "domain": "zagreb-airport.hr",
                "description": "Zračna luka Franjo Tuđman Zagreb"
            },
            {
                "name": "SamoborskiGlasnik.net",
                "url": "http://www.samoborskiglasnik.net/",
                "domain": "samoborskiglasnik.net",
                "description": "Portal Samobora i Svete Nedjelje"
            },
            {
                "name": "Privredna banka Zagreb",
                "url": "https://www.pbz.hr/",
                "domain": "pbz.hr",
                "description": ""
            },
            {
                "name": "Nsk.hr",
                "url": "https://nsk.hr/",
                "domain": "nsk.hr",
                "description": "Nacionalna i sveučilišna knjižnica u Zagrebu"
            },
            {
                "name": "MojZagreb.info",
                "url": "https://mojzagreb.info/",
                "domain": "mojzagreb.info",
                "description": "Zagrebački dnevno-informativni portal"
            },
            {
                "name": "Kgz.hr",
                "url": "https://www.kgz.hr/hr",
                "domain": "kgz.hr",
                "description": "Knjižnice grada Zagreba"
            },
            {
                "name": "Jabukatv.hr",
                "url": "https://jabukatv.hr/",
                "domain": "jabukatv.hr",
                "description": "Otvorena TV Zagreb"
            },
            {
                "name": "GNKDinamo.hr",
                "url": "https://gnkdinamo.hr/",
                "domain": "gnkdinamo.hr",
                "description": "Službene web stranice nogometnog kluba iz Zagreba"
            },
            {
                "name": "AntenaZagreb.hr",
                "url": "https://www.antenazagreb.hr/",
                "domain": "antenazagreb.hr",
                "description": ""
            },
            {
                "name": "AKZ.hr",
                "url": "https://www.akz.hr/",
                "domain": "akz.hr",
                "description": "Autobusni kolodvor Zagreb"
            }
        ],
        "dalmacija": [
        {
            "name": "Radio Imotski",
            "url": "https://radioimotski.hr/",
            "domain": "radioimotski.hr",
            "description": "Lokalni vijesti iz Imotskog i zagore"
        },
        {
            "name": "Zadarski.hr",
            "url": "https://zadarski.slobodnadalmacija.hr/",
            "domain": "zadarski.hr",
            "description": "Vodeći portal Zadarske županije"
        },
        {
            "name": "Antena Zadar",
            "url": "https://www.antenazadar.hr/",
            "domain": "antenazadar.hr",
            "description": "Lokalni informativni portal za Zadar i regiju"
        },
            {
                "name": "Šibenik.in",
                "url": "https://www.sibenik.in/",
                "domain": "sibenik.in",
                "description": "Portal Šibensko-kninske županije"
            },
            {
                "name": "Zadarski.hr",
                "url": "https://zadarski.slobodnadalmacija.hr/zadar",
                "domain": "zadarski.slobodnadalmacija.hr",
                "description": "Vijesti iz Zadra i Zadarske županije/a> Zagorje.com - Portal iz Krapinsko-zagorske županije"
            },
            {
                "name": "Zadar.hr",
                "url": "https://www.zadar.hr/",
                "domain": "zadar.hr",
                "description": ""
            },
            {
                "name": "Zadar-airport.hr",
                "url": "https://www.zadar-airport.hr/",
                "domain": "zadar-airport.hr",
                "description": "Zračna luka Zadar"
            },
            {
                "name": "Ured za protokol",
                "url": "https://vlada.gov.hr/o-vladi/kako-funkcionira-vlada/uredi-vlade/ured-za-protokol/32000?lang=hr",
                "domain": "vlada.gov.hr",
                "description": ""
            },
            {
                "name": "Split.hr",
                "url": "https://split.hr/",
                "domain": "split.hr",
                "description": ""
            },
            {
                "name": "Split.com.hr",
                "url": "https://www.split.com.hr/",
                "domain": "split.com.hr",
                "description": "Splitski portal"
            },
            {
                "name": "Split-airport.hr",
                "url": "https://www.split-airport.hr/",
                "domain": "split-airport.hr",
                "description": "Zračna luka Split"
            },
            {
                "name": "RadioDalmacija.hr",
                "url": "https://www.radiodalmacija.hr/",
                "domain": "radiodalmacija.hr",
                "description": ""
            },
            {
                "name": "Portal.hr",
                "url": "https://www.portal.hr/",
                "domain": "portal.hr",
                "description": "Vijesti iz Grada Kaštela"
            },
            {
                "name": "Mok.hr",
                "url": "https://mok.hr/",
                "domain": "mok.hr",
                "description": "Portal grada Šibenika i okolice"
            },
            {
                "name": "Hajduk.hr",
                "url": "https://hajduk.hr/",
                "domain": "hajduk.hr",
                "description": "Službene web stranice nogometnog kluba iz Splita"
            },
            {
                "name": "Ferata.hr",
                "url": "https://www.ferata.hr/",
                "domain": "ferata.hr",
                "description": "Sinjski portal"
            },
            {
                "name": "eZadar.net.hr",
                "url": "https://ezadar.hr/",
                "domain": "ezadar.hr",
                "description": "Zadarski portal"
            },
            {
                "name": "Dubrovnik.hr",
                "url": "https://www.dubrovnik.hr/",
                "domain": "dubrovnik.hr",
                "description": ""
            },
            {
                "name": "DubrovačkiNet.hr",
                "url": "https://www.dubrovniknet.hr/",
                "domain": "dubrovniknet.hr",
                "description": "Gradski portal Dubrovnika"
            },
            {
                "name": "DalmatinskiPortal.hr",
                "url": "https://dalmatinskiportal.hr/",
                "domain": "dalmatinskiportal.hr",
                "description": "Vijesti iz Splita i Dalmacije"
            },
            {
                "name": "DalmacijaNews.hr",
                "url": "https://www.dalmacijanews.hr/",
                "domain": "dalmacijanews.hr",
                "description": "Hrvatski neovisni portal"
            },
            {
                "name": "DalmacijaDanas.h",
                "url": "https://www.dalmacijadanas.hr/",
                "domain": "dalmacijadanas.hr",
                "description": "Splitsko dalmatinski portal"
            },
            {
                "name": "Brač-otok.com",
                "url": "https://brac-otok.com/portal",
                "domain": "brac-otok.com",
                "description": "Portal otoka Brača"
            },
            {
                "name": "AK-Split.hr",
                "url": "https://www.ak-split.hr/",
                "domain": "ak-split.hr",
                "description": "Autobusni kolodvor Split"
            },
            {
                "name": "Airport-dubrovnik.hr",
                "url": "https://www.dbv.hr/",
                "domain": "dbv.hr",
                "description": "Zračna luka Dubrovnik"
            },
            {
                "name": "057info.hr",
                "url": "https://www.057info.hr/",
                "domain": "057info.hr",
                "description": "Portal zadarskog radija"
            },
            {
                "name": "Zadarski list",
                "url": "https://www.zadarskilist.hr/",
                "domain": "zadarskilist.hr",
                "description": "Prve i jedine dnevne novine u Zadarskoj županiji"
            }
        ],
        "slavonija": [
        {
            "name": "Baranja info",
            "url": "https://www.baranjainfo.hr/",
            "domain": "baranjainfo.hr",
            "description": "Informativni portal za regiju Baranje"
        },
        {
            "name": "Osijek News",
            "url": "https://osijeknews.hr/",
            "domain": "osijeknews.hr",
            "description": "Lokalni portal grada Osijeka"
        },
            {
                "name": "slavonijaInfo.com",
                "url": "https://slavonijainfo.com/",
                "domain": "slavonijainfo.com",
                "description": "Portal Slavonije i Baranje"
            },
            {
                "name": "Sib.net.hr",
                "url": "https://sib.net.hr/",
                "domain": "sib.net.hr",
                "description": "Portal Udruge Slavonija i Baranja"
            },
            {
                "name": "OsijekExpress.com",
                "url": "https://www.osijekexpress.com/",
                "domain": "osijekexpress.com",
                "description": "Vijesti iz Osijeka"
            },
            {
                "name": "Osijek031.com",
                "url": "https://www.osijek031.com/",
                "domain": "osijek031.com",
                "description": "Osječki informativni portal"
            },
            {
                "name": "Osijek.hr",
                "url": "https://www.osijek.hr/",
                "domain": "osijek.hr",
                "description": "službeni portal grada Osijeka"
            },
            {
                "name": "Osijek-airport.hr",
                "url": "https://osijek-airport.hr/",
                "domain": "osijek-airport.hr",
                "description": "Zračna luka Osijek"
            },
            {
                "name": "Hrv.hr",
                "url": "https://www.hrv.hr/",
                "domain": "hrv.hr",
                "description": "Hrvatski radio Vukovar"
            },
            {
                "name": "031portal.hr",
                "url": "https://031portal.hr/",
                "domain": "031portal.hr",
                "description": "Vijesti iz Osijeka i osječko-baranjske županije"
            },
            {
                "name": "Glas Slavonije",
                "url": "http://www.glas-slavonije.hr/",
                "domain": "glas-slavonije.hr",
                "description": "Najznačajniji regionalni dnevni list i portal u Slavoniji"
            },
            {
                "name": "Požega.eu",
                "url": "https://pozega.eu/",
                "domain": "pozega.eu",
                "description": "Informativni portal grada Požege i županije"
            }
        ],
        "istra-i-kvarner": [
        {
            "name": "Istra24",
            "url": "https://istra24.hr/",
            "domain": "istra24.hr",
            "description": "Neovisni istraživački portal za Istru"
        },
            {
                "name": "RijekaDanas.com",
                "url": "https://www.rijekadanas.com/",
                "domain": "rijekadanas.com",
                "description": "riječki internetski dnevnik"
            },
            {
                "name": "Rijeka.hr",
                "url": "https://www.rijeka.hr/",
                "domain": "rijeka.hr",
                "description": ""
            },
            {
                "name": "Rijeka-airport.hr",
                "url": "https://www.rijeka-airport.hr/",
                "domain": "rijeka-airport.hr",
                "description": "Zračna luka Rijeka"
            },
            {
                "name": "Pula.hr",
                "url": "https://www.pula.hr/hr/",
                "domain": "pula.hr",
                "description": ""
            },
            {
                "name": "Parentium.com",
                "url": "https://www.parentium.com/",
                "domain": "parentium.com",
                "description": "Vijesti iz Poreča i šire"
            },
            {
                "name": "Obrtni Registar",
                "url": "https://pretrazivac-obrta.gov.hr/pretraga",
                "domain": "pretrazivac-obrta.gov.hr",
                "description": "Portal obrtnog registra u RH"
            },
            {
                "name": "Labin.com",
                "url": "https://www.labin.com/",
                "domain": "labin.com",
                "description": "Vijesti iz Labina"
            },
            {
                "name": "KulturIstra.hr",
                "url": "https://kulturistra.hr/",
                "domain": "kulturistra.hr",
                "description": "Mjesto za kulturu Istarske županije"
            },
            {
                "name": "iPazin.net",
                "url": "https://www.ipazin.net/",
                "domain": "ipazin.net",
                "description": "Vijesti iz Pazina i Središnje Istre"
            },
            {
                "name": "HNK-Rijeka.hr",
                "url": "https://nk-rijeka.hr/",
                "domain": "nk-rijeka.hr",
                "description": "Mrežne stranice riječkog prvoligaša"
            },
            {
                "name": "Airport-pula.hr",
                "url": "https://airport-pula.hr/",
                "domain": "airport-pula.hr",
                "description": "Zračna luka Pula"
            },
            {
                "name": "Fiuman.hr",
                "url": "https://fiuman.hr/",
                "domain": "fiuman.hr",
                "description": "Riječki informativni portal za Kvarner"
            }
        ],
        "ostalo": [
        {
            "name": "eMeđimurje (Alternative)",
            "url": "http://www.emedjimurje.hr/",
            "domain": "emedjimurje.hr",
            "description": "Informativni portal za Međimursku županiju"
        },
        {
            "name": "Klikaj.hr",
            "url": "https://www.klikaj.hr/",
            "domain": "klikaj.hr",
            "description": "Informativni portal Koprivnice i Podravine"
        },
        {
            "name": "Radio Banovina",
            "url": "https://www.radio-banovina.hr/",
            "domain": "radio-banovina.hr",
            "description": "Informativni portal i radio Banovine i Siska"
        },
        {
            "name": "Ni Zagorje malo",
            "url": "https://nizagorjemalo.hr/",
            "domain": "nizagorjemalo.hr",
            "description": "Nezavisni portal za Zagorje"
        },
        {
            "name": "Varaždinski.hr",
            "url": "https://varazdinski.net.hr/",
            "domain": "varazdinski.hr",
            "description": "Vodeći portal za Varaždinsku županiju"
        },
        {
            "name": "eMeđimurje",
            "url": "https://emedimurje.hr/",
            "domain": "emedimurje.hr",
            "description": "Vodeći informativni portal za Međimurje"
        },
        {
            "name": "Drava.info",
            "url": "https://drava.info/",
            "domain": "drava.info",
            "description": "Informativni portal Podravine i Koprivnice"
        },
            {
                "name": "Zpress.hr",
                "url": "https://www.zpress.hr/",
                "domain": "zpress.hr",
                "description": ""
            },
            {
                "name": "Virovitica.net",
                "url": "https://www.virovitica.net/",
                "domain": "virovitica.net",
                "description": "Neovisni virovitički portal"
            },
            {
                "name": "Varaždin.hr",
                "url": "https://varazdin.hr/",
                "domain": "varazdin.hr",
                "description": ""
            },
            {
                "name": "SlobodnaLika.com",
                "url": "https://slobodnalika.com/",
                "domain": "slobodnalika.com",
                "description": "Portal Ličko-senjske županije"
            },
            {
                "name": "Sisak.info",
                "url": "https://www.sisak.info/",
                "domain": "sisak.info",
                "description": "neslužbeni web portal grada Siska"
            },
            {
                "name": "SBplusportal.hr",
                "url": "https://plusportal.hr//",
                "domain": "plusportal.hr",
                "description": "Portal Brodsko-posavske županije"
            },
            {
                "name": "SbOnline.net",
                "url": "https://www.sbonline.net/",
                "domain": "sbonline.net",
                "description": ""
            },
            {
                "name": "RegionalExpress.hr",
                "url": "https://www.regionalexpress.hr/",
                "domain": "regionalexpress.hr",
                "description": "Portal Istarskog mjesečnika"
            },
            {
                "name": "Radio-mrežnica.hr",
                "url": "https://radio-mreznica.hr/",
                "domain": "radio-mreznica.hr",
                "description": "portal Karlovačke županije"
            },
            {
                "name": "Prigorski.hr",
                "url": "https://prigorski.hr/",
                "domain": "prigorski.hr",
                "description": "Vijesti iz Križevca"
            },
            {
                "name": "Poskok.info",
                "url": "https://poskok.info/nestaje-oruzje-iz-vojnih-skladista-u-bih/",
                "domain": "poskok.info",
                "description": "Hercegovački portal iz Posušja"
            },
            {
                "name": "PortalOko.hr",
                "url": "https://www.portaloko.hr/",
                "domain": "portaloko.hr",
                "description": ""
            },
            {
                "name": "Plavi Oglasnik",
                "url": "https://www.oglasnik.hr/",
                "domain": "oglasnik.hr",
                "description": ""
            },
            {
                "name": "Plavi oglasnik",
                "url": "https://www.oglasnik.hr/prodaja-automobila",
                "domain": "oglasnik.hr",
                "description": ""
            },
            {
                "name": "Plavakamenica.hr",
                "url": "https://plavakamenica.hr/",
                "domain": "plavakamenica.hr",
                "description": "gastro portal"
            },
            {
                "name": "NašaTV.ba",
                "url": "https://nasatv.ba/",
                "domain": "nasatv.ba",
                "description": "Portall Kabelske tv sa sjedištem u Mostaru"
            },
            {
                "name": "Ljubiško.info",
                "url": "https://www.ljubuski.info/",
                "domain": "ljubuski.info",
                "description": "Neovisni lokalni portal"
            },
            {
                "name": "Livno-online.com",
                "url": "https://www.livno-online.com/",
                "domain": "livno-online.com",
                "description": "Vijesti iz Livna"
            },
            {
                "name": "Lika-online.hr",
                "url": "https://www.lika-online.hr/",
                "domain": "lika-online.hr",
                "description": "Lički portal"
            },
            {
                "name": "Križevci.info",
                "url": "https://www.krizevci.info/",
                "domain": "krizevci.info",
                "description": "Nezavisni portal grada Križevci"
            },
            {
                "name": "KAportal.net.hr",
                "url": "https://kaportal.net.hr/",
                "domain": "kaportal.net.hr",
                "description": "Vijesti iz Karlovačke županije"
            },
            {
                "name": "Istarski.hr",
                "url": "https://www.istarski.hr/",
                "domain": "istarski.hr",
                "description": "Novosti iz Istre"
            },
            {
                "name": "iPress.hr",
                "url": "https://www.ipress.hr/",
                "domain": "ipress.hr",
                "description": "Vijesti iz Istre, Hrvatske i Svijeta"
            },
            {
                "name": "Icv.hr",
                "url": "https://www.icv.hr/",
                "domain": "icv.hr",
                "description": "Informativni centar Virovitica"
            },
            {
                "name": "Hercegbosna.org",
                "url": "https://www.hercegbosna.org/",
                "domain": "hercegbosna.org",
                "description": "Portala Hrvata iz BiH"
            },
            {
                "name": "eVarazdin.hr",
                "url": "https://evarazdin.hr/",
                "domain": "evarazdin.hr",
                "description": "Varaždinske e-novine"
            },
            {
                "name": "ePodravina.hr",
                "url": "https://epodravina.hr/",
                "domain": "epodravina.hr",
                "description": "Portal Podravine i Prigorja"
            },
            {
                "name": "eMedjimurje.net.hr",
                "url": "https://emedjimurje.net.hr/",
                "domain": "emedjimurje.net.hr",
                "description": "Portal Međimurske županije"
            },
            {
                "name": "eBrod.net",
                "url": "http://www.ebrod.net/",
                "domain": "ebrod.net",
                "description": "Portal Slavonskog Broda i okolice"
            },
            {
                "name": "DubrovačkiPress.hr",
                "url": "https://www.dubrovnikpress.hr/",
                "domain": "dubrovnikpress.hr",
                "description": "Dubrovački portal"
            },
            {
                "name": "DubrovačkiDnevnik.net.hr",
                "url": "https://dubrovackidnevnik.net.hr/",
                "domain": "dubrovackidnevnik.net.hr",
                "description": "Vijesti iz Dubrovačke regije"
            },
            {
                "name": "Dnevnik.ba",
                "url": "https://www.dnevnik.ba/",
                "domain": "dnevnik.ba",
                "description": "Bosanskohercegovački portal iz Mostara"
            },
            {
                "name": "Croatis.ch",
                "url": "https://croatis.ch/",
                "domain": "croatis.ch",
                "description": "Portal za Hrvate u Švicarskoj"
            },
            {
                "name": "Bljesak.info",
                "url": "https://bljesak.info/",
                "domain": "bljesak.info",
                "description": "Bosansko-hercegovački portal"
            },
            {
                "name": "034portal.hr",
                "url": "https://www.034portal.hr/",
                "domain": "034portal.hr",
                "description": "Portal Požeško-slavonske županije"
            },
            {
                "name": "Podravski.hr",
                "url": "https://podravski.hr/",
                "domain": "podravski.hr",
                "description": "Najčitaniji portal u Koprivničko-križevačkoj županiji"
            },
            {
                "name": "Varaždinski.hr",
                "url": "https://varazdinski.net.hr/",
                "domain": "varazdinski.net.hr",
                "description": "Lokalni informativni portal za Varaždinsku županiju"
            },
            {
                "name": "Zagorje.com",
                "url": "https://www.zagorje.com/",
                "domain": "zagorje.com",
                "description": "Vodeći portal u Krapinsko-zagorskoj županiji"
            }
        ]
    },
    "tematski": {
        "sport": [
        {
            "name": "Crosport",
            "url": "https://crosport.hr/",
            "domain": "crosport.hr",
            "description": "Hrvatski sportski portal"
        },
            {
                "name": "UvijekVjerni.hr",
                "url": "https://uvijekvjerni.hr/",
                "domain": "uvijekvjerni.hr",
                "description": "Navijački portal hrvatske nogometne reprezentacije"
            },
            {
                "name": "UEFA.com",
                "url": "https://www.uefa.com/",
                "domain": "uefa.com",
                "description": ""
            },
            {
                "name": "Trcaona.hr",
                "url": "https://www.trcaona.hr/",
                "domain": "trcaona.hr",
                "description": "Rekreativno trčanje"
            },
            {
                "name": "Trcanje.hr",
                "url": "https://www.trcanje.hr/",
                "domain": "trcanje.hr",
                "description": "Portal o brdskom i cestovnom trčanju"
            },
            {
                "name": "SPTV.hr",
                "url": "https://www.sptv.hr/",
                "domain": "sptv.hr",
                "description": "Sportska televizija uživo na internetu"
            },
            {
                "name": "Sportski klub",
                "url": "https://sportklub.n1info.hr/",
                "domain": "sportklub.n1info.hr",
                "description": "Portal regionalnog sportskog TV kanala za Hrvatsku"
            },
            {
                "name": "Sportske novosti",
                "url": "https://sportske.jutarnji.hr/sn",
                "domain": "sportske.jutarnji.hr",
                "description": "Online izdanje sportskih dnevnih novina"
            },
            {
                "name": "SportCom.hr",
                "url": "https://www.sportcom.hr/",
                "domain": "sportcom.hr",
                "description": "Riječki regionalni sportski portal"
            },
            {
                "name": "Sport Arena",
                "url": "https://www.sportarena.hr/",
                "domain": "sportarena.hr",
                "description": "Objektivno i profesionalno o sportu"
            },
            {
                "name": "Soccerway",
                "url": "https://www.soccerway.com/",
                "domain": "soccerway.com",
                "description": "Uživo praćenje rezultata"
            },
            {
                "name": "Skijanje.hr",
                "url": "https://www.skijanje.hr/hr/skijanje/index.php",
                "domain": "skijanje.hr",
                "description": "Hrvatski ski-board magazin"
            },
            {
                "name": "Reultati.com",
                "url": "https://www.rezultati.com/",
                "domain": "rezultati.com",
                "description": "Web servis za uživo praćenje rezultata iz 26 sportova"
            },
            {
                "name": "PrvaHNL.hr",
                "url": "https://www.prvahnl.hr/",
                "domain": "prvahnl.hr",
                "description": "Službene stranice Prve hrvatske nogometne lige"
            },
            {
                "name": "ProFightStore.hr",
                "url": "https://www.profightstore.hr/",
                "domain": "profightstore.hr",
                "description": "Portal za borilačke sportove i kulturu tijela"
            },
            {
                "name": "Paragliding.hr",
                "url": "https://paragliding.hr/",
                "domain": "paragliding.hr",
                "description": "Hrvatski paragliding portal"
            },
            {
                "name": "NogometPlus.net",
                "url": "https://nogometplus.net/",
                "domain": "nogometplus.net",
                "description": ""
            },
            {
                "name": "NBA.com",
                "url": "https://www.nba.com/",
                "domain": "nba.com",
                "description": ""
            },
            {
                "name": "Hvs.hr",
                "url": "https://hvs.hr/",
                "domain": "hvs.hr",
                "description": "Hrvatski vaterpolski portal"
            },
            {
                "name": "Hrsport",
                "url": "https://hrsport.hr/",
                "domain": "hrsport.hr",
                "description": "sportski internetski portal"
            },
            {
                "name": "HR-Rukomet.hr",
                "url": "https://hrsport.hr/rukomet/",
                "domain": "hrsport.hr",
                "description": "Hrvatski rukometni portal"
            },
            {
                "name": "Hos-cvf.hr",
                "url": "https://hos-cvf.hr/",
                "domain": "hos-cvf.hr",
                "description": "Hrvatski odbojkaški savez"
            },
            {
                "name": "hns.family.hr",
                "url": "https://hns.family/",
                "domain": "hns.family",
                "description": "Hrvatski nogometni savez"
            },
            {
                "name": "Hhs-chf",
                "url": "https://hhs-chf.hr/",
                "domain": "hhs-chf.hr",
                "description": "Hrvatski hokejaški savez"
            },
            {
                "name": "GP1.hr",
                "url": "https://www.gp1.hr/",
                "domain": "gp1.hr",
                "description": "Hrvatski portal za Formulu 1"
            },
            {
                "name": "Gol.hr",
                "url": "https://gol.dnevnik.hr/",
                "domain": "gol.dnevnik.hr",
                "description": "Sportski portal Nove TV"
            },
            {
                "name": "Goal.com",
                "url": "https://www.goal.com/en",
                "domain": "goal.com",
                "description": "Izdavanje najvećega nogometnog portala na svijetu"
            },
            {
                "name": "Fitness.com.hr",
                "url": "https://www.fitness.com.hr/",
                "domain": "fitness.com.hr",
                "description": "Aktivan i zdrav život"
            },
            {
                "name": "FightSite.hr",
                "url": "https://fightsite.hr/fightsite",
                "domain": "fightsite.hr",
                "description": "Portal za MMA, UFC i K1 vijesti i ostale sadržaje"
            },
            {
                "name": "FIFA.com",
                "url": "https://www.fifa.com/",
                "domain": "fifa.com",
                "description": ""
            },
            {
                "name": "EuroNogomet.com",
                "url": "https://www.euronogomet.com/",
                "domain": "euronogomet.com",
                "description": "Nogometni portal"
            },
            {
                "name": "Bodybuilding",
                "url": "https://building-body.com/",
                "domain": "building-body.com",
                "description": "Portal o bodybuildingu i fitnessu"
            },
            {
                "name": "Biciklijade.com",
                "url": "https://biciklijade.com/",
                "domain": "biciklijade.com",
                "description": "Gdje se vozi"
            },
            {
                "name": "Basketball.hr",
                "url": "https://basketball.hr/",
                "domain": "basketball.hr",
                "description": "Hrvatska košarka, rezultati i vijesti"
            },
            {
                "name": "Autosport.hr",
                "url": "https://hrsport.hr/automoto/",
                "domain": "hrsport.hr",
                "description": "Portal o automobilima i automobilizmu"
            },
            {
                "name": "Adventure sport",
                "url": "https://adventure-sport.net/",
                "domain": "adventure-sport.net",
                "description": "Hrvatski pustolovno-sportski portal"
            },
            {
                "name": "ABA League",
                "url": "https://www.abaliga.com/",
                "domain": "abaliga.com",
                "description": "Službene stranice Jadranske košarkaške lige"
            },
            {
                "name": "3sporta.com",
                "url": "https://3sporta.com/",
                "domain": "3sporta.com",
                "description": "Trčanje, biciklizam, plivanje"
            },
            {
                "name": "Sportnet.hr",
                "url": "https://sportnet.hr/",
                "domain": "sportnet.hr",
                "description": "Najveći i najstariji hrvatski sportski portal"
            },
            {
                "name": "Germanijak.hr",
                "url": "https://www.germanijak.hr/",
                "domain": "germanijak.hr",
                "description": "Sportski portal s najnovijim vijestima i analizama"
            }
        ],
        "tech": [
        {
            "name": "GoodGame.hr",
            "url": "https://goodgame.hr/",
            "domain": "goodgame.hr",
            "description": "Gaming portal i vijesti"
        },
        {
            "name": "FFA.hr",
            "url": "https://ffa.hr/",
            "domain": "ffa.hr",
            "description": "Gejming portal i forum"
        },
            {
                "name": "Zimo",
                "url": "https://zimo.dnevnik.hr/",
                "domain": "zimo.dnevnik.hr",
                "description": "Vodič kroz društvene mreže, dizajn, multimediju i biznis"
            },
            {
                "name": "VidiLab.com",
                "url": "https://www.vidilab.com/",
                "domain": "vidilab.com",
                "description": "IT portal"
            },
            {
                "name": "Vacom.hr",
                "url": "https://vacom.hr/",
                "domain": "vacom.hr",
                "description": "Informatička ponuda na jednome mjestu"
            },
            {
                "name": "Usporedi.hr",
                "url": "https://www.usporedi.hr/",
                "domain": "usporedi.hr",
                "description": "Ponude tehničke robe"
            },
            {
                "name": "Tutoriali.org",
                "url": "https://tutoriali.org/",
                "domain": "tutoriali.org",
                "description": "Razni tutorijali"
            },
            {
                "name": "Tehno-mag.hr",
                "url": "https://tehno-mag.hr/",
                "domain": "tehno-mag.hr",
                "description": "Trgovina bijele tehnike, potrošačke elektronike i informatik"
            },
            {
                "name": "Svijet-medija.hr",
                "url": "https://www.svijet-medija.hr/",
                "domain": "svijet-medija.hr",
                "description": "Prodavaonica elektroničke opreme i softwarea"
            },
            {
                "name": "SmartphoneHrvatska.com",
                "url": "https://www.smartphonehrvatska.com/",
                "domain": "smartphonehrvatska.com",
                "description": "Smartphone, tablet i telekomunikacije"
            },
            {
                "name": "Skidajmo.com",
                "url": "https://www.skidajmo.com/",
                "domain": "skidajmo.com",
                "description": "Hrvatski download portal"
            },
            {
                "name": "Sistemac.srce.hr",
                "url": "https://sistemac.srce.hr/",
                "domain": "sistemac.srce.hr",
                "description": "Portal Sveučilišnog računskog centra za sistem inženjere"
            },
            {
                "name": "Reboot Infogamer",
                "url": "https://www.rebootinfogamer.hr/",
                "domain": "rebootinfogamer.hr",
                "description": ""
            },
            {
                "name": "Računalo.com",
                "url": "https://www.racunalo.com/",
                "domain": "racunalo.com",
                "description": "Portal o računalima i ICT tehnologiji"
            },
            {
                "name": "Računalo.com/gamebox",
                "url": "https://www.racunalo.com/gamebox/",
                "domain": "racunalo.com",
                "description": "Stranice o igrama"
            },
            {
                "name": "Protis.hr",
                "url": "https://www.protis.hr/",
                "domain": "protis.hr",
                "description": "Web trgovina elektroničke opreme i softwarea"
            },
            {
                "name": "Preporučamo.com",
                "url": "https://preporucamo.com/",
                "domain": "preporucamo.com",
                "description": "Portal preporuka za proizvode iz IT i CE svijeta"
            },
            {
                "name": "PlanB.hr",
                "url": "https://planb.hr/",
                "domain": "planb.hr",
                "description": "Webzine o tehnologiji, mrežama, marketingu i dizajnu"
            },
            {
                "name": "PCekspert.com",
                "url": "https://www.pcekspert.com/",
                "domain": "pcekspert.com",
                "description": "Hardware e-zine"
            },
            {
                "name": "PCchip.hr",
                "url": "https://pcchip.hr/",
                "domain": "pcchip.hr",
                "description": "Informatičko-telekomunikacijski portal"
            },
            {
                "name": "Netokracija.com",
                "url": "https://www.netokracija.com/",
                "domain": "netokracija.com",
                "description": "Portal o internetskim tehnologijama i poslovanj"
            },
            {
                "name": "Nabava.net",
                "url": "https://www.nabava.net/",
                "domain": "nabava.net",
                "description": "Informatička ponuda na jednome mjestu"
            },
            {
                "name": "Mobil.hr",
                "url": "https://mobil.hr/",
                "domain": "mobil.hr",
                "description": "Mjesto za telekomunikacije i multimediju"
            },
            {
                "name": "Mob.hr",
                "url": "https://mob.hr/",
                "domain": "mob.hr",
                "description": "Blog o mobilnim komunikacijama"
            },
            {
                "name": "Mikronis.hr",
                "url": "https://www.mikronis.hr/",
                "domain": "mikronis.hr",
                "description": "Prodavaonica elektroničke opreme i softwarea"
            },
            {
                "name": "MEGA.io",
                "url": "https://mega.io/",
                "domain": "mega.io",
                "description": "Usluga besplatne pohrane datoteka"
            },
            {
                "name": "Linuxzasve.com",
                "url": "https://www.linuxzasve.com/",
                "domain": "linuxzasve.com",
                "description": "Linux podrška za početnike i napredne korisnik"
            },
            {
                "name": "Linux.hr",
                "url": "https://linux.hr/",
                "domain": "linux.hr",
                "description": "Hrvatska udruga Linux korisnika (HULK)"
            },
            {
                "name": "Links.hr",
                "url": "https://www.links.hr/hr/",
                "domain": "links.hr",
                "description": "Prodajni lanac informatičke opreme"
            },
            {
                "name": "Jeftinije.hr",
                "url": "https://www.jeftinije.hr/",
                "domain": "jeftinije.hr",
                "description": "Pronalaženje najjeftinijih proizvoda i usluga"
            },
            {
                "name": "Jabučnjak.hr",
                "url": "https://www.jabucnjak.hr/",
                "domain": "jabucnjak.hr",
                "description": "Portal za korisnike OS Macintosh"
            },
            {
                "name": "iTutorijali.net",
                "url": "https://www.ittutorijali.net/",
                "domain": "ittutorijali.net",
                "description": "Razni tutorijali"
            },
            {
                "name": "ITnovosti.com",
                "url": "https://www.itnovosti.com/",
                "domain": "itnovosti.com",
                "description": "Pregled IT novosti na hrvatskome jeziku"
            },
            {
                "name": "Invictum.hr",
                "url": "https://www.invictum.hr/nas-blog/",
                "domain": "invictum.hr",
                "description": "Blog o IT"
            },
            {
                "name": "Instar-informatika.hr",
                "url": "https://www.instar-informatika.hr/",
                "domain": "instar-informatika.hr",
                "description": "Prodaja računalnih proizvoda i usluga"
            },
            {
                "name": "Igra.hr (stari Gamer.hr)",
                "url": "https://igre.hr/",
                "domain": "igre.hr",
                "description": "Hrvatski elektronički magazin za PC igre"
            },
            {
                "name": "ICTbusiness.info",
                "url": "https://www.ictbusiness.info/",
                "domain": "ictbusiness.info",
                "description": "Portal o novim tehnologijama i njihovoj primjeni"
            },
            {
                "name": "Icon",
                "url": "https://to-icon.fwh.is/?i=1",
                "domain": "to-icon.fwh.is",
                "description": "Prodavaonica računalne opreme"
            },
            {
                "name": "HiFiMedia.hr",
                "url": "https://hifimedia.hr/",
                "domain": "hifimedia.hr",
                "description": "Portal magazina o audio i video sustavima"
            },
            {
                "name": "HGspot.hr",
                "url": "https://www.hgspot.hr/",
                "domain": "hgspot.hr",
                "description": "Informatička i audio-video trgovina"
            },
            {
                "name": "HDtelevizija.com",
                "url": "https://hdtelevizija.com/",
                "domain": "hdtelevizija.com",
                "description": "HDTV eZine"
            },
            {
                "name": "HCL.hr",
                "url": "https://www.hcl.hr/",
                "domain": "hcl.hr",
                "description": "Gaming portal udruge Hrvatska cyber liga"
            },
            {
                "name": "Gemius audience",
                "url": "https://e.gemius.com/login",
                "domain": "e.gemius.com",
                "description": "Top lista posjećenosti hrvatskih web stranica"
            },
            {
                "name": "GeeK.hr",
                "url": "https://geek.hr/",
                "domain": "geek.hr",
                "description": "Zabava za geekove"
            },
            {
                "name": "Game perspectives",
                "url": "https://gameperspectives.hr/",
                "domain": "gameperspectives.hr",
                "description": "portal računalnim igrama"
            },
            {
                "name": "eKupi.hr",
                "url": "https://www.ekupi.hr/",
                "domain": "ekupi.hr",
                "description": "Informatička ponuda na jednome mjestu"
            },
            {
                "name": "Droid.hr",
                "url": "https://droid.hr/",
                "domain": "droid.hr",
                "description": "Hrvatska Android zajednica"
            },
            {
                "name": "CoolKlub.com",
                "url": "https://coolklub.com/",
                "domain": "coolklub.com",
                "description": "Lifestyle design magazin"
            },
            {
                "name": "Chipoteka.hr",
                "url": "https://www.chipoteka.hr/",
                "domain": "chipoteka.hr",
                "description": "Prodajni lanac informatičke, audio i video opreme"
            },
            {
                "name": "CERT.hr",
                "url": "https://www.cert.hr/",
                "domain": "cert.hr",
                "description": "Nacionalno središte za računalnu sigurnost"
            },
            {
                "name": "Carnetmetar",
                "url": "https://www.carnet.hr/usluga/carnet-metar/",
                "domain": "carnet.hr",
                "description": "CARNet-ov metar"
            },
            {
                "name": "Bug.hr",
                "url": "https://www.bug.hr/",
                "domain": "bug.hr",
                "description": "Portal informatičkog magazina"
            },
            {
                "name": "ADM",
                "url": "https://www.adm.hr/",
                "domain": "adm.hr",
                "description": "online trgovina računala i ostale potrebne tehnike"
            }
        ],
        "lifestyle": [
        {
            "name": "Ženski recenziRAJ",
            "url": "https://zenski-recenziraj.com/",
            "domain": "zenski-recenziraj.com",
            "description": "Preporuke i lifestyle portal za žene"
        },
        {
            "name": "Extravagant",
            "url": "https://extravagant.com.hr/",
            "domain": "extravagant.com.hr",
            "description": "Lifestyle i modni magazin"
        },
        {
            "name": "Elegant.hr",
            "url": "https://elegant.hr/",
            "domain": "elegant.hr",
            "description": "Ljepota, moda i stil života"
        },
        {
            "name": "Buro 24/7",
            "url": "https://buro247.hr/",
            "domain": "buro247.hr",
            "description": "Luksuzni modni i lifestyle magazin"
        },
        {
            "name": "Diva",
            "url": "https://diva.hr/",
            "domain": "diva.hr",
            "description": "Modni i lifestyle portal"
        },
        {
            "name": "After5",
            "url": "https://after5.hr/",
            "domain": "after5.hr",
            "description": "Lifestyle portal i magazin"
        },
            {
                "name": "ČitajKnjigu.com",
                "url": "https://citajknjigu.com/",
                "domain": "citajknjigu.com",
                "description": "stranica za knjigoljupce i sve one koji će to tek postati"
            },
            {
                "name": "Znanje.hr",
                "url": "https://znanje.hr/",
                "domain": "znanje.hr",
                "description": "Hrvatska online knjižara"
            },
            {
                "name": "Ziher.hr",
                "url": "https://www.ziher.hr/",
                "domain": "ziher.hr",
                "description": "Kulturni portal s novostima iz svijeta glazbe, filma i kazališta"
            },
            {
                "name": "ZdravoBudi.hr",
                "url": "https://zdravobudi.hr/",
                "domain": "zdravobudi.hr",
                "description": "Belupov zdravstveni portal"
            },
            {
                "name": "Vizkultura.hr",
                "url": "https://vizkultura.hr/",
                "domain": "vizkultura.hr",
                "description": "Portal o vizualnim umjetnostima i kulturi"
            },
            {
                "name": "Vitamini.hr",
                "url": "https://vitamini.hr/",
                "domain": "vitamini.hr",
                "description": "Portal za nutricionizam tvrtke Vitaminoteka"
            },
            {
                "name": "Verbum.hr",
                "url": "https://verbum.hr/",
                "domain": "verbum.hr",
                "description": "Verbum knjižara"
            },
            {
                "name": "Terapija.net",
                "url": "http://www.terapija.net/",
                "domain": "terapija.net",
                "description": "E-zine o zvuku & slici"
            },
            {
                "name": "SvijetKulture.com",
                "url": "https://svijetkulture.com/",
                "domain": "svijetkulture.com",
                "description": "Portal za kulturui umjetnost"
            },
            {
                "name": "SuperKnjižnica.hr",
                "url": "https://www.superknjizara.hr/hr",
                "domain": "superknjizara.hr",
                "description": "Internet trgovina s najvećim izborom knjiga i udžbenika"
            },
            {
                "name": "Stripovi.com",
                "url": "https://www.stripovi.com/",
                "domain": "stripovi.com",
                "description": "Portal o stripovima"
            },
            {
                "name": "RavnoDoDna.com",
                "url": "https://ravnododna.com/",
                "domain": "ravnododna.com",
                "description": "Web mjesto za pop kulturu"
            },
            {
                "name": "Portal hrvatskog kazališta i glumačkog stvaralaštva",
                "url": "https://www.teatar.hr/",
                "domain": "teatar.hr",
                "description": ""
            },
            {
                "name": "Pogledaj.to",
                "url": "https://pogledaj.to/",
                "domain": "pogledaj.to",
                "description": "Portal o prostoru, oblikovanju i dizajnu"
            },
            {
                "name": "PLIVAzdravlje.hr",
                "url": "https://www.plivazdravlje.hr/",
                "domain": "plivazdravlje.hr",
                "description": "Plivin zdravstveni portal"
            },
            {
                "name": "Ordinacija.hr",
                "url": "https://ordinacija.vecernji.hr/",
                "domain": "ordinacija.vecernji.hr",
                "description": "Hrvatski medicinski portal"
            },
            {
                "name": "Optometrija.net",
                "url": "https://www.optometrija.net/",
                "domain": "optometrija.net",
                "description": "Portal za zdravlje očiju i vida"
            },
            {
                "name": "NationalGeographic.com",
                "url": "https://www.nationalgeographic.com/",
                "domain": "nationalgeographic.com",
                "description": "National Geographic"
            },
            {
                "name": "NakladaSlap.com",
                "url": "https://www.nakladaslap.com/",
                "domain": "nakladaslap.com",
                "description": "Naklada Slap"
            },
            {
                "name": "MVInfo.hr",
                "url": "https://mvinfo.hr/",
                "domain": "mvinfo.hr",
                "description": "Portal za knjigu i kulturu Moderna vremena"
            },
            {
                "name": "Muzika.hr",
                "url": "https://www.muzika.hr/",
                "domain": "muzika.hr",
                "description": "Internetski glazbeni magazin"
            },
            {
                "name": "Moj-film.hr",
                "url": "https://www.moj-film.hr/",
                "domain": "moj-film.hr",
                "description": "Hrvatski filmski portal"
            },
            {
                "name": "MixMagAdria.com",
                "url": "https://mixmagadria.com/",
                "domain": "mixmagadria.com",
                "description": "Portal koji se bavi clubbingom i elektronskom glazbom"
            },
            {
                "name": "MissZdrava.hr",
                "url": "https://miss7zdrava.24sata.hr/",
                "domain": "miss7zdrava.24sata.hr",
                "description": "Portal o zdravlju s naglaskom na vitalnost"
            },
            {
                "name": "Meridijani.com",
                "url": "http://www.meridijani.com/",
                "domain": "meridijani.com",
                "description": "Izdavačka kuća"
            },
            {
                "name": "Matica.hr",
                "url": "https://www.matica.hr/vijenac/",
                "domain": "matica.hr",
                "description": "Novine Matice hrvatske za književnost, umjetnost i znanost"
            },
            {
                "name": "Ljevak.hr",
                "url": "https://www.ljevak.hr/",
                "domain": "ljevak.hr",
                "description": "Hrvatska online knjižara"
            },
            {
                "name": "Kulturpunkt.hr",
                "url": "https://kulturpunkt.hr/",
                "domain": "kulturpunkt.hr",
                "description": "Kulturni portal"
            },
            {
                "name": "Ks.hr",
                "url": "https://www.ks.hr/",
                "domain": "ks.hr",
                "description": "Kršćanska sadašnjost"
            },
            {
                "name": "Knjižara.hr",
                "url": "https://www.knjizara.hr/",
                "domain": "knjizara.hr",
                "description": "Najposjećenija informatička knjižara"
            },
            {
                "name": "KlubskaScena.hr",
                "url": "https://www.klubskascena.hr/",
                "domain": "klubskascena.hr",
                "description": "Elektronički glazbeni portal"
            },
            {
                "name": "Jesenski-turk.hr",
                "url": "https://www.jesenski-turk.hr/hr",
                "domain": "jesenski-turk.hr",
                "description": "Jesenski & Turk"
            },
            {
                "name": "Jazz.hr",
                "url": "https://www.jazz.hr/index.php",
                "domain": "jazz.hr",
                "description": "Hrvatski jazz portal"
            },
            {
                "name": "IMDB.com",
                "url": "https://www.imdb.com/",
                "domain": "imdb.com",
                "description": "Najveća baza podatka o filmu"
            },
            {
                "name": "Hip-hop.hr",
                "url": "https://hip-hop.hr/",
                "domain": "hip-hop.hr",
                "description": "Hrvatski hip-hop portal"
            },
            {
                "name": "Groupie.hr",
                "url": "https://www.groupie.hr/",
                "domain": "groupie.hr",
                "description": "Glazbeni portal"
            },
            {
                "name": "Gledalica.online",
                "url": "https://gledalica.online/",
                "domain": "gledalica.online",
                "description": "Portal za gledanje filmova"
            },
            {
                "name": "Free PDF Magazines",
                "url": "https://downmagaz.net/",
                "domain": "downmagaz.net",
                "description": ""
            },
            {
                "name": "Fotografija.hr",
                "url": "https://fotografija.hr/",
                "domain": "fotografija.hr",
                "description": "Portal za fotografsku i vizualnu kulturu"
            },
            {
                "name": "FilmskiMaraton.com",
                "url": "https://filmskimaraton.com/",
                "domain": "filmskimaraton.com",
                "description": "Novi filmovi za download s hr prijevodom"
            },
            {
                "name": "Filmski.net",
                "url": "http://www.filmski.net/",
                "domain": "filmski.net",
                "description": "Portal s vijestima iz svijeta filma"
            },
            {
                "name": "Filmovita.com",
                "url": "https://www.filmovita.com/",
                "domain": "filmovita.com",
                "description": "Online gledanje filmova s prijevodom"
            },
            {
                "name": "Fama.com.hr",
                "url": "https://fama.com.hr/",
                "domain": "fama.com.hr",
                "description": "Aktualnosti iz kulturnog i javnog života"
            },
            {
                "name": "Ezop-antikvarijat.hr",
                "url": "https://ezop-antikvarijat.hr/",
                "domain": "ezop-antikvarijat.hr",
                "description": "Ezop"
            },
            {
                "name": "ElektroničkeKnjige.com",
                "url": "https://elektronickeknjige.com/",
                "domain": "elektronickeknjige.com",
                "description": "Besplatne elentroničke knjige"
            },
            {
                "name": "Drvoznanja.com",
                "url": "http://www.drvoznanja.com/",
                "domain": "drvoznanja.com",
                "description": "Drvo znanja"
            },
            {
                "name": "Deejay.hr",
                "url": "https://deejay.hr/",
                "domain": "deejay.hr",
                "description": "Radio i televizija za urbanu glazbenu kulturu"
            },
            {
                "name": "Culturenet.hr",
                "url": "https://www.culturenet.hr/",
                "domain": "culturenet.hr",
                "description": "Web centar hrvatske kulture"
            },
            {
                "name": "Crtanko.xyz",
                "url": "https://www.crtanko.xyz/",
                "domain": "crtanko.xyz",
                "description": "Sinkronizirani crtani filmovi i crtići"
            },
            {
                "name": "Croatian-music.info",
                "url": "https://www.croatian-music.info/",
                "domain": "croatian-music.info",
                "description": "Hrvatski glazbeni portal"
            },
            {
                "name": "Cineplexx.hr",
                "url": "https://www.cineplexx.hr/",
                "domain": "cineplexx.hr",
                "description": "Najveći regionalni kino pokazivač"
            },
            {
                "name": "CentarZdravlja.hr",
                "url": "https://www.centarzdravlja.hr/",
                "domain": "centarzdravlja.hr",
                "description": "Portal za zdravlje i ljepotu"
            },
            {
                "name": "Brija.com",
                "url": "https://www.brija.com/",
                "domain": "brija.com",
                "description": "Magazin elektroničke glazbe"
            },
            {
                "name": "Booksa.hr",
                "url": "https://www.booksa.hr/",
                "domain": "booksa.hr",
                "description": "Hrvatski književni portal"
            },
            {
                "name": "Blitz-CineStar.hr",
                "url": "https://cinestarcinemas.hr/",
                "domain": "cinestarcinemas.hr",
                "description": "Mrežne stranice pružatelja kino usluga u Hrvatskoj"
            },
            {
                "name": "Arteist.hr",
                "url": "https://arteist.hr/",
                "domain": "arteist.hr",
                "description": "Prvo slovo kulture"
            },
            {
                "name": "Antikvarijat-mali-neboder.hr",
                "url": "https://www.antikvarijat-mali-neboder.hr/",
                "domain": "antikvarijat-mali-neboder.hr",
                "description": ""
            },
            {
                "name": "Antikvarijat-brala.hr",
                "url": "https://www.antikvarijat-brala.hr/",
                "domain": "antikvarijat-brala.hr",
                "description": "Antikvarijat Brala"
            },
            {
                "name": "Antikvarijat-biblos.hr",
                "url": "https://www.antikvarijat-biblos.hr/",
                "domain": "antikvarijat-biblos.hr",
                "description": ""
            },
            {
                "name": "Alfa.hr",
                "url": "https://www.alfa.hr/",
                "domain": "alfa.hr",
                "description": "Izdavačka kuća"
            },
            {
                "name": "Agm.hr",
                "url": "https://www.agm.hr/hr/",
                "domain": "agm.hr",
                "description": ""
            },
            {
                "name": "Zadovoljna.hr",
                "url": "https://zadovoljna.dnevnik.hr/",
                "domain": "zadovoljna.dnevnik.hr",
                "description": "Lifestyle portal za žene"
            },
            {
                "name": "Scena.hr",
                "url": "https://scena.hr/",
                "domain": "scena.hr",
                "description": "Showbiz, lifestyle i kulturni portal"
            },
            {
                "name": "Journal.hr",
                "url": "https://www.journal.hr/",
                "domain": "journal.hr",
                "description": "Jedan of vodećih lifestyle portala u Hrvatskoj"
            }
        ],
        "biznis": [
        {
            "name": "Poduzetnik",
            "url": "https://poduzetnik.biz/",
            "domain": "poduzetnik.biz",
            "description": "Poduzetnički portal i časopis"
        },
        {
            "name": "Ekovjesnik",
            "url": "https://ekovjesnik.hr/",
            "domain": "ekovjesnik.hr",
            "description": "Ekološke i gospodarske vijesti"
        },
        {
            "name": "Bauštela.hr",
            "url": "https://baustela.hr/",
            "domain": "baustela.hr",
            "description": "Građevinski i nekretninski portal"
        },
        {
            "name": "Točka na i",
            "url": "https://tockanai.hr/",
            "domain": "tockanai.hr",
            "description": "Poslovni i poduzetnički portal"
        },
        {
            "name": "Ekonomski lab",
            "url": "http://arhivanalitika.hr/",
            "domain": "arhivanalitika.hr",
            "description": "Ekonomski osvrti i analize"
        },
        {
            "name": "Financije.hr",
            "url": "https://financije.hr/",
            "domain": "financije.hr",
            "description": "Poslovno-financijski portal"
        },
            {
                "name": "Čačkalo.hr/posao",
                "url": "https://www.cackalo.hr/posao",
                "domain": "cackalo.hr",
                "description": "Poslovi na Čačkalo oglasniku"
            },
            {
                "name": "Winko.com",
                "url": "http://www.winko.com/",
                "domain": "winko.com",
                "description": "Tražilica ponuđača proizvoda i usluga"
            },
            {
                "name": "Wiener osiguranje",
                "url": "https://www.wiener.hr/",
                "domain": "wiener.hr",
                "description": ""
            },
            {
                "name": "Webgradnja.hr",
                "url": "https://webgradnja.hr/",
                "domain": "webgradnja.hr",
                "description": "Web odredište za graditeljstvo"
            },
            {
                "name": "UNIQA osiguranje",
                "url": "https://www.uniqa.hr/",
                "domain": "uniqa.hr",
                "description": ""
            },
            {
                "name": "UniCredit Leasing Croatia",
                "url": "https://unicreditleasing.hr/home/",
                "domain": "unicreditleasing.hr",
                "description": ""
            },
            {
                "name": "Tvrtke.com",
                "url": "https://www.tvrtke.hr/",
                "domain": "tvrtke.hr",
                "description": "Poslovna tražilica"
            },
            {
                "name": "Triglav osiguranje",
                "url": "https://www.triglav.hr/",
                "domain": "triglav.hr",
                "description": ""
            },
            {
                "name": "Suvremena.hr",
                "url": "https://suvremena.hr/",
                "domain": "suvremena.hr",
                "description": "Portal za trgovinu"
            },
            {
                "name": "Sudski Registar",
                "url": "https://sudreg.pravosudje.hr/ords/r/esudreg/public/1?clear=APP",
                "domain": "sudreg.pravosudje.hr",
                "description": "Evidencija trgovačkih društava u RH"
            },
            {
                "name": "Studentskiposlovi.hr",
                "url": "https://studentski-poslovi.hr/",
                "domain": "studentski-poslovi.hr",
                "description": "Najveći oglasnik za studentske poslove"
            },
            {
                "name": "Solvera štedionica",
                "url": "https://www.solverastedionica.hr/",
                "domain": "solverastedionica.hr",
                "description": ""
            },
            {
                "name": "Seljaci.org",
                "url": "http://www.seljaci.org/",
                "domain": "seljaci.org",
                "description": "Hrvatski poljoprivredni portal"
            },
            {
                "name": "Selekcija.hr",
                "url": "https://online.selekcija.hr/home/jobs",
                "domain": "online.selekcija.hr",
                "description": "natječaji za poslove"
            },
            {
                "name": "selectio.hr",
                "url": "https://selectio.hr/",
                "domain": "selectio.hr",
                "description": "Selectio"
            },
            {
                "name": "Sava osiguranje",
                "url": "https://www.sava-osiguranje.hr/",
                "domain": "sava-osiguranje.hr",
                "description": ""
            },
            {
                "name": "RRiF.hr",
                "url": "https://www.rrif.hr/",
                "domain": "rrif.hr",
                "description": "Računovodstvo, revizija i financije."
            },
            {
                "name": "RIFIN.com",
                "url": "http://www.rifin.com/",
                "domain": "rifin.com",
                "description": "Ekonomska problematika"
            },
            {
                "name": "Registar Udruga",
                "url": "https://registri-npo-mpu.gov.hr/#!udruge",
                "domain": "registri-npo-mpu.gov.hr",
                "description": "Registar Udruga u RH"
            },
            {
                "name": "Raiffeisen Leasing",
                "url": "https://www.raiffeisen-leasing.hr/",
                "domain": "raiffeisen-leasing.hr",
                "description": ""
            },
            {
                "name": "Raiffeisenbank",
                "url": "https://www.rba.hr/hr/gradani.html",
                "domain": "rba.hr",
                "description": ""
            },
            {
                "name": "Racunovodstvo-porezi.hr",
                "url": "https://www.racunovodstvo-porezi.hr/",
                "domain": "racunovodstvo-porezi.hr",
                "description": "Računovodstvo i porezi u praksi"
            },
            {
                "name": "Profitiraj.hr",
                "url": "https://profitiraj.hr/",
                "domain": "profitiraj.hr",
                "description": "Ekonomski interaktivni portal za poduzetnike"
            },
            {
                "name": "PoslovniPuls.com",
                "url": "https://poslovnipuls.com/",
                "domain": "poslovnipuls.com",
                "description": "Dnevne poslovne i financijske vijesti"
            },
            {
                "name": "Poslovni.hr",
                "url": "https://www.poslovni.hr/",
                "domain": "poslovni.hr",
                "description": "Poslovni dnevnik"
            },
            {
                "name": "Poslovni-savjetnik.com",
                "url": "https://www.poslovni-savjetnik.com/",
                "domain": "poslovni-savjetnik.com",
                "description": "Centralni poslovni portal"
            },
            {
                "name": "Poslovna.hr",
                "url": "http://www.poslovna.hr/",
                "domain": "poslovna.hr",
                "description": "Registar poslovnih subjekata"
            },
            {
                "name": "Posao.hr",
                "url": "https://www.posao.hr/",
                "domain": "posao.hr",
                "description": "Portal za zapošljavanje"
            },
            {
                "name": "PORSCHE LEASING",
                "url": "https://www.porscheleasing.com.hr/",
                "domain": "porscheleasing.com.hr",
                "description": ""
            },
            {
                "name": "Poduzetništvo.org",
                "url": "https://www.poduzetnistvo.org/",
                "domain": "poduzetnistvo.org",
                "description": "Poduzetnički portal"
            },
            {
                "name": "Podravska banka",
                "url": "https://www.poba.hr/",
                "domain": "poba.hr",
                "description": ""
            },
            {
                "name": "PBZ Leasing",
                "url": "https://www.pbz-leasing.hr/naslovnica/",
                "domain": "pbz-leasing.hr",
                "description": ""
            },
            {
                "name": "OTP Leasing",
                "url": "https://www.otpleasing.hr/",
                "domain": "otpleasing.hr",
                "description": ""
            },
            {
                "name": "OTP banka Hrvatska",
                "url": "https://www.otpbanka.hr/",
                "domain": "otpbanka.hr",
                "description": ""
            },
            {
                "name": "Oglasnik.hr/ponuda",
                "url": "https://www.oglasnik.hr/ponuda-poslova",
                "domain": "oglasnik.hr",
                "description": "Poslovi na Oglasniku"
            },
            {
                "name": "Novo.hr",
                "url": "https://novo.hr/",
                "domain": "novo.hr",
                "description": "Vijesti iz poslovnog svijeta, političkog i društvenog života"
            },
            {
                "name": "Novac.hr",
                "url": "https://novac.jutarnji.hr/novac",
                "domain": "novac.jutarnji.hr",
                "description": "Financijski portal Hanza medije"
            },
            {
                "name": "Njuskalo.hr/posao",
                "url": "https://www.njuskalo.hr/posao",
                "domain": "njuskalo.hr",
                "description": "Poslovi na Njuškalo oglasniku"
            },
            {
                "name": "MojPosao",
                "url": "https://mojposao.hr/",
                "domain": "mojposao.hr",
                "description": "Portal za zapošljavanje"
            },
            {
                "name": "MojKvart.hr",
                "url": "https://www.mojkvart.hr/",
                "domain": "mojkvart.hr",
                "description": "Pretraživanje poslovnih subjekata u Hrvatskoj"
            },
            {
                "name": "Moj-bankar.hr",
                "url": "https://www.moj-bankar.hr/",
                "domain": "moj-bankar.hr",
                "description": "Financijske usluge banaka"
            },
            {
                "name": "MarketWatch.com",
                "url": "https://www.marketwatch.com/",
                "domain": "marketwatch.com",
                "description": "Market Watch"
            },
            {
                "name": "Made-in-Croatia.com.hr",
                "url": "https://made-in-croatia.com.hr/hr/",
                "domain": "made-in-croatia.com.hr",
                "description": "Hrvatski proizvodi i suveniri"
            },
            {
                "name": "Lugera.hr",
                "url": "https://www.lugera.hr/",
                "domain": "lugera.hr",
                "description": "Agencija za zapošljavanje"
            },
            {
                "name": "Lider.media",
                "url": "https://lidermedia.hr/",
                "domain": "lidermedia.hr",
                "description": "Poslovni tjednik"
            },
            {
                "name": "KentBank",
                "url": "https://www.kentbank.hr/",
                "domain": "kentbank.hr",
                "description": ""
            },
            {
                "name": "JaTrgovac.com",
                "url": "https://jatrgovac.com/",
                "domain": "jatrgovac.com",
                "description": "Portal o maloprodaji i industriji robe široke potrošnje"
            },
            {
                "name": "IMPULS Leasing",
                "url": "https://www.impuls-leasing.hr/",
                "domain": "impuls-leasing.hr",
                "description": ""
            },
            {
                "name": "Imex banka",
                "url": "https://www.imexbanka.hr/",
                "domain": "imexbanka.hr",
                "description": ""
            },
            {
                "name": "ImamNovac.com",
                "url": "https://www.imamnovac.com/",
                "domain": "imamnovac.com",
                "description": "Portal za osobne financije"
            },
            {
                "name": "i4next leasing Croatia",
                "url": "https://i4next.hr/",
                "domain": "i4next.hr",
                "description": ""
            },
            {
                "name": "HZZ.hr",
                "url": "https://www.hzz.hr/",
                "domain": "hzz.hr",
                "description": "Hrvatski zavod za zapošljavanje"
            },
            {
                "name": "huspinjaca.hr",
                "url": "https://www.uspinjaca.hr/",
                "domain": "uspinjaca.hr",
                "description": "Uspinjača posao"
            },
            {
                "name": "Hrvatska udruga banaka",
                "url": "https://www.hub.hr/",
                "domain": "hub.hr",
                "description": ""
            },
            {
                "name": "Hrvatska poštanska banka",
                "url": "https://www.hpb.hr/",
                "domain": "hpb.hr",
                "description": ""
            },
            {
                "name": "Hrvatska narodna banka",
                "url": "https://www.hnb.hr/",
                "domain": "hnb.hr",
                "description": ""
            },
            {
                "name": "HrPortfolio.hr",
                "url": "https://hrportfolio.hr/",
                "domain": "hrportfolio.hr",
                "description": "Financijski portal za investiranje"
            },
            {
                "name": "hr.SEEbiz.eu",
                "url": "https://www.seebiz.eu/",
                "domain": "seebiz.eu",
                "description": "Regionalni poslovni portal"
            },
            {
                "name": "hr.Kompass.com",
                "url": "https://hr.kompass.com/",
                "domain": "hr.kompass.com",
                "description": "Hrvatska poslovna tražilica"
            },
            {
                "name": "hr.jooble.org",
                "url": "https://hr.jooble.org/",
                "domain": "hr.jooble.org",
                "description": "Pretraživanje poslova"
            },
            {
                "name": "HITA vrijednosnice",
                "url": "https://www.hita.hr/",
                "domain": "hita.hr",
                "description": ""
            },
            {
                "name": "Hill-international.com",
                "url": "https://www.hill-international.com/en-HR/",
                "domain": "hill-international.com",
                "description": ""
            },
            {
                "name": "Hanfa.hr",
                "url": "https://www.hanfa.hr/",
                "domain": "hanfa.hr",
                "description": ""
            },
            {
                "name": "GRAWE Hrvatska",
                "url": "https://www.grawe.hr/",
                "domain": "grawe.hr",
                "description": ""
            },
            {
                "name": "Gradimo.hr",
                "url": "https://gradimo.hr/",
                "domain": "gradimo.hr",
                "description": "Web za građenje, opremanje i nekretnine"
            },
            {
                "name": "Generali osiguranje",
                "url": "https://www.generali.hr/",
                "domain": "generali.hr",
                "description": ""
            },
            {
                "name": "freelance.hr",
                "url": "https://www.freelance.hr/hr",
                "domain": "freelance.hr",
                "description": "Honorarni posao"
            },
            {
                "name": "Franchising.hr",
                "url": "https://franchising.hr/",
                "domain": "franchising.hr",
                "description": "Portal ideja za poduzetne"
            },
            {
                "name": "Fortune",
                "url": "https://fortune.com/",
                "domain": "fortune.com",
                "description": "Fortune"
            },
            {
                "name": "Forbes.com",
                "url": "https://www.forbes.com/",
                "domain": "forbes.com",
                "description": "Forbes"
            },
            {
                "name": "FinInfo.hr",
                "url": "https://www.fininfo.hr/",
                "domain": "fininfo.hr",
                "description": "Registar poslovnih subjekata"
            },
            {
                "name": "FIMA vrijednosnice",
                "url": "https://fima-vrijednosnice.hr/",
                "domain": "fima-vrijednosnice.hr",
                "description": ""
            },
            {
                "name": "Ferratum Bank",
                "url": "https://www.ferratumbank.hr/",
                "domain": "ferratumbank.hr",
                "description": ""
            },
            {
                "name": "Euroherc osiguranje",
                "url": "https://www.euroherc.hr/",
                "domain": "euroherc.hr",
                "description": ""
            },
            {
                "name": "Erste &#038; Steiermärkische S-Leasing",
                "url": "https://www.ersteleasing.hr/hr/naslovnica",
                "domain": "ersteleasing.hr",
                "description": ""
            },
            {
                "name": "Erste &#038; Steiermärkische Bank",
                "url": "https://www.erstebank.hr/hr/gradjanstvo",
                "domain": "erstebank.hr",
                "description": ""
            },
            {
                "name": "Entrepreneur.com",
                "url": "https://www.entrepreneur.com/",
                "domain": "entrepreneur.com",
                "description": "Entrepreneur"
            },
            {
                "name": "EnergyPress.net",
                "url": "https://www.energypress.net/",
                "domain": "energypress.net",
                "description": "Regionalni energetski portal"
            },
            {
                "name": "Energetika-Net.com",
                "url": "https://www.energetika-net.com/",
                "domain": "energetika-net.com",
                "description": "Portal za energetiku"
            },
            {
                "name": "electus.hr",
                "url": "https://electus.hr/",
                "domain": "electus.hr",
                "description": "Electus DSG"
            },
            {
                "name": "Economist.com",
                "url": "https://www.economist.com/",
                "domain": "economist.com",
                "description": "The Economist"
            },
            {
                "name": "dgs.hr",
                "url": "https://www.dgs.hr/home",
                "domain": "dgs.hr",
                "description": "DGS Pomorci"
            },
            {
                "name": "Dekra-zapo.hr",
                "url": "https://dekra-arbeit.hr/",
                "domain": "dekra-arbeit.hr",
                "description": "Dekra"
            },
            {
                "name": "Croatia osiguranje",
                "url": "https://crosig.hr/",
                "domain": "crosig.hr",
                "description": ""
            },
            {
                "name": "Croatiabiz.com",
                "url": "https://www.croatiabiz.com/",
                "domain": "croatiabiz.com",
                "description": "HR poslovni imenik i info portal"
            },
            {
                "name": "Careerjet.com.hr",
                "url": "https://www.careerjet.com.hr/",
                "domain": "careerjet.com.hr",
                "description": "Tražilica za posao"
            },
            {
                "name": "BusinessIN.hr",
                "url": "https://businessin.hr/",
                "domain": "businessin.hr",
                "description": "Internetski news i business portal"
            },
            {
                "name": "Burza.com.hr",
                "url": "https://burza.com.hr/oglasi/posao",
                "domain": "burza.com.hr",
                "description": "Tražilica za posao"
            },
            {
                "name": "Bloomberg.com",
                "url": "https://www.bloomberg.com/europe",
                "domain": "bloomberg.com",
                "description": "Bloomberg Businessweek"
            },
            {
                "name": "BKS",
                "url": "https://www.bks.hr/leasing",
                "domain": "bks.hr",
                "description": "leasing Croatia"
            },
            {
                "name": "Banka Kovanica",
                "url": "https://www.kovanica.hr/",
                "domain": "kovanica.hr",
                "description": ""
            },
            {
                "name": "Ayvens",
                "url": "https://www.ayvens.com/hr-hr/",
                "domain": "ayvens.com",
                "description": ""
            },
            {
                "name": "Ambalaža.hr",
                "url": "https://www.ambalaza.hr/hr/",
                "domain": "ambalaza.hr",
                "description": "Informativni portal o ambalažnoj i grafičkoj industriji"
            },
            {
                "name": "Allianz osiguranje",
                "url": "https://www.allianz.hr/hr_HR/privatni-korisnici.html",
                "domain": "allianz.hr",
                "description": ""
            },
            {
                "name": "AgroPortal.hr",
                "url": "https://www.agroportal.hr/",
                "domain": "agroportal.hr",
                "description": "Poljoprivredna proizvodnja"
            },
            {
                "name": "AgroKlub.com",
                "url": "https://www.agroklub.com/",
                "domain": "agroklub.com",
                "description": "Poljoprivreda i prehrambena industrija"
            },
            {
                "name": "Agram Leasing",
                "url": "https://www.agramleasing.hr/",
                "domain": "agramleasing.hr",
                "description": ""
            },
            {
                "name": "Agram Banka",
                "url": "https://www.agrambanka.hr/",
                "domain": "agrambanka.hr",
                "description": ""
            },
            {
                "name": "Adriatic osiguranje",
                "url": "https://www.adriatic-osiguranje.hr/",
                "domain": "adriatic-osiguranje.hr",
                "description": ""
            },
            {
                "name": "adorio.hr",
                "url": "https://www.adorio.hr/",
                "domain": "adorio.hr",
                "description": "oglasni portal za poslove"
            },
            {
                "name": "Addiko Bank",
                "url": "https://www.addiko.hr/",
                "domain": "addiko.hr",
                "description": ""
            },
            {
                "name": "Lider.media",
                "url": "https://lider.media/",
                "domain": "lider.media",
                "description": "Najutjecajniji poslovni tjednik i portal u Hrvatskoj"
            },
            {
                "name": "Forbes Croatia",
                "url": "https://forbes.n1info.hr/",
                "domain": "forbes.n1info.hr",
                "description": "Hrvatsko izdanje vodećeg svjetskog poslovnog medija"
            }
        ],
        "auti": [
            {
                "name": "Škoda.hr",
                "url": "https://www.skoda.hr/",
                "domain": "skoda.hr",
                "description": ""
            },
            {
                "name": "Čačkalo",
                "url": "https://www.cackalo.hr/auto-moto",
                "domain": "cackalo.hr",
                "description": ""
            },
            {
                "name": "Zaloznaprava.fina.hr",
                "url": "https://zaloznaprava.fina.hr/upzap/public/prepare.do",
                "domain": "zaloznaprava.fina.hr",
                "description": "Upisnik založnih prava pokretnina"
            },
            {
                "name": "Yamaha-motor.hr",
                "url": "https://www.yamaha-motor.eu/hr/hr/home/",
                "domain": "yamaha-motor.eu",
                "description": ""
            },
            {
                "name": "Volvo.com",
                "url": "https://www.volvocars.com/hr/",
                "domain": "volvocars.com",
                "description": ""
            },
            {
                "name": "Volkswagen.hr",
                "url": "https://www.volkswagen.hr/",
                "domain": "volkswagen.hr",
                "description": ""
            },
            {
                "name": "ViktorMotoSport.hr",
                "url": "https://viktormotosport.hr/",
                "domain": "viktormotosport.hr",
                "description": ""
            },
            {
                "name": "Vidi Auto",
                "url": "https://www.vidiauto.com/",
                "domain": "vidiauto.com",
                "description": ""
            },
            {
                "name": "Toyota.hr",
                "url": "https://www.toyota.hr/",
                "domain": "toyota.hr",
                "description": ""
            },
            {
                "name": "Tokic.hr",
                "url": "https://www.tokic.hr/",
                "domain": "tokic.hr",
                "description": "Tokić Autodijelovi"
            },
            {
                "name": "SvijetSkutera.com",
                "url": "https://svijetskutera.com/",
                "domain": "svijetskutera.com",
                "description": "Mrežne stranice o skuterima"
            },
            {
                "name": "Suzuki.hr",
                "url": "https://www.suzuki.hr/",
                "domain": "suzuki.hr",
                "description": ""
            },
            {
                "name": "Seat.hr",
                "url": "https://www.seat.hr/",
                "domain": "seat.hr",
                "description": ""
            },
            {
                "name": "Rimac-automobili.com",
                "url": "https://www.rimac-automobili.com/",
                "domain": "rimac-automobili.com",
                "description": ""
            },
            {
                "name": "Renault.hr",
                "url": "https://www.renault.hr/",
                "domain": "renault.hr",
                "description": ""
            },
            {
                "name": "Porsche.com",
                "url": "https://dealer.porsche.com/hr/zagreb?cs_redirect=1",
                "domain": "dealer.porsche.com",
                "description": ""
            },
            {
                "name": "Piaggio.com",
                "url": "https://www.piaggio.com/hr_HR/",
                "domain": "piaggio.com",
                "description": ""
            },
            {
                "name": "Peugeot.hr",
                "url": "https://www.peugeot.hr/",
                "domain": "peugeot.hr",
                "description": ""
            },
            {
                "name": "Pegas Japanparts",
                "url": "https://www.pegas.hr/",
                "domain": "pegas.hr",
                "description": "autodijelovi i servis za japanska i korejska vozila"
            },
            {
                "name": "Opel.hr",
                "url": "https://www.opel.hr/",
                "domain": "opel.hr",
                "description": ""
            },
            {
                "name": "Novema-nova.hr",
                "url": "https://novema-nova.hr/",
                "domain": "novema-nova.hr",
                "description": "Najveći izbor moto opreme"
            },
            {
                "name": "Njuškalo",
                "url": "https://www.njuskalo.hr/auto-moto",
                "domain": "njuskalo.hr",
                "description": ""
            },
            {
                "name": "MotorMania.hr",
                "url": "https://motormania.hr/",
                "domain": "motormania.hr",
                "description": "Motoristička oprema i dodaci"
            },
            {
                "name": "Motori.hr",
                "url": "https://www.motori.hr/",
                "domain": "motori.hr",
                "description": "Hrvatski moto portal"
            },
            {
                "name": "Motorevija.com",
                "url": "https://www.motorevija.com.hr/",
                "domain": "motorevija.com.hr",
                "description": "Portal časopisa Motorevija"
            },
            {
                "name": "Motopuls.hr",
                "url": "https://www.motopuls.hr/",
                "domain": "motopuls.hr",
                "description": "Portal časopisa Moto Plus"
            },
            {
                "name": "Motooprema.hr",
                "url": "https://www.motooprema.hr/",
                "domain": "motooprema.hr",
                "description": "Motoristička oprema i dodaci"
            },
            {
                "name": "Molydon.hr",
                "url": "https://www.molydon.hr/",
                "domain": "molydon.hr",
                "description": ""
            },
            {
                "name": "MojSkuter.com",
                "url": "https://www.mojskuter.com/",
                "domain": "mojskuter.com",
                "description": "Mrežna lokacija o skuterima"
            },
            {
                "name": "Mobile.de",
                "url": "https://www.mobile.de/",
                "domain": "mobile.de",
                "description": ""
            },
            {
                "name": "Mercedes-benz.hr",
                "url": "https://www.mercedes-benz.hr/",
                "domain": "mercedes-benz.hr",
                "description": ""
            },
            {
                "name": "Louis.de",
                "url": "https://www.louis.de/",
                "domain": "louis.de",
                "description": "Motoristička oprema i dodaci"
            },
            {
                "name": "Kymco.hr",
                "url": "https://kymco.hr/",
                "domain": "kymco.hr",
                "description": ""
            },
            {
                "name": "Kia.hr",
                "url": "https://www.kia.hr/",
                "domain": "kia.hr",
                "description": ""
            },
            {
                "name": "Hyundai.hr",
                "url": "https://www.hyundai.hr/",
                "domain": "hyundai.hr",
                "description": ""
            },
            {
                "name": "Hrvatski ured za osiguranje",
                "url": "https://huo.hr/hr/",
                "domain": "huo.hr",
                "description": ""
            },
            {
                "name": "Honda.hr",
                "url": "https://honda.hr/motocikli/",
                "domain": "honda.hr",
                "description": ""
            },
            {
                "name": "Honda.hr",
                "url": "https://www.honda.hr/",
                "domain": "honda.hr",
                "description": ""
            },
            {
                "name": "HAK",
                "url": "https://www.hak.hr/",
                "domain": "hak.hr",
                "description": "Hrvatski Auto Klub"
            },
            {
                "name": "HAC",
                "url": "https://www.hac.hr/hr",
                "domain": "hac.hr",
                "description": "Hrvatske Autoceste"
            },
            {
                "name": "Grobnik.hr",
                "url": "https://grobnik.hr/",
                "domain": "grobnik.hr",
                "description": "Automotodrom Grobnik"
            },
            {
                "name": "Ford.hr",
                "url": "https://ford.hr/",
                "domain": "ford.hr",
                "description": ""
            },
            {
                "name": "Fiat.hr",
                "url": "https://www.fiat.hr/",
                "domain": "fiat.hr",
                "description": ""
            },
            {
                "name": "Ducati.hr",
                "url": "https://ducati.hr/",
                "domain": "ducati.hr",
                "description": ""
            },
            {
                "name": "DU-moto.com",
                "url": "https://du-moto.com/",
                "domain": "du-moto.com",
                "description": "Dubrovački moto portal"
            },
            {
                "name": "Dacia.hr",
                "url": "https://www.dacia.hr/",
                "domain": "dacia.hr",
                "description": ""
            },
            {
                "name": "Citroen.hr",
                "url": "https://www.citroen.hr/",
                "domain": "citroen.hr",
                "description": ""
            },
            {
                "name": "CIAK-Auto.hr",
                "url": "https://ciak-auto.hr/",
                "domain": "ciak-auto.hr",
                "description": ""
            },
            {
                "name": "Bosch.com",
                "url": "https://www.boschaftermarket.com/hr/hr/",
                "domain": "boschaftermarket.com",
                "description": "Bosch autodijelovi i servisna oprema"
            },
            {
                "name": "BMW.hr",
                "url": "https://www.bmw.hr/hr/index.html",
                "domain": "bmw.hr",
                "description": ""
            },
            {
                "name": "BMW-motorrad.com.hr",
                "url": "https://www.bmw-motorrad.com.hr/hr/home.html#/filter-svi",
                "domain": "bmw-motorrad.com.hr",
                "description": ""
            },
            {
                "name": "AutoPress",
                "url": "https://www.autopress.hr/",
                "domain": "autopress.hr",
                "description": "Automobilski portal"
            },
            {
                "name": "AutoPortal",
                "url": "https://autoportal.hr/",
                "domain": "autoportal.hr",
                "description": "Hrvatski specijalizirani automobilistički portal"
            },
            {
                "name": "AutoNet.hr",
                "url": "https://autonet.bug.hr/",
                "domain": "autonet.bug.hr",
                "description": "Hrvatski automobilski e-zine"
            },
            {
                "name": "Auto Motor i Sport",
                "url": "https://ams.hr/",
                "domain": "ams.hr",
                "description": ""
            },
            {
                "name": "Auto Moto Nautic Vision",
                "url": "https://www.automotovision.hr/",
                "domain": "automotovision.hr",
                "description": ""
            },
            {
                "name": "Automania.hr",
                "url": "https://automania.hr/",
                "domain": "automania.hr",
                "description": "Portal o automobilima"
            },
            {
                "name": "Auto Magazin",
                "url": "https://www.magazinauto.com/",
                "domain": "magazinauto.com",
                "description": ""
            },
            {
                "name": "AutoKrešo.hr",
                "url": "https://www.autokreso.hr/",
                "domain": "autokreso.hr",
                "description": ""
            },
            {
                "name": "Autoklub Siget",
                "url": "https://aksiget.hr/",
                "domain": "aksiget.hr",
                "description": ""
            },
            {
                "name": "Auti.hr",
                "url": "https://www.auti.hr/",
                "domain": "auti.hr",
                "description": ""
            },
            {
                "name": "Audi.hr",
                "url": "https://www.audi.hr/",
                "domain": "audi.hr",
                "description": ""
            }
        ],
        "ostalo": [
        {
            "name": "Morski.HR",
            "url": "https://morski.hr/",
            "domain": "morski.hr",
            "description": "Portal za more, nautiku i ekologiju Jadrana"
        },
        {
            "name": "Mirovina.hr",
            "url": "https://mirovina.hr/",
            "domain": "mirovina.hr",
            "description": "Portal za umirovljenike i starije generacije"
        },
        {
            "name": "Mixer.hr",
            "url": "https://mixer.hr/",
            "domain": "mixer.hr",
            "description": "Kultura, glazba i zabava"
        },
        {
            "name": "Music Box",
            "url": "https://music-box.hr/",
            "domain": "music-box.hr",
            "description": "Glazbene vijesti i recenzije"
        },
        {
            "name": "Glazba.hr",
            "url": "https://glazba.hr/",
            "domain": "glazba.hr",
            "description": "Hrvatski glazbeni portal"
        },
            {
                "name": "Škole.hr",
                "url": "https://www.skole.hr/",
                "domain": "skole.hr",
                "description": "CARNet-ov portal za škole"
            },
            {
                "name": "Čačkalo",
                "url": "https://www.cackalo.hr/",
                "domain": "cackalo.hr",
                "description": ""
            },
            {
                "name": "Z1TV.hr",
                "url": "https://www.z1tv.hr/hr/",
                "domain": "z1tv.hr",
                "description": "Z1 televizija"
            },
            {
                "name": "Yr",
                "url": "https://www.yr.no/en",
                "domain": "yr.no",
                "description": "Norveška prognoza"
            },
            {
                "name": "Youtube.com",
                "url": "https://www.youtube.com/",
                "domain": "youtube.com",
                "description": ""
            },
            {
                "name": "Yammat.fm",
                "url": "https://www.yammat.fm/",
                "domain": "yammat.fm",
                "description": ""
            },
            {
                "name": "Yahoo.com",
                "url": "https://www.yahoo.com/",
                "domain": "yahoo.com",
                "description": "Globalni internetski portal"
            },
            {
                "name": "X.com (Twitter)",
                "url": "https://x.com/",
                "domain": "x.com",
                "description": ""
            },
            {
                "name": "WorldMeters.info",
                "url": "https://www.worldometers.info/",
                "domain": "worldometers.info",
                "description": "Trenutan broj ljudi na svijetu, broj količine potrošene energije..."
            },
            {
                "name": "WordPress.org",
                "url": "https://wordpress.org/",
                "domain": "wordpress.org",
                "description": ""
            },
            {
                "name": "Wikipedia.org",
                "url": "https://www.wikipedia.org/",
                "domain": "wikipedia.org",
                "description": ""
            },
            {
                "name": "Washingtonpost.com",
                "url": "https://www.washingtonpost.com/",
                "domain": "washingtonpost.com",
                "description": ""
            },
            {
                "name": "Vrijeme i radar Hrvatska",
                "url": "https://www.vrijemeradar.hr/",
                "domain": "vrijemeradar.hr",
                "description": ""
            },
            {
                "name": "Volim zdravlje",
                "url": "https://volimzdravlje.hr/",
                "domain": "volimzdravlje.hr",
                "description": ""
            },
            {
                "name": "Vlada HR",
                "url": "https://vlada.gov.hr/",
                "domain": "vlada.gov.hr",
                "description": ""
            },
            {
                "name": "Vinted",
                "url": "https://www.vinted.hr/",
                "domain": "vinted.hr",
                "description": ""
            },
            {
                "name": "Vimeo.com",
                "url": "https://vimeo.com/",
                "domain": "vimeo.com",
                "description": ""
            },
            {
                "name": "Vidi.hr",
                "url": "https://www.vidi.hr/",
                "domain": "vidi.hr",
                "description": "Web portal Vidi-To"
            },
            {
                "name": "VicMaher.com",
                "url": "https://www.vicmaher.com/",
                "domain": "vicmaher.com",
                "description": "Vicevi, šale i humor za svaki dan"
            },
            {
                "name": "Vicevi.hr",
                "url": "https://vicevi.hr/",
                "domain": "vicevi.hr",
                "description": "Arhiva kvalitetnih viceva"
            },
            {
                "name": "Večernji.ba",
                "url": "https://www.vecernji.ba/",
                "domain": "vecernji.ba",
                "description": "Dnevno novinsko izdanje za BiH"
            },
            {
                "name": "USAToday.com",
                "url": "https://www.usatoday.com/",
                "domain": "usatoday.com",
                "description": ""
            },
            {
                "name": "Ured za zakonodavstvo",
                "url": "https://zakonodavstvo.gov.hr/",
                "domain": "zakonodavstvo.gov.hr",
                "description": ""
            },
            {
                "name": "Ured za unutarnju reviziju",
                "url": "https://vlada.gov.hr/o-vladi/kako-funkcionira-vlada/uredi-vlade/ured-za-unutarnju-reviziju/32001?lang=hr",
                "domain": "vlada.gov.hr",
                "description": ""
            },
            {
                "name": "Ured za udruge",
                "url": "https://udruge.gov.hr/",
                "domain": "udruge.gov.hr",
                "description": ""
            },
            {
                "name": "Ured za suzbijanje zloupotrebe droga",
                "url": "https://drogeiovisnosti.gov.hr/",
                "domain": "drogeiovisnosti.gov.hr",
                "description": ""
            },
            {
                "name": "Ured zastupnika RH pred Europskim sudom za ljudska prava",
                "url": "https://uredzastupnika.gov.hr/",
                "domain": "uredzastupnika.gov.hr",
                "description": ""
            },
            {
                "name": "Ured za razminiravanje",
                "url": "https://sredisnjikatalogrh.gov.hr/adresar/adresar-tijela-javne-vlasti/detalji?searchTerm=filterfi5B106405D273920&id=338443&st=1",
                "domain": "sredisnjikatalogrh.gov.hr",
                "description": ""
            },
            {
                "name": "Ured za ravnopravnost",
                "url": "https://ravnopravnost.gov.hr/",
                "domain": "ravnopravnost.gov.hr",
                "description": ""
            },
            {
                "name": "Ured za opće poslove Hrvatskog sabora i Vlade RH",
                "url": "https://gov.hr/ured-za-opce-poslove-hrvatskog-sabora-i-vlade-republike-hrvatske/1546",
                "domain": "gov.hr",
                "description": ""
            },
            {
                "name": "Ured za ljudska prava i prava nacionalnih manjina",
                "url": "https://ljudskaprava.gov.hr/",
                "domain": "ljudskaprava.gov.hr",
                "description": ""
            },
            {
                "name": "Ured predsjednika Vlade Republike Hrvatske",
                "url": "https://vlada.gov.hr/predsjednik-vlade-65/ured-predsjednika-vlade/87",
                "domain": "vlada.gov.hr",
                "description": ""
            },
            {
                "name": "Ured predsjednika/ce RH",
                "url": "https://www.predsjednik.hr/",
                "domain": "predsjednik.hr",
                "description": ""
            },
            {
                "name": "Ured Komisije ua odnose s vjerskim zajednicama.",
                "url": "https://gov.hr/ured-komisije-za-odnose-s-vjerskim-zajednicama/1548",
                "domain": "gov.hr",
                "description": ""
            },
            {
                "name": "Udruga franak",
                "url": "https://udrugafranak.hr/",
                "domain": "udrugafranak.hr",
                "description": ""
            },
            {
                "name": "Tumblr.com",
                "url": "https://www.tumblr.com/",
                "domain": "tumblr.com",
                "description": ""
            },
            {
                "name": "TRTBalkan.com",
                "url": "https://www.trtbalkan.com/",
                "domain": "trtbalkan.com",
                "description": "Portal Turske radiotelevizije na hrvatskom jeziku"
            },
            {
                "name": "Trivago.hr",
                "url": "https://www.trivago.hr/",
                "domain": "trivago.hr",
                "description": "Tražilica hotela s web stranica za rezervaciju"
            },
            {
                "name": "Trim",
                "url": "https://www.trim.hr/",
                "domain": "trim.hr",
                "description": ""
            },
            {
                "name": "Total/Coratia-News.com",
                "url": "https://total-croatia-news.com/",
                "domain": "total-croatia-news.com",
                "description": "Portal na engleskom"
            },
            {
                "name": "tomato",
                "url": "https://www.tomato.com.hr/",
                "domain": "tomato.com.hr",
                "description": ""
            },
            {
                "name": "TikTok.com",
                "url": "https://www.tiktok.com/",
                "domain": "tiktok.com",
                "description": ""
            },
            {
                "name": "TheGuardian.com",
                "url": "https://www.theguardian.com/international",
                "domain": "theguardian.com",
                "description": ""
            },
            {
                "name": "Temu.com",
                "url": "https://www.temu.com",
                "domain": "temu.com",
                "description": ""
            },
            {
                "name": "Telemach",
                "url": "https://telemach.hr/",
                "domain": "telemach.hr",
                "description": ""
            },
            {
                "name": "Telegraph.co.uk",
                "url": "https://www.telegraph.co.uk/",
                "domain": "telegraph.co.uk",
                "description": ""
            },
            {
                "name": "TED.com",
                "url": "https://www.ted.com/",
                "domain": "ted.com",
                "description": "Globalni skup konferencija \"Ideje vrijedne širenja\""
            },
            {
                "name": "SviPopusti.hr -Grupna kupovina u Hrvatskoj",
                "url": "https://svipopusti.hr/",
                "domain": "svipopusti.hr",
                "description": ""
            },
            {
                "name": "Sveučilište u ZG",
                "url": "https://www.unizg.hr/",
                "domain": "unizg.hr",
                "description": ""
            },
            {
                "name": "Supermame.hr",
                "url": "https://supermame.hr/",
                "domain": "supermame.hr",
                "description": "iskreno o majčinstvu"
            },
            {
                "name": "Studentski.hr",
                "url": "https://studentski.hr/",
                "domain": "studentski.hr",
                "description": "Studentski informativni kutak"
            },
            {
                "name": "Srednja.hr",
                "url": "https://www.srednja.hr/",
                "domain": "srednja.hr",
                "description": "Portal za srednjoškolce i studente"
            },
            {
                "name": "Središnji katalog službenih dokumenata RH",
                "url": "https://sredisnjikatalogrh.gov.hr/sredisnji-katalog/pravni-propisi",
                "domain": "sredisnjikatalogrh.gov.hr",
                "description": ""
            },
            {
                "name": "Središnji državni ured za središnju javnu nabavu",
                "url": "https://sredisnjanabava.gov.hr/",
                "domain": "sredisnjanabava.gov.hr",
                "description": ""
            },
            {
                "name": "Središnji državni ured za Hrvate izvan RH",
                "url": "https://hrvatiizvanrh.gov.hr/",
                "domain": "hrvatiizvanrh.gov.hr",
                "description": ""
            },
            {
                "name": "SpreedTest.net",
                "url": "https://www.speedtest.net/",
                "domain": "speedtest.net",
                "description": "Provjera brzine interneta"
            },
            {
                "name": "Sprdex.com",
                "url": "https://sprdex.com/",
                "domain": "sprdex.com",
                "description": "Satirični portal"
            },
            {
                "name": "SportTube",
                "url": "https://www.sporttube.com/en/football",
                "domain": "sporttube.com",
                "description": ""
            },
            {
                "name": "SoundCloud.com",
                "url": "https://soundcloud.com/",
                "domain": "soundcloud.com",
                "description": ""
            },
            {
                "name": "SlobodnaEuropa.org",
                "url": "https://www.slobodnaevropa.org/",
                "domain": "slobodnaevropa.org",
                "description": ""
            },
            {
                "name": "Sloboda.hr",
                "url": "http://www.sloboda.hr/",
                "domain": "sloboda.hr",
                "description": "Nezavisni medijski portal"
            },
            {
                "name": "RTVSLO.si",
                "url": "https://www.rtvslo.si/",
                "domain": "rtvslo.si",
                "description": "Portal Slovenskog javnog RTV servisa"
            },
            {
                "name": "Roditelji.hr",
                "url": "https://story.hr/roditelji",
                "domain": "story.hr",
                "description": "Portal za roditelje, djecu i obitelj"
            },
            {
                "name": "Roda.hr",
                "url": "https://www.roda.hr/",
                "domain": "roda.hr",
                "description": "Roditelji u akciji"
            },
            {
                "name": "Reuters.com",
                "url": "https://www.reuters.com/",
                "domain": "reuters.com",
                "description": ""
            },
            {
                "name": "Reddit.com",
                "url": "https://www.reddit.com/",
                "domain": "reddit.com",
                "description": ""
            },
            {
                "name": "ReciPeci.com",
                "url": "https://recipeci.com/",
                "domain": "recipeci.com",
                "description": "Blog Sandre Gašparić o kuhanju"
            },
            {
                "name": "Recepti.hr",
                "url": "https://www.recepti.hr/",
                "domain": "recepti.hr",
                "description": "Autohtoni i tradicionalni hrvatski recepti"
            },
            {
                "name": "RadioStanica.com",
                "url": "https://www.radiostanica.com/",
                "domain": "radiostanica.com",
                "description": ""
            },
            {
                "name": "Pučka pravobraniteljica",
                "url": "https://www.ombudsman.hr/hr/",
                "domain": "ombudsman.hr",
                "description": ""
            },
            {
                "name": "PunKufer.hr",
                "url": "https://punkufer.dnevnik.hr/",
                "domain": "punkufer.dnevnik.hr",
                "description": "Portal za hranu i putovanja"
            },
            {
                "name": "Prvi.hr",
                "url": "https://www.prvi.hr/",
                "domain": "prvi.hr",
                "description": "Radijski informativni portal"
            },
            {
                "name": "Priznajem.hr",
                "url": "https://www.priznajem.hr/",
                "domain": "priznajem.hr",
                "description": "Hrvatski domoljubni portal"
            },
            {
                "name": "Prijedlozi i komentari",
                "url": "https://gov.hr/beta-komentari/1540",
                "domain": "gov.hr",
                "description": ""
            },
            {
                "name": "Prevoditelj",
                "url": "https://translate.google.hr",
                "domain": "translate.google.hr",
                "description": ""
            },
            {
                "name": "Pozivi za žurnu pomoć",
                "url": "https://civilna-zastita.gov.hr/izdvojeno/pozivi-za-zurnu-pomoc/265",
                "domain": "civilna-zastita.gov.hr",
                "description": ""
            },
            {
                "name": "Povjerenik za informacije",
                "url": "https://pristupinfo.hr/",
                "domain": "pristupinfo.hr",
                "description": ""
            },
            {
                "name": "POSLuH",
                "url": "https://www.posluh.hr/",
                "domain": "posluh.hr",
                "description": ""
            },
            {
                "name": "Portal RTV Federacije BiH",
                "url": "https://www.federalna.ba/",
                "domain": "federalna.ba",
                "description": ""
            },
            {
                "name": "Portal otvorenih podataka",
                "url": "https://data.gov.hr/",
                "domain": "data.gov.hr",
                "description": ""
            },
            {
                "name": "Portal-ostro.hr",
                "url": "https://www.portal-ostro.hr/",
                "domain": "portal-ostro.hr",
                "description": ""
            },
            {
                "name": "Popis tijela javne vlasti",
                "url": "https://tjv.pristupinfo.hr/",
                "domain": "tjv.pristupinfo.hr",
                "description": ""
            },
            {
                "name": "Popis javnih bilježnika",
                "url": "https://www.hjk.hr/",
                "domain": "hjk.hr",
                "description": ""
            },
            {
                "name": "Političke stranke i izbori",
                "url": "https://sredisnjikatalogrh.gov.hr/politicke-stranke-i-izbori/adresar-politickih-stranaka",
                "domain": "sredisnjikatalogrh.gov.hr",
                "description": ""
            },
            {
                "name": "PolitikaPlus.com",
                "url": "https://politikaplus.com/",
                "domain": "politikaplus.com",
                "description": "Političko analitički portal"
            },
            {
                "name": "Pinterest.com",
                "url": "https://www.pinterest.com/",
                "domain": "pinterest.com",
                "description": ""
            },
            {
                "name": "PayPal.com",
                "url": "https://www.paypal.com/hr/home",
                "domain": "paypal.com",
                "description": ""
            },
            {
                "name": "Overseas express",
                "url": "https://overseas.hr/hr/",
                "domain": "overseas.hr",
                "description": ""
            },
            {
                "name": "Outlook",
                "url": "https://outlook.live.com/mail/",
                "domain": "outlook.live.com",
                "description": ""
            },
            {
                "name": "Otvoreni.hr",
                "url": "https://www.otvoreni.hr/naslovna/",
                "domain": "otvoreni.hr",
                "description": ""
            },
            {
                "name": "OTP banka",
                "url": "https://www.otpbanka.hr/gradani",
                "domain": "otpbanka.hr",
                "description": ""
            },
            {
                "name": "O središnjem državnom portalu",
                "url": "https://vlada.gov.hr/default.aspx",
                "domain": "vlada.gov.hr",
                "description": ""
            },
            {
                "name": "NYTimes.com",
                "url": "https://www.nytimes.com/",
                "domain": "nytimes.com",
                "description": ""
            },
            {
                "name": "Novatv.dnevnik.hr",
                "url": "https://novatv.dnevnik.hr/",
                "domain": "novatv.dnevnik.hr",
                "description": "Portal televizije NOVA TV"
            },
            {
                "name": "Njuškalo",
                "url": "https://www.njuskalo.hr/",
                "domain": "njuskalo.hr",
                "description": ""
            },
            {
                "name": "NikTitanikStudio.com",
                "url": "https://www.niktitanikstudio.com/blog/",
                "domain": "niktitanikstudio.com",
                "description": "Humoristički portal"
            },
            {
                "name": "Nezavisni.hr",
                "url": "https://nezavisni.hr/",
                "domain": "nezavisni.hr",
                "description": "Portal neovisnog novinarstva"
            },
            {
                "name": "News.sky.com",
                "url": "https://news.sky.com/",
                "domain": "news.sky.com",
                "description": ""
            },
            {
                "name": "Nastavnici.org",
                "url": "https://nastavnici.org/",
                "domain": "nastavnici.org",
                "description": "Portal za učitelje i nastavnike"
            },
            {
                "name": "NASA.gov",
                "url": "https://www.nasa.gov/",
                "domain": "nasa.gov",
                "description": "Američka svemirska agencija"
            },
            {
                "name": "Narodne novine",
                "url": "https://www.nn.hr/",
                "domain": "nn.hr",
                "description": ""
            },
            {
                "name": "Narodne novine",
                "url": "https://e-trgovina.nn.hr/",
                "domain": "e-trgovina.nn.hr",
                "description": ""
            },
            {
                "name": "Nacional.hr",
                "url": "https://www.nacional.hr/",
                "domain": "nacional.hr",
                "description": "Portal tjednika Nacional"
            },
            {
                "name": "Myspace.com",
                "url": "https://myspace.com/",
                "domain": "myspace.com",
                "description": ""
            },
            {
                "name": "MSN.com",
                "url": "https://www.msn.com/en-xl",
                "domain": "msn.com",
                "description": "Microsoftov portal"
            },
            {
                "name": "Mreža.tv",
                "url": "https://www.mreza.tv/",
                "domain": "mreza.tv",
                "description": "Nezavisna televizija"
            },
            {
                "name": "Monitor.hr",
                "url": "https://www.monitor.hr/",
                "domain": "monitor.hr",
                "description": "Web portal Internet Monitor"
            },
            {
                "name": "Moj tv",
                "url": "https://mojtv.hr/",
                "domain": "mojtv.hr",
                "description": ""
            },
            {
                "name": "MissMama.hr",
                "url": "https://miss7mama.24sata.hr/",
                "domain": "miss7mama.24sata.hr",
                "description": "Moja obitelj, moja misija"
            },
            {
                "name": "Ministarstvo znanosti, obrazovanja i mladih",
                "url": "https://mzom.gov.hr/",
                "domain": "mzom.gov.hr",
                "description": ""
            },
            {
                "name": "Ministarstvo zdravstva",
                "url": "https://zdravlje.gov.hr/",
                "domain": "zdravlje.gov.hr",
                "description": ""
            },
            {
                "name": "Ministarstvo zaštite okoliša i zelene tranzicije",
                "url": "https://mzozt.gov.hr/",
                "domain": "mzozt.gov.hr",
                "description": ""
            },
            {
                "name": "Ministarstvo vanjskih i europskih poslova",
                "url": "https://mvep.gov.hr/",
                "domain": "mvep.gov.hr",
                "description": ""
            },
            {
                "name": "Ministarstvo unutarnjih poslova",
                "url": "https://mup.gov.hr/",
                "domain": "mup.gov.hr",
                "description": ""
            },
            {
                "name": "Ministarstvo turizma i sporta",
                "url": "https://mint.gov.hr/",
                "domain": "mint.gov.hr",
                "description": ""
            },
            {
                "name": "Ministarstvo regionalnoga razvoja i fondova Europske unije",
                "url": "https://razvoj.gov.hr/",
                "domain": "razvoj.gov.hr",
                "description": ""
            },
            {
                "name": "Ministarstvo rada, mirovinskoga sustava, obitelji i socijalne politike",
                "url": "https://mrosp.gov.hr/",
                "domain": "mrosp.gov.hr",
                "description": ""
            },
            {
                "name": "Ministarstvo prostornoga uređenja, graditeljstva i državne imovine",
                "url": "https://mpgi.gov.hr/",
                "domain": "mpgi.gov.hr",
                "description": ""
            },
            {
                "name": "Ministarstvo pravosuđa, uprave i digitalne transformacije",
                "url": "https://mpudt.gov.hr/",
                "domain": "mpudt.gov.hr",
                "description": ""
            },
            {
                "name": "Ministarstvo poljoprivrede, šumarstva i ribarstva",
                "url": "https://poljoprivreda.gov.hr/",
                "domain": "poljoprivreda.gov.hr",
                "description": ""
            },
            {
                "name": "Ministarstvo obrane RH",
                "url": "https://www.morh.hr/",
                "domain": "morh.hr",
                "description": ""
            },
            {
                "name": "Ministarstvo mora, prometa i infrastrukture",
                "url": "https://mmpi.gov.hr/",
                "domain": "mmpi.gov.hr",
                "description": ""
            },
            {
                "name": "Ministarstvo kulture i medija",
                "url": "https://min-kulture.gov.hr/",
                "domain": "min-kulture.gov.hr",
                "description": ""
            },
            {
                "name": "Ministarstvo hrvatskih branitelja",
                "url": "https://branitelji.gov.hr/",
                "domain": "branitelji.gov.hr",
                "description": ""
            },
            {
                "name": "Ministarstvo gospodarstva",
                "url": "https://mingo.gov.hr/",
                "domain": "mingo.gov.hr",
                "description": ""
            },
            {
                "name": "Ministarstvo financija",
                "url": "https://mfin.gov.hr/",
                "domain": "mfin.gov.hr",
                "description": ""
            },
            {
                "name": "Microsoft.com",
                "url": "https://www.microsoft.com/hr-hr/",
                "domain": "microsoft.com",
                "description": ""
            },
            {
                "name": "Metro-portal.hr",
                "url": "http://metro-portal.hr/",
                "domain": "metro-portal.hr",
                "description": "Urbani portal"
            },
            {
                "name": "Meteoblue",
                "url": "https://www.meteoblue.com/hr/",
                "domain": "meteoblue.com",
                "description": ""
            },
            {
                "name": "Meteo.hr",
                "url": "https://meteo.hr/",
                "domain": "meteo.hr",
                "description": "Državni hidrometeorološki zavod (DHMZ)"
            },
            {
                "name": "Merlin",
                "url": "https://moodle.srce.hr/",
                "domain": "moodle.srce.hr",
                "description": "sustav za e-učenje"
            },
            {
                "name": "Men&#8217;s Health",
                "url": "https://www.menshealth.hr/",
                "domain": "menshealth.hr",
                "description": ""
            },
            {
                "name": "Mediaservis.hr",
                "url": "http://www.mediaservis.hr/",
                "domain": "mediaservis.hr",
                "description": "Izvor vijesti iz Hrvatske"
            },
            {
                "name": "Maxportal.hr",
                "url": "https://www.maxportal.hr/",
                "domain": "maxportal.hr",
                "description": "Hrvatski desni portal"
            },
            {
                "name": "Mamin ručak",
                "url": "https://maminrucak.hr/",
                "domain": "maminrucak.hr",
                "description": ""
            },
            {
                "name": "Mamaklik.com",
                "url": "https://www.mamaklik.com/",
                "domain": "mamaklik.com",
                "description": "magazin za žene"
            },
            {
                "name": "Mall.hr",
                "url": "https://www.mall.hr/",
                "domain": "mall.hr",
                "description": ""
            },
            {
                "name": "Linkedin",
                "url": "https://www.linkedin.com/",
                "domain": "linkedin.com",
                "description": ""
            },
            {
                "name": "Lektire.hr",
                "url": "https://www.lektire.hr/",
                "domain": "lektire.hr",
                "description": "Preuzimanje lektira za osnovnu i srednju školu"
            },
            {
                "name": "Latimes.com",
                "url": "https://www.latimes.com/",
                "domain": "latimes.com",
                "description": ""
            },
            {
                "name": "Laganini.fm",
                "url": "http://laganini.fm/",
                "domain": "laganini.fm",
                "description": ""
            },
            {
                "name": "KupiMe.hr",
                "url": "https://www.kupime.hr/",
                "domain": "kupime.hr",
                "description": "Portal za grupnu kupovinu"
            },
            {
                "name": "Klix.ba",
                "url": "https://www.klix.ba/",
                "domain": "klix.ba",
                "description": "Najposjećeniji bosanskohercegovački portal"
            },
            {
                "name": "Katastar",
                "url": "https://oss.uredjenazemlja.hr/",
                "domain": "oss.uredjenazemlja.hr",
                "description": ""
            },
            {
                "name": "Kamenjar.com",
                "url": "https://kamenjar.com/",
                "domain": "kamenjar.com",
                "description": "Nezavisni informativni portal"
            },
            {
                "name": "Joombla.org",
                "url": "https://www.joomla.org/",
                "domain": "joomla.org",
                "description": ""
            },
            {
                "name": "Jimdo.com",
                "url": "https://www.jimdo.com/",
                "domain": "jimdo.com",
                "description": ""
            },
            {
                "name": "JapanToday.com",
                "url": "https://japantoday.com/",
                "domain": "japantoday.com",
                "description": ""
            },
            {
                "name": "japantimes.co.jp",
                "url": "https://www.japantimes.co.jp/",
                "domain": "japantimes.co.jp",
                "description": ""
            },
            {
                "name": "Jadrolinija.hr",
                "url": "https://www.jadrolinija.hr/",
                "domain": "jadrolinija.hr",
                "description": "Hrvatski putnički brodar"
            },
            {
                "name": "Izvorni portal",
                "url": "https://izvoz.gov.hr/",
                "domain": "izvoz.gov.hr",
                "description": ""
            },
            {
                "name": "Iskustva.hr",
                "url": "https://www.iskustva.hr/",
                "domain": "iskustva.hr",
                "description": "Sva na jednom mjestu"
            },
            {
                "name": "Iskon",
                "url": "https://iskon.hr/",
                "domain": "iskon.hr",
                "description": ""
            },
            {
                "name": "Instagram.com",
                "url": "https://www.instagram.com/",
                "domain": "instagram.com",
                "description": ""
            },
            {
                "name": "InDizajn",
                "url": "https://indizajn.net.hr/",
                "domain": "indizajn.net.hr",
                "description": ""
            },
            {
                "name": "Index recepti",
                "url": "https://recepti.index.hr/",
                "domain": "recepti.index.hr",
                "description": ""
            },
            {
                "name": "Independent.co.uk",
                "url": "https://www.independent.co.uk/",
                "domain": "independent.co.uk",
                "description": ""
            },
            {
                "name": "IKEA",
                "url": "https://www.ikea.com/hr/hr/",
                "domain": "ikea.com",
                "description": ""
            },
            {
                "name": "Igre123",
                "url": "https://www.igre123.net/",
                "domain": "igre123.net",
                "description": ""
            },
            {
                "name": "iCloud",
                "url": "https://www.icloud.com/",
                "domain": "icloud.com",
                "description": ""
            },
            {
                "name": "HŽpp.hr",
                "url": "https://www.hzpp.hr/",
                "domain": "hzpp.hr",
                "description": "Hrvatske željeznice putnički prijevoz"
            },
            {
                "name": "HZZ (Burza rada)",
                "url": "https://burzarada.hzz.hr/Posloprimac_RadnaMjesta.aspx?AspxAutoDetectCookieSupport=1",
                "domain": "burzarada.hzz.hr",
                "description": ""
            },
            {
                "name": "Huffpost.com",
                "url": "https://www.huffpost.com/",
                "domain": "huffpost.com",
                "description": ""
            },
            {
                "name": "Hrvatski sabor",
                "url": "https://www.sabor.hr/",
                "domain": "sabor.hr",
                "description": ""
            },
            {
                "name": "Hrvatski sabor",
                "url": "https://www.sabor.hr/hr",
                "domain": "sabor.hr",
                "description": ""
            },
            {
                "name": "Hrvatska pošta",
                "url": "https://www.posta.hr/",
                "domain": "posta.hr",
                "description": ""
            },
            {
                "name": "Hrvatska Lutrija",
                "url": "https://www.lutrija.hr/",
                "domain": "lutrija.hr",
                "description": ""
            },
            {
                "name": "Hrvatska-danas.com",
                "url": "https://hrvatska-danas.com/",
                "domain": "hrvatska-danas.com",
                "description": "Portal udruge USB Lijepa naša"
            },
            {
                "name": "HRsvijet.net",
                "url": "http://www.hrsvijet.net/",
                "domain": "hrsvijet.net",
                "description": "Hrvatski informativni portal"
            },
            {
                "name": "HR 2 program",
                "url": "https://radio.hrt.hr/drugi-program",
                "domain": "radio.hrt.hr",
                "description": ""
            },
            {
                "name": "hr.RBTH.com",
                "url": "https://hr.rbth.com/",
                "domain": "hr.rbth.com",
                "description": "Vijesti iz Rusije na hrvatskom jeziku"
            },
            {
                "name": "HR-Tcom",
                "url": "https://www.hrvatskitelekom.hr/",
                "domain": "hrvatskitelekom.hr",
                "description": ""
            },
            {
                "name": "Hop.com.hr",
                "url": "https://www.hop.com.hr/",
                "domain": "hop.com.hr",
                "description": "Nezavisni news portal"
            },
            {
                "name": "HKV.hr",
                "url": "https://www.hkv.hr/",
                "domain": "hkv.hr",
                "description": "Portal Hrvatskog kulturnog vijeća"
            },
            {
                "name": "HKR.hr",
                "url": "https://hkr.hkm.hr/",
                "domain": "hkr.hkm.hr",
                "description": ""
            },
            {
                "name": "Hitro.hr",
                "url": "https://www.hitro.hr/",
                "domain": "hitro.hr",
                "description": ""
            },
            {
                "name": "Hina.hr",
                "url": "https://www.hina.hr/",
                "domain": "hina.hr",
                "description": "Hrvatska izvještajna novinarska agencija"
            },
            {
                "name": "Hia.com.hr",
                "url": "https://www.hia.com.hr/",
                "domain": "hia.com.hr",
                "description": "Hrvatsko iseljeništvo svijet"
            },
            {
                "name": "Google News",
                "url": "https://news.google.com/",
                "domain": "news.google.com",
                "description": "Google Vijesti"
            },
            {
                "name": "Google.com",
                "url": "https://www.google.com/",
                "domain": "google.com",
                "description": ""
            },
            {
                "name": "Gmail",
                "url": "https://mail.google.com/",
                "domain": "mail.google.com",
                "description": ""
            },
            {
                "name": "GLS",
                "url": "https://gls-group.com/HR/hr/home/",
                "domain": "gls-group.com",
                "description": ""
            },
            {
                "name": "Gloria",
                "url": "https://www.gloria.hr/gl",
                "domain": "gloria.hr",
                "description": ""
            },
            {
                "name": "GlobalTimes.cn",
                "url": "https://www.globaltimes.cn/",
                "domain": "globaltimes.cn",
                "description": ""
            },
            {
                "name": "Global.chinadaily.com.cn",
                "url": "https://global.chinadaily.com.cn/",
                "domain": "global.chinadaily.com.cn",
                "description": ""
            },
            {
                "name": "GlasIstre.hr",
                "url": "https://www.glasistre.hr/",
                "domain": "glasistre.hr",
                "description": "Portal iz Pule"
            },
            {
                "name": "Github.com",
                "url": "http://github.com/",
                "domain": "github.com",
                "description": ""
            },
            {
                "name": "FT.com",
                "url": "https://www.ft.com/",
                "domain": "ft.com",
                "description": ""
            },
            {
                "name": "Freemeteo",
                "url": "https://freemeteo.com.hr/",
                "domain": "freemeteo.com.hr",
                "description": ""
            },
            {
                "name": "FORUM.HR",
                "url": "https://www.forum.hr/",
                "domain": "forum.hr",
                "description": ""
            },
            {
                "name": "Flickr.com",
                "url": "https://flickr.com/",
                "domain": "flickr.com",
                "description": ""
            },
            {
                "name": "Financijska agencija",
                "url": "https://www.fina.hr/",
                "domain": "fina.hr",
                "description": ""
            },
            {
                "name": "Farmaceut.hr",
                "url": "https://farmaceut.hr/",
                "domain": "farmaceut.hr",
                "description": ""
            },
            {
                "name": "Facebook.com",
                "url": "https://www.facebook.com/",
                "domain": "facebook.com",
                "description": ""
            },
            {
                "name": "ExtraFM.hr",
                "url": "https://extrafm.hr/",
                "domain": "extrafm.hr",
                "description": ""
            },
            {
                "name": "Europa.eu",
                "url": "https://european-union.europa.eu/index_hr",
                "domain": "european-union.europa.eu",
                "description": ""
            },
            {
                "name": "ebay.com",
                "url": "https://www.ebay.com/",
                "domain": "ebay.com",
                "description": ""
            },
            {
                "name": "e-Savjetovanja",
                "url": "https://savjetovanja.gov.hr/",
                "domain": "savjetovanja.gov.hr",
                "description": ""
            },
            {
                "name": "e-Građani",
                "url": "https://gov.hr/",
                "domain": "gov.hr",
                "description": ""
            },
            {
                "name": "DW.com",
                "url": "https://www.dw.com/hr/teme/s-9747",
                "domain": "dw.com",
                "description": "Deutsche Welle na hrvatskom jeziku"
            },
            {
                "name": "Državni zavod za statistiku",
                "url": "https://dzs.gov.hr/",
                "domain": "dzs.gov.hr",
                "description": ""
            },
            {
                "name": "Državni zavod za mjeriteljstvo",
                "url": "https://dzm.gov.hr/",
                "domain": "dzm.gov.hr",
                "description": ""
            },
            {
                "name": "Državni zavod za intelektualno vlasništvo",
                "url": "https://www.dziv.hr/",
                "domain": "dziv.hr",
                "description": ""
            },
            {
                "name": "Državni proračun",
                "url": "https://mfin.gov.hr/proracun-86/86",
                "domain": "mfin.gov.hr",
                "description": ""
            },
            {
                "name": "Državna geodetska uprava",
                "url": "https://dgu.gov.hr/",
                "domain": "dgu.gov.hr",
                "description": ""
            },
            {
                "name": "dpd",
                "url": "https://www.dpd.com/hr/hr/",
                "domain": "dpd.com",
                "description": ""
            },
            {
                "name": "Direkcija za korištenje službenih zrakoplova",
                "url": "https://gov.hr/direkcija-za-koristenje-sluzbenih-zrakoplova/1560",
                "domain": "gov.hr",
                "description": ""
            },
            {
                "name": "DajSve.com",
                "url": "https://www.dajsve.com/",
                "domain": "dajsve.com",
                "description": "Sve grupne kupovine na jednom mjestu"
            },
            {
                "name": "Dailynews.com",
                "url": "https://www.dailynews.com/",
                "domain": "dailynews.com",
                "description": "Los Angeles Daily News"
            },
            {
                "name": "DailyMail.co.uk",
                "url": "https://www.dailymail.co.uk/home/index.html",
                "domain": "dailymail.co.uk",
                "description": ""
            },
            {
                "name": "CTVNews.ca/canada",
                "url": "https://www.ctvnews.ca/canada/",
                "domain": "ctvnews.ca",
                "description": ""
            },
            {
                "name": "Croatiaweek.com",
                "url": "https://www.croatiaweek.com/",
                "domain": "croatiaweek.com",
                "description": "HR portal na engleskom jeziku"
            },
            {
                "name": "Croatian.cri.cn",
                "url": "https://croatian.cri.cn/",
                "domain": "croatian.cri.cn",
                "description": "Kineski međunarodni radio"
            },
            {
                "name": "Croatia Airlines",
                "url": "https://www.croatiaairlines.com/",
                "domain": "croatiaairlines.com",
                "description": ""
            },
            {
                "name": "Croatia.hr",
                "url": "https://croatia.hr/",
                "domain": "croatia.hr",
                "description": "Croatia Full of Life"
            },
            {
                "name": "Cro-portal.com",
                "url": "https://cro-portal.com/",
                "domain": "cro-portal.com",
                "description": "Hrvatski nezavisni portal"
            },
            {
                "name": "CrnoJaje.hr",
                "url": "https://www.crnojaje.hr/",
                "domain": "crnojaje.hr",
                "description": "Servis za grupnu kupovinu"
            },
            {
                "name": "Cpanel.net",
                "url": "https://www.cpanel.net/",
                "domain": "cpanel.net",
                "description": ""
            },
            {
                "name": "Cosmopolitan",
                "url": "https://www.cosmopolitan.com/",
                "domain": "cosmopolitan.com",
                "description": ""
            },
            {
                "name": "Coolinarika.com",
                "url": "https://www.coolinarika.com/",
                "domain": "coolinarika.com",
                "description": "Podravkin kulinarski portal"
            },
            {
                "name": "CNN.com",
                "url": "https://edition.cnn.com/",
                "domain": "edition.cnn.com",
                "description": ""
            },
            {
                "name": "CARNet",
                "url": "https://www.carnet.hr/",
                "domain": "carnet.hr",
                "description": ""
            },
            {
                "name": "Burza oglasi",
                "url": "https://burza.com.hr/oglasi",
                "domain": "burza.com.hr",
                "description": ""
            },
            {
                "name": "Brazilian.report",
                "url": "https://brazilian.report/",
                "domain": "brazilian.report",
                "description": ""
            },
            {
                "name": "Bravo.hr",
                "url": "https://bravo.hr/",
                "domain": "bravo.hr",
                "description": ""
            },
            {
                "name": "Booking.com",
                "url": "https://www.booking.com/index.hr.html",
                "domain": "booking.com",
                "description": "Web smještajne rezervacije hotela diljem svijeta"
            },
            {
                "name": "Booking.com",
                "url": "https://www.booking.com/",
                "domain": "booking.com",
                "description": ""
            },
            {
                "name": "BonBon",
                "url": "https://www.bonbon.hr/",
                "domain": "bonbon.hr",
                "description": ""
            },
            {
                "name": "Blogger.com",
                "url": "https://www.blogger.com/about/?bpli=1",
                "domain": "blogger.com",
                "description": ""
            },
            {
                "name": "Bitno",
                "url": "https://www.bitno.net/",
                "domain": "bitno.net",
                "description": ""
            },
            {
                "name": "Bijelo jaje",
                "url": "https://bijelojaje.dnevnik.hr/",
                "domain": "bijelojaje.dnevnik.hr",
                "description": ""
            },
            {
                "name": "BBC.com",
                "url": "https://www.bbc.com/",
                "domain": "bbc.com",
                "description": ""
            },
            {
                "name": "baVOAnews.com",
                "url": "https://ba.voanews.com/",
                "domain": "ba.voanews.com",
                "description": "Glas Amerike na jezicima naroda BiH"
            },
            {
                "name": "Balkans.aljazeera.net",
                "url": "https://balkans.aljazeera.net/",
                "domain": "balkans.aljazeera.net",
                "description": "Internetski portal AI Jazeera Balkans"
            },
            {
                "name": "AUSnews.com.au",
                "url": "https://www.news.com.au/",
                "domain": "news.com.au",
                "description": ""
            },
            {
                "name": "AUSabc.net.au",
                "url": "https://www.abc.net.au/",
                "domain": "abc.net.au",
                "description": ""
            },
            {
                "name": "Argentinatimes.com.ar",
                "url": "https://www.batimes.com.ar/",
                "domain": "batimes.com.ar",
                "description": ""
            },
            {
                "name": "Apple.com",
                "url": "https://www.apple.com/",
                "domain": "apple.com",
                "description": ""
            },
            {
                "name": "Apartmanija",
                "url": "https://www.apartmanija.hr/",
                "domain": "apartmanija.hr",
                "description": ""
            },
            {
                "name": "Amazon.com",
                "url": "https://www.amazon.com/",
                "domain": "amazon.com",
                "description": ""
            },
            {
                "name": "Airbnb.com",
                "url": "https://hr.airbnb.com/",
                "domain": "hr.airbnb.com",
                "description": "Portal za iznajmljivanje smještaja"
            },
            {
                "name": "Air.hr",
                "url": "https://air.hr/",
                "domain": "air.hr",
                "description": "Pronalazimo najpovoljnije letove"
            },
            {
                "name": "AficaNews.com",
                "url": "https://www.africanews.com/",
                "domain": "africanews.com",
                "description": ""
            },
            {
                "name": "Adresar političkih stranaka u RH",
                "url": "https://vlada.gov.hr/footer/adresar/18?lang=hr",
                "domain": "vlada.gov.hr",
                "description": ""
            },
            {
                "name": "Adobe.com",
                "url": "https://www.adobe.com/",
                "domain": "adobe.com",
                "description": ""
            },
            {
                "name": "AccuWeather",
                "url": "https://www.accuweather.com/hr/",
                "domain": "accuweather.com",
                "description": ""
            },
            {
                "name": "Abrakadabra",
                "url": "https://www.abrakadabra.com/hr-HR/",
                "domain": "abrakadabra.com",
                "description": ""
            },
            {
                "name": "A1",
                "url": "https://www.a1.hr/",
                "domain": "a1.hr",
                "description": ""
            },
            {
                "name": "20minuta.hr",
                "url": "https://20minuta.hr/",
                "domain": "20minuta.hr",
                "description": "Vijesti iz različitih područja"
            }
        ]
    }
};

// Category configurations
// Category configurations
const PORTAL_CATEGORIES = [
    { id: 'vijesti', name: 'VIJESTI', color: 'bg-[#D13D1F] text-white hover:bg-red-800', subcategories: ['Dalmacija', 'Slavonija', 'Istra i Kvarner', 'Kontinentalna HR', 'Lika i gorski kotar', 'Zagreb'] },
    { id: 'sport', name: 'SPORT', color: 'bg-emerald-600 text-white hover:bg-emerald-700', subcategories: ['Nogomet', 'Košarka', 'Tenis'] },
    { id: 'tech', name: 'TEHNOLOGIJA', color: 'bg-cyan-600 text-white hover:bg-cyan-700', subcategories: ['Znanost', 'Igre'] },
    { id: 'lifestyle', name: 'LIFESTYLE', color: 'bg-pink-600 text-white hover:bg-pink-700', subcategories: ['Moda i ljepota', 'Zdravlje', 'Mama', 'Kuharica', 'Kućni ljubimci', 'Putovanja', 'Dom i dizajn'] },
    { id: 'biznis', name: 'BIZNIS', color: 'bg-blue-800 text-white hover:bg-blue-900', subcategories: [] },
    { id: 'auti', name: 'AUTI', color: 'bg-orange-600 text-white hover:bg-orange-700', subcategories: [] },
    { id: 'showbiz', name: 'SHOWBIZ', color: 'bg-violet-600 text-white hover:bg-violet-700', subcategories: ['Film', 'Glazba', 'Kultura'] },
    { id: 'zanimljivosti', name: 'ZANIMLJIVOSTI', color: 'bg-orange-500 text-white hover:bg-orange-600', subcategories: [] }
];

// Dynamic category keyword mappings (Croatian)
const CATEGORY_KEYWORDS = {
    vijesti: ['vijest', 'politika', 'vlada', 'hdz', 'sdp', 'sabor', 'izbor', 'ministar', 'štrajk', 'prosvjed', 'ubojst', 'kriminal', 'optuž', 'gradonačelnik', 'policij', 'nesreć', 'požar', 'sud', 'rat', 'žrtv', 'tragedij', 'pogin', 'mrtv', 'smrt', 'ubij', 'napad', 'ranjen', 'ozlijeđ', 'sudar', 'uhićen'],
    sport: ['sport', 'nogomet', 'dinamo', 'hajduk', 'hns', 'modrić', 'tenis', 'košark', 'lig', 'utakmic', 'reprezenta', 'reprezentativ', 'prvak', 'prvac', 'prvenstv', 'kup', 'gol', 'trener', 'klub', 'transfer', 'vekić', 'formula', 'vaterpol', 'rukometa', 'hnl', 'olimpij', 'medalj', 'poraz', 'pobjed', 'pobijed', 'ždrijeb', 'momčad', 'ekip', 'igrač', 'teren', 'stadion', 'izbornik', 'polufinal', 'finale'],
    tech: ['tech', 'tehnolog', 'mobitel', 'android', 'iphone', 'apple', 'google', 'microsoft', 'gaming', 'playstation', 'xbox', 'nintendo', 'računal', 'softver', 'umjetn', 'inteligenc', 'smartfon', 'znanost', 'znanstv', 'istraživanj', 'svemir', 'nasa', 'hakir', 'čip', 'aplikacij', 'cyber', 'robot', 'videoigr', 'igric', 'gejm'],
    lifestyle: ['lifestyle', 'moda', 'ljepot', 'recept', 'kuhar', 'glazb', 'film', 'serij', 'estrad', 'horoskop', 'ljubav', 'zdravlj', 'savjet', 'putovan', 'pjevač', 'brak', 'glumac', 'turiz', 'turist', 'ljet', 'gastro', 'restoran', 'koncert', 'pjesm', 'showbiz', 'celebrity', 'kuhinj'],
    biznis: ['biznis', 'gospodar', 'ekonomij', 'posao', 'tvrtk', 'investicij', 'dionic', 'financij', 'porez', 'inflacij', 'cijen', 'tržišt', 'plata', 'plaća', 'banka', 'bdp', 'kredit', 'kamata', 'kompanij', 'ulaganj', 'proračun', 'eura', 'euri', 'eurima', '€'],
    auti: ['auti', 'auto', 'automobil', 'motor', 'vozil', 'promet', 'cesta', 'bmw', 'audi', 'mercedes', 'tesla', 'vožnja', 'brzina', 'volan', 'rimac', 'motocikl', 'autocesta', 'gume', 'bolid', 'hibrid'],
    showbiz: ['showbiz', 'estrada', 'celeb', 'film', 'glazba', 'kultura', 'kazališt', 'kino', 'pjevač', 'glumac', 'album', 'koncert', 'predstava', 'muzej', 'izložba', 'netflix', 'hbo', 'oskar', 'nagrad'],
    zanimljivosti: ['zanimljivost', 'bizarno', 'ludo', 'viralno', 'čudno', 'video', 'društvene mreže', 'reddit', 'tiktok', 'zabavno', 'nevjerojatno', 'vicev', 'smiješno']
};

// Subcategory-specific keyword mappings
const SUBCATEGORY_KEYWORDS = {
    'sport/nogomet': ['nogomet', 'dinamo', 'hajduk', 'hns', 'utakmica', 'liga', 'prvak', 'gol', 'trener', 'klub', 'transfer', 'anfield', 'liverpool', 'iraola'],
    'sport/kosarka': ['košarka', 'nba', 'cibona', 'zadar', 'abaz', 'trice', 'obruč', 'basket'],
    'sport/tenis': ['tenis', 'wimbledon', 'atp', 'wta', 'vekic', 'vekić', 'đoković', 'reket', 'set', 'gem', 'donna', 'vekic'],
    'vijesti/dalmacija': ['dalmacij', 'split', 'zadar', 'šibenik', 'dubrovnik', 'torcida', 'poljud', 'otok', 'more', 'hvar', 'brač', 'dalmatin'],
    'vijesti/slavonija': ['slavonij', 'osijek', 'vinkovci', 'brod', 'požega', 'vukovar', 'đakovo', 'ravnica'],
    'vijesti/istra-i-kvarner': ['istr', 'kvarner', 'rijeka', 'pula', 'rovinj', 'poreč', 'opatija', 'istarski'],
    'vijesti/zagreb': ['zagreb', 'zg', 'metropola', 'holding', 'tomašević', 'maksimir', 'sljeme'],
    'vijesti/kontinentalna-hr': ['kontinentaln', 'karlovac', 'varazdin', 'varaždin', 'čakovec', 'cakovec', 'krapina', 'koprivnica', 'bjelovar', 'sisak', 'petrinja', 'križevci', 'krizevci'],
    'vijesti/lika-i-gorski-kotar': ['lika', 'gospić', 'gospic', 'otočac', 'otocac', 'gračac', 'gracac', 'plitvic', 'delnice', 'čabar', 'cabar', 'vrbovsko', 'gorski kotar'],
    'tech/znanost': ['znanost', 'istraživanj', 'svemir', 'nasa', 'planet', 'otkriće', 'rak', 'lijek', 'sveučilišt', 'laboratorij', 'znanstvenik'],
    'tech/igre': ['igra', 'gaming', 'playstation', 'xbox', 'nintendo', 'steam', 'game', 'gamer', 'igrica'],
    'lifestyle/moda-i-ljepota': ['moda', 'ljepota', 'stil', 'haljina', 'revija', 'kozmetika', 'manekenka', 'odjeća', 'šminka'],
    'lifestyle/zdravlje': ['zdravlje', 'lijek', 'tijelo', 'bolest', 'simptom', 'doktor', 'bolnica', 'prehrana', 'zdrav'],
    'lifestyle/mama': ['mama', 'trudnoća', 'trudnic', 'beba', 'bebe', 'dijete', 'djeca', 'roditelj', 'odgoj', 'majčinstvo', 'porođaj', 'rodiljn'],
    'lifestyle/kuharica': ['recept', 'kuhar', 'jelo', 'kuhanje', 'sastojci', 'kolač', 'torta', 'okus', 'gastronom', 'hrana'],
    'lifestyle/kucni-ljubimci': ['ljubimac', 'ljubimci', 'pas', 'psi', 'mačka', 'mačke', 'veterinar', 'štene', 'udomljavanje'],
    'lifestyle/putovanja': ['putovanje', 'putovanja', 'putopis', 'destinacija', 'izlet', 'turist', 'kofer', 'odmor', 'putuj'],
    'lifestyle/dom-i-dizajn': ['dizajn interijera', 'uređenje', 'dekor', 'stan', 'kuća', 'dizajn doma', 'namještaj', 'dizajn'],
    'showbiz/film': ['film', 'kino', 'oskar', 'glumac', 'glumica', 'hollywood', 'redatelj', 'netflix', 'hbo', 'premijera'],
    'showbiz/glazba': ['glazba', 'koncert', 'pjesma', 'album', 'pjevač', 'pjevačica', 'bend', 'estrada', 'eurosong', 'glazben'],
    'showbiz/kultura': ['kultura', 'kazalište', 'izložba', 'muzej', 'knjiga', 'pisac', 'umjetnost', 'galerija', 'predstava']
};

// State Management
let articles = [];
let bookmarkedUrls = JSON.parse(localStorage.getItem('bookmarks') || '[]');
let activeCategory = 'sve';
let activeSubcategory = 'sve';
let searchQuery = '';
let selectedArchiveDate = '';
let currentArticlesLimit = 12; // Flat grid pagination limit

const SOURCE_ROUTING = {
    'Bug.hr': { category: 'tech' },
    'Sportnet.hr': { category: 'sport' },
    'Poslovni dnevnik': { category: 'biznis' },
    'Autoportal.hr': { category: 'auti' },
    'Journal.hr': { category: 'lifestyle' },
    'Punkufer.hr': { category: 'lifestyle' },
    'Zagreb.info': { subcategory: 'zagreb' },
    'Slobodna Dalmacija': { subcategory: 'dalmacija' },
    'Dalmacija Danas': { subcategory: 'dalmacija' },
    'SiB.hr': { subcategory: 'slavonija' },
    'Fiuman.hr': { subcategory: 'istra-i-kvarner' },
    'Regional Express': { subcategory: 'istra-i-kvarner' }
};

// Load custom user feeds from localStorage and register them dynamically
function initCustomFeeds() {
    const customFeeds = JSON.parse(localStorage.getItem('custom_rss_feeds') || '[]');
    customFeeds.forEach(feed => {
        if (!RSS_SOURCES.some(s => s.url === feed.url)) {
            RSS_SOURCES.push({
                id: feed.id,
                name: feed.name,
                url: feed.url,
                color: feed.color || 'bg-indigo-600 text-white',
                logoText: feed.logoText || feed.name.substring(0, 2).toUpperCase(),
                isCustom: true
            });
            SOURCE_ROUTING[feed.name] = { category: feed.category };
        }
    });
}
initCustomFeeds();


let PORTAL_METADATA = {};

function initPortalMetadata() {
    const saved = localStorage.getItem('portal_metadata');
    if (saved) {
        try {
            PORTAL_METADATA = JSON.parse(saved);
        } catch (e) {
            console.error('Failed to parse portal metadata:', e);
            PORTAL_METADATA = {};
        }
    }
}
initPortalMetadata();

function getPortalRegion(source) {
    if (PORTAL_METADATA[source] && PORTAL_METADATA[source].region) {
        return PORTAL_METADATA[source].region;
    }
    if (SOURCE_ROUTING[source] && SOURCE_ROUTING[source].subcategory) {
        return SOURCE_ROUTING[source].subcategory;
    }
    return null;
}

function matchSubcategory(article, subcatId) {
    const region = getPortalRegion(article.source);
    if (region) {
        return region === subcatId;
    }
    const key = `${article.category}/${subcatId}`;
    const keywords = SUBCATEGORY_KEYWORDS[key];
    if (!keywords) return false;
    const text = (article.title + ' ' + article.description).toLowerCase();
    return keywords.some(kw => text.includes(kw));
}

// Resilient RSS fetch with fallback proxies
async function fetchWithProxyFallback(feedUrl) {
    // 1. Primary Proxy: Self-hosted Vercel serverless function (works in prod & local)
    const proxyList = [
        `/api/feed?url=${encodeURIComponent(feedUrl)}`
    ];

    // 2. Secondary Public Proxies (as fallbacks)
    const publicProxies = [
        `https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent(feedUrl)}`,
        `https://cors.lol/?url=${encodeURIComponent(feedUrl)}`,
        `https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}`,
        `https://corsproxy.io/?url=${encodeURIComponent(feedUrl)}`
    ];

    // Shuffle public proxies to distribute request load and avoid rate limiting
    publicProxies.sort(() => Math.random() - 0.5);
    
    // Add shuffled public proxies
    proxyList.push(...publicProxies);
    
    let lastError = null;
    for (const proxyUrl of proxyList) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
        
        try {
            console.log(`Fetching feed via proxy: ${proxyUrl}`);
            const response = await fetch(proxyUrl, { signal: controller.signal });
            clearTimeout(timeoutId);
            
            if (!response.ok) {
                throw new Error(`HTTP error status ${response.status}`);
            }
            const text = await response.text();
            if (!text || text.trim() === '') {
                throw new Error('Empty response content');
            }
            const trimmed = text.trim();
            if (!trimmed.startsWith('<')) {
                throw new Error('Response does not start with XML tag');
            }
            return text;
        } catch (err) {
            clearTimeout(timeoutId);
            const isTimeout = err.name === 'AbortError';
            console.warn(`Proxy failed ${isTimeout ? '(timeout)' : ''}: ${proxyUrl}`, err);
            lastError = err;
        }
    }
    throw lastError || new Error(`Failed to fetch feed from all proxies`);
}


// Clock Ingestion (Croatian format)
function updateLiveTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Europe/Zagreb'
    };
    let formatted = new Intl.DateTimeFormat('hr-HR', options).format(now);
    formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);
    const timeEl = document.getElementById('live-time');
    if (timeEl) timeEl.innerText = formatted;
}
setInterval(updateLiveTime, 1000);
updateLiveTime();

// Relative timestamp formatter
function getRelativeTimeCroatian(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'upravo sada';
    if (diffMins < 60) {
        if (diffMins === 1) return 'prije 1 minutu';
        if (diffMins % 10 >= 2 && diffMins % 10 <= 4 && (diffMins < 10 || diffMins > 20)) return `prije ${diffMins} minute`;
        return `prije ${diffMins} min`;
    }
    if (diffHours < 24) {
        if (diffHours === 1) return 'prije 1 sat';
        if (diffHours % 10 >= 2 && diffHours % 10 <= 4 && (diffHours < 10 || diffHours > 20)) return `prije ${diffHours} sata`;
        return `prije ${diffHours} sati`;
    }
    if (diffDays === 1) return 'jučer';
    return `prije ${diffDays} dana`;
}

// Initialize Supabase Creds
function getSupabaseConfig() {
    return {
        url: localStorage.getItem('supabase_url') || '',
        key: localStorage.getItem('supabase_key') || ''
    };
}

function updateSourceIndicator() {
    const config = getSupabaseConfig();
    const indicator = document.getElementById('source-indicator');
    if (!indicator) return;
    if (config.url && config.key) {
        indicator.innerText = 'Supabase Baza';
        indicator.className = 'text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded text-[10px] select-none';
    } else {
        indicator.innerText = 'RSS Proxy';
        indicator.className = 'text-slate-400 bg-slate-800 px-2 py-0.5 rounded text-[10px] select-none';
    }
}
updateSourceIndicator();

// Extract metadata from raw XML
function extractMetadata(item, sourceId) {
    let imageUrl = '';
    let description = '';

    let descNode = item.querySelector('description');
    let descText = descNode ? descNode.textContent : '';

    if (descText && descText.includes('<img')) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = descText;
        const img = tempDiv.querySelector('img');
        if (img && img.src) imageUrl = img.src;
        description = tempDiv.textContent || tempDiv.innerText || '';
    } else {
        description = descText;
    }

    const enclosure = item.querySelector('enclosure');
    if (!imageUrl && enclosure && enclosure.getAttribute('url')) {
        imageUrl = enclosure.getAttribute('url');
    }

    const mediaContent = item.querySelector('content') || item.getElementsByTagName('media:content')[0];
    if (!imageUrl && mediaContent && mediaContent.getAttribute('url')) {
        imageUrl = mediaContent.getAttribute('url');
    }

    description = description.replace(/<[^>]*>/g, '').trim();
    if (description.length > 150) {
        description = description.substring(0, 147) + '...';
    }

    if (!imageUrl) {
        imageUrl = `placeholder-${sourceId}`;
    }

    return { imageUrl, description };
}

const TRAGEDY_KEYWORDS = [
    'nesreć', 'sudar', 'pogin', 'mrtv', 'smrt', 'ubij', 'napad', 'ranjen', 'ozlijeđ',
    'kriminal', 'ubojst', 'pljačk', 'požar', 'policij', 'tragedij', 'obdukcij', 'pogibelj'
];

function hasKeyword(text, keyword) {
    if (keyword.length <= 3) {
        const escaped = keyword.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp('(?<![a-zA-Z0-9čćđšžŠĐĆČŽ])' + escaped + '(?![a-zA-Z0-9čćđšžŠĐĆČŽ])', 'i');
        return regex.test(text);
    }
    return text.includes(keyword);
}

function determineCategory(title, description, source) {
    if (source && SOURCE_ROUTING[source] && SOURCE_ROUTING[source].category) {
        return SOURCE_ROUTING[source].category;
    }
    const textToSearch = (title + ' ' + (description || '')).toLowerCase();
    
    // Check if the article contains strong chronicle/accident/tragedy keywords
    const hasTragedy = TRAGEDY_KEYWORDS.some(kw => hasKeyword(textToSearch, kw));
    
    let bestCategory = 'vijesti';
    let maxScore = 0;
    
    for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
        // Disqualify specialized categories if negative/tragedy keywords are found
        if (hasTragedy && (category === 'auti' || category === 'biznis' || category === 'tech' || category === 'showbiz' || category === 'zanimljivosti')) {
            continue;
        }
        
        let score = 0;
        for (const keyword of keywords) {
            if (hasKeyword(textToSearch, keyword)) {
                score++;
            }
        }
        
        if (score > maxScore) {
            maxScore = score;
            bestCategory = category;
        }
    }
    
    return bestCategory;
}

// Fetch RSS via CORS Proxy
async function fetchFromRSSProxy() {
    const fetchPromises = RSS_SOURCES.map(async (source) => {
        try {
            const text = await fetchWithProxyFallback(source.url);
            
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(text, 'text/xml');
            if (xmlDoc.querySelector('parsererror')) throw new Error(`XML error`);

            const items = xmlDoc.querySelectorAll('item');
            const parsed = [];

            items.forEach(item => {
                const title = item.querySelector('title')?.textContent?.trim() || '';
                let link = item.querySelector('link')?.textContent?.trim() || '';
                if (!link) link = item.querySelector('guid')?.textContent?.trim() || '';

                const pubDateStr = item.querySelector('pubDate')?.textContent || item.querySelector('pubdate')?.textContent || '';
                const dateObj = pubDateStr ? new Date(pubDateStr) : new Date();

                const { imageUrl, description } = extractMetadata(item, source.id);
                const category = determineCategory(title, description, source.name);

                if (title && link) {
                    parsed.push({
                        title,
                        link,
                        source: source.name,
                        sourceId: source.id,
                        sourceColor: source.color,
                        sourceLogoText: source.logoText,
                        imageUrl,
                        description,
                        publishedAt: dateObj,
                        category
                    });
                }
            });
            return parsed;
        } catch (err) {
            console.warn(`Feed proxy fetch failed for ${source.name}:`, err);
            return [];
        }
    });

    const results = await Promise.all(fetchPromises);
    return results.flat();
}

// Fetch pre-aggregated articles from static JSON
async function fetchFromStaticJSON() {
    const response = await fetch('articles.json');
    if (!response.ok) throw new Error('Static JSON failed to load');
    const data = await response.json();
    return data.map(item => {
        const sourceConf = RSS_SOURCES.find(s => s.name.toLowerCase() === item.source.toLowerCase()) || {
            id: 'unknown',
            name: item.source,
            color: 'bg-slate-700 text-white',
            logoText: item.source.substring(0, 2)
        };

        return {
            title: item.title,
            link: item.link,
            source: item.source,
            sourceId: sourceConf.id,
            sourceColor: sourceConf.color,
            sourceLogoText: sourceConf.logoText,
            imageUrl: item.image_url || `placeholder-${sourceConf.id}`,
            description: item.description || '',
            publishedAt: new Date(item.published_at),
            category: determineCategory(item.title, item.description || '', item.source)
        };
    });
}

// Fetch from Supabase
async function fetchFromSupabase(config) {
    const url = `${config.url}/rest/v1/news_feeds?select=*&order=published_at.desc&limit=800`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'apikey': config.key,
            'Authorization': `Bearer ${config.key}`,
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) throw new Error('Supabase failed');
    const data = await response.json();
    return data.map(item => {
        const sourceConf = RSS_SOURCES.find(s => s.name.toLowerCase() === item.source.toLowerCase()) || {
            id: 'unknown',
            name: item.source,
            color: 'bg-slate-700 text-white',
            logoText: item.source.substring(0, 2)
        };

        return {
            title: item.title,
            link: item.link,
            source: item.source,
            sourceId: sourceConf.id,
            sourceColor: sourceConf.color,
            sourceLogoText: sourceConf.logoText,
            imageUrl: item.image_url || `placeholder-${sourceConf.id}`,
            description: item.description || '',
            publishedAt: new Date(item.published_at),
            category: determineCategory(item.title, item.description || '', item.source)
        };
    });
}

// Global Controller
async function fetchNewsFeed(forceRefetch = false) {
    const spinner = document.getElementById('loading-spinner');
    const feedArea = document.getElementById('feed-area');
    const errBanner = document.getElementById('error-container');
    const emptyState = document.getElementById('empty-state');
    const refreshIcon = document.getElementById('refresh-icon');

    // Check client-side localStorage cache first
    const cacheKey = 'cached_news_articles';
    const cacheTimeKey = 'cached_news_timestamp';
    const cacheDuration = 10 * 60 * 1000; // 10 minutes

    // If forceRefetch is a MouseEvent or other truthy object (e.g. from event handlers), we treat it as true
    const isCacheBypass = forceRefetch === true || (forceRefetch && typeof forceRefetch === 'object');

    const isStaticOrAnalyticsPage = activeCategory === 'portali' || activeCategory === 'analitika';

    if (!isCacheBypass) {
        const cachedData = localStorage.getItem(cacheKey);
        const cachedTime = localStorage.getItem(cacheTimeKey);
        
        if (cachedData && cachedTime && (Date.now() - parseInt(cachedTime, 10)) < cacheDuration) {
            console.log('Loading news feed from client-side cache...');
            try {
                const parsed = JSON.parse(cachedData);
                // Convert serialized ISO string dates back to Date objects
                articles = parsed.map(art => ({
                    ...art,
                    publishedAt: new Date(art.publishedAt)
                }));
                
                if (articles.length > 0) {
                    renderDirectory();
                    renderSidebar();
                    updateMarqueeTicker();
                    handleRoute();
                    return; // exit early, no network fetch needed
                }
            } catch (cacheErr) {
                console.warn('Error parsing cached news, falling back to network fetch...', cacheErr);
            }
        }
    }

    if (!isStaticOrAnalyticsPage) {
        if (spinner) spinner.classList.remove('hidden');
        if (feedArea) feedArea.classList.add('hidden');
    }
    if (errBanner) errBanner.classList.add('hidden');
    if (emptyState) emptyState.classList.add('hidden');
    if (refreshIcon) refreshIcon.classList.add('animate-spin');

    try {
        const config = getSupabaseConfig();
        let results = [];

        if (config.url && config.key) {
            results = await fetchFromSupabase(config);
        } else {
            try {
                results = await fetchFromStaticJSON();
            } catch (jsonErr) {
                console.warn('Failed to fetch from static JSON, falling back to legacy RSS proxy scraper:', jsonErr);
                results = await fetchFromRSSProxy();
            }
        }

        articles = results.sort((a, b) => b.publishedAt - a.publishedAt);

        if (articles.length === 0) {
            if (!isStaticOrAnalyticsPage && emptyState) emptyState.classList.remove('hidden');
        } else {
            // Save to cache
            try {
                localStorage.setItem(cacheKey, JSON.stringify(articles));
                localStorage.setItem(cacheTimeKey, Date.now().toString());
            } catch (cacheWriteErr) {
                console.warn('Failed to write articles to localStorage cache:', cacheWriteErr);
            }

            renderDirectory();
            renderSidebar();
            updateMarqueeTicker();
            handleRoute(); // handles showing/hiding feed-area or analytics-area
        }
    } catch (err) {
        console.error(err);
        const errMsg = document.getElementById('error-message');
        if (errMsg) {
            if (window.location.protocol === 'file:') {
                errMsg.innerHTML = `Preglednik blokira mrežne RSS zahtjeve na <strong>file://</strong> protokolu.<br>Molimo otvorite stranicu preko pokrenutog lokalnog poslužitelja: <a href="http://localhost:8000" class="text-[#D13D1F] dark:text-[#E5472C] underline font-bold">http://localhost:8000</a>`;
            } else {
                errMsg.innerText = `RSS veza je u prekidu ili je došlo do pogreške prilikom učitavanja. Pokušajte ponovno.`;
            }
        }
        if (!isStaticOrAnalyticsPage && errBanner) errBanner.classList.remove('hidden');
    } finally {
        if (spinner) spinner.classList.add('hidden');
        if (refreshIcon) refreshIcon.classList.remove('animate-spin');
    }
}

// Render Directory Bookmarks with real favicons
function renderDirectory() {
    const dir = document.getElementById('portal-directory');
    if (!dir) return;
    dir.innerHTML = '';

    TOP_PORTALS.forEach(portal => {
        const card = document.createElement('a');
        card.href = portal.url;
        card.target = '_blank';
        card.rel = 'noopener';
        card.className = 'flex items-center space-x-2 bg-slate-50 dark:bg-slate-750 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60 p-2.5 rounded transition-all text-[13px] font-bold';
        
        const faviconUrl = `https://www.google.com/s2/favicons?domain=${portal.domain}&sz=32`;
        
        card.innerHTML = `
            <img src="${faviconUrl}" alt="${portal.name}" class="w-4 h-4 object-contain" onerror="this.src='/favicon.ico'">
            <span class="truncate text-slate-700 dark:text-slate-200">${portal.name}</span>
        `;
        dir.appendChild(card);
    });
}

let infiniteScrollObserver = null;

function setupInfiniteScroll() {
    const trigger = document.getElementById('infinite-scroll-trigger');
    if (!trigger) return;

    if (infiniteScrollObserver) {
        infiniteScrollObserver.disconnect();
    }

    infiniteScrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (articles.length > 0) {
                    currentArticlesLimit += 12;
                    renderFeed();
                }
            }
        });
    }, {
        rootMargin: '150px',
        threshold: 0.1
    });

    infiniteScrollObserver.observe(trigger);
}

// Render Feed components (Splash Hero + Category Blocks or Grid cards)
function renderFeed() {
    const splashSection = document.getElementById('splash-section');
    const categoryBlocks = document.getElementById('category-blocks');
    const grid = document.getElementById('news-grid');
    const emptyState = document.getElementById('empty-state');
    
    if (splashSection) splashSection.innerHTML = '';
    if (categoryBlocks) categoryBlocks.innerHTML = '';
    if (grid) grid.innerHTML = '';

    // Apply search filter, date filter, and hidden portal filters
    let filtered = articles.filter(article => {
        // Exclude articles from hidden portals
        if (PORTAL_METADATA[article.source] && PORTAL_METADATA[article.source].hidden === true) {
            return false;
        }

        const searchMatch = searchQuery === '' || 
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            article.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
            article.source.toLowerCase().includes(searchQuery.toLowerCase());

        const dateMatch = !selectedArchiveDate || (() => {
            const artDate = new Date(article.publishedAt);
            const yyyy = artDate.getFullYear();
            const mm = String(artDate.getMonth() + 1).padStart(2, '0');
            const dd = String(artDate.getDate()).padStart(2, '0');
            const artDateStr = `${yyyy}-${mm}-${dd}`;
            return artDateStr === selectedArchiveDate;
        })();

        return searchMatch && dateMatch;
    });

    // 1. HOMEPAGE VIEW: Render Splash Hero + Category Blocks (only when no search or date filter is active)
    if (activeCategory === 'sve' && searchQuery === '' && selectedArchiveDate === '') {
        if (splashSection) splashSection.classList.remove('hidden');
        if (categoryBlocks) categoryBlocks.classList.remove('hidden');
        if (grid) grid.classList.add('hidden');

        // Hide pagination container on homepage view
        const pagContainer = document.getElementById('pagination-container');
        if (pagContainer) pagContainer.innerHTML = '';

        if (filtered.length === 0) {
            const fa = document.getElementById('feed-area');
            if (fa) fa.classList.add('hidden');
            if (emptyState) emptyState.classList.remove('hidden');
            return;
        }
        if (emptyState) emptyState.classList.add('hidden');
        const fa = document.getElementById('feed-area');
        if (fa) fa.classList.remove('hidden');

        // Render Splash (top 3 articles across all feeds)
        if (splashSection) renderSplashHero(filtered.slice(0, 3));

        // Render Headlines Underneath (articles 3 to 6)
        renderHeadlinesUnderneath(filtered.slice(3, 6));

        // Render each Category Block
        if (categoryBlocks) {
            PORTAL_CATEGORIES.forEach((catConf, idx) => {
                const catArticles = filtered.filter(a => a.category === catConf.id);
                if (catArticles.length === 0) return;

                const featuredArticles = catArticles.slice(0, 3);
                const listArticles = catArticles.slice(3, 6);

                const block = document.createElement('div');
                block.className = 'space-y-4 bg-white dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-800/80 rounded-xl shadow-sm transition-colors';

                const subcatHTML = catConf.subcategories.map(sub => {
                    const subId = sub.toLowerCase().replace(/\s+/g, '-').replace(/i-kvarner/g, 'istra-i-kvarner');
                    return `<a href="${catConf.id}.html#${subId}" class="text-[11.5px] text-slate-700 dark:text-slate-400 font-bold hover:text-[#D13D1F] dark:hover:text-[#E5472C] transition-colors uppercase tracking-wider">${sub}</a>`;
                }).join('<span class="text-slate-400 dark:text-slate-700">·</span>');

                block.innerHTML = `
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 dark:border-slate-800/60 pb-2.5 gap-2">
                        <div class="flex items-center space-x-4">
                            <a href="${catConf.id}.html" class="text-base font-extrabold text-[#1C1C1C] dark:text-[#F4F3EE] hover:text-[#D13D1F] dark:hover:text-[#E5472C] transition-colors tracking-wide uppercase select-none font-heading">
                                ${catConf.name}
                            </a>
                            <div class="hidden sm:flex items-center space-x-2 text-xs">
                                ${subcatHTML}
                            </div>
                        </div>
                        <a href="${catConf.id}.html" class="text-[12.5px] text-[#D13D1F] dark:text-[#E5472C] hover:underline font-extrabold self-start sm:self-center font-heading">
                            Prikaži sve &rarr;
                        </a>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <!-- Category cards loaded below -->
                    </div>
                    <div class="space-y-1.5 hidden category-list-headlines">
                        <!-- Text headlines loaded below -->
                    </div>
                `;

                const blockGrid = block.querySelector('.grid');
                featuredArticles.forEach(article => {
                    const isBookmarked = bookmarkedUrls.includes(article.link);
                    let cardImage = '';
                    if (article.imageUrl.startsWith('placeholder-')) {
                        cardImage = getGradientPlaceholder(article.sourceId, article.source);
                    } else {
                        cardImage = `
                            <div class="w-full h-36 overflow-hidden relative bg-slate-900">
                                <img src="${article.imageUrl}" alt="${article.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
                            </div>
                        `;
                    }

                    const card = document.createElement('div');
                    card.className = 'news-card group bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-850 rounded-lg overflow-hidden shadow-sm hover:shadow transition-all flex flex-col justify-between cursor-pointer';
                    card.onclick = (e) => {
                        if (e.target.closest('.bookmark-btn')) return;
                        window.open(article.link, '_blank');
                    };

                    card.innerHTML = `
                        <div class="flex flex-col">
                            <div class="relative bg-slate-900">
                                ${cardImage}
                                <button class="bookmark-btn absolute top-2 right-2 p-1.5 rounded-full bg-black/60 hover:bg-[#D13D1F] dark:hover:bg-[#E5472C] text-white backdrop-blur-sm shadow opacity-0 group-hover:opacity-100 transition-all" data-link="${article.link}" title="Spremi">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="${isBookmarked ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>
                                </button>
                            </div>
                            <div class="p-4 space-y-2.5">
                                <div class="flex items-center justify-between text-xs text-slate-700 dark:text-slate-400">
                                    <span class="${article.sourceColor} font-extrabold px-2 py-0.5 rounded text-[10px] uppercase select-none shadow-sm">${article.source}</span>
                                    <span class="font-mono">${getRelativeTimeCroatian(article.publishedAt)}</span>
                                </div>
                                <h3 class="text-[15px] font-black leading-snug line-clamp-3 group-hover:text-[#D13D1F] dark:group-hover:text-[#E5472C] transition-colors">${article.title}</h3>
                            </div>
                        </div>
                    `;
                    blockGrid.appendChild(card);
                });

                const blockList = block.querySelector('.category-list-headlines');
                if (blockList && listArticles.length > 0) {
                    blockList.classList.remove('hidden');
                    listArticles.forEach(article => {
                        const item = document.createElement('a');
                        item.href = article.link;
                        item.target = '_blank';
                        item.className = 'flex items-center justify-between py-2 border-t border-slate-200 dark:border-slate-800/60 text-xs md:text-[13px] hover:text-[#D13D1F] dark:hover:text-[#E5472C] transition-colors group/cat-item';
                        item.innerHTML = `
                            <span class="truncate pr-4 text-slate-850 dark:text-slate-200 font-bold group-hover/cat-item:text-[#D13D1F] dark:group-hover/cat-item:text-[#E5472C]">${article.title}</span>
                            <div class="flex items-center space-x-2.5 shrink-0">
                                <span class="text-[10px] uppercase font-extrabold text-slate-700 dark:text-slate-400">${article.source}</span>
                                <span class="font-mono text-[10px] text-slate-600 dark:text-slate-450">${getRelativeTimeCroatian(article.publishedAt)}</span>
                            </div>
                        `;
                        blockList.appendChild(item);
                    });
                }

                categoryBlocks.appendChild(block);

                // Insert Ad slot after the second category block (Vijesti & Sport)
                if (false) { // Disabled placeholder ad to focus on news traffic first
                    const homeAd = document.createElement('div');
                    homeAd.className = 'bg-white dark:bg-slate-850 p-4 border border-slate-200 dark:border-slate-750 rounded-xl shadow-sm text-center relative overflow-hidden transition-colors';
                    homeAd.innerHTML = `
                        <span class="absolute top-1.5 left-2.5 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-sans select-none">Promocija</span>
                        <div class="flex flex-col md:flex-row items-center justify-between gap-4 py-2 px-2">
                            <div class="flex items-center space-x-3 text-left">
                                <div class="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-1.958-.659-1.171-.879-1.171-2.303 0-3.182 1.172-.879 3.07-.879 4.242 0 .879.659.879 1.62.879 1.62" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="text-sm font-black text-slate-800 dark:text-slate-100">Započnite monetizaciju s Google AdSense već danas</h4>
                                    <p class="text-xs text-slate-700 dark:text-slate-400">Ovaj oglasni prostor je optimiziran za banner rezolucije 728x90 ili automatske Google In-Article oglase.</p>
                                </div>
                            </div>
                            <a href="https://adsense.google.com" target="_blank" rel="noopener" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-1.5 rounded uppercase tracking-wider transition-all shrink-0">
                                Prijavi se na AdSense
                            </a>
                        </div>
                    `;
                    categoryBlocks.appendChild(homeAd);
                }
            });
        }
    } else {
        // 2. CATEGORY OR SEARCH VIEW: Render Unified Grid
        if (splashSection) splashSection.classList.add('hidden');
        if (categoryBlocks) categoryBlocks.classList.add('hidden');
        if (grid) grid.classList.remove('hidden');

        // Filter to single category if activeCategory is not 'sve'
        let categoryFiltered;
        if (activeCategory === 'spremljeno') {
            categoryFiltered = filtered.filter(a => bookmarkedUrls.includes(a.link));
        } else {
            categoryFiltered = filtered.filter(a => {
                if (activeCategory === 'sve') return true;
                if (a.category === activeCategory) return true;
                // If we are in 'vijesti' category and filtering by a region, allow regional articles from other categories (e.g. a sport article from Zagreb.info)
                if (activeCategory === 'vijesti' && activeSubcategory !== 'sve' && matchSubcategory(a, activeSubcategory)) {
                    return true;
                }
                return false;
            });
            if (activeSubcategory !== 'sve') {
                categoryFiltered = categoryFiltered.filter(a => matchSubcategory(a, activeSubcategory));
            }
        }
        
        // Limit category pages to 50 articles maximum
        if (activeCategory !== 'sve' && activeCategory !== 'spremljeno') {
            categoryFiltered = categoryFiltered.slice(0, 50);
        }

        const countEl = document.getElementById('news-count');
        if (countEl) countEl.innerText = categoryFiltered.length;

        if (categoryFiltered.length === 0) {
            const fa = document.getElementById('feed-area');
            if (fa) fa.classList.add('hidden');
            if (emptyState) {
                const titleEl = emptyState.querySelector('h4');
                const descEl = emptyState.querySelector('p');
                if (activeCategory === 'spremljeno') {
                    if (titleEl) titleEl.innerText = 'Nemate spremljenih vijesti';
                    if (descEl) descEl.innerText = 'Označite vijesti ikonom oznake na naslovnici ili kategorijama da biste ih spremili ovdje.';
                } else if (searchQuery !== '') {
                    if (titleEl) titleEl.innerText = 'Nema rezultata';
                    if (descEl) descEl.innerText = 'Pojam za pretraživanje ne daje rezultate.';
                } else {
                    if (titleEl) titleEl.innerText = 'Nema vijesti';
                    if (descEl) descEl.innerText = 'Trenutno nema dostupnih članaka u ovoj kategoriji.';
                }
                emptyState.classList.remove('hidden');
            }
            return;
        }
        if (emptyState) emptyState.classList.add('hidden');
        const fa = document.getElementById('feed-area');
        if (fa) fa.classList.remove('hidden');

        if (grid) {
            const visibleArticles = categoryFiltered.slice(0, currentArticlesLimit);
            visibleArticles.forEach((article, idx) => {
                // Inject a Native Ad card after the 4th item (index 3)
                if (false) { // Disabled placeholder native ad
                    const adCard = document.createElement('div');
                    adCard.className = 'group bg-white dark:bg-slate-800 border border-amber-500/20 dark:border-amber-500/10 rounded-lg overflow-hidden shadow-sm hover:shadow transition-all flex flex-col justify-between p-4 relative min-h-[220px] transition-colors';
                    adCard.innerHTML = `
                        <span class="absolute top-1.5 left-2.5 text-[10px] font-bold text-amber-605 dark:text-amber-505 uppercase tracking-widest">Sponzorirano</span>
                        <div class="flex flex-col justify-between h-full pt-3.5 space-y-3.5">
                            <div class="space-y-2">
                                <span class="bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-400 font-extrabold px-2 py-0.5 rounded text-[10px] uppercase select-none w-max">AdSense Native Ad</span>
                                <h3 class="text-sm font-extrabold leading-snug text-slate-850 dark:text-slate-100 mt-1">Ovdje se prikazuje vaš Google AdSense oglas</h3>
                                <p class="text-xs text-slate-700 dark:text-slate-400 leading-relaxed">Prilagodljivi nativni oglas koji se savršeno uklapa u sadržaj feeda i povećava doseg posjetitelja.</p>
                            </div>
                            <a href="mailto:kontakt@vijesti-hrvatska.hr" class="bg-[#e11d48] hover:bg-rose-700 text-white font-bold text-xs px-3.5 py-1.5 rounded uppercase tracking-wider text-center transition-all shadow-sm">
                                Zakupi oglasni prostor
                            </a>
                        </div>
                    `;
                    grid.appendChild(adCard);
                }

                const card = document.createElement('div');
                card.className = 'news-card group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 rounded-lg overflow-hidden shadow-sm hover:shadow transition-all flex flex-col justify-between cursor-pointer';
                card.onclick = (e) => {
                    if (e.target.closest('.bookmark-btn')) return;
                    window.open(article.link, '_blank');
                };

                let cardImage = '';
                if (article.imageUrl.startsWith('placeholder-')) {
                    cardImage = getGradientPlaceholder(article.sourceId, article.source);
                } else {
                    cardImage = `
                        <div class="w-full h-36 overflow-hidden relative">
                            <img src="${article.imageUrl}" alt="${article.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
                        </div>
                    `;
                }

                const isBookmarked = bookmarkedUrls.includes(article.link);

                card.innerHTML = `
                    <div class="flex flex-col">
                        <div class="relative bg-slate-900">
                            ${cardImage}
                            <button class="bookmark-btn absolute top-2 right-2 p-1.5 rounded-full bg-black/60 hover:bg-[#D13D1F] text-white backdrop-blur-sm shadow opacity-0 group-hover:opacity-100 transition-all" data-link="${article.link}" title="Spremi">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="${isBookmarked ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                </svg>
                            </button>
                        </div>
                        <div class="p-4 space-y-2.5">
                            <div class="flex items-center justify-between text-xs text-slate-700 dark:text-slate-400">
                                <span class="${article.sourceColor} font-extrabold px-2 py-0.5 rounded text-[10px] uppercase select-none shadow-sm">${article.source}</span>
                                <span class="font-mono text-[10px]">${getRelativeTimeCroatian(article.publishedAt)}</span>
                            </div>
                            <h3 class="text-sm md:text-[14.5px] font-extrabold leading-snug line-clamp-3 group-hover:text-[#D13D1F] dark:group-hover:text-[#E5472C] transition-colors">${article.title}</h3>
                            <p class="text-xs text-slate-800 dark:text-slate-300 line-clamp-2 leading-relaxed">${article.description || 'Pročitajte vijest na originalnom portalu.'}</p>
                        </div>
                    </div>
                    <div class="px-4 pb-3.5 pt-1.5 flex justify-between items-center text-[10.5px] font-bold border-t border-slate-100 dark:border-slate-700/40">
                        <span class="bg-[#D13D1F]/10 dark:bg-[#E5472C]/10 text-[#D13D1F] dark:text-[#E5472C] px-2 py-0.5 rounded uppercase select-none">${article.category}</span>
                        <span class="text-slate-700 dark:text-slate-400 flex items-center gap-0.5">Otvori portal</span>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // Render Infinite Scroll trigger element if there are more items to load
        let pagContainer = document.getElementById('pagination-container');
        if (!pagContainer) {
            pagContainer = document.createElement('div');
            pagContainer.id = 'pagination-container';
            pagContainer.className = 'flex justify-center pt-4 pb-2 col-span-full';
            if (grid) grid.parentNode.appendChild(pagContainer);
        }

        pagContainer.innerHTML = '';
        if (categoryFiltered.length > currentArticlesLimit) {
            pagContainer.innerHTML = `
                <div id="infinite-scroll-trigger" class="py-6 flex flex-col items-center justify-center space-y-2 select-none w-full">
                    <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-[#D13D1F] dark:border-[#E5472C]"></div>
                    <span class="text-[10px] uppercase tracking-wider font-extrabold text-slate-405 dark:text-slate-500">Učitavanje još vijesti...</span>
                </div>
            `;
            setupInfiniteScroll();
        }
    }
}

// Render Splash helper
function renderSplashHero(splashArticles) {
    const splashSection = document.getElementById('splash-section');
    if (!splashSection || splashArticles.length === 0) return;
    splashSection.innerHTML = '';

    splashArticles.slice(0, 3).forEach(article => {
        const isBookmarked = bookmarkedUrls.includes(article.link);
        const cardImage = article.imageUrl.startsWith('placeholder-') 
            ? getGradientPlaceholder(article.sourceId, article.source)
            : `<div class="w-full h-40 overflow-hidden relative">
                   <img src="${article.imageUrl}" alt="${article.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
               </div>`;

        const card = document.createElement('div');
        card.className = 'news-card group bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-750 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer relative';
        card.onclick = (e) => {
            if (e.target.closest('.bookmark-btn')) return;
            window.open(article.link, '_blank');
        };

        card.innerHTML = `
            <div class="flex flex-col">
                <div class="relative bg-slate-900">
                    ${cardImage}
                    <div class="absolute top-2 left-2 flex gap-1.5">
                        <span class="${article.sourceColor} font-extrabold text-[10.5px] px-2 py-0.5 rounded uppercase shadow-sm select-none">${article.source}</span>
                    </div>
                    <button class="bookmark-btn absolute top-2 right-2 p-1.5 rounded-full bg-black/60 hover:bg-[#D13D1F] text-white backdrop-blur-sm shadow opacity-0 group-hover:opacity-100 transition-all" data-link="${article.link}" title="Spremi">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="${isBookmarked ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>
                    </button>
                </div>
                <div class="p-4 space-y-2.5">
                    <span class="font-mono text-xs text-slate-700 dark:text-slate-400 font-semibold">${getRelativeTimeCroatian(article.publishedAt)}</span>
                    <h2 class="text-base md:text-lg font-black leading-snug group-hover:text-[#D13D1F] dark:group-hover:text-[#E5472C] transition-colors line-clamp-3">${article.title}</h2>
                    <p class="text-xs text-slate-800 dark:text-slate-300 line-clamp-2 leading-relaxed">${article.description || 'Pročitajte vijest na originalnom portalu.'}</p>
                </div>
            </div>
        `;
        splashSection.appendChild(card);
    });
}

function renderHeadlinesUnderneath(headlines) {
    const sec = document.getElementById('headlines-underneath-section');
    const container = document.getElementById('headlines-underneath');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (headlines.length === 0) {
        if (sec) sec.classList.add('hidden');
        return;
    }
    
    if (sec) sec.classList.remove('hidden');
    
    headlines.slice(0, 3).forEach(article => {
        const item = document.createElement('div');
        item.className = 'flex items-start gap-4 p-3 rounded hover:bg-slate-100 dark:hover:bg-[#161616] transition-colors cursor-pointer group';
        item.onclick = () => window.open(article.link, '_blank');
        
        const hrs = article.publishedAt.getHours().toString().padStart(2, '0');
        const mins = article.publishedAt.getMinutes().toString().padStart(2, '0');
        const timeString = `${hrs}:${mins}`;
        
        item.innerHTML = `
            <span class="font-mono text-[#D13D1F] dark:text-[#E5472C] font-black text-[14px] mt-0.5 shrink-0">${timeString}</span>
            <div class="space-y-1 min-w-0">
                <span class="text-[11px] uppercase font-black text-slate-800 dark:text-slate-300 group-hover:text-[#D13D1F] dark:group-hover:text-[#E5472C]">${article.source}</span>
                <h4 class="text-[15px] font-black text-slate-950 dark:text-slate-50 line-clamp-2 leading-snug group-hover:text-[#D13D1F] dark:group-hover:text-[#E5472C] transition-colors">${article.title}</h4>
            </div>
        `;
        container.appendChild(item);
    });
}

let activePortalTab = 'nacionalni';
let activePortalSubTab = 'all';
let portalSearchQuery = '';

function renderPortalsPage() {
    const portaliArea = document.getElementById('portali-area');
    if (!portaliArea) return;

    // Check if we have initialized the portal wrapper
    let wrapper = document.getElementById('portal-page-wrapper');
    if (!wrapper) {
        portaliArea.innerHTML = `
            <div id="portal-page-wrapper" class="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm transition-colors space-y-6">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                    <div>
                        <h2 class="text-base font-black tracking-tight flex items-center gap-2 font-heading">
                            🌐 Imenik hrvatskih portala
                        </h2>
                        <p class="text-xs text-slate-700 dark:text-slate-400 mt-1">Pregledajte i pretražite hrvatske medijske portale i linkove razvrstane po regijama i temama.</p>
                    </div>
                    
                    <!-- Search Input -->
                    <div class="relative w-full md:w-72">
                        <input type="text" id="portal-search-input" placeholder="Pretraži imenik (680+ portala)..." 
                               class="w-full bg-slate-50 dark:bg-[#161616] border border-slate-200 dark:border-slate-800 text-[#1C1C1C] dark:text-[#F4F3EE] placeholder-slate-400 dark:placeholder-slate-500 text-xs rounded py-2 pl-8 pr-3 focus:outline-none focus:border-[#D13D1F] dark:focus:border-[#E5472C] transition-all">
                        <div class="absolute left-2.5 top-2.5 text-slate-400 dark:text-slate-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Primary Tabs Navigation -->
                <div class="flex space-x-1.5 border-b border-slate-200 dark:border-slate-800 pb-2 overflow-x-auto scrollbar-none font-bold text-xs select-none font-heading">
                    <button class="portal-tab-btn px-4 py-2 rounded-t-lg transition-all focus:outline-none uppercase tracking-wider border-b-2 border-transparent" data-tab="nacionalni">🌐 Nacionalni</button>
                    <button class="portal-tab-btn px-4 py-2 rounded-t-lg transition-all focus:outline-none uppercase tracking-wider border-b-2 border-transparent" data-tab="lokalni">📍 Lokalni</button>
                    <button class="portal-tab-btn px-4 py-2 rounded-t-lg transition-all focus:outline-none uppercase tracking-wider border-b-2 border-transparent" data-tab="tematski">🏷️ Tematski</button>
                    <button class="portal-tab-btn px-4 py-2 rounded-t-lg transition-all focus:outline-none uppercase tracking-wider border-b-2 border-transparent" data-tab="korisni-web">🔗 Korisni Web</button>
                </div>

                <!-- Secondary Sub-Tabs Navigation -->
                <div id="portal-subtabs-container" class="flex flex-wrap gap-1.5 select-none hidden">
                    <!-- Loaded dynamically -->
                </div>

                <!-- Portals Count Indicator -->
                <div class="text-[10px] font-bold text-slate-600 dark:text-slate-450 uppercase tracking-widest font-mono">
                    Pronađeno: <span id="portals-filtered-count" class="text-[#D13D1F] dark:text-[#E5472C]">0</span> portala
                </div>

                <!-- Portals Directory Grid -->
                <div id="portal-directory-large" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    <!-- Cards loaded dynamically -->
                </div>
            </div>
        `;

        // Bind events
        const searchInput = document.getElementById('portal-search-input');
        if (searchInput) {
            searchInput.value = portalSearchQuery;
            searchInput.oninput = (e) => {
                portalSearchQuery = e.target.value.toLowerCase().trim();
                renderPortalsGrid();
            };
        }

        const tabBtns = document.querySelectorAll('.portal-tab-btn');
        tabBtns.forEach(btn => {
            btn.onclick = () => {
                activePortalTab = btn.getAttribute('data-tab');
                activePortalSubTab = 'all'; // Reset subtab on category change
                updateTabStyles();
                renderSubTabs();
                renderPortalsGrid();
            };
        });

        updateTabStyles();
        renderSubTabs();
    }

    renderPortalsGrid();
}

function updateTabStyles() {
    const tabBtns = document.querySelectorAll('.portal-tab-btn');
    tabBtns.forEach(btn => {
        const tab = btn.getAttribute('data-tab');
        if (tab === activePortalTab) {
            btn.className = 'portal-tab-btn px-4 py-2 rounded-t-lg transition-all focus:outline-none uppercase tracking-wider border-b-2 border-[#D13D1F] dark:border-[#E5472C] text-[#D13D1F] dark:text-[#E5472C] bg-slate-50 dark:bg-slate-850/50';
        } else {
            btn.className = 'portal-tab-btn px-4 py-2 rounded-t-lg transition-all focus:outline-none uppercase tracking-wider border-b-2 border-transparent text-slate-700 dark:text-slate-400 hover:text-[#D13D1F] dark:hover:text-[#E5472C]';
        }
    });
}

function renderSubTabs() {
    const container = document.getElementById('portal-subtabs-container');
    if (!container) return;

    if (activePortalTab === 'lokalni') {
        container.classList.remove('hidden');
        const subtabs = [
            { id: 'all', name: 'Sve regije' },
            { id: 'zagreb', name: 'Zagreb' },
            { id: 'dalmacija', name: 'Dalmacija' },
            { id: 'slavonija', name: 'Slavonija' },
            { id: 'istra-i-kvarner', name: 'Istra i Kvarner' },
            { id: 'ostalo', name: 'Ostale regije' }
        ];
        renderSubtabButtons(container, subtabs);
    } else if (activePortalTab === 'tematski') {
        container.classList.remove('hidden');
        const subtabs = [
            { id: 'all', name: 'Sve teme' },
            { id: 'sport', name: 'Sport' },
            { id: 'tech', name: 'Tehnologija' },
            { id: 'lifestyle', name: 'Lifestyle & Zabava' },
            { id: 'biznis', name: 'Biznis & Posao' },
            { id: 'auti', name: 'Auti / Auto-moto' }
        ];
        renderSubtabButtons(container, subtabs);
    } else {
        container.classList.add('hidden');
    }
}

function renderSubtabButtons(container, subtabs) {
    container.innerHTML = '';
    subtabs.forEach(sub => {
        const btn = document.createElement('button');
        btn.innerText = sub.name;
        btn.className = activePortalSubTab === sub.id 
            ? 'px-3 py-1 rounded bg-[#D13D1F] dark:bg-[#E5472C] text-white text-[11px] font-bold uppercase transition-all'
            : 'px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-750 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-750 text-[11px] font-bold uppercase transition-all';
        btn.onclick = () => {
            activePortalSubTab = sub.id;
            renderSubTabs();
            renderPortalsGrid();
        };
        container.appendChild(btn);
    });
}

function renderPortalsGrid() {
    const grid = document.getElementById('portal-directory-large');
    const countEl = document.getElementById('portals-filtered-count');
    if (!grid) return;

    grid.innerHTML = '';

    // Filter portals based on tab and subtab
    let list = [];
    if (activePortalTab === 'nacionalni') {
        list = CATEGORIZED_PORTALS.nacionalni;
    } else if (activePortalTab === 'lokalni') {
        if (activePortalSubTab === 'all') {
            list = [
                ...CATEGORIZED_PORTALS.lokalni.zagreb,
                ...CATEGORIZED_PORTALS.lokalni.dalmacija,
                ...CATEGORIZED_PORTALS.lokalni.slavonija,
                ...CATEGORIZED_PORTALS.lokalni["istra-i-kvarner"],
                ...CATEGORIZED_PORTALS.lokalni.ostalo
            ];
        } else {
            list = CATEGORIZED_PORTALS.lokalni[activePortalSubTab] || [];
        }
    } else if (activePortalTab === 'tematski') {
        if (activePortalSubTab === 'all') {
            list = [
                ...CATEGORIZED_PORTALS.tematski.sport,
                ...CATEGORIZED_PORTALS.tematski.tech,
                ...CATEGORIZED_PORTALS.tematski.lifestyle,
                ...CATEGORIZED_PORTALS.tematski.biznis,
                ...CATEGORIZED_PORTALS.tematski.auti
            ];
        } else {
            list = CATEGORIZED_PORTALS.tematski[activePortalSubTab] || [];
        }
    } else if (activePortalTab === 'korisni-web') {
        list = CATEGORIZED_PORTALS.tematski.ostalo || [];
    }

    // Apply search filter
    if (portalSearchQuery) {
        list = list.filter(p => 
            p.name.toLowerCase().includes(portalSearchQuery) || 
            (p.description && p.description.toLowerCase().includes(portalSearchQuery)) || 
            (p.domain && p.domain.toLowerCase().includes(portalSearchQuery))
        );
    }

    // Update count
    if (countEl) countEl.innerText = list.length;

    if (list.length === 0) {
        grid.className = 'col-span-full py-10 text-center text-slate-405 dark:text-slate-505 text-xs font-semibold';
        grid.innerText = 'Nema pronađenih portala za odabrane kriterije.';
        return;
    }

    grid.className = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3';

    list.forEach(portal => {
        const card = document.createElement('a');
        card.href = portal.url || '#';
        card.target = '_blank';
        card.rel = 'noopener';
        card.className = 'flex items-start space-x-3 bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-750/70 border border-slate-200 dark:border-slate-800/80 p-3.5 rounded-xl transition-all text-xs group cursor-pointer';

        const faviconUrl = portal.domain 
            ? `https://www.google.com/s2/favicons?domain=${portal.domain}&sz=32`
            : '/favicon.ico';

        card.innerHTML = `
            <img src="${faviconUrl}" alt="${portal.name}" class="w-4.5 h-4.5 mt-0.5 object-contain shrink-0" onerror="this.src='/favicon.ico'">
            <div class="min-w-0 flex-1 space-y-1">
                <span class="block truncate text-slate-800 dark:text-slate-100 font-extrabold group-hover:text-[#D13D1F] dark:group-hover:text-[#E5472C] transition-colors">${portal.name}</span>
                <span class="block text-[10px] text-slate-700 dark:text-slate-400 font-mono truncate">${portal.domain || 'vanjski link'}</span>
                ${portal.description ? `<p class="text-[11px] text-slate-600 dark:text-slate-450 line-clamp-2 leading-normal pt-0.5 font-normal">${portal.description}</p>` : ''}
            </div>
        `;
        grid.appendChild(card);
    });
}

// Function to extract dynamic popular tags based on current articles
function getDynamicTags(articlesList) {
    if (!articlesList || articlesList.length === 0) {
        return ['Hrvatska', 'Sport', 'Politika', 'Zabava', 'Tehnologija', 'Gospodarstvo'];
    }

    const wordCounts = {};
    const stopwords = new Set([
        'i', 'u', 'na', 'se', 'o', 'za', 'da', 'od', 'je', 'su', 'toga', 'koji', 'koja', 'koje', 's', 'sa', 'ili', 'ali', 'a', 'kako', 'već', 'nakon',
        'tijekom', 'zbog', 'kod', 'također', 'kroz', 'oko', 'pa', 'te', 'što', 'sve', 'do', 'bi', 'uz', 'kao', 'još', 'dok', 'tih', 'iz', 'bilo',
        'samo', 'tko', 'gdje', 'kad', 'jer', 'bila', 'bili', 'bio', 'biti', 'ovog', 'ove', 'ovo', 'ovaj', 'naš', 'vaš', 'njihov', 'može', 'mogu',
        'rekao', 'rekla', 'reći', 'rečeno', 'protiv', 'novi', 'nova', 'novo', 'više', 'manje', 'prije', 'jedan', 'dva', 'tri', 'prvi', 'drugi',
        'treći', 'dan', 'godine', 'danas', 'tijekom', 'posto', 'kuna', 'eura', 'poput', 'svih', 'svi', 'tome', 'tom', 'toj', 'ih', 'ga', 'mu',
        'joj', 'im', 'iznad', 'ispod', 'ispred', 'koga', 'čemu', 'čega', 'čime', 'bez', 'osim', 'radi', 'video', 'foto', 'uživo', 'pogledajte',
        'reakcije', 'detalji', 'komentar', 'analiza', 'foto/video', 'video/foto', 'sp-u', 'sp-a', 'ep-a', 'ep-u'
    ]);

    const hotTopics = [
        { term: 'dinamo', label: 'Dinamo' },
        { term: 'hajduk', label: 'Hajduk' },
        { term: 'hdz', label: 'HDZ' },
        { term: 'sdp', label: 'SDP' },
        { term: 'sabor', label: 'Sabor' },
        { term: 'vlada', label: 'Vlada' },
        { term: 'hrvatska', label: 'Hrvatska' },
        { term: 'zagreb', label: 'Zagreb' },
        { term: 'split', label: 'Split' },
        { term: 'rijeka', label: 'Rijeka' },
        { term: 'osijek', label: 'Osijek' },
        { term: 'rimac', label: 'Rimac' },
        { term: 'plenković', label: 'Plenković' },
        { term: 'milanović', label: 'Milanović' },
        { term: 'turizam', label: 'Turizam' },
        { term: 'euro', label: 'Euro' },
        { term: 'cijene', label: 'Cijene' },
        { term: 'promet', label: 'Promet' },
        { term: 'policija', label: 'Policija' },
        { term: 'hns', label: 'HNS' },
        { term: 'modrić', label: 'Modrić' },
        { term: 'znanost', label: 'Znanost' },
        { term: 'gaming', label: 'Gaming' },
        { term: 'inflacija', label: 'Inflacija' },
        { term: 'porez', label: 'Porez' },
        { term: 'plaće', label: 'Plaće' }
    ];

    articlesList.forEach(article => {
        const text = (article.title + ' ' + article.description).toLowerCase();
        
        hotTopics.forEach(topic => {
            if (text.includes(topic.term)) {
                wordCounts[topic.label] = (wordCounts[topic.label] || 0) + 3;
            }
        });

        const words = article.title.split(/\s+/);
        words.forEach((word, idx) => {
            const clean = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'“„]/g, "").trim();
            if (clean.length < 3) return;

            const isCapitalized = clean[0] === clean[0].toUpperCase() && clean[0] !== clean[0].toLowerCase();
            const isFirstWord = idx === 0;
            const isAllCaps = clean === clean.toUpperCase();

            if (isCapitalized && (!isFirstWord || isAllCaps)) {
                const lowerClean = clean.toLowerCase();
                if (!stopwords.has(lowerClean)) {
                    const key = isAllCaps ? clean : clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase();
                    wordCounts[key] = (wordCounts[key] || 0) + 1;
                }
            }
        });
    });

    const sortedTags = Object.entries(wordCounts)
        .filter(([tag]) => tag.length >= 3 && isNaN(tag))
        .sort((a, b) => b[1] - a[1])
        .map(([tag]) => tag);

    const uniqueTags = Array.from(new Set(sortedTags));
    return uniqueTags.slice(0, 14);
}

// Sidebar rendering (Najnovije vertical list + bookmarks + tags)
function renderSidebar() {
    const stream = document.getElementById('latest-stream');
    if (!stream) return;
    stream.innerHTML = '';
    
    const latest = articles.slice(0, 15);
    latest.forEach(article => {
        const item = document.createElement('a');
        item.href = article.link;
        item.target = '_blank';
        item.rel = 'noopener';
        item.className = 'block py-2 border-b border-slate-200 dark:border-slate-850 hover:bg-slate-100 dark:hover:bg-[#161616] px-1.5 py-2 rounded transition-colors group/stream';
        
        const hrs = article.publishedAt.getHours().toString().padStart(2, '0');
        const mins = article.publishedAt.getMinutes().toString().padStart(2, '0');
        const timeString = `${hrs}:${mins}`;

        item.innerHTML = `
            <div class="flex items-center space-x-2.5 text-xs">
                <span class="font-mono text-[#D13D1F] dark:text-[#E5472C] font-extrabold shrink-0">${timeString}</span>
                <span class="font-mono text-slate-700 dark:text-slate-400 uppercase font-extrabold text-[9.5px] truncate max-w-[90px]">${article.source}</span>
            </div>
            <h4 class="text-[13px] font-semibold text-slate-850 dark:text-slate-200 group-hover/stream:text-[#D13D1F] dark:group-hover/stream:text-[#E5472C] transition-colors leading-tight mt-0.5">${article.title}</h4>
        `;
        stream.appendChild(item);
    });

    const bookmarkSec = document.getElementById('bookmark-section');
    const bookmarkList = document.getElementById('bookmark-list');
    if (bookmarkSec && bookmarkList) {
        bookmarkList.innerHTML = '';

        if (bookmarkedUrls.length === 0) {
            bookmarkSec.classList.add('hidden');
        } else {
            bookmarkSec.classList.remove('hidden');
            const bmc = document.getElementById('bookmark-count');
            if (bmc) bmc.innerText = bookmarkedUrls.length;

            const bookmarkedArticles = articles.filter(a => bookmarkedUrls.includes(a.link));
            bookmarkedArticles.forEach(article => {
                const row = document.createElement('div');
                row.className = 'flex items-start justify-between py-2 border-b border-slate-200 dark:border-slate-800 text-[13px] gap-2.5 group/book';

                row.innerHTML = `
                    <a href="${article.link}" target="_blank" class="hover:text-[#D13D1F] dark:hover:text-[#E5472C] font-semibold truncate flex-grow leading-tight">${article.title}</a>
                    <button class="text-red-400 hover:text-red-650 transition-colors px-1" onclick="toggleBookmark('${article.link}')" title="Ukloni">
                        &times;
                    </button>
                `;
                bookmarkList.appendChild(row);
            });
        }
    }

    const tagCloud = document.getElementById('tag-cloud');
    if (tagCloud) {
        tagCloud.innerHTML = '';
        const dynamicTags = getDynamicTags(articles);
        dynamicTags.forEach(tag => {
            const btn = document.createElement('button');
            btn.className = 'text-[11.5px] font-bold bg-slate-100 dark:bg-slate-750 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded transition-colors';
            btn.innerText = tag;
            btn.onclick = () => {
                const searchInp = document.getElementById('search-input');
                if (searchInp) searchInp.value = tag;
                searchQuery = tag;
                renderFeed();
            };
            tagCloud.appendChild(btn);
        });
    }
}

// Bookmark Toggle logic
function toggleBookmark(link) {
    const index = bookmarkedUrls.indexOf(link);
    if (index > -1) {
        bookmarkedUrls.splice(index, 1);
    } else {
        bookmarkedUrls.push(link);
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkedUrls));
    
    renderFeed();
    renderSidebar();
}

let tickerInterval = null;
let currentTickerIdx = 0;

// Ticker updates (Option B: Fading Rotator)
function updateMarqueeTicker() {
    const ticker = document.getElementById('ticker');
    if (!ticker) return;
    if (articles.length === 0) {
        ticker.innerText = 'Nema učitanih vijesti.';
        return;
    }

    if (tickerInterval) clearInterval(tickerInterval);

    const topNews = articles.slice(0, 10);
    
    // Convert elements classes to static, fading container
    ticker.classList.remove('animate-marquee', 'absolute');
    ticker.classList.add('transition-opacity', 'duration-500', 'block', 'w-full', 'truncate');
    ticker.style.opacity = '1';

    const showHeadline = (index) => {
        const article = topNews[index];
        ticker.style.opacity = '0';
        setTimeout(() => {
            ticker.innerHTML = `🔥 <span class="font-black uppercase text-[#D13D1F] dark:text-[#E5472C]">[${article.source}]</span> ${article.title}`;
            ticker.onclick = () => window.open(article.link, '_blank');
            ticker.style.opacity = '1';
        }, 500);
    };

    currentTickerIdx = 0;
    showHeadline(currentTickerIdx);

    tickerInterval = setInterval(() => {
        currentTickerIdx = (currentTickerIdx + 1) % topNews.length;
        showHeadline(currentTickerIdx);
    }, 5000);
}

// Fallback placeholder gradient generator
function getGradientPlaceholder(sourceId, name) {
    const gradients = {
        index: 'from-red-950 via-slate-900 to-red-900',
        '24sata': 'from-amber-950 via-slate-900 to-amber-900',
        vecernji: 'from-red-950 via-slate-900 to-slate-900',
        tportal: 'from-cyan-950 via-slate-900 to-cyan-900',
        unknown: 'from-slate-950 via-slate-900 to-slate-800'
    };
    const grad = gradients[sourceId] || gradients.unknown;
    return `
        <div class="w-full h-36 bg-gradient-to-br ${grad} flex flex-col justify-center items-center text-center p-4 relative group-hover:scale-105 transition-transform duration-350">
            <span class="text-2xl font-black opacity-10 uppercase tracking-widest text-slate-100 select-none absolute">${name}</span>
            <span class="text-[11.5px] text-slate-350 dark:text-slate-400 font-extrabold px-2 py-0.5 rounded bg-slate-900/60 backdrop-blur-sm z-10 select-none">${name}</span>
        </div>
    `;
}

// Render category horizontal navigation (Multi-Page Category file links)
function renderSubNavigation() {
    const nav = document.getElementById('category-container');
    if (!nav) return;
    nav.innerHTML = '';

    const mainCats = [
        { id: 'sve', name: 'Sve', file: 'index.html' },
        { id: 'vijesti', name: 'Vijesti', file: 'vijesti.html' },
        { id: 'sport', name: 'Sport', file: 'sport.html' },
        { id: 'tech', name: 'Tehnologija', file: 'tech.html' },
        { id: 'lifestyle', name: 'Lifestyle', file: 'lifestyle.html' },
        { id: 'biznis', name: 'Biznis', file: 'biznis.html' },
        { id: 'auti', name: 'Auti', file: 'auti.html' },
        { id: 'showbiz', name: 'Showbiz', file: 'showbiz.html' },
        { id: 'zanimljivosti', name: 'Zanimljivosti', file: 'zanimljivosti.html' },
        { id: 'vrijeme', name: 'Vrijeme 🌤️', file: 'vrijeme.html' },
        { id: 'portali', name: 'Portali 🌐', file: 'portali.html' },
        { id: 'spremljeno', name: 'Spremljeno 📌', file: 'spremljeno.html' }
    ];

    // Only add Analitika category to secondary menu if logged in as admin
    if (sessionStorage.getItem('admin_logged_in') === 'true') {
        mainCats.push({ id: 'analitika', name: 'Analitika 📊', file: 'analitika.html' });
    }

    mainCats.forEach(c => {
        const btn = document.createElement('a');
        btn.href = c.file;
        const isActive = activeCategory === c.id;
        
        // Hide static page links in the category bar on desktop since they are already in the main header
        const responsiveClasses = ['vrijeme', 'portali', 'spremljeno', 'analitika'].includes(c.id) ? ' lg:hidden' : '';
        
        btn.className = `px-4 py-1 text-sm font-extrabold rounded transition-all shrink-0 uppercase tracking-wide select-none${responsiveClasses} ${
            isActive 
                ? 'bg-[#D13D1F] text-white shadow-sm active-category-btn' 
                : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
        }`;
        btn.innerText = c.name;
        nav.appendChild(btn);
    });

    const subMenuBar = document.getElementById('subcategory-menu-bar');
    const subContainer = document.getElementById('subcategory-container');
    
    if (activeCategory !== 'sve' && activeCategory !== 'analitika' && activeCategory !== 'portali' && activeCategory !== 'spremljeno' && activeCategory !== 'vrijeme') {
        const catConf = PORTAL_CATEGORIES.find(c => c.id === activeCategory);
        if (catConf && subContainer && subMenuBar) {
            subContainer.innerHTML = '';
            subMenuBar.classList.remove('hidden');

            const allBtn = document.createElement('a');
            allBtn.href = '#';
            const isAllActive = activeSubcategory === 'sve';
            allBtn.className = `px-3.5 py-1 text-xs font-bold rounded-full transition-all shrink-0 uppercase tracking-wide select-none ${
                isAllActive
                    ? 'bg-[#e11d48] dark:bg-rose-700 text-white shadow-sm'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-650 dark:text-slate-350 hover:bg-slate-300 dark:hover:bg-slate-700'
            }`;
            allBtn.innerText = 'Sve';
            subContainer.appendChild(allBtn);

            catConf.subcategories.forEach(sub => {
                const subId = slugify(sub);
                const btn = document.createElement('a');
                btn.href = `#${subId}`;
                const isSubActive = activeSubcategory === subId;
                btn.className = `px-3.5 py-1 text-xs font-bold rounded-full transition-all shrink-0 uppercase tracking-wide select-none ${
                    isSubActive
                        ? 'bg-[#e11d48] dark:bg-rose-700 text-white shadow-sm'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-650 dark:text-slate-350 hover:bg-slate-300 dark:hover:bg-slate-700'
                }`;
                btn.innerText = sub;
                subContainer.appendChild(btn);
            });
        } else if (subMenuBar) {
            subMenuBar.classList.add('hidden');
        }
    } else {
        if (subMenuBar) {
            subMenuBar.classList.add('hidden');
        }
    }

    // Auto-scroll the active category button into the center of the viewport on mobile screens
    setTimeout(() => {
        const activeBtn = nav.querySelector('.active-category-btn');
        if (activeBtn) {
            activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    }, 100);
}

function slugify(text) {
    return text.toLowerCase()
        .replace(/š/g, 's')
        .replace(/ć/g, 'c')
        .replace(/č/g, 'c')
        .replace(/đ/g, 'd')
        .replace(/ž/g, 'z')
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9\-]/g, '');
}

// Detect active category and subcategory based on URL filename and hash
function detectActivePage() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    
    if (path === '' || path === '/' || path.includes('index.html')) {
        activeCategory = 'sve';
    } else if (path.includes('analitika.html')) {
        activeCategory = 'analitika';
    } else if (path.includes('portali.html')) {
        activeCategory = 'portali';
    } else {
        activeCategory = path.replace('.html', '');
    }

    let hash = window.location.hash.substring(1);
    try {
        hash = decodeURIComponent(hash);
    } catch(e) {}
    activeSubcategory = hash ? slugify(hash) : 'sve';
}

// Parse hash/url routing and render view
function handleRoute() {
    currentArticlesLimit = 12;
    detectActivePage();

    // Sync document titles and screen-reader H1 heading for SEO
    let catName = 'Sve Vijesti';
    if (activeCategory !== 'sve') {
        const catConf = PORTAL_CATEGORIES.find(c => c.id === activeCategory);
        if (catConf) {
            catName = catConf.name.charAt(0).toUpperCase() + catConf.name.slice(1).toLowerCase();
        } else if (activeCategory === 'analitika') {
            catName = 'Analitika';
        } else if (activeCategory === 'portali') {
            catName = 'Portali';
        } else if (activeCategory === 'spremljeno') {
            catName = 'Spremljeno';
        } else if (activeCategory === 'vrijeme') {
            catName = 'Vrijeme';
        } else {
            catName = activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1);
        }
    }

    let subName = '';
    if (activeSubcategory !== 'sve') {
        const catConf = PORTAL_CATEGORIES.find(c => c.id === activeCategory);
        if (catConf) {
            const originalSub = catConf.subcategories.find(sub => slugify(sub) === activeSubcategory);
            if (originalSub) {
                subName = ` - ${originalSub}`;
            } else {
                subName = ` - ${activeSubcategory.charAt(0).toUpperCase() + activeSubcategory.slice(1)}`;
            }
        } else {
            subName = ` - ${activeSubcategory.charAt(0).toUpperCase() + activeSubcategory.slice(1)}`;
        }
    }

    const pageTitle = `${catName}${subName} | Vijesti Hrvatska`;
    document.title = pageTitle;

    const h1Heading = document.getElementById('page-main-heading');
    if (h1Heading) {
        h1Heading.textContent = pageTitle;
    }

    // Render subnavigation
    renderSubNavigation();

    const feedArea = document.getElementById('feed-area');
    const analyticsArea = document.getElementById('analytics-area');
    const portaliArea = document.getElementById('portali-area');
    const emptyState = document.getElementById('empty-state');
    const mainEl = document.getElementById('main-content');
    const sidebarEl = document.getElementById('sidebar');
    const weatherArea = document.getElementById('weather-area');

    // Adjust sidebar and main layout width dynamically
    if (activeCategory === 'portali' || activeCategory === 'analitika' || activeCategory === 'vrijeme') {
        if (sidebarEl) sidebarEl.classList.add('hidden');
        if (mainEl) {
            mainEl.classList.remove('lg:w-[72%]');
            mainEl.classList.add('lg:w-full');
        }
        // Immediately hide news loading skeletons for static pages
        const spinner = document.getElementById('loading-spinner');
        if (spinner) spinner.classList.add('hidden');
    } else {
        if (sidebarEl) sidebarEl.classList.remove('hidden');
        if (mainEl) {
            mainEl.classList.remove('lg:w-full');
            mainEl.classList.add('lg:w-[72%]');
        }
    }

    if (activeCategory === 'analitika') {
        if (feedArea) feedArea.classList.add('hidden');
        if (portaliArea) portaliArea.classList.add('hidden');
        if (weatherArea) weatherArea.classList.add('hidden');
        if (emptyState) emptyState.classList.add('hidden');
        if (analyticsArea) {
            analyticsArea.classList.remove('hidden');
            renderAnalytics();
        }
    } else if (activeCategory === 'portali') {
        if (feedArea) feedArea.classList.add('hidden');
        if (analyticsArea) analyticsArea.classList.add('hidden');
        if (weatherArea) weatherArea.classList.add('hidden');
        if (emptyState) emptyState.classList.add('hidden');
        if (portaliArea) {
            portaliArea.classList.remove('hidden');
            renderPortalsPage();
        }
    } else if (activeCategory === 'vrijeme') {
        if (feedArea) feedArea.classList.add('hidden');
        if (analyticsArea) analyticsArea.classList.add('hidden');
        if (portaliArea) portaliArea.classList.add('hidden');
        if (emptyState) emptyState.classList.add('hidden');
        if (weatherArea) {
            weatherArea.classList.remove('hidden');
            renderWeatherPage();
        }
    } else {
        if (analyticsArea) analyticsArea.classList.add('hidden');
        if (portaliArea) portaliArea.classList.add('hidden');
        if (weatherArea) weatherArea.classList.add('hidden');
        if (feedArea) {
            feedArea.classList.remove('hidden');
            renderFeed();
        }
    }

    updateHeaderNavSelection();
}

// Render Media Analytics charts dynamically (Value-Add Content for AdSense)
// Render Media Analytics charts dynamically (Value-Add Content for AdSense)
function renderAnalytics() {
    const totalArticles = articles.length;
    const statTotal = document.getElementById('stat-total-articles');
    if (statTotal) statTotal.innerText = totalArticles;

    if (totalArticles === 0) {
        const statHourly = document.getElementById('stat-hourly-rate');
        if (statHourly) statHourly.innerText = '0.0/h';
        return;
    }

    // 1. Calculate hourly velocity
    const dates = articles.map(a => a.publishedAt);
    const maxDate = new Date();
    const minDate = new Date(Math.min(...dates));
    const timeDiffHours = Math.max(0.5, (maxDate - minDate) / 3600000);
    const hourlyRate = (totalArticles / timeDiffHours).toFixed(1);
    const statHourly = document.getElementById('stat-hourly-rate');
    if (statHourly) statHourly.innerText = `${hourlyRate}/h`;

    // 2. Active Portals Stat
    const activePortalsSpan = document.getElementById('stat-active-portals');
    if (activePortalsSpan) {
        const uniqueSourcesWithNews = new Set(articles.map(a => a.source)).size;
        activePortalsSpan.innerText = `${uniqueSourcesWithNews} / ${RSS_SOURCES.length}`;
    }

    // 3. Draw Posting Velocity SVG Sparkline Chart
    const hourlyCounts = Array(24).fill(0);
    const now = new Date();
    articles.forEach(art => {
        const diffMs = now - art.publishedAt;
        const diffHours = Math.floor(diffMs / 3600000);
        if (diffHours >= 0 && diffHours < 24) {
            hourlyCounts[23 - diffHours]++; // chronologically ordered (leftmost is 23h ago)
        }
    });
    drawVelocityChart(hourlyCounts);

    // 4. Publisher Share Graph
    const sourceCounts = {};
    RSS_SOURCES.forEach(src => sourceCounts[src.name] = 0);
    articles.forEach(art => {
        if (sourceCounts[art.source] !== undefined) {
            sourceCounts[art.source]++;
        } else {
            sourceCounts[art.source] = 1;
        }
    });

    const shareContainer = document.getElementById('analytics-share-container');
    if (shareContainer) {
        shareContainer.innerHTML = '';
        const sortedSources = Object.entries(sourceCounts).sort((a, b) => b[1] - a[1]);
        sortedSources.forEach(([name, count]) => {
            const pct = totalArticles > 0 ? ((count / totalArticles) * 100).toFixed(1) : 0;
            const srcConf = RSS_SOURCES.find(s => s.name === name) || { color: 'bg-slate-500' };
            const colorClass = srcConf.color.split(' ')[0] || 'bg-slate-500';

            const row = document.createElement('div');
            row.className = 'space-y-1';
            row.innerHTML = `
                <div class="flex justify-between text-[10px] font-bold text-slate-500 dark:text-slate-400">
                    <span class="flex items-center gap-1.5 select-none">
                        <span class="w-2 h-2 rounded-full ${colorClass}"></span>
                        ${name}
                    </span>
                    <span>${count} vijesti (${pct}%)</span>
                </div>
                <div class="w-full bg-slate-100 dark:bg-slate-700/60 h-2 rounded-full overflow-hidden">
                    <div class="h-full ${colorClass} rounded-full transition-all duration-1000 ease-out" style="width: 0%"></div>
                </div>
            `;
            shareContainer.appendChild(row);
            setTimeout(() => {
                const bar = row.querySelector('.h-full');
                if (bar) bar.style.width = `${pct}%`;
            }, 50);
        });
    }

    // 5. Keyword count analytics
    const keywordCounts = {
        'Hrvatska': 0,
        'Dinamo': 0,
        'Hajduk': 0,
        'Zagreb': 0,
        'Split': 0,
        'Plenković / Vlada': 0,
        'Cijene / Euro': 0,
        'Tehnologija / AI': 0
    };

    articles.forEach(art => {
        const text = (art.title + ' ' + art.description).toLowerCase();
        if (text.includes('hrvatsk')) keywordCounts['Hrvatska']++;
        if (text.includes('dinam')) keywordCounts['Dinamo']++;
        if (text.includes('hajduk')) keywordCounts['Hajduk']++;
        if (text.includes('zagreb')) keywordCounts['Zagreb']++;
        if (text.includes('split')) keywordCounts['Split']++;
        if (text.includes('plenković') || text.includes('vlada') || text.includes('sabor')) keywordCounts['Plenković / Vlada']++;
        if (text.includes('cijen') || text.includes('euro') || text.includes('inflacij')) keywordCounts['Cijene / Euro']++;
        if (text.includes('tehnolog') || text.includes('gaming') || text.includes('umjetna inteligencija') || text.includes(' ai ')) keywordCounts['Tehnologija / AI']++;
    });

    const keywordContainer = document.getElementById('analytics-keyword-container');
    if (keywordContainer) {
        keywordContainer.innerHTML = '';
        const sortedKeywords = Object.entries(keywordCounts).sort((a, b) => b[1] - a[1]);
        const maxCount = Math.max(1, sortedKeywords[0][1]);

        sortedKeywords.forEach(([kw, count]) => {
            const pct = ((count / maxCount) * 100).toFixed(0);
            const row = document.createElement('div');
            row.className = 'space-y-1';
            row.innerHTML = `
                <div class="flex justify-between text-[10px] font-bold text-slate-500 dark:text-slate-400">
                    <span>${kw}</span>
                    <span>${count} spominjanja</span>
                </div>
                <div class="w-full bg-slate-100 dark:bg-slate-700/60 h-2 rounded-full overflow-hidden">
                    <div class="h-full bg-amber-500 rounded-full transition-all duration-1000 ease-out" style="width: 0%"></div>
                </div>
            `;
            keywordContainer.appendChild(row);
            setTimeout(() => {
                const bar = row.querySelector('.h-full');
                if (bar) bar.style.width = `${pct}%`;
            }, 50);
        });
    }
}

// Draw custom SVG Line Sparkline Chart inside analytics view
function drawVelocityChart(hourlyCounts) {
    const chartDiv = document.getElementById('analytics-velocity-chart');
    if (!chartDiv) return;
    
    const maxVal = Math.max(1, ...hourlyCounts);
    const width = 600;
    const height = 150;
    const paddingLeft = 35;
    const paddingRight = 15;
    const paddingTop = 15;
    const paddingBottom = 25;
    
    const chartWidth = width - paddingLeft - paddingRight;
    const chartHeight = height - paddingTop - paddingBottom;
    
    // Generate point coordinates
    const points = hourlyCounts.map((val, idx) => {
        const x = paddingLeft + (idx * (chartWidth / 23));
        const y = paddingTop + chartHeight - (val / maxVal) * chartHeight;
        return { x, y, val, hour: 23 - idx };
    });
    
    // Build path strings
    let linePath = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
        linePath += ` L ${points[i].x} ${points[i].y}`;
    }
    
    const bottomY = paddingTop + chartHeight;
    const areaPath = `${linePath} L ${points[points.length-1].x} ${bottomY} L ${points[0].x} ${bottomY} Z`;
    
    // Generate grid lines (horizontal Y axis markers)
    let yGrid = '';
    const numGridLines = 3;
    for (let i = 0; i <= numGridLines; i++) {
        const val = Math.round((maxVal / numGridLines) * i);
        const y = paddingTop + chartHeight - (i / numGridLines) * chartHeight;
        yGrid += `
            <line x1="${paddingLeft}" y1="${y}" x2="${width - paddingRight}" y2="${y}" stroke="currentColor" class="text-slate-100 dark:text-slate-800/80" stroke-dasharray="3,3" />
            <text x="${paddingLeft - 8}" y="${y + 3}" text-anchor="end" class="text-[9px] font-bold fill-slate-400 dark:fill-slate-500">${val}</text>
        `;
    }
    
    // Generate X axis markers (time labels every 4 hours)
    let xLabels = '';
    for (let i = 0; i < points.length; i += 4) {
        const pt = points[i];
        const label = pt.hour === 0 ? 'sada' : `${pt.hour}h prije`;
        xLabels += `
            <text x="${pt.x}" y="${height - 6}" text-anchor="middle" class="text-[8.5px] font-bold fill-slate-400 dark:fill-slate-500">${label}</text>
            <line x1="${pt.x}" y1="${paddingTop}" x2="${pt.x}" y2="${bottomY}" stroke="currentColor" class="text-slate-100 dark:text-slate-800/80" stroke-dasharray="3,3" />
        `;
    }
    
    // Generate interactive hover points
    let hoverGroup = '';
    points.forEach((pt) => {
        hoverGroup += `
            <g class="group/dot cursor-pointer">
                <circle cx="${pt.x}" cy="${pt.y}" r="4" class="fill-indigo-500 stroke-white dark:stroke-slate-900 stroke-2 hover:r-6 transition-all duration-150" />
                <title>${pt.val} objava (${pt.hour === 0 ? 'ovaj sat' : `${pt.hour} sati prije`})</title>
            </g>
        `;
    });
    
    const svgHTML = `
        <svg viewBox="0 0 ${width} ${height}" class="w-full h-full text-slate-800 dark:text-slate-200">
            <defs>
                <linearGradient id="velocityGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.25"/>
                    <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.00"/>
                </linearGradient>
            </defs>
            <!-- Grid Lines -->
            ${yGrid}
            
            <!-- Shaded Area Under Line -->
            <path d="${areaPath}" fill="url(#velocityGrad)" />
            
            <!-- X Axis line -->
            <line x1="${paddingLeft}" y1="${bottomY}" x2="${width - paddingRight}" y2="${bottomY}" stroke="currentColor" class="text-slate-200 dark:text-slate-700" />
            
            <!-- X axis text labels -->
            ${xLabels}
            
            <!-- Sparkline Path -->
            <path d="${linePath}" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            
            <!-- Hover Points -->
            ${hoverGroup}
        </svg>
    `;
    
    chartDiv.innerHTML = svgHTML;
}

// Highlight selected nav elements in the sticky header menu (Supports Clean URLs and MPA links)
function updateHeaderNavSelection() {
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const isActive = (activeCategory === 'sve' && (href === 'index.html' || href === '/' || href === '')) || 
                         (activeCategory === 'analitika' && (href === 'analitika.html' || href === 'analitika' || href === '/analitika')) ||
                         (activeCategory === 'portali' && (href === 'portali.html' || href === 'portali' || href === '/portali')) ||
                         (activeCategory === 'spremljeno' && (href === 'spremljeno.html' || href === 'spremljeno' || href === '/spremljeno')) ||
                         (href === `${activeCategory}.html` || href === activeCategory || href === `/${activeCategory}`);
        
        if (isActive) {
            if (activeCategory === 'analitika') {
                link.className = 'text-amber-400 font-black uppercase text-[14px] flex items-center gap-1 border-l border-slate-750 pl-4 select-none';
            } else if (activeCategory === 'spremljeno') {
                link.className = 'text-red-500 font-black uppercase text-[14px] flex items-center gap-1 border-l border-slate-750 pl-4 select-none';
            } else {
                link.className = 'text-[#E5472C] font-black uppercase text-[14px] select-none';
            }
        } else {
            if (href === 'analitika.html' || href === 'analitika' || href === '/analitika') {
                link.className = 'hover:text-amber-455 dark:hover:text-amber-350 transition-colors uppercase text-[14px] flex items-center gap-1 text-[#D13D1F] dark:text-amber-500 font-extrabold border-l border-slate-400 dark:border-slate-700 pl-4 select-none';
            } else if (href === 'spremljeno.html' || href === 'spremljeno' || href === '/spremljeno') {
                link.className = 'hover:text-red-500 dark:hover:text-red-400 transition-colors uppercase text-[14px] flex items-center gap-1 text-red-550 dark:text-red-450 font-extrabold border-l border-slate-400 dark:border-slate-700 pl-4 select-none';
            } else {
                link.className = 'hover:text-[#D13D1F] dark:hover:text-[#E5472C] text-slate-550 dark:text-slate-400 transition-colors uppercase text-[14px] font-extrabold select-none';
            }
        }
    });
}

// Bind router to browser hash events
window.onhashchange = handleRoute;

// Theme management
const themeBtn = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('theme-sun');
const moonIcon = document.getElementById('theme-moon');

function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        if (sunIcon) sunIcon.classList.add('hidden');
        if (moonIcon) moonIcon.classList.remove('hidden');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        if (sunIcon) sunIcon.classList.remove('hidden');
        if (moonIcon) moonIcon.classList.add('hidden');
    }
}

// Set initial theme
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    if (sunIcon) sunIcon.classList.remove('hidden');
    if (moonIcon) moonIcon.classList.add('hidden');
} else {
    document.documentElement.classList.remove('dark');
    if (sunIcon) sunIcon.classList.add('hidden');
    if (moonIcon) moonIcon.classList.remove('hidden');
}

if (themeBtn) themeBtn.onclick = toggleTheme;

// Render Custom Feeds in the settings modal list
function renderCustomFeedsList() {
    const listContainer = document.getElementById('custom-feeds-list');
    const countSpan = document.getElementById('custom-feeds-count');
    if (!listContainer) return;

    const customFeeds = JSON.parse(localStorage.getItem('custom_rss_feeds') || '[]');
    if (countSpan) countSpan.innerText = customFeeds.length;

    listContainer.innerHTML = '';
    if (customFeeds.length === 0) {
        listContainer.innerHTML = '<div class="p-3 text-center text-slate-400 dark:text-slate-505 select-none">Nema dodanih vlastitih izvora.</div>';
        return;
    }

    customFeeds.forEach(feed => {
        const item = document.createElement('div');
        item.className = 'flex items-center justify-between p-2.5';
        item.innerHTML = `
            <div class="truncate pr-2">
                <span class="font-bold text-slate-800 dark:text-slate-200">${feed.name}</span>
                <span class="text-[9.5px] bg-indigo-50 dark:bg-indigo-950/40 text-indigo-650 dark:text-indigo-400 px-1.5 py-0.5 rounded ml-1.5 font-semibold uppercase">${feed.category}</span>
                <p class="text-[10px] text-slate-405 dark:text-slate-500 truncate mt-0.5">${feed.url}</p>
            </div>
            <button class="text-red-400 hover:text-red-650 transition-colors font-bold px-2 py-1 text-sm select-none" onclick="deleteCustomFeed('${feed.id}')" title="Ukloni izvor">
                &times;
            </button>
        `;
        listContainer.appendChild(item);
    });
}

// Global action handlers mapped to window for inline onclick execution
window.deleteCustomFeed = function(id) {
    let customFeeds = JSON.parse(localStorage.getItem('custom_rss_feeds') || '[]');
    customFeeds = customFeeds.filter(f => f.id !== id);
    localStorage.setItem('custom_rss_feeds', JSON.stringify(customFeeds));
    renderCustomFeedsList();
    
    // Reset Custom Feeds inside RSS_SOURCES
    for (let i = RSS_SOURCES.length - 1; i >= 0; i--) {
        if (RSS_SOURCES[i].isCustom) {
            delete SOURCE_ROUTING[RSS_SOURCES[i].name];
            RSS_SOURCES.splice(i, 1);
        }
    }
    initCustomFeeds();
    fetchNewsFeed(true); // force cache bypass reload
};

window.addCustomFeed = function() {
    const nameInput = document.getElementById('custom-feed-name');
    const urlInput = document.getElementById('custom-feed-url');
    const catSelect = document.getElementById('custom-feed-category');

    if (!nameInput || !urlInput || !catSelect) return;

    const name = nameInput.value.trim();
    const url = urlInput.value.trim();
    const category = catSelect.value;

    if (!name || !url) {
        alert('Molimo unesite naziv i URL izvora.');
        return;
    }

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        alert('URL mora početi s http:// ili https://');
        return;
    }

    const customFeeds = JSON.parse(localStorage.getItem('custom_rss_feeds') || '[]');
    if (customFeeds.some(f => f.url.toLowerCase() === url.toLowerCase())) {
        alert('Izvor s ovim URL-om već postoji.');
        return;
    }

    const newFeed = {
        id: 'custom-' + Date.now(),
        name: name,
        url: url,
        category: category,
        color: 'bg-indigo-600 text-white',
        logoText: name.substring(0, 2).toUpperCase()
    };

    customFeeds.push(newFeed);
    localStorage.setItem('custom_rss_feeds', JSON.stringify(customFeeds));

    // Clear inputs
    nameInput.value = '';
    urlInput.value = '';

    renderCustomFeedsList();

    // Re-initialize custom feeds inside RSS_SOURCES
    for (let i = RSS_SOURCES.length - 1; i >= 0; i--) {
        if (RSS_SOURCES[i].isCustom) {
            delete SOURCE_ROUTING[RSS_SOURCES[i].name];
            RSS_SOURCES.splice(i, 1);
        }
    }
    initCustomFeeds();
    fetchNewsFeed(true); // reload feed
};

// Render Portal Settings List inside the settings modal
function renderPortalSettingsList() {
    const listContainer = document.getElementById('portal-settings-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    RSS_SOURCES.forEach(source => {
        const meta = PORTAL_METADATA[source.name] || {};
        const activeType = meta.type || (SOURCE_ROUTING[source.name]?.category ? 'tematski' : (SOURCE_ROUTING[source.name]?.subcategory ? 'lokalni' : 'nacionalni'));
        const activeRegion = meta.region || SOURCE_ROUTING[source.name]?.subcategory || '';
        const isVisible = meta.hidden !== true;

        const row = document.createElement('div');
        row.className = 'p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-800/80 space-y-2 text-xs text-slate-800 dark:text-slate-200 transition-colors';
        row.innerHTML = `
            <div class="flex items-center justify-between font-bold">
                <span class="text-slate-850 dark:text-slate-100 flex items-center gap-1.5 font-sans">
                    <span class="w-2.5 h-2.5 rounded-full ${source.color.split(' ')[0]}"></span>
                    ${source.name}
                </span>
                <label class="flex items-center gap-1 cursor-pointer select-none text-[11px] text-slate-505 dark:text-slate-400">
                    <input type="checkbox" class="portal-visible-check cursor-pointer rounded border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900" data-name="${source.name}" ${isVisible ? 'checked' : ''}>
                    <span>Vidljiv</span>
                </label>
            </div>
            <div class="grid grid-cols-2 gap-2 text-[11px]">
                <div>
                    <label class="block text-[9px] uppercase text-slate-400 dark:text-slate-500 font-bold mb-1">Tip Portala</label>
                    <select class="portal-type-select w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded px-1.5 py-1 text-slate-850 dark:text-slate-200 focus:outline-none" data-name="${source.name}">
                        <option value="nacionalni" ${activeType === 'nacionalni' ? 'selected' : ''}>Nacionalni</option>
                        <option value="lokalni" ${activeType === 'lokalni' ? 'selected' : ''}>Lokalni</option>
                        <option value="tematski" ${activeType === 'tematski' ? 'selected' : ''}>Tematski</option>
                    </select>
                </div>
                <div>
                    <label class="block text-[9px] uppercase text-slate-400 dark:text-slate-500 font-bold mb-1">Regija / Lokacija</label>
                    <select class="portal-region-select w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded px-1.5 py-1 text-slate-850 dark:text-slate-200 focus:outline-none" data-name="${source.name}" ${activeType !== 'lokalni' ? 'disabled' : ''}>
                        <option value="">-- Odaberi regiju --</option>
                        <option value="zagreb" ${activeRegion === 'zagreb' ? 'selected' : ''}>Zagreb</option>
                        <option value="dalmacija" ${activeRegion === 'dalmacija' ? 'selected' : ''}>Dalmacija</option>
                        <option value="slavonija" ${activeRegion === 'slavonija' ? 'selected' : ''}>Slavonija</option>
                        <option value="istra-i-kvarner" ${activeRegion === 'istra-i-kvarner' ? 'selected' : ''}>Istra i Kvarner</option>
                    </select>
                </div>
            </div>
        `;

        // Add dynamic enable/disable for region select based on type selection
        const typeSelect = row.querySelector('.portal-type-select');
        const regionSelect = row.querySelector('.portal-region-select');
        typeSelect.onchange = (e) => {
            if (e.target.value === 'lokalni') {
                regionSelect.disabled = false;
            } else {
                regionSelect.disabled = true;
                regionSelect.value = '';
            }
        };

        listContainer.appendChild(row);
    });
}

// Save portal configuration
function savePortalMetadata() {
    const listContainer = document.getElementById('portal-settings-list');
    if (!listContainer) return;

    const rows = listContainer.children;
    for (const row of rows) {
        const typeSelect = row.querySelector('.portal-type-select');
        if (!typeSelect) continue;
        const name = typeSelect.getAttribute('data-name');
        const regionSelect = row.querySelector('.portal-region-select');
        const visibleCheck = row.querySelector('.portal-visible-check');

        PORTAL_METADATA[name] = {
            type: typeSelect.value,
            region: regionSelect.value || null,
            hidden: !visibleCheck.checked
        };
    }

    localStorage.setItem('portal_metadata', JSON.stringify(PORTAL_METADATA));
    
    // Refresh feeds dynamically
    renderFeed();
    updateMarqueeTicker();
    
    // Hide settings modal
    const modal = document.getElementById('settings-modal');
    if (modal) modal.classList.add('hidden');
}

// Setup Events
function setupEventListeners() {
    // Global delegated bookmark click handler
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.bookmark-btn');
        if (btn) {
            e.preventDefault();
            e.stopPropagation();
            const link = btn.getAttribute('data-link');
            toggleBookmark(link);
        }
    });

    const searchInp = document.getElementById('search-input');
    if (searchInp) {
        searchInp.oninput = (e) => {
            searchQuery = e.target.value;
            currentArticlesLimit = 12;
            
            // Sync with URL query parameter dynamically without reload
            const url = new URL(window.location.href);
            if (searchQuery) {
                url.searchParams.set('q', searchQuery);
            } else {
                url.searchParams.delete('q');
            }
            window.history.replaceState({}, '', url.toString());

            renderFeed();
        };
    }

    // Archive Date Picker and Clear button
    const datePicker = document.getElementById('archive-date-picker');
    const clearDateBtn = document.getElementById('clear-date-btn');
    
    if (datePicker) {
        datePicker.onchange = (e) => {
            selectedArchiveDate = e.target.value;
            currentArticlesLimit = 12;
            if (selectedArchiveDate) {
                if (clearDateBtn) clearDateBtn.classList.remove('hidden');
            } else {
                if (clearDateBtn) clearDateBtn.classList.add('hidden');
            }
            renderFeed();
        };
    }

    if (clearDateBtn && datePicker) {
        clearDateBtn.onclick = () => {
            datePicker.value = '';
            selectedArchiveDate = '';
            currentArticlesLimit = 12;
            clearDateBtn.classList.add('hidden');
            renderFeed();
        };
    }

    const refreshBtn = document.getElementById('refresh-btn');
    if (refreshBtn) refreshBtn.onclick = () => fetchNewsFeed(true);

    const retryBtn = document.getElementById('retry-btn');
    if (retryBtn) retryBtn.onclick = () => fetchNewsFeed(true);

    // Supabase modal control
    const settingsToggle = document.getElementById('settings-toggle');
    const modal = document.getElementById('settings-modal');
    if (settingsToggle && modal) {
        settingsToggle.onclick = () => {
            const config = getSupabaseConfig();
            const urlInput = document.getElementById('sb-url');
            const keyInput = document.getElementById('sb-key');
            if (urlInput) urlInput.value = config.url;
            if (keyInput) keyInput.value = config.key;
            
            // Default to Supabase tab when opening modal
            const tabSupabase = document.getElementById('tab-btn-supabase');
            if (tabSupabase) tabSupabase.click();
            
            modal.classList.remove('hidden');
        };
    }

    const settingsClose = document.getElementById('settings-close');
    if (settingsClose && modal) {
        settingsClose.onclick = () => modal.classList.add('hidden');
    }
    if (modal) {
        modal.onclick = (e) => { if (e.target === modal) modal.classList.add('hidden'); };
    }

    const sbSave = document.getElementById('sb-save');
    if (sbSave && modal) {
        sbSave.onclick = () => {
            const urlVal = document.getElementById('sb-url')?.value.trim();
            const keyVal = document.getElementById('sb-key')?.value.trim();

            if (urlVal && keyVal) {
                localStorage.setItem('supabase_url', urlVal);
                localStorage.setItem('supabase_key', keyVal);
            } else {
                localStorage.removeItem('supabase_url');
                localStorage.removeItem('supabase_key');
            }
            modal.classList.add('hidden');
            updateSourceIndicator();
            fetchNewsFeed(true);
        };
    }

    const sbClear = document.getElementById('sb-clear');
    if (sbClear && modal) {
        sbClear.onclick = () => {
            localStorage.removeItem('supabase_url');
            localStorage.removeItem('supabase_key');
            const urlInput = document.getElementById('sb-url');
            const keyInput = document.getElementById('sb-key');
            if (urlInput) urlInput.value = '';
            if (keyInput) keyInput.value = '';
            modal.classList.add('hidden');
            updateSourceIndicator();
            fetchNewsFeed(true);
        };
    }

    // Tab switching inside settings modal
    const tabSupabase = document.getElementById('tab-btn-supabase');
    const tabCustomFeeds = document.getElementById('tab-btn-customfeeds');
    const tabPortals = document.getElementById('tab-btn-portals');
    const panelSupabase = document.getElementById('panel-supabase');
    const panelCustomFeeds = document.getElementById('panel-customfeeds');
    const panelPortals = document.getElementById('panel-portals');

    if (tabSupabase && tabCustomFeeds && tabPortals && panelSupabase && panelCustomFeeds && panelPortals) {
        tabSupabase.onclick = () => {
            tabSupabase.className = "flex-1 pb-2 border-b-2 border-[#e11d48] text-[#e11d48] dark:text-white dark:border-white uppercase tracking-wider font-bold text-center";
            tabCustomFeeds.className = "flex-1 pb-2 border-b-2 border-transparent text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold text-center";
            tabPortals.className = "flex-1 pb-2 border-b-2 border-transparent text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold text-center";
            panelSupabase.classList.remove('hidden');
            panelCustomFeeds.classList.add('hidden');
            panelPortals.classList.add('hidden');
        };
        tabCustomFeeds.onclick = () => {
            tabCustomFeeds.className = "flex-1 pb-2 border-b-2 border-[#e11d48] text-[#e11d48] dark:text-white dark:border-white uppercase tracking-wider font-bold text-center";
            tabSupabase.className = "flex-1 pb-2 border-b-2 border-transparent text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold text-center";
            tabPortals.className = "flex-1 pb-2 border-b-2 border-transparent text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold text-center";
            panelCustomFeeds.classList.remove('hidden');
            panelSupabase.classList.add('hidden');
            panelPortals.classList.add('hidden');
            renderCustomFeedsList();
        };
        tabPortals.onclick = () => {
            tabPortals.className = "flex-1 pb-2 border-b-2 border-[#e11d48] text-[#e11d48] dark:text-white dark:border-white uppercase tracking-wider font-bold text-center";
            tabSupabase.className = "flex-1 pb-2 border-b-2 border-transparent text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold text-center";
            tabCustomFeeds.className = "flex-1 pb-2 border-b-2 border-transparent text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold text-center";
            panelPortals.classList.remove('hidden');
            panelSupabase.classList.add('hidden');
            panelCustomFeeds.classList.add('hidden');
            renderPortalSettingsList();
        };
    }

    const portalsSaveBtn = document.getElementById('portals-save');
    if (portalsSaveBtn) {
        portalsSaveBtn.onclick = savePortalMetadata;
    }

    const customFeedAddBtn = document.getElementById('custom-feed-add');
    if (customFeedAddBtn) {
        customFeedAddBtn.onclick = window.addCustomFeed;
    }


}

// Admin accessibility control
function checkAdminAccess() {
    const filename = window.location.pathname.split('/').pop() || 'index.html';
    const isAdminPage = filename.includes('analitika') || activeCategory === 'analitika';
    const isLogged = sessionStorage.getItem('admin_logged_in') === 'true';
    
    if (isAdminPage && !isLogged) {
        window.location.href = 'index.html';
        return false;
    }
    
    if (isLogged) {
        showAdminElements();
    } else {
        hideAdminElements();
    }
    return true;
}

function showAdminElements() {
    document.querySelectorAll('.admin-only').forEach(el => {
        el.classList.remove('hidden');
    });
    const adminLoginBtn = document.getElementById('admin-login-btn');
    if (adminLoginBtn) adminLoginBtn.textContent = 'Odjava';
}

function hideAdminElements() {
    document.querySelectorAll('.admin-only').forEach(el => {
        el.classList.add('hidden');
    });
    const adminLoginBtn = document.getElementById('admin-login-btn');
    if (adminLoginBtn) adminLoginBtn.textContent = 'Admin';
}

// ==========================================
// WEATHER REPORT FEATURE (Open-Meteo API integration)
// ==========================================
const WMO_CODES = {
    0: { text: "Vedro", bg: "from-amber-500 to-orange-400 dark:from-amber-600 dark:to-orange-700", icon: "sun" },
    1: { text: "Pretežno vedro", bg: "from-amber-400 to-yellow-300 dark:from-amber-500/80 dark:to-yellow-500/60", icon: "sun-cloud" },
    2: { text: "Djelomično oblačno", bg: "from-slate-450 to-slate-350 dark:from-slate-700 dark:to-slate-650", icon: "cloud" },
    3: { text: "Oblačno", bg: "from-slate-500 to-slate-400 dark:from-slate-800 dark:to-slate-700", icon: "cloud" },
    45: { text: "Magla", bg: "from-zinc-500 to-zinc-400 dark:from-zinc-800 dark:to-zinc-700", icon: "fog" },
    48: { text: "Inje", bg: "from-zinc-500 to-zinc-400 dark:from-zinc-800 dark:to-zinc-700", icon: "fog" },
    51: { text: "Slabo rominjanje", bg: "from-blue-400 to-slate-400 dark:from-blue-800 dark:to-slate-700", icon: "rain-light" },
    53: { text: "Rominjanje kiše", bg: "from-blue-400 to-slate-400 dark:from-blue-800 dark:to-slate-700", icon: "rain-light" },
    55: { text: "Jako rominjanje", bg: "from-blue-400 to-slate-450 dark:from-blue-800 dark:to-slate-750", icon: "rain-light" },
    61: { text: "Slaba kiša", bg: "from-sky-500 to-blue-400 dark:from-sky-850 dark:to-blue-700", icon: "rain" },
    63: { text: "Kiša", bg: "from-sky-600 to-blue-500 dark:from-sky-900 dark:to-blue-800", icon: "rain" },
    65: { text: "Jaka kiša", bg: "from-blue-700 to-indigo-650 dark:from-blue-950 dark:to-indigo-900", icon: "rain-heavy" },
    71: { text: "Slabi snijeg", bg: "from-blue-200 to-zinc-200 dark:from-blue-900 dark:to-zinc-800", icon: "snow" },
    73: { text: "Snijeg", bg: "from-blue-300 to-zinc-300 dark:from-blue-900 dark:to-zinc-800", icon: "snow" },
    75: { text: "Jaki snijeg", bg: "from-blue-400 to-zinc-400 dark:from-blue-950 dark:to-zinc-850", icon: "snow-heavy" },
    77: { text: "Snježna zrnca", bg: "from-blue-300 to-zinc-300 dark:from-blue-900 dark:to-zinc-800", icon: "snow" },
    80: { text: "Slabi pljuskovi", bg: "from-sky-500 to-blue-400 dark:from-sky-850 dark:to-blue-700", icon: "rain" },
    81: { text: "Pljuskovi", bg: "from-sky-600 to-blue-500 dark:from-sky-900 dark:to-blue-800", icon: "rain" },
    82: { text: "Jaki pljuskovi", bg: "from-blue-700 to-indigo-650 dark:from-blue-950 dark:to-indigo-900", icon: "rain-heavy" },
    85: { text: "Slabi pljuskovi snijega", bg: "from-blue-300 to-zinc-300 dark:from-blue-900 dark:to-zinc-800", icon: "snow" },
    86: { text: "Jaki pljuskovi snijega", bg: "from-blue-400 to-zinc-400 dark:from-blue-950 dark:to-zinc-850", icon: "snow-heavy" },
    95: { text: "Grmljavina", bg: "from-purple-600 to-indigo-700 dark:from-purple-950 dark:to-indigo-900", icon: "thunderstorm" },
    96: { text: "Grmljavina s tučom", bg: "from-purple-700 to-indigo-800 dark:from-purple-950 dark:to-indigo-950", icon: "thunderstorm" },
    99: { text: "Nevrijeme s tučom", bg: "from-purple-800 to-red-950 dark:from-purple-950 dark:to-red-950", icon: "thunderstorm" }
};

const WEATHER_CITIES = [
    { name: "Zagreb", lat: 45.8144, lon: 15.9780, region: "Središnja" },
    { name: "Split", lat: 43.5081, lon: 16.4402, region: "Dalmacija" },
    { name: "Rijeka", lat: 45.3271, lon: 14.4422, region: "Kvarner" },
    { name: "Osijek", lat: 45.5550, lon: 18.6955, region: "Slavonija" },
    { name: "Zadar", lat: 44.1194, lon: 15.2314, region: "Dalmacija" },
    { name: "Pula", lat: 44.8683, lon: 13.8481, region: "Istra" },
    { name: "Karlovac", lat: 45.4929, lon: 15.5553, region: "Središnja" },
    { name: "Varaždin", lat: 46.3044, lon: 16.3378, region: "Sjeverna" },
    { name: "Šibenik", lat: 43.7350, lon: 15.8949, region: "Dalmacija" },
    { name: "Dubrovnik", lat: 42.6507, lon: 18.0944, region: "Dalmacija" }
];

let activeWeatherRegion = "Svi";
let weatherFilterQuery = "";
let fetchedWeatherData = null;

function renderWeatherPage() {
    const weatherArea = document.getElementById('weather-area');
    if (!weatherArea) return;

    // Render configuration bar and sizers if not yet initialized
    if (!weatherArea.querySelector('#weather-grid')) {
        weatherArea.innerHTML = `
            <div class="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm transition-colors space-y-4">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 class="text-base font-black tracking-tight flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-1 font-heading">
                            🌤️ Vremenska prognoza za gradove
                        </h2>
                        <p class="text-[11px] text-slate-400 dark:text-slate-500 mt-1.5">Službene i točne informacije preuzete u realnom vremenu s meteorološke stanice Open-Meteo.</p>
                    </div>
                    
                    <!-- Search City -->
                    <div class="relative w-full md:w-64 max-w-xs">
                        <input type="text" id="weather-search" placeholder="Pretraži grad..." 
                               class="w-full bg-[#f4f5f6] dark:bg-slate-800 border border-slate-250 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 text-xs rounded-lg py-2 pl-8 pr-3 focus:outline-none focus:border-[#3645a5] transition-all">
                        <div class="absolute left-2.5 top-2.5 text-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Region Filters -->
                <div class="flex flex-wrap gap-2 text-xs pt-1.5 border-t border-slate-100 dark:border-slate-800/80">
                    <button class="weather-region-btn px-3 py-1.5 rounded-full font-bold transition-all bg-[#3645a5] text-white" data-region="Svi">Sve Regije</button>
                    <button class="weather-region-btn px-3 py-1.5 rounded-full font-bold transition-all bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700" data-region="Dalmacija">Dalmacija</button>
                    <button class="weather-region-btn px-3 py-1.5 rounded-full font-bold transition-all bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700" data-region="Kvarner / Istra">Istra & Kvarner</button>
                    <button class="weather-region-btn px-3 py-1.5 rounded-full font-bold transition-all bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700" data-region="Kontinentalna">Kontinentalna</button>
                </div>
            </div>

            <!-- Weather Cards Grid -->
            <div id="weather-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div class="col-span-full py-20 text-center">
                    <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-[#3645a5] mx-auto mb-4"></div>
                    <p class="text-sm text-slate-500">Učitavanje vremenske prognoze...</p>
                </div>
            </div>
        `;

        // Attach listeners
        const searchInp = document.getElementById('weather-search');
        if (searchInp) {
            searchInp.addEventListener('input', (e) => {
                weatherFilterQuery = e.target.value.toLowerCase().trim();
                filterAndRenderWeatherCards();
            });
        }

        const regionBtns = weatherArea.querySelectorAll('.weather-region-btn');
        regionBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                regionBtns.forEach(b => {
                    b.className = "weather-region-btn px-3 py-1.5 rounded-full font-bold transition-all bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700";
                });
                e.currentTarget.className = "weather-region-btn px-3 py-1.5 rounded-full font-bold transition-all bg-[#3645a5] text-white";
                activeWeatherRegion = e.currentTarget.getAttribute('data-region');
                filterAndRenderWeatherCards();
            });
        });
    }

    if (fetchedWeatherData) {
        filterAndRenderWeatherCards();
        return;
    }

    // Load data from Open-Meteo
    const lats = WEATHER_CITIES.map(c => c.lat).join(',');
    const lons = WEATHER_CITIES.map(c => c.lon).join(',');
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lats}&longitude=${lons}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe/Berlin`;

    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error("Vremenski servis trenutno nije dostupan.");
            return res.json();
        })
        .then(data => {
            fetchedWeatherData = data;
            filterAndRenderWeatherCards();
        })
        .catch(err => {
            const grid = document.getElementById('weather-grid');
            if (grid) {
                grid.innerHTML = `
                    <div class="col-span-full py-16 text-center text-red-500">
                        <svg class="w-10 h-10 mx-auto mb-2 opacity-80" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                        </svg>
                        <h4 class="font-bold text-sm">Povezivanje s Open-Meteo nije uspjelo!</h4>
                        <p class="text-xs text-slate-500 mt-1">${err.message}</p>
                    </div>
                `;
            }
        });
}

function filterAndRenderWeatherCards() {
    const grid = document.getElementById('weather-grid');
    if (!grid || !fetchedWeatherData) return;

    grid.innerHTML = "";

    let count = 0;
    WEATHER_CITIES.forEach((city, index) => {
        // Text Search Filter
        if (weatherFilterQuery && !city.name.toLowerCase().includes(weatherFilterQuery)) {
            return;
        }

        // Region Filter
        if (activeWeatherRegion !== "Svi") {
            if (activeWeatherRegion === "Dalmacija" && city.region !== "Dalmacija") return;
            if (activeWeatherRegion === "Kvarner / Istra" && city.region !== "Kvarner" && city.region !== "Istra") return;
            if (activeWeatherRegion === "Kontinentalna" && city.region !== "Središnja" && city.region !== "Slavonija" && city.region !== "Sjeverna") return;
        }

        const cityWeather = fetchedWeatherData[index];
        if (cityWeather) {
            grid.innerHTML += createCityWeatherCard(city, cityWeather);
            count++;
        }
    });

    if (count === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-16 text-center text-slate-400 dark:text-slate-500">
                <svg class="w-8 h-8 mx-auto mb-2 opacity-40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
                </svg>
                <p class="text-xs">Nema rezultata za odabrane kriterije.</p>
            </div>
        `;
    }
}

function createCityWeatherCard(city, weather) {
    const code = weather.current_weather.weathercode;
    const info = WMO_CODES[code] || { text: "Nepoznato", bg: "from-slate-500 to-slate-400", icon: "sun" };
    const temp = Math.round(weather.current_weather.temperature);
    const wind = Math.round(weather.current_weather.windspeed);
    const dir = weather.current_weather.winddirection;

    return `
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group">
            <!-- Card Header & Temperature -->
            <div class="bg-gradient-to-tr ${info.bg} p-5 text-white relative">
                <div class="absolute right-4 top-4 opacity-15 group-hover:scale-110 transition-transform duration-300">
                    ${getWeatherIcon(info.icon)}
                </div>
                
                <div class="flex justify-between items-start">
                    <div>
                        <span class="text-[9px] uppercase tracking-wider font-extrabold bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm">${city.region} regija</span>
                        <h3 class="text-base font-black tracking-tight mt-1.5 font-heading">${city.name}</h3>
                    </div>
                    <div class="text-right">
                        <div class="text-2xl font-black tracking-tighter">${temp}°C</div>
                        <div class="text-[9px] opacity-90 mt-0.5 font-bold uppercase tracking-wider">${info.text}</div>
                    </div>
                </div>
            </div>

            <!-- Card Body / Weather Stats -->
            <div class="p-5 space-y-4">
                <div class="grid grid-cols-2 gap-2 text-xs border-b border-slate-100 dark:border-slate-800/80 pb-3">
                    <div class="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
                        <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9.75h4.875a2.625 2.625 0 0 1 0 5.25H12M8.25 9.75 10.5 7.5M8.25 9.75 10.5 12" />
                        </svg>
                        <span>Vjetar: <strong class="text-slate-700 dark:text-slate-200">${wind} km/h</strong></span>
                    </div>
                    <div class="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
                        <svg class="w-3.5 h-3.5 text-slate-400 rotate-45" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg>
                        <span>Smjer: <strong class="text-slate-700 dark:text-slate-200">${dir}°</strong></span>
                    </div>
                </div>

                <!-- 3-Day Forecast Section -->
                <div class="space-y-2.5">
                    <h4 class="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Prognoza 3 dana</h4>
                    <div class="grid grid-cols-3 gap-2">
                        ${renderThreeDayForecast(weather.daily)}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderThreeDayForecast(daily) {
    let html = "";
    const dayNames = ["Danas", "Sutra", "Prekosutra"];
    for (let i = 0; i < 3; i++) {
        if (!daily.time[i]) continue;
        const code = daily.weathercode[i];
        const info = WMO_CODES[code] || { text: "Vedro", icon: "sun" };
        const maxTemp = Math.round(daily.temperature_2m_max[i]);
        const minTemp = Math.round(daily.temperature_2m_min[i]);
        
        html += `
            <div class="bg-slate-50 dark:bg-slate-800/40 p-2 rounded-xl text-center flex flex-col justify-between items-center border border-slate-100/50 dark:border-slate-800/20">
                <span class="text-[9px] text-slate-400 dark:text-slate-500 font-bold tracking-wider">${dayNames[i]}</span>
                <div class="my-1 text-slate-500 dark:text-slate-400">
                    ${getWeatherIconMini(info.icon)}
                </div>
                <div class="text-[9px] font-black text-slate-700 dark:text-slate-200">
                    ${maxTemp}° <span class="text-slate-450 dark:text-slate-500 font-medium">${minTemp}°</span>
                </div>
            </div>
        `;
    }
    return html;
}

function getWeatherIcon(iconName) {
    const commonClass = "w-10 h-10 drop-shadow";
    switch (iconName) {
        case "sun":
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="${commonClass} text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m0 13.5V21M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M3 12h2.25m13.5 0H21M5.75 12a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0Z" />
            </svg>`;
        case "sun-cloud":
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="${commonClass} text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m0 13.5V21M4.93 4.93l1.41 1.41M3 12h2.25m13.5 0H21" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
            </svg>`;
        case "cloud":
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="${commonClass} text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
            </svg>`;
        case "fog":
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="${commonClass} text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5M3.75 12h16.5M3.75 15h16.5M6.75 18h10.5" />
            </svg>`;
        case "rain-light":
        case "rain":
        case "rain-heavy":
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="${commonClass} text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 22l2-3m2 3l2-3" />
            </svg>`;
        case "snow":
        case "snow-heavy":
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="${commonClass} text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18M3 12h18" />
            </svg>`;
        case "thunderstorm":
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="${commonClass} text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25L9.75 14.25h3.75L12 18.75" />
            </svg>`;
        default:
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="${commonClass} text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m0 13.5V21" />
            </svg>`;
    }
}

function getWeatherIconMini(iconName) {
    const commonClass = "w-5 h-5";
    switch (iconName) {
        case "sun":
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="${commonClass} text-amber-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m0 13.5V21M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M3 12h2.25m13.5 0H21M5.75 12a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0Z" />
            </svg>`;
        case "sun-cloud":
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="${commonClass} text-amber-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m0 13.5V21" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
            </svg>`;
        case "cloud":
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="${commonClass} text-slate-400 dark:text-slate-350">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
            </svg>`;
        case "fog":
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="${commonClass} text-zinc-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5M3.75 12h16.5" />
            </svg>`;
        case "rain-light":
        case "rain":
        case "rain-heavy":
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="${commonClass} text-sky-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 22l2-3m2 3l2-3" />
            </svg>`;
        case "snow":
        case "snow-heavy":
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="${commonClass} text-sky-200">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18" />
            </svg>`;
        case "thunderstorm":
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="${commonClass} text-yellow-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25L9.75 14.25h3.75L12 18.75" />
            </svg>`;
        default:
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="${commonClass} text-slate-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25" />
            </svg>`;
    }
}


// Initialize search query from URL params at startup
function initSearchQueryFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const q = urlParams.get('q');
    if (q) {
        searchQuery = q.trim();
        const searchInp = document.getElementById('search-input');
        if (searchInp) searchInp.value = searchQuery;
    }
}

// Initialize on page load
initSearchQueryFromURL();
setupEventListeners();
if (checkAdminAccess()) {
    handleRoute(); // Render target page layout immediately
    fetchNewsFeed();
}
