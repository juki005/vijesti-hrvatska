import os
import re
import json

PUBLIC_HOLIDAYS_ALL = {
    2025: [
        {"name": "Nova Godina", "date": "2025-01-01", "day": "Srijeda"},
        {"name": "Bogojavljenje / Sveta tri kralja", "date": "2025-01-06", "day": "Ponedjeljak"},
        {"name": "Uskrs", "date": "2025-04-20", "day": "Nedjelja"},
        {"name": "Uskrsni ponedjeljak", "date": "2025-04-21", "day": "Ponedjeljak"},
        {"name": "Praznik rada", "date": "2025-05-01", "day": "Četvrtak"},
        {"name": "Dan državnosti", "date": "2025-05-30", "day": "Petak"},
        {"name": "Tijelovo", "date": "2025-06-19", "day": "Četvrtak"},
        {"name": "Dan antifašističke borbe", "date": "2025-06-22", "day": "Nedjelja"},
        {"name": "Dan pobjede i domovinske zahvalnosti", "date": "2025-08-05", "day": "Utorak"},
        {"name": "Velika Gospa", "date": "2025-08-15", "day": "Petak"},
        {"name": "Svi sveti", "date": "2025-11-01", "day": "Subota"},
        {"name": "Dan sjećanja na žrtve Domovinskog rata", "date": "2025-11-18", "day": "Utorak"},
        {"name": "Božić", "date": "2025-12-25", "day": "Četvrtak"},
        {"name": "Sveti Stjepan", "date": "2025-12-26", "day": "Petak"}
    ],
    2026: [
        {"name": "Nova Godina", "date": "2026-01-01", "day": "Četvrtak"},
        {"name": "Bogojavljenje / Sveta tri kralja", "date": "2026-01-06", "day": "Utorak"},
        {"name": "Uskrs", "date": "2026-04-05", "day": "Nedjelja"},
        {"name": "Uskrsni ponedjeljak", "date": "2026-04-06", "day": "Ponedjeljak"},
        {"name": "Praznik rada", "date": "2026-05-01", "day": "Petak"},
        {"name": "Dan državnosti", "date": "2026-05-30", "day": "Subota"},
        {"name": "Tijelovo", "date": "2026-06-04", "day": "Četvrtak"},
        {"name": "Dan antifašističke borbe", "date": "2026-06-22", "day": "Ponedjeljak"},
        {"name": "Dan pobjede i domovinske zahvalnosti", "date": "2026-08-05", "day": "Srijeda"},
        {"name": "Velika Gospa", "date": "2026-08-15", "day": "Subota"},
        {"name": "Svi sveti", "date": "2026-11-01", "day": "Nedjelja"},
        {"name": "Dan sjećanja na žrtve Domovinskog rata", "date": "2026-11-18", "day": "Srijeda"},
        {"name": "Božić", "date": "2026-12-25", "day": "Petak"},
        {"name": "Sveti Stjepan", "date": "2026-12-26", "day": "Subota"}
    ],
    2027: [
        {"name": "Nova Godina", "date": "2027-01-01", "day": "Petak"},
        {"name": "Bogojavljenje / Sveta tri kralja", "date": "2027-01-06", "day": "Srijeda"},
        {"name": "Uskrs", "date": "2027-03-28", "day": "Nedjelja"},
        {"name": "Uskrsni ponedjeljak", "date": "2027-03-29", "day": "Ponedjeljak"},
        {"name": "Praznik rada", "date": "2027-05-01", "day": "Subota"},
        {"name": "Dan državnosti", "date": "2027-05-30", "day": "Nedjelja"},
        {"name": "Tijelovo", "date": "2027-05-27", "day": "Četvrtak"},
        {"name": "Dan antifašističke borbe", "date": "2027-06-22", "day": "Utorak"},
        {"name": "Dan pobjede i domovinske zahvalnosti", "date": "2027-08-05", "day": "Četvrtak"},
        {"name": "Velika Gospa", "date": "2027-08-15", "day": "Nedjelja"},
        {"name": "Svi sveti", "date": "2027-11-01", "day": "Ponedjeljak"},
        {"name": "Dan sjećanja na žrtve Domovinskog rata", "date": "2027-11-18", "day": "Četvrtak"},
        {"name": "Božić", "date": "2027-12-25", "day": "Subota"},
        {"name": "Sveti Stjepan", "date": "2027-12-26", "day": "Nedjelja"}
    ]
}

def render_month_html(year, month_idx):
    month_names = ['Siječanj', 'Veljača', 'Ožujak', 'Travanj', 'Svibanj', 'Lipanj', 'Srpanj', 'Kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac']
    month_name = month_names[month_idx]
    
    import calendar
    cal = calendar.Calendar(firstweekday=0) # 0 is Monday
    month_days = cal.monthdayscalendar(year, month_idx + 1)
    
    holidays = PUBLIC_HOLIDAYS_ALL.get(year, [])
    
    days_html = ""
    for week in month_days:
        for day in week:
            if day == 0:
                days_html += '<div class="h-7 w-7"></div>'
            else:
                date_str = f"{year}-{month_idx+1:02d}-{day:02d}"
                holiday = next((h for h in holidays if h["date"] == date_str), None)
                
                weekday = calendar.weekday(year, month_idx + 1, day)
                is_weekend = weekday in (5, 6)
                
                if holiday:
                    days_html += f'''
                        <div class="h-7 w-7 rounded bg-rose-600 text-white font-extrabold text-[10px] flex items-center justify-center shadow-sm cursor-pointer relative group" title="{holiday['name']}">
                            {day}
                            <div class="absolute bottom-full mb-1 hidden group-hover:block bg-slate-950 text-white text-[10px] p-2 rounded shadow-2xl whitespace-nowrap z-50 font-sans border border-slate-700">
                                🎉 {holiday['name']}
                            </div>
                        </div>
                    '''
                elif is_weekend:
                    days_html += f'''
                        <div class="h-7 w-7 rounded bg-amber-500/20 text-amber-600 dark:text-amber-400 font-bold text-[10px] flex items-center justify-center">
                            {day}
                        </div>
                    '''
                else:
                    days_html += f'''
                        <div class="h-7 w-7 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-medium flex items-center justify-center">
                            {day}
                        </div>
                    '''
                    
    return f'''
        <div class="bg-slate-50 dark:bg-slate-850 p-3 border border-slate-200 dark:border-slate-800 rounded-xl space-y-2">
            <h4 class="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider text-center border-b border-slate-200 dark:border-slate-800 pb-1.5 font-heading">
                {month_name} {year}
            </h4>
            <div class="grid grid-cols-7 gap-1 text-center text-[9px] font-bold text-slate-400 uppercase select-none">
                <span>P</span><span>U</span><span>S</span><span>Č</span><span>P</span><span class="text-amber-500">S</span><span class="text-amber-500">N</span>
            </div>
            <div class="grid grid-cols-7 gap-1 justify-items-center select-none">
                {days_html}
            </div>
        </div>
    '''

