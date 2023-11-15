// eslint-disable-next-line no-unused-vars
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

import {useAutenticacao} from '../hooks/useAutenticacao';
import {useAuthValueFac} from "../context/AuthContextFaculdade";

const Navbar =() => {
    const {user} = useAuthValueFac()
    const {logout} = useAutenticacao();

    return <nav className={style.navbar}>
        <NavLink to="/" className={style.brand}>
    
        </NavLink>
        <div>
        <ul className={style.links_list}>
            <li>
                <NavLink to="/" className={ ({isActive}) => (isActive ? style.active : "")}>Home </NavLink>
            </li>
            {!user && (<>
            <li>
                <NavLink to="/login" className={ ({isActive}) => (isActive ? style.active : "")}>Entrar </NavLink>
            </li>
            <li>
                <NavLink to="/register" className={ ({isActive}) => (isActive ? style.active : "")}>Cadastrar </NavLink>
            </li>
            </>)}
            <li>
                <NavLink to="/about" className={ ({isActive}) => (isActive ? style.active : "")}>Sobre </NavLink>
            </li>
            <li>
                <NavLink to="/posts/create" className={ ({isActive}) => (isActive ? style.active : "")}>Notícias </NavLink>
            </li>
            {user && (<>
            <li>
                <NavLink to="/dashboard" className={ ({isActive}) => (isActive ? style.active : "")}>Simulador Solar</NavLink>
            </li>
            </>)}
            {user && (
                <li>
                    <button onClick={logout}>Sair</button>
                </li>
            )}
        </ul>
        </div>
    </nav>;
}

export default Navbar