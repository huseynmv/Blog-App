import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect} from 'react';
import BlogContext from '../store/BlogContext';

const BlogList = ({navigation}) => {
  const {blogs, fetchBlogs} = useContext(BlogContext);
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <View>
      <FlatList
        data={blogs}
        keyExtractor={item => item.postId.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detail', {
                postId: item.postId,
              })
            }>
            <View style={{backgroundColor: 'red', margin: 20}}>
              <Text>{item.title}</Text>
              {/* <Text>{item.description}</Text> */}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default BlogList;

const styles = StyleSheet.create({});
