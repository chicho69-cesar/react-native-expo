import { useEffect, useRef, useState } from "react"

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷',
}

export default function useCalculator() {
  const [formula, setFormula] = useState('0')
  const [number, setNumber] = useState('0')
  const [prevNumber, setPrevNumber] = useState('0')

  const lastOperation = useRef<Operator | undefined>(undefined)

  useEffect(() => {
    if (lastOperation.current) {
      setFormula((prev) => {
        const firstFormulaPart = prev.split(' ').at(0)
        return `${firstFormulaPart} ${lastOperation.current} ${number}`
      })
    } else {
      setFormula(number)
    }
  }, [number])

  useEffect(() => {
    const subResult = calculateSubResult()
    setPrevNumber(`${subResult}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formula])

  const clean = () => {
    setNumber('0')
    setFormula('0')
    setPrevNumber('0')

    lastOperation.current = undefined
  }

  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''))
    }

    setNumber(`-${number}`)
  }

  const deleteLast = () => {
    let currentSign = ''
    let temporalNumber = number

    if (number.includes('-')) {
      currentSign = '-'
      temporalNumber = number.substring(1)
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1))
    }

    setNumber('0')
  }

  const setLastNumber = () => {
    calculateResult()

    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1))
    }

    setPrevNumber(number)
    setNumber('0')
  }

  const divideOperation = () => {
    setLastNumber()
    lastOperation.current = Operator.divide
  }

  const multiplyOperation = () => {
    setLastNumber()
    lastOperation.current = Operator.multiply
  }

  const subtractOperation = () => {
    setLastNumber()
    lastOperation.current = Operator.subtract
  }

  const addOperation = () => {
    setLastNumber()
    lastOperation.current = Operator.add
  }

  const calculateSubResult = () => {
    const [firstValue, operation, secondValue] = formula.split(' ')

    const num1 = Number(firstValue)
    const num2 = Number(secondValue)

    if (isNaN(num2)) return num1

    switch (operation) {
      case Operator.add: return num1 + num2
      case Operator.subtract: return num1 - num2
      case Operator.multiply: return num1 * num2
      case Operator.divide: return num1 / num2

      default:
        throw new Error(`Operation ${operation} not implemented`)
    }
  }

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.') {
        return setNumber(number + numberString)
      }

      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString)
      }

      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString)
      }

      if (numberString === '0' && !number.includes('.')) {
        return
      }
    }

    setNumber(number + numberString)
  }

  const calculateResult = () => {
    const result = calculateSubResult()

    setFormula(`${result}`)
    setPrevNumber('0')
    setNumber(`${result}`)

    lastOperation.current = undefined
  }

  return {
    formula,
    number,
    prevNumber,

    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    addOperation,
    subtractOperation,
    multiplyOperation,
    divideOperation,
    calculateResult,
  }
}