import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-segundo',
  templateUrl: './meu-segundo.component.html',
  styleUrls: ['./meu-segundo.component.scss']
})
export class MeuSegundoComponent implements OnInit {

  contatos = [

    { id: 1, nome: 'Rômulo', idade: 24 },
    { id: 2, nome: 'Marcelly', idade: 23 },
    { id: 3, nome: 'Isabelly', idade: 16 }
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
