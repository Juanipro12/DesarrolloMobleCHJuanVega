import {Button,StyleSheet,TextInput,View} from 'react-native'

export const AddItem = (props) => {
  const {cargarItem,onCargarList,value}=props
  
  return (
    <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        placeholder='Item de Lista'
        onChangeText={cargarItem}
        value={value}
        />
        <Button title='Agregar' onPress={onCargarList} />
    </View>
  )
}
const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    input:{
        width:200,
        borderBottomColor:"black",
        borderBottomWidth:1,
    }

})
export default AddItem;