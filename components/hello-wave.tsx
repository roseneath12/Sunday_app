import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export function HelloWave() {
  // Start at normal size
  const scale = useSharedValue(1);

  React.useEffect(() => {
    // Warm hug animation: 1 → 1.15 → 1 → repeat
    scale.value = withRepeat(
      withTiming(1.15, { duration: 600 }),
      -1,   // infinite hugs
      true  // reverse (hug in → hug out)
    );
  }, []);

  // Apply the scale animation
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.Text style={[{ fontSize: 20 }, animatedStyle]}>
      🤗
    </Animated.Text>
  );
}