def get_next_holiday_info(year):
    from datetime import datetime
    today = datetime.now()
    today_str = today.strftime("%Y-%m-%d")
    
    holidays = PUBLIC_HOLIDAYS_ALL.get(year, PUBLIC_HOLIDAYS_ALL[2026])
    upcoming = next((h for h in holidays if h["date"] >= today_str), None)
    
    if not upcoming and holidays:
        upcoming = holidays[0]
        
    if not upcoming:
        return ""
        
    h_date = datetime.strptime(upcoming["date"], "%Y-%m-%d")
    diff_days = (h_date - today).days + 1
    
    days_badge = "DANAS!" if diff_days <= 0 else f"za {diff_days} d."
    fmt_date = f"{h_date.day:02d}.{h_date.month:02d}.{h_date.year}."
    
    return f'''
        <div class="mt-3 p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl flex flex-wrap items-center gap-2 text-xs select-none">
            <span class="bg-rose-600 text-white font-extrabold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider shadow-sm">
                Nadolazeći Blagdan / Praznik
            </span>
            <span class="font-extrabold text-slate-900 dark:text-white flex items-center gap-1">
                🎉 {upcoming['name']} ({fmt_date})
            </span>
            <span class="bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-extrabold text-[10px] px-2 py-0.5 rounded uppercase">
                {days_badge} ({upcoming['day']})
            </span>
        </div>
    '''

def render_single_year_view(year, is_hidden=False):
    months_html = "".join([render_month_html(year, m) for m in range(12)])
    holidays = PUBLIC_HOLIDAYS_ALL.get(year, [])
    
    table_rows = ""
    for h in holidays:
        y, m, d = h["date"].split('-')
        fmt = f"{d}.{m}.{y}."
        is_wk = h["day"] in ["Subota", "Nedjelja"]
        wk_cls = "text-amber-500 font-bold" if is_wk else "text-slate-600 dark:text-slate-400"
        table_rows += f'''
            <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                <td class="p-3 font-mono font-bold text-slate-900 dark:text-white">{fmt}</td>
                <td class="p-3 {wk_cls}">{h['day']}</td>
                <td class="p-3 font-bold text-slate-800 dark:text-slate-200">{h['name']}</td>
                <td class="p-3 text-right">
                    <span class="bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold px-2 py-0.5 rounded text-[10px] uppercase">
                        Neradni dan
                    </span>
                </td>
            </tr>
        '''

    next_holiday_badge = get_next_holiday_info(year)
    hidden_cls = " hidden" if is_hidden else ""
    return f'''
        <div id="kalendar-year-{year}" class="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm space-y-6 transition-colors{hidden_cls}">
            <div class="border-b border-slate-200 dark:border-slate-800 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 class="text-xl font-black tracking-tight flex items-center gap-2 text-slate-900 dark:text-white">
                        📅 Kalendar Blagdana i Neradnih Dana u RH ({year})
                    </h2>
                    <p class="text-xs text-slate-450 dark:text-slate-400 mt-1">Interaktivni vizualni kalendar s istaknutim neradnim danima, blagdanima i produženim vikendima.</p>
                    {next_holiday_badge}
                </div>
                
                <div class="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg shrink-0">
                    <button type="button" onclick="switchYearTab(2026)" id="tab-btn-2026-{year}" class="px-3 py-1 text-xs font-bold rounded-md transition-all {'bg-editorial-navy text-white shadow-sm' if year == 2026 else 'text-slate-600 dark:text-slate-400 hover:text-white'}">
                        2026. (Tekuća)
                    </button>
                    <button type="button" onclick="switchYearTab(2027)" id="tab-btn-2027-{year}" class="px-3 py-1 text-xs font-bold rounded-md transition-all {'bg-editorial-navy text-white shadow-sm' if year == 2027 else 'text-slate-600 dark:text-slate-400 hover:text-white'}">
                        2027. (Naredna)
                    </button>
                    <button type="button" onclick="switchYearTab(2025)" id="tab-btn-2025-{year}" class="px-3 py-1 text-xs font-bold rounded-md transition-all {'bg-editorial-navy text-white shadow-sm' if year == 2025 else 'text-slate-600 dark:text-slate-400 hover:text-white'}">
                        2025. (Prošla)
                    </button>
                </div>
            </div>

            <div class="flex items-center gap-4 text-xs font-bold select-none border-b border-slate-100 dark:border-slate-800 pb-3">
                <span class="text-slate-500 uppercase tracking-wider text-[10px]">Legenda:</span>
                <div class="flex items-center gap-1.5">
                    <span class="w-3.5 h-3.5 rounded bg-rose-600 inline-block"></span>
                    <span class="text-slate-700 dark:text-slate-300">Državni Blagdan / Neradni Dan</span>
                </div>
                <div class="flex items-center gap-1.5">
                    <span class="w-3.5 h-3.5 rounded bg-amber-500/20 text-amber-500 border border-amber-500/30 inline-block"></span>
                    <span class="text-slate-700 dark:text-slate-300">Vikend (Subota / Nedjelja)</span>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {months_html}
            </div>

            <div class="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Popis svih državnih blagdana u {year}. godini</h3>
                <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl">
                    <table class="w-full text-left text-xs">
                        <thead class="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-extrabold uppercase tracking-wider border-b border-slate-200 dark:border-slate-800">
                            <tr>
                                <th class="p-3">Datum</th>
                                <th class="p-3">Dan u Tjednu</th>
                                <th class="p-3">Naziv Blagdana / Praznika</th>
                                <th class="p-3 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-medium">
                            {table_rows}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    '''

