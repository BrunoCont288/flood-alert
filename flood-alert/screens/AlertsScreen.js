import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AlertsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alertas</Text>
      <Text>Não há alertas ativos no momento.</Text>
      <Button title="Ir para Controle" onPress={() => navigation.navigate('Control')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
});