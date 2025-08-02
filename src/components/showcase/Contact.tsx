import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ContactProps {}

interface SocialButtonProps {
    text: string;
    link: string;
    emoji?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ link, text, emoji }) => {
    return (
        <a rel="noreferrer" target="_blank" href={link}>
            <div className="big-button-container" style={styles.socialButton}>
                <span style={styles.socialText}>
                    {emoji && <span style={styles.emoji}>{emoji}</span>}
                    {text}
                </span>
            </div>
        </a>
    );
};

const Contact: React.FC<ContactProps> = (props) => {
    return (
        <div className="site-page-content">
            <div style={styles.header}>
                <h1>Contact</h1>
            </div>
            <div className="text-block">
                <p>
                    Thank you for taking the time to explore my portfolio! 
                    It means a lot to me, and I truly appreciate your interest in my work.
                </p>
                <br />
                <p>
                    If you have any questions, collaboration opportunities, or just want to 
                    chat about technology — I'd love to hear from you! 
                    Feel free to reach out through any of the platforms below.
                </p>
                <br />
                <p>
                    <b>Email: </b>
                    <a href="mailto:h_mahmadali@mail.ru">
                        h_mahmadali@mail.ru
                    </a>
                </p>
                <br />
                <div style={styles.socials}>
                    <SocialButton
                        text="Telegram"
                        link="https://t.me/max_halimov"
                    />
                    <SocialButton
                        text="WhatsApp"
                        link="https://wa.me/+992559995545"
                    />
                    <SocialButton
                        text="Instagram"
                        link="https://instagram.com/mahmadali_h"
                    />
                </div>
            </div>
            <ResumeDownload altText="Need a copy of my resume?" />
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    socials: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        marginTop: 8,
    },
    socialButton: {
        padding: '8px 12px',
        borderRadius: 4,
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 80,
        transition: 'all 0.2s ease',
    },
    socialText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export default Contact;
