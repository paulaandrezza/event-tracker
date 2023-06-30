import { atom } from "recoil"
import { IEvento } from "../interfaces/IEvento"
import { IFiltroDeEventos } from "../interfaces/IFiltroDeEventos"

export const listaDeEventosState = atom<IEvento[]>({
  key: "listadDeEventosState",
  default: [],
})

export const filtroDeEventos = atom<IFiltroDeEventos>({
  key: "filtroDeEventos",
  default: {},
})
