import image from "../assets/img/doguito404.svg";
import '../assets/css/404.css';

const PendingPost = () => {
    return (
        <main className="container flex flex--center flex--column">
            <img className="dog-image" src={image} alt="Doguito" />
            <p className="notfound-text">Este post está en construcción</p>
        </main>
    );
}

export default PendingPost;
