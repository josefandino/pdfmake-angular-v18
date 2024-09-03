import { Component, inject, } from '@angular/core';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { PersonaHumanaService } from './persona-humana.service';
import { Fecha, PersonaHumanaI } from './persona-humana.interce';

@Component({
  selector: 'app-persona-humana',
  standalone: true,
  imports: [],
  templateUrl: './persona-humana.component.html',
  styleUrl: './persona-humana.component.scss'
})
export class PersonaHumanaComponent {

  private personaHumana!: PersonaHumanaI;
  private readonly _personaHumanaService = inject(PersonaHumanaService);

  ngOnInit() {
    this.getPersonaHumana();
  }

  private getPersonaHumana(): void {
    this._personaHumanaService.getPersonaHumana()
      .subscribe({
        next: (persona: PersonaHumanaI) => {
          this.personaHumana = persona;
          this.buildDocDefinition();
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  // Forma #1 de construir el documento PDF

  // private buildDocDefinition() {

  //   const data = Object.keys(this.personaHumana).map(key => {

  //     const value = this.personaHumana[key as keyof PersonaHumanaI];

  //     if (value instanceof Object && ('year' in value)) {

  //       const fecha = value as Fecha;
  //       return [key, `${fecha.year}-${fecha.month}-${fecha.day}`];

  //     }
  //     return [key, value];
  //   });

  //   this.docDefinition = {
  //     content: [
  //       { text: 'Persona humana', style: 'header' },
  //       {
  //         style: 'tableExample',
  //         table: {
  //           widths: ['*', '*'],
  //           body: [...data]
  //         },
  //         layout: {
  //           fillColor: (rowIndex: number) => (rowIndex >= 0 ? '#CCCCCC' : null),
  //           hLineColor: () => '#2e86c1',
  //           vLineColor: () => '#2e86c1'
  //         }
  //       }

  //     ],
  //     styles: {
  //       tableExample: {
  //         margin: [5, 0, 5, 15],
  //       },
  //       header: {
  //         fontSize: 22,
  //         bold: true,
  //         alignment: 'center',
  //         margin: [0, 0, 0, 10],
  //         color: '#2e86c1'
  //       }
  //     },
  //     defaultStyle: {
  //       alignment: 'left',
  //       color: 'black',
  //       fontSize: 14,
  //     }
  //   };
  // }

  // Forma #2 de construir el documento PDF

  private buildDocDefinition() {
    const ph = this.personaHumana;

    this.docDefinition = {
      content: [
    { text: 'Persona humana', style: 'header' },
        {
          style: 'tableExample',
          table: {
            widths: ['*', '*', '*', '*'],

            body: [
              [
                { text: `Calle: ${ph.calle}` },
                { text: `Nro. calle: ${ph.nroCalle}` },
                { text: `Código postal: ${ph.codPostal}`,  colSpan: 2  },
                {},
              ],
              [
                { text: `Piso: ${ph.piso}` },
                { text: `Dpto: ${ph.dpto}` },
                { text: `Operador: ${ph.operador}`, colSpan: 2  },
                // { text: `Email: ${ph.mail}` },
                {},
              ],
              [
                { text: `Nis: ${ph.nis}`, colSpan: 2 },
                {},
                { text: `Cuit: ${ph.cuit}`, colSpan: 2 },
                {}
              ],
            ],
          },
          layout: {
            fillColor: (rowIndex: number) => (rowIndex >= 0 ? '#CCCCCC' : null),
            hLineColor: () => '#2e86c1',
            vLineColor: () => '#2e86c1'
          }
        }
      ],
      styles: {
        tableExample: {
          margin: [15, 15, 15, 15],
        },
        header: {
                  fontSize: 22,
                  bold: true,
                  alignment: 'center',
                  margin: [0, 0, 0, 10],
                  color: '#2e86c1'
                }
      },
      defaultStyle: {
        alignment: 'left',
        color: 'black',
        fontSize: 16,
      }
    };
  }

  private docDefinition: any = {};

  public generatePDF(): void {
    pdfMake.createPdf(this.docDefinition).open();
  }


}
