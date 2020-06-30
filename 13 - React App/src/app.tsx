import React, { useState } from 'react';
import { Providers, MsalProvider, ProviderState } from '@microsoft/mgt';
import './tailwind.generated.css';
import AgendaWC from './agendaWC'
import AgendaReact from './agendaReact';
import NavBar from './navBar'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  Providers.globalProvider = new MsalProvider({ clientId: '[CLIENT_ID]' });
  Providers.globalProvider.onStateChanged((e) => {
    if (Providers.globalProvider.state !== ProviderState.Loading)
      setIsLoggedIn(Providers.globalProvider.state === ProviderState.SignedIn);
  });

  return (
    <div>
      <NavBar />
      {(isLoggedIn) ?
        <div className="grid sm:grid-cols-2 gap-4 m-10">
          <div>
            <h1 className="mx-3 my-3 text-2xl leading-tight">
              Agenda
          </h1>
            <AgendaWC />
          </div>
          <div>
            <h1 className="mx-3 my-3 text-2xl leading-tight">
              Agenda (Using mgt-react)
          </h1>
            <AgendaReact />
          </div>
        </div>
        :
        <div className="font-semibold tracking-tight text-center shadow-md p-4 m-10">
          Login to show data
        </div>
      }
    </div>
  );
}

export default App;
