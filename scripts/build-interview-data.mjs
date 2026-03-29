import fs from "node:fs";
import path from "node:path";

const sourcePath = path.resolve("content/interview-transcript.txt");
const outputPath = path.resolve("src/data/interviewContent.js");

const sectionMeta = {
  "1": {
    title: "Introductions, Cloud, And Coding Fundamentals",
    summary: "Self-introduction, database choices, and a stack-based coding discussion.",
    focusAreas: ["Introductions", "AWS", "Databases", "Coding"],
  },
  "2": {
    title: "Current Project And Gateway Architecture",
    summary: "Microservice orchestration, gateway flow, resiliency, Kafka, and reactive APIs.",
    focusAreas: ["Microservices", "Gateway", "Kafka", "Reactive"],
  },
  "3": {
    title: "Frontend, Debugging, And Distributed Teamwork",
    summary: "Regex debugging, memory usage, Angular discussions, and offshore coordination.",
    focusAreas: ["Debugging", "Angular", "TDD", "Collaboration"],
  },
  "4": {
    title: "System Design: Inventory Platform",
    summary: "Inventory ingestion, reservations, checkout flow, scalability, and resilience.",
    focusAreas: ["System Design", "Inventory", "Reservation", "Scalability"],
  },
  "5": {
    title: "Ownership, AWS, Docker, And Design Principles",
    summary: "Project ownership, missed commitments, Docker, Kubernetes, SOLID, and databases.",
    focusAreas: ["Ownership", "AWS", "Docker", "SOLID"],
  },
  "6": {
    title: "Leadership, Agile, Growth, And Architecture",
    summary: "Career growth, leadership, agile practices, debugging, and data-model design.",
    focusAreas: ["Leadership", "Agile", "Architecture", "Debugging"],
  },
  "7": {
    title: "Sprint Flow, CI/CD, And Production Challenges",
    summary: "Story lifecycle, endpoint implementation, deployments, and production problem solving.",
    focusAreas: ["Sprint Process", "Spring Boot", "CI/CD", "Production"],
  },
  "8": {
    title: "Microservices, Kubernetes, And API Design",
    summary: "Project architecture, Kubernetes deployment concepts, bookstore APIs, and scaling.",
    focusAreas: ["Architecture", "Kubernetes", "REST APIs", "Payments"],
  },
  "9": {
    title: "System Design: Trading Platform",
    summary: "Trading services, portfolio concepts, SQL reporting, and performance-oriented schema design.",
    focusAreas: ["Trading", "System Design", "SQL", "Portfolio"],
  },
  "10": {
    title: "Recent Work, Security, CI/CD, And Team Dynamics",
    summary: "Past project details, modernization ownership, security, testing, and collaboration examples.",
    focusAreas: ["Experience", "Security", "Testing", "Teamwork"],
  },
  "11": {
    title: "Behavioral And Technical Interview Round",
    summary: "Introduction, experience highlights, and mixed backend engineering discussion.",
    focusAreas: ["Behavioral", "Backend", "Architecture", "Experience"],
  },
  "12": {
    title: "Concise Introduction Round",
    summary: "Short-form introduction and experience-driven prompts.",
    focusAreas: ["Introductions", "Experience", "Communication"],
  },
  "13": {
    title: "System Design: URL Shortener",
    summary: "Design discussion covering service architecture, scale, and storage choices.",
    focusAreas: ["System Design", "URL Shortener", "Scale"],
  },
  "14": {
    title: "Problem Solving And Difficult Technical Challenges",
    summary: "Difficult issues, solution strategy, and technical tradeoff conversations.",
    focusAreas: ["Problem Solving", "Technical Depth", "Debugging"],
  },
  "15": {
    title: "Motivation, Role Fit, And Behavioral Questions",
    summary: "Interest in the role, communication style, and reflective behavioral responses.",
    focusAreas: ["Motivation", "Behavioral", "Communication"],
  },
  "16": {
    title: "GEICO Experience, Security, And Agile Delivery",
    summary: "Canonical data transformation, security controls, Angular work, and delivery practices.",
    focusAreas: ["GEICO", "Security", "Angular", "Agile"],
  },
};

