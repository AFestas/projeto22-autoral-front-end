import Header from "../../components/Header"
import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"

export default function History() {
    const [photo, setPhoto] = useState([{
        id: 2,
        photo: "teste"
    }])

    //const photo = "https://cdn0.casamentos.com.br/article-real-wedding-o/7022/3_2/960/jpg/13_52207.jpeg";


    useEffect(() => {
        const url = "http://localhost:4000/galery/all" 

        const promise = axios.get(url) 

        promise.then(res => {          
            setPhoto(res.data) 
            console.log(res.data)           
        }) 

        promise.catch((err) => {
            alert(err.response.data)
            console.log(err.message)
            console.log("erro na galeria")
        })        
    }, [])

    useEffect(() => {
        const url = "http://localhost:4000/galery/all" 

        const promise = axios.get(url) 

        promise.then(res => {          
            setPhoto(res.data) 
            console.log(res.data)           
        }) 

        promise.catch((err) => {
            alert(err.response.data)
            console.log(err.message)
            console.log("erro na galeria")
        })        
    }, [])

    return (
        <>
            <Header/>
            <ContainerBody>
            {photo.map((p) => (
               <PhotoClient key={p._id} src={p.photo} />
            ))}
                
            </ContainerBody>       
        </>
       
    )
}

const ContainerBody = styled.header`
    margin-top: 120px;
    text-align: center;
`
const PhotoClient = styled.img`
    width: 220px;
    height: 220px;
    border-radius: 4px;
    margin: 10px;
`