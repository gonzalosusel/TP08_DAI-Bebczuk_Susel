import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';

export default function App() {
  return (<>
    <Text>Login App (Bebczuk, Susel)</Text>
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={{gap: 5}}>
        <Image source={{uri: "https://brandemia.org/contenido/subidas/2023/01/logo-coca-cola-2003-2020-1024x576.png"}}/>

        <TextInput style={styles.input} placeholder="Email"/>
        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true}/>

        <Button color="#8E5DFB" style={styles.button} title="INGRESAR"/>
        <Text>Olvidaste la clave?</Text>
        <Text>Crear Cuenta</Text>
      </View>

    </SafeAreaView>
    </>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F0F1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderColor: "#7B57D6",
    borderWidth: 1,
  },
  button: {
  }
});
