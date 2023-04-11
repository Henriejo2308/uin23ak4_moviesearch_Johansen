import {Outlet} from "react-router-dom"

function LandingPage(){ //https://lms.webtricks.blog/kurs/uin/react-navigasjon-og-layout/layout
    return (
        <div id="card">
            <header>
                    <h1> Movie Search</h1>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default LandingPage;