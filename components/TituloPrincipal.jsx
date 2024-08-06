import { Text, View, StyleSheet } from 'react-native';

export default function TituloPrincipal() {
    return (
        <View style={styles.tituloPrincipal}>
            <Text style={styles.texto}>OS MELHORES FUNDOS DE INVESTIMENTOS IMOBILIARIOS</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tituloPrincipal: {
        marginTop: 40,
        color: "blue",
        alignItems: "center",
    },
    texto: {
        fontSize: 25,
        textAlign: "center",
        color: "#fff",
        fontWeight: 'bold',
    }
});