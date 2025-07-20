import { Component } from '@angular/core';
import { Musica } from '../../../models/musica';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-musicaslist',
  imports: [RouterLink],
  templateUrl: './musicaslist.component.html',
  styleUrl: './musicaslist.component.scss'
})
export class MusicaslistComponent {

  lista:Musica[] = [];

  constructor(){

    this.lista.push(new Musica(1, "californication"))
    this.lista.push(new Musica(2, "No surprises"))
    this.lista.push(new Musica(3, "All your sisters"))
  }

  editar(){}
  deletar(){}

}
