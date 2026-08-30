const { news, publications, service, experience } = window.siteData;

const escapeHTML = (value) => String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));

function renderContent() {
  const newsList = document.querySelector("#news-list");
  newsList.innerHTML = news.map((item, index) => `
    <li class="news-item" ${index >= 4 ? "hidden" : ""}>
      <time class="news-date">${escapeHTML(item.date)}</time>
      <span>${escapeHTML(item.event)}</span>
    </li>`).join("");

  const more = document.querySelector("#more-news");
  if (news.length <= 4) more.hidden = true;
  more.addEventListener("click", () => {
    const expanding = more.getAttribute("aria-expanded") === "false";
    document.querySelectorAll(".news-item").forEach((item, index) => { if (index >= 4) item.hidden = !expanding; });
    more.setAttribute("aria-expanded", String(expanding));
    more.innerHTML = expanding ? 'Less news <span aria-hidden="true">↑</span>' : 'More news <span aria-hidden="true">↓</span>';
  });

  const githubIcon = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.02c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.41-1.26.74-1.55-2.57-.29-5.27-1.29-5.27-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.71 5.4-5.29 5.69.42.36.79 1.06.79 2.14v3.05c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"/>
    </svg>`;

  const renderPublicationLinks = links => {
    if (!links.length) return "";
    const textLinks = links.filter(link => link.type === "text");
    const githubLinks = links.filter(link => link.type === "github");
    const groupedText = textLinks.length ? `
      <span class="pub-link-group">[${textLinks.map(link => `<a href="${escapeHTML(link.url)}">${escapeHTML(link.label)}</a>`).join('<span aria-hidden="true"> | </span>')}]</span>` : "";
    const icons = githubLinks.map(link => `
      <a class="github-link" href="${escapeHTML(link.url)}" aria-label="${escapeHTML(link.label)} repository">${githubIcon}</a>`).join("");
    return `<span class="pub-links">${groupedText}${icons}</span>`;
  };

  document.querySelector("#publication-list").innerHTML = publications.map((pub, index) => `
    <article class="publication">
      <div class="publication-meta">
        <span class="publication-index">pub.${String(index + 1).padStart(2, "0")}</span>
        ${renderPublicationLinks(pub.links)}
      </div>
      <h3>${escapeHTML(pub.title)}</h3>
      <p class="authors">${pub.authors.map(name => name === "Alessandro Botta" ? `<strong>${escapeHTML(name)}</strong>` : escapeHTML(name)).join(" · ")}</p>
      <p class="venue">${escapeHTML(pub.venue)}</p>
    </article>`).join("");

  document.querySelector("#service-list").innerHTML = service.map(item => `
    <div class="compact-row"><span class="year">${escapeHTML(item.year)}</span><span>${escapeHTML(item.venue)}</span><span>${escapeHTML(item.role)}</span></div>`).join("");

  const renderTimelineItems = items => items.map(item => `
    <article class="timeline-item">
      <div><h3>${escapeHTML(item.institution)}</h3><p class="timeline-title">${escapeHTML(item.title)}</p></div>
      <time>${escapeHTML(item.date)}</time>
      <p class="timeline-description">${escapeHTML(item.description)}</p>
    </article>`).join("");

  const categoryFor = item => item.category ||
    (item.title.includes("Researcher") || item.title.includes("Intern") ? "research" : "education");

  document.querySelector("#experience-list").innerHTML = `
    <div class="timeline-group">
      <h3 class="timeline-group-title">research experience</h3>
      ${renderTimelineItems(experience.filter(item => categoryFor(item) === "research"))}
    </div>
    <div class="timeline-group">
      <h3 class="timeline-group-title">education</h3>
      ${renderTimelineItems(experience.filter(item => categoryFor(item) === "education"))}
    </div>`;
}

function renderProtectedEmail() {
  const encodedAddress = [97, 108, 101, 115, 115, 97, 110, 100, 114, 111, 46, 98, 111, 116, 116, 97, 64, 117, 116, 100, 97, 108, 108, 97, 115, 46, 101, 100, 117];
  const address = String.fromCharCode(...encodedAddress);
  const link = document.createElement("a");
  link.href = `mailto:${address}`;
  link.textContent = address;
  link.setAttribute("aria-label", `Email ${address}`);
  document.querySelector("#protected-email").replaceChildren(link);
}

const completionPrefix = "I do research in software engineering. With an interest in";
const researchCompletions = [
  "AI for software engineering",
  "mutation testing",
  "software documentation",
  "program analysis and repository mining",
  "agent harness testing"
];
const scheduledCompletions = new Map([
  [3, "getting free food at conferences"],
  [5, "convincing Reviewer 2"],
  [6, "Gengar, Porygon-Z and Rotom programming languages"]
]);

const tokenizedCompletions = {
  "AI for software engineering": [" AI", " for", " soft", "ware", " engineer", "ing"],
  "mutation testing": [" mut", "ation", " test", "ing"],
  "software documentation": [" soft", "ware", " document", "ation"],
  "program analysis and repository mining": [" program", " analysis", " and", " repository", " min", "ing"],
  "agent harness testing": [" agent", " harness", " test", "ing"],
  "getting free food at conferences": [" getting", " free", " food", " at", " confer", "ences"],
  "convincing Reviewer 2": [" convinc", "ing", " Review", "er", " 2"],
  "Gengar, Porygon-Z and Rotom programming languages": [" Geng", "ar", ",", " Pory", "gon", "-", "Z", " and", " Rot", "om", " program", "ming", " language", "s"]
};

const alternativeTokens = [
  " AI", " ML", " code", " test", " soft", "ware", " program", " analysis",
  " repair", " model", " data", "ing", "ation", " and", " for", " with"
];
const punctuationAlternatives = [",", ".", "-", ":"];

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let runId = 0;
let completionIndex = 0;
let completionCycle = [];

const shuffle = values => {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index--) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
};

const buildCompletionCycle = () => {
  const research = shuffle(researchCompletions);
  return Array.from({ length: 8 }, (_, index) =>
    scheduledCompletions.get(index + 1) || research.shift());
};

const makeTokenDistribution = target => {
  const pool = punctuationAlternatives.includes(target) ? punctuationAlternatives : alternativeTokens;
  const alternatives = shuffle(pool.filter(token => token !== target)).slice(0, 3);
  const tokens = shuffle([target, ...alternatives]);
  const rawWeights = tokens.map(token => token === target
    ? 0.9 + Math.random() * 0.45
    : 0.45 + Math.random() * 0.65);
  const total = rawWeights.reduce((sum, weight) => sum + weight, 0);
  return tokens.map((token, index) => ({ token, p: rawWeights[index] / total * 100 }));
};

const renderDistribution = options => options.map((option, index) => `
  <div class="candidate" style="--p:${option.p}; animation-delay:${index * 35}ms">
    <span>${escapeHTML(option.token)}</span><span class="bar-track"><span class="bar"></span></span><span>${(option.p / 100).toFixed(2)}</span>
  </div>`).join("");

async function playCurrentCompletion() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const currentRun = ++runId;
  const text = document.querySelector("#generated-text");
  const distribution = document.querySelector("#distribution");
  const replay = document.querySelector("#replay");
  const status = document.querySelector("#animation-status");
  text.textContent = completionPrefix;
  distribution.innerHTML = "";
  replay.classList.remove("ready");
  replay.disabled = true;

  const completion = completionCycle[completionIndex];
  const targetTokens = tokenizedCompletions[completion];
  let generated = "";

  for (const targetToken of targetTokens) {
    if (currentRun !== runId) return;
    const options = makeTokenDistribution(targetToken);
    distribution.innerHTML = renderDistribution(options);
    await sleep(900);
    if (currentRun !== runId) return;

    const chosenIndex = options.findIndex(option => option.token === targetToken);
    distribution.children[chosenIndex].classList.add("selected");
    await sleep(180);
    generated += targetToken;
    text.textContent = completionPrefix + generated;
    distribution.innerHTML = "";
    await sleep(90);
  }

  text.textContent += ".";
  status.textContent = `Sample ${completionIndex + 1} of 8: ${text.textContent}`;
  const isLastCompletion = completionIndex === completionCycle.length - 1;
  replay.querySelector("span").textContent = "regenerate";
  replay.setAttribute("aria-label", isLastCompletion ? "Reset completion samples" : "Generate another completion");
  replay.disabled = false;
  replay.classList.add("ready");
}

renderContent();
renderProtectedEmail();
completionCycle = buildCompletionCycle();
document.querySelector("#replay").addEventListener("click", () => {
  if (completionIndex === completionCycle.length - 1) {
    completionCycle = buildCompletionCycle();
    completionIndex = 0;
  } else {
    completionIndex += 1;
  }
  playCurrentCompletion();
});
playCurrentCompletion();
