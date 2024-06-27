export class Sport {
  protected msPerGamePeriod: number;
  protected breakDuration: number;
  protected numberOfPlayers: number;
  protected numberOfBreaks: number;
  protected displayMessage: (msg: string) => void;

  constructor(msPerGamePeriod: number, breakDuration: number, numberOfPlayers: number, numberOfBreaks: number, displayMessage: (msg: string) => void) {
    this.msPerGamePeriod = msPerGamePeriod;
    this.breakDuration = breakDuration;
    this.numberOfPlayers = numberOfPlayers;
    this.numberOfBreaks = numberOfBreaks;
    this.displayMessage = displayMessage;
  }

  startGame() {
    console.log("Game started");
    if (this.displayMessage) this.displayMessage("Game started");
  }

  endGame() {
    console.log("Game ended");
    if (this.displayMessage) this.displayMessage("Game ended");
  }

  halftime() {
    console.log("Halftime");
    if (this.displayMessage) this.displayMessage("Halftime");
  }

  getMsPerGamePeriod(): number {
    return this.msPerGamePeriod;
  }

  getBreakDuration(): number {
    return this.breakDuration;
  }
}
