import { Component } from '@angular/core';
import { Musica } from '../../../models/musica';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-musicaslist',
  imports: [RouterLink],
  templateUrl: './musicaslist.component.html',
  styleUrl: './musicaslist.component.scss'
})
export class MusicaslistComponent {

  lista: Musica[] = [];

  constructor() {

    this.lista.push(new Musica(1, "californication"))
    this.lista.push(new Musica(2, "No surprises"))
    this.lista.push(new Musica(3, "All your sisters"))

    let musicaNova = history.state.musicaNova;
    let musicaEditada = history.state.musicaEditada;

    if (musicaNova) {
      musicaNova.id = 555;
      this.lista.push(musicaNova);
    }

    if (musicaEditada) {

      let indice = this.lista.findIndex(x => { return x.id == musicaEditada.id });
      this.lista[indice] = musicaEditada;
    }
  }


  deleteById(musica: Musica) {
    Swal.fire({
      title: "Tem certeza que deseja deletar a música??",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Deletar",
      denyButtonText: `Não deletar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let indice = this.lista.findIndex(x => { return x.id == musica.id });
        this.lista.splice(indice, 1);
        Swal.fire("Deletado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Não deletado", "", "info");
      }
    });


  }

}
