import "./Categoria.css";

function CategoriaNome1(props) {
  return (
    <div className="categoria">
      <div className="container-nome">
        <h1 className="categoria-nome">{props.categoria}</h1>
      </div>
    </div>
  );
}

export default CategoriaNome1;
