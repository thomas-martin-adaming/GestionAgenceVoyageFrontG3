import { Routes } from '@angular/router';

import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { JourneyComponent } from '../../journey/journey.component';
import { RoleComponent } from '../../role/role.component';
import { UtilisateurComponent } from '../../utilisateur/utilisateur.component';
import { LocationComponent } from '../../location/location.component';
import { LoginComponent } from '../../login/login.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'journey',        component: JourneyComponent },
    { path: 'utilisateur',    component: UtilisateurComponent },
    { path: 'role',           component: RoleComponent },
    { path: 'location',       component: LocationComponent },
    { path: 'login',       component: LoginComponent },
];
