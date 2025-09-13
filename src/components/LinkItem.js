import React from 'react';
import { Pressable, Text, StyleSheet, Linking, View } from 'react-native';

export default function LinkItem({ item }) {
  return (
    <Pressable style={styles.card} onPress={() => Linking.openURL(item.url)}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.url}>{item.url}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#111827', padding: 14, borderRadius: 10, borderWidth: 1, borderColor: '#1f2937' },
  title: { color: '#e5e7eb', fontWeight: '600', fontSize: 16 },
  url: { color: '#9ca3af', marginTop: 2, fontSize: 12 }
});
