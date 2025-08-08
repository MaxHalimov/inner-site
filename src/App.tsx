import './App.css';
import Desktop from './components/os/Desktop';
import { I18nProvider } from './i18n/I18nProvider';
import LanguageSwitch from './components/general/LanguageSwitch';

function App() {
    return (
        <I18nProvider>
            <div className="App">
                <LanguageSwitch />
                <Desktop />
            </div>
        </I18nProvider>
    );
}

export default App;
