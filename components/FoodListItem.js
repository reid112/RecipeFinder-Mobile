import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';

export default function FoodListItem({title, category, area, image}) {
  return (
      <TouchableOpacity style={styles.row}>
        <Image style={styles.image} source={{uri: image}} />
        <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{category}/{area}</Text>
        </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    elevation: 1,
    borderRadius: 2,
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 16,
    marginLeft: 14,
    marginRight: 14,
    marginTop: 0,
    marginBottom: 6,
  },
  image: {
    width: 50, 
    height: 50
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    textAlignVertical: 'bottom',
    includeFontPadding: false,
    flex: 0,
    fontSize: 20,
    paddingLeft: 10,
  },
  description: {
    textAlignVertical: 'top',
    includeFontPadding: false,
    flex: 0,
    fontSize: 14,
    paddingLeft: 10,
  }
});
