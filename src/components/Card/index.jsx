import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Index = ({item, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={{marginHorizontal: 20}}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.totalReadingTime} mins. read</Text>
          <Text style={styles.summary}>{item.summary}</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Detail', {
              postId: item.postId,
            });
          }}>
          <View style={styles.banner}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={{
                uri: item.banner,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  title: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  wrapper: {
    width: '100%',
    backgroundColor: '#C8C8C8',

    borderRadius: 12,
    // borderWidth: 1,
  },
  container: {
    padding: 32,
    backgroundColor: '#f5f5f5',
  },
  summary: {
    marginTop: 8,
  },
  banner: {
    width: '100%',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
  },
  info: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#C8C8C8',
    marginBottom: 7,
  },
});
