import type { Post } from "./types";

export const AUTHOR = {
  name: "Roger Das",
};

export const posts: Post[] = [
  {
    slug: "cisa-bod-26-04-risk-based-patching",
    title: "CISA BOD 26-04 Explained: What Risk-Based Patching Means for Your Team",
    description:
      "CISA's BOD 26-04 replaces severity-only patching with four risk factors and a three-day tier. Here is what changed, who it binds, and what to copy.",
    category: "Compliance",
    datePublished: "2026-11-20",
    dateModified: "2026-11-20",
    readingMinutes: 6,
    summary:
      "BOD 26-04, issued by CISA on June 10, 2026, tells US federal civilian agencies to set patch deadlines from four factors: internet exposure, KEV status, automatable exploitation, and attacker control. The highest tier gets three days. You don't have to be a federal agency to borrow the model.",
    body: [
      { type: "p", text: "For years, most patch queues were sorted by one number: CVSS. CISA's Binding Operational Directive 26-04, issued June 10, 2026, says that is not enough. It asks federal civilian agencies to decide what to fix, and how fast, based on risk." },
      { type: "h2", text: "The four factors CISA uses" },
      { type: "p", text: "According to [Help Net Security's coverage of the directive](https://www.helpnetsecurity.com/2026/06/11/cisa-risk-based-vulnerability-management-government), the decision rests on four questions:" },
      { type: "ol", items: [
        "Does the vulnerability affect an internet-facing system?",
        "Is it listed in CISA's Known Exploited Vulnerabilities (KEV) catalog?",
        "Can it be exploited in automated attacks?",
        "Does exploitation give the attacker partial or total control of the system?",
      ] },
      { type: "p", text: "A flaw that gives an attacker complete control of an internet-exposed system, is actively exploited, and can be exploited at scale sits in the highest tier. Agencies must remediate it within three days and check whether it was already exploited in their environment." },
      { type: "callout", title: "Who is bound by this", text: "BOD 26-04 applies to US federal civilian executive branch agencies. Private companies are not required to follow it. It is still a useful, public template for a defensible prioritization policy." },
      { type: "h2", text: "What the directive does not cover" },
      { type: "p", text: "CISA is open about a gap. The directive focuses on the network perimeter and does not impose the same urgency on vulnerabilities inside the network core. CISA's reasoning, quoted by Help Net Security: attackers often get in through exploitable configurations and valid credentials, a technique called living off the land. CISA points to configuration hardening, network segmentation and phishing-resistant MFA for that problem." },
      { type: "p", text: "Read that as a warning for your own program. A patch queue alone will not stop credential-based intrusions." },
      { type: "h2", text: "Other signals worth adding" },
      { type: "ul", items: [
        "**EPSS.** The Exploit Prediction Scoring System estimates the probability a vulnerability is exploited in the next 30 days. Cisco Talos argues it belongs in patch decisions.",
        "**Global CVE (GCVE).** A global view of which vulnerabilities are being exploited.",
        "**NIST LEV.** NIST has proposed Likely Exploited Vulnerabilities, an estimate of whether a flaw has already been used in attacks. It was proposed for community evaluation, so treat it as emerging.",
      ] },
      { type: "h2", text: "How to apply this in your own program" },
      { type: "ol", items: [
        "**Tag every asset with exposure.** Internet-facing or internal. Without this field you cannot apply factor one.",
        "**Join your findings to KEV.** Any finding on a KEV entry jumps the queue regardless of CVSS.",
        "**Write the tiers down.** Define which combination of factors maps to which deadline, and get sign-off from the system owner.",
        "**Add an exploitation check to your top tier.** Patching in three days does not tell you whether someone got in on day one.",
        "**Report on deadlines met, per tier.** Auditors ask for evidence that you follow your own policy.",
      ] },
      { type: "p", text: "This is where tooling earns its keep. In VulSphere, findings from your scanners flow into one lifecycle with SLA tracking and verification of the fix, so a tiered policy becomes deadlines on tickets instead of a slide in a deck." },
    ],
    sources: [
      { label: "CISA BOD 26-04: Prioritizing Security Updates Based on Risk", url: "https://www.cisa.gov/news-events/directives/bod-26-04-prioritizing-security-updates-based-risk" },
      { label: "CISA: Patch smarter, not harder", url: "https://www.cisa.gov/news-events/news/patch-smarter-not-harder" },
      { label: "Help Net Security: CISA orders federal agencies to \"patch smarter\"", url: "https://www.helpnetsecurity.com/2026/06/11/cisa-risk-based-vulnerability-management-government" },
      { label: "Cisco Talos: Less panic patching, more precision", url: "https://blog.talosintelligence.com/less-panic-patching-more-precision/" },
    ],
  },
  {
    slug: "more-cves-not-more-exploits-2026",
    title: "CVE Volume Jumped 45% in 2026. Exploitation Didn't. Here's How to Prioritize.",
    description:
      "VulnCheck's 1H-2026 data shows CVEs grew 45% while known exploited vulnerabilities grew 10%. What that means for your patch queue, with the numbers.",
    category: "Threat Intelligence",
    datePublished: "2026-11-20",
    dateModified: "2026-11-20",
    readingMinutes: 6,
    summary:
      "In the first half of 2026, CVE volume grew about 45% over the prior six months, but known exploited vulnerabilities grew about 10%. Most new CVEs will never be exploited, which makes exploitation evidence a better sorting key than raw severity.",
    body: [
      { type: "p", text: "If your scanner dashboard looks worse every quarter, you are not imagining it. VulnCheck's State of Exploitation 1H-2026 report found a significant change in vulnerability discovery and disclosure, and a large jump in the number of CVEs published. The useful question is whether exploitation rose with it." },
      { type: "h2", text: "What the data shows" },
      { type: "table", head: ["Metric (VulnCheck, 1H 2026)", "Finding"], rows: [
        ["KEVs identified in the period", "495"],
        ["KEV growth vs prior six months", "About 10%"],
        ["CVE volume growth vs prior six months", "About 45%"],
        ["KEV-to-CVE ratio", "Fell from a 2.7% peak (2H 2023) to 1.4%"],
        ["Median days from CVE publication to KEV", "80 (was 120 in 2025)"],
        ["KEVs exploited on or before CVE publication day", "23.43% (was 28.93% in 2025)"],
        ["Most-targeted category", "Content management systems, one-third of all KEVs"],
      ] },
      { type: "p", text: "VulnCheck adds a caution: exploitation often happens months or years after disclosure, so it is too early to say whether exploitation will eventually follow CVE growth or level off." },
      { type: "h2", text: "What about AI-discovered vulnerabilities?" },
      { type: "p", text: "VulnCheck looked at 1,061 vulnerabilities attributed to AI-assisted discovery. Only 14, or 1.3%, were confirmed as exploited in the wild, roughly matching the overall exploitation rate. The report also notes AI products themselves, including model-building tools, AI gateways, agents and workflow automation, are emerging as a new attack surface with known exploitation." },
      { type: "h2", text: "Three practical takeaways" },
      { type: "ol", items: [
        "**Sort by evidence of exploitation first.** KEV membership and EPSS tell you more about near-term risk than a CVSS base score alone.",
        "**Expect shorter windows.** A median of 80 days to KEV, with nearly a quarter exploited by publication day, means the top of your queue cannot wait for the monthly patch cycle.",
        "**Inventory your CMS and AI tooling.** They are where the exploitation is concentrated, and they are often missing from asset lists.",
      ] },
      { type: "callout", title: "A caveat on the source", text: "VulnCheck sells vulnerability intelligence, so treat its framing with the same care you would any vendor report. The counts are its own KEV data, which differs from CISA's catalog." },
      { type: "p", text: "The goal is not to ignore high-severity findings with no known exploitation. It is to stop treating a growing list as a growing emergency. VulSphere's risk intelligence weighs exploitability and business impact alongside severity, so the queue your team works from reflects what is likely to hurt you." },
    ],
    sources: [
      { label: "VulnCheck: State of Exploitation 1H-2026", url: "https://www.vulncheck.com/blog/state-of-exploitation-1h-2026" },
      { label: "CISA BOD 26-04", url: "https://www.cisa.gov/news-events/directives/bod-26-04-prioritizing-security-updates-based-risk" },
    ],
  },
  {
    slug: "multiple-vulnerability-scanners-one-queue",
    title: "Running Nessus, Qualys and Rapid7 Together? How to Build One Remediation Queue",
    description:
      "Multiple scanners mean duplicate findings and conflicting severities. A practical method to normalize, deduplicate and assign ownership in a single queue.",
    category: "How-to",
    datePublished: "2026-11-20",
    dateModified: "2026-11-20",
    readingMinutes: 7,
    summary:
      "When several scanners report on the same assets, the fix is a shared finding identity, one severity policy, and one owner per asset. Do these three things before you add any automation.",
    body: [
      { type: "p", text: "Most mid-size security teams end up with more than one scanner. A network scanner for infrastructure, a web application scanner for apps, maybe a second vendor inherited from an acquisition. Each does its job. Together they produce a spreadsheet problem: the same flaw reported three times, with three different severities." },
      { type: "h2", text: "Step 1: Decide what counts as the same finding" },
      { type: "p", text: "Pick the fields that define identity. For most infrastructure findings that is asset plus CVE ID plus port or service. For web application findings it is usually application, endpoint and weakness type (for example a CWE). Write the rule down. Two findings that match are one finding with two sources." },
      { type: "ul", items: [
        "Keep every source scanner attached to the merged finding as evidence.",
        "Keep the first-seen date from the earliest report. SLA clocks should start there, not when you got around to merging.",
        "Do not merge findings across different assets, even if the CVE matches.",
      ] },
      { type: "h2", text: "Step 2: Pick one severity policy" },
      { type: "p", text: "Scanners disagree on severity because they use different scoring inputs. Choose one policy and apply it everywhere. A reasonable starting point is to take the base score, then raise priority for internet-facing assets and for anything in CISA's KEV catalog. See our post on [CISA BOD 26-04](/blog/cisa-bod-26-04-risk-based-patching) for a published example of that logic." },
      { type: "h2", text: "Step 3: Give every asset one owner" },
      { type: "p", text: "Findings without owners are the main reason tickets stall. Map assets to a team or person before findings are routed. If your CMDB is incomplete, start with the assets that carry the highest tier and fill outward." },
      { type: "h2", text: "Step 4: Route to the tools people already use" },
      { type: "p", text: "Engineers will not log in to a security console to find their work. Send each merged finding to the ticketing system their team already uses, such as Jira, ServiceNow, Freshservice or Zendesk, and sync status back. See [how to set SLAs and close the loop](/blog/vulnerability-sla-tickets-verified-fixes)." },
      { type: "h2", text: "How VulSphere handles this" },
      { type: "p", text: "VulSphere integrates with Nessus, OpenVAS, Qualys, Acunetix and Rapid7 for scanning, and with Jira, ServiceNow, Freshservice and Zendesk for ticketing. Findings from each scanner land in one lifecycle, so the team works from a single list." },
      { type: "callout", title: "Check before you automate", text: "Run the merge rules on one quarter of historical scan data first. If the deduplicated count looks implausibly low, your identity rule is too loose." },
    ],
    sources: [
      { label: "CISA Known Exploited Vulnerabilities Catalog", url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog" },
      { label: "FIRST: Exploit Prediction Scoring System (EPSS)", url: "https://www.first.org/epss/" },
      { label: "MITRE CWE", url: "https://cwe.mitre.org/" },
    ],
  },
  {
    slug: "vulnerability-sla-tickets-verified-fixes",
    title: "Vulnerability SLAs That Hold Up: From Ticket to Verified Fix",
    description:
      "Set remediation SLAs by risk tier, create tickets automatically, and re-test before closing. A workflow that makes MTTR a number you can trust.",
    category: "How-to",
    datePublished: "2026-11-20",
    dateModified: "2026-11-20",
    readingMinutes: 7,
    summary:
      "A vulnerability is fixed when a re-test confirms it, not when a ticket says Done. Tie SLAs to risk tiers, create tickets automatically above a threshold, and let a failed re-test reopen the ticket.",
    body: [
      { type: "p", text: "Ask three teams for their mean time to remediate and you may get three definitions. One counts from scan date, one from ticket creation, one stops the clock when the ticket closes, whether or not the fix worked. A number built that way is hard to defend to an auditor." },
      { type: "h2", text: "Start the clock at detection" },
      { type: "p", text: "Measure from when the finding was first detected, not when someone created a ticket. Vendor guidance from [Cogent](https://www.cogent.com/academy/vulnerability-ticketing-workflows) makes the same point: manual ticket creation from scan reports adds days between scan completion and the ticket. That is a vendor claim, not a benchmark, but the mechanism is easy to see in your own data." },
      { type: "h2", text: "Set SLAs by risk tier" },
      { type: "p", text: "One deadline for everything either overwhelms teams or lets real risk drift. Define tiers from exposure and exploitation evidence. The table below is an illustrative starting point, not a standard. Adjust it to your environment and get owner sign-off." },
      { type: "table", head: ["Tier", "Example criteria", "Example SLA"], rows: [
        ["1 – Urgent", "Internet-facing, in KEV, high impact", "3 days (CISA's top tier for federal agencies)"],
        ["2 – High", "In KEV or high EPSS, internal asset", "14 days"],
        ["3 – Standard", "High severity, no exploitation evidence", "30 days"],
        ["4 – Routine", "Medium and low severity", "Next maintenance cycle"],
      ] },
      { type: "p", text: "Only the three-day figure comes from CISA's BOD 26-04, and it applies to federal agencies. The other rows are examples." },
      { type: "h2", text: "Create tickets automatically above a threshold" },
      { type: "p", text: "Auto-create tickets for tier 1 and 2 findings in Jira, ServiceNow, Freshservice or Zendesk. Include the asset, owner, evidence, fix guidance and the SLA due date in the ticket. Lower tiers can be batched into a weekly digest to avoid ticket fatigue." },
      { type: "h2", text: "Verify before you close" },
      { type: "p", text: "When a ticket moves to Done, trigger a targeted re-test of that finding. If the scanner still sees it, reopen the ticket and keep the original clock running. Only a passed re-test closes the finding and stops the timer." },
      { type: "ol", items: [
        "Ticket resolved by the owner.",
        "Re-test queued automatically for that asset and finding.",
        "Pass: finding closed, MTTR recorded. Fail: ticket reopened with the new scan evidence.",
      ] },
      { type: "h2", text: "Report on what auditors ask for" },
      { type: "ul", items: [
        "Percentage of findings closed within SLA, by tier.",
        "Open findings past SLA, with an approved exception where one exists.",
        "Re-test failure rate, which shows how often a closed ticket was not a real fix.",
      ] },
      { type: "p", text: "VulSphere follows this lifecycle by design: Request, Test, Review, Fix, Verify, Report. SLA tracking, ticketing integrations and remediation verification are built in, so the audit trail is a by-product of the work." },
    ],
    sources: [
      { label: "CISA BOD 26-04", url: "https://www.cisa.gov/news-events/directives/bod-26-04-prioritizing-security-updates-based-risk" },
      { label: "Cogent: Vulnerability ticketing workflows", url: "https://www.cogent.com/academy/vulnerability-ticketing-workflows" },
      { label: "FIRST: EPSS", url: "https://www.first.org/epss/" },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
