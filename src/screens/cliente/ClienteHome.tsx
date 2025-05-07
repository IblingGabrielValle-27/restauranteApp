import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ClienteHome = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido Cliente</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Reservar Mesa"
          onPress={() => navigation.navigate('ReservarMesa')}
        />
      </View>

    </View>
  );
};

export default ClienteHome;

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
