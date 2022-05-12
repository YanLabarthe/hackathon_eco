// import { Routes, Route } from "react-router-dom";
import "../index.css";

function App() {
  /*
  return (
    <div className="App h-screen text-center bg-neutral-900 text-yellow-500">
      <Routes>
        <Route
          path="/"
          element={<Home name={nameGenerated} onNameGenerated={generateName} />}
        />
        <Route
          path="/quizz"
          element={<Quizz alias={nameGenerated} onFinished={onGameEnd} />}
        />
        <Route
          path="/moviequizz"
          element={<MovieQuizz alias={nameGenerated} onFinished={onGameEnd} />}
        />
        <Route
          path="/scoreboard"
          element={
            <Scoreboard name={nameGenerated} score={score} rank={theRank} />
          }
        />
        <Route
          path="/scoreboardMovieQuizz"
          element={
            <ScoreboardMovieQuizz
              name={nameGenerated}
              score={score}
              rank={theRank2}
            />
          }
        />
      </Routes>
    </div>
  );
  */

  return <div>Home sans routes</div>;
}

export default App;
