import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova_transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  destino?: number;
  valor?: number;

  transferir() {
    this.aoTransferir.emit({ valor: this.valor, destino: this.destino });
    this.limparCampos();
  }

  limparCampos(){
    this.destino = this.valor = undefined;
  }
}
