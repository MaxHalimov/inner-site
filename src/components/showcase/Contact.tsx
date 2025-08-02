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
                <div style={styles.socials}>
                    <SocialButton
                        emoji="📧"
                        text="Email"
                        link="mailto:h_mahmadali@mail.ru"
                    />
                    <SocialButton
                        emoji="📱"
                        text="Telegram"
                        link="https://t.me/max_halimov" // замените на ваш Telegram
                    />
                    <SocialButton
                        emoji="💬"
                        text="WhatsApp"
                        link="https://wa.me/+992559995545" // замените на ваш WhatsApp
                    />
                    <SocialButton
                        emoji="📷"
                        text="Instagram"
                        link="https://instagram.com/mahmadali_h" // замените на ваш Instagram
                    />
                </div>
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
                    Feel free to reach out through any of the platforms above.
                </p>
                <br />
                <p>
                    <b>Email: </b>
                    <a href="mailto:h_mahmadali@mail.ru">
                        h_mahmadali@mail.ru
                    </a>
                </p>
            </div>
            <ResumeDownload altText="Need a copy of my resume?" />
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    socials: {
        marginBottom: 16,
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        gap: 8,
    },
    socialButton: {
        padding: '8px 12px',
        borderRadius: 4,
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 4,
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
    emoji: {
        marginRight: 4,
        fontSize: 14,
    },
};

export default Contact;
