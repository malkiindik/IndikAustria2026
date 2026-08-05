const itinerary = {
  title: 'כבד את אביך ואת אימך',
  region: 'זלצבורג – שלדמינג והסביבה',
  dates: '25.10.26–29.10.26',
  days: [
    {
      day: 'יום ראשון – 25.10.26',
      header: 'נחיתה בזלצבורג, השכרת רכב ונסיעה לשלדמינג',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      items: [
        {label: 'נחיתה', value: 'שדה התעופה זלצבורג', link: 'https://www.google.com/maps/search/?api=1&query=Salzburg+Airport+Austria'},
        {label: 'חברת השכרה', value: 'חברת השכרה: מיקום חברת בגאט (הנאהל להשלים עם מסמכים)',
         value2: 'כתובת: Innsbrucker Bundesstraße 95, 5020 Salzburg, אוסטריה'},
        {label: 'הערה חשובה', value: 'מומלץ לבדוק עם חברת ההשכרה הוראות החזרה, ביטוח ומצבי דלק'},
        {label: 'לינה (Schladming)', value: 'נסיעה של כ־שעה משדה התעופה — לנים בעיר Schladming. נסגור סופית ביום הטיסה.'},
        {label: 'אופציות לינה — אופציה 1', value: 'לינק אופציה 1 בבוקינג', link: 'https://www.booking.com/Share-NUbWJZ'},
        {label: 'אופציות לינה — אופציה 2', value: 'לינק אופציה 2 בבוקינג', link: 'https://www.booking.com/Share-N2l2sa'}
      ]
    },
    {
      day: 'יום שני – 26.10.26',
      header: 'אטרקציות בדרך לסכר מלטה (Malta) — אופציות וגיבוי',
      image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80',
      items: [
        {label: 'יציאה', value: 'יוצאים מהדירה עד 8:30 — דבר תורה 8:15 (אבא)'} ,
        {label: 'אופציה א — Go‑Kart (Höchkönig)', value: 'נתיב מסלול גו-קארט ארוך כ־6.5 ק"מ', link: 'https://maps.app.goo.gl/Wg4jqh54DR1NzNzf8?g_st=am',
         value2: 'מחיר: 24€ + עלייה ברכבל 21€'},
        {label: 'אופציה ב — עצירה ב‑Deinberg (אומגה/קרטינג)', value: 'אומגה 400 מטר, גו-קארט הרים וקצת עליות ברכבל', link: 'https://www.deinberg.at/',
         value2: 'מחירים משוערים: אומגה 18€ כולל רכבל, גו‑קארט הרים 9€, רכבל נוסף 15€'},
        {label: 'האטרקציה המרכזית', value: 'נסיעה לסכר מלטה דרך הדרך הנופית — שימו לב: ייתכן שזה היום האחרון שהמקום פתוח בעונה; תלוי במזג אוויר', link: 'https://www.maltatal.com/en/service-contact-arrival/' ,
         value2: 'תשלום כניסה/מעבר: כ־24€ לרכב'},
        {label: 'מפות/כתובת', value: 'Malta‑Hochalm‑Straße, 9854, אוסטריה', link: 'https://www.google.com/maps/search/?api=1&query=Malta-Hochalm-Stra%C3%9Fe+9854+Austria'},
        {label: 'עצירה לקניות בסוף היום', value: 'Lidl Spittal an der Drau — Koschatstraße 39, 9800 Spittal an der Drau',
         value2: 'הערה: סניף גדול, חנייה נוחה — כ־37 דקות מתחתית עמק מלטה'}
      ]
    },
    {
      day: 'יום שלישי – 27.10.26',
      header: 'Flachau (Lucky Flitzer) + Dachstein (Treppe ins Nichts)',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      items: [
        {label: 'יציאה', value: 'יוצאים מהדירה עד 8:30 — דבר תורה 8:15 (בצלאל)'},
        {label: 'רכבת הרים/רודל — Lucky Flitzer', value: 'חוויית רייד נהדרת בפלאכו', link: 'https://www.lucky-flitzer.at/'},
        {label: 'כתובת Lucky Flitzer', value: 'Rodelbahn Lucky Flitzer, Unterberggasse 172, 5542 Flachau, אוסטריה', link: 'https://www.google.com/maps/search/?api=1&query=Rodelbahn+Lucky+Flitzer+Unterberggasse+172+Flachau+Austria'},
        {label: 'תצפית מרכזית — Treppe ins Nichts', value: 'מדרגות לשום מקום (Stairway to Nothingness) — יש להזמין מקומות מראש (חלק מהכניסות קשורות לכרטיסי לינה)', link: 'https://www.derdachstein.at/de/dachstein-gletscherwelt/gletscher-erlebnis/treppe-ins-nichts',
         value2: 'כתובת: Schildlehen 79, 8972 Obertraun, אוסטריה'},
        {label: 'אטרקציה בונוס', value: 'ירי בלייזר / פעילויות נוספות — לעיתים כלולות בכרטיס לינה', link: 'https://www.google.com/maps/search/?api=1&query=Ramsau+161+Ramsau+am+Dachstein+Austria'},
        {label: 'הערות', value: 'להזמין כרטיסים מראש לרכבל/תצפית; לבדוק מזג אוויר ופתיחות גלישר/רכבלים'}
      ]
    },
    {
      day: 'יום רביעי – 28.10.26',
      header: 'דרך נופית, מפל ונוף — הכנה להחזרת רכב',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      items: [
        {label: 'יציאה', value: 'יוצאים מהדירה עד 8:30 — דבר תורה 8:15 (שמעואל)'},
        {label: 'עצירה בדרך נופית — מפל ומרפסת נוף', value: 'מפל מדהים עם מרפסת נוף קצרה (צריך מעיל)', link: 'https://maps.app.goo.gl/nmW4a8MC7Q3z5161A?g_st=aw'},
        {label: 'כתובת החזרת רכב', value: 'החזרת רכב בשדה התעופה — יש לבדוק את הוראות חברת ההשכרה במדויק ולוודא זמן החזרה'},
        {label: 'המלצה', value: 'לעצור לצילומים, להצטייד במעילים לפסגות ולקחת בחשבון זמן תנועה חזרה לשדה'}
      ]
    },
    {
      day: 'יום חמישי – 29.10.26',
      header: 'Hallstatt, תצפית 5‑אצבעות, אופציות אומגה וחזרה לשדה',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      items: [
        {label: 'יציאה', value: 'יציאה מוקדמת לפי לוח טיסות — דבר תורה 8:15 (אלעזר ומאיר)'} ,
        {label: 'הלשטאט', value: 'סיור בעיירת ההיסטורית Hallstatt — זמן נסיעה משולדמינג כ־1:15', link: 'https://www.google.com/maps/search/?api=1&query=Hallstatt+Austria'},
        {label: 'תצפית 5 אצבעות', value: 'Tritppe/5 Fingers — מחיר כניסה משוער 47€ לאדם (לנכה כניסה חינם/הנחות למלווה)', link: 'https://dachstein-salzkammergut.com/'},
        {label: 'אומגה/רכבת הרים', value: 'אומגה ~31€ / רכבת הרים ~25€ — בדוק אם פתוח ביום הנסיעה', link: 'https://www.zipline.at/'},
        {label: 'חזרה לשדה התעופה', value: 'הגעה לשדה עד זמן מומלץ להחזרת רכב — כתובת החזרה: Innsbrucker Bundesstraße 95, 5020 Salzburg, Austria'}
      ]
    }
  ]
};

