import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardMenor from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fpoa16-1.fna.fbcdn.net/v/t1.18169-9/28378193_1963601733714782_4109705042998943455_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=FZe192jETtgAX87ajjO&_nc_ht=scontent.fpoa16-1.fna&oh=00_AT-0e-e42eUjhTjpky_G6XnakSwTYOowUUIokvS08ed3cQ&oe=628527EF" 
          nome="Carolini Constantino" 
          descricao="Oi, eu sou a Carolini Constanttno. Sou desenvolvedora em formação, sou aluna da Labenu e em breve estarei atuando na empresa Dasa."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="container-menores">
      <CardMenor
      icone="https://i.pinimg.com/736x/2c/7e/0c/2c7e0cf35bee15d3c02a98086cee0d01.jpg"
      texto="carolini.constantino@dasa.com" />

      <CardMenor
      icone="https://cdn-icons-png.flaticon.com/512/3722/3722049.png"
      texto="Av. Gustavo Vetter" />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://scontent.fpoa16-1.fna.fbcdn.net/v/t1.6435-9/70692065_504762770300707_7101772129523204096_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=BiG0xuSpIn8AX9mEymQ&tn=vvqEVjYx12tNKnSQ&_nc_ht=scontent.fpoa16-1.fna&oh=00_AT_S-AJWlwBdlWh2apbWqVo-bogrP7ybqcqtjcSgRv84zg&oe=6285660F" 
          nome="Coletivo Helen Keller" 
          descricao="Coordenação de projetos e da comissão de comunicação" 
        />
        
        <CardGrande 
          imagem="https://scontent.fpoa16-1.fna.fbcdn.net/v/t1.18169-9/18528017_1668326343474545_2383593217821934347_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kOn4ZiNm7YkAX8MHSOT&_nc_ht=scontent.fpoa16-1.fna&oh=00_AT80oZJ_JsPcz5mAnmC9Su_8BZPmSEqR9xD2uHTNgE8nnQ&oe=6283CA4C" 
          nome="LEME" 
          descricao="Acolhendo e atendendo usuários enquanto assistente social" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