const keywordTags = [
  ["Spring Boot", /spring boot|spring cloud gateway|spring security/i],
  ["AWS", /\baws\b|ecs|ecr|lambda|cloudformation|fargate|route 53|cloudwatch/i],
  ["Angular", /\bangular\b|rxjs|reactive forms/i],
  ["Microservices", /microservices?|orchestration|gateway/i],
  ["System Design", /design|architecture|scalable|fault-tolerant/i],
  ["Databases", /mysql|postgresql|mongodb|dynamodb|database|sql|nosql/i],
  ["Docker", /docker|dockerfile|container/i],
  ["Kubernetes", /kubernetes|helm|kubectl|configmap|secret/i],
  ["Security", /security|jwt|oauth|authentication|authorization|token/i],
  ["Testing", /junit|cucumber|unit test|tdd|integration test/i],
  ["Kafka", /\bkafka\b|topic|consumer|producer/i],
  ["Agile", /agile|sprint|scrum|jira|retrospective/i],
];

function normalize(text) {
  return text
    .replace(/\r/g, "\n")
    .replace(/[\u2028\u2029]/g, "\n")
    .replace(/\u00a0/g, " ")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

function answerLengthLabel(answer) {
  const words = answer.split(/\s+/).filter(Boolean).length;

  if (words < 45) {
    return "Short answer";
  }

  if (words < 120) {
    return "Detailed answer";
  }

  return "Long answer";
}

function classifyQuestion(prompt) {
  if (/design|architecture|system/i.test(prompt)) {
    return "System design";
  }

  if (/docker|kubernetes|helm|ecs|ecr|terraform|ci\/cd|deployment/i.test(prompt)) {
    return "Platform";
  }

  if (/security|token|jwt|authorization|authentication/i.test(prompt)) {
    return "Security";
  }

  if (/angular|react|frontend|ui/i.test(prompt)) {
    return "Frontend";
  }

  if (/sql|database|mysql|dynamodb|schema|query/i.test(prompt)) {
    return "Data";
  }

  if (/lead|team|agile|sprint|collaborat|commitment|role|introduce/i.test(prompt)) {
    return "Behavioral";
  }

  return "Technical";
}

function deriveTags(text) {
  return keywordTags
    .filter(([, regex]) => regex.test(text))
    .map(([label]) => label)
    .slice(0, 4);
}

function buildAnswerTip(prompt, category) {
  if (/introduce yourself|tell me about yourself|brief introduction|education and your last job/i.test(prompt)) {
    return "Lead with your current role, total experience, strongest technologies, and close with the business impact of your work.";
  }

  if (/current role|current project|project which you're working on|recent project|most interesting project/i.test(prompt)) {
    return "Answer in a clear flow: project context, your ownership, the architecture or stack, and the measurable value delivered.";
  }

  if (/design|architecture|system/i.test(prompt)) {
    return "Start with requirements and scope, identify core services and data model, then cover scale, failure handling, and tradeoffs.";
  }

  if (/how would you|walk me through|process|flow|lifecycle/i.test(prompt)) {
    return "Use a step-by-step structure, call out the main components involved, and explain why each step exists.";
  }

  if (/sql|query|database|schema|index|partition/i.test(prompt)) {
    return "Be explicit about data shape, access patterns, and performance implications instead of staying at a high level.";
  }

  if (/docker|kubernetes|helm|ecs|ecr|deployment|ci\/cd|terraform/i.test(prompt)) {
    return "Describe the deployment path in order: build artifact, registry, runtime platform, configuration, and verification after release.";
  }

  if (/security|jwt|oauth|authentication|authorization|token/i.test(prompt)) {
    return "State the trust boundary first, then explain how identity is validated, how access is enforced, and how secrets stay protected.";
  }

  if (/debug|bug|memory|issue|failure|exception/i.test(prompt)) {
    return "Frame the answer as reproduction, signals you checked, root-cause isolation, fix, and how you prevented recurrence.";
  }

  if (/agile|sprint|team|leadership|commitment|convince|collaborat/i.test(prompt) || category === "Behavioral") {
    return "Keep the response concrete: situation, your specific action, the reasoning behind it, and the outcome.";
  }

  if (/angular|react|frontend|ui/i.test(prompt)) {
    return "Balance implementation details with maintainability: component structure, state handling, debugging approach, and team readability.";
  }

  return "Answer directly, keep the structure crisp, and support the point with a specific example rather than generic statements.";
}

function isQuestionStart(lines, index) {
  if (!lines[index] || /^Answer:/i.test(lines[index])) {
    return false;
  }

  let nextIndex = index + 1;

  while (nextIndex < lines.length && !lines[nextIndex]) {
    nextIndex += 1;
  }

  return nextIndex < lines.length && /^Answer:/i.test(lines[nextIndex]);
}

const transcript = normalize(fs.readFileSync(sourcePath, "utf8"));
const rawLines = transcript
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean);

