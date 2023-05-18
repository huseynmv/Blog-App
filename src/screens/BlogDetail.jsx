import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import BlogContext from '../store/BlogContext';
import RenderHTML from 'react-native-render-html';
import {useWindowDimensions} from 'react-native';

const BlogDetail = ({route}) => {
  const {blogs} = useContext(BlogContext);

  const selectedBlog = blogs.find(blog => blog.postId === route.params.postId);
  const source = {
    html: `
      ${selectedBlog.content}
    `,
  };
  const {width} = useWindowDimensions();
  return (
    <ScrollView>
      <RenderHTML source={source} contentWidth={width} />
    </ScrollView>
  );
};

export default BlogDetail;

const styles = StyleSheet.create({});