def get_kalendar_html():
    view_2026 = render_single_year_view(2026, is_hidden=False)
    view_2027 = render_single_year_view(2027, is_hidden=True)
    view_2025 = render_single_year_view(2025, is_hidden=True)

    return f'''
        <div class="space-y-6">
            {view_2026}
            {view_2027}
            {view_2025}
        </div>
        <script>
            function switchYearTab(year) {{
                [2025, 2026, 2027].forEach(function(y) {{
                    var box = document.getElementById('kalendar-year-' + y);
                    if (box) {{
                        if (y === year) {{
                            box.classList.remove('hidden');
                        }} else {{
                            box.classList.add('hidden');
                        }}
                    }}
                }});
                if (typeof window.renderHolidaysPage === 'function') {{
                    window.renderHolidaysPage(year);
                }}
            }}
            window.switchYearTab = switchYearTab;
        </script>
    '''

STORE_LOCATORS_DATA = [
    # Supermarketi
    {"name": "Lidl", "category": "supermarketi", "catName": "Supermarketi", "domain": "lidl.hr", "desc": "Službena karta radnih nedjelja za sve Lidl filijale u RH", "url": "https://www.lidl.hr/radno-vrijeme"},
    {"name": "Konzum", "category": "supermarketi", "catName": "Supermarketi", "domain": "konzum.hr", "desc": "Konzum interaktivna tražilica radnih nedjelja i radnih vremena", "url": "https://www.konzum.hr/trgovine"},
    {"name": "Kaufland", "category": "supermarketi", "catName": "Supermarketi", "domain": "kaufland.hr", "desc": "Kaufland lokator radnih trgovina i radnih nedjelja u RH", "url": "https://www.kaufland.hr/poslovnice.html"},
    {"name": "SPAR / INTERSPAR", "category": "supermarketi", "catName": "Supermarketi", "domain": "spar.hr", "desc": "Spar raspored otvorenih trgovina po gradovima i nedjeljama", "url": "https://www.spar.hr/lokacije"},
    {"name": "Plodine", "category": "supermarketi", "catName": "Supermarketi", "domain": "plodine.hr", "desc": "Plodine tjedni raspored radnih nedjelja po supermarketima", "url": "https://www.plodine.hr/supermarketi"},
    {"name": "Eurospin", "category": "supermarketi", "catName": "Supermarketi", "domain": "eurospin.hr", "desc": "Eurospin popis radnih nedjelja po poslovnicama", "url": "https://www.eurospin.hr/trgovine/"},
    {"name": "Tommy", "category": "supermarketi", "catName": "Supermarketi", "domain": "tommy.hr", "desc": "Tommy prodajna mjesta i radne nedjelje u Dalmaciji i RH", "url": "https://www.tommy.hr/prodajna-mjesta"},
    {"name": "Studenac", "category": "supermarketi", "catName": "Supermarketi", "domain": "studenac.hr", "desc": "Studenac tražilica susjedskih trgovina otvorenih nedjeljom", "url": "https://www.studenac.hr/pretrazi-trgovine"},
    {"name": "KTC", "category": "supermarketi", "catName": "Supermarketi", "domain": "ktc.hr", "desc": "KTC robni centri i poljocentri - raspored radnih vremena", "url": "https://www.ktc.hr/lokacije/"},
    {"name": "NTL", "category": "supermarketi", "catName": "Supermarketi", "domain": "ntl.hr", "desc": "Narodni Trgovački Lanac - lokator poslovnica i radnih nedjelja", "url": "https://ntl.hr/trgovine/"},
    {"name": "Ribola", "category": "supermarketi", "catName": "Supermarketi", "domain": "ribola.hr", "desc": "Ribola supermarketi - popis otvorenih poslovnica nedjeljom", "url": "https://www.ribola.hr/trgovine/"},

    # Drogerije
    {"name": "dm-drogerie markt", "category": "drogerije", "catName": "Drogerije", "domain": "dm.hr", "desc": "dm lokator prodavaonica i radne nedjelje u vašoj blizini", "url": "https://www.dm.hr/store-finder"},
    {"name": "Müller", "category": "drogerije", "catName": "Drogerije", "domain": "mueller.hr", "desc": "Müller tražilica poslovnica i radno vrijeme nedjeljom", "url": "https://www.mueller.hr/poslovnice/"},
    {"name": "BIPA", "category": "drogerije", "catName": "Drogerije", "domain": "bipa.hr", "desc": "BIPA popis otvorenih drogerija i radnih nedjelja", "url": "https://www.bipa.hr/poslovnice"},
    {"name": "Douglas", "category": "drogerije", "catName": "Drogerije", "domain": "douglas.hr", "desc": "Douglas parfumerije i radno vrijeme prodajnih mjesta", "url": "https://www.douglas.hr/nase-trgovine"},

    # Dom, Alat & Tehnika
    {"name": "Pevex", "category": "dom", "catName": "Dom & Alat", "domain": "pevex.hr", "desc": "Pevex prodajni centri - alati, građevina i kućanski aparati nedjeljom", "url": "https://pevex.hr/prodajni-centri"},
    {"name": "Bauhaus", "category": "dom", "catName": "Dom & Alat", "domain": "bauhaus.hr", "desc": "Bauhaus prodajni centri - radionica, alat i vrt nedjeljom", "url": "https://www.bauhaus.hr/prodajni-centri"},
    {"name": "Lesnina XXXL", "category": "dom", "catName": "Dom & Alat", "domain": "xxxlesnina.hr", "desc": "Lesnina XXXL centri namještaja i opreme za dom nedjeljom", "url": "https://www.xxxlesnina.hr/poslovnice"},
    {"name": "Emmezeta", "category": "dom", "catName": "Dom & Alat", "domain": "emmezeta.hr", "desc": "Emmezeta centri namještaja, tehnike i dekoracija nedjeljom", "url": "https://www.emmezeta.hr/trgovine"},
    {"name": "IKEA Zagreb", "category": "dom", "catName": "Dom & Alat", "domain": "ikea.com", "desc": "IKEA robna kuća Zagreb - kalendar radnih nedjelja i dostavnih centara", "url": "https://www.ikea.com/hr/hr/stores/zagreb/"},
    {"name": "JYSK", "category": "dom", "catName": "Dom & Alat", "domain": "jysk.hr", "desc": "JYSK trgovine namještaja i opreme za spavanje nedjeljom", "url": "https://jysk.hr/trgovine"},
    {"name": "Big Bang (ex Sancta Domenica)", "category": "dom", "catName": "Dom & Alat", "domain": "bigbang.hr", "desc": "Big Bang HR (ex Sancta Domenica) - tehnika i radno vrijeme trgovina", "url": "https://www.bigbang.hr/"},
    {"name": "Links", "category": "dom", "catName": "Dom & Alat", "domain": "links.hr", "desc": "Links IT komponente, alati, računala i radno vrijeme poslovnica", "url": "https://www.links.hr/hr/poslovnice"},

    # Shopping Centri
    {"name": "City Center one (West & East)", "category": "centri", "catName": "Shopping Centri", "domain": "citycenterone.hr", "desc": "City Center one Zagreb i Split raspored radnih nedjelja", "url": "https://citycenterone.hr/radne-nedjelje/"},
    {"name": "Arena Centar Zagreb", "category": "centri", "catName": "Shopping Centri", "domain": "arenacentar.hr", "desc": "Arena Centar Zagreb radne nedjelje i radno vrijeme trgovina", "url": "https://www.arenacentar.hr/hr/radno-vrijeme/"},
    {"name": "Avenue Mall Zagreb", "category": "centri", "catName": "Shopping Centri", "domain": "avenuemall.hr", "desc": "Avenue Mall Novi Zagreb - raspored radnih nedjelja", "url": "https://avenuemall.hr/radno-vrijeme"},
    {"name": "Z Centar Zagreb", "category": "centri", "catName": "Shopping Centri", "domain": "zcentar.hr", "desc": "Z Centar Špansko - popis otvorenih nedjelja i restorana", "url": "https://zcentar.hr/radno-vrijeme/"},
    {"name": "Point Shopping Center", "category": "centri", "catName": "Shopping Centri", "domain": "pointshoppingcenter.hr", "desc": "Point Vrbani Zagreb radne nedjelje i sadržaji", "url": "https://pointshoppingcenter.hr/radne-nedjelje/"},
    {"name": "Supernova Centri", "category": "centri", "catName": "Shopping Centri", "domain": "supernova-buzin.hr", "desc": "Supernova shopping parkovi (Buzin, Zadar, Varaždin, Karlovac) nedjeljom", "url": "https://www.supernova-buzin.hr/radne-nedjelje/"},
    {"name": "Mall of Split", "category": "centri", "catName": "Shopping Centri", "domain": "mallofsplit.hr", "desc": "Mall of Split - raspored radnih nedjelja najvećeg centra u Dalmaciji", "url": "https://mallofsplit.hr/radno-vrijeme/"},
    {"name": "Joker Split", "category": "centri", "catName": "Shopping Centri", "domain": "joker.hr", "desc": "Joker Centar Split radne nedjelje i radno vrijeme", "url": "https://joker.hr/radno-vrijeme/"},
    {"name": "Tower Center Rijeka", "category": "centri", "catName": "Shopping Centri", "domain": "tower-center-rijeka.hr", "desc": "Tower Center Rijeka radne nedjelje i popis otvorenih trgovina", "url": "https://www.tower-center-rijeka.hr/radne-nedjelje"},
    {"name": "Portanova Osijek", "category": "centri", "catName": "Shopping Centri", "domain": "portanova.hr", "desc": "Portanova Osijek kalendar radnih nedjelja u Slavoniji", "url": "https://portanova.hr/radno-vrijeme/"}
]

