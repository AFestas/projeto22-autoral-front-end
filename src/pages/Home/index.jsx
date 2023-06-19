import Header from "../../components/Header"
import styled from "styled-components"
import banner from "../../assets/images/banner.jpg"

export default function Home() {
    return (
        <>
            <Header/>
            <div>
                <Banner src={banner} alt="Banner"/>
                <Container>
                    <p>BEM VINDO AO APARECIDA FESTAS</p>
                    <h1>Transformando momentos em memórias inesquecíveis, A Festas, onde cada celebração ganha vida!</h1>   
                    <button>SOLICITE UM ORÇAMENTO</button>                
                </Container>
            </div>            
            <ContainerBody> 
                <History>
                    <div>
                        <h2>SOMOS O A FESTAS</h2>
                        <h3>Transformando momentos em memórias inesquecíveis, A Festas, onde cada celebração ganha vida!</h3>
                    </div>                        
                    <div>
                        <p><span>A </span>Festas, Transformando momentos em memórias inesquecíveis, onde cada celebração ganha vida Transformando momentos em memórias inesquecíveis, A Festas, onde cada celebração ganha vida Transformando momentos em memórias inesquecíveis, A Festas, onde cada celebração ganha vida Transformando momentos em memórias inesquecíveis, A Festas, onde cada celebração ganha vida Transformando momentos em memórias inesquecíveis, A Festas, onde cada celebração ganha vida Transformando momentos em memórias inesquecíveis, A Festas, onde cada celebração ganha vida Transformando momentos em memórias inesquecíveis, A Festas, onde cada celebração ganha vida!</p>
                    </div>
                </History> 

                <Targe>
                    <h1>Consulte nossos preços e serviços e faça um orçamento!</h1>
                    <button>SOLICITE UM ORÇAMENTO</button>

                </Targe>

                <Service>
                    <TitleService>
                        <h2>SOLUÇÕES PREPARADAS ESPECIALMENTE PARA REALIZAR SEU EVENTO</h2>
                        <h1>Soloções para seu tipo de evento</h1>
                        <p>Transformando momentos em memórias inesquecíveis, A Festas, onde cada celebração ganha vida Transformando momentos em memórias inesquecíveis, A Festas, onde cada celebração ganha vida Transformando momentos em memórias inesquecíveis, A Festas, onde cada celebração ganha vida!</p>
                    </TitleService>
                    
                    <ServiceTypes>
                        <div>
                            <img src="https://cdn0.casamentos.com.br/article-real-wedding-o/7022/3_2/960/jpg/13_52207.jpeg" />
                            <h1>Casamentos</h1>
                            <p>Transformando momentos em memórias inesquecíveis, A Festas, onde cada celebração ganha vida Transformando momentos em memórias inesquecíveis, A Festas, onde cada celebração ganha vida Transformando momentos em memórias inesquecíveis</p>
                            <button>SOLICITE UM ORÇAMENTO</button> 
                        </div>
                        <div>
                            <img src="https://ltoquedesaborbuffet.com.br/wp-content/uploads/2015/02/festa-de-15-anos-03.jpg" />
                            <h1>Fromaturas</h1>
                            <p>Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição</p>
                            <button>SOLICITE UM ORÇAMENTO</button> 
                        </div>
                        <div>
                            <img src="https://marciatravessoni.com.br/wp-content/uploads/2022/07/15-Anos-Natalia-Queiros-21.jpg" />
                            <h1>15 anos</h1>
                            <p>Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição</p>
                            <button>SOLICITE UM ORÇAMENTO</button> 
                        </div>
                    </ServiceTypes>
                </Service> 
            
                <Testimonial>
                    <CircleImage src="https://pop.proddigital.com.br/wp-content/uploads/sites/8/2020/09/perfil-de-leonardo-dicaprio.jpg"/>
                    <div>                   
                        <p>&ldquo;Estou maravilhada com o trabalho da empresa Afestas! A Camilla e sua equipe fizeram a ornamentação da festa do meu filho e superaram todas as minhas expectativas. Cada detalhe foi cuidadosamente planejado e executado com perfeição. A decoração estava deslumbrante e trouxe uma atmosfera mágica para o evento. Recomendo a Afestas para todos que desejam tornar suas festas inesquecíveis. Obrigada, Camilla, pelo seu profissionalismo e dedicação!&rdquo;</p>
                        <h3>John Doe</h3>
                    </div>                        
                </Testimonial>  

                <Service>
                   
                </Service>

                 <Testimonial>
                    <div>                   
                        <p>&ldquo;Estou maravilhada com o trabalho da empresa Afestas! A Camilla e sua equipe fizeram a ornamentação da festa do meu filho e superaram todas as minhas expectativas. Cada detalhe foi cuidadosamente planejado e executado com perfeição. A decoração estava deslumbrante e trouxe uma atmosfera mágica para o evento. Recomendo a Afestas para todos que desejam tornar suas festas inesquecíveis. Obrigada, Camilla, pelo seu profissionalismo e dedicação!&rdquo;</p>
                        <h3>Leonardo Dicaprio</h3>
                    </div> 
                    <CircleImage src="https://pop.proddigital.com.br/wp-content/uploads/sites/8/2020/09/perfil-de-leonardo-dicaprio.jpg"/>                       
                </Testimonial>            

            </ContainerBody>       
        </>
       
    )
}
const Targe = styled.div`
  width: 100vw;
  height: 120px;
  margin: 50px 0 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d6a233;
  h1{
    font-family: sans-serif;
    font-size: 14px;        
    line-height: 20px;
    margin-left: 20px; 
    color: #ebebeb;
    margin: 0 30px;
  }
  button{
    background-color: #d6a233;
    color: #dadada;
    border: 1px solid #dadada;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    margin: 0 30px;

    font-family: sans-serif;
    font-size: 14px;        
    line-height: 20px;
    margin-left: 20px; 
    color: #ffffff;
  }
`
const History = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  div{
    //background-color: red;
    margin: 10px;
    width: 40%;
    height: 60%;
  }
  h2{
    font-family: sans-serif;
    font-size: 14px;        
    line-height: 24px;
    margin-left: 20px; 
    color: #7c7c7c;
  }
  h3{
    font-family: sans-serif;
    font-size: 30px;        
    line-height: 46px;
    margin-left: 20px; 
    color: #000000;
  }
  p{
    font-family: sans-serif;
    font-size: 14px;        
    line-height: 20px;
    margin-left: 20px; 
    color: #535353;
    &::first-letter {
        font-size: 48px;
        line-height: 48px;
        float: left;
        margin-right: 6px;
        color: #d6a233;
  }
  }
  strong{
   
    font-size: 35px;   
  }
