import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
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
      const { data: perfil } = await supabase
        .from('usuarios')
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
      <Image 
        source={require('../../assets/restaurant.jpg')} 
        style={styles.image} 
        resizeMode="cover"
      />

      <Text style={styles.title}>Bienvenido al Restaurante</Text>

      <TextInput
        placeholder="Correo"
        placeholderTextColor="#666"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#666"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.buttonContainer}>
        <Button title="Ingresar" onPress={handleLogin} color="#006400" />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Negro
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    color: '#006400', 
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
});
