import logo from './logo.svg';
import './App.css';
import PracticeSlider from './components/PracticeSlider';
import SliderPractice from './components/SliderPractice';
import TabSlider from './components/TabSlider';
import TabsTitle from './components/TabsTitle';

function App() {
  return (
    <div>
      <TabsTitle/>
      {/* <PracticeSlider /> */}
      <SliderPractice />
      <TabSlider/>
    </div>
  );
}

export default App;
