/* eslint-disable prettier/prettier */
import { Animated, StyleSheet, useWindowDimensions, View } from 'react-native'
import React from 'react'

const Paginator = ({data, scrollX}) => {
    const width = useWindowDimensions().width;

  return (
    <View style={styles.dotContainer}>
      {
        data.map((_, i) => {

            const inputRange = [ (i-1) * width, i * width, (i + 1) * width];
            
            const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [10, 10, 10],
                extrapolate: 'clamp',
            });

            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp',
            });

            return (
                <Animated.View 
                    style={[
                        styles.dot, 
                        {
                            width: dotWidth,
                            opacity,
                        },
                    ]} 
                    key={i.toString()}
                />
            );
        })
      }
    </View>
  )
}

export default Paginator

const styles = StyleSheet.create({
    dotContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 20,
    },
    dot: {
        height: 10, 
        borderRadius: 5,
        backgroundColor: "black",
        marginHorizontal: 8,
    }
});