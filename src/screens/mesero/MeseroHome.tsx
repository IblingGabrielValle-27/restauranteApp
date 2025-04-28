import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MeseroHome = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido Mesero</Text>
      <Button title="Ver Reservas" onPress={() => navigation.navigate('VerReservas')} />
      <Button title="Asignar Mesa" onPress={() => navigation.navigate('AsignarMesa')} />
      <Button title="Registrar Pedido" onPress={() => navigation.navigate('RegistrarPedido')} />
    </View>
  );
};

export default MeseroHome;

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  text: {
    fontSize: 20, marginBottom: 20
  }
});
