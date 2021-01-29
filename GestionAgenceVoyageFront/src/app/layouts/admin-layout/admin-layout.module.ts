import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { JourneyComponent } from '../../journey/journey.component';
<<<<<<< HEAD
import { MatTabsModule } from '@angular/material/tabs';

=======
import { RoleComponent } from '../../role/role.component';
import { UtilisateurComponent } from '../../utilisateur/utilisateur.component';
import { LocationComponent } from '../../location/location.component';
import { LoginComponent } from '../../login/login.component';
>>>>>>> c90bdd0cd6003ae5785d8c9740d2d0876508cbf9

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    MatTabsModule,
    ToastrModule.forRoot()
  ],
  exports: [
 
    MatTabsModule,
  
  ],

  declarations: [
    UserProfileComponent,
    TableListComponent,
    UpgradeComponent,
    NotificationsComponent,
    JourneyComponent,
    UtilisateurComponent,
    RoleComponent,
    LocationComponent,
    LoginComponent
    
  ]
})

export class AdminLayoutModule {}
