import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from "./MainScreenStyle"

const MainScreen = () => {

    const [value, setValue] = useState("0")
    const [bracketopen, setBracketOpen] = useState(false)
    const scrollViewRef = useRef();

    const handlePress = (val) => {
        if (val === "AC") {
            setValue("0")
        }
        else if (val === "=") {
            try {
                if ((value.match(/\(/g) || []).length == (value.match(/\)/g) || []).length) {
                    console.log("equal");

                    if (value.slice(-1) === "+" || value.slice(-1) === "-" || value.slice(-1) === "*" || value.slice(-1) === "/" || value.slice(-1) === "%" || value.slice(-1) === ".") {
                        setValue(`${eval(value.replace("()", "(0)").slice(0, -1))}`)
                    }
                    else {
                        setValue(`${eval(value.replace("()", "(0)"))}`)
                    }
                }
                // else {
                //     console.log("not equal");

                // }
            }
            catch (e) {
                setValue("Error")
            }

        }
        else if (val === "back") {
            setValue(value.slice(0, -1))

        }
        else if (val === "()") {
            if (value === "0") {
                setValue("(")
                setBracketOpen(true)
            }
            else if (value.slice(-1) === "+" || value.slice(-1) === "-" || value.slice(-1) === "*" || value.slice(-1) === "/" || value.slice(-1) === "%" || value.slice(-1) === ".") {
                setValue(value + "(")
                setBracketOpen(true)
            }
            else {
                if (bracketopen === true) {
                    setValue(value + ")")
                    setBracketOpen(false)
                }
                else {
                    setValue(value + "(")
                    setBracketOpen(true)
                }
            }

        }
        else if(value === "Error"){
            setValue(val)
        }
        else {
            if (value === "0") {
                if (isNaN(val)) {
                    setValue(value + val)
                }
                else {

                    setValue(val)
                }
            }
            else if (isNaN(val)) {
                if (value.slice(-1) === "+" || value.slice(-1) === "-" || value.slice(-1) === "*" || value.slice(-1) === "/" || value.slice(-1) === "%" || value.slice(-1) === ".") {
                    setValue(value.slice(0, -1) + val)
                }
                else {
                    setValue(value + val)
                }
            }
            else {
                setValue(value + val)
            }
        }
    }
    return (
        <View style={styles.main_screen}>
            <ScrollView style={styles.main_screen_display}
                ref={scrollViewRef} onContentSizeChange={() => scrollViewRef.current.scrollToEnd({
                    animated: true
                })}>
                <Text style={styles.main_screen_display_text}>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
            </ScrollView>
            <View style={styles.main_screen_keypad}>

                <View style={styles.main_screen_keypad_row}>
                    <Pressable onPress={() => handlePress("AC")}>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg1_button}>AC</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress("()")}>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg2_button}>( )</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress("%")}>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg2_button}>%</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress("/")}>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg2_button}>/</Text>
                        </View>
                    </Pressable>
                </View>

                <View style={styles.main_screen_keypad_row}>
                    <Pressable onPress={() => handlePress("7")}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg1_button}>7</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress("8")}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg2_button}>8</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress("9")}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg2_button}>9</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress("*")}>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg2_button}>*</Text>
                        </View>
                    </Pressable>
                </View>

                <View style={styles.main_screen_keypad_row}>
                    <Pressable onPress={() => handlePress("4")}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg1_button}>4</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress("5")}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg2_button}>5</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress("6")}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg2_button}>6</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress("-")}>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg2_button}>-</Text>
                        </View>
                    </Pressable>
                </View>

                <View style={styles.main_screen_keypad_row}>
                    <Pressable onPress={() => handlePress("1")}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg1_button}>1</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress("2")}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg2_button}>2</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress("3")}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg2_button}>3</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress("+")}>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg2_button}>+</Text>
                        </View>
                    </Pressable>
                </View>

                <View style={styles.main_screen_keypad_row}>
                    <Pressable onPress={() => handlePress("0")}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg1_button}>0</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress(".")}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg2_button}>.</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress("back")}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg2_button}>&lt;</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress("=")}>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg2_button}>=</Text>
                        </View>
                    </Pressable>
                </View>

            </View>
        </View>
    )
}

export default MainScreen


