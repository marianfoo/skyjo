# Skyjo Card Game

A client-side implementation of the Skyjo card game that runs entirely in the browser without requiring a server.

## How to Play

1. Download all three files:
   - `skyjo-standalone.html` - The main HTML file
   - `skyjo-styles.css` - The CSS styling
   - `skyjo-game.js` - The game logic

2. Open the `skyjo-standalone.html` file in your browser to start playing.

## Game Rules

Skyjo is a card game with the following rules:

- Players start with 12 cards (in a 3x4 grid)
- Initially, players select 2 cards to reveal
- On each turn, players can:
  - Draw from the deck or discard pile
  - Keep the drawn card (replacing one of their cards) or discard it and reveal one of their face-down cards
- The goal is to have the lowest total score
- The round ends when a player reveals all their cards
- If the player who ends the round doesn't have the lowest score, their points are doubled
- The game ends after a set number of rounds or when a player reaches 100+ points

## Features

- Play against two computer opponents with different difficulty levels
- Customizable animation speeds
- Local scoreboard using browser localStorage
- Responsive design for desktop and mobile
- Configurable number of rounds

## No Server Required

This version of Skyjo runs entirely client-side using HTML, CSS, and JavaScript. Your game scores are saved in your browser's localStorage, so they persist between sessions but are only available on the same browser and device.

## Development

To modify the game, simply edit the HTML, CSS, or JavaScript files. No build tools or server-side code is required. 