
import { Navbar, Hero, About, Discover, Experience, Video, Place, Newsletter, Sponsors, Footer} from "./components";

const App = () => (
    <body>
        <Navbar />
        <main className="main">
            <Hero />
            <About />
            <Discover />
            <Experience />
            <Video />
            <Place />
            <Newsletter />
            <Sponsors />
            <Footer />
        </main>
    </body>
);

export default App;
