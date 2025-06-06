import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Eventos</Text>
      <Text>- 02/06: Alerta de enchente - Nível Médio</Text>
      <Text>- 01/06: Sem incidentes</Text>
      <Text>- 31/05: Alerta de enchente - Nível Baixo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
});