import React from 'react';
import ResumeDownload from '../ResumeDownload';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Tools & Platforms</h3>
            <br />
            <p>
                Software projects and platforms I've built or contributed to —
                focused on developer tools, automation, and full-stack
                development.
            </p>
            <br />
            <ResumeDownload />
            <br />

            <div className="text-block">
                <h2>bykush.dev — Technical Breakdown</h2>
                <br />
                <p>
                    A deep dive into how this portfolio was built. The site is
                    split into two parts: the outer 3D scene built with
                    Three.js, and this inner React OS site embedded via an
                    iframe using Three.js's CSS3DRenderer.
                </p>
                <br />
                <p>
                    The 3D scene was modelled in Blender, baked, and exported as
                    a GLTF file. The inner site is a standard React + TypeScript
                    app deployed on Vercel at{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://live.bykush.dev"
                    >
                        live.bykush.dev
                    </a>
                    , while the 3D outer site lives at{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://bykush.dev"
                    >
                        bykush.dev
                    </a>
                    .
                </p>
                <br />
                <h3>Stack:</h3>
                <ul>
                    <li>
                        <p>
                            <b>3D Site:</b> Three.js, TypeScript, Webpack,
                            Blender (GLTF)
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>OS Site:</b> React, TypeScript, React Router,
                            Framer Motion
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Hosting:</b> Vercel (both sites), Cloudflare DNS
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Contact Form:</b> Formspree
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

            <br />
            <ResumeDownload />
        </div>
    );
};

export default SoftwareProjects;
