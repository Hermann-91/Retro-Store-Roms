import { Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly games = signal([
    {
      gameCover: "https://jogoveio.com.br/wp-content/uploads/2020/05/81282-demon-s-crest-snes-screenshot-japanese-title-screen-1.png",
      gameLabel: "RETRO CLÁSSICO",
      gamePriceTitle: "Demon's Crest",
      gameType: "SNES",
      gamePricing: "Gratuito",
      gameLink: "https://miixdrop.net/f/elr0xd9piq0v48q"
    },
    {
      gameCover: "https://romsportugues.com/wp-content/uploads/2024/05/Dragon-Ball-Z-Super-Gokuu-Den-Totsugeki-Hen-PTBR-SNES-1.webp",
      gameLabel: "EXCLUSIVO JAPÃO",
      gamePriceTitle: "DBZ: Super Gokuden",
      gameType: "SNES",
      gamePricing: "Gratuito",
      gameLink: "https://krakenfiles.com/view/tGChQB7D8b/file.html"
    },
       {
      gameCover: "https://romsportugues.com/wp-content/uploads/2023/01/The-Legend-of-Zelda-A-Link-to-the-Past-Four-Swords-PTBR-300x300.webp",
      gameLabel: "RETRO CLÁSSICO",
      gamePriceTitle: "The Legend of Zelda – A Link to the Past & Four Swords",
      gameType: "GBA",
      gamePricing: "Gratuito",
      gameLink: "https://miixdrop.net/f/pj04pjpvhxej9r"
    },
    {
      gameCover: "https://romsportugues.com/wp-content/uploads/2018/07/Pokemon-Fire-Red-PTBR-GBA-294x300.webp",
      gameLabel: "RETRO CLASSICO",
      gamePriceTitle: "Pokemon – Fire Red Version",
      gameType: "GBA",
      gamePricing: "Gratuito",
      gameLink: "https://workupload.com/file/xQnjq8jL5xE"
    },
    {
      gameCover: "https://romsfun.com/wp-content/uploads/2019/04/Mario-Luigi-Superstar-Saga.jpg",
      gameLabel: "RETRO CLASSICO",
      gamePriceTitle: "Mario & Luigi – Superstar Saga",
      gameType: "GBA",
      gamePricing: "Gratuito",
      gameLink: "https://romsfun.com/download/mario-luigi-superstar-saga-3199"
    },
     {
      gameCover: "https://romsfun.com/wp-content/uploads/2019/10/mega-man-bass-gba.jpg",
      gameLabel: "RETRO CLASSICO",
      gamePriceTitle: "Mega Man & Bass",
      gameType: "GBA",
      gamePricing: "Gratuito",
      gameLink: "https://romsfun.com/download/mega-man-bass-35422"
    }
    
  ])
}
