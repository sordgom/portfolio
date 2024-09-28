import 'animate.css';
import { Suspense, lazy } from "react";
import { useAtom } from 'jotai';
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
            <Suspense fallback={<div>Loading...</div>}>
                {activeLink === "home" && <LazyBanner />}
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>

                {activeLink === "projects" && <LazyProjects />}
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>

                {activeLink === "work" && <LazyWork />}
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>

                {/* {activeLink === "resume" && <Resume/>} */}
                {activeLink === "profile" && <LazyProfile />}
            </Suspense>
            <Footer />
        </div>
    )
}
