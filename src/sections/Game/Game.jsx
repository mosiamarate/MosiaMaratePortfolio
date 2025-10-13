import React, { useState, useEffect, useRef } from "react";
import "./Game.css";

// Generate random code icons
const codeSymbols = ["{ }", "</>", "=>", "()", "[]", "++", "--", "&&", "//"];

const Game = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [playerX, setPlayerX] = useState(200);
  const [fallingCodes, setFallingCodes] = useState([]);
  const gameAreaRef = useRef(null);

  // Spawn a new falling code every 1.5s
  useEffect(() => {
    if (gameOver) return;
    const spawnInterval = setInterval(() => {
      setFallingCodes((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * 360 + 10,
          y: 0,
          symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
        },
      ]);
    }, 1500);

    return () => clearInterval(spawnInterval);
  }, [gameOver]);

  // Falling animation
  useEffect(() => {
    if (gameOver) return;
    const fallInterval = setInterval(() => {
      setFallingCodes((prevCodes) =>
        prevCodes
          .map((code) => ({ ...code, y: code.y + 5 }))
          .filter((code) => code.y < 400)
      );
    }, 60);

    return () => clearInterval(fallInterval);
  }, [gameOver]);

  // Collision detection
  useEffect(() => {
    const playerWidth = 60;

    fallingCodes.forEach((code) => {
      if (
        code.y > 360 &&
        code.x > playerX - 20 &&
        code.x < playerX + playerWidth + 20
      ) {
        setScore((prev) => prev + 1);
        setFallingCodes((prev) => prev.filter((c) => c.id !== code.id));
      }

      // End game if a code hits the ground
      if (code.y >= 380) {
        setGameOver(true);
      }
    });
  }, [fallingCodes, playerX]);

  // Handle player movement
  const movePlayer = (direction) => {
    if (direction === "left") setPlayerX((x) => Math.max(0, x - 30));
    if (direction === "right") setPlayerX((x) => Math.min(400, x + 30));
  };

  const handleKeyPress = (e) => {
    if (e.key === "ArrowLeft") movePlayer("left");
    if (e.key === "ArrowRight") movePlayer("right");
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  });

  const resetGame = () => {
    setScore(0);
    setGameOver(false);
    setFallingCodes([]);
  };

  return (
    <section className="game-section" id="game">
      <h2 className="section-title">🎮 Catch the Code</h2>
      <div className="game-container" ref={gameAreaRef}>
        {/* Falling code elements */}
        {fallingCodes.map((code) => (
          <div
            key={code.id}
            className="code-symbol"
            style={{ top: code.y, left: code.x }}
          >
            {code.symbol}
          </div>
        ))}

        {/* Player bar */}
        <div className="player" style={{ left: playerX }}></div>

        {/* Game Over */}
        {gameOver && (
          <div className="game-over">
            <p>💥 Game Over!</p>
            <p>Your Score: {score}</p>
            <button onClick={resetGame}>Restart</button>
          </div>
        )}
      </div>

      <div className="controls">
        <button onClick={() => movePlayer("left")}>⬅️</button>
        <button onClick={() => movePlayer("right")}>➡️</button>
      </div>

      <p className="score">Score: {score}</p>
    </section>
  );
};

export default Game;
