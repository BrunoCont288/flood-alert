import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MonitoringScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monitoramento de Enchentes</Text>
      <Text>Status: Sem risco de enchentes no momento.</Text>
      <Button title="Ver Alertas" onPress={() => navigation.navigate('Alerts')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
});