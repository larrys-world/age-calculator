import AgeCalculator from '@/components/AgeCalculator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Age Calculator - Calculate Your Exact Age',
  description: 'Calculate your exact age in years, months, days, hours, and minutes. Free age calculator with birthday countdown and interesting life statistics.',
  keywords: 'age calculator, calculate age, birthday calculator, how old am i, age in days, age in hours',
  openGraph: {
    title: 'Age Calculator - Calculate Your Exact Age',
    description: 'Calculate your exact age in years, months, days, hours, and minutes. Free online age calculator.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Age Calculator
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Calculate your exact age and discover interesting facts about your life
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 inline-block">
            <p className="text-sm text-blue-800 font-medium">
              📅 100% Free • No Registration • Instant Results
            </p>
          </div>
        </header>

        <AgeCalculator />

        <section className="mt-16 prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About Age Calculation
          </h2>
          <p className="text-gray-600 mb-4">
            Our age calculator provides precise calculations of your age down to the minute. 
            Simply enter your birth date, and we'll calculate your exact age along with 
            interesting statistics about your life journey so far.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
            What This Calculator Shows
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li>Your exact age in years, months, and days</li>
            <li>Total days, hours, and minutes you've lived</li>
            <li>Countdown to your next birthday</li>
            <li>Your zodiac sign and Chinese zodiac</li>
            <li>Interesting life statistics (heartbeats, breaths, etc.)</li>
            <li>Notable events from your birth year</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
            Age Milestones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
            <div>
              <h4 className="font-semibold mb-2">Legal Milestones</h4>
              <ul className="space-y-1 text-sm">
                <li>16 years - Driving age in many countries</li>
                <li>18 years - Legal adult in most countries</li>
                <li>21 years - Legal drinking age (US)</li>
                <li>25 years - Car rental without surcharge</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Life Milestones</h4>
              <ul className="space-y-1 text-sm">
                <li>30 years - Often considered "real adulthood"</li>
                <li>40 years - "Over the hill" celebrations</li>
                <li>50 years - Half century mark</li>
                <li>65 years - Traditional retirement age</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Birthday Gift Ideas by Age
            </h3>
            <p className="text-gray-600 mb-4">
              Looking for the perfect birthday gift? Here are some popular ideas by age group:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Kids (0-12):</strong> Educational toys, books, games, sports equipment</li>
              <li><strong>Teens (13-19):</strong> Tech gadgets, gift cards, experiences, fashion items</li>
              <li><strong>Young Adults (20-35):</strong> Travel accessories, home decor, subscriptions, fitness gear</li>
              <li><strong>Adults (36-60):</strong> Hobby supplies, wine/spirits, spa treatments, smart home devices</li>
              <li><strong>Seniors (60+):</strong> Photo albums, comfortable clothing, health devices, experiences</li>
            </ul>
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>© 2026 Age Calculator. All calculations are performed in your browser.</p>
        </footer>
      </div>
    </main>
  )
}