import React from 'react';
import ResumeDownload from '../ResumeDownload';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Projects</h1>
            <h3>Websites, Apps & Software</h3>
            <br />
            <p>
                Here's a collection of projects I've designed and built across
                websites, mobile apps, and digital platforms.
            </p>
            <br />
            <ResumeDownload />
            <br />

            {/* ── WEBSITES ─────────────────────────────────────── */}
            <h2 style={styles.sectionHeader}>Websites</h2>
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
                    The site is split into two parts: the outer 3D world hosted
                    at{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://bykush.dev"
                    >
                        bykush.dev
                    </a>{' '}
                    and this inner OS site hosted at{' '}
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
                    high-quality apps, websites, and digital products. The
                    project covers web design, branding, and app development
                    services with a strong visual identity.
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

            {/* ── APPS ─────────────────────────────────────────── */}
            <h2 style={styles.sectionHeader}>Apps</h2>
            <br />

            <div className="text-block">
                <h2>SuperWallet</h2>
                <br />
                <p>
                    A personal finance and wallet app concept focused on modern
                    UI and smart money management. Designed with a clean,
                    user-friendly interface targeting everyday users who want
                    better control over their finances.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Designed full app UI/UX in Figma with a modern,
                            minimal aesthetic.
                        </p>
                    </li>
                    <li>
                        <p>
                            Conceptualized core features including expense
                            tracking, wallet management, and budgeting tools.
                        </p>
                    </li>
                    <li>
                        <p>
                            Prototyped interactive app screens focused on
                            usability and visual quality.
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

            <div className="text-block">
                <h2>StudyFlow</h2>
                <br />
                <p>
                    A digital productivity platform built for students to manage
                    tasks, schedules, and study sessions all in one place.
                    Designed with a distraction-free interface and cross-platform
                    support in mind.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Planned and designed core features: task management,
                            study timers, and schedule planning.
                        </p>
                    </li>
                    <li>
                        <p>
                            Built UI prototypes in Figma focused on clean,
                            distraction-free design.
                        </p>
                    </li>
                    <li>
                        <p>
                            Exploring development with React Native and Firebase
                            for cross-platform support.
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

            {/* ── SOFTWARE / PLATFORMS ─────────────────────────── */}
            <h2 style={styles.sectionHeader}>Software & Platforms</h2>
            <br />

            <div className="text-block">
                <h2>Sports Management Concept</h2>
                <br />
                <p>
                    A football-inspired platform concept for managing teams,
                    rosters, and match schedules on a modern digital platform.
                    Built with a sports-first visual identity and real-time data
                    management in mind.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Designed core platform features including player
                            profiles and match scheduling.
                        </p>
                    </li>
                    <li>
                        <p>
                            Created UI mockups with a sports-first visual
                            identity.
                        </p>
                    </li>
                    <li>
                        <p>
                            Explored React Native and Firebase for real-time
                            data management.
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

const styles: StyleSheetCSS = {
    sectionHeader: {
        borderBottom: '2px solid black',
        paddingBottom: 8,
        marginBottom: 8,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
