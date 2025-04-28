import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../services/supabase';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<any>();

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
  
    if (error) {
      Alert.alert('Error', error.message);
    } else {
      // Obtener el rol desde tu base de datos
      const { data: perfil } = await supabase
        .from('usuarios') // nombre de tu tabla
        .select('rol')
        .eq('id', data.user.id)
        .single();
  
      if (perfil?.rol === 'cliente') {
        navigation.replace('ClienteHome');
      } else if (perfil?.rol === 'mesero') {
        navigation.replace('MeseroHome');
      } else {
        Alert.alert('Error', 'Rol no reconocido');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Correo"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Ingresar" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff'
  },
  title: {
    fontSize: 24, marginBottom: 20, textAlign: 'center'
  },
  input: {
    height: 40, borderWidth: 1, borderColor: '#ccc', marginBottom: 12, paddingHorizontal: 10
  }
});
