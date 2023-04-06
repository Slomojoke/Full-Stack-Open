import { useState } from 'react'



const Button = ({handleClick, text}) =>(
  <button onClick={handleClick}> {text} </button>
)

const Statistics = ({good,bad,neutral}) => {
  const all = good + bad + neutral
  const avergae = (good - bad) / all
  const positive = (good/(good + bad + neutral)) * 100

  if(all === 0){
    return(
      <div>
      <h1>Statistics</h1>  
      No feedback given
      </div>
    )
  } 
  return(
    <>
    <h1>Statistics</h1>
    <table>
      <tbody>
        <StatisticLine text='Good' value={good} />
        <StatisticLine text='Bad' value={bad} />
        <StatisticLine text='Neutral' value={neutral} />
        <StatisticLine text='All' value={all} />
        <StatisticLine text='Average' value={avergae} />
        <StatisticLine text='Positive' value={positive} />
      </tbody>
    </table>

  </>
  )
}


const StatisticLine = ({text, value}) => (
  <>
  {text} {value}<br></br>
  </>
)




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  
  const handleBadClick = () => {
    setBad(bad + +1)
  }
  
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <h1>Give FeedBack</h1>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleBadClick} text='Bad' />
      <Button handleClick={handleNeutralClick} text='Neutral' />

      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}


export default App