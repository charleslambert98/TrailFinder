import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Component Implementation
import { HomeComponent } from "./home/home.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { GearPageComponent } from "./gear-page/gear-page.component";
import { FindPageComponent } from "./find-page/find-page.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "about", component: AboutPageComponent },
  { path: "gear", component: GearPageComponent },
  { path: "trails", component: FindPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
