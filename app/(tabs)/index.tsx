import { View, Text, StatusBar } from "react-native";
import { ArrowUp, ArrowDown } from "lucide-react-native";

export default function HomeScreen() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          backgroundColor: "#1951EF",
          height: 300,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingTop: 80,
          paddingHorizontal: 25,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingHorizontal: 10,
          }}
        >
          <View>
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                fontWeight: "bold",
                opacity: 0.8,
              }}
            >
              Hello,
            </Text>
            <Text
              style={{
                color: "#fff",
                transform: [{ translateY: -5 }],
                fontSize: 34,
                fontWeight: "bold",
              }}
            >
              Gabi!
            </Text>
          </View>
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "bold",
              opacity: 0.7,
              transform: [{ translateY: -12 }],
            }}
          >
            August, 2025
          </Text>
        </View>

        <View
          style={{
            height: 200,
            backgroundColor: "#496EF3",
            position: "absolute",
            marginHorizontal: 25,
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            bottom: -55,
            borderRadius: 20,
            padding: 30,
            left: 0,
            right: 0,
          }}
        >
          <View>
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: "bold",
                opacity: 0.5,
              }}
            >
              Total Balance
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 30,
                fontWeight: "bold",
                opacity: 0.9,
              }}
            >
              1000.45{" "}
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>RON</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <ArrowDown
                  style={{
                    backgroundColor: "#6284F1",
                    padding: 3,
                    marginRight: 5,
                    borderRadius: 10,
                  }}
                  color="#fff"
                  size={20}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "bold",
                    opacity: 0.5,
                  }}
                >
                  Income
                </Text>
              </View>
              <Text style={{ color: "#fff", fontSize: 19, fontWeight: "bold" }}>
                1000.45{" "}
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>RON</Text>
              </Text>
            </View>
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <ArrowUp
                  style={{
                    backgroundColor: "#6284F1",
                    padding: 3,
                    marginRight: 5,
                    borderRadius: 10,
                  }}
                  color="#fff"
                  size={20}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "bold",
                    opacity: 0.5,
                  }}
                >
                  Expenses
                </Text>
              </View>

              <Text style={{ color: "#fff", fontSize: 19, fontWeight: "bold" }}>
                1000.45{" "}
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>RON</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
