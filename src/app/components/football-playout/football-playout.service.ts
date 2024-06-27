import { Injectable, EventEmitter } from '@angular/core';
import * as footballPlayout from '../../assets/json/football-playout.json';
import { Football } from '../../models/football';
import { IceHockey } from '../../models/icehockey';
import { Sport } from '../../models/sport';

@Injectable({
  providedIn: 'root'
})
export class FootballPlayoutService {
  scoreUpdate: EventEmitter<{ team: string, playerIndex: number }> = new EventEmitter();
  gameEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  startGame(displayMessage: (msg: string) => void, gameType: string) {
    let game: Sport | null = null;
    if (gameType === 'football') {
      game = new Football(displayMessage);
    } else if (gameType === 'icehockey') {
      game = new IceHockey(displayMessage);
    }

    if (game) {
      game.startGame();
      (footballPlayout as any).default.data.forEach((fixture: any) => {
        fixture.goals.forEach((goal: any) => {
          setTimeout(() => {
            const playerIndex = Math.floor(Math.random() * (gameType === 'football' ? 11 : 6));
            this.scoreUpdate.emit({ team: goal.teamAbbr, playerIndex });
          }, goal.videoMS);
        });
      });

      setTimeout(() => {
        game && game.halftime();
      }, game.getMsPerGamePeriod() / 2);

      setTimeout(() => {
        game && game.endGame();
      }, game.getMsPerGamePeriod() + game.getBreakDuration());
    } else {
      console.error('Invalid game type');
    }
  }
}
