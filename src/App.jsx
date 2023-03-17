
import { Navbar, Hero, About, Discover, Experience, Video, Place, Newsletter, Sponsors, Footer} from "./components";

const App = () => (
    <body>
        <Navbar />
        <main className="overflow-x-hidden">
            <Hero />
            <About />
            {/* <Discover />
            <Experience />
            <Video />
            <Place />
            <Newsletter />
            <Sponsors />
            <Footer /> */}
        </main>
    </body>
);

export default App;
