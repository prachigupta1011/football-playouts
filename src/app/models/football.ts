import { Sport } from './sport';

export class Football extends Sport {
  constructor(displayMessage: (msg: string) => void) {
    super(2700000, 900000, 11, 1, displayMessage); // 90 minutes in ms, 15 minutes break in ms, 11 players, 1 break
  }

  override startGame() {
    super.startGame();
    this.displayMessage('Football game started');
  }

  override endGame() {
    super.endGame();
    this.displayMessage('Football game ended');
  }

  override halftime() {
    super.halftime();
    this.displayMessage('Halftime in Football game');
  }
}
