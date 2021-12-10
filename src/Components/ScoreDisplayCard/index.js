import './index.css'

const ScoreDisplayCard = props => {
  const {score, playagain} = props
  const onclickingplayAgain = () => {
    playagain()
  }
  return (
    <div className="score-card-style">
      <img
        alt="trophy"
        className="prize-style"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png "
      />
      <p className="scorecard-score-heading-style">Your Score</p>
      <h1 className="scorecard-score-style">{score}</h1>
      <button
        type="button"
        className="playagain-button-style"
        onClick={onclickingplayAgain}
      >
        <img
          className="reset-style"
          alt="reset"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default ScoreDisplayCard
