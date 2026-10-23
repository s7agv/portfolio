// TODO confirmar anos exatos de cada projeto
const PROJECTS = [
  {
    name: 'Duckberry Pi Zero',
    year: '2019',
    desc_pt: 'Script de setup para transformar um Raspberry Pi Zero (sem wireless) em um injetor de payloads estilo USB Rubber Ducky, sem exigir conexão de rede no próprio Zero.',
    desc_en: 'Setup script that turns a Raspberry Pi Zero (non-W) into a USB Rubber Ducky style payload injector, without requiring the Zero itself to have a network connection.',
    stack: ['Shell', 'Raspbian', 'Linux'],
    repo: 'https://github.com/s7agv/duckberry-pi-zero-without-wireless',
    img: 'assets/img/placeholder.svg',
  },
  {
    name: 'Wonton Bot',
    year: '2020',
    desc_pt: 'Bot de Discord multiuso com moderação, economia simulada, comandos de voz, dicionário, busca de imagens e mini-jogos (jogo da velha, blackjack).',
    desc_en: 'General-purpose Discord bot with moderation, a simulated economy, voice commands, dictionary lookups, image search, and mini-games (tic-tac-toe, blackjack).',
    stack: ['Node.js', 'Discord.js'],
    repo: 'https://github.com/SWonton/wontonbot',
    img: 'assets/img/placeholder.svg',
  },
  {
    name: 'Filebot',
    year: '2020',
    desc_pt: 'Bot de Discord para administração remota de servidor Linux: navegar diretórios, executar comandos shell e transferir arquivos, rodando em um Raspberry Pi Zero.',
    desc_en: 'Discord bot for remote Linux server administration: browse directories, run shell commands, and transfer files, running on a Raspberry Pi Zero.',
    stack: ['Node.js', 'Discord.js', 'Shell'],
    repo: 'https://github.com/s7agv/filebot',
    img: 'assets/img/placeholder.svg',
  },
];
