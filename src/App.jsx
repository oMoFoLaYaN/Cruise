
import { Navbar, Hero, About, Discover, Experience, Video, Place, Newsletter, Sponsors, Footer, Scroll} from "./components";

const App = () => (
    <body>
        <Navbar />
        <main className="overflow-x-hidden">
            <Hero />
            <About />
            <Discover />
            <Experience />
            <Video />
            <Place />
            <Newsletter />
            <Sponsors />
            <Footer />
            <Scroll/>
        </main>
    </body>
);

export default App;
