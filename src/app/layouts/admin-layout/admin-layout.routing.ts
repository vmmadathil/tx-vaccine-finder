import { Routes } from '@angular/router';

import { OverviewComponent } from '../../pages/overview/overview.component';
import { EligibilityComponent } from '../../pages/eligibility/eligibility.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'overview',       component: OverviewComponent },
    { path: 'eligibility',    component: EligibilityComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'locate',           component: MapsComponent },
];
