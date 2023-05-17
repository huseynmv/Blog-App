import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import BlogContext from '../store/BlogContext';

const BlogDetail = ({route}) => {
  const {blogs} = useContext(BlogContext);

  const selectedBlog = blogs.find(blog => blog.postId === route.params.postId);
  return (
    <ScrollView>
      <Text>{selectedBlog.content}</Text>
    </ScrollView>
  );
};

export default BlogDetail;

const styles = StyleSheet.create({});
