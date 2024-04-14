import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  nombre: string= "Miguel " 
  edad: number=23
  persona: any={
    nombre: "Juan",
    edad: 40,
    direccion: "ceri"
  };
  frutas: string[]=["pera", "mango", "melon"]
  cambiandoEdad(){
    this.edad = 40
}
}

