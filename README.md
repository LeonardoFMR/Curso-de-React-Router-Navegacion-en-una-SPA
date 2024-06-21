# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

✱ Curso de React Router Navegación en una SPA
▶ 01 Router.
■ 03 Inicio del problema.
◉ Descarga de react-router.
◉ Se explica la idea de tener diferentes componentes para diferentes rutas y se muestra cómo se puede acceder a la ruta actual utilizando el objeto Window.location.

■ 04 React Router Dom.
◉ Se introduce la librería React Router Dom.
◉ import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
◉BrowserRouter as Router: Este es el componente principal que envuelve todo el sistema de rutas de la aplicación. Normalmente se le asigna el alias "Router" para facilitar su uso.
◉Routes: Este componente se utiliza para definir y agrupar las diferentes rutas de la aplicación.
◉Route: Este componente se utiliza para definir una ruta específica, indicando el path (ruta) y el elemento que se debe mostrar cuando se accede a esa ruta.

▶ 02 Creando componentes.
■ 02 Error 404.
◉ Creación de un elemento 404.

■ 03 SPA vs aplicación tradicional
◉ Ventajas de las "SPAs" son especialmente útiles en aplicaciones con dashboards.

■ 05 Creando Navbar
◉ Se explica cómo importar y utilizar este componente "Header" en el archivo "app.js" para que la barra de navegación se muestre en todas las páginas de la aplicación.

▶ 03 Conectando con API.
■ 02 Componente Link.
◉ Navegación en una Single Page Application (SPA) utilizando React Router DOM.
◉ a => Link href => to
◉ import { Link } from "react-router-dom"

■ 03 Conexión con API
◉ npm i -g json-server
◉ json-server --watch .\db.json --port 5000
◉ Se usa el paquete json-server para simular una REST API y obtener los datos del servidor.
◉ Se crea un archivo api.js en la carpeta API para realizar las peticiones HTTP utilizando la librería Axios.
◉ Se crea una instancia de Axios con la URL base del servidor y se exporta una función de búsqueda.
◉ Se crea un componente ListPosts que utilizará la función de búsqueda para mostrar los posts en la página.

■ 04 Mostrar los posts.
◉ El código del componente "Home" importa el componente "ListPosts" y lo utiliza dentro del componente, pasándole la URL "/posts" como prop.

▶ 02 Mostrando un post
■ 04 Mostrar los posts.
◉ Implementación de la funcionalidad para mostrar el detalle de un post individual en una aplicación React utilizando React Router.
◉ Creación del componente Post.
◉ Se obtiene el valor del parámetro "id" de la URL, el instructor utiliza el hook "useParams" de React Router.
◉ Dentro de "Post", se utiliza el hook "useEffect" para hacer una llamada a la API y obtener la información del post correspondiente al "id" recibido.

■ 03 Post inexistente.
◉ Utilizar el catch del método que busca el post para detectar cuando ocurre un error.
◉ Dentro del catch, usar el hook useNavigate para redirigir al usuario a la ruta /not-found.

■ 05 Creando categorías.
◉ Se crea un menú de categorías que permita a los usuarios filtrar los posts por categoría.
◉ Se utiliza el hook useEffect para hacer una petición a la API y obtener la lista de categorías.
◉ Se recorre la lista de categorías y se genera un enlace (Link) para cada una, que redirige a la página de la categoría correspondiente.
◉ El componente ListCategories se agrega al componente Home para que se muestre en la página principal.
