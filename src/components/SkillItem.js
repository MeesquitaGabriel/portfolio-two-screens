import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SkillItem({ item }) {
  const pct = Math.max(0, Math.min(100, item.level));
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.level}>{pct}%</Text>
      </View>
      <View style={styles.bar}>
        <View style={[styles.fill, { width: pct + '%' }]} />
      </View>
      {item.children?.length ? (
        <View style={{ marginTop: 8, gap: 6 }}>
          {item.children.map((c) => (
            <View key={c.name} style={styles.childRow}>
              <Text style={styles.childName}>• {c.name}</Text>
              <Text style={styles.childLevel}>{c.level}%</Text>
            </View>
          ))}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#111827', padding: 14, borderRadius: 10, borderWidth: 1, borderColor: '#1f2937', marginHorizontal: 4 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { color: '#e5e7eb', fontWeight: '600' },
  level: { color: '#9ca3af' },
  bar: { height: 10, backgroundColor: '#1f2937', borderRadius: 6, overflow: 'hidden', marginTop: 8 },
  fill: { height: '100%', backgroundColor: '#10b981' },
  childRow: { flexDirection: 'row', justifyContent: 'space-between' },
  childName: { color: '#cbd5e1' },
  childLevel: { color: '#94a3b8' }
});
