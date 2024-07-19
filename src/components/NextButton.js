export default function NextButton({
  dispatch,
  answer,
  status,
  index,
  numQuestions,
}) {
  if (answer === null) return null;
  return (
    <button
      className="btn btn-ui"
      onClick={() => {
        dispatch({ type: "nextQuestion" });
      }}
    >
      {index + 1 === numQuestions ? "Finish" : "Next"}
    </button>
  );
}
