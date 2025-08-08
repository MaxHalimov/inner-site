import React from 'react';
import ResumeDownload from './ResumeDownload';
import { useI18n } from '../../i18n/I18nProvider';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    const { t } = useI18n();
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>{t('exp.org1')}</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://dilsuzi.tj/'}
                        >
                            <h4>dilsuzi.tj</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>{t('exp.role1')}</h3>
                        <b>
                            <p>{t('exp.date1')}</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>{t('exp.p1')}</p>
                <br />
                <ul>
                    <li>
                        <p>{t('exp.l1')}</p>
                    </li>
                    <li>
                        <p>{t('exp.l2')}</p>
                    </li>
                    <li>
                        <p>{t('exp.l3')}</p>
                    </li>
                    <li>
                        <p>{t('exp.l4')}</p>
                    </li>
                    <li>
                        <p>{t('exp.l5')}</p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>{t('exp.org2')}</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://dilsuzi.tj/'}
                        >
                            <h4>dilsuzi.tj</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>{t('exp.role2')}</h3>
                        <b>
                            <p>{t('exp.date2')}</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>{t('exp.p2')}</p>
                <br />
                <ul>
                    <li>
                        <p>{t('exp.l6')}</p>
                    </li>
                    <li>
                        <p>{t('exp.l7')}</p>
                    </li>
                    <li>
                        <p>{t('exp.l8')}</p>
                    </li>
                    <li>
                        <p>{t('exp.l9')}</p>
                    </li>
                    <li>
                        <p>{t('exp.l10')}</p>
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
