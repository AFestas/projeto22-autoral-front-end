import Header from "../../components/Header"
import styled from "styled-components"
import banner from "../../assets/images/banner.jpg"
import { useEffect, useState } from "react"
import axios from "axios"
import Cookies from 'js-cookie';

export default function Requests() {
    const [selectServiceId, setSelectServiceId] = useState();
    const [selectTheme, setSelectTheme] = useState();
    const [description, setDescription] = useState('');

    const userIdCookie = Cookies.get('id');
    const userId = parseInt(userIdCookie, 10);

    const [typeService, setTypeService] = useState([{
        id: 11,
        title: "teste2"
    }])

    const [theme, setTheme] = useState([{
        id: 11,
        title: "teste2",
        photo: "teste2"
    }])

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
      };

   useEffect(() => {
        const url = "http://localhost:4000/service/all" 

        const promise = axios.get(url) 

        promise.then(res => {   
            console.log(res)          

            setTypeService(res.data) 
            console.log(res.data)           
        }) 

        promise.catch((err) => {
            alert(err.response.data)
            console.log(err.message)
            console.log("erro na galeria")
        })        
    }, [])

    useEffect(() => {
        const url = "http://localhost:4000/theme/all" 
        const promise = axios.get(url) 

        promise.then(res => {   
            console.log(res)          

            setTheme(res.data) 
            console.log(res.data)           
        }) 

        promise.catch((err) => {
            alert(err.response.data)
            console.log(err.message)
            console.log("erro na galeria")
        })        
    }, [])

    function postRequst(){       
        const body = {
            themeId: selectTheme,
            serviceTypeId: selectServiceId,
            description, 
            userId,
        }   

        let texto = encodeURIComponent(
            `Olá, gostaria de fazer o pedido:
            - Prato: ${selectTheme}
            - Bebida: ${selectServiceId}
            - Sobremesa: ${description}
            Total: R$ ${userId}
            
            Nome: ${userId}
            Endereço: ${userId}`
        )
                 
        const url = "http://localhost:4000/request/"
        const promise = axios.post(url, body)
    
            promise.then((res) => { 
                open("https://wa.me/5521979272015?text=" + texto)
                //alert("clicou")
            })
    
            promise.catch(err => {        
                alert(err.response.data) 
                console.log(err)          
            })
    }

    return (
        <>
            <Header/>          
            <Banner src={banner} alt="Banner"/>
            <ContainerBody>
                <DescriptionService>
                    <h2>SOLUÇÕES PREPARADAS ESPECIALMENTE PARA REALIZAR SEU EVENTO</h2>
                    <h1>Escolha seu tipo de festa</h1>
                    <p>Transformando momentos em memórias inesquecíveis, A Festas, onde cada celebração ganha vida Transformando momentos em memórias inesquecíveis, A Festas, onde cada celebração ganha vida Transformando momentos em memórias inesquecíveis, A Festas, onde cada celebração ganha vida!</p>
                </DescriptionService>
                <ContainerOptions>
                    {typeService.map((ts)=>(
                        <CardOptionsService key={ts.id} isSelected={selectServiceId === ts.id}>
                                <img src={ts.photo} alt="Tipo de Serviço" />
                                <ContainerDescriptionService>
                                    <h1>{ts.title}</h1>   
                                    <p>{ts.description}</p>                                    
                                    <button onClick={()=>(setSelectServiceId(ts.id))}>SELECIONAR</button>                
                                </ContainerDescriptionService>                      
                        </CardOptionsService>
                    ))}
                </ContainerOptions>
                <LinhaVertical />
                <DescriptionService>
                    <h1>Escolha seu tema</h1>
                    <p>Transformando momentos em memórias inesquecíveis, A Festas, onde cada celebração ganha vida Transformando momentos em memórias inesquecíveis, A Festas, onde cada celebração ganha vida Transformando momentos em memórias inesquecíveis, A Festas, onde cada celebração ganha vida!</p>
                </DescriptionService>
                <ContainerOptions>
                    {theme.map((t)=>(
                        <CardOptionsTheme key={t._id }>
                            <img src={t.photo} /> 
                            <ContainerDescriptionTheme>
                                <h1>{t.title}</h1>
                                <button onClick={()=>(setSelectTheme(t.id))}>SELECIONAR</button>   
                            </ContainerDescriptionTheme>  
                        </CardOptionsTheme>
                    ))}
                </ContainerOptions>
                <LinhaVertical />
                <DescriptionService>
                    <h1>Descrisão da sua festa</h1>
                    <p>Transformando momentos em memórias inesquecíveis, A Festas, onde cada celebração ganha vida Transformando momentos em memórias inesquecíveis, A Festas, onde cada celebração ganha vida Transformando momentos em memórias inesquecíveis, A Festas, onde cada celebração ganha vida!</p>
                </DescriptionService>
                <ContainerOptionsDescriptionUser>
                    <textarea id="description" value={description} onChange={handleDescriptionChange}></textarea>  
                    <button onClick={()=>(postRequst())}>SOLICITE UM ORÇAMENTO</button>
                </ContainerOptionsDescriptionUser>
            </ContainerBody>    
            <FooterContainer>
                <FooterText>&copy; 2023 A Festas Ornamentaçoes. Todos os direitos reservados.</FooterText>
            </FooterContainer>   
        </>
       
    )
}
const DescriptionService = styled.div`
  text-align: center;
  width: 50vw;
  margin: 30px 0 60px;
  h2{
    font-family: sans-serif;
    font-size: 12px;        
    line-height: 24px;
    margin-left: 20px; 
    color: #7c7c7c;
  }
  h1{
    font-family: sans-serif;
    font-size: 35px;        
    line-height: 24px;
    margin-left: 20px; 
    color: #222222;
  }
  p{
    font-family: sans-serif;
    font-size: 14px;        
    line-height: 20px;
    margin-left: 20px; 
    color: #535353;
  }
`
const CardOptionsTheme = styled.div`
    position: relative;
    width: 220px;
    height: 220px;
    margin: 40px 10px;
    box-sizing: border-box;
    border: 1px solid #9b9b9b;
    border-radius: 4px;    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ContainerDescriptionTheme = styled.div`
  position: absolute;
  width: 100%;
  height: 80%;
  box-sizing: border-box;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  //text-align: center;
  color: #383838;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  padding: 80px 10px 0;
  h1{
    font-family: sans-serif;
    font-size: 20px;        
    //line-height: 20px; 
    color: #ffffff;
    //margin: 5px;
    }
    p{
    font-family: sans-serif;
    font-size: 12px;        
    //line-height: 20px;
    color: #ffffff;
    //margin: 5px;
    }
  button{
    background-color: #f3f3f3;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
   // margin: 0 30px;

    font-family: sans-serif;
    font-size: 14px;        
    //line-height: 20px;
    //margin-left: 20px; 
    color: #303030;
  }
