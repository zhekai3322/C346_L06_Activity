import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Add = () => {
    const [letter, setLetter] = useState('');
    const [type, setType] = useState('');
    return (
        <View style={{ padding: 10 }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Letter:</Text>
                <TextInput style={{ borderWidth: 1 }} onChangeText={(text) => setLetter(text)}/>
            </View>

            <View style={{ padding: 10 }}>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value)=>setType(value)}
                    items={[
                        {label:"Vowels", value:"Vowels"},
                        {label:"Consonants", value:"Consonants"},
                    ]}
                />
            </View>
            <Button title="SUBMIT"/>
        </View>
    );
};

export default Add;
