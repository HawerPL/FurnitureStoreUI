import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Section } from 'src/app/models/Section';
import { SectionService } from 'src/app/services/httpClient/section.service';


@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})

export class MainSectionComponent implements OnInit {

  sections: Array<Section>;

  constructor(private http: SectionService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getSections();
  }

  getSections(){
    this.http.getSections().subscribe(sections => {
      this.sections = sections;
      this.sections.sort((a, b) => {
        if(a.order <= b.order){
          return -1;
        }
        else{
          return 1;
        }
      });
    });
  }

}
