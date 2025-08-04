'use client'

import { useEffect, useState } from 'react'

interface VisitorData {
  ip?: string
  userAgent: string
  timestamp: string
  sessionId: string
  duration?: number
}

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const [sessionStart] = useState(Date.now())
  const [sessionId] = useState(() => Math.random().toString(36).substring(2))

  useEffect(() => {
    const trackVisit = async () => {
      const visitorData: VisitorData = {
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        sessionId,
      }

      try {
        // Try to get IP address (this will only work if you have a service like ipapi.co)
        const ipResponse = await fetch('https://api.ipify.org?format=json')
        const ipData = await ipResponse.json()
        visitorData.ip = ipData.ip
      } catch (error) {
        console.log('Could not fetch IP address')
      }

      // Store in localStorage for now (you can replace this with your preferred storage method)
      const existingData = localStorage.getItem('visitor-analytics')
      const analytics = existingData ? JSON.parse(existingData) : []
      analytics.push(visitorData)
      localStorage.setItem('visitor-analytics', JSON.stringify(analytics))

      // You can also send this data to your backend or Google Sheets
      // For Google Sheets, you'd need to set up a Google Apps Script
      console.log('Visitor tracked:', visitorData)
    }

    const trackSessionEnd = () => {
      const duration = Date.now() - sessionStart
      const existingData = localStorage.getItem('visitor-analytics')
      if (existingData) {
        const analytics = JSON.parse(existingData)
        const lastEntry = analytics[analytics.length - 1]
        if (lastEntry && lastEntry.sessionId === sessionId) {
          lastEntry.duration = duration
          localStorage.setItem('visitor-analytics', JSON.stringify(analytics))
        }
      }
    }

    // Track visit on page load
    trackVisit()

    // Track session end when user leaves
    window.addEventListener('beforeunload', trackSessionEnd)
    window.addEventListener('pagehide', trackSessionEnd)

    return () => {
      window.removeEventListener('beforeunload', trackSessionEnd)
      window.removeEventListener('pagehide', trackSessionEnd)
    }
  }, [sessionStart, sessionId])

  return <>{children}</>
}