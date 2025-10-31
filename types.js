import { ScreenView } from './types';

const [activeView, setActiveView] = useState(ScreenView.HOME);

// when switching views
setActiveView(ScreenView.PROJECTS);
