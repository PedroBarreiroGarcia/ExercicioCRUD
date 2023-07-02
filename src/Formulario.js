function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}){
    return(
        <form>
            <input type="text" value={obj.nomeSalao} onChange={eventoTeclado} name='nomeSalao' placeholder="Nome Salão" className='form-control'/>
            <input type="text" value={obj.proprietarioSalao} onChange={eventoTeclado} name='proprietarioSalao' placeholder="Propietário Salão" className='form-control'/>
            <input type="text" value={obj.email} onChange={eventoTeclado} name='email' placeholder="Email" className='form-control'/>
            <input type="text" value={obj.senha} onChange={eventoTeclado} name='senha'  placeholder="Senha" className='form-control'/>
            <input type="text" value={obj.ruaSalao} onChange={eventoTeclado} name='ruaSalao' placeholder="Rua Salão" className='form-control'/>
            <input type="text" value={obj.numeroSalao} onChange={eventoTeclado} name='numeroSalao' placeholder="Número Salão" className='form-control'/>
            <input type="text" value={obj.bairroSalao} onChange={eventoTeclado} name='bairroSalao' placeholder="Bairro" className='form-control'/>
            <input type="text" value={obj.cnpj} onChange={eventoTeclado} name='cnpj' placeholder="CNPJ Salão" className='form-control'/>
            <input type="text" value={obj.telefoneSalao} onChange={eventoTeclado} name='telefoneSalao' placeholder="Telefone salão" className='form-control'/>
            <input type="text" value={obj.seloSalao} onChange={eventoTeclado} name='seloSalao' placeholder="Selo" className='form-control'/>
            
            {
                botao
                ?
                <input type="button" value='Cadastrar' onClick={cadastrar} className='btn btn-primary'/>
                :
                <div>
                <input type="button" value='Alterar' onClick={alterar} className='btn btn-warning'/>
                <input type="button" value='Remover' onClick={remover} className='btn btn-danger'/>
                <input type="button" value='Cancelar' onClick={cancelar} className='btn btn-secondary'/>
                </div>
            }

        </form>
    )
}

export default Formulario;