import { Component } from '@angular/core';

import { LoggerService }      from './logger.service';
import { UserContextService } from './user-context.service';
import { UserService }        from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [ LoggerService, UserContextService, UserService ]
})
export class AppComponent {

  private userId = 1;

  constructor(logger: LoggerService, public userContext: UserContextService) {
    userContext.loadUser(this.userId);
    logger.logInfo('AppComponent initialized');
  }
}
