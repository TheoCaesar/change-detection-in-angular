import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { MessagesService } from './messages.services';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class MessagesListComponent {
  // messages = input.required<string[]>();
  private msgService = inject(MessagesService);
  messages = this.msgService.allMessages;

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
