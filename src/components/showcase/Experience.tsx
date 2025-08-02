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
                        <h1>PO Dilszui</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://dilsuzi.tj/'}
                        >
                            <h4>dilsuzi.tj</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>IT spetialist</h3>
                        <b>
                            <p>Fall 2023 - Current time...</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Targeted towards families in need of medical support for children,
                    dilsuzi.tj is the official website of a non-profit public organization
                    that helps coordinate treatment and fundraising efforts. The platform serves
                    as a central hub for case documentation, donation updates, and social
                    awareness campaigns. Built and maintained with modern tools and a focus on accessibility and clarity.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developed and maintained the main website of the organization using modern web technologies, ensuring stability, clarity, and a user-friendly interface for thousands of monthly visitors.
                        </p>
                    </li>
                    <li>
                        <p>
                            Designed custom graphics and posters for social media campaigns using Figma, Canva, and Adobe tools, improving visual communication and engagement with the audience.
                        </p>
                    </li>
                    <li>
                        <p>
                            Edited and produced over 30 video projects for social media and fundraising campaigns using Premiere Pro, After Effects, and Final Cut, helping the organization reach a wider audience and increase donations.
                        </p>
                    </li>
                    <li>
                        <p>
                            Provided full technical support: from website updates to PC assembly and system configuration for in-office tasks, ensuring smooth day-to-day operation of the organization.
                        </p>
                    </li>
                    <li>
                        <p>
                            Created a consistent digital presence for the organization, which played a key role in building public trust and helped families access support more efficiently.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>PO Dilsuzi</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://dilsuzi.tj/'}
                        >
                            <h4>dilsuzi.tj</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Volunteer</h3>
                        <b>
                            <p>Spring 2020 - Fall 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Volunteered as a full-cycle creative and technical specialist at dilsuzi.tj — a non-profit platform supporting medical fundraising for children. Contributed to the organization’s media and digital infrastructure through web management, visual content, and video production.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Took part in over 30+ video projects, handling everything from shooting to post-production using Premiere Pro, After Effects, and Final Cut, significantly enhancing the organization’s social presence.
                        </p>
                    </li>
                    <li>
                        <p>
                            Designed impactful visual content for fundraising campaigns using Figma, Canva, Adobe Photoshop, and Illustrator, resulting in improved engagement across platforms.
                        </p>
                    </li>
                    <li>
                        <p>
                            Maintained and updated the organization's website, ensuring accessibility, clean structure, and reliability for visitors seeking support or donation info.
                        </p>
                    </li>
                    <li>
                        <p>
                            Assembled and configured PC workstations for the team, helping improve productivity and performance within the office.
                        </p>
                    </li>
                    <li>
                        <p>
                            Provided continuous IT support and creative input to help scale the impact of the organization and improve its communication strategies.
                        </p>
                    </li>
                </ul>            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
