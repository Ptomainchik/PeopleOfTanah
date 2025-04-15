import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StartPage } from './Components/StartPage/StartPage';
import { ConfederationPage } from './Components/СonfederationOfTribes/ConfederationPage';
import { KingdomInmarPage } from './Components/KingdomInmar/KingdomInmarPage';
import { StructureConfederation } from './Components/СonfederationOfTribes/StructureConfederation/StructureConfederation';
import { StructureKingdomInmar } from './Components/KingdomInmar/SrtuctureKingdomInmar/StructureKingdomInmar';
import { HistoryConfederation } from './Components/СonfederationOfTribes/HistoryConfederation/HistoryConfederation';
import { HistoryKingdomInmar } from './Components/KingdomInmar/HistoryKingdomInmar/HistoryKingdomInmar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="inmar" element={<KingdomInmarPage/>}/>
        <Route path="confederation" element={<ConfederationPage/>}/>
        <Route path="strconfederation" element={<StructureConfederation/>}/>
        <Route path="strinmar" element={<StructureKingdomInmar/>}/>
        <Route path="hisconfederation" element={<HistoryConfederation/>}/>
        <Route path="hisinmar" element={<HistoryKingdomInmar/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
