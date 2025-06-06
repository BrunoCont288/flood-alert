import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ControlScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ação e Controle</Text>
      <Button title="Ativar Sirene" onPress={() => alert('Sirene ativada!')} />
      <Button title="Fechar Comporta" onPress={() => alert('Comporta fechada!')} />
      <Button title="Ver Histórico" onPress={() => navigation.navigate('History')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
});