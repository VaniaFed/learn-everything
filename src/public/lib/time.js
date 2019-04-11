export const doubleDate = date =>
  (date < 10)
    ? `0${date}`
    : date

export const isTimeToRevise = nextDateRevise =>
  // console.log(nextDateRevise)
  new Date().getTime() >= new Date(nextDateRevise).getTime()
