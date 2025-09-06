import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu implements OnInit {

  ngOnInit(): void {
    // Menu aparece instantaneamente - sem delays desnecessários
    // As animações CSS cuidam da entrada suave dos elementos
  }

  // Método para lidar com cliques nos links (você pode customizar os URLs)
  handleLinkClick(event: Event, type: string): void {
    event.preventDefault();

    // URLs dos links - você pode personalizar conforme necessário
    const links = {
      agendamento: 'https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário.',
      instagram: 'https://instagram.com/studio_kcortts',
      contato: 'https://wa.me/5511999999999',
      youtube: 'https://youtube.com/@studiokcortts',
      tiktok: 'https://tiktok.com/@studio_kcortts',
      portfolio: 'https://portfolio.studiokcortts.com'
    };

    const url = links[type as keyof typeof links];
    if (url) {
      // Adiciona um pequeno delay para a animação antes de abrir o link
      setTimeout(() => {
        window.open(url, '_blank');
      }, 150);
    }
  }
}
