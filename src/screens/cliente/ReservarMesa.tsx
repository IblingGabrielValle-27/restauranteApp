import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { supabase } from '../../services/supabase';

const ReservarMesa = ({ navigation }: any) => {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [personas, setPersonas] = useState('');

  const handleReserva = async () => {
    if (!fecha || !hora || !personas) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('reservas') 
        .insert([
          {
            fecha: fecha,
            hora: hora,
            numero_personas: parseInt(personas),
            estado: 'pendiente',
          },
        ]);

      if (error) {
        throw error;
      }

      Alert.alert('Éxito', 'Reserva realizada correctamente');
      navigation.goBack(); 
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reservar Mesa</Text>

      <TextInput
        style={styles.input}
        placeholder="Fecha (YYYY-MM-DD)"
        value={fecha}
        onChangeText={setFecha}
      />
      <TextInput
        style={styles.input}
        placeholder="Hora (HH:MM)"
        value={hora}
        onChangeText={setHora}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de personas"
        keyboardType="numeric"
        value={personas}
        onChangeText={setPersonas}
      />

      <Button title="Reservar" onPress={handleReserva} />
    </View>
  );
};

export default ReservarMesa;

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff',
  },
  title: {
    fontSize: 24, marginBottom: 20, textAlign: 'center'
  },
  input: {
    height: 40, borderWidth: 1, borderColor: '#ccc', marginBottom: 12, paddingHorizontal: 10
  }
});
