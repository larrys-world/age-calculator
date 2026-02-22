'use client'

import { useState, useEffect } from 'react'
import { 
  differenceInYears, 
  differenceInMonths, 
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  format,
  parse,
  isValid,
  addYears,
  startOfDay,
  differenceInSeconds
} from 'date-fns'
import { Calendar, Clock, Heart, Wind, Star } from 'lucide-react'

interface AgeData {
  years: number
  months: number
  days: number
  totalDays: number
  totalHours: number
  totalMinutes: number
  nextBirthday: Date
  daysUntilBirthday: number
  zodiacSign: string
  chineseZodiac: string
  heartbeats: number
  breaths: number
}

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('')
  const [ageData, setAgeData] = useState<AgeData | null>(null)
  const [error, setError] = useState('')

  const getZodiacSign = (date: Date): string => {
    const month = date.getMonth() + 1
    const day = date.getDate()
    
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries ♈'
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus ♉'
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini ♊'
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer ♋'
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo ♌'
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo ♍'
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra ♎'
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio ♏'
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius ♐'
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn ♑'
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius ♒'
    return 'Pisces ♓'
  }

  const getChineseZodiac = (year: number): string => {
    const animals = ['Rat 🐀', 'Ox 🐂', 'Tiger 🐅', 'Rabbit 🐇', 'Dragon 🐉', 'Snake 🐍', 
                    'Horse 🐴', 'Goat 🐐', 'Monkey 🐒', 'Rooster 🐓', 'Dog 🐕', 'Pig 🐖']
    return animals[(year - 1900) % 12]
  }

  const calculateAge = () => {
    setError('')
    
    // Try multiple date formats
    const formats = ['yyyy-MM-dd', 'MM/dd/yyyy', 'dd/MM/yyyy', 'MM-dd-yyyy']
    let parsedDate: Date | null = null
    
    for (const formatString of formats) {
      const attempt = parse(birthDate, formatString, new Date())
      if (isValid(attempt)) {
        parsedDate = attempt
        break
      }
    }
    
    if (!parsedDate || !isValid(parsedDate)) {
      setError('Please enter a valid date (e.g., MM/DD/YYYY or YYYY-MM-DD)')
      setAgeData(null)
      return
    }
    
    const now = new Date()
    
    if (parsedDate > now) {
      setError('Birth date cannot be in the future')
      setAgeData(null)
      return
    }
    
    // Calculate age components
    const years = differenceInYears(now, parsedDate)
    const months = differenceInMonths(now, parsedDate) % 12
    const totalMonths = differenceInMonths(now, parsedDate)
    const days = differenceInDays(now, parsedDate) - (differenceInMonths(now, parsedDate) * 30.44) // Approximate
    
    // Calculate totals
    const totalDays = differenceInDays(now, parsedDate)
    const totalHours = differenceInHours(now, parsedDate)
    const totalMinutes = differenceInMinutes(now, parsedDate)
    const totalSeconds = differenceInSeconds(now, parsedDate)
    
    // Calculate next birthday
    let nextBirthday = new Date(now.getFullYear(), parsedDate.getMonth(), parsedDate.getDate())
    if (nextBirthday < now) {
      nextBirthday = addYears(nextBirthday, 1)
    }
    const daysUntilBirthday = differenceInDays(nextBirthday, startOfDay(now))
    
    // Fun statistics (approximate)
    const heartbeats = Math.floor(totalMinutes * 70) // Average 70 bpm
    const breaths = Math.floor(totalMinutes * 15) // Average 15 breaths per minute
    
    setAgeData({
      years,
      months: Math.floor(months),
      days: Math.floor(days),
      totalDays,
      totalHours,
      totalMinutes,
      nextBirthday,
      daysUntilBirthday,
      zodiacSign: getZodiacSign(parsedDate),
      chineseZodiac: getChineseZodiac(parsedDate.getFullYear()),
      heartbeats,
      breaths
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Input Section */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Enter Your Birth Date
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            placeholder="MM/DD/YYYY or YYYY-MM-DD"
            className="flex-1 px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={calculateAge}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Calculate
          </button>
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
      </div>

      {/* Results Section */}
      {ageData && (
        <div className="space-y-6">
          {/* Main Age Display */}
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Age</h2>
            <div className="text-4xl font-bold text-blue-600">
              {ageData.years} years, {ageData.months} months, {ageData.days} days
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-gray-600" />
                <h3 className="font-semibold text-gray-900">Total Time Lived</h3>
              </div>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>{ageData.totalDays.toLocaleString()} days</li>
                <li>{ageData.totalHours.toLocaleString()} hours</li>
                <li>{ageData.totalMinutes.toLocaleString()} minutes</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-gray-600" />
                <h3 className="font-semibold text-gray-900">Next Birthday</h3>
              </div>
              <p className="text-sm text-gray-600">
                {format(ageData.nextBirthday, 'MMMM d, yyyy')}
              </p>
              <p className="text-lg font-semibold text-blue-600">
                {ageData.daysUntilBirthday === 0 
                  ? '🎉 Happy Birthday! 🎉'
                  : `${ageData.daysUntilBirthday} days to go!`
                }
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-gray-600" />
                <h3 className="font-semibold text-gray-900">Zodiac Signs</h3>
              </div>
              <p className="text-sm text-gray-600">
                Western: {ageData.zodiacSign}
              </p>
              <p className="text-sm text-gray-600">
                Chinese: {ageData.chineseZodiac}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-gray-600" />
                <h3 className="font-semibold text-gray-900">Life Statistics</h3>
              </div>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>~{ageData.heartbeats.toLocaleString()} heartbeats</li>
                <li>~{ageData.breaths.toLocaleString()} breaths</li>
              </ul>
            </div>
          </div>

          {/* Fun Facts */}
          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Fun Facts About Your Age</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• You've been alive for {(ageData.totalDays / 365.25).toFixed(1)} years</li>
              <li>• You've experienced approximately {Math.floor(ageData.years * 365.25 / 7)} weekends</li>
              <li>• You've lived through {ageData.years * 4} seasons</li>
              {ageData.years >= 18 && <li>• You've been an adult for {ageData.years - 18} years</li>}
              <li>• If you slept 8 hours a day, you've been asleep for {Math.floor(ageData.totalDays / 3).toLocaleString()} days</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}