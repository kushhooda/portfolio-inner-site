import React from 'react';
import ResumeDownload from '../ResumeDownload';

export interface AppProjectsProps {}

const AppProjects: React.FC<AppProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Apps</h1>
            <h3>Mobile & Web Apps</h3>
            <br />
            <p>
                Apps I've designed and prototyped — focused on clean UX and
                solving real everyday problems.
            </p>
            <br />
            <ResumeDownload />
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

export default AppProjects;
