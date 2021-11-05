import pageLogo from '../img/pageIcon.jpg'

function Header() {
    return (
    <div style={{height: `${9}%`}}>
        <nav className="navbar navbar-dark bg-dark" style={{height: 100+'%'}}>
            <a className="navbar-brand" href="#">
                <img src={pageLogo} width="65" style={{paddingRight:5+'px'}}/>
                Service Orders Controller
            </a>
        </nav>
    </div>
    )
}

export default Header
