import { useState, useMemo } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, BookOpen, HelpCircle, Dumbbell, Sparkles, Brain } from 'lucide-react'
import { learningPaths } from '../data/pnlContent'

export default function Lesson() {
  const { pathId, moduleId, lessonId } = useParams()
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [lessonComplete, setLessonComplete] = useState(false)
  const [exerciseStep, setExerciseStep] = useState(0)

  const path = learningPaths.find(p => p.id === pathId)
  const module = path?.modules.find(m => m.id === moduleId)
  const lesson = module?.lessons.find(l => l.id === lessonId)

  const allLessons = useMemo(() => {
    if (!path) return []
    return path.modules.flatMap(m => m.lessons.map(l => ({ ...l, moduleId: m.id })))
  }, [path])

  const currentIndex = allLessons.findIndex(l => l.id === lessonId)
  const nextLesson = allLessons[currentIndex + 1]

  if (!lesson) {
    return (
      <div className="pt-24 pb-16 px-4 text-center">
        <p className="text-surface-400">Lezione non trovata</p>
        <Link to="/learn" className="btn-primary mt-4 inline-block">Torna ai percorsi</Link>
      </div>
    )
  }

  const handleAnswer = (index) => {
    if (showResult) return
    setSelectedAnswer(index)
    setShowResult(true)
    if (index === lesson.questions[currentQuestion].correct) {
      setScore(prev => prev + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < lesson.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setLessonComplete(true)
    }
  }

  const handleCompleteTheory = () => {
    setLessonComplete(true)
  }

  // Completion screen
  if (lessonComplete) {
    return (
      <section className="pt-24 pb-16 px-4 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="glass rounded-3xl p-10 max-w-md w-full text-center"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h2 className="font-display text-2xl font-bold text-white mb-2">
            Lezione Completata!
          </h2>
          {lesson.type === 'quiz' && (
            <p className="text-surface-300 mb-6">
              Hai risposto correttamente a {score}/{lesson.questions.length} domande
            </p>
          )}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-3xl font-display font-bold gradient-text">+{lesson.xp} XP</span>
          </div>

          {lesson.type === 'quiz' && (
            <div className="w-full bg-surface-700 rounded-full h-3 mb-8">
              <div
                className="h-3 rounded-full bg-gradient-to-r from-accent-400 to-accent-500 transition-all"
                style={{ width: `${(score / lesson.questions.length) * 100}%` }}
              />
            </div>
          )}

          <div className="flex flex-col gap-3">
            {nextLesson ? (
              <button
                onClick={() => navigate(`/learn/${pathId}/${nextLesson.moduleId}/${nextLesson.id}`)}
                className="btn-primary flex items-center justify-center gap-2"
              >
                Prossima Lezione
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => navigate('/learn')}
                className="btn-primary flex items-center justify-center gap-2"
              >
                Torna ai Percorsi
              </button>
            )}
            <Link to="/learn" className="text-sm text-surface-400 hover:text-primary-400 transition-colors">
              Torna alla lista
            </Link>
          </div>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-8"
        >
          <button
            onClick={() => navigate('/learn')}
            className="w-10 h-10 rounded-xl bg-surface-800 flex items-center justify-center hover:bg-surface-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-surface-300" />
          </button>
          <div className="flex-1">
            <p className="text-xs text-surface-500 uppercase tracking-wider">{path.title} &middot; {module.title}</p>
            <h1 className="font-display text-xl font-bold text-white">{lesson.title}</h1>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-500/10">
            {lesson.type === 'theory' && <BookOpen className="w-4 h-4 text-primary-400" />}
            {lesson.type === 'quiz' && <HelpCircle className="w-4 h-4 text-warm-400" />}
            {lesson.type === 'exercise' && <Dumbbell className="w-4 h-4 text-accent-400" />}
            <span className="text-sm font-semibold text-primary-300">{lesson.xp} XP</span>
          </div>
        </motion.div>

        {/* Progress bar for quizzes */}
        {lesson.type === 'quiz' && (
          <div className="mb-8">
            <div className="flex justify-between text-xs text-surface-500 mb-1">
              <span>Domanda {currentQuestion + 1} di {lesson.questions.length}</span>
              <span>{Math.round(((currentQuestion) / lesson.questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-surface-800 rounded-full h-2">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-400"
                initial={false}
                animate={{ width: `${((currentQuestion) / lesson.questions.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        )}

        {/* Content */}
        <AnimatePresence mode="wait">
          {lesson.type === 'theory' && (
            <motion.div
              key="theory"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Intro */}
              <div className="glass rounded-2xl p-6 sm:p-8">
                <p className="text-surface-200 leading-relaxed text-lg">{lesson.content.intro}</p>
              </div>

              {/* Key Points */}
              <div className="glass rounded-2xl p-6 sm:p-8">
                <h3 className="font-display font-semibold text-white mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary-400" />
                  Concetti Chiave
                </h3>
                <div className="space-y-3">
                  {lesson.content.keyPoints.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-3 items-start"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary-400">{i + 1}</span>
                      </div>
                      <p className="text-sm text-surface-300 leading-relaxed">{point}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Deep Dive */}
              <div className="glass rounded-2xl p-6 sm:p-8 border-l-4 border-l-accent-500">
                <h3 className="font-display font-semibold text-white mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent-400" />
                  Approfondimento
                </h3>
                <p className="text-sm text-surface-300 leading-relaxed">{lesson.content.deepDive}</p>
              </div>

              {/* Complete button */}
              <div className="flex justify-center pt-4">
                <button onClick={handleCompleteTheory} className="btn-primary flex items-center gap-2 !py-4 !px-10">
                  Ho capito, continua
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {lesson.type === 'quiz' && (
            <motion.div
              key={`quiz-${currentQuestion}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass rounded-2xl p-6 sm:p-8 mb-6">
                <h3 className="font-display text-xl font-semibold text-white mb-6">
                  {lesson.questions[currentQuestion].q}
                </h3>
                <div className="space-y-3">
                  {lesson.questions[currentQuestion].options.map((option, i) => {
                    const isCorrect = i === lesson.questions[currentQuestion].correct
                    const isSelected = selectedAnswer === i
                    let borderClass = 'border-white/5 hover:border-primary-500/30'
                    if (showResult) {
                      if (isCorrect) borderClass = 'border-accent-500 bg-accent-500/10'
                      else if (isSelected && !isCorrect) borderClass = 'border-red-500 bg-red-500/10'
                      else borderClass = 'border-white/5 opacity-50'
                    } else if (isSelected) {
                      borderClass = 'border-primary-500 bg-primary-500/10'
                    }

                    return (
                      <button
                        key={i}
                        onClick={() => handleAnswer(i)}
                        disabled={showResult}
                        className={`w-full text-left px-5 py-4 rounded-xl border transition-all flex items-center gap-3 ${borderClass}`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                          showResult && isCorrect ? 'bg-accent-500 text-white' :
                          showResult && isSelected && !isCorrect ? 'bg-red-500 text-white' :
                          isSelected ? 'bg-primary-500 text-white' :
                          'bg-surface-700 text-surface-400'
                        }`}>
                          {showResult && isCorrect ? <CheckCircle className="w-4 h-4" /> :
                           showResult && isSelected && !isCorrect ? <XCircle className="w-4 h-4" /> :
                           String.fromCharCode(65 + i)}
                        </div>
                        <span className={`text-sm ${
                          showResult && isCorrect ? 'text-accent-300 font-medium' :
                          showResult && isSelected && !isCorrect ? 'text-red-300' :
                          'text-surface-200'
                        }`}>
                          {option}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="glass rounded-2xl p-6 mb-6 border-l-4 border-l-primary-500"
                  >
                    <p className="text-sm text-surface-300 leading-relaxed">
                      {lesson.questions[currentQuestion].explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {showResult && (
                <div className="flex justify-center">
                  <button onClick={handleNext} className="btn-primary flex items-center gap-2">
                    {currentQuestion < lesson.questions.length - 1 ? 'Prossima Domanda' : 'Vedi Risultati'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {lesson.type === 'exercise' && (
            <motion.div
              key="exercise"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="glass rounded-2xl p-6 sm:p-8 mb-6">
                <h3 className="font-display text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Dumbbell className="w-5 h-5 text-accent-400" />
                  {lesson.content.instruction}
                </h3>

                {lesson.content.scenarios && (
                  <div className="space-y-6">
                    {lesson.content.scenarios.map((scenario, si) => (
                      <div key={si} className={`p-4 rounded-xl transition-all ${
                        exerciseStep === si ? 'bg-primary-500/10 border border-primary-500/30' :
                        exerciseStep > si ? 'bg-accent-500/5 border border-accent-500/20' :
                        'bg-surface-800/30 border border-white/5'
                      }`}>
                        <p className="text-sm font-medium text-white mb-3">{scenario.situation}</p>
                        <div className="space-y-2">
                          {scenario.options.map((opt, oi) => (
                            <button
                              key={oi}
                              onClick={() => exerciseStep === si && setExerciseStep(si + 1)}
                              className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all ${
                                exerciseStep === si
                                  ? 'bg-surface-700/50 text-surface-200 hover:bg-primary-500/10 hover:text-white border border-white/5'
                                  : 'bg-surface-800/30 text-surface-500 border border-transparent'
                              }`}
                            >
                              <span className="font-semibold text-primary-400 mr-2">[{opt.channel}]</span>
                              {opt.text}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {lesson.content.steps && (
                  <div className="space-y-3">
                    {lesson.content.steps.map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className={`flex gap-3 items-start p-3 rounded-lg ${
                          exerciseStep === i ? 'bg-primary-500/10 border border-primary-500/20' :
                          exerciseStep > i ? 'opacity-60' : ''
                        }`}
                        onClick={() => exerciseStep === i && setExerciseStep(i + 1)}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          exerciseStep > i ? 'bg-accent-500' : exerciseStep === i ? 'bg-primary-500 animate-pulse' : 'bg-surface-700'
                        }`}>
                          {exerciseStep > i ? <CheckCircle className="w-3 h-3 text-white" /> :
                           <span className="text-xs font-bold text-white">{i + 1}</span>}
                        </div>
                        <p className="text-sm text-surface-300 leading-relaxed cursor-pointer">{step}</p>
                      </motion.div>
                    ))}
                  </div>
                )}

                {lesson.content.tip && (
                  <div className="mt-6 p-4 rounded-xl bg-warm-500/10 border border-warm-500/20">
                    <p className="text-sm text-warm-300">
                      <strong>Suggerimento:</strong> {lesson.content.tip}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex justify-center">
                <button onClick={handleCompleteTheory} className="btn-primary flex items-center gap-2 !py-4 !px-10">
                  Esercizio Completato
                  <CheckCircle className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
