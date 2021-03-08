import React, { useState, useEffect, Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    Image,
    Text,


} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import '../../config/global.js';
import { Button } from 'react-native-elements';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';

import { Picker } from '@react-native-community/picker';
import DatePicker from 'react-native-datepicker';

const screenWidth = Dimensions.get('window').width;
const image = require('../../img/sitelogo.png');
const menuImg = require('../../img/close.png');




const App = (props) => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selectedItem: {},
    //         date: "2016-05-15",
    //         selectedValue: '',
    //         keyword: '',
    //     }
    // }

    const [date, setDate] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [keyword, setKeyword] = useState('');

    // setSelectedValue(itemValue) {
    //     console.log("fff", itemValue);
    //     this.setState({
    //         selectedValue: itemValue
    //     })
    // }
    // selected(selected) {
    //     this.setState({
    //         selectedItem: selected
    //     })
    // }
    // setDate(d) {

    //     //console.log(d);
    //     //if()https://stg.forathlete.jp/api/search_media?opt_keyword=ee&opt_date=2020-10-19&opt_player=3&opt_page=0&opt_size=30

    //     this.setState({ date: d })

    // }
    function FindPage(props, flag) {

        if (flag == 1) {
            global.opt_keyword = keyword;
            global.opt_date = date;
            global.opt_player = selectedValue;
        }
        // props.navigation.navigate('Main');

        props.navigation.navigate('Main', { SelKeyword: keyword });
    }
    // setKeyword(txt){
    //     console.log(txt);
    //     this.setState({ keyword: txt })
    // }
    return (

        <View style={styles.container}>

            <ScrollView >

                <View style={styles.menuView}>
                    <View>
                        <TouchableOpacity onPress={() => { FindPage(props, 0) }}>
                            <Image source={menuImg} style={{ width: 32, height: 32 }}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.avatarContainer}>
                        <Image style={styles.avatar} source={image} />
                    </View>
                    <Text style={styles.menu}>{global.FindPlay[global.Lang]}</Text>

                    <View style={{
                        flexDirection: 'row', width: global.w - 40 * global.hs, height: 52 * global.hs, marginRight: '1%', backgroundColor: 'hsla(0,0%,100%,.3)',
                        padding: '1%', alignItems: 'center', borderColor: '#ecf0f4', borderWidth: 0.5, borderRadius: 5,
                        color: "#FFF"
                    }}>
                        <Icon name="calendar" size={25} color="#FFF" style={{ marginLeft: 10, marginRight: 15 }} />

                        <Picker

                            style={{ height: 52 * global.hs, width: global.w - 40 * global.hs, backgroundColor: "#FFF", paddingLeft: 15, marginLeft: 15 }}

                            selectedValue={selectedValue}

                            mode="dropdown"

                            style={{ width: '100%', zIndex: 99999, fontSize: 20 }}
                            itemStyle={{ fontSize: 20, color: '#FFF' }}

                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item value='' label={global.FindPlaySel[global.Lang]} />
                            {
                                global.PlayList.map((val, index) => {

                                    return (
                                        <Picker.Item value={val.user_id} label={val.user.name} />
                                    );
                                }
                                )

                            }
                        </Picker>
                    </View>

                    <Text style={styles.menu}>{global.FindKey[global.Lang]}</Text>

                    <View style={{
                        flexDirection: 'row', width: global.w - 40 * global.hs, height: 52 * global.hs, backgroundColor: 'hsla(0,0%,100%,.3)',
                        alignItems: 'center', borderColor: '#ecf0f4', borderWidth: 0.5, borderRadius: 5, fontSize: 20, paddingLeft: 15,
                        color: "#FFF"
                    }}>
                        <Icon name="search" size={25} color="#FFF" style={{ marginRight: 15 }} />
                        <TextInput icon="person-add" placeholder={global.FindKeySel[global.Lang]} style={{ fontSize: 16, color: "#FFF" }}
                            onChangeText={(text) => setKeyword(text)}
                            value={keyword}
                        >
                        </TextInput>
                    </View>

                    <Text style={styles.menu}>{global.FindDate[global.Lang]}</Text>
                    <View style={{
                        flexDirection: 'row', width: global.w - 40 * global.hs, height: 52 * global.hs, backgroundColor: 'hsla(0,0%,100%,.3)',
                        alignItems: 'center', borderColor: '#ecf0f4', borderWidth: 0.5, borderRadius: 5, fontSize: 20, paddingLeft: 15,
                        color: "#FFF", justifyContent: "space-between"
                    }}>
                        <Icon name="calendar" size={25} color="#FFF" style={{ marginRight: 15 }} />

                        <DatePicker

                            style={{ width: global.w - 140 * global.hs }}
                            date={date} // Initial date from state
                            mode="date" // The enum of date, datetime and time
                            placeholder="キーワードで検索"
                            format="DD-MM-YYYY"
                            // minDate="01-01-2016"
                            // maxDate="01-01-2019"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            showIcon={false}
                            customStyles={{
                                dateIcon: {
                                    //display: 'none',
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,

                                    marginLeft: 0,
                                },
                                dateText: {
                                    color: "#FFF",

                                    fontSize: 16
                                },
                                dateInput: {
                                    marginLeft: 0,
                                    borderWidth: 0,
                                    fontSize: 16,
                                    alignItems: "flex-start",
                                    color: "#FFF"
                                },
                            }}

                            onDateChange={(date) => { setDate(date) }}

                        />
                        <Icon name="close" size={25} color="#FFF" style={{ marginRight: 15 }} onPress={() => { setDate('') }} />

                    </View>


                </View>

            </ScrollView>

            <View style={styles.btnView}>
                <Button
                    title={global.FindPost[global.Lang]}
                    color="red"
                    titleStyle={{ fontSize: 17 }}
                    buttonStyle={styles.btn}
                    onPress={() => { FindPage(props, 1) }}
                />
            </View>
        </View >
    )
}

export default App;

const styles = StyleSheet.create({
    menuView: {
        padding: 20
    },
    menu: { color: "#FFF", fontSize: 18, marginBottom: 10, marginTop: 15 },

    avatarContainer: {
        marginBottom: 20,
        marginTop: 30,
        width: screenWidth,
        //marginLeft: 30,
        alignItems: "center"
    },
    avatar: {
        width: 280,
        height: 75,
        flex: 1,
        marginBottom: 10
    },
    container: {
        flex: 1,
        backgroundColor: "#000"

    },

    btnView: {
        height: 65, alignItems: "center", backgroundColor: "#000",
        width: screenWidth, flexDirection: "row",
        justifyContent: 'center'
    },
    btn: { height: 45, backgroundColor: '#EA1B23', marginTop: 10, borderRadius: 20, width: screenWidth - 30 },
    ico40: { width: 40, height: 40 },


    textInput: {
        height: 40,
        borderColor: '#CCC', borderWidth: 1,

        marginTop: 8,
        borderRadius: 5,
        padding: 3,
    },


});