const meals = {
  dinner: {
    'יום ראשון': 'שווארמה — בצלאל קונה (הלו תימן)',
    'יום שני': 'שניצל עוף (אבא) — אורז מקושט (מאיר)',
    'יום שלישי': 'בקר (שמואל) + פירה של סבא + בצל מטוגן (אבא)',
    'יום רביעי': 'חזה עוף/פרגית (אלעזר) — אורז מקושט',
    'יום חמישי': 'שווארמה של בצלאל בפיתה + צ׳יפס מטוגן',
    'הערה': 'בצלאל מכין מרק; התבלינים יבואו מהארץ'
  },
  lunch: {
    'יום ראשון': 'אלעזר מביא מאפים טריים',
    'יום שני': 'פיתות, חומוס ופסטרמה — באחריות שמואל',
    'יום שלישי': 'פיתות עם חביתות — באחריות אלעזר',
    'יום רביעי': 'פיתות עם גבינה צהובה וחביתות — באחריות מאיר',
    'יום חמישי': 'שווארמה של בצלאל (אם נדרש)',
    'הערה': 'שמואל מביא את השוקולדים ששירה מכינה'
  }
};

// שגרה יומית
const dailyRoutine = {
  leaveBy: '08:30',
  dvarTorah: '08:15',
  dvarTorahSchedule: {
    'יום שני': 'אבא',
    'יום שלישי': 'בצלאל',
    'יום רביעי': 'שמואל',
    'יום חמישי': 'אלעזר ומאיר'
  }
};

