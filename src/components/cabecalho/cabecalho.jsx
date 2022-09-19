import './cabecalho.css'

export const Cabecalho = () =>{
    return(
        <header>
                <div className='logonome'>
                    <div>
                        <img src='logobranco.png' className='log'></img>
                        <h1>BocaWeb</h1>
                    </div>

                    <div className='historia'>
                        <img src='icone-info.png' className='icone'></img>
                        História
                    </div>
                </div>
                <div className='loginandimg'>
                    <img src='icone-login.png' class='icone'></img>
                    
                    Login
                </div>
        </header>
    )
}