const rawSections = [];
let currentSection = null;

for (const line of rawLines) {
  if (/^\d+$/.test(line)) {
    currentSection = { id: line, lines: [] };
    rawSections.push(currentSection);
    continue;
  }

  if (currentSection) {
    currentSection.lines.push(line);
  }
}

const interviewSections = rawSections.map((section, sectionIndex) => {
  const metadata = sectionMeta[section.id] ?? {
    title: `Interview Session ${section.id}`,
    summary: "Question and answer set pulled from the supplied interview transcript.",
    focusAreas: ["Interview Prep"],
  };

  const questions = [];
  let index = 0;

  while (index < section.lines.length) {
    if (!isQuestionStart(section.lines, index)) {
      index += 1;
      continue;
    }

    const promptLines = [];

    while (index < section.lines.length && !/^Answer:/i.test(section.lines[index])) {
      promptLines.push(section.lines[index]);
      index += 1;
    }

    if (index >= section.lines.length) {
      break;
    }

    const answerLines = [];
    const firstAnswerLine = section.lines[index].replace(/^Answer:\s*/i, "").trim();

    if (firstAnswerLine) {
      answerLines.push(firstAnswerLine);
    }

    index += 1;

    while (index < section.lines.length && !isQuestionStart(section.lines, index)) {
      answerLines.push(section.lines[index]);
      index += 1;
    }

    const prompt = promptLines.join(" ").trim();
    const answer = answerLines.join(" ").replace(/\s+/g, " ").trim();

    if (!prompt || !answer) {
      continue;
    }

    const combinedText = `${prompt} ${answer}`;

    questions.push({
      id: `${metadata.title}-${slugify(prompt)}`,
      prompt,
      answer,
      answerTip: buildAnswerTip(prompt, classifyQuestion(prompt)),
      category: classifyQuestion(prompt),
      tags: deriveTags(combinedText),
      answerLengthLabel: answerLengthLabel(answer),
    });
  }

  return {
    id: `session-${section.id}`,
    sessionLabel: `Session ${section.id}`,
    title: metadata.title,
    summary: metadata.summary,
    focusAreas: metadata.focusAreas,
    questions,
    defaultOpen: sectionIndex === 0,
  };
});

const totalQuestions = interviewSections.reduce((sum, section) => sum + section.questions.length, 0);
const focusAreaCount = new Set(interviewSections.flatMap((section) => section.focusAreas)).size;

const siteMeta = {
  eyebrow: "Diyo Private Library",
  title: "Interview Questions And Answers",
  description:
    "A password-protected Vue site for reviewing the supplied interview transcript in a cleaner, searchable format. The content is grouped into session-level sections and question-level answers so it can be shared through a private link without exposing the document itself.",
};

const quickFacts = [
  { label: "Interview sessions", value: String(interviewSections.length) },
  { label: "Parsed Q&A entries", value: String(totalQuestions) },
  { label: "Focus areas", value: String(focusAreaCount) },
  { label: "Access model", value: "Password gate" },
];

const output = `export const interviewSiteMeta = ${JSON.stringify(siteMeta, null, 2)};

export const interviewQuickFacts = ${JSON.stringify(quickFacts, null, 2)};

export const interviewSections = ${JSON.stringify(interviewSections, null, 2)};
`;

fs.writeFileSync(outputPath, output);
console.log(`Generated ${outputPath} with ${totalQuestions} questions across ${interviewSections.length} sections.`);
