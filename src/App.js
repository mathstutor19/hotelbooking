import "./App.css";
import Container from "./components/Container";
import Hotel from "./components/Hotels";
import Service from "./components/Services";

function App() {
    return (
        <>
            <Container>
                <Service></Service>
                <Hotel></Hotel>
            </Container>
        </>
    );
}

export default App;
