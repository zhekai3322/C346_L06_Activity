import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { datasource } from './Data.js';
import { Alert } from 'react-native';

const Edit = ({navigation, route}) => {
    const [letter, setLetter] = useState(route.params.key);
    const [type, setType] = useState(route.params.type);

    return (
        <View style={{ padding: 10 }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Letter:</Text>
                <TextInput
                    style={{ borderWidth: 1 }}
                    onChangeText={(text) => setLetter(text)}
                    value={letter}
                    maxLength={1}
                />
            </View>

            <View style={{ padding: 10 }}>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value) => setType(value)}
                    items={[
                        { label: "Vowels", value: "Vowels" },
                        { label: "Consonants", value: "Consonants" },
                    ]}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button title="Save"
                  onPress={() => {
                    let indexnum = 1
                    if(route.params.type==="Vowels"){
                        indexnum = 0;
                    }
                    datasource[indexnum].data[route.params.index].key=letter;
                    navigation.navigate("Home")
                  }
                }
                />
                <Button title="Delete"
                   onPress={() => {
                     let indexnum = 1
                     if(route.params.type==="Vowels"){
                         indexnum = 0;
                     }
                     Alert.alert("Are you sure?",'',
                       [{text: 'Yes', onPress: ( )=>{
                         datasource[indexnum].data.splice(route.params.index,1);
                         navigation.navigate("Home")
                       }},
                       {text: 'No' } ] )
                   }
                }
                />
            </View>
        </View>
    );
};

export default Edit;
