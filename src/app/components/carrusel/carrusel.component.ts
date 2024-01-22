import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {

sliderData = [
  { imagen: '../../../assets/img/carrusel/debeer.png' },
  { imagen: '../../../assets/img/carrusel/zeocar.png' },
  { imagen: '../../../assets/img/carrusel/wanda.png'  },
  { imagen: '../../../assets/img/carrusel/walcom.png' },
  { imagen: '../../../assets/img/carrusel/trimas.png' },
  { imagen: '../../../assets/img/carrusel/pro.png' },
  { imagen: '../../../assets/img/carrusel/menzerna.png' },
  { imagen: '../../../assets/img/carrusel/hydra.png'  }
 
];
}
