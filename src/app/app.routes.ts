import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AtletaComponent } from './component/atleta/atleta.component';
import { CorridaComponent } from './component/corrida/corrida.component';
import { AtletaListaComponent } from './component/atleta/atleta-lista-component/atleta-lista-component.component';
export const routes: Routes = [

    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent

    },
    {
        path: "cadastroAtleta",
        component: AtletaComponent,
    },
    {
        path: "cadastroAtleta/:id",
        component: AtletaComponent,
    },
    {
        path: "corridaAtleta/:id",
        component: CorridaComponent,
    },
    {
        path: "corridaAtleta/:id",
        component: CorridaComponent,
    },
    {

        path: "listaAtleta",
        component: AtletaListaComponent
    }

];
