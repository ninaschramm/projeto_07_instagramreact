import Sugestao from './Sugestao'
import MyUser from './MyUser.js'

const sugestoes = ["bad.vibes.memes", "chibirdart", "razoesparaacreditar", "adorable_animals", "smallcutecats"]

export default function Sidebar() {
    return (
        <div class="sidebar">
            <MyUser user="catanacomics" image="assets/img/catanacomics.svg" name="Catana" />
          

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            {sugestoes.map((sugestao) => <Sugestao user={sugestao} image={`assets/img/${sugestao}.svg`} reason="Segue você" />)}
            

            
          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    )
}