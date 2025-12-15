import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { PortfolioTracker } from '../components/PortfolioTracker';
import { PredictorWrapper } from '../components/PredictorWrapper';
import { Investments } from '../components/Investments';

export const Home = () => {
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
             <Investments></Investments>
      </IonContent>
    </IonPage>
  );
};

