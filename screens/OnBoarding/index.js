import { View, Text, SafeAreaView, FlatList, useWindowDimensions, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import BoardItem from './BoardItem'
import { board } from '../../utils/database'
import Paginator from './Paginator'

const OnBoarding = ({navigation}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const slidesRef = useRef();
    const scrollX = useRef(new Animated.Value(0)).current;

    const viewableItemschanged = useRef(({ viewableItems}) => {
        setCurrentIndex(viewableItems[0].index);
      }).current;

  const viewconfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
    const width = useWindowDimensions().width
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1" style={{width}}>
        <View className="bg-[#00CCBB] w-full" style={{flex: 1}}>
            <FlatList 
            data={board}
            horizontal
            pagingEnabled
            bounces={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <BoardItem item={item} navigation={navigation} slides={board}/> }
            keyExtractor={(item) => item.id}
            scrollX={scrollX}
            onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
              useNativeDriver: false,
            })}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemschanged}
            viewabilityConfig={viewconfig}
            ref={slidesRef}
            />
        </View>
        <View className="items-center justify-center flex-row h-20">
            <Paginator data={board} scrollX={scrollX}/>
            <View className="absolute left-[310px] py-2 px-4 rounded-md bg-[#131716] " >
                <Text className="text-white font-bold" onPress={() => navigation.replace('Started')}>Skip</Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default OnBoarding