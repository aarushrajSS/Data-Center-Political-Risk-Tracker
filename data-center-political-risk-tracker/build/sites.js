// v2 dataset, snapshot 2026-10-13. States reused from data.js.
const { states } = require('./states.js');

// pc = power confirmed (source of power named and contracted/energized). power: E/C/N as before.
const projects = [
  { id:"corz-denton", name:"Denton", owner:"CORZ", dev:"Core Scientific", tenant:"CoreWeave", st:"TX", lat:33.21, lon:-97.13, mw:260, power:"E", pc:true, note:"~260 MW billing (Jul 2026)." },
  { id:"corz-dalton", name:"Dalton", owner:"CORZ", dev:"Core Scientific", tenant:"CoreWeave / neocloud (AMD credit support)", st:"GA", lat:34.77, lon:-84.97, mw:295, power:"C", pc:true, note:"Existing mining interconnect. ~175 MW CoreWeave (~30 billing), completion early 2027; ~120 MW neocloud for 2H27." },
  { id:"corz-musk", name:"Muskogee", owner:"CORZ", dev:"Core Scientific", tenant:"CoreWeave / AMD", st:"OK", lat:35.75, lon:-95.37, mw:152, power:"E", pc:true, note:"~70 MW billing; ~82 MW AMD direct for 2H27." },
  { id:"corz-marble", name:"Marble", owner:"CORZ", dev:"Core Scientific", tenant:"CoreWeave", st:"NC", lat:35.17, lon:-83.93, mw:65, power:"E", pc:true, note:"~65 MW billing." },
  { id:"corz-austin", name:"Austin", owner:"CORZ", dev:"Core Scientific", tenant:"CoreWeave", st:"TX", lat:30.27, lon:-97.74, mw:20, power:"E", pc:true, note:"~20 MW billing." },
  { id:"corz-pecos", name:"Pecos", owner:"CORZ", dev:"Core Scientific", tenant:"AMD", st:"TX", lat:31.42, lon:-103.49, mw:185, power:"C", pc:true, note:"AMD direct, 1H27. Existing mining load; added load still passes through the ERCOT audit." },
  { id:"corz-hunt", name:"Hunt County", owner:"CORZ", dev:"Core Scientific", tenant:"AMD", st:"TX", lat:33.12, lon:-96.08, mw:110, power:"N", pc:false, note:"AMD direct, 1H28. Needs new large-load approval while ERCOT is paused." },
  { id:"corz-auburn", name:"Auburn", owner:"CORZ", dev:"Core Scientific", tenant:"Neocloud (AMD credit support)", st:"AL", lat:32.61, lon:-85.48, mw:32, power:"C", pc:true, note:"1H27." },
  { id:"wulf-lm", name:"Lake Mariner", owner:"WULF", dev:"TeraWulf", tenant:"Fluidstack (Google backstop), Core42", st:"NY", lat:43.36, lon:-78.60, mw:500, power:"C", pc:true, note:"NYISO. 102 MW revenue-generating (Jul). CB-4 first rent late Sep 2026; CB-5 energizing Jan 2027. ~$1.7B capex remaining. Permitted buildings exempt from EO 62." },
  { id:"wulf-cay", name:"Lake Hawkeye / Cayuga", owner:"WULF", dev:"TeraWulf", tenant:"None", st:"NY", lat:42.53, lon:-76.53, mw:320, power:"N", pc:false, note:"Pending permits; frozen by the NY moratorium." },
  { id:"wulf-abe", name:"Abernathy JV", owner:"WULF", dev:"Fluidstack JV (WULF selling)", tenant:"Fluidstack (Google backstop)", st:"TX", lat:33.83, lon:-101.84, mw:168, power:"C", pc:true, note:"SPP grid. WULF agreed in Jul 2026 to sell its 50.1% for ~$530M (payments through Apr 2027); JV notes leave WULF." },
  { id:"wulf-ky", name:"Hawesville", owner:"WULF", dev:"TeraWulf", tenant:"Anthropic", st:"KY", lat:37.90, lon:-86.75, mw:401, power:"N", pc:false, note:"Former Century Aluminum smelter; utility path not disclosed. 2H27 first capacity, full early 2028. $500M 364-day bridge; $3.5B takeout not closed. Beshear EO bars rate increases tied to data centers." },
  { id:"apld-pf1", name:"Polaris Forge 1 (Ellendale)", owner:"APLD", dev:"Applied Digital", tenant:"CoreWeave", st:"ND", lat:46.00, lon:-98.53, mw:550, power:"C", pc:true, note:"175 MW live (Bldg 1 Oct 2025; Bldg 2 ph. 1 Jun 2026). Bldg 4 (150 MW) lease moves to a CoreWeave sub only once that sub is investment grade." },
  { id:"apld-pf2", name:"Polaris Forge 2 (Harwood)", owner:"APLD", dev:"Applied Digital", tenant:"IG hyperscaler", st:"ND", lat:46.98, lon:-96.88, mw:200, power:"C", pc:true, note:"$5B/15-yr. First building 2026, full 200 MW 2027. Annexation fight and county pauses nearby." },
  { id:"apld-pf3", name:"Polaris Forge 3", owner:"APLD", dev:"Applied Digital", tenant:"IG hyperscaler", st:"ND", lat:47.3, lon:-100.6, mw:300, power:"C", pc:true, note:"~430 MW grid-connected; first operations Aug 2027. Site not named (marker approximate)." },
  { id:"apld-df1", name:"Delta Forge 1 (Boyce)", owner:"APLD", dev:"Applied Digital", tenant:"IG hyperscaler", st:"LA", lat:31.39, lon:-92.67, mw:300, power:"N", pc:false, note:"$7.5B/15-yr; first operations 2027. Power source not disclosed." },
  { id:"hut-rb", name:"River Bend", owner:"HUT", dev:"Hut 8", tenant:"Fluidstack / Anthropic (Google backstop)", st:"LA", lat:30.79, lon:-91.38, mw:245, power:"C", pc:true, note:"Entergy Louisiana; 330 MW utility capacity under construction. First data hall Q2 2027." },
  { id:"hut-bp", name:"Beacon Point", owner:"HUT", dev:"Hut 8", tenant:"AA- or better tenant", st:"TX", lat:27.80, lon:-97.60, mw:704, power:"C", pc:true, note:"1 GW AEP Texas interconnection agreement. Energization Q1 2027 (inside the audit window); first hall Q3 2027; Phase 2 halls Q2 2028, Phase 2 financing not arranged." },
  { id:"cifr-bl", name:"Barber Lake", owner:"CIFR", dev:"Cipher Digital", tenant:"Fluidstack (Google backstop)", st:"TX", lat:32.39, lon:-100.86, mw:300, power:"C", pc:true, note:"Commencement expected Sep 2026; tenant in partial occupancy. Google backstop only effective after rent commencement and capped." },
  { id:"cifr-bp", name:"Black Pearl (Wink)", owner:"CIFR", dev:"Cipher Digital", tenant:"AWS", st:"TX", lat:31.75, lon:-103.16, mw:300, power:"C", pc:true, note:"Delivery began Aug 2026, two months early; rent commenced. Phase II under way." },
  { id:"cifr-sr", name:"Stingray", owner:"CIFR", dev:"Cipher Digital", tenant:"Not leased", st:"TX", lat:32.32, lon:-102.55, mw:100, power:"C", pc:true, note:"Front-of-meter; fully funded by the 6.000% notes. No tenant yet." },
  { id:"keel-pc", name:"Panther Creek", owner:"KEEL", dev:"Keel", tenant:"Leasing", st:"PA", lat:40.85, lon:-75.88, mw:300, power:"E", pc:true, note:"Grid interconnection in place." },
  { id:"keel-sh", name:"Sharon", owner:"KEEL", dev:"Keel", tenant:"Leasing", st:"PA", lat:41.23, lon:-80.49, mw:110, power:"E", pc:true, note:"Existing interconnection." },
  { id:"keel-ml", name:"Moses Lake", owner:"KEEL", dev:"Keel", tenant:"Leasing", st:"WA", lat:47.13, lon:-119.28, mw:120, power:"E", pc:true, note:"Existing interconnection." },
  { id:"clsk-sv", name:"Sandersville", owner:"CLSK", dev:"CleanSpark", tenant:"High-IG tech co. (reported Meta)", st:"GA", lat:32.98, lon:-82.81, mw:175, power:"N", pc:false, note:"20-yr NNN, $6.6B. Deliveries from Q4 2027. Utility and power arrangement not disclosed. Missed milestones can trigger rent abatement or termination." },
  { id:"clsk-tx", name:"Sealy / Brazoria", owner:"CLSK", dev:"CleanSpark", tenant:"LOI only", st:"TX", lat:29.4, lon:-95.9, mw:885, power:"N", pc:false, note:"LOI, no lease. ERCOT-paused." },
  { id:"nbis-vin", name:"Vineland", owner:"NBIS", dev:"Nebius", tenant:"Nebius (serves Microsoft)", st:"NJ", lat:39.49, lon:-75.03, mw:300, power:"C", pc:true, note:"Behind-the-meter generation; NJ Fair Share Act applies." },
  { id:"nbis-ind", name:"Independence", owner:"NBIS", dev:"Nebius", tenant:"Nebius", st:"MO", lat:39.09, lon:-94.41, mw:1200, power:"N", pc:false, note:"City to rebuild a retired plant to serve it. Jackson Co. 180-day pause." },
  { id:"nbis-pa", name:"Pennsylvania AI factory", owner:"NBIS", dev:"Nebius", tenant:"Nebius", st:"PA", lat:40.6, lon:-77.6, mw:1200, power:"N", pc:false, note:"Site undisclosed (marker mid-state)." },
  { id:"nscale-ward", name:"Ward County", owner:"NSCALE", dev:"Nscale", tenant:"Not disclosed", st:"TX", lat:31.55, lon:-103.10, mw:200, power:"N", pc:false, note:"Power arrangement not disclosed; ERCOT audit applies." },
  { id:"nscale-nc", name:"Madison", owner:"NSCALE", dev:"Nscale", tenant:"Not disclosed", st:"NC", lat:36.39, lon:-79.96, mw:40, power:"E", pc:true, note:"Colocation retrofit." },
  { id:"iren-ch", name:"Childress", owner:"IREN", dev:"IREN", tenant:"IREN (serves Microsoft)", st:"TX", lat:34.43, lon:-100.20, mw:750, power:"E", pc:true, note:"750 MW energized site; $9.7B Microsoft cloud contract." },
  { id:"iren-sw", name:"Sweetwater", owner:"IREN", dev:"IREN", tenant:"Not disclosed", st:"TX", lat:32.47, lon:-100.41, mw:2000, power:"C", pc:false, note:"Substation energized but only 'conditional' Batch Zero status, still subject to the audit. 300 MW targeted Q4 2027." },
  { id:"riot-rock", name:"Rockdale", owner:"RIOT", dev:"Riot", tenant:"Frontier AI lab (reported Anthropic) + AMD", st:"TX", lat:30.66, lon:-97.00, mw:241, power:"E", pc:true, note:"Existing interconnection. 96 MW Dec 2027, 191 MW Jun 2028. $573M bridge matures Dec 31, 2026, a year before rent; IG backstop not finalized." },
  { id:"riot-cor", name:"Corsicana", owner:"RIOT", dev:"Riot", tenant:"LOI only", st:"TX", lat:32.09, lon:-96.47, mw:1300, power:"N", pc:false, note:"Non-binding LOI; new load exposed to ERCOT audit." },
  { id:"crwv-lan", name:"Lancaster", owner:"CRWV", dev:"CoreWeave", tenant:"CoreWeave", st:"PA", lat:40.04, lon:-76.31, mw:300, power:"N", pc:false, note:"$6B plan; power path not disclosed." },
  { id:"crwv-ken", name:"Kenilworth", owner:"CRWV", dev:"CoreWeave", tenant:"CoreWeave", st:"NJ", lat:40.68, lon:-74.29, mw:250, power:"C", pc:false, note:"Under construction; power source not disclosed. Fair Share Act applies." },
  { id:"crwv-elk", name:"Elk Grove Village", owner:"CRWV", dev:"Elk Grove Village Property", tenant:"CoreWeave", st:"IL", lat:42.00, lon:-87.97, mw:100, power:"C", pc:true, note:"Established ComEd cluster. MW not disclosed (100 assumed)." },
  { id:"crwv-rva", name:"Digital Drive (Richmond)", owner:"CRWV", dev:"Blue Owl / PowerHouse", tenant:"CoreWeave", st:"VA", lat:37.54, lon:-77.43, mw:76, power:"C", pc:true, note:"15-yr, $2.94B. Ops 2027-28." },
  { id:"glxy-hel", name:"Helios (Galaxy)", owner:"GLXY", dev:"Galaxy", tenant:"CoreWeave", st:"TX", lat:33.62, lon:-100.84, mw:526, power:"C", pc:true, note:"800 MW approved by ERCOT before the pause. Ph. I 133 MW delivered, rent from Q2 2026; Ph. II 260 MW 1H27; Ph. III ~133 MW." },
  { id:"orcl-abi", name:"Stargate I (Abilene)", owner:"ORCL", dev:"Crusoe / Blue Owl", tenant:"Oracle", st:"TX", lat:32.45, lon:-99.73, mw:1200, power:"E", pc:true, note:"Operating and ramping." },
  { id:"orcl-fro", name:"Frontier (Shackelford)", owner:"ORCL", dev:"Vantage", tenant:"Oracle", st:"TX", lat:32.74, lon:-99.35, mw:1400, power:"N", pc:false, note:"Behind-the-meter gas microgrid; new air permits blocked by the TCEQ pause. Same fact pattern as Jupiter." },
  { id:"orcl-pw", name:"Lighthouse (Port Washington)", owner:"ORCL", dev:"Vantage", tenant:"Oracle", st:"WI", lat:43.39, lon:-87.88, mw:1000, power:"N", pc:false, note:"We Energies service contested: PSC collateral ruling ($7B+) under Oracle lawsuit." },
  { id:"orcl-mi", name:"Stargate Michigan (Saline)", owner:"ORCL", dev:"Related Digital / Blackstone", tenant:"Oracle", st:"MI", lat:42.17, lon:-83.78, mw:1400, power:"C", pc:true, note:"MPSC-approved DTE contract with storage." },
  { id:"orcl-nm", name:"Project Jupiter", owner:"ORCL", dev:"STACK (Blue Owl) / BorderPlex", tenant:"Oracle", st:"NM", lat:31.87, lon:-106.70, mw:2450, power:"N", pc:false, note:"FORCE MAJEURE notice sent Sep 24, 2026. Bloom fuel cells need the Green Chile gas pipeline (slipped to Feb 1, 2027 after two State Land Office denials) and an air permit (NM Supreme Court paused proceedings). 2028 target." },
  { id:"meta-hyp", name:"Hyperion", owner:"META", dev:"Meta / Blue Owl JV", tenant:"Meta", st:"LA", lat:32.42, lon:-91.76, mw:2000, power:"C", pc:true, note:"Entergy building three gas plants (~3 GW) by 2028." },
  { id:"meta-elp", name:"El Paso", owner:"META", dev:"Meta / GIP-HPS JV", tenant:"Meta", st:"TX", lat:31.90, lon:-106.35, mw:1000, power:"C", pc:true, note:"El Paso Electric (non-ERCOT) plus 366 MW onsite gensets that need TCEQ authorizations." }
];

