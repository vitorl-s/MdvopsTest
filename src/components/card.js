import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image,Button, TouchableOpacity } from 'react-native';
import { Card } from "react-native-elements";
import CircleImage from './Circle_image';

export default class CardComponent extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Card containerStyle = {styles.card}>
                    <View style={styles.insideContainer}>
                        {this.props.circle}
                        <View style={{ flexDirection: 'column',alignSelf: 'center'}}>
                            <Text style={styles.text}> {this.props.exercise.toUpperCase()}</Text>
                            <View style={{ flexDirection: 'row',marginTop:5}}> 
                                <Image source={require('../../img/ic_bike.png')} style = {{marginLeft:35}}/>
                                <Text style = {styles.infoText}> {this.props.calories + ' Kcal'} </Text>
                                <Image source={require('../../img/ic_time.png')} style = {{ marginLeft: 15,marginTop:2 }}/>
                                <Text style = {styles.infoText}> {this.props.time} </Text>
                                <Image source={require('../../img/ic_balance.png')} style={{ marginLeft: 15, }} />
                                <Text style = {styles.infoText}> {this.props.weight}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft:35, marginTop: 10}}>
                                <TouchableOpacity style={[styles.round, styles.red]}>
                                    <Text style={styles.buttonText}> HOJE</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.round, styles.green]}>
                                    <Text style={styles.buttonText}> ONTEM</Text>
                                </TouchableOpacity>
                            </View> 
                        </View>
                    </View>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232C34',
        flexDirection: 'column',
    },
    card:{
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        backgroundColor: '#323C47',
        marginTop: 10,
        borderWidth:0,
        borderRadius: 13,
        height:110
    },
    text:{
        alignSelf: 'flex-start',
        marginLeft: 30,
        color:'#FEFFFF',
        marginBottom: 5,
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold',
    },
    insideContainer:{
        alignItems: 'flex-start', 
        flexDirection: 'row',
        marginLeft: 10
    },
    infoText:{
        color: '#FEFFFF',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 9,
    },
    round: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 55,
        height: 13,
        borderRadius: 25
    },
    red: {
        backgroundColor: '#FD3C29',
        zIndex: 2
    },
    green: {
        backgroundColor: '#19B996',
        marginLeft: 10
    },
    buttonText: {
        color: '#FEFFFF',
        fontFamily: 'Montserrat',
        fontSize: 8,
    },
});
