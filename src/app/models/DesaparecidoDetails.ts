import {Desaparecido} from "./Desaparecido";

export interface DesaparecidoDetails extends Desaparecido{
  "ultimaOcorrencia": {
    "dtDesaparecimento": string,
    "localDesaparecimentoConcat": string,
    "ocorrenciaEntrevDesapDTO"?: {
      "informacao"?: string,
      "vestimentasDesaparecido"?: string
    }
  },
}
