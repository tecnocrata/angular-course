import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BlogEntryComponent } from './components/blog-entry/blog-entry.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'blogEntry/:id',
    component: BlogEntryComponent,
  },
  // {
  //   path: 'welcome',
  //   component: LayoutHeaderFooterComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: HomePageComponent, // Initial Page
  //       canActivate: [AuthGuard],
  //     },
  //   ],
  // },
];

// const routes: Routes = [
//   {
//     path: "landing",
//     component: LayoutFooterComponent,
//     children: [
//       {
//         path: "",
//         component: LandingPageComponent, // Landing Page
//       },
//     ],
//   },
//   {
//     path: "welcome",
//     component: LayoutHeaderFooterComponent,
//     children: [
//       {
//         path: "",
//         component: HomePageComponent, // Initial Page
//         canActivate: [AuthGuard],
//       },
//     ],
//   },
//   {
//     path: "",
//     redirectTo: "welcome",
//     pathMatch: "full",
//   },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
