import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MeseroHome = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido Mesero</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Ver Reservas"
          onPress={() => navigation.navigate('VerReservas')}
        />
      </View>

      {/* Más botones después, como "Asignar Mesa" */}
    </View>
  );
};

export default MeseroHome;

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20
  },
  title: {
    fontSize: 24, marginBottom: 40
  },
  buttonContainer: {
    width: '80%', marginBottom: 20
  }
});
