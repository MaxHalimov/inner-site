import './App.css';
import Desktop from './components/os/Desktop';
import { I18nProvider } from './i18n/I18nProvider';

function App() {
    return (
        <I18nProvider>
            <div className="App">
                <Desktop />
            </div>
        </I18nProvider>
    );
}

export default App;
