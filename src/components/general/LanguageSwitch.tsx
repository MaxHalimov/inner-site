import React from 'react';
import { useI18n } from '../../i18n/I18nProvider';

const buttonStyle: React.CSSProperties = {
  position: 'fixed',
  top: 8,
  right: 8,
  zIndex: 9999,
  // Retro browser-like look
  background: 'var(--surface-hover)',
  boxShadow: 'var(--border-raised-outer), var(--border-raised-inner)',
  border: 'none',
  borderRadius: 0,
  padding: '4px 10px',
  fontFamily: 'Monocraft, Millennium, monospace',
  cursor: 'pointer',
};

const LanguageSwitch: React.FC = () => {
  const { lang, toggleLang } = useI18n();
  return (
    <button onMouseDown={toggleLang} style={buttonStyle} title={lang === 'ru' ? 'Switch to English' : 'Переключить на русский'}>
      {lang === 'ru' ? 'EN' : 'RU'}
    </button>
  );
};

export default LanguageSwitch;


