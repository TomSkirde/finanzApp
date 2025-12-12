import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { PortfolioTracker } from '../components/PortfolioTracker';
import { Predictor } from '../components/Predictor';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="justify-center">
          <IonTitle>Finanztracker</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>  
             <PortfolioTracker></PortfolioTracker>
             <Predictor></Predictor>
      </IonContent>
    </IonPage>
  );
};

export default Home;
