import "./Title.css";

export default function Title({ categoria }) {
  return (
    <div className="categoria">
      <div className="container-nome">
        <h1 className="categoria-nome">{categoria}</h1>
      </div>
    </div>
  );
}
