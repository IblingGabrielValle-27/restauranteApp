import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = {
  goBack: () => void;
};

type Item = {
  id: string;
  type: 'reservation' | 'order';
  details: string;
  image: any;
};

const VerTodo = () => {
  const navigation = useNavigation<NavigationProp>();

  const items: Item[] = [
    {
      id: '1',
      type: 'reservation',
      details: 'Mesa 5, 2025-05-20, 19:00, 4 personas',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9zXJNyANS8TG8NHjHX4hUdaU_Q6VQSKaMQg&s', 
    },
    {
      id: '2',
      type: 'order',
      details: 'Pizza Margherita x2, Mesa 3',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9zXJNyANS8TG8NHjHX4hUdaU_Q6VQSKaMQg&s', 
    },
    {
      id: '3',
      type: 'reservation',
      details: 'Mesa 2, 2025-05-20, 20:00, 2 personas',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9zXJNyANS8TG8NHjHX4hUdaU_Q6VQSKaMQg&s', 
    },
    {
      id: '4',
      type: 'order',
      details: 'Pasta Carbonara x1, Mesa 7',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9zXJNyANS8TG8NHjHX4hUdaU_Q6VQSKaMQg&s', 
    },
  ];

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.item}>
      <Image
        source={item.image}
        style={styles.itemImage}
        resizeMode="contain"
      />
      <View style={styles.itemDetails}>
        <Text style={styles.itemType}>{item.type === 'reservation' ? 'Reserva' : 'Pedido'}</Text>
        <Text style={styles.itemText}>{item.details}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Volver</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Ver Todo</Text>
        <View style={styles.placeholder} />
      </View>

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default VerTodo;

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
  item: {
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
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemType: {
    fontSize: 18,
    color: '#00cc00',
    fontWeight: '600',
  },
  itemText: {
    fontSize: 16,
    color: '#fff',
  },
});
