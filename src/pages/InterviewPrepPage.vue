<script setup>
import { computed, ref } from "vue";
import {
  interviewQuickFacts,
  interviewSections,
  interviewSiteMeta,
} from "../data/interviewContent";

const searchTerm = ref("");
const openSectionIds = ref(new Set(interviewSections.length ? [interviewSections[0].id] : []));
const openQuestionIds = ref(
  new Set(
    interviewSections.length && interviewSections[0].questions.length
      ? [interviewSections[0].questions[0].id]
      : [],
  ),
);

const normalizedQuery = computed(() => searchTerm.value.trim().toLowerCase());

const filteredSections = computed(() => {
  if (!normalizedQuery.value) {
    return interviewSections;
  }

  return interviewSections
    .map((section) => {
      const matchesSection =
        section.title.toLowerCase().includes(normalizedQuery.value) ||
        section.summary.toLowerCase().includes(normalizedQuery.value) ||
        section.focusAreas.some((focus) => focus.toLowerCase().includes(normalizedQuery.value));

      const questions = matchesSection
        ? section.questions
        : section.questions.filter((question) => {
            const haystack = [
              question.prompt,
              question.answer,
              question.answerTip,
              question.category,
              ...question.tags,
            ]
              .join(" ")
              .toLowerCase();

            return haystack.includes(normalizedQuery.value);
          });

      return questions.length ? { ...section, questions } : null;
    })
    .filter(Boolean);
});

function isSectionOpen(sectionId) {
  return normalizedQuery.value || openSectionIds.value.has(sectionId);
}

function isQuestionOpen(questionId) {
  return normalizedQuery.value || openQuestionIds.value.has(questionId);
}

function toggleSection(section) {
  if (normalizedQuery.value) {
    return;
  }

  const next = new Set(openSectionIds.value);

  if (next.has(section.id)) {
    next.delete(section.id);
  } else {
    next.add(section.id);

    if (section.questions.length) {
      const questionState = new Set(openQuestionIds.value);
      questionState.add(section.questions[0].id);
      openQuestionIds.value = questionState;
    }
  }

  openSectionIds.value = next;
}

function toggleQuestion(questionId) {
  if (normalizedQuery.value) {
    return;
  }

  const next = new Set(openQuestionIds.value);

  if (next.has(questionId)) {
    next.delete(questionId);
  } else {
    next.add(questionId);
  }

  openQuestionIds.value = next;
}
</script>

<template>
  <main class="page-shell">
    <section class="hero-panel">
      <div class="hero-copy">
        <span class="eyebrow">{{ interviewSiteMeta.eyebrow }}</span>
        <h1>{{ interviewSiteMeta.title }}</h1>
        <p class="hero-description">
          {{ interviewSiteMeta.description }}
        </p>
      </div>

      <div class="hero-actions">
        <a class="logout-icon" href="/logout" aria-label="Log out" title="Log out">⏻</a>
      </div>
    </section>

    <section class="facts-grid" aria-label="Quick facts">
      <article v-for="fact in interviewQuickFacts" :key="fact.label" class="fact-card">
        <span class="fact-value">{{ fact.value }}</span>
        <span class="fact-label">{{ fact.label }}</span>
      </article>
    </section>

    <section class="content-panel">
      <header class="section-header">
        <div>
          <span class="eyebrow">Interview Library</span>
          <h2>Structured practice sessions</h2>
        </div>

        <label class="section-search-field" for="interview-search">
          <input
            id="interview-search"
            v-model="searchTerm"
            type="search"
            placeholder="Search questions, answers, tags, topics..."
          />
        </label>
      </header>

      <div v-if="!filteredSections.length" class="empty-state">
        No questions matched your search. Try a broader keyword.
      </div>

      <div v-else class="accordion-stack">
        <article
          v-for="section in filteredSections"
          :key="section.id"
          class="section-card"
          :class="{ 'is-open': isSectionOpen(section.id) }"
        >
          <button class="section-toggle" type="button" @click="toggleSection(section)">
            <div>
              <p class="section-kicker">{{ section.sessionLabel }}</p>
              <h3>{{ section.title }}</h3>
              <p class="section-summary">{{ section.summary }}</p>
            </div>

            <div class="section-meta">
              <span class="count-chip">{{ section.questions.length }} questions</span>
              <span class="toggle-indicator">{{ isSectionOpen(section.id) ? "−" : "+" }}</span>
            </div>
          </button>

          <div v-if="isSectionOpen(section.id)" class="section-body">
            <div class="tag-row">
              <span v-for="focus in section.focusAreas" :key="focus" class="tag-chip">
                {{ focus }}
              </span>
            </div>

            <article
              v-for="question in section.questions"
              :key="question.id"
              class="question-card"
              :class="{ 'is-open': isQuestionOpen(question.id) }"
            >
              <button class="question-toggle" type="button" @click="toggleQuestion(question.id)">
                <div>
                  <p class="question-category">{{ question.category }}</p>
                  <h4>{{ question.prompt }}</h4>
                </div>

                <div class="question-side">
                  <span class="toggle-indicator">{{ isQuestionOpen(question.id) ? "−" : "+" }}</span>
                </div>
              </button>

              <div v-if="isQuestionOpen(question.id)" class="question-body">
                <p class="answer-highlight">Tips: {{ question.answerTip }}</p>
                <p class="answer-copy">{{ question.answer }}</p>

                <div class="tag-row">
                  <span v-for="tag in question.tags" :key="tag" class="tag-chip subtle">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </article>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>
