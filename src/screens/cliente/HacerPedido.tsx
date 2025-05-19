import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = {
  navigate: (screen: string) => void;
  goBack: () => void;
};

type MenuItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const HacerPedido = () => {
  const navigation = useNavigation<NavigationProp>();

  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: '1',
      name: 'Pizza Margherita',
      price: 12.99,
      image: 'https://via.placeholder.com/50?text=Pizza',
      quantity: 0,
    },
    {
      id: '2',
      name: 'Pasta Carbonara',
      price: 10.99,
      image: 'https://via.placeholder.com/50?text=Pasta',
      quantity: 0,
    },
    {
      id: '3',
      name: 'Ensalada César',
      price: 8.99,
      image: 'https://via.placeholder.com/50?text=Salad',
      quantity: 0,
    },
    {
      id: '4',
      name: 'Jugo de Naranja',
      price: 3.99,
      image: 'https://via.placeholder.com/50?text=Juice',
      quantity: 0,
    },
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return menuItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleSubmitOrder = () => {
    const hasItems = menuItems.some((item) => item.quantity > 0);
    if (!hasItems) {
      alert('Por favor, selecciona al menos un elemento del menú.');
      return;
    }
    navigation.navigate('OrderConfirmation');
  };

  const renderMenuItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.menuItem}>
      <Image
        source={{ uri: item.image }}
        style={styles.menuImage}
        resizeMode="contain"
      />
      <View style={styles.menuDetails}>
        <Text style={styles.menuName}>{item.name}</Text>
        <Text style={styles.menuPrice}>${item.price.toFixed(2)}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => updateQuantity(item.id, -1)}
        >
          <Text style={styles.quantityText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityNumber}>{item.quantity}</Text>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => updateQuantity(item.id, 1)}
        >
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Volver</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Hacer Pedido</Text>
        <View style={styles.placeholder} />
      </View>

      <FlatList
        data={menuItems}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.menuList}
      />

      <View style={styles.summary}>
        <Text style={styles.summaryText}>Total: ${calculateTotal()}</Text>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmitOrder}
        >
          <Text style={styles.submitButtonText}>Confirmar Pedido</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HacerPedido;

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
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#006400',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 5,
  },
  quantityText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityNumber: {
    color: '#fff',
    fontSize: 18,
    width: 30,
    textAlign: 'center',
  },
  summary: {
    padding: 20,
    backgroundColor: '#1a1a1a',
    borderTopWidth: 1,
    borderTopColor: '#333',
    alignItems: 'center',
  },
  summaryText: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#006400',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});