import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ContactProps {}

interface SocialButtonProps {
    label: string;
    link: string;
    backgroundColor: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ label, link, backgroundColor }) => {
    return (
        <a rel="noreferrer" target="_blank" href={link} style={styles.socialLink}>
            <div className="big-button-container" style={{...styles.socialButton, backgroundColor}}>
                <span style={styles.label}>{label}</span>
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
                    I'm always open to new opportunities and interesting projects! 
                    Whether you're looking to collaborate on a project, need help with web development, 
                    or just want to connect and discuss technology, feel free to reach out.
                </p>
                <br />
                <p>
                    I respond quickly and I'd love to hear about your ideas and how we can work together.
                    You can contact me through any of the social platforms below:
                </p>
                <br />
                <p>
                    <b>Email: </b>
                    <a href="mailto:h_mahmadali@mail.ru">
                        h_mahmadali@mail.ru
                    </a>
                </p>
                <br />
                
                <div style={styles.socialContainer}>
                    <SocialButton
                        label="Instagram"
                        link="https://instagram.com/mahmadali_h"
                        backgroundColor="#E4405F"
                    />
                    <SocialButton
                        label="Telegram"
                        link="https://t.me/max_halimov"
                        backgroundColor="#0088cc"
                    />
                    <SocialButton
                        label="WhatsApp"
                        link="https://wa.me/+992559995545"
                        backgroundColor="#25D366"
                    />
                </div>
            </div>
            <ResumeDownload altText="Need a copy of my Resume?" />
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginBottom: 16,
    },
    socialContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '12px',
        marginTop: 24,
        flexWrap: 'wrap',
    },
    socialLink: {
        textDecoration: 'none',
        color: 'inherit',
    },
    socialButton: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 16px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '14px',
        transition: 'transform 0.2s ease, opacity 0.2s ease',
        cursor: 'pointer',
        border: 'none',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        minWidth: 'auto',
        justifyContent: 'center',
    },

    label: {
        fontSize: '13px',
        fontWeight: 'bold',
    },
};

export default Contact;
