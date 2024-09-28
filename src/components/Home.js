import 'animate.css';
import { Suspense, lazy } from "react";
import { useAtom } from 'jotai';
import { Oval } from 'react-loader-spinner'

import { activeLinkAtom } from '../atoms/activeLink.atom';
import NavBar from './NavBar';
import Footer from './Footer';

const LazyProfile = lazy(() => import('./Profile'));
const LazyProjects = lazy(() => import('./Projects'));
const LazyWork = lazy(() => import('./Work'));
const LazyBanner = lazy(() => import('./Banner'));

export const Home = () => {
    const [activeLink] = useAtom(activeLinkAtom);

    return (
        <div className="main">
            <NavBar />
            <Suspense fallback={
                <Oval
                    visible={true}
                    height="80"
                    width="80"
                    color="#B8B8B8"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass="spinner"
                />
            }>
                {activeLink === "home" && <LazyBanner />}
                {activeLink === "projects" && <LazyProjects />}
                {activeLink === "work" && <LazyWork />}
                {/* {activeLink === "resume" && <Resume/>} */}
                {activeLink === "profile" && <LazyProfile />}
            </Suspense>
            <Footer />
        </div>
    )
}
