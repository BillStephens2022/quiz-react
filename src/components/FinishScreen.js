export default function FinishScreen({
  points,
  maxPossiblePoints,
  highScore,
  dispatch,
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) {
    emoji = "🎉";
  } else if (percentage >= 70) {
    emoji = "👍";
  } else if (percentage >= 50) {
    emoji = "😒";
  } else {
    emoji = "🤮";
  }

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%) points!
      </p>
      <p className="highscore">(High Score: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}
