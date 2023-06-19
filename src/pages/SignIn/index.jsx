import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import styled from "styled-components"
import banner from "../../assets/images/banner.jpg"
import axios from "axios"
import { UserContext } from "../../contexts/UserContext"
import Cookies from 'js-cookie';

export default function SignIn() {
    const { setUserData } = useContext(UserContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [textoBotao, setTextoBotao] = useState("Entrar") //mudar
    const [desabilitado, setDesabilitado] = useState("") //mudar    
    const inputDesbotado = "#F2F2F2"
    const inputAtivo = "#FFFFFF"
    const navegacao = useNavigate()

    function logar(e) {
        e.preventDefault()
        setTextoBotao("Carregando") 
        setDesabilitado("disabled") 

        const body = { email, password }
        const url = "http://localhost:4000/auth/signin"
        const promise = axios.post(url, body)
       
        promise.then((res) => {
                
                //setUserName(res.data.name) 
                //setUserId(res.data.userId)
                //setAvata(res.data.avatar) 
                //setTipo(res.data.type) 
                console.log(res.data);
                Cookies.set('name', res.data.user.avatar, { expires: 2 });
                Cookies.set('id', res.data.user.id, { expires: 2 });
                ()=>(setUserData(res.data));
                console.log("Logado com sucesso"); 
                navegacao('/');
            })

            promise.catch(err => { 
                setTextoBotao("Entrar") 
                setDesabilitado("")
                alert("E-mail ou senha inválida") 
                console.log(err.response.data)
                console.log("erro no login")                
            })
    }

    
    return (
        <LoginContainer>
            <Banner src={banner} alt="Banner"/>
            <Form onSubmit={logar}>
            <TitleBody>A Festas</TitleBody>
                <Input 
                    id="email"
                    type="email"
                    placeholder="E-mail" 
                    value={email} 
                    disabled={desabilitado} 
                    corFundo={desabilitado ? inputDesbotado : inputAtivo } 
                    onChange={e => setEmail(e.target.value)} 
                    required
                />
                <Input 
                    id="senha"
                    type="password" 
                    placeholder="Senha" 
                    value={password} 
                    disabled={desabilitado} 
                    corFundo={desabilitado ? inputDesbotado : inputAtivo } 
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <Button disabled={desabilitado} type="submit">{textoBotao}</Button> 
                <LinkSignUp>
                    <Link to={`/`}>
                        <p>Primeira vez? Cadastre-se!</p>
                    </Link>                
                </LinkSignUp>
            </Form>
            
        </LoginContainer>
    )
}
const Banner = styled.img`
    height: 100vh;
    width: 100vw;
    object-fit: cover;
`
const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;    
    p{
        text-align: center;
        color: #FFFFFF;
    }
`
const TitleBody = styled.h1`
    font-family: sans-serif;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
`
const Form = styled.form`
    display: flex;   
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
`
const Input = styled.input`
    box-sizing: border-box;
    width: 326px;
    height: 58px;
    //background-color: ${props => props.corFundo};
    border: none;
    border-radius: 5px;
    margin: 5px 0;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    padding-left: 10px;
    ::placeholder{        
        color: #000000;    
    }
`
const Button = styled.button`
    width: 326px;
    height: 46px;
    background-color: #d6a233;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
    cursor: pointer;
`
const LinkSignUp = styled.div`
    margin-top: 20px;    
   p{    
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
   }
   a{
        text-decoration: none;
   }
`