import { useState } from 'react';
import { Button, Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const MOOD_OPTIONS = ['Italian', 'Asian', 'Mexican', 'American', 'Indian', 'Surprise me'];
const OCCASION_OPTIONS = ['Date', 'Family', 'Friends', 'Solo', 'Business'];
const BUDGET_OPTIONS = ['$', '$$', '$$$', '$$$$'];
const DISTANCE_OPTIONS = ['Walking', 'Under 5 mi', 'Under 15 mi', 'Any'];

export default function QuizScreen() {
  const [mood, setMood] = useState<string | null>(null);
  const [occasion, setOccasion] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);
  const [distance, setDistance] = useState<string | null>(null);

  const allAnswered = mood && occasion && budget && distance;

  function handleSubmit() {
    console.log('Quiz answers:', { mood, occasion, budget, distance });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText type="title" style={styles.heading}>
        Let’s find your spot
      </ThemedText>

      <Question
        label="1. What are you in the mood for?"
        options={MOOD_OPTIONS}
        selected={mood}
        onSelect={setMood}
      />
      <Question
        label="2. What’s the occasion?"
        options={OCCASION_OPTIONS}
        selected={occasion}
        onSelect={setOccasion}
      />
      <Question
        label="3. What’s your budget?"
        options={BUDGET_OPTIONS}
        selected={budget}
        onSelect={setBudget}
      />
      <Question
        label="4. How far can you travel?"
        options={DISTANCE_OPTIONS}
        selected={distance}
        onSelect={setDistance}
      />

      <View style={styles.submit}>
        <Button title="Find Restaurants" onPress={handleSubmit} disabled={!allAnswered} />
      </View>
    </ScrollView>
  );
}

type QuestionProps = {
  label: string;
  options: string[];
  selected: string | null;
  onSelect: (value: string) => void;
};

function Question({ label, options, selected, onSelect }: QuestionProps) {
  return (
    <ThemedView style={styles.question}>
      <ThemedText type="subtitle">{label}</ThemedText>
      <View style={styles.chipRow}>
        {options.map((option) => {
          const isSelected = option === selected;
          return (
            <Pressable
              key={option}
              onPress={() => onSelect(option)}
              style={[styles.chip, isSelected && styles.chipSelected]}>
              <ThemedText style={isSelected ? styles.chipTextSelected : undefined}>
                {option}
              </ThemedText>
            </Pressable>
          );
        })}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 24,
  },
  heading: {
    textAlign: 'center',
    marginTop: 12,
  },
  question: {
    gap: 12,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#888',
  },
  chipSelected: {
    backgroundColor: '#0a7ea4',
    borderColor: '#0a7ea4',
  },
  chipTextSelected: {
    color: 'white',
  },
  submit: {
    marginTop: 12,
    marginBottom: 40,
  },
});
