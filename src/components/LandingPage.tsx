import React from 'react';
import {
  ArrowRight,
  BookOpen,
  Gamepad2,
  Bot,
  Trophy,
  Volume2,
  Globe,
} from 'lucide-react';
import { useI18n, INITIAL_UI_LANGUAGES, translateCategory } from '../utils/i18n';
import { COUNTRY_LANGUAGES, OFFICIAL_SECTIONS, PROFESSION_OPTIONS } from '../data/curriculum';
import { LanguagePicker } from './LanguagePicker';
import { WordFloatBackdrop } from './WordFloatBackdrop';
import { Flag } from './Flag';

interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  const { t } = useI18n();

  // Titles only — the icon plus a short label says enough, and a wall of
  // descriptions is what made the page hard to scan.
  const features = [
    { icon: BookOpen, title: t('landing.f1_title', '20 ta hayotiy ssenariy') },
    { icon: Bot, title: t('landing.f2_title', 'AI bilan jonli dialog') },
    { icon: Gamepad2, title: t('landing.f3_title', "Interaktiv o'yinlar") },
    { icon: Volume2, title: t('landing.f4_title', 'Tabiiy talaffuz') },
    { icon: Globe, title: t('landing.f5_title', 'Har qanday til va davlat') },
    { icon: Trophy, title: t('landing.f6_title', 'Taraqqiyot va yutuqlar') },
  ];

  const steps = [
    { n: '1', title: t('landing.s1_title', 'Kasbingizni tanlang') },
    { n: '2', title: t('landing.s2_title', 'Tilni tanlang') },
    { n: '3', title: t('landing.s3_title', 'Mashq qilishni boshlang') },
  ];

  return (
    <div className="min-h-screen bg-surface">

      {/* ── Header ───────────────────────────────────────────── */}
      <header className="sticky top-0 z-30 h-16 bg-surface/85 backdrop-blur-md border-b border-line">
        <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-accent-500 flex items-center justify-center text-white font-bold text-sm">
              T
            </div>
            <span className="text-base font-bold text-ink tracking-tight">
              Til<span className="text-accent-600">Top</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <LanguagePicker align="right" />
            <button
              type="button"
              id="landing-get-started-top"
              onClick={onGetStarted}
              className="px-3.5 py-2 rounded-lg bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold transition-colors cursor-pointer press"
            >
              {t('landing.cta_start', 'Boshlash')}
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-line bg-accent-50">
        <WordFloatBackdrop />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
          <h1
            className="text-3xl sm:text-5xl font-bold text-ink tracking-tight leading-[1.1] max-w-3xl mx-auto animate-rise"
            style={{ animationDelay: '0.05s' }}
          >
            {t('landing.hero_title', "Tilni hayotdan o'rganing")}
          </h1>

          <p
            className="mt-4 text-base sm:text-lg text-ink-muted max-w-xl mx-auto animate-rise"
            style={{ animationDelay: '0.12s' }}
          >
            {t('landing.hero_subtitle', '20 ta real vaziyat, AI suhbatdosh bilan mashq qiling.')}
          </p>

          <div
            className="mt-8 flex justify-center animate-rise"
            style={{ animationDelay: '0.19s' }}
          >
            <button
              type="button"
              id="landing-get-started-hero"
              onClick={onGetStarted}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold transition-colors cursor-pointer press"
            >
              {t('landing.cta_free', 'Bepul boshlash')}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-1.5 animate-fade-in"
            style={{ animationDelay: '0.26s' }}
          >
            {COUNTRY_LANGUAGES.slice(0, 8).map((c) => (
              <span
                key={c.code}
                title={`${c.country} — ${c.languageName}`}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface border border-line text-[11px] font-medium text-ink-muted lift"
              >
                <Flag code={c.flag} title={c.country} className="w-4 h-auto" />
                {c.nativeName}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="border-b border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 stagger">
          {[
            { value: String(OFFICIAL_SECTIONS.length), label: t('landing.stat_scenarios', 'Hayotiy ssenariy') },
            { value: `${COUNTRY_LANGUAGES.length}+`, label: t('landing.stat_langs', 'Til va davlat') },
            { value: String(PROFESSION_OPTIONS.length), label: t('landing.stat_prof', 'Kasbiy yo\'nalish') },
            { value: '4', label: t('landing.stat_games', 'Interaktiv o\'yin') },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-ink tabular-nums">{s.value}</p>
              <p className="text-xs text-ink-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">
          {t('landing.features_title', 'Nima olasiz')}
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 stagger">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="flex items-center gap-3 p-4 rounded-xl border border-line bg-surface lift hover:border-accent-300"
              >
                <span className="w-9 h-9 rounded-lg bg-accent-50 text-accent-600 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-[18px] h-[18px]" />
                </span>
                <h3 className="text-sm font-semibold text-ink">{f.title}</h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section className="border-y border-line bg-surface-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight text-center">
            {t('landing.how_title', 'Uch qadam')}
          </h2>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 stagger">
            {steps.map((s) => (
              <div key={s.n} className="flex items-center justify-center gap-3">
                <span className="w-9 h-9 rounded-full bg-accent-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {s.n}
                </span>
                <h3 className="text-sm font-semibold text-ink">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scenario preview ─────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">
          {t('landing.scenarios_title', 'Ssenariylar')}
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 stagger">
          {OFFICIAL_SECTIONS.slice(0, 6).map((sec) => (
            <div
              key={sec.section_id}
              className="flex items-start gap-3 p-4 rounded-xl border border-line bg-surface lift hover:border-accent-300"
            >
              <span className="w-7 h-7 rounded-lg bg-accent-50 text-accent-700 flex items-center justify-center text-xs font-semibold tabular-nums flex-shrink-0">
                {sec.section_id}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium text-ink truncate">{sec.title}</span>
                <span className="block text-xs text-ink-subtle truncate">{translateCategory(t, sec.category)}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="border-t border-line bg-accent-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">
            {t('landing.final_title', 'Birinchi darsni boshlang')}
          </h2>

          <button
            type="button"
            id="landing-get-started-final"
            onClick={onGetStarted}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold transition-colors cursor-pointer press"
          >
            {t('landing.cta_free', 'Bepul boshlash')}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between gap-3 text-xs text-ink-subtle">
          <span className="font-semibold text-ink-muted">TilTop</span>
          <div className="flex items-center gap-1">
            {INITIAL_UI_LANGUAGES.slice(0, 6).map((l) => (
              <Flag key={l.code} code={l.flag} title={l.name} className="w-4 h-auto" />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};
