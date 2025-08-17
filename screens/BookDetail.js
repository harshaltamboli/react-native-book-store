// screens/BookDetail.js
import React from 'react';
import { SafeAreaView, ScrollView, Text, Image, StyleSheet } from 'react-native';

const BookDetail = ({ route }) => {
  const { book } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Image source={book.image} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>by {book.author}</Text>
        <Text style={styles.content}>{book.content || 'Content not available'}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fafafa' },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 15 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333', textAlign: 'center', marginBottom: 5 },
  author: { fontSize: 18, color: '#777', textAlign: 'center', marginBottom: 15 },
  content: { fontSize: 16, color: '#444', lineHeight: 24, textAlign: 'justify' },
});
