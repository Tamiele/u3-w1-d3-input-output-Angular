import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { iJSONresponse } from '../../interfaces/i-jsonresponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  arrayPost: Post[] = [];
  postInEvidenza!: Post;

  showForm: boolean = false;

  ngOnInit(): void {
    fetch('db.json')
      .then((response) => {
        if (response.ok) {
          return <Promise<iJSONresponse>>response.json();
        } else {
          throw new Error('ERROR');
        }
      })
      .then((dati) => {
        this.arrayPost = dati.posts;

        this.getPost();
      })
      .catch((err) => {
        console.log('ERRORE', err);
      });

    // Variabile che controlla la visibilità del form

    // Funzione per aprire/chiudere il form
  }

  arrayRandomPost: Post[] = [];

  getPost() {
    // Genera un indice casuale

    for (let i = 0; i <= 3; i++) {
      const randomIndex = Math.floor(Math.random() * this.arrayPost.length);
      this.postInEvidenza = this.arrayPost[randomIndex];
      this.arrayRandomPost.push(this.arrayPost[randomIndex]);
    }
  }
  toggleForm() {
    this.showForm = !this.showForm;
  }
}
