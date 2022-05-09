export default function MyUser(props) {
    return (
        <div class="usuario">
            <img src={props.image} />
            <div class="texto">
              <strong>{props.user}</strong>
              {props.name}
            </div>
        </div>
    )
}