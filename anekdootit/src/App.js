import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <>
    <button onClick={handleClick}>
      {text}
    </button>
  </>
)

const DisplayAnecdote = ({anecNum, anecdotes, votes}) => (
  <>
    <p>{anecdotes[anecNum]}</p>
    <p>has {votes[anecNum]} votes</p>
  </>
)



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [mostVotes, setMostVotes] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const chooseRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const voteSelected = () => {
    const copy = [...votes]
    copy[selected] += 1
    let mostVoted = 0
    let maxVotes = 0
    for (let i = 0; i < anecdotes.length; i++) {
      if (copy[i] > maxVotes) {
        maxVotes = copy[i]
        mostVoted = i
      }
    }
    setMostVotes(mostVoted)
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <DisplayAnecdote anecNum={selected} anecdotes={anecdotes} votes={votes} />
      <Button handleClick={() => voteSelected()} text="vote"/>
      <Button handleClick={() => chooseRandom()} text="next anecdote"/>
      <h1>Anecdote with most votes</h1>
      <DisplayAnecdote anecNum={mostVotes} anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App