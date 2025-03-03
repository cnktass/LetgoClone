import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { Product } from '../../models';
import styles from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import {useNavigation} from "@react-navigation/native"

type ProductProps = {
  product: Product;
  prodType: string;
};

function Index({ product, prodType }: ProductProps) {
  const navgiation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navgiation.navigate("ProductDetails",{product:product}) } style={prodType === "Favorite" ? styles.favorite : styles.main}>
      <View style={prodType === "Favorite" ? styles.favoriteView : styles.mainView}>
        {/* Ürün Resmi */}
        <Image
          source={{ uri: product.image }}
          resizeMode="stretch"
          style={prodType === "Favorite" ? styles.favoriteImage : styles.mainImg}
        />

        {/* "One Cikan" Etiketi (Sadece Favorite modunda gösterilir) */}
        {prodType === "Favorite" && (
          <View style={styles.labeledFav}>
            <Text style={{ fontSize: 9, fontWeight: '500' }}>One Cikan</Text>
          </View>
        )}

        {/* Kalp İkonu (Favori butonu) */}
        <TouchableOpacity style={{ position: 'absolute', right: 4, bottom: 5 }}>
          <AntDesign name="heart" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default Index;