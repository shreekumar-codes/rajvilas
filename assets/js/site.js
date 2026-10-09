/* STATE & CURRENCY */
const RATES={INR:{r:1,c:'INR'},USD:{r:0.012,c:'USD'},EUR:{r:0.011,c:'EUR'}};
let currency='INR';
const fmt=inr=>{const v=inr*RATES[currency].r; if(currency==='INR') return '₹'+Math.round(v).toLocaleString('en-IN'); return new Intl.NumberFormat('en-US',{style:'currency',currency:currency,maximumFractionDigits:0}).format(v);};
const state={dest:'Jaipur — Pink City Palace',checkin:null,checkout:null,adults:2,children:0,roomsN:1,roomId:3,extras:{},promo:null,step:1};
let LANG='EN';

const DESTS=[
{t:'Jaipur — Pink City Palace',hindi:'जयपुर',img:'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop',temp:'32°C ☀',best:'Oct – Mar',from:14500,desc:'Hawa Mahal views, fort dinners & bazaar walks.'},
{t:'Udaipur — Lake Pichola Palace',hindi:'उदयपुर',img:'https://images.unsplash.com/photo-1568495286055-117eb4db0b74?q=80&w=800&auto=format&fit=crop',temp:'30°C ☀',best:'Sep – Feb',from:18900,desc:'Lake-view suites, sunset boat aarti & weddings.'},
{t:'Goa — Beach Resort & Spa',hindi:'गोवा',img:'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop',temp:'29°C 🌊',best:'Nov – Feb',from:16500,desc:'Private beach, beach shacks & susegad spa.'},
{t:'Kerala — Backwater Retreat',hindi:'केरल',img:'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',temp:'28°C 🌴',best:'Aug – Mar',from:19800,desc:'Houseboats, Ayurveda & toddy-shop trails.'},
{t:'Agra — Taj View Haveli',hindi:'आगरा',img:'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop',temp:'33°C ☀',best:'Oct – Mar',from:12900,desc:'Taj-view terraces, Mughlai kitchens & day trips.'},
{t:'Jaisalmer — Desert Camp',hindi:'जैसलमेर',img:'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop',temp:'36°C 🏜️',best:'Nov – Feb',from:11500,desc:'Sam dunes, camel safari & folk nights.'}];

const ROOMS=[
{id:1,cat:'heritage',catLabel:'HERITAGE HAVELI ROOM',name:'Heritage Haveli Room — Jaipur',price:14500,size:'38 m²',bed:'King + jharokha seat',guests:'2–3 guests',floor:'Pink City wing',rating:'4.8 · 2,140 reviews',badge:'MOST LOVED',img:'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop',desc:'Frescoed walls, marble jharokha overlooking the old city, rain shower and nightly turndown with kesar milk.',amen:['City / fort view','Rain shower','Chai station','55" Smart TV','Free Wi-Fi','Breakfast incl.']},
{id:2,cat:'heritage',catLabel:'LAKE VIEW ROOM',name:'Lake Pichola View Room — Udaipur',price:18900,size:'42 m²',bed:'King + day bed',guests:'2 guests',floor:'Lake wing',rating:'4.9 · 1,640 reviews',badge:'SUNSET VIEW',img:'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop',desc:'Wake to temple bells over Lake Pichola. Private balcony, deep soaking tub and complimentary sunset boat ride.',amen:['Lake balcony','Soaking tub','Boat ride incl.','Work desk','Free Wi-Fi','Mini fridge']},
{id:3,cat:'suite',catLabel:'ROYAL SUITE',name:'Royal Rajput Suite',price:32500,size:'78 m²',bed:'King + living durbar',guests:'2–3 guests',floor:'Royal floor',rating:'5.0 · 980 reviews',badge:'BEST VALUE SUITE',img:'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop',desc:'A true durbar lounge + bedroom in ivory and brass. Terrace with loungers, butler on call and daily high-tea.',amen:['Large terrace','Separate lounge','Butler service','Marble bath','Beach/palace access','High-tea incl.']},
{id:4,cat:'suite',catLabel:'MAHARAJA SUITE',name:'Maharaja Palace Suite',price:58000,size:'120 m²',bed:'King + dining for 6',guests:'3–4 guests',floor:'Palace top floor',rating:'5.0 · 620 reviews',badge:'180° PALACE VIEW',img:'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1000&auto=format&fit=crop',desc:'Corner suite with fort + city panorama, private dining, dressing room and vintage car airport welcome.',amen:['Panorama view','Dining for 6','Dressing room','Vintage car pickup','Champagne/fresh juice','Butler 24×7']},
{id:5,cat:'villa',catLabel:'GOA POOL VILLA',name:'Private Pool Villa — Goa',price:42000,size:'140 m² + garden',bed:'2 bedrooms',guests:'4–5 guests',floor:'Palm grove',rating:'5.0 · 840 reviews',badge:'PRIVATE POOL',img:'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop',desc:'Your own plunge pool behind coconut walls, outdoor rain shower, Goan-Portuguese verandah and host on call.',amen:['Plunge pool','Private garden','2 bathrooms','Outdoor dining','Daily fruit & feni tour','Host service']},
{id:6,cat:'villa',catLabel:'HOUSEBOAT & TENT',name:'Kerala Houseboat Villa + Desert Tent',price:38500,size:'Kettuvallam / Luxury tent',bed:'1 BR + sundeck',guests:'2–4 guests',floor:'Alleppey / Sam dunes',rating:'5.0 · 510 reviews',badge:'SIGNATURE INDIA',img:'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000&auto=format&fit=crop',desc:'One night drifting Alleppey backwaters with chef on board — or under Thar stars with folk music. Choose at booking.',amen:['Private chef','Sundeck','Bonfire folk night','All meals incl.','Ayurveda coupon','Transfers incl.']}];

const EXTRAS=[
{id:'breakfast',name:'Royal Rajasthani breakfast thali',desc:'Per person / night • 7:00–11:00',price:950,per:'night-person'},
{id:'taj',name:'Taj sunrise tour + guide + car',desc:'One-time • Agra/Jaipur guests • 4 AM pickup',price:3500,per:'stay'},
{id:'safari',name:'Ranthambore tiger safari (shared jeep)',desc:'Per person / stay • park fees included',price:7500,per:'stay-person'},
{id:'spa',name:'Ayurveda spa day access',desc:'Per person / stay • hammam + steam + pool',price:2500,per:'stay-person'},
{id:'transfer',name:'Airport transfer — Innova Crysta',desc:'One-way • up to 4 guests + luggage',price:3200,per:'stay'},
{id:'cabana',name:'Goa beach cabana / Jaipur poolside cabana',desc:'Per day • fruit + cooler included',price:4500,per:'night'},
{id:'late',name:'Late checkout to 14:00',desc:'Per stay • subject to availability',price:2000,per:'stay'}];

const EXPS=[
{t:'Ranthambore Tiger Safari',d:'Jeep / canter • naturalist • from Jaipur 3 hrs',img:'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=800&auto=format&fit=crop',tag:'FROM ₹7,500'},
{t:'Sunrise Yoga & Ghat Aarti',d:'Daily 6:30 AM • Udaipur ghat • mats included',img:'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop',tag:'INCLUDED'},
{t:'Ayurveda & Hammam Spa',d:'Abhyanga • Shirodhara • couples rituals',img:'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop',tag:'9 AM – 8 PM'},
{t:'Cook with our Khansama',d:'Laal maas • dal-baati • naan masterclass',img:'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop',tag:'DAILY 4 PM'},
{t:'Royal Weddings & Sangeet',d:'300–1200 guests • baraat elephants • pandits',img:'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',tag:'300+ WEDDINGS/YR'},
{t:'Folk Music & Puppet Nights',d:'Kalbeliya dance • Manganiyar • rooftop',img:'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop',tag:'FRI–SUN • FREE'}];

