// Research snapshot as of 2026-10-13. Scores are analyst judgments built from the cited facts.
// power: E = energized / operating, C = power contracted, under construction, N = power not secured or blocked
module.exports.states = {
  TX: { name: "Texas", risk: 4.5, stance: "Turning hostile",
    policy: [
      "Aug 3: Gov. Abbott ordered a PUC/ERCOT audit of every data center in the interconnection queue; ERCOT paused Batch Zero. Projects that fail the audit 'must be denied' connection.",
      "Sep 21: Abbott ordered TCEQ to pause all data-center-related environmental permits, including behind-the-meter gas generation. TCEQ compliance report due Oct 19; pause runs until ERCOT review ends (~mid-Dec).",
      "ERCOT large-load queue ~474 GW, ~90% data centers. BofA: ~50 GW of the ~253 GW U.S. pipeline could be affected.",
      "Only 20 of 138 sales-tax-exempt facilities have finished compliance audits ($3.3B in exemptions). Bill pre-filing opens Nov 9; 60+ data center bills expected."
    ],
    race: { office: "Governor", cands: [["Greg Abbott","R"],["Gina Hinojosa","D"]],
      polls: [["ReconMR/Siena","Oct 13",48,47],["UMass Lowell","Oct 8",48,44],["YouGov","Oct 6",47,48],["NYT/Siena","Oct 3",46,49],["Fox News","Oct 2",52,47]],
      rating: "Likely R (Cook) but polling within 2 pts",
      positions: ["Abbott (R): backed the 2015 sales-tax exemptions; pivoted in Aug to case-by-case audits and grid oversight.","Hinojosa (D): wants a special session to repeal the exemptions and a pause on new projects until guardrails exist."] },
    extra: "Senate: Talarico (D) 45 / Paxton (R) 45 (UMass Lowell, Sep 18-28). Voters: 65% oppose an AI data center in their community; 56% back a statewide ban on new builds (UMass Lowell).",
    implication: "Either outcome keeps the audit gate on un-energized ERCOT loads into 1H27. A Hinojosa win adds tax-exemption repeal risk, which hits project economics for every Texas lease underwritten on exempt equipment purchases. Behind-the-meter gas projects lost their workaround on Sep 21." },
  NY: { name: "New York", risk: 4.5, stance: "Hostile",
    policy: ["Jul 14: EO 62, the first statewide moratorium. One-year pause on new state environmental permits for facilities over 50 MW. Existing operations and fully permitted expansions continue.","Hochul also wants to ban tax breaks for data centers. Local pauses: Town of Tonawanda, Mohawk, East Greenbush, Clay."],
    race: { office: "Governor", cands: [["Kathy Hochul","D"],["Bruce Blakeman","R"]],
      polls: [["Emerson","Oct 8",52,40],["Marist","Oct 7",53,42]], rating: "Solid D",
      positions: ["Hochul (D): signed the moratorium; running on it.","Blakeman (R): trails by ~11."] },
    implication: "Hochul's re-election locks in the moratorium through mid-2027. Permitted Lake Mariner buildings continue; any new campus or unpermitted expansion (Lake Hawkeye/Cayuga) is frozen." },
  MI: { name: "Michigan", risk: 4.0, stance: "Hostile, bipartisan",
    policy: ["Moratorium bills HB 5594-5596 in committee; Gov. Whitmer opposes them.","63 local actions, including Flint (12 mo), Lansing (182 days), Ypsilanti Twp (180 days). Augusta Twp voters overturned a rezoning.","Saline Twp first tried to block the Stargate campus, then settled after lawsuits. The MPSC-approved DTE contract carries consumer protections; both parties want them written into state law."],
    race: { office: "Governor (open)", cands: [["Jocelyn Benson","D"],["John James","R"]],
      polls: [["YouGov","Oct 6",48,45],["Mitchell","Oct 6",46,39],["Fox News","Sep 30",54,45],["Marist","Sep 30",53,41]], rating: "Lean D",
      positions: ["Both nominees call for a moratorium on new projects while rules are written.","Benson (D): statewide pause; her husband works for Related Cos., Saline's developer (says he has stepped away from Michigan projects).","James (R): local control, industrial land over farmland, blames state tax breaks."] },
    extra: "Senate (open): El-Sayed (D) plan says no rate hikes, data centers pay for their own energy.",
    implication: "Whoever wins, the next governor backs a pause on new builds. Saline is under construction with an approved DTE contract, so it is most likely grandfathered, but later phases and any new Michigan site face a moratorium and codified ratepayer terms." },
  WI: { name: "Wisconsin", risk: 4.0, stance: "Hostile",
    policy: ["PSC ruling could force Oracle to post $7B+ of collateral for We Energies plant and line costs at Port Washington; Oracle sued and offered ~$700M (10%).","Marquette: 70% say data center costs outweigh benefits, up from 55% six months earlier. 7 projects worth $57B pending.","Local pauses: Madison, Superior, Oshkosh, Manitowoc Co.; Wrightstown voters rejected a project."],
    race: { office: "Governor (open)", cands: [["David Crowley","D"],["Tom Tiffany","R"]],
      polls: [["Marquette","Sep 30",49,46]], rating: "Toss-up (Cook) / Lean D (Sabato)",
      positions: ["Tiffany (R): no new data centers unless standards are met, end state subsidies, local veto, no farmland conversion. Ad brands his opponent 'Data Center David Crowley'.","Crowley (D): opposes a statewide moratorium; wants guardrails and incentives tied to jobs. Both want an NDA ban and developers paying grid upgrades."] },
    implication: "Unusual case where the Republican is the more restrictive candidate. A Tiffany win raises the odds that the PSC collateral stands and that subsidies end, both bad for Port Washington economics." },
  GA: { name: "Georgia", risk: 3.5, stance: "Contested",
    policy: ["No statewide law; 8 state bills failed or pending.","Local pauses: Savannah and Chatham Co. (155 days), Americus; Fayetteville banned; Atlanta Beltline area prohibited.","Two of five PSC seats on the Nov 3 ballot; Democrats need both to flip the 3-2 GOP majority that sets Georgia Power large-load rates."],
    race: { office: "Governor (open)", cands: [["Rick Jackson","R"],["Keisha Lance Bottoms","D"]],
      polls: [["Wedgewood","Oct 2-3",51,49],["Big Data Poll","Sep 21-23",50.5,49.5],["InsiderAdvantage","Sep 22-23",48,46]], rating: "Toss-up",
      positions: ["Democratic side has called for a moratorium on new construction (BofA, Oct 5).","Jackson (R): avg lead 0.9 pts across four pollsters."] },
    implication: "A Bottoms win plus a PSC flip would reopen large-load cost allocation (BofA flags Southern Co.). That is the main risk to un-energized Georgia builds like Sandersville and the Dalton expansion." },
  OH: { name: "Ohio", risk: 4.0, stance: "Hostile, bipartisan",
    policy: ["Gov. DeWine paused new tax-exemption requests (May 27); SB 646 pending.","55 local moratoriums; 21 local ballot measures on Nov 3.","AEP Ohio already has an approved large-load tariff."],
    race: { office: "Governor (open)", cands: [["Amy Acton","D"],["Vivek Ramaswamy","R"]],
      polls: [["USA Today/Suffolk","Oct 12",50,41],["Bowling Green/YouGov","Oct 12",48,45],["co/efficient","Oct 12",43,45],["Big Data Poll","Oct 12",47,48],["CNN","Oct 8",50,42],["NYT/Siena","Oct 3",49,45]], rating: "Toss-up (Cook) / Lean R (Sabato)",
      positions: ["Ramaswamy (R): moratorium; make operators pay nearby residents' power bills.","Acton (D): conditional moratorium."] },
    implication: "No focus-desk collateral in Ohio, but it is the clearest sign that restriction is now bipartisan: both nominees run on a pause." },
  PA: { name: "Pennsylvania", risk: 2.5, stance: "Build with standards",
    policy: ["Aug 18: Gov. Shapiro's EO 2026-05 sets GRID requirements for 25 MW+ and removes fast-track permitting.","HB 2496 (lets municipalities pause projects) passed the House 201-1.","BofA: key variables are allowed ROE and large-load pricing reviews."],
    race: { office: "Governor", cands: [["Josh Shapiro","D"],["Stacy Garrity","R"]],
      polls: [["Quinnipiac","Oct 7",59,34],["Susquehanna","Oct 7",52,31],["PennLive","Oct 1",55,28]], rating: "Solid D",
      positions: ["Shapiro (D): pro-build with cost and grid standards."] },
    implication: "Policy continuity is near certain. Risk is local: if HB 2496 becomes law, townships gain pause authority over sites without final approvals." },
  NJ: { name: "New Jersey", risk: 3.5, stance: "Cost-shifting to operators",
    policy: ["Jul 7: Fair Share Act. Operators of 50 MW+ must commit to 85% of projected power costs for 10 years.","Aug 28: energy and water reporting law.","93 municipal bans (Bayonne, Cherry Hill, Medford, Millville, Monroe Twp)."],
    race: null,
    implication: "No 2026 statewide race. The cost has already moved to operators: take-or-pay power commitments raise fixed costs for Vineland and Kenilworth." },
  VA: { name: "Virginia", risk: 3.0, stance: "Tightening",
    policy: ["Sep 18: Gov. Spanberger's EO 22 ends by-right zoning for 25 MW+.","$0.011/kWh data center tax enacted; 60+ bills tracked. Loudoun Co. ended by-right zoning."],
    race: null,
    implication: "No 2026 governor race (Spanberger elected 2025). Projects already zoned and under construction are mostly insulated; new sites face discretionary review." },
  IL: { name: "Illinois", risk: 3.0, stance: "Incentives paused",
    policy: ["Tax-incentive pause since Jul 1, indefinite.","Local: Lawrence Co. (2 yr), Champaign Co., Mattoon; Chicago ordinance pending."],
    race: { office: "Governor", cands: [["JB Pritzker","D"],["Darren Bailey","R"]], polls: [["CNW/PPP","Oct 6",54,34]], rating: "Solid D", positions: [] },
    implication: "Continuity. Pressure falls on project economics through lost incentives rather than outright bans; the Elk Grove cluster already has power." },
  NM: { name: "New Mexico", risk: 3.5, stance: "Contested",
    policy: ["Project Jupiter faces public-records and permit litigation; a June suit was dismissed with leave to refile.","Statewide moratorium proposed for the 2027 session. Local pauses: Rio Communities, Colfax Co."],
    race: { office: "Governor (open)", cands: [["Deb Haaland","D"],["Gregg Hull","R"]], polls: [["Albuquerque Journal","Oct 11",49,42],["KOB/SurveyUSA","Oct 5",47,41]], rating: "Solid D", positions: [] },
    implication: "A Haaland administration sets the tone for the 2027 moratorium debate while Jupiter's off-grid gas and fuel-cell microgrid still needs air permits." },
  LA: { name: "Louisiana", risk: 1.5, stance: "Supportive",
    policy: ["Jun 25: Gov. Landry's EO 26-058 requires full infrastructure funding before tax incentives.","Entergy Louisiana building 3 GW of new gas generation for Hyperion. New Orleans interim zoning only."],
    race: null,
    implication: "No 2026 governor race. The most supportive state on the map; the main risk is construction and cost, not politics." },
  ND: { name: "North Dakota", risk: 1.5, stance: "Supportive, local friction",
    policy: ["No statewide restrictions.","7 local moratoriums near Applied Digital's Polaris Forge campuses; annexation fight around Harwood."],
    race: null,
    implication: "No 2026 governor race. State policy is supportive; watch county pauses around expansion parcels." },
  OK: { name: "Oklahoma", risk: 2.5, stance: "Mixed",
    policy: ["Oklahoma City moratorium through Dec 31, 2026.","SB 1488 statewide bill in committee; HB 2992 ratepayer protection signed."],
    race: { office: "Governor (open)", cands: [["Mike Mazzei","R"],["Cyndi Munson","D"]], polls: [], rating: "Solid R", positions: [] },
    implication: "Low election risk. BofA lists Oklahoma among states where a Democratic upset would carry policy risk, but no public polling shows one." },
  KY: { name: "Kentucky", risk: 3.0, stance: "Tightening",
    policy: ["Aug 6: Gov. Beshear's EO directs permit denials for harmful impacts and bars utility rate increases tied to data centers.","Woodford Co. permanent ban; Louisville Metro 6-month; Lexington-Fayette pause."],
    race: null,
    implication: "No 2026 governor race (next is 2027). The EO puts the burden on Hawesville to prove no rate impact on other customers." },
  NC: { name: "North Carolina", risk: 3.0, stance: "Tightening",
    policy: ["Jul 7: restrictions on certified data centers signed; H 1189 (2-year pause for 100 MW+) in committee.","Local pauses in 14 counties and 25+ towns: Charlotte, Greensboro, Cary, Durham."],
    race: null,
    implication: "No 2026 governor race. Operating sites are fine; new 100 MW+ builds face local and possible statewide pauses." },
  AL: { name: "Alabama", risk: 2.0, stance: "Mostly supportive",
    policy: ["SB 270 (PSC review) pending.","Local 6-month pauses in Leeds, Homewood, Springville, Chelsea, Westover."],
    race: { office: "Governor (open)", cands: [["Tommy Tuberville","R"],["Doug Jones","D"]], polls: [], rating: "Solid R", positions: [] },
    implication: "Low risk; small exposure (Auburn)." },
  MO: { name: "Missouri", risk: 2.5, stance: "Local friction",
    policy: ["No statewide action. Jackson Co. 180-day moratorium; St. Charles city ban; Springfield 120-day.","Independence plans to rebuild a retired municipal plant to serve the Nebius campus."],
    race: null,
    implication: "No 2026 governor race. Risk sits in Jackson County politics and power-plant execution." },
  WA: { name: "Washington", risk: 2.5, stance: "Incentives phasing out",
    policy: ["ESSB 6231 phases out the sales-tax exemption.","Local pauses: Seattle, Spokane, Snohomish Co., Skagit."],
    race: null,
    implication: "No 2026 governor race. Economics, not bans." },
  AZ: { name: "Arizona", risk: 2.5, stance: "Incentives paused",
    policy: ["Tax-incentive pause since Jun 13.","Tucson siting limits for 20 MW+; Pima Co. 120-day."],
    race: { office: "Governor", cands: [["Katie Hobbs","D"],["Andy Biggs","R"]], polls: [["Arizona State","Oct 6",47,34]], rating: "Lean D", positions: [] },
    implication: "No focus-desk collateral. BofA thinks the market overstates election risk here." }
};

