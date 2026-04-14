const fotoPerfil = document.querySelector('.minha_foto');
const textoBio = document.querySelector('.texto_bio');

fotoPerfil.addEventListener('mouseover', () => textoBio.classList.add('ativo'));
fotoPerfil.addEventListener('mouseout', () => textoBio.classList.remove('ativo'));

