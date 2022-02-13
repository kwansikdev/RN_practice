import AsyncStorage from '@react-native-community/async-storage';

const key = 'todos';

const todoStorage = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem(key);

      if (!rawTodos) {
        throw new Error('No saved todos');
      }

      const savedTodos = JSON.parse(rawTodos);

      return savedTodos;
    } catch (error) {
      throw new Error('Faild to save todos');
    }
  },

  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      throw new Error('Faild to save todos');
    }
  },
};

export default todoStorage;
