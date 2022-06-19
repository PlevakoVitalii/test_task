import { GetBlock } from '../GetBlock';
import { Header } from '../Header';
import InfoBlock from '../InfoBlock/InfoBlock';
import { PostBlock } from '../PostBlock';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.app}>
      <div className={style.container}>
        <Header />
        <InfoBlock />
        <GetBlock />
        <PostBlock />
      </div>

    </div>
  );
}

export default App;