// Leases: ann = annual rent $M. est = estimated at $1.8M/MW-yr (median of disclosed leases). q = "YYYYQn".
const R = 1.8;
const leases = [
  // CoreWeave at Core Scientific: $10.2B / 12 yr / 590 MW => $1.44M/MW-yr
  { site:"corz-denton", tenant:"CoreWeave", mw:260, ann:375, first:"2025Q1", full:"2026Q1", value:3750, term:12, src:"CORZ 8-K Feb 2025 ($10.2B/12-yr/590 MW)" },
  { site:"corz-dalton", tenant:"CoreWeave", mw:175, ann:252, first:"2026Q2", full:"2027Q1", value:3025, term:12, src:"CORZ Q2 FY26 deck" },
  { site:"corz-musk", tenant:"CoreWeave", mw:70, ann:101, first:"2025Q2", full:"2025Q4", value:1210, term:12, src:"CORZ Q2 FY26 deck" },
  { site:"corz-marble", tenant:"CoreWeave", mw:65, ann:94, first:"2025Q2", full:"2025Q4", value:1125, term:12, src:"CORZ Q2 FY26 deck" },
  { site:"corz-austin", tenant:"CoreWeave", mw:20, ann:29, first:"2025Q2", full:"2025Q3", value:345, term:12, src:"CORZ Q2 FY26 deck" },
  // AMD program: >$14B / 15 yr / 530 MW => $1.76M/MW-yr
  { site:"corz-pecos", tenant:"AMD", mw:185, ann:326, first:"2027Q1", full:"2027Q2", value:4890, term:15, src:"CORZ Q2 FY26 deck; AMD program >$14B" },
  { site:"corz-musk", tenant:"AMD", mw:82, ann:144, first:"2027Q3", full:"2027Q4", value:2165, term:15, src:"CORZ Q2 FY26 deck" },
  { site:"corz-hunt", tenant:"AMD", mw:110, ann:194, first:"2028Q1", full:"2028Q2", value:2905, term:15, src:"CORZ Q2 FY26 deck" },
  { site:"corz-dalton", tenant:"Neocloud (AMD-backed)", mw:120, ann:211, first:"2027Q3", full:"2027Q4", value:3170, term:15, src:"CORZ Q2 FY26 deck" },
  { site:"corz-auburn", tenant:"Neocloud (AMD-backed)", mw:32, ann:56, first:"2027Q1", full:"2027Q2", value:845, term:15, src:"CORZ Q2 FY26 deck" },
  // TeraWulf
  { site:"wulf-lm", tenant:"Core42", mw:60, ann:R*60, est:true, first:"2025Q3", full:"2025Q4", term:10, src:"WULF 10-Q: all Core42 leases commenced" },
  { site:"wulf-lm", tenant:"Fluidstack (Google)", mw:380, ann:R*380, est:true, first:"2026Q1", full:"2027Q1", term:10, src:"WULF 10-Q / Q2 call: CB-4 rent late Sep 2026, CB-5 Jan 2027" },
  { site:"wulf-ky", tenant:"Anthropic", mw:401, ann:950, first:"2027Q3", full:"2028Q1", value:19000, term:20, src:"WULF: $19B / 20-yr" },
  // Applied Digital
  { site:"apld-pf1", tenant:"CoreWeave", mw:400, ann:733, first:"2025Q4", full:"2027Q2", value:11000, term:15, src:"APLD: ~$11B CoreWeave, 400 MW" },
  { site:"apld-pf1", tenant:"CoreWeave", mw:150, ann:R*150, est:true, first:"2027Q4", full:"2028Q1", term:15, src:"APLD FY26 Q4: Bldg 4, 150 MW" },
  { site:"apld-pf2", tenant:"IG hyperscaler (unnamed)", mw:200, ann:333, first:"2026Q4", full:"2027Q4", value:5000, term:15, src:"APLD: $5B / 15-yr" },
  { site:"apld-pf3", tenant:"IG hyperscaler (unnamed)", mw:300, ann:500, first:"2027Q3", full:"2028Q2", value:7500, term:15, src:"APLD: $7.5B / 15-yr, ops Aug 2027" },
  { site:"apld-df1", tenant:"IG hyperscaler (unnamed)", mw:300, ann:500, first:"2027Q3", full:"2028Q2", value:7500, term:15, src:"APLD: $7.5B / 15-yr, ops 2027" },
  // Hut 8
  { site:"hut-rb", tenant:"Fluidstack / Anthropic (Google)", mw:245, ann:467, first:"2027Q2", full:"2027Q4", value:7000, term:15, src:"HUT: $7B / 15-yr; first hall Q2 2027" },
  { site:"hut-bp", tenant:"AA- tenant (unnamed)", mw:352, ann:653, first:"2027Q3", full:"2028Q1", value:9800, term:15, src:"HUT Q2 8-K: first hall Q3 2027" },
  { site:"hut-bp", tenant:"AA- tenant (unnamed)", mw:352, ann:653, first:"2028Q2", full:"2028Q4", value:9800, term:15, src:"HUT Q2 8-K: Phase 2 Q2 2028" },
  // Cipher
  { site:"cifr-bl", tenant:"Fluidstack (Google)", mw:300, ann:R*300, est:true, first:"2026Q3", full:"2027Q2", term:10, src:"CIFR 10-Q: commencement Sep 2026" },
  { site:"cifr-bp", tenant:"AWS", mw:300, ann:367, first:"2026Q3", full:"2027Q2", value:5500, term:15, src:"CIFR: $5.5B / 15-yr; rent from Aug 2026" },
  // CleanSpark
  { site:"clsk-sv", tenant:"High-IG tech (reported Meta)", mw:175, ann:330, first:"2027Q4", full:"2028Q4", value:6600, term:20, src:"CLSK: $6.6B / 20-yr; deliveries from Q4 2027" },
  // Riot
  { site:"riot-rock", tenant:"Anthropic (reported)", mw:191, ann:455, first:"2027Q4", full:"2028Q2", value:9100, term:20, src:"RIOT 8-K: 96 MW Dec 2027, 191 MW Jun 2028" },
  { site:"riot-rock", tenant:"AMD", mw:50, ann:70, first:"2026Q1", full:"2026Q4", value:700, term:10, src:"RIOT: 241 MW ≈ $9.8B total" },
  // Galaxy / CoreWeave
  { site:"glxy-hel", tenant:"CoreWeave", mw:133, ann:253, first:"2026Q2", full:"2026Q2", term:15, src:"GLXY: >$1B/yr for 526 MW" },
  { site:"glxy-hel", tenant:"CoreWeave", mw:260, ann:494, first:"2027Q1", full:"2027Q2", term:15, src:"GLXY: Ph. II 1H27" },
  { site:"glxy-hel", tenant:"CoreWeave", mw:133, ann:253, est:true, first:"2028Q1", full:"2028Q2", term:15, src:"GLXY: Ph. III timing not given" },
  { site:"crwv-rva", tenant:"CoreWeave", mw:76, ann:196, first:"2027Q3", full:"2028Q2", value:2940, term:15, src:"Bond marketing: $2.94B / 15-yr, ops 2027-28" },
  { site:"crwv-elk", tenant:"CoreWeave", mw:100, ann:R*100, est:true, first:"2027Q2", full:"2027Q4", term:15, src:"HY bond marketing (terms not public)" },
  // Oracle (all est.; Oracle 10-Q: $288B uncommenced, FQ2'27-FY29, 15-19 yr)
  { site:"orcl-abi", tenant:"Oracle", mw:1200, ann:R*1200, est:true, first:"2025Q3", full:"2026Q3", term:15, src:"Est.; operating" },
  { site:"orcl-fro", tenant:"Oracle", mw:1400, ann:R*1400, est:true, first:"2027Q1", full:"2027Q4", term:17, src:"Est." },
  { site:"orcl-mi", tenant:"Oracle", mw:1400, ann:R*1400, est:true, first:"2027Q3", full:"2028Q3", term:17, src:"Est." },
  { site:"orcl-pw", tenant:"Oracle", mw:1000, ann:R*1000, est:true, first:"2027Q4", full:"2028Q4", term:17, src:"Est." },
  { site:"orcl-nm", tenant:"Oracle", mw:2450, ann:R*2450, est:true, first:"2028Q2", full:"2028Q4", term:17, fm:true, src:"Est.; 2028 target. FM allows up to 3-yr deferral of full rent." },
  // Meta (est.)
  { site:"meta-hyp", tenant:"Meta", mw:2000, ann:R*2000, est:true, first:"2028Q1", full:"2029Q2", term:16, src:"Est.; RVG covers 16 yrs" },
  { site:"meta-elp", tenant:"Meta", mw:1000, ann:R*1000, est:true, first:"2028Q1", full:"2029Q1", term:16, src:"Est.; completion pushed to Feb 2029" }
];
leases.forEach(l => { l.ann = Math.round(l.ann); });