// Projects. lat/lon approximate to town/county.
module.exports.projects = [
  // Core Scientific
  { id:"corz-denton", name:"Denton", owner:"CORZ", tenant:"CoreWeave", st:"TX", lat:33.21, lon:-97.13, mw:260, power:"E", note:"~260 MW billing (Jul 2026)." },
  { id:"corz-dalton", name:"Dalton", owner:"CORZ", tenant:"CoreWeave / AMD", st:"GA", lat:34.77, lon:-84.97, mw:295, power:"C", note:"~175 MW CoreWeave, ~30 billing; est. completion early 2027. Another ~120 MW for 2H27." },
  { id:"corz-musk", name:"Muskogee", owner:"CORZ", tenant:"CoreWeave / AMD", st:"OK", lat:35.75, lon:-95.37, mw:152, power:"E", note:"~70 MW billing; ~82 MW AMD direct for 2H27." },
  { id:"corz-marble", name:"Marble", owner:"CORZ", tenant:"CoreWeave", st:"NC", lat:35.17, lon:-83.93, mw:65, power:"E", note:"~65 MW billing." },
  { id:"corz-austin", name:"Austin", owner:"CORZ", tenant:"CoreWeave", st:"TX", lat:30.27, lon:-97.74, mw:20, power:"E", note:"~20 MW billing." },
  { id:"corz-pecos", name:"Pecos", owner:"CORZ", tenant:"AMD", st:"TX", lat:31.42, lon:-103.49, mw:185, power:"C", note:"AMD direct, est. 1H27 initial delivery. Expansion load is subject to the ERCOT audit." },
  { id:"corz-hunt", name:"Hunt", owner:"CORZ", tenant:"AMD", st:"TX", lat:33.0, lon:-96.1, mw:110, power:"N", note:"AMD direct, est. 1H28. Needs new large-load approval while ERCOT is paused." },
  { id:"corz-auburn", name:"Auburn", owner:"CORZ", tenant:"AMD", st:"AL", lat:32.61, lon:-85.48, mw:32, power:"C", note:"Est. 1H27." },
  // TeraWulf
  { id:"wulf-lm", name:"Lake Mariner", owner:"WULF", tenant:"Fluidstack (Google backstop), Core42", st:"NY", lat:43.36, lon:-78.60, mw:500, power:"C", note:"NYISO. CB1-CB3 energized or energizing; CB4/CB5 (168 MW each) slated Q3/Q4 2026. Fully permitted expansions are exempt from EO 62." },
  { id:"wulf-cay", name:"Lake Hawkeye / Cayuga", owner:"WULF", tenant:"None disclosed", st:"NY", lat:42.53, lon:-76.53, mw:320, power:"N", note:"Pending permitting; frozen by the NY moratorium." },
  { id:"wulf-abe", name:"Abernathy JV", owner:"WULF", tenant:"Fluidstack (Google backstop)", st:"TX", lat:33.83, lon:-101.84, mw:168, power:"C", note:"SPP grid, outside ERCOT. 50.1% WULF. Delivery targeted 2H26." },
  { id:"wulf-ky", name:"Hawesville", owner:"WULF", tenant:"Anthropic (20-yr, ~$19B)", st:"KY", lat:37.90, lon:-86.75, mw:401, power:"N", note:"Former Century Aluminum smelter site with legacy interconnection; first capacity 2H27. Beshear EO bars rate increases tied to data centers." },
  // Applied Digital
  { id:"apld-pf1", name:"Polaris Forge 1 (Ellendale)", owner:"APLD", tenant:"CoreWeave", st:"ND", lat:46.00, lon:-98.53, mw:550, power:"C", note:"400 MW campus plus ELN-04 (150 MW). First buildings live; rest under construction." },
  { id:"apld-pf2", name:"Polaris Forge 2 (Harwood)", owner:"APLD", tenant:"IG hyperscaler", st:"ND", lat:46.98, lon:-96.88, mw:200, power:"C", note:"200 MW critical IT, under construction. Nearby annexation fight and county pauses." },
  // Hut 8
  { id:"hut-rb", name:"River Bend", owner:"HUT", tenant:"Fluidstack / Anthropic (Google backstop)", st:"LA", lat:30.79, lon:-91.38, mw:245, power:"C", note:"Entergy Louisiana service. ROFO on up to 1,000 MW more, power permitting." },
  { id:"hut-bp", name:"Beacon Point", owner:"HUT", tenant:"AA- or better tenant", st:"TX", lat:27.80, lon:-97.60, mw:704, power:"C", note:"1,000 MW interconnection agreement with AEP Texas. Energization starts Q1 2027, which falls in the audit window." },
  // Cipher
  { id:"cifr-bl", name:"Barber Lake", owner:"CIFR", tenant:"Fluidstack / Google", st:"TX", lat:32.39, lon:-100.86, mw:300, power:"C", note:"Under construction; ~95% of long-lead equipment secured." },
  { id:"cifr-bp", name:"Black Pearl", owner:"CIFR", tenant:"AWS (15-yr)", st:"TX", lat:31.6, lon:-102.6, mw:300, power:"C", note:"Under construction (EPC underway)." },
  { id:"cifr-sr", name:"Stingray", owner:"CIFR", tenant:"TBD", st:"TX", lat:32.32, lon:-102.55, mw:100, power:"C", note:"Front-of-meter; 10-K targeted 1H26 energization. Not yet leased." },
  // Keel (ex-Bitfarms)
  { id:"keel-pc", name:"Panther Creek", owner:"KEEL", tenant:"Leasing", st:"PA", lat:40.85, lon:-75.88, mw:300, power:"E", note:"Grid interconnection in place (company); converting to HPC." },
  { id:"keel-sh", name:"Sharon", owner:"KEEL", tenant:"Leasing", st:"PA", lat:41.23, lon:-80.49, mw:110, power:"E", note:"Existing interconnection." },
  { id:"keel-ml", name:"Moses Lake", owner:"KEEL", tenant:"Leasing", st:"WA", lat:47.13, lon:-119.28, mw:120, power:"E", note:"Existing interconnection." },
  // CleanSpark
  { id:"clsk-sv", name:"Sandersville", owner:"CLSK", tenant:"High-IG global tech co. (20-yr, $6.6B)", st:"GA", lat:32.98, lon:-82.81, mw:175, power:"C", note:"Lease signed Jul 2026; power arrangement not disclosed." },
  { id:"clsk-tx", name:"Sealy / Brazoria", owner:"CLSK", tenant:"LOI only", st:"TX", lat:29.4, lon:-95.9, mw:885, power:"N", note:"Up to 885 MW secured/planned power under LOI, no definitive lease. ERCOT-paused." },
  // Nebius
  { id:"nbis-vin", name:"Vineland", owner:"NBIS", tenant:"Microsoft / Meta backlog", st:"NJ", lat:39.49, lon:-75.03, mw:300, power:"C", note:"Behind-the-meter generation. Subject to the NJ Fair Share Act." },
  { id:"nbis-ind", name:"Independence", owner:"NBIS", tenant:"Microsoft / Meta backlog", st:"MO", lat:39.09, lon:-94.41, mw:1200, power:"N", note:"City plans to rebuild a retired municipal plant to serve it. Jackson Co. 180-day pause." },
  { id:"nbis-pa", name:"Pennsylvania AI factory", owner:"NBIS", tenant:"Microsoft / Meta backlog", st:"PA", lat:40.6, lon:-77.6, mw:1200, power:"N", note:"Site not disclosed (marker placed mid-state). Grid-interconnection risk flagged." },
  // Nscale
  { id:"nscale-ward", name:"Ward County", owner:"NSCALE", tenant:"Not disclosed", st:"TX", lat:31.55, lon:-103.10, mw:200, power:"C", note:"$1.85B IG-rated DDTL." },
  { id:"nscale-nc", name:"Madison", owner:"NSCALE", tenant:"Not disclosed", st:"NC", lat:36.39, lon:-79.96, mw:40, power:"E", note:"Colocation retrofit; $1.2B IG-rated DDTL." },
  // IREN
  { id:"iren-ch", name:"Childress", owner:"IREN", tenant:"Microsoft ($9.7B)", st:"TX", lat:34.43, lon:-100.20, mw:750, power:"E", note:"750 MW site with existing interconnection; GPU deployment ramping." },
  { id:"iren-sw", name:"Sweetwater", owner:"IREN", tenant:"Not disclosed", st:"TX", lat:32.47, lon:-100.41, mw:2000, power:"C", note:"SW1 substation energized; 'conditional base load' Batch Zero status, still subject to audit approvals. 300 MW targeted Q4 2027." },
  // Riot
  { id:"riot-rock", name:"Rockdale", owner:"RIOT", tenant:"Frontier AI lab ($9.1B) + AMD", st:"TX", lat:30.66, lon:-97.00, mw:241, power:"E", note:"Uses Rockdale's existing interconnection; 96 MW by Dec 2027, 191 MW by Jun 2028." },
  { id:"riot-cor", name:"Corsicana", owner:"RIOT", tenant:"LOI only", st:"TX", lat:32.09, lon:-96.47, mw:1300, power:"N", note:"1.3 GW+ full campus under non-binding LOI; new load exposed to ERCOT audit." },
  // CoreWeave direct / leased
  { id:"crwv-lan", name:"Lancaster", owner:"CRWV", tenant:"CoreWeave", st:"PA", lat:40.04, lon:-76.31, mw:300, power:"N", note:"$6B plan, 100 MW scaling to 300 MW; power path not disclosed." },
  { id:"crwv-ken", name:"Kenilworth", owner:"CRWV", tenant:"CoreWeave", st:"NJ", lat:40.68, lon:-74.29, mw:250, power:"C", note:"Under construction; Fair Share Act applies." },
  { id:"crwv-elk", name:"Elk Grove Village", owner:"CRWV", tenant:"CoreWeave (long-term)", st:"IL", lat:42.00, lon:-87.97, mw:100, power:"C", note:"Developer seeking $850M HY bonds. Established data center cluster with power." },
  { id:"crwv-rva", name:"Digital Drive (Richmond)", owner:"CRWV", tenant:"CoreWeave (15-yr, $2.94B)", st:"VA", lat:37.54, lon:-77.43, mw:76, power:"C", note:"Blue Owl / Cedarwood / PowerHouse. Ops 2027-28." },
  { id:"glxy-hel", name:"Helios (Galaxy)", owner:"GLXY", tenant:"CoreWeave (15-yr)", st:"TX", lat:33.62, lon:-100.84, mw:800, power:"C", note:"Dickens Co. ERCOT approved 1.6 GW before the pause; 800 MW committed to CoreWeave." },
  // Oracle-linked
  { id:"orcl-abi", name:"Stargate I (Abilene)", owner:"ORCL", tenant:"Oracle / OpenAI", st:"TX", lat:32.45, lon:-99.73, mw:1200, power:"E", note:"Crusoe-built; operating and ramping." },
  { id:"orcl-fro", name:"Frontier (Shackelford Co.)", owner:"ORCL", tenant:"Oracle / OpenAI", st:"TX", lat:32.74, lon:-99.35, mw:1400, power:"N", note:"Vantage. Behind-the-meter gas microgrid (VoltaGrid). TCEQ permit pause blocks new air permits." },
  { id:"orcl-pw", name:"Lighthouse (Port Washington)", owner:"ORCL", tenant:"Oracle / OpenAI", st:"WI", lat:43.39, lon:-87.88, mw:1000, power:"N", note:"Vantage. We Energies service contested: PSC collateral ruling ($7B+) under Oracle lawsuit." },
  { id:"orcl-mi", name:"Stargate Michigan (Saline)", owner:"ORCL", tenant:"Oracle / OpenAI", st:"MI", lat:42.17, lon:-83.78, mw:1400, power:"C", note:"Related Digital / Blackstone. MPSC-approved DTE contract with battery storage." },
  { id:"orcl-nm", name:"Project Jupiter", owner:"ORCL", tenant:"Oracle / OpenAI", st:"NM", lat:31.87, lon:-106.70, mw:2200, power:"N", note:"STACK / BorderPlex. Off-grid fuel-cell and gas microgrid; permits litigated." },
  // Meta SPVs (context)
  { id:"meta-hyp", name:"Hyperion", owner:"META", tenant:"Meta (RVG)", st:"LA", lat:32.42, lon:-91.76, mw:2000, power:"C", note:"Entergy building three gas plants (~3 GW) by 2028." },
  { id:"meta-elp", name:"El Paso", owner:"META", tenant:"Meta", st:"TX", lat:31.90, lon:-106.35, mw:1000, power:"C", note:"El Paso Electric (outside ERCOT) + 366 MW of onsite gas gensets that need TCEQ authorizations." }
];

