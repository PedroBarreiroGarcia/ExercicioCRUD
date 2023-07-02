function Tabela({vetor, selecionar}){
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome Salão</th>
                    <th>Propietário Salão</th>
                    <th>Email</th>
                    <th>Senha</th>
                    <th>Rua Salão</th>
                    <th>Número Salão</th>
                    <th>Bairro</th>
                    <th>CNPJ Salão</th>
                    <th>Telefone salãoo</th>
                    <th>Selo</th>
                    <th>Selecionar</th>
                </tr>
            </thead>

            <tbody>
                {
                    // o obj tem todas as informações do salão 
                    vetor.map((obj,indice) => (
                        <tr key={indice}>
                            <td>{indice+1}</td>
                            <td>{obj.nomeSalao}</td>
                            <td>{obj.proprietarioSalao}</td>
                            <td>{obj.email}</td>
                            <td>{obj.senha}</td>
                            <td>{obj.ruaSalao}</td>
                            <td>{obj.numeroSalao}</td>
                            <td>{obj.bairroSalao}</td>
                            <td>{obj.cnpj}</td>
                            <td>{obj.telefoneSalao}</td>
                            <td>{obj.seloSalao}</td>
                            <td><button onClick={() => {selecionar(indice)}} className="btn btn-success">Seleciona</button></td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
    )
}

export default Tabela;