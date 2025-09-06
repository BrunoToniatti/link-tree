import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  standalone: true,
  templateUrl: './intro.html',
  styleUrls: ['./intro.scss']
})
export class Intro implements OnInit {
  fadeOut = false;
  showStudio = false;
  showKcortts = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Sequência de animações mais rápida
    setTimeout(() => this.showStudio = true, 300);
    setTimeout(() => this.showKcortts = true, 800);

    // Transição direta para o menu
    setTimeout(() => {
      this.fadeOut = true;
    }, 3500);

    // Navega imediatamente após o fadeOut começar
    setTimeout(() => {
      this.router.navigate(['/menu']);
    }, 3900);
  }
}
