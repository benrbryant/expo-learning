import { StyleSheet } from "react-native";
import { Image, ScrollView } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { useEffect, useState } from "react";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [topics, setTopics] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => setTopics(data))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/all-noding/cover.png")}
        style={styles.coverImg}
      />
      <Text style={styles.title}>Studio Ghibli Films</Text>
      <View
        style={styles.separator}
        lightColor="#ccc"
        darkColor="rgba(255,255,255,0.3)"
      />
      <ScrollView style={{ width: "80%" }}>
        {topics.map((t: any, index: number) => {
          return (
            <Text
              key={t.id}
              style={{
                padding: 10,
                fontSize: 16,
                borderRadius: 8,
                overflow: "hidden",
                backgroundColor: "#fff",
                marginVertical: 5,
              }}
            >
              {t.title}
            </Text>
          );
        })}
      </ScrollView>
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
    marginTop: 15,
    fontSize: 36,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  coverImg: { height: 200, resizeMode: "contain" },
  thumbnail: {
    height: 200,
    width: 200,
    resizeMode: "contain",
    marginVertical: 10,
  },
  button: { backgroundColor: "purple", padding: 10, borderRadius: 15 },
  buttonTxt: { fontSize: 20, color: "#fff" },
});