// Capex per MW ($M) by site; default 10. remaining override where disclosed.
const capex = { "wulf-lm": { perMW: 9.1, remaining: 1700, by: "2027Q1", src: "WULF Q2 call: ~$1.7B remaining" },
  "riot-rock": { perMW: 11.5, src: "RIOT: $2.1-2.3B for 191 MW" }, "clsk-sv": { perMW: 11, src: "CLSK: $10-12M/MW" },
  "wulf-ky": { perMW: 10, src: "WULF: ~$4B total" } };

const V = { sec8k:"SEC 8-K", sec10q:"SEC 10-Q", fwp:"SEC FWP", sec6k:"SEC 6-K", pr:"Issuer release", press:"Press only (144A / private)" };
const bonds = [
  { iss:"CRWV", inst:"9.250% Sr Notes due Jun 1, 2030", size:2000, kind:"Corp unsecured", exp:"ALL", ver:V.sec8k, d:"May 2025" },
  { iss:"CRWV", inst:"9.000% Sr Notes due Feb 1, 2031", size:1750, kind:"Corp unsecured", exp:"ALL", ver:V.sec8k, d:"Jul 2025" },
  { iss:"CRWV", inst:"9.750% Sr Notes due Oct 1, 2031", size:1750, kind:"Corp unsecured", exp:"ALL", ver:V.sec10q, d:"Apr 2026" },
  { iss:"CRWV", inst:"9.625% Sr Notes due Jul 15, 2032", size:1250, kind:"Corp unsecured", exp:"ALL", ver:V.pr, d:"Jun 2026" },
  { iss:"CRWV", inst:"8.500% Sr Notes due Jul 15, 2032 (€2.0B)", size:2300, kind:"Corp unsecured", exp:"ALL", ver:V.pr, d:"Jun 2026; USD approx." },
  { iss:"CRWV", inst:"1.75% Conv due Dec 1, 2031", size:2250, kind:"Convertible", exp:"ALL", ver:V.pr, d:"Dec 2025" },
  { iss:"CRWV", inst:"1.75% Conv due Oct 1, 2032", size:4000, kind:"Convertible", exp:"ALL", ver:V.sec10q, d:"Apr 2026" },
  { iss:"CRWV", inst:"2.875% Conv due Apr 1, 2033", size:3700, kind:"Convertible", exp:"ALL", ver:V.pr, d:"Sep 2026" },
  { iss:"CRWV", inst:"Digital Drive VA project HY (~9.25% talk)", size:1100, kind:"Secured project", exp:["crwv-rva"], ver:V.press, d:"Sep 2026" },
  { iss:"CRWV", inst:"Elk Grove Village IL project HY", size:850, kind:"Secured project", exp:["crwv-elk"], ver:V.press, d:"Marketed Jun 2026; final terms not public" },
  { iss:"ORCL", inst:"$25B Sr Notes: FRN '29, 4.55% '29, 4.95% '31, 5.35% '33, 5.70% '36, 6.55% '46, 6.70% '56, 6.85% '66", size:25000, kind:"Corp unsecured", exp:"ALL", ver:V.fwp, d:"Feb 2, 2026. S&P cut to BBB- Jul 9" },
  { iss:"ORCL", inst:"Project Jupiter construction loan (~20 banks), quoted ~89-91", size:18000, kind:"Loan", exp:["orcl-nm"], ver:V.press, d:"FM notice Sep 24, 2026", flag:"FM" },
  { iss:"ORCL", inst:"Related Digital Saline 7.5% project bonds (~19.5 yr)", size:14000, kind:"Secured project", exp:["orcl-mi"], ver:V.press, d:"Apr 2026; PIMCO ~$10B" },
  { iss:"ORCL", inst:"Vantage Frontier + Port Washington loans (S+~250)", size:38000, kind:"Loan", exp:["orcl-fro","orcl-pw"], ver:V.press, d:"JPM / MUFG" },
  { iss:"CORZ", inst:"7.750% Sr Secured Notes 2031 (Core Scientific Finance I)", size:3300, kind:"Secured project", exp:["corz-denton","corz-dalton","corz-musk","corz-marble","corz-austin"], ver:V.sec8k, d:"Apr 2026; CoreWeave lockbox" },
  { iss:"WULF", inst:"7.750% Sr Secured Notes 2030 (WULF Compute, Lake Mariner)", size:3200, kind:"Secured project", exp:["wulf-lm"], ver:V.sec8k, d:"Oct 2025; Google warrant pledge" },
  { iss:"WULF", inst:"Raylan Data $500M 364-day bridge (Hawesville), S+275", size:500, kind:"Loan", exp:["wulf-ky"], ver:V.sec8k, d:"Mar 13, 2026; matures ~Mar 2027", flag:"BRIDGE" },
  { iss:"WULF", inst:"Hawesville $3.5B HY bonds + loans (takeout, not closed)", size:3500, kind:"Secured project", exp:["wulf-ky"], ver:V.press, d:"Launched Jul 2026" },
  { iss:"WULF", inst:"Convertible notes (all series; $1.10B current)", size:2103, kind:"Convertible", exp:"ALL", ver:V.sec10q, d:"Jun 30, 2026 balance" },
  { iss:"WULF", inst:"Abernathy JV Sr Secured Notes (leave with JV sale)", size:1300, kind:"Secured project", exp:["wulf-abe"], ver:V.pr, d:"Dec 2025" },
  { iss:"APLD", inst:"9.250% Sr Secured Notes 2030 (APLD ComputeCo), issued at 97", size:2350, kind:"Secured project", exp:["apld-pf1"], ver:V.sec8k, d:"Nov 2025; ELN-02/03" },
  { iss:"APLD", inst:"6.750% Sr Secured Notes 2031 (ComputeCo 2)", size:2150, kind:"Secured project", exp:["apld-pf2"], ver:V.pr, d:"Mar 2026" },
  { iss:"APLD", inst:"7.000% Sr Secured Notes 2031 (ComputeCo 3)", size:1590, kind:"Secured project", exp:["apld-pf1"], ver:V.pr, d:"Jun 2026; Bldg 4" },
  { iss:"HUT", inst:"6.192% Sr Secured Notes 2042 (River Bend), BBB-", size:3250, kind:"Secured project", exp:["hut-rb"], ver:V.pr, d:"Apr 2026" },
  { iss:"HUT", inst:"6.129% Sr Secured Notes due Nov 30, 2042 (Beacon Point), Baa2", size:4250, kind:"Secured project", exp:["hut-bp"], ver:V.pr, d:"Jun 2026" },
  { iss:"CIFR", inst:"7.125% Sr Secured Notes 2030 (Cipher Compute, Barber Lake) + $333M add-on", size:1733, kind:"Secured project", exp:["cifr-bl"], ver:V.sec8k, d:"Nov 2025" },
  { iss:"CIFR", inst:"6.125% Sr Secured Notes 2031 (Black Pearl Compute)", size:2000, kind:"Secured project", exp:["cifr-bp"], ver:V.sec8k, d:"Feb 2026" },
  { iss:"CIFR", inst:"6.000% Sr Secured Notes 2031 (Stingray Compute), issued at 99.75", size:810, kind:"Secured project", exp:["cifr-sr"], ver:V.sec8k, d:"Jun 2026" },
  { iss:"CIFR", inst:"0.00% Conv due 2031", size:1300, kind:"Convertible", exp:"ALL", ver:V.sec10q, d:"Sep 2025" },
  { iss:"CIFR", inst:"1.75% Conv due 2030", size:172.5, kind:"Convertible", exp:"ALL", ver:V.sec10q, d:"May 2025" },
  { iss:"CIFR", inst:"0.00% Conv due Nov 1, 2032 (announced today)", size:850, kind:"Convertible", exp:"ALL", ver:V.sec8k, d:"Oct 13, 2026; funds Barber Lake equity" },
  { iss:"KEEL", inst:"1.250% Conv Sr Notes due Jan 15, 2032", size:400, kind:"Convertible", exp:"ALL", ver:V.sec8k, d:"Jun 2026" },
  { iss:"CLSK", inst:"0% Conv Sr Notes 2032", size:1150, kind:"Convertible", exp:"ALL", ver:V.press, d:"Nov 2025; total LTD $1.78B per 10-Q" },
  { iss:"NBIS", inst:"0.50% Conv due Feb 15, 2030 (accretes to 110%)", size:3000, kind:"Convertible", exp:"ALL", ver:V.pr, d:"Aug 2026" },
  { iss:"NBIS", inst:"4.50% Conv due Feb 15, 2034 (accretes to 125%)", size:2000, kind:"Convertible", exp:"ALL", ver:V.pr, d:"Aug 2026" },
  { iss:"NBIS", inst:"1.250% Conv due 2031", size:2588, kind:"Convertible", exp:"ALL", ver:V.sec6k, d:"Mar 2026" },
  { iss:"NBIS", inst:"2.625% Conv due 2033", size:1750, kind:"Convertible", exp:"ALL", ver:V.sec6k, d:"Mar 2026" },
  { iss:"NSCALE", inst:"Ward County DDTL (IG-rated)", size:1850, kind:"Loan", exp:["nscale-ward"], ver:V.pr, d:"Sep 2026" },
  { iss:"NSCALE", inst:"Madison NC DDTL (IG-rated)", size:1200, kind:"Loan", exp:["nscale-nc"], ver:V.pr, d:"Sep 2026" },
  { iss:"IREN", inst:"1.00% Conv Notes 2033", size:3000, kind:"Convertible", exp:"ALL", ver:V.sec8k, d:"May 2026" },
  { iss:"IREN", inst:"3.50% Conv Notes 2029 (+ other series)", size:null, kind:"Convertible", exp:"ALL", ver:V.sec8k, d:"Referenced in May 2026 8-K" },
  { iss:"RIOT", inst:"Morgan Stanley $573M DDTL bridge, S+275, matures Dec 31, 2026", size:573, kind:"Loan", exp:["riot-rock"], ver:V.sec8k, d:"Aug 2026", flag:"BRIDGE" },
  { iss:"GLXY", inst:"9.875% Sr Secured Notes due Aug 1, 2031 (Galaxy Helios DC II)", size:3507, kind:"Secured project", exp:["glxy-hel"], ver:V.pr, d:"Jul 2026" },
  { iss:"META", inst:"Beignet Investor 6.58% 2049 (Hyperion), A+", size:27300, kind:"Secured project", exp:["meta-hyp"], ver:V.press, d:"Oct 2025; 144A-for-life, not on EDGAR" },
  { iss:"META", inst:"Sopaipilla Investor (El Paso), A+ prelim", size:12300, kind:"Secured project", exp:["meta-elp"], ver:V.press, d:"Jul 2026; coupon not public" }
];

