import { Text, View, StyleSheet, Image } from 'react-native';

export default function Sessao05() {
    return (
        <View style={styles.sessao05}>
            <Image
                source={require('./../assets/VINO11.png')}
                style={styles.image}
            />
            <Text style={styles.texto}>Último Rendimento R$ R$ 0,05</Text>
            <Text style={styles.texto}>P/VP 0,57</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    sessao05: {
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