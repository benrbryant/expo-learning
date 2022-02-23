import { StyleSheet } from "react-native";
import { Image, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted == false) {
      alert("You must grant permission to access the camera roll!");
    } else {
      let pickerResult: any = await ImagePicker.launchImageLibraryAsync();
      console.log(pickerResult);
      setSelectedImage({ localUri: pickerResult.uri });
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/all-noding/cover.png")}
        style={styles.coverImg}
      />
      <View
        style={styles.separator}
        lightColor="#ccc"
        darkColor="rgba(255,255,255,0.3)"
      />
      {selectedImage ? (
        <Image style={styles.thumbnail} source={{ uri: selectedImage.localUri }} />
      ) : null}
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonTxt}>Choose Photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  coverImg: { height: 200, resizeMode: "contain" },
  thumbnail: { height: 200, width: 200, resizeMode: "center" },
  button: { backgroundColor: "purple", padding: 10, borderRadius: 15 },
  buttonTxt: { fontSize: 20, color: "#fff" },
});
