import { useState } from 'react';
import {Button, Modal,StyleSheet, View,Text,FlatList, TouchableOpacity } from 'react-native';
import AddItem from './component/AddItem';

export default function App() {
  const [Item, setitem] = useState("")
  const [listItem, setlistItem] = useState([])
  const [ModalVisible, setmodalVisible] = useState(false)
  const [ItemSelect, setitemSelect] = useState({})
  const cargarItem=(e)=>setitem(e)
  const agregar = ()=>{
    setlistItem(list=>[...list,{id:Math.random().toString()*10,value:Item}])
    setitem("")
  }
  const deleteItem = (id)=>{
    setlistItem(items=>items.filter(item=>item.id!==id))
    setitemSelect({})
    setmodalVisible(!ModalVisible)
  }
  const modal =(id)=>{
    setitemSelect(listItem.find(item=>item.id===id))
    setmodalVisible(!ModalVisible)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
          <Modal 
            animationType="slide"
            transparent={true}
            visible={ModalVisible}
          >
            <View style={styles.modal}>
              <View style={styles.container}>
                <Text style={styles.textModal} >Estas seguro que quieres borrar?</Text>
                <Text style={styles.textModal}>{ItemSelect.value}</Text>
                <Button style={styles.buttonModal} title="Confirmar" onPress={()=>deleteItem(ItemSelect.id)} />
              </View>
            </View>
          </Modal>
            <View style={styles.container} >
            <AddItem
            style={styles.input}
              cargarItem={(e)=>cargarItem(e)}
              onCargarList={agregar}
              value={Item}
            />
            </View>

            <FlatList style={{height:"90%",width:"100%",marginTop:20}}
            data={listItem}
            renderItem={data=>(
              <TouchableOpacity onPress={()=>modal(data.item.id)} style={styles.item} >
                <Text style={{padding:10}}>{data.item.value}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item=>item.id}
            />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
  },
  container: {
    marginTop:"8%",
    width:"100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    flex:1,
    width:200,
},
  item:{
    flexDirection:'row',
    borderColor:'red',
    backgroundColor: "gray",
    borderRadius:5,
    borderWidth: 1,
    width:"100%",
    marginVertical:5
  },
  modal: {
    width: "100%", 
    height: "50%",
    justifyContent: 'center',
    alignSelf: 'center',
    margin: "50%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    self:"center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonModal: {
    backgroundColor: "#F194FF",
  },
  textModal: {
    margin:10,
    fontWeight: "bold",
    textAlign: "center"
  }


});

  

