import { FC } from "react";
import { Container, Table } from "react-bootstrap";

export const AtaListPage: FC = () => {
  return (
    <Container>
      <h3>Atas</h3>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Data</th>
            <th>Título</th>
            <th>Seção</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 3 }).map((_, index) => (
            <tr key={index}>
              <td className="text-center" style={{ width: 110 }}>22/03/2022</td>
              <td>Reunião entre EQUIPE A e EQUIPE B</td>
              <td>CT-EQUIPE</td>
              <td className="text-center" style={{ width: 150 }}>
                <i className="icone-link bi-pencil-square text-primary" title="Alterar"></i>
                <i className="icone-link bi-x-circle text-danger" title="Excluir"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container >
  )
}
