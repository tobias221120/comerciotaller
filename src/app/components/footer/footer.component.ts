import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  mostrarSubtitulos: boolean = false;
  masInformacion:string="Mas informacion";
  
  toggleSubtitulos() {
    this.mostrarSubtitulos = !this.mostrarSubtitulos;
   
    if (this.masInformacion=="Mas informacion"){
      this.masInformacion= "Menos informacion" 
    }else if(this.masInformacion=="Menos informacion"){
      this.masInformacion="Mas informacion"
    }

    
  }
  
}
