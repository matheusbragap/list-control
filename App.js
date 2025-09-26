import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './global.css';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center gap-6 bg-white dark:bg-zinc-900">
      <View className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800">
        <Text className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Tailwind/NativeWind OK
        </Text>
        <Text className="mt-2 text-zinc-600 dark:text-zinc-300">
          Edite App.js e salve para recarregar.
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
