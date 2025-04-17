import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StartPage } from './Components/StartPage/StartPage';
import { ConfederationPage } from './Components/СonfederationOfTribes/ConfederationPage';
import { KingdomInmarPage } from './Components/KingdomInmar/KingdomInmarPage';
import { StructureConfederation } from './Components/СonfederationOfTribes/StructureConfederation/StructureConfederation';
import { StructureKingdomInmar } from './Components/KingdomInmar/SrtuctureKingdomInmar/StructureKingdomInmar';
import { HistoryConfederation } from './Components/СonfederationOfTribes/HistoryConfederation/HistoryConfederation';
import { HistoryKingdomInmar } from './Components/KingdomInmar/HistoryKingdomInmar/HistoryKingdomInmar';
import { QuestKingdomInmar } from './Components/KingdomInmar/QuestKingdomInmar/QuestKingdomInmar';
import { QuestConfederation } from './Components/СonfederationOfTribes/QuestConfederation/QuestConfederation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="inmar" element={<KingdomInmarPage/>}/>
        <Route path="confederation" element={<ConfederationPage/>}/>
        <Route path="strinmar" element={<StructureKingdomInmar/>}/>
        <Route path="strconfederation" element={<StructureConfederation/>}/>
        <Route path="hisinmar" element={<HistoryKingdomInmar/>}/>
        <Route path="hisconfederation" element={<HistoryConfederation/>}/>
        <Route path="queinmar" element={<QuestKingdomInmar/>}/>
        <Route path="queconfederation" element={<QuestConfederation/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
