import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

export type IntroPhase =
  | 'initial'
  | 'dot'
  | 'unfold'
  | 'reveal-text'
  | 'hold'
  | 'curtain'
  | 'flight'
  | 'ui-cascade'
  | 'hero-content'
  | 'complete';

interface IntroContextProps {
  phase: IntroPhase;
  isHomePage: boolean;
  isComplete: boolean;
  skipIntro: () => void;
  hasReachedPhase: (target: IntroPhase) => boolean;
}

const IntroContext = createContext<IntroContextProps | undefined>(undefined);

const INTRO_STEPS: Array<{
  phase: Exclude<IntroPhase, 'complete'>;
  duration: number;
}> = [
  { phase: 'initial', duration: 140 },
  { phase: 'dot', duration: 320 },
  { phase: 'unfold', duration: 1200 },
  { phase: 'reveal-text', duration: 900 },
  { phase: 'hold', duration: 900 },
  { phase: 'curtain', duration: 950 },
  { phase: 'flight', duration: 820 },
  { phase: 'ui-cascade', duration: 1450 },
  { phase: 'hero-content', duration: 1450 },
];

const PHASE_ORDER: IntroPhase[] = [...INTRO_STEPS.map((step) => step.phase), 'complete'];

export function IntroProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [phase, setPhase] = useState<IntroPhase>('initial');

  useEffect(() => {
    if (phase === 'complete') {
      return;
    }

    const currentIndex = PHASE_ORDER.indexOf(phase);
    const nextPhase = PHASE_ORDER[currentIndex + 1];
    const currentStep = INTRO_STEPS.find((step) => step.phase === phase);

    if (!nextPhase || !currentStep) {
      return;
    }

    const timer = window.setTimeout(() => {
      setPhase(nextPhase);
    }, currentStep.duration);

    return () => window.clearTimeout(timer);
  }, [phase]);

  const isComplete = phase === 'complete';

  useEffect(() => {
    const shouldLockScroll = !isComplete;

    document.body.style.overflow = shouldLockScroll ? 'hidden' : '';
    document.documentElement.style.overflow = shouldLockScroll ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isComplete]);

  const skipIntro = useCallback(() => {
    setPhase('complete');
  }, []);

  const hasReachedPhase = useCallback(
    (target: IntroPhase) => PHASE_ORDER.indexOf(phase) >= PHASE_ORDER.indexOf(target),
    [phase]
  );

  const value = useMemo(
    () => ({
      phase,
      isHomePage,
      isComplete,
      skipIntro,
      hasReachedPhase,
    }),
    [hasReachedPhase, isComplete, isHomePage, phase, skipIntro]
  );

  return <IntroContext.Provider value={value}>{children}</IntroContext.Provider>;
}

export function useIntro() {
  const context = useContext(IntroContext);

  if (!context) {
    throw new Error('useIntro must be used within an IntroProvider');
  }

  return context;
}