`
const Service = styled.div`
  width: 100vw;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TitleService = styled.div`
  text-align: center;
  width: 50vw;
  margin-bottom: 80px;
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
const ServiceTypes = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  div{
    width: 100vw;
    height: 470px;
    margin: 40px; 
    text-align: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  img{
    width: 100%;
    height: 220px;
    border-radius: 4px;
  }
  h1{
    font-family: sans-serif;
    font-size: 15px;        
    line-height: 20px; 
    color: #202020;
  }
  p{
    font-family: sans-serif;
    font-size: 14px;        
    line-height: 20px;
    color: #535353;
  }
  button{
    background-color: #d6a233;
    color: #dadada;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    margin: 0 30px;

    font-family: sans-serif;
    font-size: 14px;        
    line-height: 20px;
    color: #181818;
  }
`
const CircleImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
`
const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  button{
    background-color: #d6a233;
    color: #dadada;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    margin: 0 30px;

    font-family: sans-serif;
    font-size: 14px;        
    line-height: 20px;
    margin-left: 20px; 
    color: #ffffff;
  }
`
const Banner = styled.img`
    height: 100vh;
    width: 100%;
    object-fit: cover;
`
const ContainerBody = styled.main`
    
    
`
const Testimonial = styled.div`
  height: 500px;
  width: 100vw;
  box-sizing: border-box;
  background-color: #dae8fc;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  div{
    height: 50%;
    width: 50%;
    text-align: center;
  }
  img{
    background-color: black;
  }
  p{
    font-family: sans-serif;
    font-size: 20px;        
    line-height: 24px;
    margin-left: 20px; 
    font-style: italic;
    color: #2c2c2c;
  }
  h3{
    font-size: 15px;  
  }
`;
