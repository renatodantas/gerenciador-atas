import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="container mt-5 bg-light shadow rounded-3" style={{ padding: '5rem' }}>
      <h1 className="display-5 fw-bold">Gerenciador de Atas</h1>
      <p className="col-md-8 fs-4">Crie e gerencie as atas do seu departamento.</p>
      <Link to="/atas" className="btn btn-primary btn-lg">
        Visualizar atas
      </Link>
    </div>
  )
}
