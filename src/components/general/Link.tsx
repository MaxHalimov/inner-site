import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';

export interface LinkProps {
    text: string;
    to: string;
    containerStyle?: React.CSSProperties;
    outsideTo?: string;
}

const Link: React.FC<LinkProps> = (props) => {
    const navigate = useNavigate();

    // get current location of react router
    const location = useLocation();
    const [isHere, setIsHere] = useState(false);
    const isMountedRef = useRef(true);
    const navigateTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const activeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // if current path is the same as the link path
    useEffect(() => {
        const targetPath = props.to === '' ? '/' : `/${props.to}`;
        if (location.pathname === targetPath) {
            setIsHere(true);
        } else {
            setIsHere(false);
        }
        return () => {};
    }, [location, props.to]);

    // Cleanup timers and mark unmounted to avoid state updates after unmount
    useEffect(() => {
        isMountedRef.current = true;
        return () => {
            isMountedRef.current = false;
            if (navigateTimeoutRef.current) {
                clearTimeout(navigateTimeoutRef.current);
                navigateTimeoutRef.current = null;
            }
            if (activeTimeoutRef.current) {
                clearTimeout(activeTimeoutRef.current);
                activeTimeoutRef.current = null;
            }
        };
    }, []);

    const [active, setActive] = useState(false);

    const handleClick = (e: any) => {
        e.preventDefault();
        setActive(true);
        const targetPath = props.to === '' ? '/' : `/${props.to}`;
        if (location.pathname !== targetPath) {
            navigateTimeoutRef.current = setTimeout(() => {
                if (isMountedRef.current) navigate(targetPath);
            }, 100);
        }
        activeTimeoutRef.current = setTimeout(() => {
            if (isMountedRef.current) setActive(false);
        }, 100);
    };

    return (
        <RouterLink
            to={props.to === '' ? '/' : `/${props.to}`}
            onMouseDown={handleClick}
            style={Object.assign({}, { display: 'flex' }, props.containerStyle)}
        >
            {isHere && <div style={styles.hereIndicator} />}
            <h4
                className="router-link"
                style={Object.assign(
                    {},
                    styles.link,
                    active && { color: 'red' }
                )}
            >
                {props.text}
            </h4>
        </RouterLink>
    );
};

const styles: StyleSheetCSS = {
    link: {
        cursor: 'pointer',
        fontWeight: 'bolder',
        textDecoration: 'underline',
    },
    hereIndicator: {
        width: 4,
        height: 4,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: 'rgb(85, 26, 139)',
        alignSelf: 'center',
        borderRadius: '50%',
        marginRight: 6,
        textDecoration: 'none',
    },
};

export default Link;
