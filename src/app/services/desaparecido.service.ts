import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Desaparecido} from "../models/Desaparecido";
import {DesaparecidoDetails} from "../models/DesaparecidoDetails";

@Injectable({
  providedIn: 'root'
})
export class DesaparecidoService {

  constructor(private http: HttpClient) { }

  getListaDesaparecido(filter: string): Observable<Desaparecido>{
    return this.http.get<Desaparecido>('https://abitus-api.pjc.mt.gov.br/v1/pessoas/aberto/filtro?faixaIdadeFinal=0&faixaIdadeInicial=0&nome=&porPagina=12&sexo=&status=DESAPARECIDO&pagina=0'.concat(filter));
  }

  getDesaparecidoById(id: string): Observable<DesaparecidoDetails>{
    return this.http.get<DesaparecidoDetails>(`https://abitus-api.pjc.mt.gov.br/v1/pessoas/${id}`);

  }


}
