import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-root-toast'

export const addToCart = async id => {
    let itemArray = await AsyncStorage.getItem("cartItems");
    itemArray = JSON.parse(itemArray)
    if (itemArray) { // get the list of objects
        let array = itemArray 

        //loop throught the list of objects and check if the object to added is already in the list.... 
        //loop if yes, return already added, if no, return added successfully .
        
        if(array.includes(id)) {
             Toast.show("Item already added", {
                    duration: 3000,
            });
        } else {
            array.push(id) // add item to the list of objects if it's not 
                try {
                    await AsyncStorage.setItem("cartItems", JSON.stringify(array));
                    Toast.show("Item added successfully", {
                        duration: 3000,
                    })
                } catch (error) {
                    return error;
                }
        }
    }
    else {
        let array = []; //if the array is empty
        array.push(id);
        try {
            await AsyncStorage.setItem("cartItems", JSON.stringify(array));
            Toast.show("Item added successfully", {
                duration: 3000,
            })
            navigation.navigate("Home");
        } catch (error) {
            return error;
        }
    }
}

