import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { PortfolioTracker } from '../components/PortfolioTracker';

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
      </IonContent>
    </IonPage>
  );
};

export default Home;
