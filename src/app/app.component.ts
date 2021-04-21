import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Piano';

  /* metodo aplicarSonido */
  aplicarSonido(numero: number): void{
    const audio = new Audio();
    /* ruta relativa para que coja el numero de nota segun la tecla */
    audio.src='../assets/sonidos/note' + numero + '.wav';
    /* que cargue el audio */
    audio.load();
    /* que ejecute el audio */
    audio.play();
  }
}
