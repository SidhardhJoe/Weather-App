
import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, onChangeText, TouchableOpacity, Image } from 'react-native';
import axios from 'axios'
export default function App() {
  const [text, onChangeText] = React.useState('');
  const [data, setData] = useState(null);
  async function fetchData() {
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${text}?unitGroup=metric&key=F6RQQ5THZ6QFFEP69BKLW8VYX&contentType=json`;
    console.log("text", text);
    try {
      const response = await axios.get(apiUrl)
      setData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error.response.data);
    }
  }
  return (
    <>
      <View style={{ backgroundColor: "#222831", flex: 1 }} >
        <StatusBar></StatusBar>
        <View style={styles.search_bar}>
          <TextInput
            style={styles.searchbar}
            onChangeText={onChangeText}

            placeholder='Search'
            placeholderTextColor="grey"
            value={text}
          />
          <TouchableOpacity onPress={() => fetchData()} >
            <Image source={require('./Images/search.png')}
              style={{ marginTop: "10%", height: 30, width: 30, marginLeft: "20%" }} ></Image>
          </TouchableOpacity>
        </View>
        {data && <View>
          <View style={styles.location_bar}>
            <Text style={styles.infobar}>{data?.address}</Text>
            <Text style={styles.infobar}>{data?.days[0]?.datetime}</Text>
          </View>
          <View style={styles.view2}>
            <Image source={data?.days[0].temp >= 0 && data?.days[0].temp <= 10 ? require('./Images/freeze.png') : data?.days[0].temp >= 11 && data?.days[0].temp <= 20 ? require('./Images/mildfreeze.png') : data?.days[0].temp >= 21 && data?.days[0].temp <= 30 ? require('./Images/hot.png') : require('./Images/veryhot.png')} style={styles.imgcontainer}></Image>
            <Text style={{ color: "white", fontSize: 40, marginLeft: "35%", marginTop: "10%" }}>{data?.days[0]?.temp}</Text>
          </View>
          <View style={styles.view3}>
            <View style={styles.viewsub}>
              <Image source={data?.days[0].temp >= 0 && data?.days[0].temp <= 10 ? require('./Images/freeze.png') : data?.days[0].temp >= 11 && data?.days[0].temp <= 20 ? require('./Images/mildfreeze.png') : data?.days[0].temp >= 21 && data?.days[0].temp <= 30 ? require('./Images/hot.png') : require('./Images/veryhot.png')} style={styles.smallbar}></Image>
              <Text style={styles.textsmallbox}> {data?.days[1]?.temp}</Text>
            </View>
            <View style={styles.viewsub}>
              <Image source={data?.days[0].temp >= 0 && data?.days[0].temp <= 10 ? require('./Images/freeze.png') : data?.days[0].temp >= 11 && data?.days[0].temp <= 20 ? require('./Images/mildfreeze.png') : data?.days[0].temp >= 21 && data?.days[0].temp <= 30 ? require('./Images/hot.png') : require('./Images/veryhot.png')} style={styles.smallbar}></Image>
              <Text style={styles.textsmallbox}>{data?.days[2]?.temp}</Text>
            </View>
            <View style={styles.viewsub}>
              <Image source={data?.days[0].temp >= 0 && data?.days[0].temp <= 10 ? require('./Images/freeze.png') : data?.days[0].temp >= 11 && data?.days[0].temp <= 20 ? require('./Images/mildfreeze.png') : data?.days[0].temp >= 21 && data?.days[0].temp <= 30 ? require('./Images/hot.png') : require('./Images/veryhot.png')} style={styles.smallbar}></Image>
              <Text style={styles.textsmallbox}>{data?.days[3]?.temp}</Text>
            </View>
          </View>
        </View>}
      </View >
    </>
  );
}

const styles = StyleSheet.create({

  text1: {
    fontSize: 30,
    textAlign: "center",
    color: "black"
  },

  search_bar: {
    flexDirection: 'row',
    marginTop: "5%",
    height: 50,
    width: "80%",
    marginLeft: "10%",
    backgroundColor: "#31363F",
    borderRadius: 30,
    elevation: 10
  },

  searchbar: {
    color: "white",
    padding: 13,
    marginLeft: "25%",
    fontWeight: "400",
    fontSize: 20
  },

  location_bar: {
    display: "flex",
    borderRadius: 25,
    marginTop: "5%",
    marginLeft: "10%",
    height: "14%",
    width: "80%",
    backgroundColor: "#31363F",
    elevation: 10,
    display: "flex",
    flexDirection: "row"
  },

  infobar: {
    color: "#EEEEEE",
    fontSize: 20,
    marginLeft: "5%",
    marginTop: "9%",
    marginLeft: "13%"
  },

  infobar2: {
    marginTop: "10%",
    fontSize: 20,
    color: "#EEEEEE",
    marginLeft: "30%"
  },

  view2: {
    marginTop: "7%",
    marginLeft: "20%",
    height: "40%",
    width: "60%",
    borderRadius: "50%",
    backgroundColor: "#31363F",
    borderRadius: 20,
    elevation: 10,
  },

  imgcontainer: {
    height: 150,
    width: 150,
    marginTop: "10%",
    marginLeft: "20%",
    justifyContent: "center",
    alignContent: "center"
  },

  view3: {
    display: "flex",
    flexDirection: "row",
    marginTop: "7%",
    width: "95%",
    height: "25%",
    marginLeft: "2.5%",
    backgroundColor: "#31363F",
    overflow: "hidden",
    borderRadius: 20
  },

  viewsub: {
    marginTop: "5%",
    marginLeft: "4%",
    height: "80%",
    width: "28%",
    backgroundColor: "#31363F",
    borderRadius: 20,
    elevation: 10,
  },
  smallbar: {
    height: 75,
    width: 75,
    marginTop: "10%",
    marginLeft: "15%"
  },
  textsmallbox: {
    fontSize: 25,
    marginTop: "5%",
    marginLeft: "25%",
    color: "#EEEEEE"
  }
});
