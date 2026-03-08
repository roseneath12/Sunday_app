import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// ⭐ Define the exact shape of your saved data
type GratitudeRecord = {
  date: string;
  entries: string[];
};

export default function HistoryScreen() {
  const [history, setHistory] = useState<GratitudeRecord[]>([]);

  useEffect(() => {
    async function loadHistory() {
      const stored = await AsyncStorage.getItem('gratitudeHistory');
      if (stored) {
        const parsed: GratitudeRecord[] = JSON.parse(stored);
        setHistory(parsed);
      }
    }
    loadHistory();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <ThemedText type="title">Your Gratitude History</ThemedText>

      {history.length === 0 && (
        <ThemedText type="default" style={{ marginTop: 20 }}>
          No entries yet. Your saved reflections will appear here.
        </ThemedText>
      )}

      {history.map((item, index) => (
        <ThemedView key={index} style={styles.entryBlock}>
          <ThemedText type="subtitle">{item.date}</ThemedText>

          {item.entries.map((entry, i) => (
            <ThemedText key={i} type="default">
              • {entry}
            </ThemedText>
          ))}
        </ThemedView>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40
  },
  entryBlock: {
    marginTop: 20,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ff2891',
    borderRadius: 10,
  },
});