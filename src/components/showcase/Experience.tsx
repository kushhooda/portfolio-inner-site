import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>SuperWallet</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Finance App Concept</h3>
                        <b><p>2024 - Present</p></b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    A personal finance and wallet app concept focused on modern
                    UI and smart money management. Designed with a clean,
                    user-friendly interface targeting everyday users who want
                    better control over their finances.
                </p>
                <br />
                <ul>
                    <li><p>Designed full app UI/UX in Figma with a modern, minimal aesthetic.</p></li>
                    <li><p>Conceptualized core features including expense tracking, wallet management, and budgeting tools.</p></li>
                    <li><p>Prototyped interactive app screens focused on usability and visual quality.</p></li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>StudyFlow</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Student Productivity Platform</h3>
                        <b><p>2024 - Present</p></b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    A digital productivity platform built for students to manage
                    tasks, schedules, and study sessions in one place.
                </p>
                <br />
                <ul>
                    <li><p>Planned and designed core features: task management, study timers, and schedule planning.</p></li>
                    <li><p>Built UI prototypes in Figma focused on clean, distraction-free design.</p></li>
                    <li><p>Exploring development with React Native and Firebase for cross-platform support.</p></li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Digital Agency Concept</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Apps, Websites & Digital Products</h3>
                        <b><p>2024 - Present</p></b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    A brand concept focused on delivering high-quality apps,
                    websites, and digital products. Covers web design, branding,
                    and app development services.
                </p>
                <br />
                <ul>
                    <li><p>Developed brand identity, service offerings, and visual direction.</p></li>
                    <li><p>Created custom website and app concepts for multiple client scenarios.</p></li>
                    <li><p>Applied skills in HTML, CSS, JavaScript, React, Figma, and Canva across projects.</p></li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Sports Management Concept</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Football-Inspired Digital Platform</h3>
                        <b><p>2024</p></b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    A football-inspired concept for managing teams, rosters, and
                    match schedules on a modern digital platform.
                </p>
                <br />
                <ul>
                    <li><p>Designed core platform features including player profiles and match scheduling.</p></li>
                    <li><p>Created UI mockups with a sports-first visual identity.</p></li>
                    <li><p>Explored React Native and Firebase for real-time data management.</p></li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    indent: {
        marginLeft: 24,
    },
};

export default Experience;