const DINING=[
{name:'Rajwada — Royal Rajasthani',stars:'★ TIMES FOOD AWARD • PURE VEG & JAIN',img:'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1200&auto=format&fit=crop',desc:'Maharaja thalis served on silver — dal-baati-churma, laal maas, ker-sangri and ghevar. Folk musicians at dinner.',hours:'12:00 — 15:00 • 19:00 — 23:00 DAILY',menu:[['Maharaja Veg Thali (14 bowls)','— ₹1,450'],['Laal Maas + Bajra Roti','— ₹895'],['Ghevar + Rabri, Kesar Kulfi','— ₹450']]},
{name:'Tandoor Nights — Mughlai & North Indian',stars:'★ BEST NORTH INDIAN — JAIPUR 2025',img:'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=1200&auto=format&fit=crop',desc:'Live clay tandoors, Agra petha counter and Old Delhi kebabs. Butter chicken that regulars cross cities for.',hours:'12:30 — 23:30 • DAILY',menu:[['Old Delhi Tandoori Platter','— ₹1,150'],['Dal Bukhara (24-hr) + Naan','— ₹650'],['Shahi Tukda, Matka Kulfi','— ₹380']]},
{name:'Sagar — Goan & Kerala Coastal',stars:'★ COASTAL CUISINE • TODDY & FENI BAR',img:'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop',desc:'Goan prawn curry, Kerala appam-stew and Mangalorean neer dosa on a palm terrace. Sunset vindaloys included.',hours:'11:00 — 23:00 • DAILY',menu:[['Goan Prawn Curry + Poi','— ₹950'],['Kerala Appam + Ishtu','— ₹620'],['Bebinca + Coconut Ice-cream','— ₹420']]}];

