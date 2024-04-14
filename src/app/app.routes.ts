import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pager/home/home.component';
import { HelpComponent } from './pager/help/help.component';

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "help",
        component: HelpComponent
    }
];