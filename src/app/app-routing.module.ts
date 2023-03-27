import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authorization/authguard.guard';
import { ArchiveComponent } from './Component/archive/archive.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ForgetComponent } from './Component/forget/forget.component';
import { LoginComponent } from './Component/login/login.component';
import { NoteCComponent } from './Component/note-c/note-c.component';
import { RegisterComponent } from './Component/register/register.component';
import { ResetComponent } from './Component/reset/reset.component';
import { TakenoteComponent } from './Component/takenote/takenote.component';
import { TrashComponent } from './Component/trash/trash.component';

const routes: Routes = [
{path: '', redirectTo: "/Login", pathMatch: 'full'},
{path:'Login',component:LoginComponent},
{path:'Registration',component:RegisterComponent},
{path:'Forget',component:ForgetComponent},
{path:'Reset/:token',component:ResetComponent},
{
  path: 'Dashboard', component: DashboardComponent, canActivate:[AuthguardGuard],
  children: [
    { path: '', redirectTo: "/Dashboard/notes", pathMatch: 'full' },
    { path: 'notes',component:NoteCComponent},
    { path: 'trash',component:TrashComponent},
    { path: 'archive',component:ArchiveComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
