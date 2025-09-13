import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import links from '../data/profile';
import LinkItem from '../components/LinkItem';

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={require('../../assets/avatar.png')} style={styles.avatar} />
      <Text style={styles.name}>{links.name}</Text>
      <Text style={styles.role}>{links.role}</Text>

      <FlatList
        data={links.links}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <LinkItem item={item} />}
        contentContainerStyle={{ gap: 12 }}
        style={{ width: '100%', marginTop: 16 }}
      />

      <Pressable style={styles.button} onPress={() => navigation.navigate('Skills')}>
        <Text style={styles.buttonText}>Ver Skills</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0b0b0f', alignItems: 'center', padding: 16 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginTop: 24, borderWidth: 2, borderColor: '#3b82f6' },
  name: { color: '#fff', fontSize: 22, fontWeight: '700', marginTop: 12 },
  role: { color: '#9aa0a6', fontSize: 14, marginTop: 4 },
  button: { marginTop: 16, backgroundColor: '#3b82f6', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 10 },
  buttonText: { color: '#fff', fontWeight: '600' }
});