// קניות ואחראים
const shopping = {
  responsible: 'מאיר',
  checklist: [
    'קפה וחלב',
    'לחם/מאפים',
    'ביצים',
    'חמאה/גבינה',
    'חומוס ופסטרמה',
    'מצרכים לערבים: שניצל, בקר, חזה עוף, אורז, תפוחי אדמה',
    'תבלינים למרק (מביאים מהארץ)',
    'חטיפים ושוקולדים (שמואל/שירה)'
  ]
};

// פונקציות הצגה (נשמרות כמו בקובץ המקורי)
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

function renderMeals(){
  document.querySelectorAll('.day-btn').forEach(b=>b.classList.remove('active'));
  const mealsBtn = el('#mealsBtn');
  mealsBtn.classList.add('active');

  const c = el('#content');
  c.innerHTML='';
  const h = createEl('h2',{class:'section-title'}, 'ארוחות — תפריט חודשי');
  c.appendChild(h);

  const dinnerTitle = createEl('h3',{}, 'ארוחת ערב');
  c.appendChild(dinnerTitle);
  const dl = createEl('div',{});
  for(const day of ['יום ראשון','יום שני','יום שלישי','יום רביעי','יום חמישי']){
    const box = createEl('div',{class:'field'});
    const label = createEl('div',{class:'label'}, day);
    const val = createEl('div',{}, meals.dinner[day] || '-');
    box.appendChild(label);
    box.appendChild(val);
    dl.appendChild(box);
  }
  const note = createEl('div',{class:'field'}, meals.dinner['הערה']);
  dl.appendChild(note);
  c.appendChild(dl);

  const lunchTitle = createEl('h3',{}, 'ארוחות צהריים');
  c.appendChild(lunchTitle);
  const ll = createEl('div',{});
  for(const day of ['יום ראשון','יום שני','יום שלישי','יום רביעי','יום חמישי']){
    const box = createEl('div',{class:'field'});
    const label = createEl('div',{class:'label'}, day);
    const val = createEl('div',{}, meals.lunch[day] || '-');
    box.appendChild(label);
    box.appendChild(val);
    ll.appendChild(box);
  }
  const note2 = createEl('div',{class:'field'}, meals.lunch['הערה']);
  ll.appendChild(note2);
  c.appendChild(ll);
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
  if(day.image){
    const img = createEl('img',{class:'day-image',src:day.image,alt:day.header});
    c.appendChild(img);
  }
  day.items.forEach(it=>{
    const box = createEl('div',{class:'field'});
    const label = createEl('div',{class:'label'}, it.label || 'פריט');
    const val = createEl('div',{}, it.value || '');
    box.appendChild(label);
    box.appendChild(val);
    if(it.value2){ const v2 = createEl('div',{}, it.value2); box.appendChild(v2)}
    if(it.link){
      const links = createEl('div',{class:'links'});
      const a = createEl('a',{href:it.link,target:'_blank',rel:'noopener'}, it.link.includes('maps') ? 'פתח מפה' : 'פתח קישור');
      links.appendChild(a);
      box.appendChild(links);
    }
    c.appendChild(box);
  });
}

function init(){
  renderDays();
  el('#printBtn').addEventListener('click', ()=>window.print());
  const mealsBtn = el('#mealsBtn');
  if(mealsBtn) mealsBtn.addEventListener('click', renderMeals);
}

window.addEventListener('DOMContentLoaded', init);
