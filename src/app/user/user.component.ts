import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Map } from '../_model/map.model';
import { User } from '../_model/user.model';
import { UserService } from '../_service/user.service';
import { MapService } from '../_service/map.service';
import { AuthenticationService } from '../_service/authentication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  maps: Map[] = [];
  currentUser: User;
  currentUserSubscription: Subscription;
  displayedColumns: string[] = ['name', 'img', 'operation'];
  dataSource: MatTableDataSource<Map>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private mapService: MapService,
    private userService: UserService,
    private authenticationService: AuthenticationService) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });

    this.userService.getMaps(this.currentUser._id).subscribe(data => {
      this.maps = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onSearch() {
    alert("search");
  }

  createMap() {
    if (this.currentUser.role === 'user') {
      this.router.navigate(['/map']);
    }
  }

  editMap(mapName) {
    if (this.currentUser.role === 'user') {
      let map = new Map();
      for(let i = 0; i < this.maps.length; i++) {
        if(this.maps[i].name === mapName) {
          map = this.maps[i];
          break;
        }
      }
      this.mapService.setCurrentMap2LocalStorage(map);
      this.router.navigate(['/map']);
    }
  }
}