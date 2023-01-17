/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const APIbase = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app');

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN" ,{
        style:"currency",
        currency:"USD",
    }).format(price)

    return newPrice;
}

//web api

//conectarnos al servidor
window
.fetch(`${APIbase}/api/avo`)
//procesar la respuesta y convertirla en JSON
.then((respuesta) => respuesta.json())
//JSON -> Data -> Renderizar info browser
.then (responseJson => {
    const todosLosItems = []
    responseJson.data.forEach((item) => {
        //crear imagen
        const imagen = document.createElement('img');
        imagen.src = `${APIbase}${item.image}`;
        
        //crear titulo
        const title = document.createElement('h2');
        title.textContent = item.name;
        title.className = "text-3xl"

        //crear precio
        const price = document.createElement('div');
        price.textContent = formatPrice(item.price);

        const container = document.createElement('div');
        container.append(imagen, title, price);

        todosLosItems.push(container)
    });

    appNode.append(...todosLosItems);
});