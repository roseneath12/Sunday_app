import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import AsyncStorage from '@react-native-async-storage/async-storage'; // <-- ADDED
import { Image } from 'expo-image';
import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function HomeScreen() {
  const [entry1, setEntry1] = useState('');
  const [entry2, setEntry2] = useState('');
  const [entry3, setEntry3] = useState('');
  const day = new Date().toLocaleDateString('en-GB', { weekday: 'long' });

  // 🌿 STEP 5 — Save entries by date
  async function saveEntries() {
    const today = new Date().toISOString().split('T')[0];

    const newRecord = {
      date: today,
      entries: [entry1, entry2, entry3],
    };

    const existing = await AsyncStorage.getItem('gratitudeHistory');
    const history = existing ? JSON.parse(existing) : [];

    history.push(newRecord);

    await AsyncStorage.setItem('gratitudeHistory', JSON.stringify(history));

    // Clear inputs after saving
    setEntry1('');
    setEntry2('');
    setEntry3('');
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#f8cdef', dark: '#491e3e' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">It is {day} !</ThemedText>
        <HelloWave />
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="default">Take a moment to breathe and think about your day. 🌿 </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="default">Write three things that made you smile or feel good today. ✏️</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">I am grateful for: </ThemedText>
      </ThemedView>
      
      <TextInput
        style={styles.inputBox}
        placeholder="1. Something that felt good..."
        placeholderTextColor="#999"
        value={entry1}
        onChangeText={setEntry1}
      />

      <TextInput
        style={styles.inputBox}
        placeholder="2. Another positive moment..."
        placeholderTextColor="#999"
        value={entry2}
        onChangeText={setEntry2}
      />

      <TextInput
        style={styles.inputBox}
        placeholder="3. One more thing that made you smile..."
        placeholderTextColor="#999"
        value={entry3}
        onChangeText={setEntry3}
      />

      {/* SAVE BUTTON */}
      <ThemedText
        type="defaultSemiBold"
        style={{ marginTop: 20 }}
        onPress={saveEntries}
      >
        Save today’s gratitude
      </ThemedText>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  inputSection: {
    gap: 10,
    marginTop: 10,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#ff2891',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
});