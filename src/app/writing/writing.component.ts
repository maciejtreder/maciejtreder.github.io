import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ContentService } from 'src/app/content.service';
import { Post } from 'src/model/post.model';
import { GoogleAnalyticsService } from '../google-analytics.service';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: [
    '../../component.scss',
    './writing.component.scss'
  ]
})
export class WritingComponent implements OnInit {

  constructor(private cs: ContentService, private ga: GoogleAnalyticsService) { }

  public posts = this.cs.getWriting();
  public display: Post[];

  public selectedTag$: Subject<string> = new Subject<string>();

  ngOnInit(): void {
  }

  public handleClick(name: string): void {
    this.ga.trackEvent(name);
  }

  public listRefined(event): void {
    this.display = event;
  }

  public selectTag(tag: string) {
    this.selectedTag$.next(tag);
  }
}
