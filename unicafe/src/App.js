import { useState } from 'react'

const FeedbackHeader = () => (
  <div><h1>give feedback</h1></div>
)

const StatisticsHeader = () => (
  <div><h1>statistics</h1></div>
)

const Button = ({handleClick, text}) => (
  <>
    <button onClick={handleClick}>
      {text}
    </button>
  </>
)

const FeedbackButtons = (props) => {

  const incrementValueWithFunction = (buttonFunction, value) => {
    buttonFunction(value + 1)
  }

  return (
    <>
      <Button handleClick={() => incrementValueWithFunction(props.setGood, props.good)} text="good"/>
      <Button handleClick={() => incrementValueWithFunction(props.setNeutral, props.neutral)} text="neutral"/>
      <Button handleClick={() => incrementValueWithFunction(props.setBad, props.bad)} text="bad"/>
    </>
  )
}


const StatisticLine = ({text, value}) => {
  if (text !== "positive") {
    return (
      <>
        <td>{text}</td>
        <td>{value}</td>
      </>
    )
  }
  else {
    return (
      <>
        <td>{text}</td>
        <td>{value}</td>
        <td>%</td>
      </>
    )
  }
}

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  else {
    const all = props.good + props.neutral + props.bad
    const average = (props.good - props.bad)/all
    const positive = (props.good/all)*100
    return (
      <table>
        <tbody>
          <tr><StatisticLine text="good" value={props.good} /></tr>
          <tr><StatisticLine text="neutral" value={props.neutral} /></tr>
          <tr><StatisticLine text="bad" value={props.bad} /></tr>
          <tr><StatisticLine text="all" value={all} /></tr>
          <tr><StatisticLine text="average" value={average} /></tr>
          <tr><StatisticLine text="positive" value={positive} /></tr>
        </tbody>
      </table>
    )
  }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <FeedbackHeader />
      <FeedbackButtons good={good} neutral={neutral} bad={bad} setGood={setGood} setNeutral={setNeutral} setBad={setBad}/>
      <StatisticsHeader />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App