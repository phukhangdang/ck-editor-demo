import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Editor from 'bpm-ckeditor5/build/ckeditor';

@Component({
  selector: 'app-custom-ck-editor',
  templateUrl: './custom-ck-editor.component.html',
  styleUrls: ['./custom-ck-editor.component.scss'],
})
export class CustomCkEditorComponent implements OnInit {
  Editor = Editor;

  model = {
    editorData: '<p>Hello World!!</p>',
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>('assets/sample.txt', { responseType: 'text' as 'json' })
      .subscribe((data) => {
        this.model.editorData = data;
      });
  }
}
