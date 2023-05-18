import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import BlogContext from '../store/BlogContext';
import BlogCard from '../components/Card';

const BlogList = ({navigation}) => {
  const [isRefreshing, setisRefreshing] = useState(false);
  const [page, setpage] = useState(1);
  const {blogs, fetchBlogs, setblogs} = useContext(BlogContext);

  useEffect(() => {
    fetchBlogs(page);
    setpage(page + 1);
  }, []);

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={getData}
          //On Click of button load more data
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {loading ? (
            <ActivityIndicator color="white" style={{marginLeft: 8}} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: '#f5f5f5'}}>
      <FlatList
        data={blogs}
        keyExtractor={item => item.postId.toString()}
        renderItem={({item}) => (
          <BlogCard item={item} navigation={navigation} />
        )}
        onEndReached={() => {
          fetchBlogs(page);
          setpage(page + 1);
        }}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => {
              console.log('refresh start');
              setpage(1);
              console.log('fetching');
              fetchBlogs(page);
              console.log('fetch end');

              setpage(page + 1);
              console.log('refresh end');
            }}
          />
        }
      />
    </View>
  );
};

export default BlogList;

const styles = StyleSheet.create({});
