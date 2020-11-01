import { useEffect, useState } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        let timer1 = setTimeout(() => setShowLoading(false), 1000);

        return () => {
            clearTimeout(timer1);
        };
    }, []);

    return (
        <div className="main__container">
            {showLoading ? (
                <div className="loading__container">
                    <div className="loading__data">
                        <div className="harsh__container">
                            Made by <b>Harsh Patel</b> at <b>Arc Coder</b>
                        </div>

                        <hr />

                        <div className="radhika__container">
                            Logo designed by <b>Radhika Somani</b>
                        </div>
                    </div>
                </div>
            ) : null}

            <div
                className={
                    showLoading
                        ? `body_main__container invisible`
                        : `body_main__container visible`
                }
            >
                <Body />
                <Footer />
            </div>
        </div>
    );
}

export default App;
