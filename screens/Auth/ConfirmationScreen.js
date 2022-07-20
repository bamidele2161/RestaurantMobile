import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Button from '../../components/Button'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field'

const ConfirmationScreen = ({navigation}) => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({
    value,
    cellCount: 4
  });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })
  return (  
    <SafeAreaView className="mx-4">
      <View className="justify-center items-center flex-1 p-4 mt-6">
        <Text className="mb-6 font-bold color-[#00CCBB] text-2xl">Verification</Text>
        <Text className="text-center border my-6 text-base">Please enter the Verification code we send to your phone</Text>
        <CodeField 
          value={value}
          onChangeText={setValue}
          cellCount={4}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>
      <Button title="Confirm" onPress={() => navigation.navigate("Home")} />
    </SafeAreaView>
  )
}

export default ConfirmationScreen

const styles = StyleSheet.create({
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#00000030',
    textAlign: 'center',
    marginBottom: 30,
  },
  focusCell: {
    borderColor: '#00CCBB',
  },

});