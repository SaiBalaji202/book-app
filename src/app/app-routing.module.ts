import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/vehicles', pathMatch: 'full' },
  {
    path: 'vehicles',
    loadChildren: () =>
      import('./vehicle/vehicle.module').then((m) => m.VehicleModule),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
