import React, { useState } from 'react'

const Button = (props) => {
  const {value, updateValue, text} = props
  return (
    <button onClick={() => updateValue(value + 1)}>{text}</button>
  )
}


const StatisticsLine = ({text, value, percent}) => {
  return (
    <tr>
      <td>{text} </td>
      <td>{value}{percent && " %"}</td>
    </tr>
  )
}



const Statistics = (props) => {
  const {good, neutral, bad} = props
  const total = good + neutral + bad
  if (total) {
    return (
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="total" value={total} />
          <StatisticsLine text="average" value={ (good - bad) / total } />
          <StatisticsLine text="good" value={ good / total * 100 } percent={true} />
        </tbody>
      </table>
    )
  }
  return (
    <div>
      <p>No feedback given</p>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button value={good} updateValue={setGood} text="good"/>
      <Button value={neutral} updateValue={setNeutral} text="neutral"/>
      <Button value={bad} updateValue={setBad} text="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App