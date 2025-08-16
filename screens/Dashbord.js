// import { View, Text,StyleSheet } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'

// const Dashbord = () => {
//   return (
//     <SafeAreaView style={styles.safecontainer} >
//       <View style={styles.headerContainer}>
//       <View>
//       <Text style={styles.header}>Dashbord</Text>
//     </View>
//     </View>
//     </SafeAreaView>
    
//   )
// }

// export default Dashbord

// const styles= StyleSheet.create({

// safecontainer:{
//   flex:1,
//   backgroundColor:'white',
//   borderRadius:12,
//   // borderWidth:2,
//   // borderColor:'black',
//   margin:10,

// },
//  headerContainer: {
//     backgroundColor: '#95bfebff', // iOS style blue, tu apne theme ke hisaab se change kar
//     paddingVertical: 15,
//     paddingHorizontal: 10,
//     shadowColor: '#000', // iOS shadow
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 4, // Android shadow
//     borderBottomLeftRadius: 12,
//     borderBottomRightRadius: 12,
//   },
// header:{
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'black',
//     textAlign: 'center',
// }
  
// });



import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';


const marathiBooks = [
  { 
    id: '1', 
    title: 'Shyamchi Aai', 
    author: 'Sane Guruji', 
    image: require('../Assets/marathi_Img/shyam.jpg'), 
  },
  { 
    id: '2', 
    title: 'Kosala', 
    author: 'Bhalchandra Nemade',
    image: require('../Assets/marathi_Img/kosala.jpg'), 
  },
  { 
    id: '3', 
    title: 'Mrutyunjay', 
    author: 'Shivaji Sawant',
   image: require('../Assets/marathi_Img/mrutunjay.jpg'), 
  },
  { 
    id: '4', 
    title: 'Yayati', 
    author: 'V. S. Khandekar',
   image: require('../Assets/marathi_Img/yayati.jpg'),
  },
];

const hindiBooks=[

  // {
  //   id:'1',
  //   title:
  //   author:
  //   image:
  // }
];

// Dummy Screens for Drawer
import { FlatList } from 'react-native';
import { Image } from 'react-native';

const MarathiScreen = () => (
  <SafeAreaView style={{ flex: 1, padding: 10 }}>
    <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>Marathi Books</Text>
    <FlatList
      data={marathiBooks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.bookItem}>
          <Image 
        source={item.image} // Yahan pe change kiya
        style={styles.bookImage}
        resizeMode="contain"
      />
          <Text style={styles.bookTitle}>{item.title}</Text>
          <Text style={styles.bookAuthor}>by {item.author}</Text>
        </View>
      )}
    />
  </SafeAreaView>
);

const HindiScreen = () => (
  <SafeAreaView style={styles.center}>
    <Text style={styles.screenText}>Hindi Content</Text>
  </SafeAreaView>
);

const EnglishScreen = () => (
  <SafeAreaView style={styles.center}>
    <Text style={styles.screenText}>English Content</Text>
  </SafeAreaView>
);

const LogoutScreen = () => (
  <SafeAreaView style={styles.center}>
    <Text style={styles.screenText}>You have logged out</Text>
  </SafeAreaView>
);

// Custom Drawer with Icons
const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
      <DrawerItem
        label="Home"
        icon={() => <Icon name="home" size={22} color="#4a4a4a" />}
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="Marathi"
        icon={() => <Icon name="language" size={22} color="#4a4a4a" />}
        onPress={() => props.navigation.navigate('Marathi')}
      />
      <DrawerItem
        label="Hindi"
        icon={() => <Icon name="language" size={22} color="#4a4a4a" />}
        onPress={() => props.navigation.navigate('Hindi')}
      />
      <DrawerItem
        label="English"
        icon={() => <Icon name="language" size={22} color="#4a4a4a" />}
        onPress={() => props.navigation.navigate('English')}
      />
      <DrawerItem
        label="Logout"
        icon={() => <Icon name="logout" size={22} color="#4a4a4a" />}
        onPress={() => props.navigation.navigate('Logout')}
      />
    </View>
  </DrawerContentScrollView>
);

// Main Dashboard Home Screen
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safecontainer}>
      {/* Gradient Header */}
      <LinearGradient colors={['#4facfe', '#00f2fe']} style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.header}>Dashboard</Text>
        <View style={{ width: 28 }} />
      </LinearGradient>

      {/* Main Content */}
      <View style={styles.center}>
        <Text style={styles.screenText}>Welcome to Dashboard</Text>
      </View>
    </SafeAreaView>
  );
};

// Drawer Navigator
const Drawer = createDrawerNavigator();

const Dashboard = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerStyle: {
          backgroundColor: '#fff',
          width: 250,
        },
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          color: '#333',
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Marathi" component={MarathiScreen} />
      <Drawer.Screen name="Hindi" component={HindiScreen} />
      <Drawer.Screen name="English" component={EnglishScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  safecontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    paddingVertical: 15,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  screenText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },

  bookItem: {
  padding: 12,
  marginVertical: 6,
  marginHorizontal: 10,
  backgroundColor: '#f0f0f0',
  borderRadius: 8,
  width: '95%',
},
bookTitle: {
  fontSize: 16,
  fontWeight: '600',
  color: '#333',
},
bookAuthor: {
  fontSize: 14,
  color: '#666',
},
bookImage: {
  width: '100%',
  height: undefined,
  aspectRatio: 1,
  borderRadius: 8,
  marginBottom: 8,
},

});
