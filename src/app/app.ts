import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // Corrected property name
})
export class App implements OnInit {
  protected title = 'spring-angular';
  result: string = ''; // Fixed property declaration

  constructor(private http: HttpClient) {} // Proper dependency injection

  ngOnInit(): void {
    this.fun();
  }

  fun(): void {
    this.http.get("http://localhost:8080/api/health-check", { responseType: 'text' })
      .subscribe((data: string) => {
        this.result = data;
      });
  }
}
