import React from 'react';
import tjksmart from '../../../assets/pictures/projects/website/tojikonsmart.mp4';
import dilsuzi from '../../../assets/pictures/projects/website/dilsuzi.mp4';
import nftm from '../../../assets/pictures/projects/website/nftmarketplace.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface WebsiteProjectsProps {}

const WebsiteProjects: React.FC<WebsiteProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Website</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite website projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>PO Dilsuzi</h2>
                <br />
                <p>
                    The official website of the public organization Dilsuzi, which helps children from Tajikistan access life-saving medical treatment abroad.

                    I contributed to the development and ongoing maintenance of the website, focusing on stability, user-friendly navigation, and responsive design.              </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={dilsuzi} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> dilsuzi.tj.
                        </sub>
                    </p>
                </div>
                <p>
                    In addition to technical work, I created visual assets and video content for social media and fundraising campaigns. The project involved producing dozens of promotional videos and graphic materials that strengthened the organization’s public image and outreach.

                    This project brought together my skills in web development, graphic design, and video editing — and allowed me to make a meaningful impact through technology and creativity.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://dilsuzi.tj"
                        >
                            <p>
                                <b> dilsuzi.tj </b>
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    I'm skipping over a lot of details in exchange for brevity,
                    but I do plan on doing a more in depth breakdown for those
                    interested sometime in the future. To get updates with that
                    project feel free to follow me on telegram{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://t.me/max_halimov"
                    >
                        @max_halimov
                    </a>
                </p>
            </div>
            <div className="text-block">
                <h2>TOJIKONSMART</h2>
                <br />
                <p>
                    Educational platform designed to help aspiring sellers from Tajikistan successfully launch
                    and scale their businesses on major online marketplaces.

                    I developed and designed the website using Tilda, with a focus on clarity,
                    accessibility, and mobile responsiveness. One of the key features I created is a custom-built
                    profit calculator that helps users estimate their net income after platform fees, logistics,
                    and other expenses — a tool tailored specifically for first-time sellers.

                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={tjksmart} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> tojikonsmart.tilda.ws.
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    This project highlights my ability to combine no-code/low-code platforms with custom logic
                    to deliver functional tools and intuitive user experiences for a targeted audience.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://tojikonsmart.tilda.ws"
                        >
                            <p>
                                <b>tojikonsmart.tilda.ws</b>
                            </p>
                        </a>
                    </li>

                </ul>
            </div>
            <div className="text-block">
                <h2>NFT - Marketplace</h2>
                <br />
                <p>
                    NFT Marketplace is a fully responsive web interface prototype for buying, selling,
                    and showcasing NFTs, built as part of a front-end development practice project.

                    I developed the project using HTML, CSS, and JavaScript, focusing on a clean UI,
                    adaptive layout, and smooth user experience. The platform includes pages for home,
                    explore, wallet connection, and NFT item details.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={nftm} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> NFT Marketplace
                        </sub>
                    </p>
                </div>
                <p>
                    Though not connected to a blockchain backend,
                    it simulates real-world NFT marketplace behavior and showcases my skills in layout design,
                    component structuring, and responsive development.

                    This project allowed me to explore the UI/UX patterns of modern Web3 platforms and sharpen
                    my front-end abilities in a visually rich and trend-driven domain.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/max_halimov/nft-markeplace"
                        >
                            <p>
                                <b>[GitHub]</b> - NFT Marketplace
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '80%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default WebsiteProjects;