def get_nedjelja_html():
    rows = ""
    for s in STORE_LOCATORS_DATA:
        favicon = f"https://www.google.com/s2/favicons?domain={s['domain']}&sz=64"
        rows += f'''
            <tr class="store-row hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors" data-category="{s['category']}" data-search="{s['name'].lower()} {s['catName'].lower()} {s['desc'].lower()}">
                <td class="p-3 font-extrabold flex items-center gap-3">
                    <img src="{favicon}" alt="{s['name']}" class="w-6 h-6 rounded-md object-contain shrink-0 bg-white p-0.5 border border-slate-200 dark:border-slate-700">
                    <span class="text-slate-900 dark:text-white font-extrabold">{s['name']}</span>
                </td>
                <td class="p-3 text-slate-400 font-medium">{s['catName']}</td>
                <td class="p-3 text-slate-600 dark:text-slate-400">{s['desc']}</td>
                <td class="p-3 text-right">
                    <a href="{s['url']}" target="_blank" rel="noopener" class="bg-editorial-navy hover:bg-slate-800 text-white font-bold px-3.5 py-1.5 rounded-lg text-xs transition-all inline-block shadow-sm">Posjeti →</a>
                </td>
            </tr>
        '''
        
    return f'''
        <div class="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm space-y-6 transition-colors">
            <div class="border-b border-slate-200 dark:border-slate-800 pb-4">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div>
                        <h2 class="text-xl font-black tracking-tight flex items-center gap-2 text-slate-900 dark:text-white">
                            🛒 Radne Nedjelje Trgovina, Drogerija, Alata i Centara u RH
                        </h2>
                        <p class="text-xs text-slate-450 dark:text-slate-400 mt-1">Provjerite koje trgovine, drogerije i shopping centri rade ove nedjelje u vašem gradu prema službenim lokatorima.</p>
                    </div>
                    <span class="bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shrink-0">
                        16 Nedjelja Godišnje
                    </span>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="https://kosarica.app/" target="_blank" rel="noopener" class="group p-4 bg-gradient-to-br from-amber-500/10 to-amber-600/5 dark:from-amber-950/30 dark:to-slate-900 border border-amber-500/30 dark:border-amber-500/20 rounded-xl hover:border-amber-500 transition-all flex items-center gap-4">
                    <div class="w-12 h-12 rounded-xl bg-amber-500 text-white font-black text-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                        🛒
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h3 class="font-extrabold text-sm text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">Košarica.app</h3>
                            <span class="bg-emerald-500 text-white text-[9px] font-bold px-1.5 py-0.2 rounded uppercase">Preporuka</span>
                        </div>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Najbrži interaktivni tražilac radnih nedjelja po gradovima i kvartovima u RH.</p>
                    </div>
                </a>

                <a href="https://nedjelja.com/" target="_blank" rel="noopener" class="group p-4 bg-gradient-to-br from-blue-500/10 to-indigo-600/5 dark:from-indigo-950/30 dark:to-slate-900 border border-blue-500/30 dark:border-blue-500/20 rounded-xl hover:border-blue-500 transition-all flex items-center gap-4">
                    <div class="w-12 h-12 rounded-xl bg-blue-600 text-white font-black text-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                        📍
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h3 class="font-extrabold text-sm text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">Nedjelja.com</h3>
                            <span class="bg-blue-500 text-white text-[9px] font-bold px-1.5 py-0.2 rounded uppercase">Vodič</span>
                        </div>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Pregledan popis svih trgovačkih lanaca i centara otvorenih ove nedjelje.</p>
                    </div>
                </a>
            </div>

            <!-- Retail Store Locators Filter Bar & Table -->
            <div class="space-y-4 pt-2">
                <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                    <!-- Category Tabs -->
                    <div class="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 select-none no-scrollbar">
                        <button type="button" onclick="filterStoreCategory('all')" id="store-cat-all" class="store-cat-btn px-3 py-1.5 text-xs font-bold rounded-lg transition-all bg-editorial-navy text-white shadow-sm shrink-0">
                            Sve (33)
                        </button>
                        <button type="button" onclick="filterStoreCategory('supermarketi')" id="store-cat-supermarketi" class="store-cat-btn px-3 py-1.5 text-xs font-bold rounded-lg transition-all text-slate-600 dark:text-slate-400 hover:text-white hover:bg-slate-800 shrink-0">
                            🛒 Supermarketi (11)
                        </button>
                        <button type="button" onclick="filterStoreCategory('drogerije')" id="store-cat-drogerije" class="store-cat-btn px-3 py-1.5 text-xs font-bold rounded-lg transition-all text-slate-600 dark:text-slate-400 hover:text-white hover:bg-slate-800 shrink-0">
                            💄 Drogerije (4)
                        </button>
                        <button type="button" onclick="filterStoreCategory('centri')" id="store-cat-centri" class="store-cat-btn px-3 py-1.5 text-xs font-bold rounded-lg transition-all text-slate-600 dark:text-slate-400 hover:text-white hover:bg-slate-800 shrink-0">
                            🏬 Shopping Centri (10)
                        </button>
                        <button type="button" onclick="filterStoreCategory('dom')" id="store-cat-dom" class="store-cat-btn px-3 py-1.5 text-xs font-bold rounded-lg transition-all text-slate-600 dark:text-slate-400 hover:text-white hover:bg-slate-800 shrink-0">
                            🔨 Dom & Alat (8)
                        </button>
                    </div>

                    <!-- Search Input -->
                    <div class="relative shrink-0 sm:w-64">
                        <input type="text" id="store-search-input" onkeyup="searchStoreLocators()" placeholder="🔍 Pretraži trgovinu, centar..." class="w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-editorial-navy font-medium">
                    </div>
                </div>

                <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl">
                    <table class="w-full text-left text-xs">
                        <thead class="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-extrabold uppercase tracking-wider border-b border-slate-200 dark:border-slate-800">
                            <tr>
                                <th class="p-3">Trgovina / Lanac</th>
                                <th class="p-3">Kategorija</th>
                                <th class="p-3">Službeni Lokator Radnih Nedjelja</th>
                                <th class="p-3 text-right">Akcija</th>
                            </tr>
                        </thead>
                        <tbody id="store-table-body" class="divide-y divide-slate-200 dark:divide-slate-800 font-medium">
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <script>
            function filterStoreCategory(cat) {{
                var rows = document.querySelectorAll('.store-row');
                var btns = document.querySelectorAll('.store-cat-btn');
                btns.forEach(function(b) {{
                    b.classList.remove('bg-editorial-navy', 'text-white', 'shadow-sm');
                    b.classList.add('text-slate-600', 'dark:text-slate-400');
                }});
                var activeBtn = document.getElementById('store-cat-' + cat);
                if (activeBtn) {{
                    activeBtn.classList.add('bg-editorial-navy', 'text-white', 'shadow-sm');
                    activeBtn.classList.remove('text-slate-600', 'dark:text-slate-400');
                }}
                rows.forEach(function(r) {{
                    if (cat === 'all' || r.getAttribute('data-category') === cat) {{
                        r.style.display = '';
                    }} else {{
                        r.style.display = 'none';
                    }}
                }});
            }}

            function searchStoreLocators() {{
                var input = document.getElementById('store-search-input');
                if (!input) return;
                var q = input.value.toLowerCase().trim();
                var rows = document.querySelectorAll('.store-row');
                rows.forEach(function(r) {{
                    var text = r.getAttribute('data-search') || '';
                    if (text.indexOf(q) !== -1) {{
                        r.style.display = '';
                    }} else {{
                        r.style.display = 'none';
                    }}
                }});
            }}
        </script>
    '''

