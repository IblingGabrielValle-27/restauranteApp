import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = {
  goBack: () => void;
};

type PaymentMethod = {
  id: string;
  name: string;
  image: any;
};

const FormasPago = () => {
  const navigation = useNavigation<NavigationProp>();

  const paymentMethods: PaymentMethod[] = [
    {
      id: '1',
      name: 'Tarjeta de Crédito',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9X_zeDcqd6UJfYiEGrAmSbSSLPLGElMXXug&s'
    },
    {
      id: '2',
      name: 'Efectivo',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9X_zeDcqd6UJfYiEGrAmSbSSLPLGElMXXug&s'
    },
    {
      id: '3',
      name: 'Pago Móvil',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9X_zeDcqd6UJfYiEGrAmSbSSLPLGElMXXug&s'
    },
  ];

  const renderPaymentMethod = ({ item }: { item: PaymentMethod }) => (
    <View style={styles.method}>
      <Image
        source={item.image}
        style={styles.methodImage}
        resizeMode="contain"
      />
      <Text style={styles.methodText}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Volver</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Formas de Pago</Text>
        <View style={styles.placeholder} />
      </View>

      <FlatList
        data={paymentMethods}
        renderItem={renderPaymentMethod}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default FormasPago;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1a1a1a',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00cc00',
  },
  backButton: {
    fontSize: 18,
    color: '#00cc00',
  },
  placeholder: {
    width: 50,
  },
  list: {
    padding: 20,
  },
  method: {
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    marginBottom: 15,
    padding: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  methodImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  methodText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});

