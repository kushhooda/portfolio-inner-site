import React from 'react';
import ResumeDownload from '../ResumeDownload';

export interface WebsiteProjectsProps {}

const WebsiteProjects: React.FC<WebsiteProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Websites</h1>
            <h3>Design & Development</h3>
            <br />
            <p>
                Websites I've designed and built — from personal portfolios to
                full agency concepts.
            </p>
            <br />
            <ResumeDownload />
            <br />

            <div className="text-block">
                <h2>bykush.dev</h2>
                <br />
                <p>
                    My personal portfolio — the site you're on right now. Built
                    as an interactive 3D experience using Three.js, with a React
                    OS-style inner site rendered inside the scene via an iframe.
                    The 3D scene was modelled and baked in Blender and exported
                    as a GLTF file.
                </p>
                <br />
                <p>
                    The site is split into two parts: the outer 3D world at{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://bykush.dev"
                    >
                        bykush.dev
                    </a>{' '}
                    and this inner OS site at{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://live.bykush.dev"
                    >
                        live.bykush.dev
                    </a>
                    .
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://bykush.dev"
                        >
                            <p>
                                <b>[Live Site]</b> – bykush.dev
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/kushhooda/portfolio-website"
                        >
                            <p>
                                <b>[GitHub]</b> – 3D Site Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/kushhooda/portfolio-inner-site"
                        >
                            <p>
                                <b>[GitHub]</b> – OS Site Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>Digital Agency Concept</h2>
                <br />
                <p>
                    A brand concept for a full-service digital agency delivering
                    high-quality apps, websites, and digital products. Covers
                    web design, branding, and development services with a strong
                    visual identity.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developed brand identity, service offerings, and
                            visual direction.
                        </p>
                    </li>
                    <li>
                        <p>
                            Created custom website and app concepts for multiple
                            client scenarios.
                        </p>
                    </li>
                    <li>
                        <p>
                            Applied skills in HTML, CSS, JavaScript, React,
                            Figma, and Canva across projects.
                        </p>
                    </li>
                </ul>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/kushhooda"
                        >
                            <p>
                                <b>[GitHub]</b> – github.com/kushhooda
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <br />
            <ResumeDownload />
        </div>
    );
};

export default WebsiteProjects;
