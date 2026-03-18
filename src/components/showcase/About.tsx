import React from 'react';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Kush Hooda</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a passionate student, developer, and builder who loves
                    turning ideas into real digital projects. I enjoy creating
                    websites, apps, and game concepts that are not only
                    functional but also creative and impactful.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:hello@bykush.dev">
                        hello@bykush.dev
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    From portfolio sites to productivity tools and development
                    projects, I'm always exploring new ways to build, improve,
                    and innovate. I'm deeply interested in technology, design,
                    entrepreneurship, and problem-solving.
                </p>
                <br />
                <p>
                    I like learning by doing — whether that means developing a
                    new project, refining user experience, or experimenting with
                    fresh ideas that can grow into something meaningful. My goal
                    is to keep building skills, creating valuable products, and
                    turning ambition into reality.
                </p>
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Interests</h3>
                        <br />
                        <p>
                            Beyond software, I have a wide range of interests.
                            I'm passionate about{' '}
                            <Link to="/projects/software">Software Projects</Link>{' '}
                            and creating things that make an impact. You can
                            read more about my work under the projects tab.
                            Some other things I enjoy are working out, gaming,
                            and staying on top of the latest in tech and
                            entrepreneurship.
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope you enjoy exploring the
                    rest of my portfolio. If you find the easter egg make sure
                    to let me know on Instagram{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.instagram.com/whykushh/"
                    >
                        @whykushh
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:hello@bykush.dev">
                        hello@bykush.dev
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        marginLeft: 32,
        flex: 0.8,
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
