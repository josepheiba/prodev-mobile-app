import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to PropertyApp!</Text>
      <Text style={{ fontSize: 16, textAlign: 'center', paddingHorizontal: 20 }}>
        Your property search journey starts here
      </Text>
      
      <View style={{ marginTop: 30 }}>
        <Link href="/(home)" asChild>
          <TouchableOpacity style={{
            backgroundColor: '#34967C',
            paddingHorizontal: 30,
            paddingVertical: 15,
            borderRadius: 25
          }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>
              Explore Properties
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
