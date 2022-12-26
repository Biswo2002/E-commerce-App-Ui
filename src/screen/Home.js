import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Home = () => {

  const Discount = [
    {
      id: 'IMG_1',
      Image: require('../assets/image/ADD4.png'),
    },
    {
      id: 'IMG_2',
      Image: require('../assets/image/ADD1.png'),
    },
    {
      id: 'IMG_3',
      Image: require('../assets/image/ADD2.png'),
    },
    {
      id: 'IMG_4',
      Image: require('../assets/image/ADD3.png'),
    },
    {
      id: 'IMG_5',
      Image: require('../assets/image/ADD5.png'),
    },
    {
      id: 'IMG_6',
      Image: require('../assets/image/ADD4.png'),
    },
  ]

  const Products = [
    {
      id: 'product_1',
      Title: 'Shoes',
      Shoe: <MaterialCommunityIcons name='shoe-sneaker' size={30} color='#000' style={{ paddingLeft: 10 }} />
    },
    {
      id: 'product_2',
      Title: 'Watch',
      Watch: <Ionicons name='watch' size={30} color='#000' style={{ paddingLeft: 10 }} />
    },
    {
      id: 'product_3',
      Title: 'Table-Chair',
      Wallet: <MaterialCommunityIcons name='table-chair' size={25} color='#000' style={{ paddingLeft: 10 }} />
    },
    {
      id: 'product_4',
      Title: 'Wallet',
      Wallet: <Fontisto name='wallet' size={25} color='#000' style={{ paddingLeft: 10 }} />
    },
    {
      id: 'product_5',
      Title: 'Shirt',
      Shoe: <Ionicons name='shirt' size={30} color='#000' style={{ paddingLeft: 10 }} />
    },
    {
      id: 'product_6',
      Title: 'Laptop',
      Watch: <Entypo name='laptop' size={30} color='#000' style={{ paddingLeft: 10 }} />
    },
    {
      id: 'product_7',
      Title: 'Mobile-Tab',
      Wallet: <Entypo name='tablet-mobile-combo' size={25} color='#000' style={{ paddingLeft: 10 }} />
    },
    {
      id: 'product_8',
      Title: 'Book',
      Wallet: <Entypo name='book' size={25} color='#000' style={{ paddingLeft: 10 }} />
    },
  ]

  const DemoContainer = [
    {
      id: 'd-1',
      Image: require('../assets/image/Shoe.png'),
      Brand: "Nike Shoes",
      Price: '$12.01',
      Trend: 'New',
      color: '#EAF9B9'
    },
    {
      id: 'd-2',
      Image: require('../assets/image/Sofa.png'),
      Brand: "Nike Shoes",
      Price: '$55.09',
      Trend: 'New',
      color: '#F8E3E2',

    },
    {
      id: 'd-3',
      Image: require('../assets/image/Shoe.png'),
      Brand: "Nike Shoes",
      Price: '$12.01',
      Trend: 'New',
      color: '#EAF9B9'
    },
    {
      id: 'd-4',
      Image: require('../assets/image/Sofa.png'),
      Brand: "Nike Shoes",
      Price: '$55.09',
      Trend: 'New',
      color: '#F8E3E2',

    },
    {
      id: 'd-5',
      Image: require('../assets/image/W3.png'),
      Brand: "Nike Shoes",
      Price: '$12.01',
      Trend: 'New',
      color: "#C7F0FC"
      // color: "#EADED5"
    },
    {
      id: 'd-6',
      Image: require('../assets/image/Shirt.png'),
      Brand: "Nike Shoes",
      Price: '$12.01',
      Trend: 'New',
      color: '#F1E8A8'
    },
  ]

  return (
    <SafeAreaView style={styles.Main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >


        <View style={styles.FirstContainer}>
          <View style={styles.IconContainer}>
            <FontAwesome name='bars' size={22} color='#F91891' />
          </View>
          <View style={{}}>
            <Text style={styles.Home}>Home</Text>
          </View>
          <View style={styles.RightContainer}>
            <View style={styles.BellContainer}>
              <FontAwesome name='bell' size={20} color='#F91891' />
            </View>
            <Image source={{ uri: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1670834677~exp=1670835277~hmac=0887e683412e61b0797403d762557206e1c44b0c6f3f05ae471e07a1b9984163' }}
              style={styles.LogoImg} />
          </View>
        </View>
        <View style={styles.MainSearchBox}>
          <View style={styles.SearchBox}>
            <TextInput placeholder='searching..' />
            <EvilIcons name='search' size={30} color="gray" style={{ padding: 6, paddingLeft: 200 }} />
          </View>
          <View style={styles.FilterBox}>
            <Octicons name='filter' size={20} color="#fff" />
          </View>
        </View>
        <View style={styles.HeaderAd}>
          <FlatList
            data={Discount}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <ImageBackground source={item?.Image}
                  style={styles.ADDImage} imageStyle={{ resizeMode: 'cover', borderRadius: 20 }}>
                  <Pressable style={styles.StarContainer}>
                    <Entypo name='star' color={'#F91891'} size={25} />
                  </Pressable>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
          <Entypo name='dots-three-horizontal' size={30} color='#000' />
        </View>
        <View style={styles.SecondContainer}>
          <TouchableOpacity style={styles.AllContainer}>
            <FontAwesome5 name='border-all' size={20} color='#F91891' />
            <Text style={styles.ALLText}>All</Text>
          </TouchableOpacity>
          <View style={styles.Products}>
            <FlatList
              data={Products}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.ShoeContainer}>
                  {item?.Watch}
                  {item?.Shoe}
                  {item?.Wallet}
                  <Text style={styles.ShoeText}>{item?.Title}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View style={styles.ThirdContainer}>
          <Text style={styles.Popular}>Popular</Text>
          <Pressable>
            <Text style={styles.ViewText}>View All</Text>
          </Pressable>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <FlatList
            data={DemoContainer}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity style={[styles.DemoContainer,
              { backgroundColor: item.color }
              ]}>
                <ImageBackground source={item?.Image}
                  style={styles.DemoShoe}>
                  <View style={styles.NewContainer}>
                    <Text style={styles.New}>{item?.Trend}</Text>
                  </View>
                  <View style={styles.PriceContainer}>
                    <Text style={styles.Nike}>{item?.Brand}</Text>
                    <Text style={styles.Price}>{item?.Price}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
          {/* <FlatList
            numColumns={2}
            data={DemoContainer}
            renderItem={({item}) => (
              <TouchableOpacity>
                <View style={[styles.shoecontainer,{backgroundColor:item.color}]}>
                  <View style={styles.shoeview}>
                    <Text style={styles.shoetext}>{item?.Trend}</Text>
                  </View>
                  <View style={styles.imgview}>
                    <Image source={item.Image} style={styles.img} />
                  </View>
                  <View style={{marginLeft: 10}}>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      {item.Brand}
                    </Text>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      {item.Price}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          /> */}
        </View>
        <View style={styles.Footer}>
          <TouchableOpacity>
            <Entypo name='home' size={30} color='red' />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name='category' size={30} color='#000' />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name='bells' size={30} color='#000' />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name='user' size={30} color='#000' />
          </TouchableOpacity>
          {/* <AntDesign name='setting' size={30} color='#000' /> */}
          <TouchableOpacity>
            <AntDesign name='shoppingcart' size={30} color='#000' />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({

  Main: {
    // backgroundColor: '#F6F7F9',
    backgroundColor: '#F9f9f9',
    flex: 1,
  },
  FirstContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10
  },

  IconContainer: {
    backgroundColor: '#fff',
    width: 35,
    height: 35,
    padding: 8,
    borderRadius: 10
  },
  Home: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000'
  },
  RightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  BellContainer: {
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    padding: 5,
    borderRadius: 10
  },
  LogoImg: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginLeft: 10
  },
  MainSearchBox: {
    marginHorizontal: 20,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  SearchBox: {
    width: 320,
    height: 40,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 10,
    backgroundColor: '#ffff',
    flexDirection: 'row',
  },
  FilterBox: {
    width: 40,
    height: 40,
    backgroundColor: "#FF7A86",
    padding: 10,
    borderRadius: 10
  },
  HeaderAd: {
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 10
  },
  ADDImage: {
    width: 360,
    height: 205,
    marginHorizontal: 10,
  },
  StarContainer: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    padding: 7,
    borderRadius: 5,
  },
  AllContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: 65,
    height: 45,
    paddingHorizontal: 6,
    alignItems: 'center',
    borderRadius: 5
  },
  ALLText: {
    fontWeight: 'bold',
    color: 'red',
    paddingLeft: 10,
    fontSize: 18
  },
  SecondContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    marginTop: 10,
    marginHorizontal: 20
  },
  ShoeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 120,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  ShoeText: {
    fontWeight: '600',
    paddingLeft: 10,
  },
  Products: {
    marginHorizontal: 10,
  },
  ThirdContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 25,
  },
  Popular: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  ViewText: {
    fontSize: 16,
    fontWeight: '600',
  },
  DemoContainer: {
    width: 180,
    height: 220,
    // backgroundColor: '#EAF9B9',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  DemoShoe: {
    width: 250,
    height: 150,
  },
  NewContainer: {
    backgroundColor: "#fff",
    width: 60,
    alignItems: 'center',
    borderRadius: 5,
    // marginTop:10,
    // marginLeft:10,
  },
  New: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  PriceContainer: {
    marginTop: 130,
    marginHorizontal: 10,
  },
  Nike: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 17
  },
  Price: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 17
  },
  Footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderWidth: 1,
   borderTopLeftRadius:10,
   borderTopRightRadius:10,
  }

})
