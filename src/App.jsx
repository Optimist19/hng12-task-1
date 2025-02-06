import { useState, useEffect } from "react";

const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

const App = () => {
  const [targetColor, setTargetColor] = useState("");
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("Guess the correct color!");
  const [fade, setFade] = useState(false);


  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor(randomColor);
    setMessage("Guess the correct color!");
  };

  const handleGuess = (color) => {
    if (color === targetColor) {
      setScore(score + 1);
      setFade(true); 
      setMessage("Correct! 🎉");
      setTimeout(startNewGame, 1000);
      setFade(false); 
    } else {
      setFade(true); 
      setMessage("Wrong! Try again. ❌");
      setFade(false); 
    }
  };

  return (
    <div style={styles.container}>
      <h2 data-testid="gameInstructions">Guess the correct color!</h2>
      <div
        data-testid="colorBox"
        style={{ ...styles.colorBox, backgroundColor: targetColor }}
      ></div>
      <div style={styles.optionsContainer}>
        {colors.map((color) => (
          <button
            key={color}
            data-testid="colorOption"
            style={{ ...styles.colorButton, backgroundColor: color }}
            onClick={() => handleGuess(color)}
          ></button>
        ))}
      </div>
      <p data-testid="gameStatus" className={fade ? "fade-out" : ""}>{message}</p>
      <p data-testid="score">Score: {score}</p>
      <button data-testid="newGameButton" onClick={startNewGame} style={styles.newGameButton}>
        New Game
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  colorBox: {
    width: "150px",
    height: "150px",
    margin: "20px auto",
    border: "2px solid black",
  },
  optionsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  colorButton: {
    width: "60px",
    height: "60px",
    border: "none",
    cursor: "pointer",
  },
  newGameButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default App;
