import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { Musica } from '../../../models/musica';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ArtistasdetailsComponent } from "../../artistas/artistasdetails/artistasdetails.component";
import { MusicasdetailsComponent } from "../musicasdetails/musicasdetails.component";
import { MusicaService } from '../../../services/musica.service';

@Component({
  selector: 'app-musicaslist',
  imports: [RouterLink, MdbModalModule, ArtistasdetailsComponent, MusicasdetailsComponent],
  templateUrl: './musicaslist.component.html',
  styleUrl: './musicaslist.component.scss'
})
export class MusicaslistComponent {

  lista: Musica[] = [];

  musicaEdit: Musica = new Musica(0, "");

  //elementos da modal
  modalService = inject(MdbModalService);
  @ViewChild("modalMusicaDetalhe") modalMusicaDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  musicaService = inject(MusicaService);


  constructor() {

    this.findAll();



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

  findAll() {

    this.musicaService.findAll().subscribe({
      next: lista => {

        this.lista = lista;

      },
      error: erro => {
        alert("algo deu errado")
      },
    })
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

        this.musicaService.delete(musica.id).subscribe({
          next: mensagem => {
            Swal.fire("Deletado!", "", "success");
            this.findAll();

          },
          error: erro => {
            Swal.fire("Ocorreu um erro!", "", "error");
          },
        })
      }
    });


  }

  new() {
    this.musicaEdit = new Musica(0, "");
    this.modalRef = this.modalService.open(this.modalMusicaDetalhe)

  }

  edit(musica: Musica) {
    this.musicaEdit = Object.assign({}, musica);
    this.modalRef = this.modalService.open(this.modalMusicaDetalhe)

  }

  retornoDetalhe(musica: Musica) {

    if (musica.id > 0) {
      let indice = this.lista.findIndex(x => { return x.id == musica.id });
      this.lista[indice] = musica;
    } else {
      musica.id = 55;
      this.lista.push(musica);
    }

    this.modalRef.close();
  }

}
