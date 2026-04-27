import { useRouter } from 'expo-router';
import { Button, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Occasion Eats
      </ThemedText>
      <ThemedText style={styles.tagline}>
        Find the perfect restaurant for any occasion — stress-free.
      </ThemedText>
      <Button title="Start" onPress={() => router.push('/quiz')} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 16,
  },
  title: {
    textAlign: 'center',
  },
  tagline: {
    textAlign: 'center',
    marginBottom: 16,
  },
});