def get_katalozi_html():
    return '''
        <div class="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm space-y-6 transition-colors">
            <div class="border-b border-slate-200 dark:border-slate-800 pb-4">
                <h2 class="text-xl font-black tracking-tight flex items-center gap-2 text-slate-900 dark:text-white">
                    🛍️ Katalozi i Akcije Trgovina u Hrvatskoj
                </h2>
                <p class="text-xs text-slate-450 dark:text-slate-400 mt-1">Svi najnoviji tjedni letci, katalozi popusta i popisi akcija trgovačkih lanaca u RH na jednom mjestu.</p>
            </div>

            <div class="space-y-3">
                <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Vodeći Agregatori Kataloga i Popusta</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <a href="https://katalozi.net/" target="_blank" rel="noopener" class="p-4 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-750 rounded-xl hover:border-editorial-gold transition-all group">
                        <div class="flex items-center gap-3">
                            <span class="text-2xl">📑</span>
                            <div>
                                <h4 class="font-extrabold text-sm text-slate-900 dark:text-white group-hover:text-editorial-gold transition-colors">Katalozi.net</h4>
                                <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Svi aktualni katalozi</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://www.nabava.net/katalozi" target="_blank" rel="noopener" class="p-4 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-750 rounded-xl hover:border-editorial-gold transition-all group">
                        <div class="flex items-center gap-3">
                            <span class="text-2xl">🔍</span>
                            <div>
                                <h4 class="font-extrabold text-sm text-slate-900 dark:text-white group-hover:text-editorial-gold transition-colors">Nabava.net</h4>
                                <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Katalozi i usporedba cijena</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://katalozi.jeftinije.hr/" target="_blank" rel="noopener" class="p-4 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-750 rounded-xl hover:border-editorial-gold transition-all group">
                        <div class="flex items-center gap-3">
                            <span class="text-2xl">🏷️</span>
                            <div>
                                <h4 class="font-extrabold text-sm text-slate-900 dark:text-white group-hover:text-editorial-gold transition-colors">Jeftinije.hr</h4>
                                <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Letci i akcije trgovina</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://svi-katalozi.net/" target="_blank" rel="noopener" class="p-4 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-750 rounded-xl hover:border-editorial-gold transition-all group">
                        <div class="flex items-center gap-3">
                            <span class="text-2xl">📦</span>
                            <div>
                                <h4 class="font-extrabold text-sm text-slate-900 dark:text-white group-hover:text-editorial-gold transition-colors">Svi-katalozi.net</h4>
                                <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Kataloška ponuda u RH</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="space-y-3 pt-2">
                <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Službene stranice vodećih trgovačkih lanaca</h3>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    <a href="https://www.lidl.hr" target="_blank" rel="noopener" class="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-lg hover:border-amber-500 transition-all flex items-center gap-3">
                        <img src="https://www.google.com/s2/favicons?domain=lidl.hr&sz=64" alt="Lidl" class="w-6 h-6 rounded shrink-0">
                        <div>
                            <h4 class="font-bold text-xs text-slate-900 dark:text-white">Lidl</h4>
                            <span class="text-[10px] text-slate-400">lidl.hr</span>
                        </div>
                    </a>
                    <a href="https://www.konzum.hr" target="_blank" rel="noopener" class="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-lg hover:border-amber-500 transition-all flex items-center gap-3">
                        <img src="https://www.google.com/s2/favicons?domain=konzum.hr&sz=64" alt="Konzum" class="w-6 h-6 rounded shrink-0">
                        <div>
                            <h4 class="font-bold text-xs text-slate-900 dark:text-white">Konzum</h4>
                            <span class="text-[10px] text-slate-400">konzum.hr</span>
                        </div>
                    </a>
                    <a href="https://www.kaufland.hr" target="_blank" rel="noopener" class="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-lg hover:border-amber-500 transition-all flex items-center gap-3">
                        <img src="https://www.google.com/s2/favicons?domain=kaufland.hr&sz=64" alt="Kaufland" class="w-6 h-6 rounded shrink-0">
                        <div>
                            <h4 class="font-bold text-xs text-slate-900 dark:text-white">Kaufland</h4>
                            <span class="text-[10px] text-slate-400">kaufland.hr</span>
                        </div>
                    </a>
                    <a href="https://www.spar.hr" target="_blank" rel="noopener" class="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-lg hover:border-amber-500 transition-all flex items-center gap-3">
                        <img src="https://www.google.com/s2/favicons?domain=spar.hr&sz=64" alt="Spar" class="w-6 h-6 rounded shrink-0">
                        <div>
                            <h4 class="font-bold text-xs text-slate-900 dark:text-white">SPAR</h4>
                            <span class="text-[10px] text-slate-400">spar.hr</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    '''

