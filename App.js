import React, { useState, useEffect } from 'react';
import { Text, Pressable, SafeAreaView, StyleSheet, View, TouchableOpacity, TextInput, Button, Vibration} from 'react-native';
import { Input_tab } from './Input.js';

export const Data_list = [];

export default function App() {

  const [date, setDate] = useState(null);
  const [toggle, setToggle] = useState(0);

  const [event, setEvent] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [alert, setAlert] = useState("");
  const [description, setDescription] = useState("");

  const [hour, setHour] = useState(null);
  const [minute, setMinute] = useState(null);

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  // let hour = new Date().getHours();
  // let minute = new Date().getMinutes();
  // console.log(`${hour}:${minute+10}`);

  // useEffect(() => {
  //   console.log(`${hour}:${minute+10}`);
  // }, [hour, minute]);
  // if (Data_list.length > 0){
  //   console.log(Data_list[0].time)
  // }

  // if(Data_list.length > 0 && `${hour}:${minute+10}` === Data_list[0].time) {
  //   Vibration.vibrate(1000);
  //   Data_list.pop(0);
  // }

  function handleEventChange(text) {
    setEvent(text);
  }

  function handleLocationChange(text) {
    setLocation(text);
  }

  function handleTimeChange(text) {
    setTime(text);
  }

  function handleAlertChange(text) {
    setAlert(text);
  }

  async function handleSubmit() {
    Data_list.push({event: event, location: location, time: time, alert: alert, description: description});
    setToggle(0);
    console.log(Data_list);
    await delay(2000);
    Vibration.vibrate(1000);
  }

  function handleDescriptionChange(text) {
    setDescription(text);
  }

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

  // useEffect(() => {
  //   setHour(new Date().getHours());
  //   setMinute(new Date().getMinutes());
  // })
  
  // console.log(`${hour}:${minute+10}`);
    // let timeline = new Date();
    // let dead = timeline.getHours() + ':' + timeline.getMinutes();
    // console.log(dead);
  

  if(toggle === 0) {
    return (
      <SafeAreaView>
      <SafeAreaView style={[styles.headerPage, {paddingTop:40}]}>
        <Text style={{ textAlign: 'left', padding:0, paddingTop:50, paddingBottom:10, fontSize:25, fontWeight:'bold',color:'rgb(255,255,255)',marginLeft:10}}> Parents </Text>
        <Pressable style={styles.button1} onPress={() => {setToggle(1)}}>
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
                {Data_list.length > 0 ? Data_list[0].event : ""}
              </Text>
              <Text style={styles.paragraph}>
                {Data_list.length > 0 ? Data_list[0].location : ""}, 
                {Data_list.length > 0 ? Data_list[0].time : ""}
              </Text>
              <Text style={styles.paragraph}>
              {Data_list.length > 0 ? Data_list[0].description : ""}
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
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.topRow}>
          <Text style={{fontSize:17, fontWeight:"bold", paddingBottom: 10}}>Input</Text>
        </View>
        <View style={{marginHorizontal: 10, width: '75%'}}>
          <Text style={{marginTop: 30}}> Event Name </Text>
          <TextInput 
            style={styles.input} 
            placeholder="Event name" 
            value={event} 
            onChangeText={handleEventChange} 
          />
        </View>
        <View style={{marginHorizontal: 10, width: '75%'}}>
          <Text style={{marginTop: 30}}> Location </Text>
          <TextInput 
            style={styles.input} 
            placeholder="Location" 
            value={location} 
            onChangeText={handleLocationChange} 
          />
        </View>
        <View style={{marginHorizontal: 10, width: '75%'}}>
          <Text style={{marginTop: 30}}> Time </Text>
          <TextInput 
            style={styles.input} 
            placeholder="xx:xx am/pm" 
            value={time} 
            onChangeText={handleTimeChange} 
          />
        </View>
        <View style={{marginHorizontal: 10, width: '75%'}}>
          <Text style={{marginTop: 30}}> Alert x minutes before </Text>
          <TextInput 
            style={styles.input} 
            placeholder="x (in minutes)" 
            value={alert} 
            onChangeText={handleAlertChange} 
          />
        </View>
        <View style={{marginHorizontal: 10, width: '75%'}}>
        <Text style={{marginTop: 30}}> Description </Text>
        <TextInput 
          style={styles.input} 
          placeholder="Description" 
          value={description} 
          onChangeText={handleDescriptionChange} 
        />
      </View>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    );
  }
  
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
  topRow: {
    backgroundColor:'pink', 
    paddingTop: 50, 
    paddingHorizontal: 160,
    paddingBottom: 20,
  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    height: 50,
    fontSize: 20,
    color: 'black',
  },

});
