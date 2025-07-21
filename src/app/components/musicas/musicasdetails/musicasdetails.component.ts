import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Musica } from '../../../models/musica';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-musicasdetails',
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './musicasdetails.component.html',
  styleUrl: './musicasdetails.component.scss'
})
export class MusicasdetailsComponent {

  router = inject(ActivatedRoute);
  router2 = inject(Router);

  constructor() {
    let id = this.router.snapshot.params["id"];
    if (id > 0) {
      this.findById(id)
    }
  }

  findById(id: number) {
    let musicaRetornada: Musica = new Musica(id, "musica");
    this.musica = musicaRetornada;

  }

  musica: Musica = new Musica(0, "");

  save() {
    if (this.musica.id > 0) {

      Swal.fire({
        title: "Sucesso",
        text: "Editado com sucesso",
        icon: "success",
        confirmButtonText: 'Ok'
      });
      this.router2.navigate(["admin/musicas"], { state: { musicaEditada: this.musica } });

    } else {

      Swal.fire({
        title: "Sucesso",
        text: "Salvo com sucesso",
        icon: "success",
        confirmButtonText: 'Ok'
      });

      this.router2.navigate(["admin/musicas"], { state: { musicaNova: this.musica } });
    }
  }

}
