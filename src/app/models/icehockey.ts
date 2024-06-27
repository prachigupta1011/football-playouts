import { Sport } from './sport';

export class IceHockey extends Sport {
  constructor(displayMessage: (msg: string) => void) {
    super(1200000, 600000, 6, 3, displayMessage); // 60 minutes in ms, 10 minutes break in ms, 6 players, 3 breaks
  }

  override startGame() {
    super.startGame();
    this.displayMessage('Ice Hockey game started');
  }

  override endGame() {
    super.endGame();
    this.displayMessage('Ice Hockey game ended');
  }

  override halftime() {
    super.halftime();
    this.displayMessage('Halftime in Ice Hockey game');
  }
}
