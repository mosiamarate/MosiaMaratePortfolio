import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Game.css";

// Generate random code icons
const codeSymbols = ["{ }", "</>", "=>", "()", "[]", "++", "--", "&&", "//"];

const Game = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [playerX, setPlayerX] = useState(200);
  const [fallingCodes, setFallingCodes] = useState([]);
  const gameAreaRef = useRef(null);

  // Calculate level to increase speed every 10 points
  const level = Math.floor(score / 10);

  // Spawn a new falling code every 1.5s
  useEffect(() => {
    if (!gameStarted || gameOver) return;
    const spawnRate = Math.max(500, 1500 - level * 100);
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
    }, spawnRate);

    return () => clearInterval(spawnInterval);
  }, [gameStarted, gameOver, level]);

  // Falling animation
  useEffect(() => {
    if (!gameStarted || gameOver) return;
    const fallRate = Math.max(20, 60 - level * 5);
    const fallInterval = setInterval(() => {
      setFallingCodes((prevCodes) =>
        prevCodes
          .map((code) => ({ ...code, y: code.y + 5 }))
          .filter((code) => code.y < 400)
      );
    }, fallRate);

    return () => clearInterval(fallInterval);
  }, [gameStarted, gameOver, level]);

  // Collision detection
  useEffect(() => {
    if (!gameStarted) return;
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
  }, [fallingCodes, playerX, gameStarted]);

  // Handle player movement
  const movePlayer = (direction) => {
    if (!gameStarted || gameOver) return;
    if (direction === "left") setPlayerX((x) => Math.max(0, x - 30));
    if (direction === "right") setPlayerX((x) => Math.min(390, x + 30)); // 450 (width) - 60 (player)
  };

  const handleKeyPress = useCallback((e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault(); // Prevent page scrolling
      movePlayer("left");
    }
    if (e.key === "ArrowRight") {
      e.preventDefault(); // Prevent page scrolling
      movePlayer("right");
    }

    if (e.key === "ArrowUp") {
      e.preventDefault(); // Prevent page scrolling
      if (!gameStarted) startGame();
      if (gameOver) resetGame();
    }

    if (e.key === "ArrowDown") {
      e.preventDefault(); // Prevent page scrolling
      if (gameStarted && !gameOver) resetGame();
    }
  }, [gameStarted, gameOver]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]); 

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setFallingCodes([]);
  };

  const resetGame = () => {
    setScore(0);
    setGameOver(false);
    setFallingCodes([]);
    setGameStarted(false);
  };

  return (
    <section className="game-section" id="game">
      <h2 className="section-title">🎮 Catch the Code</h2>
      <div className="game-container" ref={gameAreaRef}>
        {!gameStarted && !gameOver && (
          <div className="game-start">
            <button onClick={startGame}>Start Game</button>
          </div>
        )}

        {/* Falling code elements */}
        {gameStarted &&
          fallingCodes.map((code) => (
            <div
              key={code.id}
              className="code-symbol"
              style={{ top: code.y, left: code.x }}
            >
              {code.symbol}
            </div>
          ))}

        {/* Player bar */}
        {gameStarted && <div className="player" style={{ left: playerX }}></div>}

        {/* Game Over */}
        {gameOver && (
          <div className="game-over">
            <p>💥 Game Over!</p>
            <p>Your Score: {score}</p>
            <p>Level Reached: {level + 1}</p>
            <button onClick={resetGame}>Restart</button>
          </div>
        )}
      </div>

      <div className="controls">
        <button onClick={() => movePlayer("left")} aria-label="Move Left">⬅️</button>
        <button onClick={() => movePlayer("right")} aria-label="Move Right">➡️</button>
      </div>

      <div className="game-stats">
        <p className="score">Score: {score}</p>
        <p className="level">Level: {level + 1}</p>
      </div>
    </section>
  );
};

export default Game;
