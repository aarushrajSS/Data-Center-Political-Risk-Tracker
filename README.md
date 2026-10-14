# Data Center Political Risk Tracker v1

An interactive map of the U.S. AI data center build-out, seen through a credit lens. For each issuer it shows where the company is building, whether each site actually has power, how state politics toward data centers is moving ahead of the Nov 3, 2026 elections, when tenants start paying rent, and which bonds and loans sit on the wrong side of that politics.

The project started from one event. On Sep 24, 2026, Oracle sent a **force majeure notice** on Project Jupiter, its planned data center campus in New Mexico. The notice could let Oracle defer full rent for up to three years because the site's gas pipeline and air permit had stalled. The tracker is built to find situations like that before they happen: sites without secured power, in states turning against data centers, financed with debt that depends on rent arriving on time.

**Data snapshot:** October 13, 2026. This is a research tool, not investment advice.

---

## What's on the page

| Section | What it shows |
|---|---|
| **Header and KPIs** | Days to the election, tracked debt, debt rated High, total MW, MW without confirmed power in hostile states, and new rent due to start over the next year |
| **Red flags** | Force majeure notices, bridge loans that mature before rent starts, lease triggers (backstops that only start at rent commencement, milestone-based termination) and large lease commitments that haven't started yet. Clicking a card opens the site on the map |
| **Map** | States shaded **green (supportive) to red (hostile)** by political risk, or by governor-race polling lead. Site markers show power status, sized by MW |
| **State and site panel** | For a state: governor race polls, each candidate's data center position, enacted and pending policy, and what it means for the credits. For a site: tenant, power check with source, rent schedule, debt secured on it, red flags |
| **Bond book** | Every instrument with size, type, where its terms were verified (SEC filing, issuer release, or press only), states exposed, share of MW with unconfirmed power, political score and its highest-risk site |
| **Rent and build spend** | Stacked charts of rent payable by tenant and remaining build capex by developer, quarterly or monthly. Toggles for a full 3-year Jupiter force majeure deferral and for leaving out estimated leases. Tenant summary cards |
| **Lease schedule** | One row per lease or phase: tenant, site, developer, MW, first and full rent quarter, annual rent, contract value, term, power status, site score |
| **Catalyst calendar** | Dated events: Texas audit and permit milestones, the election, the New Mexico permit deadline, bridge maturities, rent starts |

Filters for issuer and power status apply across the map, KPIs, bond book, charts and lease table.

**Issuers covered:** CoreWeave (CRWV), Oracle (ORCL), Core Scientific (CORZ), TeraWulf (WULF), Applied Digital (APLD), Hut 8 (HUT), Cipher Digital (CIFR), Keel Infrastructure (KEEL, formerly Bitfarms), CleanSpark (CLSK), Nebius (NBIS), Nscale (private), IREN, Riot Platforms (RIOT). For context it also covers Galaxy (Helios, leased to CoreWeave) and Meta's Hyperion and El Paso financing vehicles.

---

## How it works

### 1. State political risk (1 to 5)

Each state with tracked exposure gets an analyst score from:

