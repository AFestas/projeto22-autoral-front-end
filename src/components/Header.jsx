import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
//import { UserContext } from "../contexts/UserContext";
import Cookies from 'js-cookie';

export default function Header(){
   // const { userData } = useContext(UserContext)
    const navigate = useNavigate() 
    const [scrolled, setScrolled] = useState(false);
    const valorDoCookie = Cookies.get('name');
    
    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.pageYOffset;
          setScrolled(scrollTop > 20);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    function logout (){
        navigate("/");
        Cookies.remove('name');
        alert("Usuario deslogado com sucesso") 
    }

    return(
        <HeaderPages scrolled={scrolled}>
            <h1 onClick={()=>navigate("/")}>A Festas</h1>
            <div>
                <h2 onClick={()=>navigate("/")}>HOME</h2>
                <h2 onClick={()=>navigate("/history")}>QUEM SOMOS</h2>
                <h2 onClick={()=>navigate("/galery")}>GALERIA</h2>
                <h2 onClick={()=>navigate("/request")}>SERVIÇOS</h2>
                <h2 onClick={()=>navigate("/")}>CONTATOS</h2>
                <CircleImage onClick={()=>navigate("/signin")} src={valorDoCookie ? valorDoCookie : "https://miro.medium.com/v2/resize:fit:1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg"}/>
                <h2 onClick={()=>logout()}>Sair</h2>
            </div>            
        </HeaderPages>
    )
}
const CircleImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 20px;
  object-fit: cover;
  cursor: pointer;
`
const HeaderPages = styled.header`
    display: flex; 
    z-index: 99;
    background-color: ${({ scrolled }) => (scrolled ? '#1d1d1d' : 'transparent')};
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 70px;
    box-shadow: 0 0.5px 0.5px rgba(131, 131, 131, 0.281);
    padding: 0 30px;
    position: fixed;
    top: 0;
    left: 0;
    transition: all ease 0.5s;
    h1{
        font-family: 'Press Start 2P', sans-serif;
        font-size: 20px;
        color: #FFFFFF; 
        cursor: pointer;  
        margin-left: 50px;
        
    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 100px;
    }
    h2{
        font-family: 'Montserrat', sans-serif;
        font-size: 11px;
        font-weight: 600;
        line-height: 24px;
        color: #FFFFFF; 
        margin-left: 20px;   
        cursor: pointer;          
    }
`