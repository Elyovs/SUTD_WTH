import React, { useState, useEffect } from 'react';
import { Text, Pressable, SafeAreaView, StyleSheet, View, TouchableOpacity} from 'react-native';
import { Input_tab } from './Input';

export default function App() {

  const [date, setDate] = useState(null);

  const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
  );


  useEffect(() => {
    let today = new Date();
    let date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    setDate(date);
  }, []);

  return (
    <SafeAreaView>
    <SafeAreaView style={[styles.headerPage, {paddingTop:40}]}>
      <Text style={{ textAlign: 'left', padding:0, paddingTop:50, paddingBottom:10, fontSize:25, fontWeight:'bold',color:'rgb(255,255,255)',marginLeft:10}}> Parents </Text>
      <Pressable style={styles.button1}>
      <Text style={styles.text1}>+</Text>
    </Pressable>
    </SafeAreaView>
    <View>
      <Text style = {{marginLeft:10, marginTop:20, fontWeight:'bold', fontSize:23}}> Today </Text>
    </View>
    <View>
      <Text style = {{marginLeft:17, fontWeight:'light', fontSize:17}}>{date}</Text>
    </View>

  
    <View style={styles.container}>
        <View style={[styles.RectangleContainer, { top: 100 }]}>
          <View style={[styles.RectangleShape, { backgroundColor: '#f50057' }]}>
            <Text style={styles.paragraph}>
              Event name 1
            </Text>
            <Text style={styles.paragraph}>
              Location 1, Time 1
            </Text>
            <Text style={styles.paragraph}>
              Link 1
            </Text>
          </View>
        </View>
        
        <View style={[styles.RectangleContainer, { top: 250 }]}>
          <View style={[styles.RectangleShape, { backgroundColor: '#f50057' }]}>
            <Text style={styles.paragraph}>
              Event name 2
            </Text>
            <Text style={styles.paragraph}>
              Location 2, Time 2
            </Text>
            <Text style={styles.paragraph}>
              Link 2
            </Text>
          </View>
        </View>
      </View>


      <View style={styles.content}>
      <View style={styles.fixToText}>
        <CustomButton
          title="You"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <CustomButton
          title="User 1"
          onPress={() => Alert.alert('Middle button pressed')}
        />
        <CustomButton
          title="User 2"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </View>

    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  headerPage: {
    backgroundColor: "red",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:-50,
    marginBottom:20
  },

  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding:20, paddingTop:0, paddingBottom:0,
    marginTop:50, marginRight:10, marginBottom:10,
    backgroundColor:"black"
  },

   text1: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'white',
  },

  RectangleContainer: {
    position: "absolute",
    alignSelf: "center",
    marginBottom: 10,
  },
  RectangleShape: {
    width: 120 * 2,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
  },
  paragraph: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  upcomming: {
    position: "absolute",
    bottom: 350,
    left: 20,
    color: 'black',
    fontSize: 30,
    fontWeight:'bold',
    textAlign: 'left',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: -580,
    left: 0,
    right: 0,
    padding: 16,
  },
  button: {
    flex: 1,
    marginHorizontal: 1,
    backgroundColor: '#ffb7c5',
    paddingVertical: 10,
    borderRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },

});
