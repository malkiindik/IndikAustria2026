const itinerary = {
  title: 'כבד את אביך ואת אימך',
  region: 'זלצבורג – שלדמינג והסביבה',
  dates: '25.10.26–29.10.26',
  days: [
    {
      day:'יום ראשון – 25.10.26',
      header:'נחיתה בזלצבורג',
      items:[
        {label:'נחיתה', value:'שדה התעופה זלצבורג'},
        {label:'השכרת רכב', value:'חברה: באדג"ט\nכתובת: Innsbrucker Bundesstraße 95, 5020 Salzburg, אוסטריה\nמספר הזמנה: 799688715'},
        {label:'נסיעה למקום הלינה', value:'אזור: שלדמינג (כשעה נסיעה)\nהערה: סוגרים את מקום הלינה רק ביום הטיסה'},
        {label:'אופציות לינה', value:'אופציה 1: דירה גדולה ומפנקת, נוף פחות מושלם', link:'https://www.schladming-dachstein.at/en/tosc-orte/unterkuenfte-sommercard/accommodations/DAC/1bd0e9b2-62dc-42a4-8319-d923e00b5dd5/appartement-ahorn?useDetailSearch=true&utm_source=copilot.com'},
        {label:'אופציה 2: דירה 85 מ\'ר, יפה מאוד, נוף מושלם, מחיר כ־3800', link:'https://www.booking.com/Share-aqww8F?utm_source=copilot.com'}
      ]
    },
    {
      day:'יום שני – 26.10.26',
      header:'סכר מלטה ודרך נופית',
      items:[
        {label:'נסיעה משוער', value:'כשעה וחצי לכל צד ממקום הלינה'},
        {label:'יעד', value:'סכר מלטה + Malta-Hochalm-Straße'},
        {label:'מחיר', value:'25€ לרכב (תלוי מזג אוויר)'},
        {label:'קישורים / מפות', link:'https://maps.app.goo.gl/P7SgePTDb4YiCUhj8?utm_source=copilot.com'},
        {label:'כתובת', value:'Malta-Hochalm-Straße, 9854, אוסטריה'},
        {label:'המלצה', value:'נסיעה רגועה בדרך הנופית, עצירות לצילום, חזרה בערב לשלדמינג'}
      ]
    },
    {
      day:'יום שלישי – 27.10.26',
      header:'תצפית “מדרגות לשום מקום” וגליצ\'ר',
      items:[
        {label:'זמן נסיעה', value:'כ־15 דקות ממקום הלינה'},
        {label:'תצפית', value:'Treppe ins Nichts — חינם עם כרטיס מקום הלינה (יש להזמין מראש)', link:'https://www.derdachstein.at/de/dachstein-gletscherwelt/gletscher-erlebnis/treppe-ins-nichts?utm_source=copilot.com'},
        {label:'כתובת תצפית', value:'Schildlehen 79, 8972 Obertraun, אוסטריה'},
        {label:'גליצ\'ר', value:'ירי בלייזר – חינם עם כרטיס לינה', value2:'כתובת: Ramsau 161, 8972 Ramsau am Dachstein, אוסטריה'},
        {label:'המלצה', value:'עלייה ברכבל, תצפיות, הליכה קצרה, צילום, ניצול הטבות כרטיס הלינה'}
      ]
    },
    {
      day:'יום רביעי – 28.10.26',
      header:'דרך נופית גרוסגלוקנר + אגם + גן חיות',
      items:[
        {label:'זמן נסיעה', value:'כשעה וחצי לכל צד'},
        {label:'דרך נופית', value:'נקודת יעד: 3MFV+MV Winkl, אוסטריה'},
        {label:'אגם', value:'Zell am See — Elisabeth-Promenade 1, 5700 Zell am See, אוסטריה'},
        {label:'גן חיות', value:'Ferleiten — 5672 Fusch, אוסטריה (15€ מבוגר, 12€ לנכה)', link:'https://www.wildpark-ferleiten.at/?hl=he-IL&utm_source=copilot.com'},
        {label:'המלצה', value:'נסיעה בדרך הנופית, טיול סביב האגם, ביקור בגן החיות'}
      ]
    },
    {
      day:'יום חמישי – 29.10.26',
      header:'הלשטאט, תצפית 5 אצבעות, אומגה, חזרה לשדה',
      items:[
        {label:'סיור בעיירה', value:'הלשטאט — זמן נסיעה כשעה ו־15 דקות'},
        {label:'תצפית 5 אצבעות', value:'מחיר כניסה: 47€ לאדם (לנכה כניסה חינם, למלווה הנחה)', link:'https://dachstein-salzkammergut.com/?utm_source=copilot.com'},
        {label:'כתובת תצפית', value:'Winkl 34, 4831 Obertraun, אוסטריה'},
        {label:'אופציות אומגה/רכבת הרים', value:'אומגה: 31€ / רכבת הרים:25€ — פתוח רק ביום חמישי', link:'https://www.zipline.at/?utm_source=copilot.com'},
        {label:'חזרה לשדה', value:'זמן נסיעה ~1:30 — טיסה 19:00 — הגעה לשדה עד 15:30 — החזרת רכב Innsbrucker Bundesstraße 95, 5020 Salzburg'}
      ]
    }
  ]
};

function el(q, c=document){return c.querySelector(q)}
function createEl(tag, attrs={}, txt=''){const e=document.createElement(tag);for(const k in attrs)e.setAttribute(k,attrs[k]);if(txt) e.textContent=txt;return e}

function renderDays(){
  const list = el('#daysList');
  itinerary.days.forEach((d,i)=>{
    const btn = createEl('button',{class:'day-btn','data-index':i}, d.day);
    btn.addEventListener('click',()=>{selectDay(i)});
    list.appendChild(btn);
  });
  selectDay(0);
}

function selectDay(index){
  const buttons = document.querySelectorAll('.day-btn');
  buttons.forEach(b=>b.classList.toggle('active', +b.dataset.index===index));
  renderDay(index);
}

function renderDay(i){
  const day = itinerary.days[i];
  const c = el('#content');
  c.innerHTML='';
  const h = createEl('h2', {class:'section-title'}, day.day+' — '+day.header)
  c.appendChild(h);
  day.items.forEach(it=>{
    const box = createEl('div',{class:'field'});
    const label = createEl('div',{class:'label'}, it.label || 'פריט');
    const val = createEl('div',{}, it.value || '');
    box.appendChild(label);
    box.appendChild(val);
    if(it.value2){ const v2 = createEl('div',{}, it.value2); box.appendChild(v2)}
    if(it.link){
      const links = createEl('div',{class:'links'});
      const a = createEl('a',{href:it.link,target:'_blank',rel:'noopener'}, 'פתח קישור');
      links.appendChild(a);
      box.appendChild(links);
    }
    c.appendChild(box);
  });
}

function downloadJSON(){
  const data = JSON.stringify(itinerary, null, 2);
  const blob = new Blob([data], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'itinerary.json';
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

function init(){
  renderDays();
  el('#downloadBtn').addEventListener('click', downloadJSON);
  el('#printBtn').addEventListener('click', ()=>window.print());
}

window.addEventListener('DOMContentLoaded', init);