`
const CardOptionsService = styled.div`
    position: relative;
    width: 380px;
    height: 380px;
    margin: 40px 10px;
    box-sizing: border-box;
    border: 1px solid #9b9b9b;
    border-radius: 4px;    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ContainerDescriptionService = styled.div`
  position: absolute;
  width: 100%;
  height: 80%;
  box-sizing: border-box;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  //text-align: center;
  color: #383838;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  padding: 150px 10px 0;
  h1{
    font-family: sans-serif;
    font-size: 20px;        
    //line-height: 20px; 
    color: #ffffff;
    //margin: 5px;
    }
    p{
    font-family: sans-serif;
    font-size: 12px;        
    //line-height: 20px;
    color: #ffffff;
    //margin: 5px;
    }
  button{
    background-color: #f3f3f3;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
   // margin: 0 30px;

    font-family: sans-serif;
    font-size: 14px;        
    //line-height: 20px;
    //margin-left: 20px; 
    color: #303030;
  }
`
const ContainerOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
`
const ContainerOptionsDescriptionUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-direction: column;
    textarea{
        box-sizing: border-box;
        width: 1000px;
        height: 300px;
        border: 1px solid black;
        border-radius: 5px;
        margin: 5px 0;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 23px;
        color: #000000;
        padding-left: 10px;
    }
    button{
        background-color: #d6a233;
        color: #dadada;
        border: none;
        border-radius: 4px;
        padding: 10px 20px;
        cursor: pointer;
        margin: 30px;

        font-family: sans-serif;
        font-size: 16px;        
        line-height: 20px;
        margin-left: 20px; 
        color: #ffffff;
  }
`
const ContainerBody = styled.div`   
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
   
    
`
const Banner = styled.img`
    height: 50vh;
    width: 100%;
    object-fit: cover;
`
const LinhaVertical = styled.div`
  border-top: 30px solid #d6a233;
  width: 100%;
  margin: 50px 0;
`
const FooterContainer = styled.footer`
  background-color: #333333;
  color: #ffffff;
  padding: 20px;
`
const FooterText = styled.p`
  text-align: center;
  font-size: 14px;
`
