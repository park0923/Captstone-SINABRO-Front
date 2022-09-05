import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import fontkit from '@react-pdf/fontkit';

// Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4'
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   }
// });

// Create Document Component
const MyDocument  = () => {
    return(
        <Document>
            <Page size="A4" style={''}>
            <View style={''}>
                <Text>test #1</Text>
            </View>
            <View style={''}>
                <Text>Section #2</Text>
            </View>
            </Page>
        </Document>
    );
}

export default MyDocument ;
