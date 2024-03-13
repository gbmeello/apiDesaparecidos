import { Component } from '@angular/core';
import { DesaparecidoDetails } from '../../models/DesaparecidoDetails';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { InputComponent } from '../../components/input/input.component';
import { DesaparecidoService } from '../../services/desaparecido.service';

@Component({
  selector: 'app-desaparecido',
  standalone: true,
  imports: [InputComponent, CardComponent, NgFor, NgIf, NgStyle],
  templateUrl: './desaparecido.component.html',
  styleUrl: './desaparecido.component.scss',
})
export class DesaparecidoComponent {
  nome = '';
  idadeIni = '';
  idadeFin = '';
  sexo = 'empty';
  listaDeDesaparecidos: DesaparecidoDetails[] = [];
  page = 0;
  maxPage = 0;

  constructor(private apiSearch: DesaparecidoService) {}
  ngOnInit() {
    this.getPegaLista('&PAGINA=0');
  }
  onChangeNome(value: string) {
    this.nome = value;
  }
  onChangeIdadeInicial(value: string) {
    this.idadeIni = value;
  }
  onChangeIdadeFinal(value: string) {
    this.idadeFin = value;
  }

  getPegaLista(filter: string) {
    this.apiSearch.getListaDesaparecido(filter).subscribe((response: any) => {
      this.listaDeDesaparecidos = response.content;
      this.maxPage = response?.totalPages - 1;
    });
  }
  search() {
    const filter = this.getFilter();
    this.page = 0;
    this.getPegaLista(filter);
  }

  getFilter() {
    let filter = '';

    if (this.nome !== '') {
      filter += `&NOME=${this.nome.trim()}`;
    }

    if (this.idadeIni !== '') {
      filter += `&Idade Inicial:${this.idadeIni}`;
    }

    if (this.idadeFin !== '') {
      filter += `&Idade Final:${this.idadeFin}`;
    }

    if (this.sexo !== '') {
      filter += `&SEXO:${this.sexo}`;
    }

    return filter;
  }

  onClickNextPage() {
    const filter = `&pagina=${this.page + 1}${this.getFilter()}`;
    this.page += 1;
    this.getPegaLista(filter);
  }

  onClickPreviousPage() {
    const filter = `&pagina=${this.page - 1}${this.getFilter()}`;
    this.page += -1;
    this.getPegaLista(filter);
  }
}
