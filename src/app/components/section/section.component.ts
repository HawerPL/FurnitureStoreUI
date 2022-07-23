import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Section } from 'src/app/models/Section';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  @Input()
  section: Section;

  description: SafeHtml = "";
  name: SafeHtml = "";


  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.description = this.sanitizer.bypassSecurityTrustHtml(this.section.description);
    this.name = this.sanitizer.bypassSecurityTrustHtml(this.section.name);
  }

}
