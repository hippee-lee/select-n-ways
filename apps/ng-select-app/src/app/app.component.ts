import { Component } from '@angular/core';
import { NgSelectModule } from '@select-four-ways/ng-select';
import { Movie, MOVIES } from "./movies";
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, NgSelectModule],
  selector: 'select-four-ways-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  movies = MOVIES;
  selected?: Movie;
}
