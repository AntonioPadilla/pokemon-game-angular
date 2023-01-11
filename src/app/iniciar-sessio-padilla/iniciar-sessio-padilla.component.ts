import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciar-sessio-padilla',
  templateUrl: './iniciar-sessio-padilla.component.html',
  styleUrls: ['./iniciar-sessio-padilla.component.css']
})
export class IniciarSessioPadillaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let mostrar = document.getElementById("jugador");
    let guardarJugador = document.getElementById("guardarJociNom");
    //@ts-ignore
    guardarJugador.onclick = function (guardarElNomIjUGAR){
      //@ts-ignore
      let nomUsuari = document.getElementById("nomJugador").value;
      localStorage.setItem("usuari", nomUsuari);
    }
  }

}
