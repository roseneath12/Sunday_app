import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        <ThemedText type="title">About This App</ThemedText>

        <ThemedText style={styles.paragraph}>
          This app was created with a simple purpose: to bring a moment of
          gratitude into everyday life. In a world that moves quickly, it’s easy
          to overlook the small things that make our days brighter.
        </ThemedText>

        <ThemedText style={styles.paragraph}>
          Every feature is designed to feel warm, calm, and human. From the
          welcoming animations to the daily messages, the goal is to create a
          tiny pocket of positivity you can carry with you.
        </ThemedText>

        <ThemedText style={styles.paragraph}>
          Thank you for being here. Your presence makes this space meaningful.
        </ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
  },
});