import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ClienteHome = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido Cliente</Text>
      <Button title="Reservar Mesa" onPress={() => navigation.navigate('ReservarMesa')} />
      <Button title="Hacer Pedido" onPress={() => navigation.navigate('Pedidos')} />
      <Button title="Pagar" onPress={() => navigation.navigate('Pago')} />
    </View>
  );
};

export default ClienteHome;

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  text: {
    fontSize: 20, marginBottom: 20
  }
});
