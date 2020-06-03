import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UtilityService } from 'src/app/services/helpers/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() userInfo = null;
  @Input() routes = null;

  constructor(private authService: AuthService,private utilityService: UtilityService) {

    this.userInfo = {
      name: 'Jane Person',
      role: 'Admin',
      avatarURL: 'https://i.pravatar.cc/150?img=14'
    };

    this.routes = [
      { displayText: 'Home', url: '/', iconClass: 'fe-home' },
      {
        displayText: 'Question',
        childs: [
          { displayText: 'Question', url: '/question' },
          { displayText: 'Add Question', url: '/question/add' },
        ],
        iconClass: 'fe-calendar'
      },
      {
        displayText: 'Test',
        childs: [
          { displayText: 'Test', url: '/test' },
          { displayText: 'Add Test', url: '/test/new' }
        ],
        iconClass: 'fe-file'
      },
      {
        displayText: 'Package',
        childs: [
          { displayText: 'Package', url: '/package' },
          { displayText: 'Add Package', url: '/package/new' }
        ],
        iconClass: 'fe-file'
      },
      {
        displayText: 'Candidate',
        childs: [
          { displayText: 'Candidate', url: '/candidate' },
          { displayText: 'Import', url: '/candidate/import' },
          { displayText: 'Add Group', url: '/candidate/addgroup' },
        ],
        iconClass: 'fe-calendar'
      },
      {
        displayText: 'Pages',
        childs: [
          { displayText: 'E404', url: '/e404' },
        ],
        iconClass: 'fe-file'
      },
    ];
  }

  ngOnInit() {
  }

  signOut() {
    this.authService.logout();
    this.utilityService.changeNavigation('/login');
  }
}
