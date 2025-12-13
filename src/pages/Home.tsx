import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { PortfolioTracker } from '../components/PortfolioTracker';
import { PredictorWrapper } from '../components/PredictorWrapper';
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
             <PredictorWrapper className='mt-5'></PredictorWrapper>
      </IonContent>
    </IonPage>
  );
};

export default Home;
