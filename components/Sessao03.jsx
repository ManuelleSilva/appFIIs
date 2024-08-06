import { Text, View, StyleSheet, Image } from 'react-native';

export default function Sessao03() {
    return (
        <View style={styles.sessao03}>
            <Image
                source={require('./../assets/EVBI11.png')}
                style={styles.image}
            />
            <Text style={styles.texto}>Último Rendimento R$ 0,08</Text>
            <Text style={styles.texto}>P/VP 1,00</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    sessao03: {
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