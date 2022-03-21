import rey1 from "./assets/img/rey1.png"
import rey2 from "./assets/img/rey2.png"
import rey3 from "./assets/img/rey3.png"
import "./assets/css/app.css"

const App = (props) => {
  return (
    <div className="Contenedor__Padre">
      <div className="Contenedor__hijo">
        <div>
          <img src={rey1} alt="rey1"/>
        </div>
        <div>
          <p>rey 1</p>
        </div>
      </div>
      <div className="Contenedor__hijo">
        <div>
          <img src={rey2} alt="rey2"/>
        </div>
        <div>
          <p> rey 2</p>
        </div>
      </div>
      <div className="Contenedor__hijo">
        <div>
          <img src={rey3} alt="rey3"/>
        </div>
        <div>
          <p>rey 3</p>
        </div>
      </div>
    </div>
  )
}

export default App;
