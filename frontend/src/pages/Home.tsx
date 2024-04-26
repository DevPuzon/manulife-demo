import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'; 
import './Home.css';
import TodoList from '../components/todo-list/todo-list';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../states/store';
import { initTodoList } from '../states/counters/todo-list.counter';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(()=>{ 
    dispatch(initTodoList());
  },[]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Todo List</IonTitle>
          </IonToolbar>
        </IonHeader>

        <TodoList></TodoList>

      </IonContent>
    </IonPage>
  );
};

export default Home;
