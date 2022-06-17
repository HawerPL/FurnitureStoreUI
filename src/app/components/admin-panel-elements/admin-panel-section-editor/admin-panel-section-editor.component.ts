import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { Section } from 'src/app/models/Section';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SectionService } from 'src/app/services/httpClient/section.service';

@Component({
  selector: 'app-admin-panel-section-editor',
  templateUrl: './admin-panel-section-editor.component.html',
  styleUrls: ['./admin-panel-section-editor.component.css']
})
export class AdminPanelSectionEditorComponent implements OnInit {

  title = 'Edytor sekcji';
  isDisabled = false;
  Editor = Editor;
  displayedColumns: string[] = ['id', 'name', 'order', 'actions'];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource = new MatTableDataSource<Section>();

  defaultSection: Section = {id: 0, name: "", description: "", order: -1};
  sections: Array<Section>;

  model = {
    editorData: "",
    section: this.defaultSection,
  }

  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(private http: SectionService) { }

  ngOnInit(): void {
    this.getSections();
  }

  toggleDisabled() {
    this.isDisabled = !this.isDisabled
  }

  onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();
  }

  getSections(){
    this.http.getSections().subscribe(sections => {
      this.reloadData(sections);
    });
  }

  addSection(){
    let section: Section;
    // section = ({
    //   name: this.sectionName,
    //   description: this.sectionDescription
    // });
    // this.http.addCategory(section).subscribe(
    //   {
    //   next: () => {
    //     this.getCategories();
    //     //this.categoryForm.reset();
    //   },
    //   error: (e) => console.error(e),
    //   complete: () => console.info('complete')
    //   })
  }

  deleteSection(id: number){
    this.http.deleteSection(id).subscribe(
      {
        next: () => {
          this.getSections();
        },
        error: (e) => console.error(e),
      }
    )
  }

  editSection(id: number){
    this.model.section = this.dataSource.data.find(s => s.id === id);
    this.model.editorData = this.dataSource.data.find(s => s.id === id)?.description;
  }

  save(){
    let section: Section;
     section = ({
      id: this.model.section.id,
      name: this.model.section.name,
      description: this.model.editorData,
      order: this.model.section.order
     });
    console.log(section);
    this.http.updateSection(section).subscribe(
      {
        next: () => {
          this.getSections();
          //this.sectionForm.reset();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
    });
  }

  reloadData(sections: Array<Section>){
    this.dataSource.data = sections;
    this.dataSource.paginator = this.paginator;
  }
}
