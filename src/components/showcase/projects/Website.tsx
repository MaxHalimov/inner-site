import React from 'react';
import tjksmart from '../../../assets/pictures/projects/website/tojikonsmart.mp4';
import dilsuzi from '../../../assets/pictures/projects/website/dilsuzi.mp4';
import nftm from '../../../assets/pictures/projects/website/nftmarketplace.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';
import { useI18n } from '../../../i18n/I18nProvider';

export interface WebsiteProjectsProps {}

const WebsiteProjects: React.FC<WebsiteProjectsProps> = (props) => {
    const { t } = useI18n();
    return (
        <div className="site-page-content">
            <h1>{t('web.header1')}</h1>
            <h3>{t('web.header2')}</h3>
            <br />
            <p>{t('web.p1')}</p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>{t('web.dilsuzi.h')}</h2>
                <br />
                <p>{t('web.dilsuzi.p1')}</p>
                <br />
                <p>{t('web.dilsuzi.p2')}</p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={dilsuzi} />
                    <p style={styles.caption}>
                        <sub>
                            <b>{t('web.dilsuzi.fig1')}</b>
                        </sub>
                    </p>
                </div>
                <p>{t('web.dilsuzi.p3')}</p>
                <br />
                <h3>{t('web.links')}</h3>
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
                    {t('web.more')}{' '}
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
                <h2>{t('web.tojikon.h')}</h2>
                <br />
                <p>{t('web.tojikon.p1')}</p>
                <br />
                <p>{t('web.tojikon.p2')}</p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={tjksmart} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>{t('web.tojikon.fig2')}</b>
                            </sub>
                        </p>
                    </div>
                </div>
                <p>{t('web.tojikon.p2')}</p>
                <br />
                <h3>{t('web.links')}</h3>
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
                <h2>{t('web.nft.h')}</h2>
                <br />
                <p>{t('web.nft.p1')}</p>
                <br />
                <p>{t('web.nft.p2')}</p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={nftm} />
                    <p style={styles.caption}>
                        <sub>
                            <b>{t('web.nft.fig3')}</b>
                        </sub>
                    </p>
                </div>
                <p>{t('web.nft.p3')}</p>
                <br />
                <h3>{t('web.links')}</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/MaxHalimov/nft-marketplace"
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
