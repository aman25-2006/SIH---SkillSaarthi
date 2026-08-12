/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { buildRoadmap, demoProfile, getAIReply, getCareerAnalysis, getDashboardMetrics, getOpportunityMatches, getResumeGuidance } from '../data'

const SaarthiContext = createContext(null)
const storageKey = 'skillsaarthi-profile'

function readProfile() {
  if (typeof window === 'undefined') return demoProfile

  try {
    const stored = window.localStorage.getItem(storageKey)
    return stored ? { ...demoProfile, ...JSON.parse(stored) } : demoProfile
  } catch {
    return demoProfile
  }
}

export function SaarthiProvider({ children }) {
  const [profile, setProfile] = useState(readProfile)

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(profile))
  }, [profile])

  const analysis = useMemo(() => getCareerAnalysis(profile), [profile])
  const roadmap = useMemo(() => buildRoadmap(profile, analysis), [profile, analysis])
  const opportunities = useMemo(() => getOpportunityMatches(profile, analysis), [profile, analysis])
  const metrics = useMemo(() => getDashboardMetrics(profile, analysis, roadmap), [profile, analysis, roadmap])
  const resume = useMemo(() => getResumeGuidance(profile, analysis), [profile, analysis])

  const value = useMemo(
    () => ({
      profile,
      analysis,
      roadmap,
      opportunities,
      metrics,
      resume,
      updateProfile: (patch) => setProfile((current) => ({ ...current, ...patch })),
      replaceProfile: (nextProfile) => setProfile({ ...demoProfile, ...nextProfile }),
      resetDemoProfile: () => setProfile(demoProfile),
      askSaarthi: (prompt) => getAIReply(profile, prompt, analysis),
    }),
    [analysis, metrics, opportunities, profile, roadmap, resume],
  )

  return <SaarthiContext.Provider value={value}>{children}</SaarthiContext.Provider>
}

export function useSaarthi() {
  const context = useContext(SaarthiContext)
  if (!context) {
    throw new Error('useSaarthi must be used within SaarthiProvider')
  }
  return context
}