- **Enacted policy:** moratoriums (for example New York's EO 62), interconnection or permit pauses (Texas's ERCOT audit and TCEQ permit freeze), cost-shifting laws (New Jersey's Fair Share Act), and incentive repeals or pauses.
- **Pending bills and local action:** statewide moratorium bills and county or municipal moratoriums.
- **Voter sentiment:** state polling on data centers where it exists.
- **The election:** the governor-race poll average and each nominee's stated position on data centers.

| Score | Color | Meaning |
|---|---|---|
| 1.5 | dark green | Supportive (e.g. LA, ND) |
| 2.0–2.5 | light green / yellow | Mostly supportive, local friction or economics only |
| 3.0 | amber | Tightening |
| 3.5 | orange | Contested: heavy opposition threshold |
| 4.0–4.5 | red / dark red | Hostile (TX, NY, MI, WI, OH) |

### 2. Power status (four tiers)

Each site was checked against the company's latest investor materials and state utility-commission rulings. Every site carries a one-line "power check" with its source.

| Tier | Marker | Meaning | Power factor |
|---|---|---|---|
| Energized and running | filled dot | Load is live and billing | 0.45 |
| Partly energized | half-filled dot | Some capacity live, the rest contracted | 0.60 |
| Power contracted, not live | ring with dot | Utility agreement or interconnection signed, not yet energized | 0.75 |
| No power contracted | dashed diamond | No disclosed supply, or the supply depends on blocked permits | 1.00 |

A separate flag, **power source confirmed**, records whether the company has named and contracted its power source.

### 3. Site score (0 to 100)

```
site score = (state risk / 5) × 100 × power factor
```

**Override:** a site with no confirmed power source in a state rated 3.5 or higher (TX, NY, MI, WI, GA, OH, NJ, NM) scores at least **80** and is always **High**. These sites get a solid purple diamond with "!" on the map. A powered site in a hostile state is mostly insulated. An unpowered one is exposed to pauses, audits and permit freezes.

### 4. Bond score

- **Project bonds and loans** are scored on the sites that secure them.
- **Corporate notes and converts** are scored on the issuer's whole footprint. CoreWeave's also include the third-party sites it leases.
- Scores are MW-weighted averages of site scores. A project bond secured on a site that triggers the override scores at least 70.

Tiers: **High** 65+, **Elevated** 45–64, **Moderate** 30–44, **Low** under 30.

### 5. Bond verification

Each instrument shows where its terms were confirmed:

- **SEC 8-K / 10-Q / FWP / 6-K:** confirmed against an EDGAR filing.
- **Issuer release:** the company's own pricing press release.
- **Press only:** 144A-for-life and private deals that never reach EDGAR, such as Meta's Beignet (Hyperion) and Sopaipilla (El Paso) bonds, the Related Digital Saline bonds, the Oracle-linked bank loans and the CoreWeave-leased high-yield bonds.

### 6. Rent schedule

- **Annual rent** = disclosed contract value ÷ term, where disclosed.
- Where a lease value isn't disclosed per site (Oracle, Meta, some Fluidstack and Core42 leases), rent is **estimated at $1.8M per MW per year**. That is the median of the disclosed leases in the dataset. These rows are tagged `est.`.
- Rent ramps linearly from the **first rent** quarter to the **full rent** quarter, from company delivery schedules.
- Compute contracts (IREN–Microsoft, Nebius–Microsoft) are not leases and are excluded.
- The **Jupiter force majeure** toggle shifts Project Jupiter's rent dates three years later, the maximum deferral reported.

### 7. Build spend (capex)

- Remaining capex for each leased phase = undelivered MW × capex per MW, spread evenly from Q4 2026 to the full-delivery quarter.
- Disclosed capex rates are used where available: TeraWulf Lake Mariner ($1.7B remaining), Riot Rockdale (~$11.5M/MW), CleanSpark (~$11M/MW), TeraWulf Hawesville (~$10M/MW). Everything else defaults to **$10M per MW**.
- Developers are grouped. Oracle's landlords (Vantage, Crusoe, Related, STACK) are one series.

---

## Repository layout

```
.
├── index.html              # the built, self-contained page (open it or serve it)
├── data/
│   └── tracker-data.json   # full dataset written by the build (states, sites, leases, bonds, flags, sources)
├── build/
│   ├── build.js            # projects the map, joins the data, writes index.html and data/tracker-data.json
│   ├── template.html       # page markup, styles and client-side logic
│   ├── states.js           # state risk scores, policy, governor polls, implications
│   ├── sites.js            # sites, leases, capex rates, bonds, red flags
│   ├── power_overrides.js  # verified power status per site (Oct 13, 2026 check) with sources
│   └── sources_base.json   # base source list (more are added in build.js)
├── package.json
└── .nojekyll               # tells GitHub Pages to serve files as-is
```

`index.html` has no runtime dependencies besides Google Fonts. The map geometry (us-atlas, Albers USA projection) is computed at build time and embedded as SVG paths, so the page works offline. Without network access it falls back to system fonts.

## Updating the data

1. Edit the source files in `build/`:
   - **Polls or policy:** `states.js`. Each state has `risk`, `policy[]`, `race.polls[]` as `[pollster, date, candidateA%, candidateB%]`, and `implication`.
   - **New site:** add it to `projects` in `sites.js` (id, owner ticker, developer, tenant, state, lat/lon, MW, power, pc).
   - **Power status change:** edit `power_overrides.js`. It wins over `sites.js` and carries the source line.
   - **New lease or phase:** add to `leases` (site id, tenant, MW, annual rent $M, first and full quarter as `"YYYYQn"`, value, term, source; `est:true` if estimated).
   - **New bond:** add to `bonds` (issuer, instrument, size $M, type, `exp` = site ids or `"ALL"` for corporate debt, `ver` source).
   - **Red flag:** add to `flags` (severity `crit` / `high` / `med`, title, issuer, date, site id, body).
2. Rebuild:
   ```bash
   npm install
   npm run build
   ```
3. Open `index.html` to check it, then commit and push.

The build validates that every bond, lease and flag points to a real site id and stops if one doesn't.

## Publishing on GitHub Pages

1. Create a new repository on GitHub, for example `data-center-political-risk-tracker`.
2. Push this folder:
   ```bash
   git init
   git add .
   git commit -m "Data Center Political Risk Tracker v1"
   git branch -M main
   git remote add origin https://github.com/<your-username>/data-center-political-risk-tracker.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, choose `main` and `/ (root)`, then save.
4. After a minute or two the tracker is live at `https://<your-username>.github.io/data-center-political-risk-tracker/`.

## Caveats

- **Point-in-time snapshot (Oct 13, 2026).** Polls, power status, policy and bond terms change. Re-check before relying on any figure.
- **Scores are analyst judgments.** The formula is transparent and easy to change in `template.html` (`PF`, `HOSTILE`, the `tier()` thresholds), but the state risk inputs are subjective.
- **Estimates are labeled.** Rent for Oracle, Meta and several Fluidstack leases, and most capex, are modeled, not disclosed.
- **Coordinates are approximate** to town or county. Where a site is undisclosed, the marker is placed approximately and says so.
- **Not confirmed as of the snapshot:**
  - finalization of Applied Digital's Polaris Forge 2 supply contract
  - which campus hosts Nscale's Ward County site
  - the power source for CoreWeave's Kenilworth (NJ) and Digital Drive (VA) sites
  - the Beignet coupon (not on EDGAR)
- Third-party sources (SEC filings, company releases, news, polling aggregators) are linked on the page. Their content belongs to their publishers.

This is not investment, legal or financial advice.

## Version history

- **v1 (Oct 13, 2026):** first public version. 47 sites, 45 debt instruments, 38 leases, 20 states, 9 red flags.
