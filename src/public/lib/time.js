export const doubleDate = date =>
  (date < 10)
    ? `0${date}`
    : date

export const isTimeToRevise = nextDateRevise =>
  new Date().getTime() >= new Date(nextDateRevise).getTime()

export const datesDifference = (prevDate, nextDate) => {
  const date1 = new Date(prevDate)
  const date2 = new Date(nextDate)
  const secondsInDay = 1000 * 3600 * 24

  return Math.abs(Math.ceil((date2.getTime() - date1.getTime()) / secondsInDay))
}

export const howManyDaysLeftToNextRevise = (level, difference) => {
  let dayNextRevise = 0
  switch (level) {
    case 'forget':
      dayNextRevise = 0
      console.log('forget')
      break
    case 'difficult':
      console.log('difficult')
      dayNextRevise = difference + 1
      break
    case 'normal':
      dayNextRevise = difference * 2 + 1
      console.log('normal')
      break
    case 'easy':
      dayNextRevise = difference * 3 + 1
      console.log('easy')
      break
    default:
      break
  }
  return dayNextRevise
}

export const currentDatePlusDifference = (currentDate, dayNextRevise) => {
  const secondsInDay = 1000 * 3600 * 24
  const currentDateInSeconds = new Date(currentDate).getTime()
  const sumDates = currentDateInSeconds + (dayNextRevise * secondsInDay)
  const newDate = new Date(sumDates)
  const y = newDate.getFullYear()
  const m = doubleDate(newDate.getMonth() + 1)
  const d = doubleDate(newDate.getDate())
  const calculatedDate = `${y}.${m}.${d}`
  return calculatedDate
}

export const calcPotentialNextDates = difference => {
  return {
    forget: 0,
    difficult: difference + 1,
    normal: difference * 2 + 1,
    easy: difference * 3 + 1
  }
}

export const calcAndGetNextDates = (prevDate, nextDate) => {
  const difference = datesDifference(prevDate, nextDate)
  const nextDates = calcPotentialNextDates(difference)
  return nextDates
}

export const sortByDate = (cardA, cardB) => {
  if (datesDifference(cardA.datePrevRevise, cardA.dateNextRevise) <
    datesDifference(cardB.datePrevRevise, cardB.dateNextRevise)) {
    return -1
  } else {
    return 1
  }
  // найти разницу между двумя датами
  // возвратить наименьшую
  // если разница в cardA меньше, возвратить cardA
  // иначе возвратить cardB
}
