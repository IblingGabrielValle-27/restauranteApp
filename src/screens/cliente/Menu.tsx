import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = {
  goBack: () => void;
};

type MenuItem = {
  id: string;
  name: string;
  price: number;
  image: any;
};

const Menu = () => {
  const navigation = useNavigation<NavigationProp>();

  const menuItems: MenuItem[] = [
    {
      id: '1',
      name: 'Pizza Margherita',
      price: 12.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewdvz0HQg1CNrO1U2TTbBfyzw5d9CIINWpw&s', 
    },
    {
      id: '2',
      name: 'Pasta Carbonara',
      price: 10.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewdvz0HQg1CNrO1U2TTbBfyzw5d9CIINWpw&s', 
    },
    {
      id: '3',
      name: 'Ensalada César',
      price: 8.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewdvz0HQg1CNrO1U2TTbBfyzw5d9CIINWpw&s', 
    },
    {
      id: '4',
      name: 'Jugo de Naranja',
      price: 3.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewdvz0HQg1CNrO1U2TTbBfyzw5d9CIINWpw&s', 
    },
  ];

  const renderMenuItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.menuItem}>
      <Image
        source={item.image}
        style={styles.menuImage}
        resizeMode="contain"
      />
      <View style={styles.menuDetails}>
        <Text style={styles.menuName}>{item.name}</Text>
        <Text style={styles.menuPrice}>${item.price.toFixed(2)}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Volver</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Menú</Text>
        <View style={styles.placeholder} />
      </View>

      <FlatList
        data={menuItems}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.menuList}
      />
    </SafeAreaView>
  );
};

export default Menu;

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
  menuList: {
    padding: 20,
  },
  menuItem: {
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
  menuImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  menuDetails: {
    flex: 1,
  },
  menuName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  menuPrice: {
    fontSize: 16,
    color: '#00cc00',
  },
});