// Contract & financing red flags
const flags = [
  { sev:"crit", title:"Oracle force majeure: Project Jupiter (NM)", who:"ORCL · STACK/Blue Owl · ~$18B construction loan", date:"Sep 24, 2026", site:"orcl-nm",
    body:"Oracle sent a force majeure notice to the developer. If the power delay qualifies, Oracle can defer full rent for up to 3 years past the 2028 target, paying only development-stage rent and part of interest in the meantime. Cause: the Green Chile gas pipeline slipped to Feb 1, 2027 after two State Land Office right-of-way denials, and the fuel-cell air permit is stalled after the NM Supreme Court paused proceedings. The construction loan was quoted at ~89-91. Not an event of default." },
  { sev:"high", title:"Same fact pattern: Vantage Frontier (TX)", who:"ORCL · Vantage · $38B loan package", date:"Since Sep 21, 2026", site:"orcl-fro",
    body:"Frontier also runs on behind-the-meter gas. Texas's TCEQ permit pause blocks new air permits until the ERCOT audit ends (~mid-Dec). A Jupiter-style force majeure notice would be the obvious next step if the microgrid slips." },
  { sev:"high", title:"Port Washington collateral fight (WI)", who:"ORCL · Vantage · We Energies", date:"Pending", site:"orcl-pw",
    body:"Wisconsin PSC ruling could force Oracle to post $7B+ of collateral for dedicated plant and lines. Oracle sued and offered ~$700M. Oracle was cut to BBB- on Jul 9, the level that triggers stricter collateral rules." },
  { sev:"high", title:"Riot bridge matures before rent", who:"RIOT · Morgan Stanley $573M", date:"Matures Dec 31, 2026", site:"riot-rock",
    body:"Interim facility matures about a year before the first 96 MW starts paying rent (Dec 2027). The investment-grade credit backstop for the $1.7-2.1B takeout is not finalized." },
  { sev:"high", title:"TeraWulf Hawesville bridge and takeout", who:"WULF · Raylan Data $500M 364-day", date:"Bridge ~Mar 2027", site:"wulf-ky",
    body:"$3.5B HY/loan takeout launched Jul 2026, not closed. Power is now contracted (KY PSC approved a 482 MW Big Rivers/Kenergy contract Aug 21), but the bridge matures before first rent in 2H27 and Kentucky's Aug 6 executive order puts all cost on the operator." },
  { sev:"med", title:"Backstops start only at rent commencement", who:"CIFR · WULF · HUT (Google / Fluidstack)", date:"Ongoing", site:"cifr-bl",
    body:"Cipher's 10-Q says tenant guarantees and backstops take effect only after rent commencement and are capped or limited by default triggers. Until a hall commences, a delivery delay sits with the landlord and its bondholders, not Google." },
  { sev:"med", title:"CleanSpark: milestone-based abatement or termination", who:"CLSK · Sandersville", date:"Deliveries from Q4 2027", site:"clsk-sv",
    body:"Missed milestones can trigger rent abatement or lease termination. The site has run as a mining campus since 2022, but the added AI load and utility are not disclosed, and Georgia's governor race and two PSC seats are toss-ups." },
  { sev:"med", title:"CoreWeave: $35.5B of leases not yet commenced", who:"CRWV", date:"Commence 2026-2029", site:"glxy-hel",
    body:"Per the Q2 10-Q, 748 MW across sites was undelivered at Jun 30, phasing through 2028. Applied Digital's Bldg 4 lease moves to a CoreWeave subsidiary only once that subsidiary is investment grade." },
  { sev:"med", title:"Oracle: $288B of leases not yet commenced", who:"ORCL", date:"FQ2'27 to FY29", site:"orcl-abi",
    body:"Per the Aug 31, 2026 10-Q, substantially all data center leases with 15-19 year terms, not on the balance sheet. A Jupiter-style deferral right across these leases would shift timing risk to landlords and lenders." }
];

module.exports = { states, projects, leases, capex, bonds, flags };
