import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChessBoardComponent } from "./modules/chess-board/chess-board.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, ChessBoardComponent]
})
export class AppComponent {
  title = 'chess-game';
}