// Bonds / public debt. exp = project ids. kind: secured project, corporate unsecured, convert, loan
module.exports.bonds = [
  // CoreWeave
  { iss:"CRWV", inst:"9.250% Sr Notes 2030", size:2000, kind:"Corp unsecured", exp:"CRWV_ALL" },
  { iss:"CRWV", inst:"9.000% Sr Notes 2031", size:1750, kind:"Corp unsecured", exp:"CRWV_ALL" },
  { iss:"CRWV", inst:"9.750% Sr Notes 2031", size:1750, kind:"Corp unsecured", exp:"CRWV_ALL", d:"Apr 2026" },
  { iss:"CRWV", inst:"9.625% Sr Notes 2032", size:null, kind:"Corp unsecured", exp:"CRWV_ALL" },
  { iss:"CRWV", inst:"8.500% Sr Notes 2032", size:null, kind:"Corp unsecured", exp:"CRWV_ALL" },
  { iss:"CRWV", inst:"1.75% Conv 2032", size:4000, kind:"Convertible", exp:"CRWV_ALL", d:"Apr 2026" },
  { iss:"CRWV", inst:"2.875% Conv 2033", size:3700, kind:"Convertible", exp:"CRWV_ALL", d:"Sep 2026" },
  { iss:"CRWV", inst:"Digital Drive VA project HY (~9.25% talk)", size:1100, kind:"Secured project", exp:["crwv-rva"], d:"Sep 2026" },
  { iss:"CRWV", inst:"Elk Grove Village IL project HY", size:850, kind:"Secured project", exp:["crwv-elk"], d:"Jun 2026" },
  // Oracle
  { iss:"ORCL", inst:"$25B Sr Notes (8 tranches, 2029-2066, up to 6.85%)", size:25000, kind:"Corp unsecured", exp:"ORCL_ALL", d:"Feb 2026" },
  { iss:"ORCL", inst:"Related Digital Saline 7.5% project bonds (~19.5 yr)", size:14000, kind:"Secured project", exp:["orcl-mi"], d:"Apr 2026" },
  { iss:"ORCL", inst:"Vantage Frontier + Port Washington loans (S+~250)", size:38000, kind:"Loan", exp:["orcl-fro","orcl-pw"] },
  // Core Scientific
  { iss:"CORZ", inst:"7.750% Sr Secured Notes 2031", size:3300, kind:"Secured project", exp:["corz-denton","corz-dalton","corz-musk","corz-marble","corz-austin"], d:"Apr 2026" },
  // TeraWulf
  { iss:"WULF", inst:"7.75% Sr Secured Notes 2030 (Lake Mariner)", size:3200, kind:"Secured project", exp:["wulf-lm"], d:"Oct 2025" },
  { iss:"WULF", inst:"Abernathy JV Sr Secured Notes", size:1300, kind:"Secured project", exp:["wulf-abe"], d:"Dec 2025" },
  { iss:"WULF", inst:"Hawesville HY bonds + loans (in market)", size:3500, kind:"Secured project", exp:["wulf-ky"], d:"Jul 2026 launch" },
  { iss:"WULF", inst:"Convertible notes (2030 and later)", size:2070, kind:"Convertible", exp:"WULF_ALL" },
  // Applied Digital
  { iss:"APLD", inst:"9.25% Sr Secured Notes 2030 (ComputeCo)", size:2350, kind:"Secured project", exp:["apld-pf1"], d:"Nov 2025" },
  { iss:"APLD", inst:"6.750% Sr Secured Notes 2031 (ComputeCo 2)", size:2150, kind:"Secured project", exp:["apld-pf2"], d:"Mar 2026" },
  { iss:"APLD", inst:"7.000% Sr Secured Notes 2031 (ComputeCo 3)", size:1590, kind:"Secured project", exp:["apld-pf1"], d:"Jun 2026" },
  // Hut 8
  { iss:"HUT", inst:"6.192% Sr Secured Notes 2042 (River Bend), BBB-", size:3250, kind:"Secured project", exp:["hut-rb"], d:"Apr 2026" },
  { iss:"HUT", inst:"6.129% Sr Secured Notes 2042 (Beacon Point), IG", size:4250, kind:"Secured project", exp:["hut-bp"], d:"Jun 2026" },
  // Cipher
  { iss:"CIFR", inst:"7.125% Sr Secured Notes 2030 (Barber Lake)", size:1733, kind:"Secured project", exp:["cifr-bl"], d:"Nov 2025" },
  { iss:"CIFR", inst:"6.125% Sr Secured Notes 2031 (Black Pearl)", size:2000, kind:"Secured project", exp:["cifr-bp"] },
  { iss:"CIFR", inst:"Sr Secured Notes 2031 (Stingray)", size:810, kind:"Secured project", exp:["cifr-sr"], d:"Jun 2026" },
  { iss:"CIFR", inst:"0% Convertible Notes", size:850, kind:"Convertible", exp:"CIFR_ALL" },
  // Keel
  { iss:"KEEL", inst:"1.250% Conv Sr Notes 2032", size:400, kind:"Convertible", exp:"KEEL_ALL", d:"Jun 2026" },
  // CleanSpark
  { iss:"CLSK", inst:"0% Conv Sr Notes 2032", size:1150, kind:"Convertible", exp:"CLSK_ALL", d:"Nov 2025" },
  // Nebius
  { iss:"NBIS", inst:"0.50% Conv 2030 (accretes to 110%)", size:3000, kind:"Convertible", exp:"NBIS_ALL", d:"Aug 2026" },
  { iss:"NBIS", inst:"4.50% Conv 2034 (accretes to 125%)", size:2000, kind:"Convertible", exp:"NBIS_ALL", d:"Aug 2026" },
  { iss:"NBIS", inst:"Convertible notes (Mar 2026)", size:4000, kind:"Convertible", exp:"NBIS_ALL", d:"Mar 2026" },
  // Nscale
  { iss:"NSCALE", inst:"Ward County DDTL (IG-rated)", size:1850, kind:"Loan", exp:["nscale-ward"], d:"Sep 2026" },
  { iss:"NSCALE", inst:"Madison NC DDTL (IG-rated)", size:1200, kind:"Loan", exp:["nscale-nc"], d:"Sep 2026" },
  // IREN
  { iss:"IREN", inst:"1.00% Conv Notes 2033", size:3000, kind:"Convertible", exp:"IREN_ALL", d:"May 2026" },
  { iss:"IREN", inst:"3.50% Conv Notes 2029 (+ other converts)", size:null, kind:"Convertible", exp:"IREN_ALL" },
  // Riot
  { iss:"RIOT", inst:"Morgan Stanley interim facility (up to $573M)", size:573, kind:"Loan", exp:["riot-rock"], d:"Aug 2026" },
  // Others
  { iss:"GLXY", inst:"Galaxy Helios II Sr Secured Notes 2031", size:3507, kind:"Secured project", exp:["glxy-hel"], d:"Jul 2026" },
  { iss:"META", inst:"Beignet Investor 6.58% 2049 (Hyperion), A+", size:27300, kind:"Secured project", exp:["meta-hyp"], d:"Oct 2025" },
  { iss:"META", inst:"Sopaipilla Investor (El Paso), A+ prelim", size:12300, kind:"Secured project", exp:["meta-elp"], d:"Jul 2026" }
];
