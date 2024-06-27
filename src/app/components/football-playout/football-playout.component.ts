import { Component, OnInit } from '@angular/core';
import { FootballPlayoutService } from './football-playout.service';
import * as footballPlayout from '../../assets/json/football-playout.json';

@Component({
  selector: 'app-football-playout',
  templateUrl: './football-playout.component.html',
  styleUrls: ['./football-playout.component.scss']
})
export class FootballPlayoutComponent implements OnInit {
  fixtures = (footballPlayout as any).default.data;
  scores: { [team: string]: number[] } = {};
  totalScores: { [team: string]: number } = {};
  message: string = '';
  gameInProgress: boolean = false;
  playerCount: number = 0;

  constructor(private footballService: FootballPlayoutService) { }

  ngOnInit(): void {
    this.footballService.scoreUpdate.subscribe(({ team, playerIndex }) => {
      this.updateScores(team, playerIndex);
    });
    this.footballService.gameEvent.subscribe((msg) => {
      this.message = msg;
      if (msg.includes('game ended')) {
        this.gameInProgress = false;
      }
    });
  }

  startGame(gameType: string): void {
    this.message = '';
    this.gameInProgress = true;
    this.scores = {};
    this.totalScores = {};
    this.playerCount = gameType === 'football' ? 11 : 6;
    this.initializeScores();
    this.footballService.startGame(this.displayMessage.bind(this), gameType);
  }

  initializeScores(): void {
    this.fixtures.forEach((fixture:any) => {
      this.scores[fixture.homeTeamAbbr] = new Array(this.playerCount).fill(0);
      this.scores[fixture.awayTeamAbbr] = new Array(this.playerCount).fill(0);
      this.totalScores[fixture.homeTeamAbbr] = 0;
      this.totalScores[fixture.awayTeamAbbr] = 0;
    });
  }

  displayMessage(msg: string): void {
    this.message = msg;
    this.footballService.gameEvent.emit(msg);
  }

  updateScores(team: string, playerIndex: number): void {
    if (this.scores[team] && playerIndex < this.playerCount) {
      this.scores[team][playerIndex]++;
      this.totalScores[team] = this.scores[team].reduce((a, b) => a + b, 0);
    }
  }
}
