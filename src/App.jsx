import Formulario from "./Components/formulario.jsx";
import ListaEstudiantes from "./Components/lista.jsx";

const App = () => {
    return(
        <div className="container-text-center">
            <div className="row mt-3">
                <Formulario/>
                <ListaEstudiantes/>
            </div>
        </div>
    )
}

export default App;