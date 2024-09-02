import { Component, inject } from '@angular/core';
import { PersonaHumanaService } from './persona-humana.service';

@Component({
  selector: 'app-persona-humana',
  standalone: true,
  imports: [],
  templateUrl: './persona-humana.component.html',
  styleUrl: './persona-humana.component.scss'
})
export class PersonaHumanaComponent {

  private readonly _personaHumanaService = inject(PersonaHumanaService);

  ngOnInit() { 
    this.getPersonaHumana();
  }


  private getPersonaHumana(): void {
    this._personaHumanaService.getPersonaHumana()
    .subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