const GAL=[
{src:'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=900&auto=format&fit=crop',cat:'palace',cap:'Amber Palace facade',tall:true},
{src:'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=900&auto=format&fit=crop',cat:'food',cap:'Royal Rajasthani thali'},
{src:'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=900&auto=format&fit=crop',cat:'palace',cap:'Goa private beach'},
{src:'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=900&auto=format&fit=crop',cat:'rooms',cap:'Heritage Haveli Room'},
{src:'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=900&auto=format&fit=crop',cat:'culture',cap:'Rajput royal wedding',tall:true},
{src:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=900&auto=format&fit=crop',cat:'palace',cap:'Taj Mahal at sunrise'},
{src:'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=900&auto=format&fit=crop',cat:'food',cap:'Samosa & chai hour'},
{src:'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=900&auto=format&fit=crop',cat:'rooms',cap:'Royal Rajput Suite'}];

const TESTIS=[
{n:'Ananya & Vikram Mehta',w:'Mumbai — Udaipur Lake Palace, 4 nights',img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',t:'We came for our anniversary and the team arranged a private boat aarti on the lake. The thali at Rajwada is worth the trip alone. Staff remembered every small preference.'},
{n:'Rajesh Iyer',w:'Bengaluru — Goa Pool Villa',img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',t:'Best family Diwali ever — kids in the pool, my parents at Ayurveda, and I finally slept. UPI checkout in 30 seconds. Truly world-class yet so Indian at heart.'},
{n:'Sarah & James Collins',w:'London — Golden Triangle Tour',img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',t:'From Taj sunrise to tiger safari, everything was seamless. Visa help, drivers, veg food for Sarah — flawless. Jaipur palace felt like living inside history.'},
{n:'Kavya Reddy',w:'Hyderabad — Kerala Houseboat',img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',t:'Drifting the backwaters with our own chef — appam for breakfast, karimeen for dinner. The Shirodhara cured my migraine. Already booked Jaisalmer for winter.'}];

const FAQS=[
['What is the best time to visit Rajasthan & palaces?','October to March is perfect (15–28°C). Monsoon (July–Sep) is lush and 25% cheaper in Kerala & Goa. Summer (Apr–Jun) is best for hill + houseboat escapes — we offer summer tariffs.'],
['Do you help foreign guests with visa & travel?','Yes! We provide invitation letters, FRRO guidance, airport pickup, domestic flight + Vande Bharat bookings and verified drivers. Write to namaste@rajvilas.in with passport + dates.'],
['Is Jain / pure-veg / halal food available?','Absolutely. Separate pure-veg & Jain kitchens, satvik thalis, halal-certified non-veg, and vegan menus. All kitchens FSSAI 5-star. Inform us in booking notes.'],
['What payment modes do you accept?','UPI (GPay/PhonePe/Paytm), RuPay/Visa/Mastercard, netbanking, and pay-at-hotel. No prepayment needed; international cards accepted with 0% surcharge.'],
['Can you arrange weddings & events?','300+ weddings a year! 300–1200 guests, baraat with elephants/camels, pandits of all traditions, sangeet stage, fireworks. Packages from ₹12 lakh. Talk to our shaadi team.']];

const PROPS=[
{n:'Jaipur — Pink City Palace',d:'MI Road • 2 km from Hawa Mahal',t:'Flagship: 180 rooms, 2 restaurants, rooftop pool. Railway station 10 min, airport 25 min.',img:'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1400&auto=format&fit=crop',chips:['✈ Airport — 25 min','🚂 Station — 10 min','🕌 Hawa Mahal — 8 min']},
{n:'Udaipur — Lake Pichola Palace',d:'Lake Pichola • 5 min from City Palace',t:'Lake-facing suites, ghat yoga, wedding lawns for 1000 guests. Airport 30 min.',img:'https://images.unsplash.com/photo-1568495286055-117eb4db0b74?q=80&w=1400&auto=format&fit=crop',chips:['🛶 Lake boat — 1 min','🏰 City Palace — 5 min','✈ Airport — 30 min']},
{n:'Goa — Beach Resort',d:'Morjim Beach • North Goa',t:'Private beach, 60 villas, cashew grove spa. Airport 60 min, valet + scooter rental.',img:'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1400&auto=format&fit=crop',chips:['🏖️ Private beach — 0 min','🍹 Tito’s Lane — 15 min','✈ Airport — 60 min']},
{n:'Kerala — Backwater Retreat',d:'Alleppey • Punnamada Finishing Point',t:'12 houseboats + 40 cottages, Ayurveda hospital wing. Kochi airport 75 min.',img:'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1400&auto=format&fit=crop',chips:['🛶 Houseboat jetty — 2 min','🌿 Ayurveda centre — in-house','✈ Kochi — 75 min']}];

const FESTS=[
{e:'Diwali Royal Week',d:'8–14 Nov • All palaces',c:'Lakshmi puja, fireworks, 30% off',i:'🪔'},
{e:'Pushkar Fair Stay',d:'20–27 Nov • Jaipur + Camp',c:'Camel fair + desert night',i:'🐪'},
{e:'Christmas in Goa',d:'24–31 Dec • Goa',c:'Beach gala, vindaloo feast',i:'🎄'},
{e:'Jaipur Literature Fest',d:'Jan • Jaipur',c:'Author teas, heritage walks',i:'📚'},
{e:'Holi Gulal Festival',d:'Mar • Jaipur & Udaipur',c:'Phoolon wali Holi, thandai',i:'🎨'},
{e:'Onam Sadhya — Kerala',d:'Aug • Kerala',c:'26-dish banana-leaf feast',i:'🌾'}];

/* PRELOADER */
let pct=0;const bar=document.getElementById('loaderBar'),pctEl=document.getElementById('loaderPct');
const loadInt=setInterval(()=>{pct=Math.min(100,pct+Math.random()*16);bar.style.width=pct+'%';pctEl.textContent=Math.floor(pct)+'% • '+(LANG==='HI'?'कृपया प्रतीक्षा करें':'Loading shahi experience...');if(pct>=100){clearInterval(loadInt);setTimeout(()=>document.getElementById('preloader').classList.add('done'),350);}},120);

/* CURSOR / NAV */
const dot=document.getElementById('cursorDot'),ring=document.getElementById('cursorRing');
document.addEventListener('mousemove',e=>{dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px';ring.style.left=e.clientX+'px';ring.style.top=e.clientY+'px';});
const nav=document.getElementById('mainNav');
window.addEventListener('scroll',()=>{const y=scrollY;nav.classList.toggle('nav-scrolled',y>40);document.getElementById('scrollProgress').style.width=(y/(document.body.scrollHeight-innerHeight)*100)+'%';const tt=document.getElementById('toTop');if(y>700){tt.classList.remove('hidden');tt.classList.add('flex');}else{tt.classList.add('hidden');tt.classList.remove('flex');}const p=document.getElementById('parallaxImg');if(p)p.style.transform=`translateY(${y*0.08-140}px)`;},{passive:true});
function toggleMenu(open){const m=document.getElementById('mobileMenu');const show=open===undefined?m.classList.contains('hidden'):open;m.classList.toggle('hidden',!show);document.body.style.overflow=show?'hidden':'';}
document.getElementById('menuBtn').onclick=()=>toggleMenu(true);
function tickClock(){try{document.getElementById('istTime').textContent=new Intl.DateTimeFormat('en-IN',{hour:'2-digit',minute:'2-digit',timeZone:'Asia/Kolkata'}).format(new Date())+' IST';}catch(e){}}
setInterval(tickClock,1000);tickClock();

/* MARQUEE */
const mq=['INCREDIBLE INDIA AWARD 2026','BEST HERITAGE HOTEL — WORLD TRAVEL AWARDS','7 PALACES • 540 SUITES','TIMES FOOD AWARD — RAJWADA','TOP 10 AYURVEDA RETREATS — CONDÉ NAST','300+ ROYAL WEDDINGS A YEAR'];
const mqHTML=mq.map(m=>`<span>${m}</span><span class="text-saffron">❁</span>`).join('');
document.getElementById('marqueeA').innerHTML=mqHTML;document.getElementById('marqueeB').innerHTML=mqHTML;

/* HERO */
const slides=document.querySelectorAll('.hero-slide'),dots=document.querySelectorAll('.hero-dot');
const heroData=[
{k:'RAJASTHAN • EST. 1948 • पधारो सा',t:'Live Like Royalty,<br><em class="gold-text not-italic font-medium">From Jaipur to Kerala</em>',s:'7 heritage palaces, 540 royal suites, private lakes, Goan beaches & Kerala backwaters — with Ayurvedic spas, tiger safaris and Michelin-grade Indian kitchens.'},
{k:'UDAIPUR • GOA • KERALA • 540 SUITES',t:'Palaces, Beaches<br><em class="gold-text not-italic font-medium">& Backwaters</em>',s:'Sunrise yoga on lake ghats, barefoot susegad lunches in Goa, houseboat dinners in Alleppey. One booking, many Indias.'},
{k:'GOLDEN TRIANGLE • TAJ • RANTHAMBORE',t:'Taj at Dawn,<br><em class="gold-text not-italic font-medium">Tigers at Dusk</em>',s:'Vande Bharat to Agra, private Taj photographer, jeep safari in Ranthambore — all arranged by our yatra desk.'}];
let hi=0,heroTimer;
function heroGo(i){hi=(i+3)%3;slides.forEach((s,k)=>s.classList.toggle('active',k===hi));dots.forEach((d,k)=>{d.className='hero-dot h-[3px] rounded-full transition-all '+(k===hi?'w-12 bg-gold':'w-8 bg-white/30');});const T=document.getElementById('heroTitle'),K=document.getElementById('heroKicker'),S=document.getElementById('heroSub');[T,K,S].forEach(el=>el.style.opacity=0);setTimeout(()=>{K.textContent=heroData[hi].k;T.innerHTML=heroData[hi].t;S.textContent=heroData[hi].s;[T,K,S].forEach(el=>el.style.opacity=1);},350);restartHero();}
function heroNext(){heroGo(hi+1)}function heroPrev(){heroGo(hi-1)}
function restartHero(){clearInterval(heroTimer);heroTimer=setInterval(()=>heroGo(hi+1),6500);}restartHero();

/* DATES */
function parseD(v){return v?new Date(v+'T12:00:00'):null;}
function nights(){if(!state.checkin||!state.checkout)return 0;return Math.round((state.checkout-state.checkin)/86400000);}
function fmtD(d){return d?d.toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short'}):'—';}
function syncDates(){const n=nights();document.getElementById('checkinDay').textContent=state.checkin?fmtD(state.checkin):'—';document.getElementById('checkoutDay').textContent=state.checkout?fmtD(state.checkout):'—';document.getElementById('nightsLabel').textContent=n>0?`${n} night${n>1?'s':''} • ${fmtD(state.checkin)} → ${fmtD(state.checkout)}`:'Select dates to see nights';document.getElementById('mNightsInfo').innerHTML=n>0?`✓ <strong>${n} night${n>1?'s':''}</strong> — ${fmtD(state.checkin)} → ${fmtD(state.checkout)} • ${state.adults} adults, ${state.roomsN} room${state.roomsN>1?'s':''} • ${state.dest.split('—')[0].trim()}`:'Select dates to continue';document.getElementById('mDestLabel').textContent=state.dest;document.getElementById('staySummary').innerHTML=n>0?`Your yatra: <strong class="mx-1">${n} night${n>1?'s':''}</strong> ${fmtD(state.checkin)} → ${fmtD(state.checkout)} • ${state.dest.split('—')[0].trim()}`:`No dates selected — <button onclick="document.getElementById('checkin').focus()" class="underline text-golddark">add dates for live totals</button>`;renderRooms();renderModalRooms();}
let fp1,fp2;
try{fp1=flatpickr('#checkin',{minDate:'today',dateFormat:'Y-m-d',onChange:s=>{state.checkin=parseD(s[0]?fp1.formatDate(s[0],'Y-m-d'):null);if(fp2&&state.checkin)fp2.set('minDate',new Date(state.checkin.getTime()+86400000));syncDates();}});fp2=flatpickr('#checkout',{minDate:'today',dateFormat:'Y-m-d',onChange:s=>{state.checkout=parseD(s[0]?fp2.formatDate(s[0],'Y-m-d'):null);syncDates();}});}catch(e){const c1=document.getElementById('checkin'),c2=document.getElementById('checkout');c1.type='date';c2.type='date';c1.onchange=()=>{state.checkin=parseD(c1.value);syncDates()};c2.onchange=()=>{state.checkout=parseD(c2.value);syncDates()};}
document.getElementById('destSelect').onchange=e=>{state.dest=e.target.value;syncDates();showToast('Destination set','Showing live rates for '+state.dest+'.','gold');};
function setDestination(name){state.dest=name;document.getElementById('destSelect').value=name;syncDates();document.getElementById('home').scrollIntoView({behavior:'smooth'});showToast('Namaste!','Destination set to '+name+'. Now pick your dates.','gold');}
function toggleGuests(force){const p=document.getElementById('guestPanel');const show=force!==undefined?force:p.classList.contains('hidden');p.classList.toggle('hidden',!show);}
document.getElementById('guestBtn').onclick=e=>{e.stopPropagation();toggleGuests();};
document.addEventListener('click',e=>{if(!e.target.closest('#guestPanel')&&!e.target.closest('#guestBtn'))toggleGuests(false);});
function stepGuest(k,d){const lim={adults:[1,6],children:[0,4],rooms:[1,4]};const map={adults:'adults',children:'children',rooms:'roomsN'};const key=map[k];state[key]=Math.min(lim[k][1],Math.max(lim[k][0],state[key]+d));['cAdults','mAdults'].forEach(id=>document.getElementById(id).textContent=state.adults);['cChildren','mChildren'].forEach(id=>document.getElementById(id).textContent=state.children);['cRooms','mRooms'].forEach(id=>document.getElementById(id).textContent=state.roomsN);document.getElementById('guestSummary').textContent=`${state.adults} Adults · ${state.children} Child · ${state.roomsN} Room`;syncDates();}
function searchAvailability(){if(!state.checkin||!state.checkout||nights()<=0){showToast('Select dates','Please choose check-in and check-out dates first.','warn');document.getElementById('checkin').focus();return;}document.getElementById('rooms').scrollIntoView({behavior:'smooth'});showToast('Availability — '+nights()+' nights','Shubh! 6 signature stays open in '+state.dest.split('—')[0].trim()+' from '+fmt(ROOMS[0].price)+'/night.','gold');renderRooms();}

/* DESTINATIONS */
function renderDests(){document.getElementById('destGrid').innerHTML=DESTS.map(d=>`
<div class="dest-card reveal visible group bg-white rounded-xl overflow-hidden border border-sand shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 cursor-pointer" onclick="setDestination('${d.t}')">
<div class="h-[260px] overflow-hidden relative"><img src="${d.img}" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition duration-[1.2s]" alt="${d.t}">
<div class="dest-overlay absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span class="absolute top-4 left-4 bg-white/95 text-maroon text-[10px] tracking-[0.2em] px-3 py-1.5 rounded-full font-semibold">${d.temp}</span>
<span class="absolute top-4 right-4 bg-maroon/85 text-goldlight text-[10px] tracking-[0.15em] px-3 py-1.5 rounded-full hindi text-sm">${d.hindi}</span>
<span class="absolute bottom-4 left-4 text-white serif text-2xl leading-tight">${d.t.split('—')[0]}</span>
<span class="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-maroon group-hover:bg-gold transition">→</span></div>
<div class="p-5 flex items-center justify-between gap-3"><div><div class="text-[11px] tracking-[0.2em] text-stonewarm">BEST ${d.best}</div><div class="text-sm text-ink/60 font-light mt-1">${d.desc}</div></div><div class="text-right whitespace-nowrap"><div class="text-[10px] text-gray-400 tracking-widest">FROM</div><div class="serif text-xl text-maroon font-semibold">${fmt(d.from)}</div></div></div>
</div>`).join('');}

/* ROOMS */
let roomFilter='all';
document.querySelectorAll('.room-filter').forEach(b=>b.onclick=()=>{document.querySelectorAll('.room-filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');roomFilter=b.dataset.filter;renderRooms();});
function roomTotal(r){const n=nights()||1;return r.price*n*state.roomsN;}
function renderRooms(){const grid=document.getElementById('roomsGrid');const list=ROOMS.filter(r=>roomFilter==='all'||r.cat===roomFilter);
grid.innerHTML=list.map((r,i)=>`
<article class="room-card reveal visible bg-[#FFFBF2] rounded-xl overflow-hidden border border-sand shadow-[0_20px_50px_-25px_rgba(61,11,22,.35)] hover:shadow-[0_35px_70px_-20px_rgba(61,11,22,.45)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col">
<div class="relative h-[260px] overflow-hidden cursor-pointer" onclick="openRoom(${r.id})"><img src="${r.img}" loading="lazy" class="w-full h-full object-cover" alt="${r.name}">
<div class="absolute inset-0 bg-gradient-to-t from-[#1A050B]/55 to-transparent"></div>
<span class="absolute top-4 left-4 bg-gold text-maroon text-[10px] tracking-[0.18em] px-3 py-1.5 rounded-full font-semibold">${r.badge}</span>
${i%2===0?'<span class="absolute top-4 right-4 bg-white/90 backdrop-blur text-[11px] px-3 py-1.5 rounded-full flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>Only 2 left</span>':''}
<span class="absolute bottom-4 left-4 text-white/90 text-[11px] tracking-[0.22em]">${r.catLabel} • ${r.size}</span></div>
<div class="p-6 flex flex-col flex-1">
<h3 class="serif text-[25px] leading-tight text-maroon cursor-pointer hover:text-golddark transition" onclick="openRoom(${r.id})">${r.name}</h3>
<div class="text-[13px] text-gray-500 mt-1.5 font-light">${r.bed} • ${r.guests} • ${r.floor}</div>
<div class="flex items-center gap-2 mt-2 text-sm"><span class="text-gold text-xs">★★★★★</span><span class="text-gray-400 text-xs">${r.rating}</span></div>
<div class="flex flex-wrap gap-1.5 mt-4">${r.amen.slice(0,3).map(a=>`<span class="text-[11px] bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">${a}</span>`).join('')}<span class="text-[11px] text-golddark px-2 py-1">+${r.amen.length-3} more</span></div>
<div class="flex items-end justify-between mt-5 pt-5 border-t border-sand"><div><span class="serif text-[26px] text-maroon font-semibold">${fmt(r.price)}</span><span class="text-xs text-gray-400"> / night</span>${nights()>0?`<div class="text-xs text-golddark font-medium mt-0.5">${fmt(roomTotal(r))} total • ${nights()}n • ${state.roomsN}r</div>`:`<div class="text-xs text-gray-400 mt-0.5">Select dates for total</div>`}</div>
<div class="flex gap-2"><button onclick="openRoom(${r.id})" class="px-4 py-2.5 text-[11px] tracking-[0.18em] border border-maroon/20 rounded hover:bg-maroon hover:text-white transition">DETAILS</button><button onclick="quickBook(${r.id})" class="btn-gold px-4 py-2.5 text-[11px] tracking-[0.18em] rounded">BOOK</button></div></div>
</div></article>`).join('');}
function quickBook(id){state.roomId=id;openBooking();}
function openRoom(id){const r=ROOMS.find(x=>x.id===id);if(!r)return;document.getElementById('rmImg').src=r.img;document.getElementById('rmBadge').textContent=r.badge;document.getElementById('rmCat').textContent=r.catLabel+' • '+r.size.toUpperCase();document.getElementById('rmName').textContent=r.name;document.getElementById('rmMeta').innerHTML=`<span>🛏 ${r.bed}</span><span>◍ ${r.guests}</span><span>⬔ ${r.floor}</span>`;document.getElementById('rmRating').textContent=r.rating;document.getElementById('rmDesc').textContent=r.desc;document.getElementById('rmAmen').innerHTML=r.amen.map(a=>`<span class="text-[12px] bg-cream border border-gold/50 text-maroon/80 rounded-full px-3.5 py-1.5">✓ ${a}</span>`).join('');document.getElementById('rmPrice').textContent=fmt(r.price);document.getElementById('rmTotal').innerHTML=nights()>0?`Total for your yatra<br><strong class="serif text-2xl text-maroon">${fmt(roomTotal(r))}</strong><br>${nights()} nights • ${state.roomsN} room(s)<br><span class="text-xs text-gray-400">${state.dest}</span>`:`Add dates in the<br>booking bar for total`;document.getElementById('rmBookBtn').onclick=()=>{closeRoom();quickBook(r.id);};const m=document.getElementById('roomModal');m.classList.remove('hidden');m.classList.add('flex');document.body.style.overflow='hidden';}
function closeRoom(){const m=document.getElementById('roomModal');m.classList.add('hidden');m.classList.remove('flex');document.body.style.overflow='';}

/* CURRENCY */
document.getElementById('currencySelect').onchange=e=>{currency=e.target.value;renderRooms();renderModalRooms();renderSpa();renderOffers();renderDests();updateBreakdown();showToast('Currency updated','All rates now shown in '+currency+'.','gold');};

/* BOOKING */
function openBooking(){syncModalDates();const m=document.getElementById('bookingModal');m.classList.remove('hidden');m.classList.add('flex');document.body.style.overflow='hidden';goStep(state.step||1);}
function closeBooking(){const m=document.getElementById('bookingModal');m.classList.add('hidden');m.classList.remove('flex');document.body.style.overflow='';}
function syncModalDates(){const f=d=>d?d.toISOString().slice(0,10):'';document.getElementById('mCheckin').value=f(state.checkin);document.getElementById('mCheckout').value=f(state.checkout);const t=new Date().toISOString().slice(0,10);document.getElementById('mCheckin').min=t;document.getElementById('mCheckout').min=t;syncDates();}
document.getElementById('mCheckin').onchange=e=>{state.checkin=parseD(e.target.value);syncDates();updateBreakdown();};
document.getElementById('mCheckout').onchange=e=>{state.checkout=parseD(e.target.value);syncDates();updateBreakdown();};
function mStep(k,d){const lim={adults:[1,6],children:[0,4],roomsN:[1,4]};state[k]=Math.min(lim[k][1],Math.max(lim[k][0],state[k]+d));document.getElementById('mAdults').textContent=state.adults;document.getElementById('mChildren').textContent=state.children;document.getElementById('mRooms').textContent=state.roomsN;document.getElementById('cAdults').textContent=state.adults;document.getElementById('cChildren').textContent=state.children;document.getElementById('cRooms').textContent=state.roomsN;document.getElementById('guestSummary').textContent=`${state.adults} Adults · ${state.children} Child · ${state.roomsN} Room`;syncDates();updateBreakdown();}
function renderModalRooms(){const n=nights()||1;document.getElementById('mRoomsList').innerHTML=ROOMS.map(r=>`
<label class="flex items-center gap-4 bg-white border rounded-lg p-3 cursor-pointer transition hover:border-gold ${state.roomId===r.id?'border-gold ring-2 ring-gold/30':'border-gray-200'}"><input type="radio" name="mroom" ${state.roomId===r.id?'checked':''} onchange="state.roomId=${r.id};renderModalRooms();updateBreakdown()" class="accent-[#6B1A2A] w-4 h-4"><img src="${r.img}" class="w-20 h-16 object-cover rounded" alt=""><div class="flex-1 min-w-0"><div class="font-medium text-[15px] truncate">${r.name}</div><div class="text-xs text-gray-500">${r.size} • ${r.guests}</div></div><div class="text-right"><div class="serif text-xl text-maroon font-semibold">${fmt(r.price)}</div><div class="text-[11px] text-gray-400">/night • ${fmt(r.price*n*state.roomsN)} total</div></div></label>`).join('');
document.getElementById('mExtrasList').innerHTML=EXTRAS.map(x=>`
<label class="flex items-center gap-4 bg-white border rounded-lg p-4 cursor-pointer transition hover:border-gold ${state.extras[x.id]?'border-gold ring-2 ring-gold/25':'border-gray-200'}"><input type="checkbox" ${state.extras[x.id]?'checked':''} onchange="state.extras['${x.id}']=this.checked;renderModalRooms();updateBreakdown()" class="accent-[#6B1A2A] w-4 h-4"><div class="flex-1"><div class="font-medium text-[15px]">${x.name}</div><div class="text-xs text-gray-500">${x.desc}</div></div><div class="serif text-lg text-maroon whitespace-nowrap">+${fmt(x.price)}</div></label>`).join('');}
function extrasTotal(){const n=nights()||1;let t=0;EXTRAS.forEach(x=>{if(!state.extras[x.id])return;if(x.per==='night')t+=x.price*n;else if(x.per==='night-person')t+=x.price*n*(state.adults+state.children*0.5);else if(x.per==='stay-person')t+=x.price*(state.adults+state.children*0.5);else t+=x.price;});return Math.round(t);}
function calcTotals(){const n=nights()||1;const room=ROOMS.find(r=>r.id===state.roomId);const roomT=room.price*n*state.roomsN;const ext=extrasTotal();const sub=roomT+ext;let disc=0,code='';if(state.promo==='DIWALI30'){disc=Math.round(sub*0.30);code='DIWALI30 (−30%)';}else if(state.promo==='INDIA25'){disc=Math.round(sub*0.25);code='INDIA25 (−25%)';}const tax=Math.round((sub-disc)*0.12);return{n,room,roomT,ext,sub,disc,code,tax,total:sub-disc+tax};}
function applyPromo(){const v=document.getElementById('promoInput').value.trim().toUpperCase();const msg=document.getElementById('promoMsg');if(v==='DIWALI30'||v==='INDIA25'){state.promo=v;msg.innerHTML=`<span class="text-emerald-600 font-medium">✓ ${v} applied — ${v==='DIWALI30'?'30% Diwali discount! 🪔':'25% discount applied.'}</span>`;}else if(!v){state.promo=null;msg.textContent='';}else{state.promo=null;msg.innerHTML='<span class="text-red-500">Code not recognised — try DIWALI30.</span>';}updateBreakdown();}
function updateBreakdown(){const t=calcTotals();const el=document.getElementById('priceBreakdown');if(!el)return;el.innerHTML=`<div class="text-[11px] tracking-[0.3em] text-golddark mb-3">PRICE SUMMARY • ${state.dest.split('—')[0].trim().toUpperCase()} • ${t.n} NIGHT${t.n>1?'S':''}</div><div class="flex justify-between py-1.5"><span class="text-gray-600">${t.room.name} × ${t.n}n × ${state.roomsN}r</span><strong>${fmt(t.roomT)}</strong></div><div class="flex justify-between py-1.5"><span class="text-gray-600">Extras & yatra services</span><strong>${fmt(t.ext)}</strong></div>${t.disc?`<div class="flex justify-between py-1.5 text-emerald-600"><span>Promo ${t.code}</span><strong>−${fmt(t.disc)}</strong></div>`:''}<div class="flex justify-between py-1.5"><span class="text-gray-600">Taxes & GST (12%)</span><strong>${fmt(t.tax)}</strong></div><div class="flex justify-between pt-3 mt-2 border-t-2 border-maroon/10"><span class="serif text-xl text-maroon">Total at hotel</span><span class="serif text-2xl text-maroon font-semibold">${fmt(t.total)}</span></div><div class="text-[11px] text-gray-400 mt-1">No prepayment • UPI / cards / pay at hotel • free cancellation 48h</div>`;}
function goStep(s){state.step=Math.min(5,Math.max(1,s));document.querySelectorAll('.book-step').forEach(el=>el.classList.toggle('hidden',+el.dataset.step!==state.step));document.querySelectorAll('#stepDots .step-dot').forEach(d=>{const n=+d.dataset.s;d.classList.toggle('active',n===state.step);d.classList.toggle('done',n<state.step);});document.getElementById('bookProgress').style.width=(state.step/4*100)+'%';document.getElementById('backBtn').classList.toggle('invisible',state.step===1||state.step===5);document.getElementById('bookNav').style.display=state.step===5?'none':'flex';document.getElementById('nextBtn').innerHTML=state.step===4?'CONFIRM RESERVATION ✓':'CONTINUE →';if(state.step===2||state.step===3)renderModalRooms();if(state.step===4)updateBreakdown();}
function bookNav(d){if(d>0){if(state.step===1&&nights()<=0){showToast('Dates required','Please select valid check-in / check-out dates.','warn');return;}if(state.step===4){const name=document.getElementById('gName').value.trim(),email=document.getElementById('gEmail').value.trim();if(!name||!email||(!email.includes('@')&&email.length<8)){showToast('Details missing','Please add your name and valid email/mobile.','warn');return;}if(!document.getElementById('agreeChk').checked){showToast('One tick needed','Please accept the cancellation policy.','warn');return;}const btn=document.getElementById('nextBtn');btn.innerHTML='PROCESSING… 🪷';btn.disabled=true;setTimeout(()=>{btn.disabled=false;const t=calcTotals();const ref='RV-'+Math.random().toString(36).slice(2,8).toUpperCase();document.getElementById('confirmRef').textContent=ref;document.getElementById('confirmSummary').innerHTML=`<strong>${t.room.name}</strong> • ${state.dest}<br>${t.n} nights • ${state.roomsN} room(s)<br>${fmtD(state.checkin)} → ${fmtD(state.checkout)} • ${state.adults} adults, ${state.children} children<br>Guest: ${name} • ${email}<br><strong>Total at hotel: ${fmt(t.total)}</strong>${t.disc?' (incl. '+state.promo+')':''}`;goStep(5);showToast('Booking confirmed','Reference '+ref+' — Shubh Yatra!','gold');},1400);return;}}goStep(state.step+d);}

/* EXPERIENCES/SPAS/OFFERS */
document.getElementById('expGrid').innerHTML=EXPS.map(e=>`
<div class="reveal group bg-white rounded-xl overflow-hidden border border-sand shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 cursor-pointer" onclick="showToast('${e.t}','${e.d}. Reserve via concierge chat.','gold')">
<div class="h-[240px] overflow-hidden relative"><img src="${e.img}" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition duration-[1.2s]" alt="${e.t}"><span class="absolute top-4 left-4 bg-maroon/85 backdrop-blur text-goldlight text-[10px] tracking-[0.2em] px-3 py-1.5 rounded-full">${e.tag}</span><span class="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-maroon group-hover:bg-gold transition">→</span></div>
<div class="p-6"><h3 class="serif text-2xl text-maroon">${e.t}</h3><p class="text-sm text-gray-500 font-light mt-1.5">${e.d}</p></div></div>`).join('');
const SPAS=[{n:'Abhyanga + Shirodhara (Kerala)',t:'90 min',p:4999,d:'Warm Kottakal oils, deep calm'},{n:'Rajasthan Royal Rose Ritual',t:'60 min',p:3499,d:'Rose, saffron, hot stones'},{n:'Couples Himalayan Salt Therapy',t:'120 min',p:8999,d:'Private suite, kahwa ritual'}];
function renderSpa(){document.getElementById('spaList').innerHTML=SPAS.map((s,i)=>`<button onclick="bookSpa(${i})" class="w-full text-left bg-white border border-gray-200 hover:border-gold rounded-lg p-4 flex items-center gap-4 transition group"><span class="serif text-2xl text-gold w-8">0${i+1}</span><span class="flex-1"><span class="font-medium">${s.n}</span><br><span class="text-xs text-gray-500">${s.t} • ${s.d}</span></span><span class="serif text-xl text-maroon font-semibold">${fmt(s.p)}</span><span class="w-9 h-9 rounded-full border group-hover:bg-maroon group-hover:text-white transition flex items-center justify-center">→</span></button>`).join('');document.getElementById('spaHeroPrice').textContent=fmt(SPAS[0].p);}
function bookSpa(i=0){showToast('Ayurveda reserved (demo)',SPAS[i].n+' — '+SPAS[i].t+'. Our vaidya will call to confirm.','gold');}
const OFFERS=[
{t:'Diwali Royal Escape',off:'−30%',code:'DIWALI30',img:'https://images.unsplash.com/photo-1605027990121-cbae9e0642df?q=80&w=800&auto=format&fit=crop',d:'3+ nights, all palaces. Fireworks gala, Lakshmi puja, mithai box & 30% off with UPI.',p:'from '+fmt(10150)+'/night',valid:'Valid till 14 Nov'},
{t:'Udaipur Honeymoon',off:'−20%',code:'INDIA25',img:'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',d:'Lake-view suite, private boat dinner, couple spa & cake. Complimentary upgrade.',p:'from '+fmt(25999)+'/night',valid:'Valid till Dec'},
{t:'Kerala Monsoon Heal',off:'−25%',code:'INDIA25',img:'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',d:'5-night Ayurveda package: doctor consult, daily therapy, yoga & satvik meals.',p:'5 nights '+fmt(89000),valid:'Jun – Sep'}];
function renderOffers(){document.getElementById('offersGrid').innerHTML=OFFERS.map((o,i)=>`
<div class="reveal bg-white/[0.06] border border-gold/30 rounded-xl overflow-hidden backdrop-blur hover:border-gold hover:-translate-y-1.5 transition-all duration-500">
<div class="h-[200px] relative overflow-hidden"><img src="${o.img}" loading="lazy" class="w-full h-full object-cover" alt="${o.t}"><span class="absolute top-4 left-4 bg-gradient-to-r from-saffron to-gold text-white text-sm font-bold px-4 py-1.5 rounded-full">${o.off}</span><span class="absolute bottom-4 left-4 bg-black/50 backdrop-blur text-[11px] tracking-widest px-3 py-1 rounded-full">${o.valid}</span></div>
<div class="p-6"><h3 class="serif text-2xl">${o.t}</h3><p class="text-white/60 text-sm font-light mt-2 leading-relaxed">${o.d}</p><div class="flex items-center justify-between mt-5"><div><div class="text-[11px] tracking-widest text-white/50">CODE: <span class="text-goldlight font-semibold">${o.code}</span></div><div class="text-goldlight font-medium mt-0.5">${o.p}</div></div><button onclick="claimOffer('${o.code}')" class="bg-gold text-maroon px-6 py-3 rounded text-[11px] tracking-[0.2em] font-bold hover:bg-white transition">CLAIM →</button></div></div></div>`).join('');}
function claimOffer(code){state.promo=code;document.getElementById('promoInput').value=code;openBooking();goStep(3);applyPromo();showToast('Offer applied','Code '+code+' added — complete booking to save!','gold');}

/* DINING */
let diningIdx=0;
function switchDining(i){diningIdx=i;document.querySelectorAll('.dining-tab').forEach((b,k)=>b.classList.toggle('active',k===i));const d=DINING[i];document.getElementById('diningImg').src=d.img;document.getElementById('diningName').textContent=d.name;document.getElementById('diningStars').textContent=d.stars;document.getElementById('diningDesc').textContent=d.desc;document.getElementById('diningHours').textContent=d.hours;document.getElementById('diningMenu').innerHTML=d.menu.map(m=>`<div class="flex justify-between gap-4 border-b border-white/10 pb-3"><span class="text-white/85 font-light">${m[0]}</span><span class="text-goldlight whitespace-nowrap">${m[1]}</span></div>`).join('');}
function reserveTable(){const d=document.getElementById('tableDate').value||'this weekend';showToast('Table reserved (demo)',DINING[diningIdx].name.split('—')[0].trim()+' • '+d+' • '+document.getElementById('tableTime').value+' • '+document.getElementById('tableGuests').value+'. WhatsApp confirmation sent!','gold');}

/* GALLERY */
let galFilter='all',lbList=[],lbIdx=0;
function renderGallery(){const list=GAL.filter(g=>galFilter==='all'||g.cat===galFilter);lbList=list;document.getElementById('galleryGrid').innerHTML=list.map((g,i)=>`<div class="relative rounded-lg overflow-hidden group cursor-pointer img-zoom ${g.tall?'row-span-2':''}" onclick="openLightbox(${i})"><img src="${g.src}" loading="lazy" class="w-full h-full object-cover min-h-full" alt="${g.cap}"><div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition"></div><div class="absolute bottom-3 left-3 right-3 text-white text-sm opacity-0 group-hover:opacity-100 transition flex justify-between items-center"><span>${g.cap}</span><span class="w-8 h-8 rounded-full bg-gold text-maroon flex items-center justify-center">⤢</span></div></div>`).join('');}
function filterGallery(f){galFilter=f;document.querySelectorAll('.gal-filter').forEach(b=>b.classList.toggle('active',b.textContent.toLowerCase().includes(f)||(f==='all'&&b.textContent==='ALL')));renderGallery();}
function openLightbox(i){lbIdx=i;updLb();const m=document.getElementById('lightbox');m.classList.remove('hidden');m.classList.add('flex');document.body.style.overflow='hidden';}
function updLb(){const g=lbList[lbIdx];document.getElementById('lbImg').src=g.src;document.getElementById('lbCap').textContent=g.cap;document.getElementById('lbCount').textContent=(lbIdx+1)+' / '+lbList.length;}
function lbMove(d){lbIdx=(lbIdx+d+lbList.length)%lbList.length;updLb();}
function closeLightbox(){const m=document.getElementById('lightbox');m.classList.add('hidden');m.classList.remove('flex');document.body.style.overflow='';}

/* TESTIMONIALS */
let ti=0;
function renderTesti(){document.getElementById('testiTrack').innerHTML=TESTIS.map(t=>`<div class="w-full shrink-0 px-2"><div class="bg-white border border-sand rounded-xl p-8 md:p-10 shadow-lg max-w-3xl mx-auto"><div class="text-gold tracking-widest">★★★★★</div><p class="serif italic text-xl md:text-2xl text-maroon leading-relaxed mt-4">"${t.t}"</p><div class="flex items-center justify-center gap-4 mt-6"><img src="${t.img}" class="w-12 h-12 rounded-full object-cover border-2 border-gold" alt=""><div class="text-left"><div class="font-medium">${t.n}</div><div class="text-xs text-gray-500">${t.w}</div></div></div></div></div>`).join('');document.getElementById('testiDots').innerHTML=TESTIS.map((_,i)=>`<button onclick="testiGo(${i})" class="tdot h-2 rounded-full transition-all ${i===0?'w-8 bg-gold':'w-2 bg-gray-300'}"></button>`).join('');}
function testiGo(i){ti=(i+TESTIS.length)%TESTIS.length;document.getElementById('testiTrack').style.transform=`translateX(-${ti*100}%)`;document.querySelectorAll('.tdot').forEach((d,k)=>{d.className=`tdot h-2 rounded-full transition-all ${k===ti?'w-8 bg-gold':'w-2 bg-gray-300'}`;});}
function testiMove(d){testiGo(ti+d);}
setInterval(()=>testiGo(ti+1),7000);

/* PROPERTIES */
let propIdx=0;
function renderProps(){document.getElementById('propTabs').innerHTML=PROPS.map((p,i)=>`<button onclick="selectProperty(${i})" class="px-4 py-2 rounded-full text-[11px] tracking-[0.15em] backdrop-blur transition ${i===propIdx?'bg-gold text-maroon font-bold':'bg-black/50 text-white hover:bg-black/70'}">${p.n.split('—')[0].trim().toUpperCase()}</button>`).join('');
document.getElementById('distList').innerHTML=PROPS.map((p,i)=>`<button onclick="selectProperty(${i})" class="w-full text-left p-4 rounded-lg border transition ${i===propIdx?'bg-maroon text-white border-maroon shadow-lg':'bg-white border-gray-200 hover:border-gold'}"><div class="font-medium">${p.n}</div><div class="text-xs opacity-70 mt-0.5">${p.d}</div></button>`).join('');updProp();}
function selectProperty(i){propIdx=i;renderProps();}
function updProp(){const p=PROPS[propIdx];document.getElementById('propImg').src=p.img;document.getElementById('propPin').textContent='★ RAJVILĀS '+p.n.split('—')[0].trim().toUpperCase();document.getElementById('distDetail').innerHTML=`<div class="font-medium text-maroon">${p.n}</div><div class="text-ink/60 mt-1 font-light">${p.t}</div><button onclick="setDestination('${p.n.includes('Jaipur')?'Jaipur — Pink City Palace':p.n.includes('Udaipur')?'Udaipur — Lake Pichola Palace':p.n.includes('Goa')?'Goa — Beach Resort & Spa':'Kerala — Backwater Retreat'}')" class="mt-3 text-[11px] tracking-[0.2em] text-golddark underline underline-offset-4">BOOK THIS PALACE →</button>`;document.getElementById('propChips').innerHTML=p.chips.map(c=>`<span class="bg-white/95 backdrop-blur rounded-full px-4 py-2 text-xs shadow">${c}</span>`).join('');}

/* FESTIVALS */
document.getElementById('festStrip').innerHTML=FESTS.map(f=>`<div class="min-w-[260px] bg-white rounded-xl border border-sand p-6 hover:shadow-xl hover:-translate-y-1 transition cursor-pointer" onclick="showToast('${f.e}','${f.d} — ${f.c}. Packages from ${fmt(9999)}/night. Chat to reserve!','gold')"><div class="text-4xl">${f.i}</div><div class="font-medium text-maroon mt-3">${f.e}</div><div class="text-xs text-golddark tracking-widest mt-1">${f.d}</div><div class="text-sm text-ink/60 font-light mt-2">${f.c}</div></div>`).join('');

/* FAQ */
document.getElementById('faqList').innerHTML=FAQS.map((f,i)=>`<div class="faq-item bg-white border border-sand rounded-xl overflow-hidden ${i===0?'open':''}"><button onclick="this.parentElement.classList.toggle('open')" class="w-full text-left p-5 flex items-center justify-between gap-4"><span class="font-medium text-maroon">${f[0]}</span><span class="faq-icon w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center shrink-0">+</span></button><div class="faq-answer"><p class="px-5 pb-5 text-[15px] font-light text-ink/65 leading-relaxed">${f[1]}</p></div></div>`).join('');

/* COUNTDOWN - Diwali Nov 8 2026 */
const diwali=new Date('2026-11-08T18:00:00+05:30').getTime();
function tickCd(){let d=diwali-Date.now();if(d<0)d=0;const dd=Math.floor(d/86400000),hh=Math.floor(d%86400000/3600000),mm=Math.floor(d%3600000/60000),ss=Math.floor(d%60000/1000);document.getElementById('cdD').textContent=String(dd).padStart(2,'0');document.getElementById('cdH').textContent=String(hh).padStart(2,'0');document.getElementById('cdM').textContent=String(mm).padStart(2,'0');document.getElementById('cdS').textContent=String(ss).padStart(2,'0');}
setInterval(tickCd,1000);tickCd();

/* REVEAL + COUNTERS */
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');e.target.querySelectorAll&&0;}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
const cObs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const el=e.target,target=+el.dataset.target;let c=0;const step=Math.max(1,Math.floor(target/60));const iv=setInterval(()=>{c+=step;if(c>=target){c=target;clearInterval(iv);}el.textContent=c;},30);cObs.unobserve(el);}}),{threshold:.5});
document.querySelectorAll('.counter').forEach(el=>cObs.observe(el));

/* DOSHA QUIZ */
let doshaStep=0,doshaScore={Vata:0,Pitta:0,Kapha:0};
const DOSHA_Q=[{q:'Your body frame is…',o:['Slim, light (Vata)','Medium, athletic (Pitta)','Broad, sturdy (Kapha)'],k:['Vata','Pitta','Kapha']},{q:'In stress, you become…',o:['Anxious & restless','Irritable & sharp','Withdrawn & slow'],k:['Vata','Pitta','Kapha']},{q:'Your sleep is…',o:['Light, broken','Moderate, warm','Deep, long'],k:['Vata','Pitta','Kapha']}];
function openDosha(){doshaStep=0;doshaScore={Vata:0,Pitta:0,Kapha:0};renderDosha();const m=document.getElementById('doshaModal');m.classList.remove('hidden');m.classList.add('flex');}
function closeDosha(){const m=document.getElementById('doshaModal');m.classList.add('hidden');m.classList.remove('flex');}
function renderDosha(){const b=document.getElementById('doshaBody');if(doshaStep>=DOSHA_Q.length){const top=Object.entries(doshaScore).sort((a,c)=>c[1]-a[1])[0][0];const rec={Vata:['Abhyanga Warm Oil Ritual',' grounding • sesame + ashwagandha'],Pitta:['Rose + Saffron Cooling Ritual',' soothing • rose + sandalwood'],Kapha:['Himalayan Salt Detox Ritual',' energising • eucalyptus + steam']}[top];b.innerHTML=`<div class="text-center bg-white border border-gold/40 rounded-xl p-6"><div class="text-5xl">🌿</div><div class="text-[11px] tracking-[0.3em] text-emerald mt-3">YOUR DOSHA</div><div class="serif text-4xl text-maroon">${top}</div><p class="text-sm text-ink/60 font-light mt-2">Recommended: <strong>${rec[0]}</strong>${rec[1]}</p><div class="flex gap-3 mt-5"><button onclick="closeDosha();bookSpa(0)" class="flex-1 bg-maroon text-white py-3 rounded text-xs tracking-[0.2em] hover:bg-gold hover:text-maroon transition">BOOK THIS RITUAL</button><button onclick="openDosha()" class="px-5 py-3 border rounded text-xs tracking-[0.2em] hover:border-maroon">RETAKE</button></div></div>`;return;}const q=DOSHA_Q[doshaStep];b.innerHTML=`<div class="text-xs tracking-[0.25em] text-stonewarm">QUESTION ${doshaStep+1} / 3</div><div class="serif text-2xl text-maroon mt-2">${q.q}</div><div class="space-y-2 mt-4">${q.o.map((o,i)=>`<button onclick="answerDosha(${i})" class="w-full text-left bg-white border border-gray-200 hover:border-gold rounded-lg p-4 transition hover:shadow">${o}</button>`).join('')}</div><div class="h-1.5 bg-gray-100 rounded-full mt-5 overflow-hidden"><div class="h-full bg-gradient-to-r from-emerald-500 to-gold transition-all" style="width:${doshaStep/3*100}%"></div></div>`;}
function answerDosha(i){doshaScore[DOSHA_Q[doshaStep].k[i]]++;doshaStep++;renderDosha();}

/* VIDEO */
function openVideo(){document.getElementById('videoFrame').src='https://www.youtube.com/embed/35npVaFGHMY?autoplay=1&rel=0';const m=document.getElementById('videoModal');m.classList.remove('hidden');m.classList.add('flex');}
function closeVideo(){document.getElementById('videoFrame').src='';const m=document.getElementById('videoModal');m.classList.add('hidden');m.classList.remove('flex');}

/* CHAT */
let chatOpen=false;
const CHIPS=['Best price? 💰','Taj tour? 🕌','Tiger safari? 🐯','Visa help? 🛂','Diwali offer? 🪔'];
function toggleChat(force){chatOpen=force!==undefined?force:!chatOpen;const p=document.getElementById('chatPanel');p.classList.toggle('hidden',!chatOpen);p.classList.toggle('flex',chatOpen);if(chatOpen&&!document.getElementById('chatBody').children.length){botSay('Namaste! 🙏 I am <b>Priya</b> from Rajvilās. Planning Jaipur, Udaipur, Goa or Kerala? Ask me anything — prices, Taj tours, safaris, visas, weddings!');document.getElementById('chatChips').innerHTML=CHIPS.map(c=>`<button onclick="chipAsk('${c}')" class="text-xs bg-white border border-sand rounded-full px-3 py-1.5 hover:border-gold hover:bg-gold/10 transition">${c}</button>`).join('');}}
function chipAsk(c){document.getElementById('chatInput').value=c;sendChat();}
function addMsg(html,bot=true){const b=document.getElementById('chatBody');const d=document.createElement('div');d.className=bot?'chat-msg-bot rounded-2xl rounded-tl-sm p-3 shadow-sm':'bg-maroon text-white rounded-2xl rounded-tr-sm p-3 ml-8';d.innerHTML=html;b.appendChild(d);b.scrollTop=b.scrollHeight;return d;}
function botSay(t){addMsg(t,true);}
function sendChat(){const inp=document.getElementById('chatInput');const v=inp.value.trim();if(!v)return;addMsg(v,false);inp.value='';const tp=addMsg('<span class="typing"><span></span> <span></span> <span></span></span>',true);setTimeout(()=>{tp.remove();botSay(botReply(v));},900);}
function botReply(v){v=v.toLowerCase();
if(/price|cost|rate|tariff|rent/.test(v))return `Our heritage rooms start <b>${fmt(11500)}/night</b> (Jaisalmer) and Jaipur from <b>${fmt(14500)}</b> incl. breakfast + yoga. Suites ${fmt(32500)}+. Share dates & destination — I'll check live! Use <b>DIWALI30</b> for 30% off 🪔`;
if(/taj|agra/.test(v))return `Taj Sunrise Tour <b>${fmt(3500)}</b> — 4 AM pickup, Vande Bharat option, private guide + photographer + Mehtab Bagh chai. 2 hrs from Jaipur. Shall I add it to your booking? 🕌`;
if(/tiger|safari|ranthambore/.test(v))return `Ranthambore jeep safari <b>${fmt(7500)}/person</b> incl. park fees + naturalist. 3 hrs from Jaipur, pickup 5 AM / 2 PM. Oct–Jun best. Want me to reserve seats? 🐯`;
if(/visa|foreigner|passport/.test(v))return `Yes! We help foreign guests — invitation letter, FRRO, e-visa guidance, airport pickup & drivers. Email passport + dates to <b>namaste@rajvilas.in</b> 🛂`;
if(/diwali|offer|discount|promo|coupon/.test(v))return `🪔 Diwali Sale is LIVE — <b>DIWALI30 = 30% off</b> + extra 10% on UPI! 3+ nights, all palaces, till 14 Nov. Tap <b>Offers → Claim</b> or tell me dates!`;
if(/wedding|shaadi|marriage/.test(v))return `We host 300+ weddings/yr! 300–1200 guests, baraat elephants, pandits, sangeet stage. Packages from <b>₹12 lakh</b>. Share city + guests + month? 💒`;
if(/spa|ayurveda|massage|yoga/.test(v))return `Our Kerala Ayurveda spa: Abhyanga+Shirodhara <b>${fmt(4999)}</b>, yoga free daily 6:30 AM 🧘. Try <b>Find Your Dosha</b> in Ayurveda section — 30 seconds!`;
if(/food|veg|jain|halal|restaurant/.test(v))return `Pure-veg + Jain kitchens, halal non-veg & vegan menus. Must-try: Maharaja Thali ${fmt(1450)} at Rajwada 🍛. Any allergy? We'll note it!`;
if(/book|reserve|availab/.test(v))return `Wonderful! Tap <b>RESERVE</b> (top-right), pick destination + dates. No prepayment, free cancellation 48h, pay via UPI at hotel. Need help with dates?`;
if(/namaste|hello|hi|hey/.test(v))return `Namaste! 🙏 Kaise madad kar sakti hoon? Tell me — <b>which city, how many nights, budget?</b> I'll suggest the perfect palace.`;
if(/goa|beach/.test(v))return `Goa villas from <b>${fmt(16500)}/night</b> — private beach, pool villas ${fmt(42000)}. Best Nov–Feb 🌊. Want beach-facing or pool villa?`;
if(/kerala|houseboat|backwater/.test(v))return `Kerala houseboats from <b>${fmt(19800)}</b> — private chef, sundeck, all meals 🌴. 5-night Ayurveda package ${fmt(89000)}. Kochi pickup included!`;
if(/jaipur|udaipur|jaisalmer/.test(v))return `Great choice! ${v.includes('jaipur')?'Jaipur':v.includes('udaipur')?'Udaipur':'Jaisalmer'} is magical Oct–Mar. Fort dinners, bazaars, folk nights included. Share dates for live rates? 🏰`;
return `Dhanyavaad! For "<i>${v.slice(0,60)}</i>" — our human concierge will WhatsApp you shortly on +91 98290 00000. Meanwhile, try asking: <b>price? Taj? safari? Diwali offer?</b> 🙏`;}

/* TOASTS / MISC */
function showToast(title,msg,type='gold'){const box=document.getElementById('toasts');const d=document.createElement('div');const border=type==='warn'?'border-red-300':type==='gold'?'border-gold':'border-emerald-300';const icon=type==='warn'?'⚠️':type==='gold'?'🪷':'✓';d.className=`toast-in bg-white rounded-xl shadow-2xl border-l-4 ${border} border border-gray-100 p-4 flex gap-3`;d.innerHTML=`<div class="w-9 h-9 rounded-full ${type==='warn'?'bg-red-50':'bg-cream'} flex items-center justify-center shrink-0">${icon}</div><div class="min-w-0"><div class="font-medium text-[15px]">${title}</div><div class="text-[13px] text-gray-500 font-light leading-snug mt-0.5">${msg}</div></div>`;box.appendChild(d);setTimeout(()=>{d.style.opacity='0';d.style.transform='translateX(30px)';d.style.transition='.4s';setTimeout(()=>d.remove(),400);},4200);}
function joinCircle(){const e=document.getElementById('ctaEmail').value.trim();if(!e||(!e.includes('@')&&e.length<8)){showToast('Hmm...','Please enter a valid email or mobile number.','warn');return;}showToast('Welcome to the Circle!','Member code RV-CIRCLE10 sent — extra 10% off your first stay.','gold');document.getElementById('ctaEmail').value='';}
function subscribeNews(){const e=document.getElementById('newsEmail').value.trim();if(!e||(!e.includes('@')&&e.length<8)){showToast('Hmm...','Please enter a valid email or mobile.','warn');return;}showToast('Subscribed!','Festival presales & palace stories coming your way.','gold');document.getElementById('newsEmail').value='';}
function toggleLang(){LANG=LANG==='EN'?'HI':'EN';document.getElementById('langBtn').innerHTML=LANG==='EN'?'EN / <span class="hindi">हिं</span>':'<span class="hindi">हिं</span> / EN';showToast(LANG==='HI'?'भाषा बदली':'Language changed',LANG==='HI'?'अब आप हिंदी में ब्राउज़ कर रहे हैं। पधारो सा! 🙏':'You are now browsing in English. Welcome!','gold');}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeBooking();closeRoom();closeVideo();closeLightbox();closeDosha();}});

/* INIT */
renderDests();renderRooms();renderSpa();renderOffers();renderGallery();renderTesti();renderProps();switchDining(0);syncDates();
setTimeout(()=>showToast('🪔 Diwali Sale — 30% off','Use code DIWALI30 on all 7 palaces till 14 Nov. Extra 10% on UPI!','gold'),5000);