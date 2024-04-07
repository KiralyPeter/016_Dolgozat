// Király Péter
// SZOFT-II/1/E
// 2024-04-07

import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import { getStudents } from './services/tanulokService';



export default function App() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((data) => {
      console.log(data)
      setStudents(data)
    })
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tanulók listája</Text>

      <FlatList
        data={students}
        renderItem={({ item }) => (
          <View style={styles.items}>            
            <Text>Tanuló neve: {item.name}</Text>
            <Text>Város: {item.city}</Text>
            <Text>Születési dátum: {item.birth}</Text>            
          </View>
        )}

      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  items: {
    border: 'solid 1px black',
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#6ee263',
    boxShadow: '5px 5px 5px gray',
  }, 
  header: {
    fontSize: '22px',
  },
});
