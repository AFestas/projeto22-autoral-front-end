import axios from "axios";

const postRequest = async (selectTheme, selectService, description, userId) => {
    const body = {
        themeId: selectTheme.id,
        serviceTypeId: selectService.id,
        description,
        userId,
      };

      let texto = encodeURIComponent(
        `Olá, gostaria de fazer o pedido:
        - Prato: ${selectTheme}
        - Bebida: ${selectService}
        - Sobremesa: ${description}
        Total: R$ ${userId}
        
        Nome: ${userId}
        Endereço: ${userId}`
      );

      const url = 'http://localhost:4000/request/'
  
  try {
        const res = await axios.post(url, body);
        open('https://wa.me/5521979272015?text=' + texto);
        return res.data;
    } catch (err) {
        throw new Error(err.response);
    }
};

export default postRequest;
