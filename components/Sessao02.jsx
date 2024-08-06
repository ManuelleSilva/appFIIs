import { Text, View, StyleSheet, Image } from 'react-native';

export default function Sessao02() {
    return (
        <View style={styles.sessao02}>
            <Image
                source={require('./../assets/BCFF11.png')}
                style={styles.image}
            />
            <Text style={styles.texto}>Último Rendimento R$ 0,07</Text>
            <Text style={styles.texto}>P/VP 0,88</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    sessao02: {
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