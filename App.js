import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react'

export const Data_list = [];

export default function Input_tab() {
  const [event, setEvent] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [alert, setAlert] = useState("");
  const [description, setDescription] = useState("");

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

  function handleDescriptionChange(text) {
    setDescription(text);
  }

  function handleSubmit() {
    Data_list.push({event: event, location: location, time: time, alert: alert, description: description});
    console.log(Data_list);
  }

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={{fontSize:30, fontWeight:10, paddingBottom: 10}}>Input</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
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
    }
});