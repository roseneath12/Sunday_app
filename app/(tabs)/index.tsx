import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { StyleSheet, TextInput } from 'react-native';

export default function HomeScreen() {
  const day = new Date().toLocaleDateString('en-GB', { weekday: 'long' });

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
  />

  <TextInput
    style={styles.inputBox}
    placeholder="2. Another positive moment..."
    placeholderTextColor="#999"
  />

<TextInput
  style={styles.inputBox}
  placeholder="3. One more thing that made you smile..."
  placeholderTextColor="#999"
/>
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