def get_schema(key, seo):
    title = seo.get("title", "")
    description = seo.get("description", "")
    
    if key == "index":
        schema = {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "WebSite",
                    "@id": "https://www.vijesti-hrvatska.com/#website",
                    "url": "https://www.vijesti-hrvatska.com/",
                    "name": "Vijesti Hrvatska",
                    "alternateName": "Hrvatski Medijski Agregator",
                    "description": description,
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://www.vijesti-hrvatska.com/?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                },
                {
                    "@type": "Organization",
                    "@id": "https://www.vijesti-hrvatska.com/#organization",
                    "name": "Vijesti Hrvatska",
                    "url": "https://www.vijesti-hrvatska.com/",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.vijesti-hrvatska.com/favicon.svg"
                    },
                    "email": "kontakt@vijesti-hrvatska.com",
                    "description": "Nekomercijalni medijski agregator vijesti u Republici Hrvatskoj."
                }
            ]
        }
    else:
        category_name = seo.get("heading", key.capitalize())
        schema = {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "CollectionPage",
                    "name": title,
                    "description": description,
                    "url": f"https://www.vijesti-hrvatska.com/{key}",
                    "publisher": {
                        "@type": "Organization",
                        "@id": "https://www.vijesti-hrvatska.com/#organization"
                    }
                },
                {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Naslovnica",
                            "item": "https://www.vijesti-hrvatska.com/"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": category_name,
                            "item": f"https://www.vijesti-hrvatska.com/{key}"
                        }
                    ]
                }
            ]
        }
    
    return json.dumps(schema, ensure_ascii=False, indent=2)

