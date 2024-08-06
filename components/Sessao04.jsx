import { Text, View, StyleSheet, Image } from 'react-native';

export default function Sessao04() {
    return (
        <View style={styles.sessao04}>
            <Image
                source={require('./../assets/VGIR11.png')}
                style={styles.image}
            />
            <Text style={styles.texto}>Último Rendimento R$ 0,10</Text>
            <Text style={styles.texto}>P/VP 1,03</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    sessao04: {
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