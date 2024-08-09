import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'
import styles from "./MainScreenStyle"

const MainScreen = () => {
    return (
        <View style={styles.main_screen}>
            <ScrollView style={styles.main_screen_display}>
                <Text style={styles.main_screen_display_text}>122345</Text>
            </ScrollView>
            <View style={styles.main_screen_keypad}>

              <View style={styles.main_screen_keypad_row}>
                    <Pressable>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg1_button}>AC</Text>
                        </View>
                    </Pressable>
                    <Pressable>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg2_button}>( )</Text>
                        </View>
                    </Pressable>
                    <Pressable>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg2_button}>%</Text>
                        </View>
                    </Pressable>
                    <Pressable>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg2_button}>/</Text>
                        </View>
                    </Pressable>
                </View>

                <View style={styles.main_screen_keypad_row}>
                    <Pressable>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>7</Text>
                        </View>
                    </Pressable>
                    <Pressable>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg2_button}>8</Text>
                        </View>
                    </Pressable>
                    <Pressable>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg2_button}>9</Text>
                        </View>
                    </Pressable>
                    <Pressable>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg2_button}>*</Text>
                        </View>
                    </Pressable>
                </View>

                <View style={styles.main_screen_keypad_row}>
                    <Pressable>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>4</Text>
                        </View>
                    </Pressable>
                    <Pressable>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg2_button}>5</Text>
                        </View>
                    </Pressable>
                    <Pressable>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg2_button}>6</Text>
                        </View>
                    </Pressable>
                    <Pressable>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg2_button}>%</Text>
                        </View>
                    </Pressable>
                </View>

                <View style={styles.main_screen_keypad_row}>
                    <Pressable>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>7</Text>
                        </View>
                    </Pressable>
                    <Pressable>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg2_button}>8</Text>
                        </View>
                    </Pressable>
                    <Pressable>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg2_button}>9</Text>
                        </View>
                    </Pressable>
                    <Pressable>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg2_button}>*</Text>
                        </View>
                    </Pressable>
                </View>

                <View style={styles.main_screen_keypad_row}>
                    <Pressable>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>7</Text>
                        </View>
                    </Pressable>
                    <Pressable>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg2_button}>8</Text>
                        </View>
                    </Pressable>
                    <Pressable>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg2_button}>9</Text>
                        </View>
                    </Pressable>
                    <Pressable>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg2_button}>*</Text>
                        </View>
                    </Pressable>
                </View>

            </View>
        </View>
    )
}

export default MainScreen