def get_english_html():
    try:
        with open('articles.json', 'r', encoding='utf-8') as f:
            articles = json.load(f)
        english_sources = ['Croatia Week', 'Total Croatia News', 'The Dubrovnik Times']
        eng_articles = [a for a in articles if any(src.lower() == a.get('source', '').lower() for src in english_sources)]
    except Exception:
        eng_articles = []

    cards_html = ""
    for a in eng_articles:
        img_block = ""
        if a.get('imageUrl') and not a.get('imageUrl').startswith('placeholder-'):
            img_block = f'''
                <div class="h-44 w-full overflow-hidden bg-slate-200 dark:bg-slate-700 relative">
                    <img src="{a['imageUrl']}" alt="{a['title']}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                </div>
            '''
        cards_html += f'''
            <div onclick="window.open('{a['link']}', '_blank')" class="news-card group bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-750 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer">
                <div class="space-y-3">
                    {img_block}
                    <div class="p-4 space-y-2">
                        <div class="flex items-center justify-between">
                            <span class="bg-blue-600 text-white font-extrabold text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">{a['source']}</span>
                            <span class="text-[10px] text-slate-400 font-mono">UŽIVO</span>
                        </div>
                        <h3 class="font-extrabold text-sm text-slate-900 dark:text-white leading-snug group-hover:text-blue-500 transition-colors">{a['title']}</h3>
                        <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">{a.get('description', '')}</p>
                    </div>
                </div>
            </div>
        '''

    return f'''
        <div class="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm space-y-6 transition-colors">
            <div class="border-b border-slate-200 dark:border-slate-800 pb-4 flex items-center justify-between">
                <div>
                    <h2 class="text-xl font-black tracking-tight flex items-center gap-2 text-slate-900 dark:text-white">
                        🇬🇧 Croatia News in English
                    </h2>
                    <p class="text-xs text-slate-450 dark:text-slate-400 mt-1">Latest news from Croatia in English language for international readers and expats.</p>
                </div>
                <span class="bg-blue-500/10 text-blue-600 dark:text-blue-400 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                    English Stream
                </span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cards_html}
            </div>
        </div>
    '''

def get_pre_rendered_subnav_html(active_key="sve"):
    main_cats = [
        {"id": "sve", "name": "Sve", "file": "/"},
        {"id": "vijesti", "name": "Vijesti", "file": "vijesti"},
        {"id": "sport", "name": "Sport", "file": "sport"},
        {"id": "tech", "name": "Tehnologija", "file": "tech"},
        {"id": "lifestyle", "name": "Lifestyle", "file": "lifestyle"},
        {"id": "biznis", "name": "Biznis", "file": "biznis"},
        {"id": "auti", "name": "Auti", "file": "auti"},
        {"id": "showbiz", "name": "Showbiz", "file": "showbiz"},
        {"id": "zanimljivosti", "name": "Zanimljivosti", "file": "zanimljivosti"},
        {"id": "nedjelja", "name": "Nedjelja 🛒", "file": "nedjelja"},
        {"id": "katalozi", "name": "Katalozi 🛍️", "file": "katalozi"},
        {"id": "kalendar", "name": "Kalendar 📅", "file": "kalendar"},
        {"id": "english", "name": "English 🇬🇧", "file": "english"},
        {"id": "vrijeme", "name": "Vrijeme 🌤️", "file": "vrijeme"},
        {"id": "portali", "name": "Portali 🌐", "file": "portali"},
        {"id": "spremljeno", "name": "Spremljeno 📌", "file": "spremljeno"}
    ]
    
    cat_target = "sve" if active_key == "index" else active_key
    
    html = ""
    for cat in main_cats:
        is_active = (cat["id"] == cat_target)
        active_cls = "bg-editorial-navy text-white shadow-sm font-black" if is_active else "text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
        html += f'<a href="{cat["file"]}" class="px-3 py-1 text-xs font-bold rounded transition-all shrink-0 {active_cls}">{cat["name"]}</a>'
        
    return html

