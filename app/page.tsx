import AgeCalculator from '@/components/AgeCalculator'
import AdSense from '@/components/AdSense'
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

        {/* Top Ad */}
        <div className="mb-8 flex justify-center">
          <AdSense slot="top-banner" format="horizontal" />
        </div>

        <AgeCalculator />

        {/* Middle Ad */}
        <div className="my-8 flex justify-center">
          <AdSense slot="mid-content" format="rectangle" />
        </div>

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
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Your exact age in years, months, and days</li>
            <li>Total days, hours, and minutes you've lived</li>
            <li>Days until your next birthday</li>
            <li>Your astrological sign</li>
            <li>Life milestones and statistics</li>
            <li>Your age on other planets</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
            How Age Calculation Works
          </h3>
          <p className="text-gray-600 mb-4">
            Age calculation involves determining the difference between your birth date and 
            the current date. Our calculator accounts for leap years and varying month lengths 
            to provide accurate results. The calculation considers:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Leap years (366 days instead of 365)</li>
            <li>Different month lengths (28-31 days)</li>
            <li>Time zones (using your local time)</li>
            <li>Exact time if provided</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4 text-gray-600">
            <div>
              <p className="font-semibold">How accurate is this age calculator?</p>
              <p>Our calculator is extremely accurate, calculating your age down to the exact day. 
              If you provide your birth time, it can calculate down to the minute.</p>
            </div>
            <div>
              <p className="font-semibold">Does it account for leap years?</p>
              <p>Yes, the calculator properly accounts for all leap years in its calculations.</p>
            </div>
            <div>
              <p className="font-semibold">Can I calculate someone else's age?</p>
              <p>Absolutely! You can calculate anyone's age by entering their birth date.</p>
            </div>
          </div>
        </section>

        {/* Bottom Ad */}
        <div className="mt-8 mb-4 flex justify-center">
          <AdSense slot="bottom-content" format="rectangle" />
        </div>
      </div>
    </main>
  )
}