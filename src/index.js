import ReactDOM from "react-dom";
import Corpo from "./Corpo";
import Navbar from "./Navbar";

function App () {
    return (
        <div>
            <Navbar />
            <Corpo />
        </div>
    )
}

const app = App();
ReactDOM.render(app, document.querySelector(".root"));