def main():
    cwd = os.path.dirname(os.path.abspath(__file__))
    index_path = os.path.join(cwd, "index.html")
    config_path = os.path.join(cwd, "seo_config.json")
    
    with open(index_path, 'r', encoding='utf-8') as f:
        template = f.read()
        
    with open(config_path, 'r', encoding='utf-8') as f:
        seo_config = json.load(f)
        
    for key, seo in seo_config.items():
        title = seo["title"]
        description = seo["description"]
        heading = seo["heading"]
        
        if key == "index":
            canonical_url = "https://www.vijesti-hrvatska.com/"
            file_name = "index.html"
        else:
            canonical_url = f"https://www.vijesti-hrvatska.com/{key}"
            file_name = f"{key}.html"
            
        dest_path = os.path.join(cwd, file_name)
        content = template
        
        # Base SEO tag replacements
        content = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', content)
        content = re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{description}">', content)
        content = re.sub(r'<link id="canonical-link" rel="canonical" href="[^"]*">', f'<link id="canonical-link" rel="canonical" href="{canonical_url}">', content)
        content = re.sub(r'<meta id="og-url" property="og:url" content="[^"]*">', f'<meta id="og-url" property="og:url" content="{canonical_url}">', content)
        content = re.sub(r'<meta id="og-title" property="og:title" content="[^"]*">', f'<meta id="og-title" property="og:title" content="{title}">', content)
        content = re.sub(r'<meta id="og-description" property="og:description" content="[^"]*">', f'<meta id="og-description" property="og:description" content="{description}">', content)
        content = re.sub(r'<meta id="twitter-url" name="twitter:url" content="[^"]*">', f'<meta id="twitter-url" name="twitter:url" content="{canonical_url}">', content)
        content = re.sub(r'<meta id="twitter-title" name="twitter:title" content="[^"]*">', f'<meta id="twitter-title" name="twitter:title" content="{title}">', content)
        content = re.sub(r'<meta id="twitter-description" name="twitter:description" content="[^"]*">', f'<meta id="twitter-description" name="twitter:description" content="{description}">', content)
        content = re.sub(r'<h1 id="page-main-heading" class="sr-only">.*?</h1>', f'<h1 id="page-main-heading" class="sr-only">{heading}</h1>', content)
        
        # Pre-rendered Subnavigation category tabs
        subnav_markup = get_pre_rendered_subnav_html(key)
        content = re.sub(r'<div id="category-container"[\s\S]*?</div>', f'<div id="category-container" class="flex space-x-2 overflow-x-auto pb-1 pt-1 scrollbar-none w-full scroll-smooth px-2">{subnav_markup}</div>', content, count=1)
        
        # Cache buster
        content = re.sub(r'app\.js(?:\?v=[\d\.]+)?', 'app.js?v=1.4.22', content)
        
        # SEO text
        seo_text = seo.get("seo_text", "")
        content = re.sub(r'<p id="seo-description-text">[\s\S]*?</p>', f'<p id="seo-description-text">{seo_text}</p>', content)
        
        # Schema
        schema_json = get_schema(key, seo)
        content = re.sub(r'<script type="application/ld\+json">[\s\S]*?</script>', f'<script type="application/ld\+json">\n{schema_json}\n</script>', content)
        
        # Feature page static HTML pre-rendering
        if key in ['kalendar', 'nedjelja', 'katalozi', 'english']:
            # Unhide portali-area and hide feed-area + sidebar statically in HTML
            content = content.replace('<div id="portali-area" class="hidden space-y-6"></div>', '<div id="portali-area" class="space-y-6">CONTAINER_BODY</div>')
            content = content.replace('<div id="feed-area" class="space-y-6">', '<div id="feed-area" class="hidden space-y-6">')
            content = content.replace('<aside id="sidebar" class="w-full lg:w-[28%] space-y-6">', '<aside id="sidebar" class="hidden w-full lg:w-[28%] space-y-6">')
            content = content.replace('class="w-full lg:w-[72%] space-y-6 flex-1 min-w-0"', 'class="w-full lg:w-full space-y-6 flex-1 min-w-0"')
            
            if key == 'kalendar':
                content = content.replace('CONTAINER_BODY', get_kalendar_html())
            elif key == 'nedjelja':
                content = content.replace('CONTAINER_BODY', get_nedjelja_html())
            elif key == 'katalozi':
                content = content.replace('CONTAINER_BODY', get_katalozi_html())
            elif key == 'english':
                content = content.replace('CONTAINER_BODY', get_english_html())
                
        with open(dest_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
        print(f"Generated {file_name} with pre-rendered static HTML v1.3.4")

    # AUTOMATED BUILD PROTECTION GUARD
    with open(os.path.join(cwd, 'index.html'), 'r', encoding='utf-8') as f:
        idx_check = f.read()
        assert '<div id="feed-area" class="space-y-6">' in idx_check, "SAFETY GUARD: index.html feed-area must be visible!"
        assert '<div id="category-container"' in idx_check and 'Sve' in idx_check, "SAFETY GUARD: index.html category buttons must be pre-rendered!"
        assert '<div id="loading-spinner" class="space-y-6 hidden">' in idx_check, "SAFETY GUARD: index.html loading-spinner must be hidden!"
    print("ALL BUILD SAFETY GUARDS PASSED SUCCESSFULLY!")

if __name__ == "__main__":
    main()
