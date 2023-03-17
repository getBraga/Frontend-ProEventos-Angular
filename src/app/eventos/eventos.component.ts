import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  public eventos: any = [];
  widthImg: number = 150;
  marginImg: number = 2;
  mostrarImagens: boolean = true;
  public eventosFiltrados:any = [];
  private _filtroLista:string = "";
  public get filtroLista(): string {
    return this._filtroLista
  }
  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  filtrarEventos(filtrarPor: string): any {
    console.log(filtrarPor)
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter((evento:any) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor)  !== -1||
    evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }
  constructor(private http: HttpClient) { }
alterarImagem() {
  this.mostrarImagens = !this.mostrarImagens;
}
  ngOnInit() {
    this.getEventos();
  }
public getEventos():void {
  this.http.get("https://localhost:5001/api/eventos").subscribe(
 {
  next: (response) => {
    this.eventos  = response
    this.eventosFiltrados = response
  },
  error: error => console.log(error)
 }
  )

}
}
