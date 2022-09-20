import './cabecalho.css'

export const Cabecalho = () =>{
    return(
        <header>
                <div className='logonome'>
                    <div>
                        <img src='logobranco.png' className='log' alt='imagem da logo'></img>
                        <h1>BocaWeb</h1>
                    </div>

                    <div className='historia'>
                        <img src='icone-info.png' className='icone' alt='imagem do icone de informação'></img>
                        História
                    </div>
                </div>
                <div className='loginandimg'>
                    <img src='icone-login.png' class='icone' alt='imagem do icone de login'></img>
                    
                    Login
                </div>
        </header>
    )
}
