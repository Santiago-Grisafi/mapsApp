import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ByCapitalComponent } from "./country/components/by-capital/by-capital.component";
import { ByNameComponent } from "./country/components/by-name/by-name.component";
import { ByRegionComponent } from "./country/components/by-region/by-region.component";
import { ShowCountryComponent } from "./country/components/show-country/show-country.component";

const routes : Routes = [
    {path: "capital", component:ByCapitalComponent},
    {path: "name", component: ByNameComponent, pathMatch: "full"},
    {path: "region", component: ByRegionComponent},
    {path: "country/:codeCountry", component: ShowCountryComponent},
    {path: "**", redirectTo:"name"},
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ],
})

export class AppRoutingModule{

}

