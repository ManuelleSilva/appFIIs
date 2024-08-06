import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import TituloPrincipal from './components/TituloPrincipal.jsx';
import Sessao01 from './components/Sessao01.jsx';
import Sessao02 from './components/Sessao02.jsx';
import Sessao03 from './components/Sessao03.jsx';
import Sessao04 from './components/Sessao04.jsx';
import Sessao05 from './components/Sessao05.jsx';
import Sessao06 from './components/Sessao06.jsx';
import Sessao07 from './components/Sessao07.jsx';


export default function App() {
  return (
    <ScrollView style={styles.container}>
      <TituloPrincipal />
      <Sessao01 />
      <Sessao02 />
      <Sessao03 />
      <Sessao04 />
      <Sessao05 />
      <Sessao06 />
      <Sessao07 />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#778899'
  },
});
