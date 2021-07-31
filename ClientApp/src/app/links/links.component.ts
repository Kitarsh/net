import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent {
  urlToGitHub = 'https://github.com/Kitarsh/net';
  urlToDiscord = 'https://discord.gg/PjNqJSY9E6';
  urlToTwitch = 'https://twitch.tv/kitarsh';

  goToLinkGitHub() {
    window.open(this.urlToGitHub, '_blank').focus();
  }

  goToLinkDiscord() {
    window.open(this.urlToDiscord, '_blank').focus();
  }

  goToLinkTwitch() {
    window.open(this.urlToTwitch, '_blank').focus();
  }
}
