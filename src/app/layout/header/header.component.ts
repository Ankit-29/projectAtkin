import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UtilityService } from 'src/app/services/helpers/utility.service';
import { DbStorageService } from 'src/app/services/helpers/db-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() userInfo = null;
  @Input() routes = null;

  user = null;
  role = 'User';
  constructor(private authService: AuthService, private utilityService: UtilityService, private dbStorageService: DbStorageService) {



  }

  ngOnInit() {
    this.user = JSON.parse(this.dbStorageService.getItem('user'));
    this.role = this.user.type === 1 ? 'Admin' : 'User';
    this.userInfo = {
      name: this.user.name,
      role: this.role,
      avatarURL: 'https://i.pravatar.cc/150?img=14'
    };
    this.setRoutes(this.user.type);
  }

  setRoutes(type) {
    if (type === 1) {
      this.routes = [
        { displayText: 'Home', url: '/admin', iconClass: 'fe-home' },
        {
          displayText: 'Question',
          childs: [
            { displayText: 'Question List', url: '/admin/question' },
            { displayText: 'Add Question', url: '/admin/question/add' },
          ],
          iconClass: 'fe-calendar'
        },
        {
          displayText: 'Category',
          childs: [
            { displayText: 'Category List', url: '/admin/category' },
            { displayText: 'Add Category', url: '/admin/category/add' },
          ],
          iconClass: 'fe-calendar'
        },
        {
          displayText: 'Practice', url: '/question', iconClass: 'fe-file'
        },
        {
          displayText: 'Playground', url: '/playground', iconClass: 'fe-file'
        },
      ];
    } else {
      this.routes = [
        { displayText: 'Home', url: '/home', iconClass: 'fe-home' },
        {
          displayText: 'Practice', url: '/question', iconClass: 'fe-file'
        },
        {
          displayText: 'Playground', url: '/playground', iconClass: 'fe-file'
        },
      ];

    }

  }

  signOut() {
    this.authService.logout();
    this.utilityService.changeNavigation('/auth/login');
  }
}
