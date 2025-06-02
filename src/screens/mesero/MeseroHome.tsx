import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = {
  navigate: (screen: string) => void;
  replace: (screen: string) => void;
};

const MeseroHome = () => {
  const navigation = useNavigation<NavigationProp>();

  const features = [
    {
      id: '1',
      title: 'Reservar Mesa',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Q9Thl5MVZIBQp6gvDpjxand6rdo9bqnt2Q&s', 
      route: 'ReservarMesa',
    },
    {
      id: '2',
      title: 'Hacer Pedido',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Q9Thl5MVZIBQp6gvDpjxand6rdo9bqnt2Q&s', 
      route: 'HacerPedidoMesero',
    },
    {
      id: '3',
      title: 'Ver Todo',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Q9Thl5MVZIBQp6gvDpjxand6rdo9bqnt2Q&s', 
      route: 'VerTodo',
    },
  ];

  const handleLogout = () => {
    navigation.replace('Login');
  };

  const renderFeature = ({ item }: { item: { id: string; title: string; image: string; route: string } }) => (
    <TouchableOpacity
      style={styles.featureButton}
      onPress={() => navigation.navigate(item.route)}
    >
      <Image
        source={{ uri: item.image }} 
        style={styles.featureImage}
        resizeMode="contain"
      />
      <Text style={styles.featureText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bienvenido, Mesero</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Q9Thl5MVZIBQp6gvDpjxand6rdo9bqnt2Q&s' }} 
            style={styles.logoutImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={features}
        renderItem={renderFeature}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.featureList}
      />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Restaurante App © 2025</Text>
      </View>
    </SafeAreaView>
  );
};

export default MeseroHome;

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
  logoutButton: {
    padding: 10,
    backgroundColor: '#ff4444',
    borderRadius: 8,
  },
  logoutImage: {
    width: 24,
    height: 24,
  },
  featureList: {
    padding: 20,
  },
  featureButton: {
    flex: 1,
    backgroundColor: '#006400',
    margin: 10,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  featureImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  featureText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  footer: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  footerText: {
    color: '#666',
    fontSize: 12,
  },
});