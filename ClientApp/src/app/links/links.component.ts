import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  urlToGitHub: string = "https://github.com/Kitarsh/net";
  urlToDiscord: string = "https://discord.gg/PjNqJSY9E6";
  urlToTwitch: string = "https://twitch.tv/kitarsh";

  constructor() { }

  ngOnInit() {
  }

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
