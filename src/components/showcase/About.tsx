import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Max Halimov</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a IT specialist, currently working at Dilsuzi! An enthusiastic designer,
                    philanthropist, and vibecoder.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:h_mahmadali@mail.ru">
                        h_mahmadali@mail.ru
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    My passion for IT began in childhood, around the age of 12. I started from scratch, gradually progressing and improving step by step.
                    My journey began with exploring the inner workings of computers, assembling hardware, diving into operating systems, and learning the basics of printing and website building.

                    Over the years, I’ve continued to grow and develop my skills — and I’m determined to keep rising in this ever-evolving industry.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div>

                <p>
                    I started programming more seriously in high school,
                    initially learning how to scrape and interact with websites.
                    We worked on many projects together, including chat bots,
                    multiple game projects, apps, and more. One of these
                    projects is viewable on my{' '}
                    <Link to="/projects/websites">Website Projects</Link> page.
                </p>
                <br />
                <p>
                    Since 2020, I’ve been volunteering as an IT specialist at the public organization “Dilsuzi.” My responsibilities include managing the official website (dilsuzi.tj), designing posters for social media, and working with typography and layouts.

                    In addition to my IT work, I’ve also been volunteering as a video editor and operator for “Dilsuzi” since June 2020. I’ve participated in over 30 video projects, handling video shooting, editing, and post-production using professional software tools.

                    As for my education, I graduated from Secondary School #8 in Dushanbe in 2023 and was honored with the Presidential Scholarship for the academic years 2021–2022.

                    I’ve also completed several specialized programs to expand my skills:
                    •	Ilmhona Skills Accelerator, Front-end Developer (Level 1 and PRO), graduated in 2024 — where I learned modern and promising Front-end libraries and tools, as well as gained confident Git skills.
                    •	IT-RUN Academy, React Developer Program, graduated in 2024.
                    •	I am currently studying Internet Marketing through the Skillbox educational platform.

                    I’m passionate about blending creativity with technology and continuously strive to become better at what I do.
                </p>
                <br />
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
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond  IT technology, I have a lot of hobbies that I
                            enjoy doing in my free time. Some hobbies I
                            enjoy are working out, take a walk, videography, photography, and (unsurprisingly)
                            playing video games.
                        </p>
                        <br />
                        <p>
                            I’m proficient in blind typing, which allows me to work efficiently
                            and focus on what matters most — creating. I work confidently with development tools
                            such as WebStorm, VS Code, and Warp. On the creative side, I have solid experience
                            in graphic design using Figma, Canva, Adobe Photoshop, and Illustrator. I also specialize
                            in video production and editing, working with tools like Premiere Pro, After Effects, and Final Cut.
                            Additionally, I have hands-on experience in building and configuring custom PCs from the ground up.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, October 2024
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find the easter egg make sure to let me know
                    on telegram{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://t.me/max_halimov"
                    >
                        @max_halimov
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:h_mahmadali@mail.ru">
                        h_mahmadali@mail.ru
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
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
