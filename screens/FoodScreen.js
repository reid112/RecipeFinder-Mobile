import React, { useState } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default function FoodScreen() {

  const [meals, setMeals] = useState([
    {
      key: "1",
      idMeal: "1",
      strMeal: "Beef Lo Mein 1",
      strArea: "Chinese",
      strCategory: "Beef",
      strMealThumb: "https://www.themealdb.com/images/media/meals/1529444830.jpg/preview",
      strYoutube: "https://www.youtube.com/watch?v=ZT9LSsNXXe0"
    },
    {
      key: "2",
      idMeal: "2",
      strMeal: "Beef Lo Mein 2",
      strArea: "Chinese",
      strCategory: "Beef",
      strMealThumb: "https://www.themealdb.com/images/media/meals/1529444830.jpg/preview",
      strYoutube: "https://www.youtube.com/watch?v=ZT9LSsNXXe0"
    },
    {
      key: "3",
      idMeal: "3",
      strMeal: "Beef Lo Mein 3",
      strArea: "Chinese",
      strCategory: "Beef",
      strMealThumb: "https://www.themealdb.com/images/media/meals/1529444830.jpg/preview",
      strYoutube: "https://www.youtube.com/watch?v=ZT9LSsNXXe0"
    },
    {
      key: "4",
      idMeal: "4",
      strMeal: "Beef Lo Mein 4",
      strArea: "Chinese",
      strCategory: "Beef",
      strMealThumb: "https://www.themealdb.com/images/media/meals/1529444830.jpg/preview",
      strYoutube: "https://www.youtube.com/watch?v=ZT9LSsNXXe0"
    },
    {
      key: "5",
      idMeal: "5",
      strMeal: "Beef Lo Mein 5",
      strArea: "Chinese",
      strCategory: "Beef",
      strMealThumb: "https://www.themealdb.com/images/media/meals/1529444830.jpg/preview",
      strYoutube: "https://www.youtube.com/watch?v=ZT9LSsNXXe0"
    },
  ])

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={({item}) => ( 
          <Text>{item.strMeal}</Text> 
        )}
      />
    </View>
  );
}

FoodScreen.navigationOptions = {
  header: null,
};


// function handleLearnMorePress() {
//   WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
});
