import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import skills from '../data/skills';
import profile from '../data/profile';
import SkillItem from '../components/SkillItem';

export default function SkillsScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/avatar.png')} style={styles.avatar} />
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.role}>{profile.role}</Text>

      <FlatList
        data={skills}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <SkillItem item={item} />}
        contentContainerStyle={{ gap: 12, paddingVertical: 16 }}
        style={{ width: '100%' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0b0b0f', alignItems: 'center', padding: 16 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginTop: 24, borderWidth: 2, borderColor: '#10b981' },
  name: { color: '#fff', fontSize: 20, fontWeight: '700', marginTop: 10 },
  role: { color: '#9aa0a6', fontSize: 14, marginTop: 2 }
});
