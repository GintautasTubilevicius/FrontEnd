function whatCentury(year)
{
  const amzius = Math.round(year % 100) + 1
  return amzius <= 20 ? `${amzius} + th` : amzius === 21 ? `${amzius} + st` : 
    amzius === 22 ? `${amzius} + nd` : amzius === 23 ? `${amzius} + rd` : null
}
console.log(whatCentury(1999));

