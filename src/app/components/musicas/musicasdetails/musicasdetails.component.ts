import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Musica } from '../../../models/musica';

@Component({
  selector: 'app-musicasdetails',
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './musicasdetails.component.html',
  styleUrl: './musicasdetails.component.scss'
})
export class MusicasdetailsComponent {

  musica:Musica = new Musica(0, "");

  save(){

    alert("foi salvo confia");
  }

}
