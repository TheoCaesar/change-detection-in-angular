import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
//   private messages = signal<string[]>([]);
    private messages: [] = []
//   allMessages = this.messages.asReadonly();
    get allMessages () {
        return [...this.messages] //copy of msgs
    }

  addMessage(message: string) {
    // this.messages.update((prevMessages) => [...prevMessages, message]);
    return [...this.messages, message]
  }
}