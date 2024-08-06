import { Text, View, StyleSheet, Image } from 'react-native';

export default function Sessao07() {
    return (
        <View style={styles.sessao07}>
            <Image
                source={require('./../assets/ALZM11.png')}
                style={styles.image}
            />
            <Text style={styles.texto}>Último Rendimento R$ 0,09</Text>
            <Text style={styles.texto}>P/VP 0,92</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    sessao07: {
        marginTop: 40,
        alignItems: "center", 
    },
    image: {
        marginBottom: 10,
    },
    texto: {
        fontSize: 18,
        color: "#fff",
        fontWeight: 'bold',
        marginBottom: 5, 
    }
});