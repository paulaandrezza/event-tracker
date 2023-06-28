import { atom } from "recoil"
import { IEvento } from "../interfaces/IEvento"

export const listaDeEventosState = atom<IEvento[]>({
  key: "listadDeEventosState",
  default: [
    {
      descricao: "Estudar React",
      inicio: new Date("2023-06-30T09:00"),
      fim: new Date("2023-06-30T13:00"),
      completo: false,
      id: 1642342747,
    },
    {
      descricao: "Estudar Recoil",
      inicio: new Date("2023-06-29T09:00"),
      fim: new Date("2023-06-29T11:00"),
      completo: false,
      id: 1642342959,
    },
  ],
})
