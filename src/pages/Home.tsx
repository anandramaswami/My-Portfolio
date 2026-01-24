import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import About from '../components/section/About'
import Experience from '../components/section/Experience'
import Hero from '../components/section/Hero'
import Project from '../components/section/Project'
import Service from '../components/section/Service'
import Contact from '../components/section/Contact'


function Home() {
    const heroRef = useRef<HTMLElement | null>(null);
    const aboutRef = useRef<HTMLElement | null>(null);
    const expRef = useRef<HTMLElement | null>(null);
    const serviceRef = useRef<HTMLElement | null>(null);
    const projectRef = useRef<HTMLElement | null>(null);
    const contactRef = useRef<HTMLElement | null>(null);

    const location = useLocation();

    useEffect(() => {
        const sectionMap = {
            "/": heroRef,
            "/about": aboutRef,
            "/experience": expRef,
            "/service": serviceRef,
            "/project": projectRef,
            "/contact": contactRef,
        } as const;

        const section = sectionMap[location.pathname as keyof typeof sectionMap];
        
        section?.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, [location]);

    return (
        <div className="bg-linear-to-br from-black via-zinc-900 to-black animated-side-glow">
            <div className="glow-top"></div>
            <div className="glow-bottom"></div>

            <section ref={heroRef}><Hero /></section>
            <section ref={aboutRef}><About /></section>
            <section ref={expRef}><Experience /></section>
            <section ref={serviceRef}><Service /></section>
            <section ref={projectRef}><Project /></section>
            <section ref={contactRef}><Contact /></section>
        </div>
    );
}

export default Home;
