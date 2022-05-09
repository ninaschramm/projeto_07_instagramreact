export default function Story(props) {
    return (
        <div class="story">
          <div class="imagem">
            <img src={props.image} alt=""/>
          </div>
          <div class="usuario">
            {props.user}
          </div>
        </div>
    )
}