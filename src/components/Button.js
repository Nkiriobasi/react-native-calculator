import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions  } from 'react-native';

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;


const Button = ({ onPress, text, size, theme }) => {

    const buttonStyles = [styles.button];
    const textStyles = [styles.textPrimary, styles.textWeight];

    if (size === "double") {
        buttonStyles.push(styles.buttonDouble);
    }

    if (theme === "secondary") {
        buttonStyles.push(styles.buttonSecondary);
        textStyles.push(styles.textSecondary);
    } else if (theme === "accent") {
        buttonStyles.push(styles.buttonAccent);
    }

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
            <Text style={textStyles}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    textWeight: {
        fontWeight: 'bold'
    },
    textPrimary: {
        color: "#fff",
        fontSize: 25
    },
    textSecondary: {
        color: "#060606"
    },
    buttonSecondary: {
        backgroundColor: "#a6a6a6"
    },
    buttonAccent: {
        backgroundColor: "#f09a36"
    },
    button: {
        backgroundColor: "#333333",
        flex: 1,
        height: Math.floor(buttonWidth - 10),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Math.floor(buttonWidth),
        margin: 5
    },
    buttonDouble: {
        width: screen.width / 2 - 10,
        flex: 0,
        alignItems: "flex-start",
        paddingLeft: 40
    },
});

export default Button;
