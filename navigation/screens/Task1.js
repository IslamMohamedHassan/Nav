import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ScrollView,
  Image,
  Platform,
} from "react-native";


export default function Task1() {
  const images = [
    "https://media.istockphoto.com/id/872104790/photo/autumn-colors-reflected-off-of-the-chicago-river-during-rush-hour-commute.jpg?s=612x612&w=0&k=20&c=DYcg18T86zJ18p81P2rF3hNRpBJ6UanuKoFg3ucQVTk=",
    "https://media.istockphoto.com/id/849882776/photo/modern-commercial-buildings-beside-the-canals-copenaghen.jpg?s=612x612&w=0&k=20&c=CZBby5fMV0yW2lDwbg3PTFZMiRqYAsQ7Si18z-fg6U0=",
    "https://media.istockphoto.com/id/1390124896/photo/office-buildings-in-canary-wharf-the-downtown-financial-district-in-london.webp?b=1&s=170667a&w=0&k=20&c=SxU1oc_2mPlOdaUt9qg2AilPcoKU1DSCUA2qy8efMRw="
    ,"https://media.istockphoto.com/id/1390124896/photo/office-buildings-in-canary-wharf-the-downtown-financial-district-in-london.webp?b=1&s=170667a&w=0&k=20&c=SxU1oc_2mPlOdaUt9qg2AilPcoKU1DSCUA2qy8efMRw="
  ];
  return (
    
    <ScrollView horizontal style={styles.container}>
     {images.map((image)=>
       <Image
         style={{ width: 400, height: 500, margin: "60px" }}
         source={{uri:image }}
       ></Image>
     )}
    </ScrollView>
  )
  
}

const styles = StyleSheet.create({
  container: {
    margin: Platform.OS === "android" ? 150 : 0,
    
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
 },
});