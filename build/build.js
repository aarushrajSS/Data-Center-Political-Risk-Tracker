const fs=require('fs'),path=require('path'),topojson=require('topojson-client'),d3=require('d3-geo');
const D=require('./sites.js'); const OV=require('./power_overrides.js'); for(const p of D.projects){ if(OV[p.id]) Object.assign(p,OV[p.id]); }
const topo=require('us-atlas/states-albers-10m.json');
const fc=topojson.feature(topo,topo.objects.states), borders=topojson.mesh(topo,topo.objects.states,(a,b)=>a!==b);
const pg=d3.geoPath(), proj=d3.geoAlbersUsa().scale(1300).translate([487.5,305]);
const abbr={"Alabama":"AL","Alaska":"AK","Arizona":"AZ","Arkansas":"AR","California":"CA","Colorado":"CO","Connecticut":"CT","Delaware":"DE","District of Columbia":"DC","Florida":"FL","Georgia":"GA","Hawaii":"HI","Idaho":"ID","Illinois":"IL","Indiana":"IN","Iowa":"IA","Kansas":"KS","Kentucky":"KY","Louisiana":"LA","Maine":"ME","Maryland":"MD","Massachusetts":"MA","Michigan":"MI","Minnesota":"MN","Mississippi":"MS","Missouri":"MO","Montana":"MT","Nebraska":"NE","Nevada":"NV","New Hampshire":"NH","New Jersey":"NJ","New Mexico":"NM","New York":"NY","North Carolina":"NC","North Dakota":"ND","Ohio":"OH","Oklahoma":"OK","Oregon":"OR","Pennsylvania":"PA","Rhode Island":"RI","South Carolina":"SC","South Dakota":"SD","Tennessee":"TN","Texas":"TX","Utah":"UT","Vermont":"VT","Virginia":"VA","Washington":"WA","West Virginia":"WV","Wisconsin":"WI","Wyoming":"WY"};
const shapes=fc.features.map(f=>({st:abbr[f.properties.name],name:f.properties.name,d:pg(f).replace(/(\.\d)\d+/g,'$1'),c:pg.centroid(f).map(v=>+v.toFixed(1))})).filter(s=>s.st);
const borderD=pg(borders).replace(/(\.\d)\d+/g,'$1');
for(const p of D.projects){const xy=proj([p.lon,p.lat]); if(!xy) throw p.id; p.x=+xy[0].toFixed(1); p.y=+xy[1].toFixed(1);}
const ids=new Set(D.projects.map(p=>p.id));
for(const b of D.bonds){ if(b.exp==='ALL'){ b.exp=D.projects.filter(p=>p.owner===b.iss||(b.iss==='CRWV'&&/CoreWeave/.test(p.tenant))).map(p=>p.id); b.corp=true; } b.exp.forEach(i=>{if(!ids.has(i)) throw 'bad '+i;}); }
for(const l of D.leases) if(!ids.has(l.site)) throw 'lease '+l.site;
for(const f of D.flags) if(!ids.has(f.site)) throw 'flag '+f.site;
const old=JSON.parse(fs.readFileSync(path.join(__dirname,'sources_base.json'),'utf8'));
const add=[
["TechCrunch: Oracle force majeure notice on Project Jupiter","https://techcrunch.com/2026/09/24/oracle-sends-force-majeure-notice-on-its-new-mexico-stargate-data-center/"],
["Business Model Analyst: Jupiter FM mechanics, pipeline, permits","https://businessmodelanalyst.com/oracle-project-jupiter-force-majeure-power-risk/"],
["Bit.fan: Jupiter $18B loan below par","https://www.bit.fan/en/news/list/oracle-project-jupiter-force-majeure-debt-discount-4a125224-en-keyName-def34a01"],
["Clifford Chance: The Data Center Lease Is the Bond","https://www.cliffordchance.com/content/dam/cliffordchance/briefings/2026/07/The%20Data%20Center%20Lease%20Is%20the%20Bond.pdf"],
["Oracle 10-Q (Aug 31, 2026): $288B leases not commenced","https://www.sec.gov/Archives/edgar/data/1341439/000119312526389274/orcl-20260831.htm"],
["Oracle FWP: $25B notes, Feb 2026","https://www.sec.gov/Archives/edgar/data/1341439/000119312526033882/d44245dfwp.htm"],
["CoreWeave 8-K: 9.250% 2030 notes","https://www.sec.gov/Archives/edgar/data/1769628/000176962825000019/coreweave-pressreleasepric.htm"],
["CoreWeave 8-K: 9.000% 2031 notes","https://www.sec.gov/Archives/edgar/data/0001769628/000176962825000030/coreweave-pressreleasepric.htm"],
["CoreWeave: 9.625% 2032 and €8.500% 2032 notes","https://www.01net.it/coreweave-announces-pricing-of-1-25-billion-of-senior-notes-and-e2-billion-of-senior-notes/"],
["CoreWeave: 1.75% 2031 converts","https://www.nasdaq.com/press-release/coreweave-prices-upsized-225-billion-convertible-senior-notes-offering-2025-12-09"],
["CoreWeave Q2 2026 10-Q summary ($35.5B leases not commenced)","https://www.stocktitan.net/sec-filings/CRWV/10-q-core-weave-inc-quarterly-earnings-report-d3b596a1f167.html"],
["TeraWulf 8-K: 7.750% 2030 WULF Compute notes","https://www.sec.gov/Archives/edgar/data/1083301/000110465925100142/tm2528904d1_ex99-1.htm"],
["TeraWulf 8-K: Raylan Data $500M bridge","https://www.sec.gov/Archives/edgar/data/1083301/000095014226000720/eh260751501_8k.htm"],
["TeraWulf 10-Q Jun 30, 2026","https://www.sec.gov/Archives/edgar/data/0001083301/000108330126000166/wulf-20260630.htm"],
["TeraWulf Q2 call (Lake Mariner schedule, Abernathy sale)","https://www.marketbeat.com/instant-alerts/terawulf-q2-earnings-call-highlights-2026-08-05/"],
["Applied Digital 8-K: 9.250% 2030 notes","https://www.sec.gov/Archives/edgar/data/1144879/000149315225022506/ex99-1.htm"],
["Applied Digital FY26 Q4 results (campuses, Delta Forge)","https://datacentremagazine.com/globenewswire/3333871"],
["Applied Digital PF2 $5B lease","https://www.benzinga.com/trading-ideas/movers/25/10/48354016/applied-digitals-polaris-forge-2-campus-secures-15-year-5-billion-contract"],
["Applied Digital PF3 $7.5B lease","https://ir.applieddigital.com/news-events/press-releases/detail/152/applied-digital-reaches-significant-milestone-surpassing-1"],
["Hut 8 Q2 2026 8-K (River Bend, Beacon Point schedule)","https://www.sec.gov/Archives/edgar/data/0001964789/000110465926090041/tm2621890d1_ex99-1.htm"],
["Cipher 8-K: 7.125% 2030 Barber Lake notes","https://www.sec.gov/Archives/edgar/data/1819989/000095010325014401/dp237015_ex9901.htm"],
["Cipher 8-K: 6.125% 2031 Black Pearl notes","https://www.sec.gov/Archives/edgar/data/1819989/000095010326001659/dp241116_ex9901.htm"],
["Cipher 8-K: 6.000% 2031 Stingray notes","https://www.sec.gov/Archives/edgar/data/0001819989/000095010326008678/dp248139_ex9901.htm"],
["Cipher 8-K: $850M 0% 2032 converts (Oct 13, 2026)","https://www.sec.gov/Archives/edgar/data/0001819989/000119312526419743/d134900dex992.htm"],
["Cipher 10-Q Jun 30, 2026 (converts, backstop limits)","https://www.sec.gov/Archives/edgar/data/0001819989/000181998926000041/cifr-20260630.htm"],
["Cipher Q2 2026 results (Black Pearl rent commenced)","https://www.sec.gov/Archives/edgar/data/0001819989/000181998926000038/q226_earningsxprxdraftxvf.htm"],
["Cipher $5.5B AWS lease","https://www.datacenterdynamics.com/en/news/aws-signs-300mw-hosting-deal-to-lease-capacity-from-cipher-mining/"],
["Core Scientific 8-K: $10.2B CoreWeave contracts","https://www.sec.gov/Archives/edgar/data/1839341/000162828025008312/ex991-coreweavepressrelease.htm"],
["Core Scientific AMD program (>$14B)","https://san-1510.aid.brainsum.com/news/top-news/core-scientifics-14bn-amd-deal-vindicates-its-rejection-coreweave"],
["Galaxy: 9.875% 2031 Helios II notes","https://galaxydigital.gcs-web.com/news-releases/news-release-details/galaxy-digital-inc-announces-pricing-3507-billion-senior-secured"],
["The Block: Helios Phase I delivered, phase schedule","https://www.theblock.co/post/407396/galaxy-delivers-133-mw-of-critical-it-load-to-coreweave-as-helios-bitcoin-mine-turns-ai-hub"],
["CryptoSlate: Riot bridge matures before rent","https://cryptoslate.com/riot-platforms-locked-in-a-9-1-billion-anthropic-deal-but-its-bridge-loan-expires-before-the-rent-starts/"],
["Blockspace: CleanSpark Sandersville 175 MW, Q4 2027","https://blockspace.media/insight/cleanspark-reports-loss-sandersville-funding/"],
["Nebius 6-K: Mar 2026 converts","https://www.sec.gov/Archives/edgar/data/1513845/000110465926032735/tm268409d4_ex99-1.htm"]];
const src=old.concat(add);
const data={states:D.states,projects:D.projects,bonds:D.bonds,leases:D.leases,flags:D.flags,capex:D.capex,shapes,borderD};
let out=fs.readFileSync(path.join(__dirname,'template.html'),'utf8').replace('/*__DATA__*/','const DATA = '+JSON.stringify(data)+';').replace('/*__SRC__*/[]',JSON.stringify(src));
const cut=out.indexOf('<div class="wrap">'); const headPart=out.slice(0,cut), bodyPart=out.slice(cut);
const page='<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n<style>body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style>\n'+headPart+'</head>\n<body>\n'+bodyPart+'\n</body>\n</html>\n';
fs.writeFileSync(path.join(__dirname,'..','index.html'),page);
fs.writeFileSync(path.join(__dirname,'..','data','tracker-data.json'),JSON.stringify({asOf:'2026-10-13',states:D.states,projects:D.projects,leases:D.leases,bonds:D.bonds,flags:D.flags,capex:D.capex,sources:src},null,1));
console.log('bytes',out.length,'leases',D.leases.length,'bonds',D.bonds.length,'src',src.length);
