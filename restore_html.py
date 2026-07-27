import os
import re
import json

PUBLIC_HOLIDAYS_2026 = [
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
]

def render_month_html(year, month_idx):
    month_names = ['Siječanj', 'Veljača', 'Ožujak', 'Travanj', 'Svibanj', 'Lipanj', 'Srpanj', 'Kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac']
    month_name = month_names[month_idx]
    
    # Calculate days in month & first day offset
    import calendar
    cal = calendar.Calendar(firstweekday=0) # 0 is Monday
    month_days = cal.monthdayscalendar(year, month_idx + 1)
    
    days_html = ""
    for week in month_days:
        for day in week:
            if day == 0:
                days_html += '<div class="h-7 w-7"></div>'
            else:
                date_str = f"{year}-{month_idx+1:02d}-{day:02d}"
                holiday = next((h for h in PUBLIC_HOLIDAYS_2026 if h["date"] == date_str), None)
                
                # Check weekend
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

def get_kalendar_html():
    months_html = "".join([render_month_html(2026, m) for m in range(12)])
    
    table_rows = ""
    for h in PUBLIC_HOLIDAYS_2026:
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

    return f'''
        <div class="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm space-y-8 transition-colors">
            <div class="border-b border-slate-200 dark:border-slate-800 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 class="text-xl font-black tracking-tight flex items-center gap-2 text-slate-900 dark:text-white">
                        📅 Kalendar Blagdana i Neradnih Dana u RH (2026)
                    </h2>
                    <p class="text-xs text-slate-450 dark:text-slate-400 mt-1">Interaktivni vizualni kalendar s istaknutim neradnim danima, blagdanima i produženim vikendima.</p>
                </div>
                
                <div class="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg shrink-0">
                    <button onclick="renderHolidaysPage(2026)" class="px-3 py-1 text-xs font-bold rounded-md bg-editorial-navy text-white shadow-sm">
                        2026. (Tekuća)
                    </button>
                    <button onclick="renderHolidaysPage(2027)" class="px-3 py-1 text-xs font-bold rounded-md text-slate-600 dark:text-slate-400 hover:text-white">
                        2027. (Naredna)
                    </button>
                    <button onclick="renderHolidaysPage(2025)" class="px-3 py-1 text-xs font-bold rounded-md text-slate-600 dark:text-slate-400 hover:text-white">
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
                <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Popis svih državnih blagdana u 2026. godini</h3>
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

def get_nedjelja_html():
    return '''
        <div class="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm space-y-6 transition-colors">
            <div class="border-b border-slate-200 dark:border-slate-800 pb-4">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="text-xl font-black tracking-tight flex items-center gap-2 text-slate-900 dark:text-white">
                            🛒 Radne Nedjelje Trgovina i Centara u RH
                        </h2>
                        <p class="text-xs text-slate-450 dark:text-slate-400 mt-1">Provjerite koje trgovine i shopping centri rade ove nedjelje u vašem gradu prema službenim lokatorima.</p>
                    </div>
                    <span class="bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
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

            <div class="space-y-3 pt-2">
                <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Službeni lokatori radnih nedjelja po trgovinama</h3>
                <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl">
                    <table class="w-full text-left text-xs">
                        <thead class="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-extrabold uppercase tracking-wider border-b border-slate-200 dark:border-slate-800">
                            <tr>
                                <th class="p-3">Trgovina / Lanac</th>
                                <th class="p-3">Tip</th>
                                <th class="p-3">Službeni Lokator Radnih Nedjelja</th>
                                <th class="p-3 text-right">Akcija</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-medium">
                            <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                                <td class="p-3 font-extrabold flex items-center gap-2"><span>🛍️</span> Lidl</td>
                                <td class="p-3 text-slate-400">Prehrana</td>
                                <td class="p-3 text-slate-600 dark:text-slate-400">Službena karta radnih nedjelja za sve Lidl filijale u RH</td>
                                <td class="p-3 text-right"><a href="https://www.lidl.hr/radno-vrijeme" target="_blank" rel="noopener" class="bg-slate-200 dark:bg-slate-800 hover:bg-amber-500 hover:text-white text-slate-800 dark:text-slate-200 font-bold px-3 py-1 rounded text-[11px] transition-all inline-block">Provjeri Lidl →</a></td>
                            </tr>
                            <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                                <td class="p-3 font-extrabold flex items-center gap-2"><span>🛒</span> Konzum</td>
                                <td class="p-3 text-slate-400">Prehrana</td>
                                <td class="p-3 text-slate-600 dark:text-slate-400">Konzum interaktivna tražilica radnih nedjelja i radnih vremena</td>
                                <td class="p-3 text-right"><a href="https://www.konzum.hr/trgovine" target="_blank" rel="noopener" class="bg-slate-200 dark:bg-slate-800 hover:bg-amber-500 hover:text-white text-slate-800 dark:text-slate-200 font-bold px-3 py-1 rounded text-[11px] transition-all inline-block">Provjeri Konzum →</a></td>
                            </tr>
                            <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                                <td class="p-3 font-extrabold flex items-center gap-2"><span>🔴</span> Kaufland</td>
                                <td class="p-3 text-slate-400">Prehrana / Hipermarket</td>
                                <td class="p-3 text-slate-600 dark:text-slate-400">Kaufland lokator radnih trgovina i radnih nedjelja u RH</td>
                                <td class="p-3 text-right"><a href="https://www.kaufland.hr/poslovnice.html" target="_blank" rel="noopener" class="bg-slate-200 dark:bg-slate-800 hover:bg-amber-500 hover:text-white text-slate-800 dark:text-slate-200 font-bold px-3 py-1 rounded text-[11px] transition-all inline-block">Provjeri Kaufland →</a></td>
                            </tr>
                            <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                                <td class="p-3 font-extrabold flex items-center gap-2"><span>🟢</span> SPAR / INTERSPAR</td>
                                <td class="p-3 text-slate-400">Prehrana</td>
                                <td class="p-3 text-slate-600 dark:text-slate-400">Spar raspored otvorenih trgovina po gradovima i nedjeljama</td>
                                <td class="p-3 text-right"><a href="https://www.spar.hr/lokacije" target="_blank" rel="noopener" class="bg-slate-200 dark:bg-slate-800 hover:bg-amber-500 hover:text-white text-slate-800 dark:text-slate-200 font-bold px-3 py-1 rounded text-[11px] transition-all inline-block">Provjeri SPAR →</a></td>
                            </tr>
                            <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                                <td class="p-3 font-extrabold flex items-center gap-2"><span>🟡</span> Plodine</td>
                                <td class="p-3 text-slate-400">Prehrana</td>
                                <td class="p-3 text-slate-600 dark:text-slate-400">Plodine tjedni raspored radnih nedjelja po supermarketima</td>
                                <td class="p-3 text-right"><a href="https://www.plodine.hr/supermarketi" target="_blank" rel="noopener" class="bg-slate-200 dark:bg-slate-800 hover:bg-amber-500 hover:text-white text-slate-800 dark:text-slate-200 font-bold px-3 py-1 rounded text-[11px] transition-all inline-block">Provjeri Plodine →</a></td>
                            </tr>
                            <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                                <td class="p-3 font-extrabold flex items-center gap-2"><span>🔵</span> Eurospin</td>
                                <td class="p-3 text-slate-400">Prehrana / Discount</td>
                                <td class="p-3 text-slate-600 dark:text-slate-400">Eurospin popis radnih nedjelja po poslovnicama</td>
                                <td class="p-3 text-right"><a href="https://www.eurospin.hr/trgovine/" target="_blank" rel="noopener" class="bg-slate-200 dark:bg-slate-800 hover:bg-amber-500 hover:text-white text-slate-800 dark:text-slate-200 font-bold px-3 py-1 rounded text-[11px] transition-all inline-block">Provjeri Eurospin →</a></td>
                            </tr>
                            <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                                <td class="p-3 font-extrabold flex items-center gap-2"><span>🏠</span> Pevex</td>
                                <td class="p-3 text-slate-400">Građevina / Dom</td>
                                <td class="p-3 text-slate-600 dark:text-slate-400">Pevex centar radne nedjelje i radno vrijeme prodajnih centara</td>
                                <td class="p-3 text-right"><a href="https://pevex.hr/prodajni-centri" target="_blank" rel="noopener" class="bg-slate-200 dark:bg-slate-800 hover:bg-amber-500 hover:text-white text-slate-800 dark:text-slate-200 font-bold px-3 py-1 rounded text-[11px] transition-all inline-block">Provjeri Pevex →</a></td>
                            </tr>
                            <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                                <td class="p-3 font-extrabold flex items-center gap-2"><span>🛠️</span> Bauhaus</td>
                                <td class="p-3 text-slate-400">Građevina / Dom</td>
                                <td class="p-3 text-slate-600 dark:text-slate-400">Bauhaus prodajni centri - raspored radnih nedjelja u RH</td>
                                <td class="p-3 text-right"><a href="https://www.bauhaus.hr/prodajni-centri" target="_blank" rel="noopener" class="bg-slate-200 dark:bg-slate-800 hover:bg-amber-500 hover:text-white text-slate-800 dark:text-slate-200 font-bold px-3 py-1 rounded text-[11px] transition-all inline-block">Provjeri Bauhaus →</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
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
        
        # Cache buster
        content = re.sub(r'app\.js(?:\?v=[\d\.]+)?', 'app.js?v=1.3.6', content)
        
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

if __name__ == "__main__":
    main()
