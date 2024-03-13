import { Component, Input } from '@angular/core';
import { DesaparecidoDetails } from '../../models/DesaparecidoDetails';
import { DesaparecidoService } from '../../services/desaparecido.service';
import { FacebookService } from '../../services/facebook.service';
import { AsyncPipe, DatePipe, NgIf, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-desaparecido-details',
  standalone: true,
  imports: [DatePipe, RouterModule, NgIf, AsyncPipe, NgOptimizedImage],
  templateUrl: './desaparecido-details.component.html',
  styleUrl: './desaparecido-details.component.scss',
})
export class DesaparecidoDetailsComponent {
  desaparecidoDetails!: DesaparecidoDetails;
  message = '';

  @Input()
  set id(id: string) {
    this.service.getDesaparecidoById(id).subscribe((response) => {
      this.desaparecidoDetails = response;
      this.message = 'Pessoa desaparecida - Nos ajude a encontrar';
    });
  }

  constructor(
    private service: DesaparecidoService,
    private facebookService: FacebookService,
  ) {}
  share() {
    const urlToShare = window.location.href;
    this.facebookService.shareWithFacebook(urlToShare);
  }
}
