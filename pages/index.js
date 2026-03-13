import Header from '../components/Header'
import TodaysPlan from '../components/TodaysPlan'
import HabitTracker from '../components/HabitTracker'
import WeeklyProgress from '../components/WeeklyProgress'
import MotivationCard from '../components/MotivationCard'
import XPTracker from '../components/XPTracker'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header greeting="Good morning! Ready to build your best self today?" />

      <div className="space-y-6 mt-4">
        <TodaysPlan 
          tasks={[
            { time: '07:00', subject: 'Math Study' },
            { time: '10:00', subject: 'English Homework' },
            { time: '19:00', subject: 'Review Biology' }
          ]}
        />

        <HabitTracker 
          habits={[
            'Study 1 hour',
            'Read 10 pages',
            'Exercise',
            'No social media during study'
          ]}
        />

        <WeeklyProgress 
          studyHours={12} 
          currentStreak={3} 
          weeklyGoal={15} 
        />

        <MotivationCard quote="The secret of getting ahead is getting started." />

        <XPTracker xp={120} level={3} achievements={['Study Warrior']} />
      </div>
    </div>
  )
            }
