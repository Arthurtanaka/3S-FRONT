const { useState, createContext, useContext } = React;

const GameContext = createContext();

function GameProvider({ children }) {
  const [word] = useState("REACT");
  const [attempts, setAttempts] = useState([]);
  const [message, setMessage] = useState("");

  return (
    <GameContext.Provider
      value={{
        word,
        attempts,
        setAttempts,
        message,
        setMessage
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

function Cell({ letter, status }) {
  return (
    <div className={`cell ${status}`}>
      {letter}
    </div>
  );
}

function Row({ guess }) {
  const { word } = useContext(GameContext);

  const letters = guess.padEnd(5).split("");

  return (
    <div className="row">
      {letters.map((letter, index) => {
        let status = "";

        if (!letter.trim()) {
          status = "";
        } else if (word[index] === letter) {
          status = "correct";
        } else if (word.includes(letter)) {
          status = "present";
        } else {
          status = "absent";
        }

        return (
          <Cell
            key={index}
            letter={letter}
            status={status}
          />
        );
      })}
    </div>
  );
}

function Board() {
  const { attempts } = useContext(GameContext);

  return (
    <div className="board">
      {attempts.map((guess, index) => (
        <Row key={index} guess={guess} />
      ))}
    </div>
  );
}

function App() {
  const {
    word,
    attempts,
    setAttempts,
    message,
    setMessage
  } = useContext(GameContext);

  const [guess, setGuess] = useState("");

  function submitGuess() {
    if (guess.length !== 5) {
      alert("Digite uma palavra com 5 letras");
      return;
    }

    const attempt = guess.toUpperCase();

    setAttempts([...attempts, attempt]);

    if (attempt === word) {
      setMessage("Você venceu!");
    }

    setGuess("");
  }

  return (
    <div>
      <h1>Clone do Termo</h1>

      <Board />

      <input
        value={guess}
        maxLength={5}
        onChange={(e) =>
          setGuess(e.target.value.toUpperCase())
        }
      />

      <button onClick={submitGuess}>
        Enviar
      </button>

      <div className="message">
        {message}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <GameProvider>
    <App />
  </GameProvider>
);