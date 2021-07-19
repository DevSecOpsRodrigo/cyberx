import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';

import { AuthContextProvider } from './contexts/AuthContext';

import { QRCode } from 'react-qrcode-logo';

function App() {
  return (
   <HashRouter>
     <BrowserRouter>
       <AuthContextProvider>
         <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/rooms/new" component={NewRoom} />
           <Route path="/rooms/:id" component={Room} />
           <QRCode value="https://github.com/gcoro/react-qrcode-logo" />,
            mountNode
           <Route path="/admin/rooms/:id" component={AdminRoom} />
         </Switch>
       </AuthContextProvider>
     </BrowserRouter>
    </HashRouter>
  );
}

export default App;
