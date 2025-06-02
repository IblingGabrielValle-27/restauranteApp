import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = {
  goBack: () => void;
};

type Stat = {
  id: string;
  title: string;
  value: string;
  image: any;
};

const EstadisticasConsumo = () => {
  const navigation = useNavigation<NavigationProp>();

  const stats: Stat[] = [
    {
      id: '1',
      title: 'Total Gastado',
      value: '$150.75',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Q9Thl5MVZIBQp6gvDpjxand6rdo9bqnt2Q&s',
    },
    {
      id: '2',
      title: 'Número de Pedidos',
      value: '12',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Q9Thl5MVZIBQp6gvDpjxand6rdo9bqnt2Q&s', 
    },
    {
      id: '3',
      title: 'Plato Favorito',
      value: 'Pizza Margherita',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Q9Thl5MVZIBQp6gvDpjxand6rdo9bqnt2Q&s',
    },
  ];

  const renderStat = ({ item }: { item: Stat }) => (
    <View style={styles.stat}>
      <Image
        source={item.image}
        style={styles.statImage}
        resizeMode="contain"
      />
      <View style={styles.statDetails}>
        <Text style={styles.statTitle}>{item.title}</Text>
        <Text style={styles.statValue}>{item.value}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Volver</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Estadísticas de Consumo</Text>
        <View style={styles.placeholder} />
      </View>

      <FlatList
        data={stats}
        renderItem={renderStat}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default EstadisticasConsumo;

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
  stat: {
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
  statImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  statDetails: {
    flex: 1,
  },
  statTitle: {
    fontSize: 18,
    color: '#00cc00',
    fontWeight: '600',
  },
  statValue: {
    fontSize: 16,
    color: '#fff',
  },
});
