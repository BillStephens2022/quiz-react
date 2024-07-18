export default function Question() {    
    return (
      <div className="question">
        <h2>Question</h2>
        <p>What is the capital of France?</p>
        <ul>
          <li>London</li>
          <li>Paris</li>
          <li>New York</li>
          <li>Madrid</li>
        </ul>
        <button className="btn btn-ui">Next</button>
      </div>
    );
}